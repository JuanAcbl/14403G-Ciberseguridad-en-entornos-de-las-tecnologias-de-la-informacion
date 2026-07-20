/* ===========================================================================
 * quiz.js — Autoevaluación estilo Kahoot + Flashcards de repaso
 * ---------------------------------------------------------------------------
 * Datos en window.QUIZ[modId] = { test:[...], flashcards:[...] }
 *
 * Modo Quiz (Kahoot):
 *   - Una pregunta a pantalla completa, 4 opciones de colores.
 *   - Temporizador por pregunta; la puntuación premia la velocidad.
 *   - Feedback inmediato (verde/rojo) + explicación.
 *   - Orden secuencial o aleatorio (shuffle).
 *   - Pantalla final con puntuación; se guarda el mejor resultado en localStorage.
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
    if (modo === "flash") {
      if (e.key === " " || e.key === "Enter") { e.preventDefault(); toggleFlash(); }
      else if (e.key === "ArrowRight") flashGo(idx + 1);
      else if (e.key === "ArrowLeft") flashGo(idx - 1);
    } else if (modo === "quiz" && !respondida && /^[1-4]$/.test(e.key)) {
      responder(parseInt(e.key, 10) - 1);
    }
  }

  // =========================================================================
  //  Pantalla de inicio (elegir modo y orden)
  // =========================================================================
  function openMenu(id) {
    modId = id;
    ensureOverlay();
    const data = (global.QUIZ || {})[id];
    const mod = (global.MODULOS || []).find(m => m.id === id);
    const nTest = data && data.test ? data.test.length : 0;
    const nFlash = data && data.flashcards ? data.flashcards.length : 0;
    const best = global.Store.getTest(id, "quiz");

    overlay.querySelector(".quiz-inner").innerHTML = `
      <div class="quiz-menu">
        <button class="btn btn-sm btn-outline-light quiz-close"><i class="bi bi-x-lg"></i></button>
        <div class="text-center mb-4">
          <div class="quiz-kicker">Autoevaluación</div>
          <h2 class="fw-bold mb-1">${mod ? esc(mod.titulo) : id}</h2>
          <div class="text-secondary">Módulo ${id}${best ? ` · Mejor: <span class="text-info fw-semibold">${best.aciertos}/${best.total}</span>` : ""}</div>
        </div>
        <div class="row g-3 justify-content-center">
          <div class="col-12 col-md-6">
            <div class="quiz-choice">
              <i class="bi bi-controller"></i>
              <h4>Modo Quiz</h4>
              <p>${nTest} preguntas tipo test, contrarreloj y con puntos. ¡Estilo Kahoot!</p>
              <div class="d-grid gap-2">
                <button class="btn btn-primary" data-start="quiz" data-order="seq"><i class="bi bi-list-ol me-1"></i> Ordenado</button>
                <button class="btn btn-outline-primary" data-start="quiz" data-order="rnd"><i class="bi bi-shuffle me-1"></i> Aleatorio</button>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="quiz-choice">
              <i class="bi bi-card-text"></i>
              <h4>Flashcards</h4>
              <p>${nFlash} tarjetas de repaso: piensa la respuesta y revélala.</p>
              <div class="d-grid gap-2">
                <button class="btn btn-success" data-start="flash" data-order="seq"><i class="bi bi-list-ol me-1"></i> Ordenado</button>
                <button class="btn btn-outline-success" data-start="flash" data-order="rnd"><i class="bi bi-shuffle me-1"></i> Aleatorio</button>
              </div>
            </div>
          </div>
        </div>
      </div>`;

    overlay.querySelector(".quiz-close").addEventListener("click", close);
    overlay.querySelectorAll("[data-start]").forEach(btn => {
      btn.addEventListener("click", () => {
        const orden = btn.dataset.order;
        if (btn.dataset.start === "quiz") startQuiz(orden);
        else startFlash(orden);
      });
    });

    overlay.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  // =========================================================================
  //  MODO QUIZ (Kahoot)
  // =========================================================================
  function startQuiz(orden) {
    const data = (global.QUIZ || {})[modId];
    if (!data || !data.test || !data.test.length) { alert("Este módulo aún no tiene preguntas."); return; }
    modo = "quiz";
    items = orden === "rnd" ? shuffle(data.test) : data.test.slice();
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
    // guardar mejor resultado
    const prev = global.Store.getTest(modId, "quiz");
    if (!prev || aciertos > prev.aciertos) {
      global.Store.setTest(modId, "quiz", { aciertos, total, score, pct });
    }
    let msg, emoji;
    if (pct >= 90) { msg = "¡Dominas el módulo!"; emoji = "🏆"; }
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
          <button class="btn btn-outline-light" id="qMenu"><i class="bi bi-grid"></i> Menú</button>
          <button class="btn btn-outline-light" id="qExit"><i class="bi bi-x-lg"></i> Salir</button>
        </div>
      </div>`;
    overlay.querySelector(".quiz-close").addEventListener("click", close);
    overlay.querySelector("#qRetry").addEventListener("click", () => startQuiz("rnd"));
    overlay.querySelector("#qMenu").addEventListener("click", () => openMenu(modId));
    overlay.querySelector("#qExit").addEventListener("click", close);
  }

  // =========================================================================
  //  MODO FLASHCARDS
  // =========================================================================
  function startFlash(orden) {
    const data = (global.QUIZ || {})[modId];
    if (!data || !data.flashcards || !data.flashcards.length) { alert("Este módulo aún no tiene flashcards."); return; }
    modo = "flash";
    items = orden === "rnd" ? shuffle(data.flashcards) : data.flashcards.slice();
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
