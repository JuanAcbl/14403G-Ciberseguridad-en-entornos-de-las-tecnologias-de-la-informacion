/* ===========================================================================
 * quiz.js — Autoevaluación estilo Kahoot + Flashcards de repaso
 * ---------------------------------------------------------------------------
 * Datos en window.QUIZ[modId] = { temas: [ { id, titulo, test:[...], flashcards:[...] } ] }
 *   test:       { q, opciones:[4], correcta:índice0-3, explicacion }
 *   flashcards: { front, back }
 *
 * El menú permite ELEGIR uno o varios temas del módulo (casillas) y cuántas
 * preguntas/tarjetas entran en la sesión. Así puedes montar, por ejemplo, un
 * examen del tema 1 + el tema 8. Vale tanto para el Quiz como para Flashcards.
 *
 * Modo Quiz (Kahoot):
 *   - Una pregunta a pantalla completa, 4 opciones de colores.
 *   - Temporizador por pregunta; la puntuación premia la velocidad.
 *   - Feedback inmediato (verde/rojo) + explicación.
 *   - Orden secuencial o aleatorio (shuffle).
 *   - Pantalla final con puntuación; se guarda el mejor resultado por módulo.
 *
 * Modo Flashcards:
 *   - Tarjeta con anverso -> click para revelar el reverso.
 *   - Navegación y modo ordenado/aleatorio.
 * =========================================================================== */
(function (global) {
  "use strict";

  const TIEMPO_PREGUNTA = 20;      // segundos por pregunta
  const PUNTOS_BASE = 1000;        // puntos por acierto (se reduce con el tiempo)

  let overlay = null;
  let modId = null;
  let modo = "quiz";               // "quiz" | "flash"
  let items = [];                  // preguntas o flashcards (ya ordenadas)
  let idx = 0;
  let score = 0;
  let aciertos = 0;
  let timer = null;
  let tiempoRestante = 0;
  let respondida = false;
  let flashRevealed = false;

  // Estado del menú de selección (persiste mientras el overlay está abierto)
  let sel = {
    temas: new Set(),   // ids de temas marcados
    nQuiz: 20,          // nº de preguntas del quiz
    nFlash: 15,         // nº de flashcards
    orden: "rnd",       // "seq" | "rnd"
  };

  // ---- utilidades ----
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  function shuffle(arr) {
    const a = arr.slice();
    // Fisher-Yates con "aleatoriedad" a partir del reloj de la sesión
    let seed = (global.performance ? performance.now() : 1) | 0;
    const rnd = () => { seed = (seed * 1103515245 + 12345) & 0x7fffffff; return seed / 0x7fffffff; };
    for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(rnd() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
    return a;
  }

  const COLORS = ["opt-red", "opt-blue", "opt-yellow", "opt-green"];
  const SHAPES = ["bi-triangle-fill", "bi-diamond-fill", "bi-circle-fill", "bi-square-fill"];

  // ---- acceso a los datos (soporta el formato nuevo y el antiguo) ----
  /** Devuelve la lista de temas del módulo: [{id,titulo,test,flashcards}] */
  function temasDe(id) {
    const data = (global.QUIZ || {})[id];
    if (!data) return [];
    if (Array.isArray(data.temas)) return data.temas;
    // Compatibilidad con el formato antiguo (test/flashcards sueltos)
    if (data.test || data.flashcards) {
      return [{ id: "t1", titulo: "Todo el módulo", test: data.test || [], flashcards: data.flashcards || [] }];
    }
    return [];
  }

  /** Junta las preguntas (o flashcards) de los temas seleccionados. */
  function juntar(id, campo, temasIds) {
    const temas = temasDe(id);
    const set = temasIds && temasIds.size ? temasIds : null;
    const out = [];
    temas.forEach(t => {
      if (set && !set.has(t.id)) return;
      (t[campo] || []).forEach(x => out.push(x));
    });
    return out;
  }

  // =========================================================================
  //  Overlay
  // =========================================================================
  function ensureOverlay() {
    if (overlay) return overlay;
    overlay = document.createElement("div");
    overlay.className = "quiz-overlay";
    overlay.innerHTML = `<div class="quiz-inner"></div>`;
    document.body.appendChild(overlay);
    document.addEventListener("keydown", onKey);
    return overlay;
  }

  function onKey(e) {
    if (!overlay || !overlay.classList.contains("open")) return;
    if (e.key === "Escape") close();
    if (modo === "flash" && overlay.querySelector(".flash-game")) {
      if (e.key === " " || e.key === "Enter") { e.preventDefault(); toggleFlash(); }
      else if (e.key === "ArrowRight") flashGo(idx + 1);
      else if (e.key === "ArrowLeft") flashGo(idx - 1);
    } else if (modo === "quiz" && overlay.querySelector(".quiz-game") && !respondida && /^[1-4]$/.test(e.key)) {
      responder(parseInt(e.key, 10) - 1);
    }
  }

  // =========================================================================
  //  Pantalla de inicio (elegir temas, modo, cantidad y orden)
  // =========================================================================
  function openMenu(id) {
    modId = id;
    ensureOverlay();
    const mod = (global.MODULOS || []).find(m => m.id === id);
    const temas = temasDe(id);
    const best = global.Store.getTest(id, "quiz");

    // Por defecto, todos los temas seleccionados
    sel.temas = new Set(temas.map(t => t.id));
    sel.orden = "rnd";

    const filas = temas.map(t => {
      const nT = (t.test || []).length;
      const nF = (t.flashcards || []).length;
      return `
        <label class="quiz-tema" data-tema="${t.id}">
          <input type="checkbox" class="form-check-input tema-chk" value="${t.id}" checked>
          <span class="quiz-tema-txt">
            <span class="quiz-tema-title">${esc(t.titulo)}</span>
            <span class="quiz-tema-meta">${nT} test · ${nF} flashcards</span>
          </span>
        </label>`;
    }).join("");

    overlay.querySelector(".quiz-inner").innerHTML = `
      <div class="quiz-menu quiz-menu-scroll">
        <button class="btn btn-sm btn-outline-light quiz-close"><i class="bi bi-x-lg"></i></button>
        <div class="text-center mb-3">
          <div class="quiz-kicker">Autoevaluación</div>
          <h2 class="fw-bold mb-1">${mod ? esc(mod.titulo) : id}</h2>
          <div class="text-secondary">Módulo ${id}${best ? ` · Mejor: <span class="text-info fw-semibold">${best.aciertos}/${best.total}</span>` : ""}</div>
        </div>

        <div class="quiz-temas-card">
          <div class="d-flex justify-content-between align-items-center mb-2">
            <span class="fw-semibold"><i class="bi bi-list-check me-1"></i> Elige los temas a evaluar</span>
            <div class="btn-group btn-group-sm">
              <button class="btn btn-outline-light" id="selAll">Todos</button>
              <button class="btn btn-outline-light" id="selNone">Ninguno</button>
            </div>
          </div>
          <div class="quiz-temas-list">
            ${filas || '<div class="text-secondary small p-2">Este módulo aún no tiene preguntas.</div>'}
          </div>
          <div class="quiz-sel-summary small text-secondary mt-2" id="selSummary"></div>
        </div>

        <div class="quiz-opts-row">
          <div class="quiz-order-toggle">
            <span class="small text-secondary me-2">Orden:</span>
            <div class="btn-group btn-group-sm" role="group">
              <input type="radio" class="btn-check" name="qOrder" id="ordRnd" value="rnd" checked>
              <label class="btn btn-outline-light" for="ordRnd"><i class="bi bi-shuffle"></i> Aleatorio</label>
              <input type="radio" class="btn-check" name="qOrder" id="ordSeq" value="seq">
              <label class="btn btn-outline-light" for="ordSeq"><i class="bi bi-list-ol"></i> Ordenado</label>
            </div>
          </div>
        </div>

        <div class="row g-3 justify-content-center mt-1">
          <div class="col-12 col-md-6">
            <div class="quiz-choice">
              <i class="bi bi-controller"></i>
              <h4>Modo Quiz</h4>
              <p class="mb-2">Test contrarreloj con puntos. ¡Estilo Kahoot!</p>
              <div class="quiz-count">
                <label class="small text-secondary">Nº de preguntas: <span id="quizCountLbl">20</span></label>
                <input type="range" class="form-range" id="quizCount" min="5" max="50" step="5" value="20">
                <div class="small text-secondary" id="quizPool"></div>
              </div>
              <button class="btn btn-primary w-100 mt-2" data-start="quiz">
                <i class="bi bi-play-fill me-1"></i> Empezar Quiz
              </button>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="quiz-choice">
              <i class="bi bi-card-text"></i>
              <h4>Flashcards</h4>
              <p class="mb-2">Tarjetas de repaso: piensa y revela.</p>
              <div class="quiz-count">
                <label class="small text-secondary">Nº de tarjetas: <span id="flashCountLbl">15</span></label>
                <input type="range" class="form-range" id="flashCount" min="5" max="40" step="5" value="15">
                <div class="small text-secondary" id="flashPool"></div>
              </div>
              <button class="btn btn-success w-100 mt-2" data-start="flash">
                <i class="bi bi-play-fill me-1"></i> Empezar Flashcards
              </button>
            </div>
          </div>
        </div>
      </div>`;

    // ---- listeners del menú ----
    overlay.querySelector(".quiz-close").addEventListener("click", close);

    const chks = () => Array.from(overlay.querySelectorAll(".tema-chk"));
    function readTemas() {
      sel.temas = new Set(chks().filter(c => c.checked).map(c => c.value));
      refreshCounts();
    }
    function refreshCounts() {
      const poolQuiz = juntar(modId, "test", sel.temas).length;
      const poolFlash = juntar(modId, "flashcards", sel.temas).length;
      const nSel = sel.temas.size;
      const sum = overlay.querySelector("#selSummary");
      if (sum) sum.textContent = `${nSel} tema(s) · ${poolQuiz} preguntas y ${poolFlash} flashcards disponibles`;

      // ajustar tope de los sliders al pool disponible
      const qc = overlay.querySelector("#quizCount");
      const fc = overlay.querySelector("#flashCount");
      const setSlider = (input, pool, lbl, poolEl, sing) => {
        input.max = Math.max(5, pool);
        if (parseInt(input.value, 10) > pool) input.value = pool || 5;
        lbl.textContent = Math.min(parseInt(input.value, 10), pool || 0);
        input.disabled = pool === 0;
        poolEl.textContent = pool === 0 ? "Sin " + sing + " en los temas elegidos" : "de " + pool + " disponibles";
      };
      setSlider(qc, poolQuiz, overlay.querySelector("#quizCountLbl"), overlay.querySelector("#quizPool"), "preguntas");
      setSlider(fc, poolFlash, overlay.querySelector("#flashCountLbl"), overlay.querySelector("#flashPool"), "flashcards");
    }

    chks().forEach(c => c.addEventListener("change", readTemas));
    overlay.querySelector("#selAll")?.addEventListener("click", () => { chks().forEach(c => c.checked = true); readTemas(); });
    overlay.querySelector("#selNone")?.addEventListener("click", () => { chks().forEach(c => c.checked = false); readTemas(); });

    overlay.querySelector("#quizCount")?.addEventListener("input", (e) => {
      overlay.querySelector("#quizCountLbl").textContent = e.target.value;
    });
    overlay.querySelector("#flashCount")?.addEventListener("input", (e) => {
      overlay.querySelector("#flashCountLbl").textContent = e.target.value;
    });

    overlay.querySelectorAll("[data-start]").forEach(btn => {
      btn.addEventListener("click", () => {
        readTemas();
        sel.orden = overlay.querySelector('input[name="qOrder"]:checked')?.value || "rnd";
        if (btn.dataset.start === "quiz") {
          sel.nQuiz = parseInt(overlay.querySelector("#quizCount").value, 10);
          startQuiz();
        } else {
          sel.nFlash = parseInt(overlay.querySelector("#flashCount").value, 10);
          startFlash();
        }
      });
    });

    refreshCounts();
    overlay.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  // =========================================================================
  //  MODO QUIZ (Kahoot)
  // =========================================================================
  function startQuiz() {
    let pool = juntar(modId, "test", sel.temas);
    if (!pool.length) { alert("No hay preguntas en los temas seleccionados."); return; }
    modo = "quiz";
    if (sel.orden === "rnd") pool = shuffle(pool);
    items = pool.slice(0, Math.min(sel.nQuiz, pool.length));
    idx = 0; score = 0; aciertos = 0;
    renderQuestion();
  }

  function renderQuestion() {
    respondida = false;
    const q = items[idx];
    tiempoRestante = TIEMPO_PREGUNTA;

    overlay.querySelector(".quiz-inner").innerHTML = `
      <div class="quiz-game">
        <div class="quiz-top">
          <button class="btn btn-sm btn-outline-light quiz-close"><i class="bi bi-x-lg"></i></button>
          <div class="quiz-progress-info">Pregunta ${idx + 1} / ${items.length}</div>
          <div class="quiz-score"><i class="bi bi-star-fill text-warning"></i> <span id="qScore">${score}</span></div>
        </div>
        <div class="quiz-timerbar"><span id="qTimerBar"></span></div>
        <div class="quiz-question">
          <div class="quiz-timer-badge" id="qTimer">${tiempoRestante}</div>
          <h2>${esc(q.q)}</h2>
        </div>
        <div class="quiz-options">
          ${q.opciones.map((op, i) => `
            <button class="quiz-opt ${COLORS[i]}" data-i="${i}">
              <i class="bi ${SHAPES[i]}"></i>
              <span>${esc(op)}</span>
            </button>`).join("")}
        </div>
        <div class="quiz-feedback" id="qFeedback"></div>
      </div>`;

    overlay.querySelector(".quiz-close").addEventListener("click", close);
    overlay.querySelectorAll(".quiz-opt").forEach(b =>
      b.addEventListener("click", () => responder(parseInt(b.dataset.i, 10))));

    // animar barra de tiempo
    const bar = overlay.querySelector("#qTimerBar");
    requestAnimationFrame(() => { bar.style.transition = `width ${TIEMPO_PREGUNTA}s linear`; bar.style.width = "0%"; });

    clearInterval(timer);
    timer = setInterval(() => {
      tiempoRestante--;
      const t = overlay.querySelector("#qTimer");
      if (t) t.textContent = Math.max(0, tiempoRestante);
      if (tiempoRestante <= 0) { clearInterval(timer); responder(-1); }
    }, 1000);
  }

  function responder(elegida) {
    if (respondida) return;
    respondida = true;
    clearInterval(timer);
    const q = items[idx];
    const correcto = elegida === q.correcta;

    // puntos: base * (tiempo restante / total), mínimo 100 si acierta
    if (correcto) {
      aciertos++;
      const bonus = Math.round(PUNTOS_BASE * (tiempoRestante / TIEMPO_PREGUNTA));
      score += Math.max(100, bonus);
      const sc = overlay.querySelector("#qScore");
      if (sc) sc.textContent = score;
    }

    overlay.querySelectorAll(".quiz-opt").forEach(b => {
      const i = parseInt(b.dataset.i, 10);
      b.disabled = true;
      if (i === q.correcta) b.classList.add("correct");
      else if (i === elegida) b.classList.add("wrong");
      else b.classList.add("dim");
    });

    const fb = overlay.querySelector("#qFeedback");
    const titulo = elegida === -1 ? "⏱ ¡Tiempo!" : (correcto ? "✅ ¡Correcto!" : "❌ Incorrecto");
    fb.innerHTML = `
      <div class="quiz-fb-card ${correcto ? "ok" : "no"}">
        <strong>${titulo}</strong>
        <p class="mb-2 small">${esc(q.explicacion || "")}</p>
        <button class="btn btn-light btn-sm" id="qNext">${idx + 1 < items.length ? "Siguiente <i class='bi bi-arrow-right'></i>" : "Ver resultados"}</button>
      </div>`;
    fb.classList.add("show");
    const next = overlay.querySelector("#qNext");
    next.addEventListener("click", () => { idx++; idx < items.length ? renderQuestion() : renderResults(); });
    next.focus();
  }

  function renderResults() {
    const total = items.length;
    const pct = Math.round((aciertos / total) * 100);
    // guardar mejor resultado (por porcentaje, para que sea comparable entre sesiones de distinto tamaño)
    const prev = global.Store.getTest(modId, "quiz");
    if (!prev || pct > (prev.pct || 0)) {
      global.Store.setTest(modId, "quiz", { aciertos, total, score, pct });
    }
    let msg, emoji;
    if (pct >= 90) { msg = "¡Dominas los temas!"; emoji = "🏆"; }
    else if (pct >= 70) { msg = "¡Muy bien! Casi lo tienes."; emoji = "🎯"; }
    else if (pct >= 50) { msg = "Vas por buen camino, repasa un poco."; emoji = "📈"; }
    else { msg = "Toca repasar el temario."; emoji = "📚"; }

    overlay.querySelector(".quiz-inner").innerHTML = `
      <div class="quiz-results text-center">
        <button class="btn btn-sm btn-outline-light quiz-close"><i class="bi bi-x-lg"></i></button>
        <div class="quiz-result-emoji">${emoji}</div>
        <h2 class="fw-bold">${msg}</h2>
        <div class="quiz-result-ring" style="--pct:${pct}">
          <div class="quiz-result-pct">${pct}%</div>
        </div>
        <p class="lead">${aciertos} de ${total} aciertos · <span class="text-warning">${score} pts</span></p>
        <div class="d-flex gap-2 justify-content-center mt-3 flex-wrap">
          <button class="btn btn-primary" id="qRetry"><i class="bi bi-arrow-repeat"></i> Reintentar</button>
          <button class="btn btn-outline-light" id="qMenu"><i class="bi bi-grid"></i> Elegir temas</button>
          <button class="btn btn-outline-light" id="qExit"><i class="bi bi-x-lg"></i> Salir</button>
        </div>
      </div>`;
    overlay.querySelector(".quiz-close").addEventListener("click", close);
    overlay.querySelector("#qRetry").addEventListener("click", () => startQuiz());
    overlay.querySelector("#qMenu").addEventListener("click", () => openMenu(modId));
    overlay.querySelector("#qExit").addEventListener("click", close);
  }

  // =========================================================================
  //  MODO FLASHCARDS
  // =========================================================================
  function startFlash() {
    let pool = juntar(modId, "flashcards", sel.temas);
    if (!pool.length) { alert("No hay flashcards en los temas seleccionados."); return; }
    modo = "flash";
    if (sel.orden === "rnd") pool = shuffle(pool);
    items = pool.slice(0, Math.min(sel.nFlash, pool.length));
    idx = 0;
    renderFlash();
  }

  function renderFlash() {
    flashRevealed = false;
    const c = items[idx];
    overlay.querySelector(".quiz-inner").innerHTML = `
      <div class="flash-game">
        <div class="quiz-top">
          <button class="btn btn-sm btn-outline-light quiz-close"><i class="bi bi-x-lg"></i></button>
          <div class="quiz-progress-info">Tarjeta ${idx + 1} / ${items.length}</div>
          <button class="btn btn-sm btn-outline-light" id="fMenu"><i class="bi bi-grid"></i></button>
        </div>
        <div class="flash-card" id="fCard">
          <div class="flash-face flash-front">
            <div class="flash-tag">PREGUNTA</div>
            <div class="flash-text">${esc(c.front)}</div>
            <div class="flash-hint"><i class="bi bi-hand-index-thumb"></i> Toca o pulsa Espacio para revelar</div>
          </div>
          <div class="flash-face flash-back">
            <div class="flash-tag">RESPUESTA</div>
            <div class="flash-text">${esc(c.back)}</div>
          </div>
        </div>
        <div class="flash-nav">
          <button class="btn btn-outline-light" id="fPrev"><i class="bi bi-arrow-left"></i></button>
          <button class="btn btn-primary" id="fFlip"><i class="bi bi-arrow-repeat"></i> Girar</button>
          <button class="btn btn-outline-light" id="fNext"><i class="bi bi-arrow-right"></i></button>
        </div>
      </div>`;
    overlay.querySelector(".quiz-close").addEventListener("click", close);
    overlay.querySelector("#fMenu").addEventListener("click", () => openMenu(modId));
    overlay.querySelector("#fCard").addEventListener("click", toggleFlash);
    overlay.querySelector("#fFlip").addEventListener("click", (e) => { e.stopPropagation(); toggleFlash(); });
    overlay.querySelector("#fPrev").addEventListener("click", () => flashGo(idx - 1));
    overlay.querySelector("#fNext").addEventListener("click", () => flashGo(idx + 1));
    overlay.querySelector("#fPrev").disabled = idx === 0;
    overlay.querySelector("#fNext").disabled = idx === items.length - 1;
  }

  function toggleFlash() {
    flashRevealed = !flashRevealed;
    overlay.querySelector("#fCard").classList.toggle("flipped", flashRevealed);
  }
  function flashGo(i) {
    if (i < 0 || i >= items.length) return;
    idx = i; renderFlash();
  }

  function close() {
    clearInterval(timer);
    if (!overlay) return;
    overlay.classList.remove("open");
    document.body.style.overflow = "";
  }

  global.Quiz = { open: openMenu, close };
})(window);
