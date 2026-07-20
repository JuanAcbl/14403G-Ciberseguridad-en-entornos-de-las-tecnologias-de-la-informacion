/* ===========================================================================
 * app.js — Lógica de la web del temario
 * ---------------------------------------------------------------------------
 * - Carga los módulos empaquetados en window.MODULOS (data/modulos.js)
 * - Renderiza el Markdown de cada módulo con marked + highlight.js
 * - Construye el índice lateral (TOC) desde el HTML renderizado (así ignora
 *   automáticamente los '#' que están dentro de bloques de código)
 * - Navegación por hash: #/modulo/5021  |  #/modulo/5021/id-seccion
 * - Progreso por sección (checkbox "leído"), marcadores, notas
 * - Tema claro/oscuro, buscador, export/import de progreso
 * =========================================================================== */
(function () {
  "use strict";

  // ---- Utilidades ----
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));
  const b64ToStr = (b64) => decodeURIComponent(escape(atob(b64)));

  function slugify(txt) {
    return txt.toLowerCase()
      .normalize("NFD").replace(/[̀-ͯ]/g, "")
      .replace(/[^\w\s-]/g, "")
      .trim().replace(/\s+/g, "-").slice(0, 60);
  }

  // ---- Estado en memoria ----
  const MODULOS = window.MODULOS || [];
  const modIndex = {};                 // id -> objeto módulo
  MODULOS.forEach(m => {
    m.md = b64ToStr(m.md_b64);
    modIndex[m.id] = m;
  });

  let current = { modId: null, secciones: [] };

  // ---- Configurar marked ----
  marked.use({
    breaks: false,
    gfm: true,
  });

  // =========================================================================
  //  Render de un módulo
  // =========================================================================
  function renderModule(modId, targetSec) {
    const mod = modIndex[modId];
    if (!mod) { renderHome(); return; }

    current.modId = modId;
    Store.setPref("lastModule", modId);

    // 1) Markdown -> HTML
    let html = marked.parse(mod.md);

    const contentEl = $("#content");
    contentEl.innerHTML = `
      <div class="module-header mb-4">
        <div class="d-flex align-items-center gap-2 text-secondary small mb-1">
          <span class="badge text-bg-primary">${mod.id}</span>
          <span>Módulo profesional</span>
        </div>
        <div class="d-flex align-items-center justify-content-between flex-wrap gap-2">
          <h1 class="mb-0 fw-bold">${mod.titulo}</h1>
          <div class="btn-group btn-group-sm">
            <button class="btn btn-outline-info" id="btnQuiz" title="Autoevaluación (quiz y flashcards)">
              <i class="bi bi-patch-question"></i> Autoevaluación
            </button>
            <button class="btn btn-outline-primary" id="btnSlides" title="Modo presentación">
              <i class="bi bi-easel2"></i> Slides
            </button>
          </div>
        </div>
        <div class="mt-3">
          <div class="d-flex justify-content-between small text-secondary mb-1">
            <span>Progreso del módulo</span>
            <span id="modProgressLabel">0%</span>
          </div>
          <div class="progress module-progressbar">
            <div class="progress-bar bg-success" id="modProgressBar" style="width:0%"></div>
          </div>
        </div>
      </div>
      <article class="markdown-body" id="mdBody">${html}</article>
    `;

    const body = $("#mdBody");

    // 2) Resaltado de código + botón copiar
    $$("pre code", body).forEach(block => {
      try { hljs.highlightElement(block); } catch (e) {}
      const pre = block.closest("pre");
      if (pre && !pre.querySelector(".code-copy")) {
        const btn = document.createElement("button");
        btn.className = "btn btn-sm btn-outline-light code-copy";
        btn.innerHTML = '<i class="bi bi-clipboard"></i>';
        btn.title = "Copiar";
        btn.addEventListener("click", () => {
          navigator.clipboard.writeText(block.innerText).then(() => {
            btn.innerHTML = '<i class="bi bi-check2"></i>';
            setTimeout(() => btn.innerHTML = '<i class="bi bi-clipboard"></i>', 1200);
          });
        });
        pre.appendChild(btn);
      }
    });

    // 3) Preparar secciones: dar id a cada h2/h3 y añadir controles (leído/marcador/nota)
    current.secciones = [];
    const heads = $$("h2, h3", body);
    const usados = new Set();
    heads.forEach(h => {
      let base = slugify(h.textContent) || "sec";
      let id = base, n = 2;
      while (usados.has(id)) id = base + "-" + (n++);
      usados.add(id);
      h.id = id;

      const sec = { id, text: h.textContent.trim(), level: h.tagName === "H2" ? 2 : 3 };
      current.secciones.push(sec);

      decorateHeading(h, modId, sec);
    });

    // 4) TOC lateral
    buildToc(current.secciones);

    // 5) Progreso
    updateModuleProgress();

    // 6) Scroll a la sección pedida o al principio
    $("#content").scrollTop = 0;
    if (targetSec) {
      const el = document.getElementById(targetSec);
      if (el) el.scrollIntoView({ behavior: "instant", block: "start" });
    } else {
      window.scrollTo({ top: 0 });
    }

    // 7) Marcar módulo activo en el sidebar
    highlightActiveModule(modId);

    // 8) Enganchar el scroll-spy del TOC
    setupScrollSpy();

    // 9) Animaciones de entrada (reveal)
    setupReveal();

    // 10) Slides + Autoevaluación
    $("#btnSlides").addEventListener("click", () => openSlides(modId));
    $("#btnQuiz").addEventListener("click", () => { if (window.Quiz) window.Quiz.open(modId); });

    closeSidebarMobile();
  }

  /** Añade a cada cabecera de sección: checkbox "leído", marcador y botón de nota */
  function decorateHeading(h, modId, sec) {
    // Envolver el contenido de la cabecera para alinear con los controles
    const wrapper = document.createElement("div");
    wrapper.className = "section-head";

    const chk = document.createElement("input");
    chk.type = "checkbox";
    chk.className = "form-check-input section-done";
    chk.title = "Marcar sección como leída";
    chk.checked = Store.isDone(modId, sec.id);
    chk.addEventListener("change", () => {
      Store.setDone(modId, sec.id, chk.checked);
      updateModuleProgress();
      updateModuleListProgress();
    });

    const titleSpan = document.createElement("span");
    titleSpan.className = "flex-grow-1";
    // mover los hijos actuales del heading al span
    while (h.firstChild) titleSpan.appendChild(h.firstChild);

    // Controles a la derecha
    const controls = document.createElement("span");
    controls.className = "section-controls d-inline-flex gap-1 align-items-center ms-2";

    const bmBtn = document.createElement("button");
    bmBtn.className = "btn btn-sm btn-link p-0 text-secondary";
    bmBtn.title = "Marcador";
    const setBmIcon = () => bmBtn.innerHTML = Store.isBookmarked(modId, sec.id)
      ? '<i class="bi bi-bookmark-fill text-warning"></i>'
      : '<i class="bi bi-bookmark"></i>';
    setBmIcon();
    bmBtn.addEventListener("click", (e) => { e.preventDefault(); Store.toggleBookmark(modId, sec.id); setBmIcon(); });

    const noteBtn = document.createElement("button");
    noteBtn.className = "btn btn-sm btn-link p-0 text-secondary note-toggle-btn";
    noteBtn.title = "Nota personal";
    const setNoteIcon = () => noteBtn.innerHTML = Store.hasNote(modId, sec.id)
      ? '<i class="bi bi-sticky-fill note-indicator"></i>'
      : '<i class="bi bi-sticky"></i>';
    setNoteIcon();

    controls.appendChild(bmBtn);
    controls.appendChild(noteBtn);

    wrapper.appendChild(chk);
    wrapper.appendChild(titleSpan);
    wrapper.appendChild(controls);
    h.appendChild(wrapper);

    // Panel de nota (se inserta tras la cabecera)
    const noteBox = document.createElement("div");
    noteBox.className = "note-box d-none";
    noteBox.innerHTML = `
      <div class="card border-warning-subtle">
        <div class="card-body py-2">
          <label class="small text-secondary mb-1"><i class="bi bi-pencil me-1"></i>Mi nota</label>
          <textarea class="form-control" placeholder="Escribe aquí tus apuntes de esta sección…"></textarea>
          <div class="small text-secondary mt-1 note-status"></div>
        </div>
      </div>`;
    h.insertAdjacentElement("afterend", noteBox);

    const ta = noteBox.querySelector("textarea");
    const status = noteBox.querySelector(".note-status");
    ta.value = Store.getNote(modId, sec.id);
    ta.addEventListener("input", () => {
      Store.setNote(modId, sec.id, ta.value);
      setNoteIcon();
      status.textContent = "Guardado ✓";
      clearTimeout(ta._t);
      ta._t = setTimeout(() => status.textContent = "", 1000);
    });

    noteBtn.addEventListener("click", (e) => {
      e.preventDefault();
      noteBox.classList.toggle("d-none");
      if (!noteBox.classList.contains("d-none")) ta.focus();
    });
  }

  // =========================================================================
  //  TOC lateral + scroll spy
  // =========================================================================
  function buildToc(secciones) {
    const toc = $("#toc");
    if (!secciones.length) { toc.innerHTML = '<div class="text-secondary small px-2">—</div>'; return; }
    toc.innerHTML = secciones.map(s =>
      `<a href="#/modulo/${current.modId}/${s.id}" class="lvl-${s.level}" data-sec="${s.id}">${escapeHtml(s.text)}</a>`
    ).join("");
  }

  let spyObserver = null;
  function setupScrollSpy() {
    if (spyObserver) spyObserver.disconnect();
    const links = new Map($$("#toc a").map(a => [a.dataset.sec, a]));
    spyObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          $$("#toc a.active").forEach(a => a.classList.remove("active"));
          const link = links.get(entry.target.id);
          if (link) {
            link.classList.add("active");
            link.scrollIntoView({ block: "nearest" });
          }
        }
      });
    }, { rootMargin: "-70px 0px -70% 0px", threshold: 0 });

    $$("#mdBody h2, #mdBody h3").forEach(h => spyObserver.observe(h));
  }

  // =========================================================================
  //  Progreso
  // =========================================================================
  function updateModuleProgress() {
    const total = current.secciones.length || 1;
    const done = current.secciones.filter(s => Store.isDone(current.modId, s.id)).length;
    const pct = Math.round((done / total) * 100);
    const bar = $("#modProgressBar");
    const label = $("#modProgressLabel");
    if (bar) bar.style.width = pct + "%";
    if (label) label.textContent = `${pct}% · ${done}/${total} secciones`;
  }

  function moduleTotalSections(modId) {
    // cuenta secciones renderizando en un contenedor temporal (una sola vez)
    const mod = modIndex[modId];
    if (mod._totalSec != null) return mod._totalSec;
    const tmp = document.createElement("div");
    tmp.innerHTML = marked.parse(mod.md);
    mod._totalSec = tmp.querySelectorAll("h2, h3").length;
    return mod._totalSec;
  }

  // =========================================================================
  //  Sidebar: lista de módulos
  // =========================================================================
  function buildModuleList() {
    const list = $("#moduleList");
    list.innerHTML = MODULOS.map(m => `
      <a href="#/modulo/${m.id}" class="nav-link" data-mod="${m.id}">
        <i class="bi ${m.icon} fs-5"></i>
        <span class="mod-meta">
          <span><span class="mod-code">${m.id}</span></span>
          <span class="mod-title">${m.titulo}</span>
          <span class="mini-progress"><span data-bar="${m.id}"></span></span>
          <span class="mod-progress-text" data-txt="${m.id}"></span>
        </span>
      </a>`).join("");
    updateModuleListProgress();
  }

  function updateModuleListProgress() {
    MODULOS.forEach(m => {
      const total = moduleTotalSections(m.id) || 1;
      const done = Store.countDone(m.id);
      const pct = Math.round((done / total) * 100);
      const bar = $(`[data-bar="${m.id}"]`);
      const txt = $(`[data-txt="${m.id}"]`);
      if (bar) bar.style.width = pct + "%";
      if (txt) txt.textContent = `${pct}%`;
    });
  }

  function highlightActiveModule(modId) {
    $$("#moduleList .nav-link").forEach(a => a.classList.toggle("active", a.dataset.mod === modId));
  }

  // =========================================================================
  //  Portada
  // =========================================================================
  function renderHome() {
    current.modId = null;
    highlightActiveModule(null);
    $("#toc").innerHTML = '<div class="text-secondary small px-2">Abre un módulo</div>';
    // La portada vive en index.html; la reconstruimos por si veníamos de un módulo
    $("#content").innerHTML = document.getElementById("homeTemplate")
      ? document.getElementById("homeTemplate").innerHTML
      : buildHomeHTML();
    fillHomeCards();
    setupReveal();
    closeSidebarMobile();
  }

  function buildHomeHTML() {
    return `
      <section class="hero-ciber text-center">
        <div class="hero-grid"></div>
        <div class="hero-inner py-5">
          <div class="hero-badge mb-3"><i class="bi bi-shield-lock-fill"></i> RD 479/2020</div>
          <h1 class="hero-title">Curso de Especialización<br><span class="text-gradient">en Ciberseguridad</span></h1>
          <p class="lead text-secondary mx-auto" style="max-width:640px">
            Seis módulos profesionales desarrollados en profundidad: prevención, detección,
            respuesta, forense, hacking ético y normativa. Con laboratorios reproducibles.
          </p>
          <div class="hero-stats d-flex justify-content-center gap-4 flex-wrap mt-4">
            <div class="stat"><span class="stat-num" data-count="6">0</span><span class="stat-lbl">Módulos</span></div>
            <div class="stat"><span class="stat-num" data-count="720">0</span><span class="stat-lbl">Horas</span></div>
            <div class="stat"><span class="stat-num" data-count="30" data-suffix="+">0</span><span class="stat-lbl">Laboratorios</span></div>
          </div>
        </div>
      </section>

      <div id="homeCarousel" class="carousel slide my-4" data-bs-ride="carousel">
        <div class="carousel-indicators" id="carIndicators"></div>
        <div class="carousel-inner" id="carInner"></div>
        <button class="carousel-control-prev" type="button" data-bs-target="#homeCarousel" data-bs-slide="prev">
          <span class="carousel-control-prev-icon"></span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#homeCarousel" data-bs-slide="next">
          <span class="carousel-control-next-icon"></span>
        </button>
      </div>

      <h2 class="section-title reveal mt-5 mb-3"><i class="bi bi-grid-3x3-gap me-2"></i>Todos los módulos</h2>
      <div class="row g-3" id="homeCards"></div>
    `;
  }

  function fillHomeCards() {
    // Tarjetas
    const cards = $("#homeCards");
    if (cards) {
      cards.innerHTML = MODULOS.map((m, i) => {
        const total = moduleTotalSections(m.id) || 1;
        const done = Store.countDone(m.id);
        const pct = Math.round((done / total) * 100);
        return `
        <div class="col-12 col-md-6 col-xl-4 reveal" style="--d:${i * 60}ms">
          <a href="#/modulo/${m.id}" class="text-decoration-none">
            <div class="card home-card mod-card h-100">
              <div class="card-body">
                <div class="d-flex align-items-center gap-3 mb-2">
                  <div class="mod-icon"><i class="bi ${m.icon}"></i></div>
                  <div>
                    <div class="badge text-bg-secondary">${m.id}</div>
                    <h5 class="card-title mb-0 mt-1">${m.titulo}</h5>
                  </div>
                </div>
                <div class="progress mt-2" style="height:6px">
                  <div class="progress-bar bg-success" style="width:${pct}%"></div>
                </div>
                <div class="small text-secondary mt-1">${pct}% completado</div>
              </div>
            </div>
          </a>
        </div>`;
      }).join("");
    }

    // Carrusel
    const inner = $("#carInner");
    const ind = $("#carIndicators");
    if (inner) {
      inner.innerHTML = MODULOS.map((m, i) => `
        <div class="carousel-item ${i === 0 ? "active" : ""}">
          <div class="car-slide" style="--i:${i}">
            <i class="bi ${m.icon} car-ico"></i>
            <div class="car-badge mb-1">Módulo ${m.id}</div>
            <h3 class="fw-bold">${m.titulo}</h3>
            <a href="#/modulo/${m.id}" class="btn btn-primary btn-sm mt-2"><i class="bi bi-play-fill"></i> Estudiar módulo</a>
          </div>
        </div>`).join("");
      ind.innerHTML = MODULOS.map((m, i) =>
        `<button type="button" data-bs-target="#homeCarousel" data-bs-slide-to="${i}" ${i === 0 ? 'class="active"' : ""}></button>`
      ).join("");
    }

    animateCounters();
  }

  // =========================================================================
  //  Animaciones: reveal on scroll + contadores
  // =========================================================================
  function setupReveal() {
    const els = $$(".reveal");
    if (!("IntersectionObserver" in window)) { els.forEach(e => e.classList.add("in")); return; }
    const obs = new IntersectionObserver((entries, o) => {
      entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add("in"); o.unobserve(en.target); } });
    }, { threshold: 0.12 });
    els.forEach(e => obs.observe(e));
  }

  function animateCounters() {
    $$("[data-count]").forEach(el => {
      const target = parseInt(el.dataset.count, 10);
      const suffix = el.dataset.suffix || "";
      let start = null;
      const dur = 1200;
      function step(ts) {
        if (!start) start = ts;
        const p = Math.min((ts - start) / dur, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(target * eased) + suffix;
        if (p < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    });
  }

  // =========================================================================
  //  Modo Slides (presentación) — placeholder funcional, se amplía en Fase 4
  // =========================================================================
  function openSlides(modId) {
    // Se implementa en la fase de "slides". Por ahora, aviso.
    if (window.Slides) window.Slides.open(modId, current.secciones);
  }

  // =========================================================================
  //  Router por hash
  // =========================================================================
  function router() {
    const hash = location.hash || "#/";
    Store.setPref("lastHash", hash);
    const parts = hash.replace(/^#\//, "").split("/").filter(Boolean);
    // #/                      -> home
    // #/modulo/5021           -> módulo
    // #/modulo/5021/sec-id    -> módulo + sección
    if (parts[0] === "modulo" && parts[1]) {
      renderModule(parts[1], parts[2] || null);
    } else {
      renderHome();
    }
  }

  // =========================================================================
  //  Tema claro/oscuro
  // =========================================================================
  function applyTheme(theme) {
    document.documentElement.setAttribute("data-bs-theme", theme);
    const icon = $("#btnTheme i");
    if (icon) icon.className = theme === "dark" ? "bi bi-moon-stars" : "bi bi-sun";
    Store.setPref("theme", theme);
  }

  // =========================================================================
  //  Buscador (índice simple en cliente)
  // =========================================================================
  let searchIndex = null;
  function buildSearchIndex() {
    // Índice ligero: por cada sección (h2/h3) guardamos su texto hasta la siguiente cabecera
    searchIndex = [];
    MODULOS.forEach(m => {
      const tmp = document.createElement("div");
      tmp.innerHTML = marked.parse(m.md);
      const heads = $$("h2, h3", tmp);
      // desduplicación de slugs idéntica a la del render (decorateHeading),
      // para que los enlaces de búsqueda apunten a la sección correcta
      const usados = new Set();
      heads.forEach((h) => {
        let base = slugify(h.textContent) || "sec";
        let sec = base, k = 2;
        while (usados.has(sec)) sec = base + "-" + (k++);
        usados.add(sec);

        let text = "";
        let n = h.nextElementSibling;
        while (n && !/^H[23]$/.test(n.tagName)) { text += " " + n.textContent; n = n.nextElementSibling; }
        searchIndex.push({
          mod: m.id, modTitle: m.titulo,
          sec: sec,
          title: h.textContent.trim(),
          text: (h.textContent + " " + text).toLowerCase(),
        });
      });
    });
  }

  function doSearch(q) {
    if (!searchIndex) buildSearchIndex();
    q = q.trim().toLowerCase();
    const box = $("#searchResults");
    if (q.length < 2) { box.classList.add("d-none"); return; }
    const terms = q.split(/\s+/);
    const hits = searchIndex
      .map(e => {
        let score = 0;
        terms.forEach(t => {
          if (e.title.toLowerCase().includes(t)) score += 5;
          if (e.text.includes(t)) score += 1;
        });
        return { e, score };
      })
      .filter(x => x.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 12);

    if (!hits.length) {
      box.innerHTML = '<div class="text-secondary small p-2">Sin resultados</div>';
    } else {
      box.innerHTML = hits.map(({ e }) => `
        <a class="sr-item" href="#/modulo/${e.mod}/${e.sec}">
          <div class="sr-mod">${e.mod} · ${e.modTitle}</div>
          <div>${highlight(e.title, terms)}</div>
        </a>`).join("");
    }
    box.classList.remove("d-none");
  }

  function highlight(text, terms) {
    let out = escapeHtml(text);
    terms.forEach(t => {
      if (t.length < 2) return;
      const re = new RegExp("(" + t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + ")", "ig");
      out = out.replace(re, "<mark>$1</mark>");
    });
    return out;
  }

  function escapeHtml(s) {
    return s.replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  }

  // =========================================================================
  //  Sidebar móvil
  // =========================================================================
  function openSidebarMobile() {
    $("#sidebar").classList.add("open");
    $("#sidebarBackdrop").classList.add("show");
  }
  function closeSidebarMobile() {
    $("#sidebar").classList.remove("open");
    $("#sidebarBackdrop").classList.remove("show");
  }

  // =========================================================================
  //  Export / import / reset
  // =========================================================================
  function download(filename, text) {
    const a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([text], { type: "application/json" }));
    a.download = filename;
    a.click();
    URL.revokeObjectURL(a.href);
  }

  // =========================================================================
  //  Init
  // =========================================================================
  function init() {
    // Tema inicial
    applyTheme(Store.getPref("theme", "dark"));

    buildModuleList();

    // Router
    window.addEventListener("hashchange", router);
    router();

    // Eventos UI
    $("#btnTheme").addEventListener("click", () => {
      const now = document.documentElement.getAttribute("data-bs-theme");
      applyTheme(now === "dark" ? "light" : "dark");
    });

    $("#btnToggleSidebar").addEventListener("click", openSidebarMobile);
    $("#sidebarBackdrop").addEventListener("click", closeSidebarMobile);

    // Buscador
    const si = $("#searchInput");
    if (si) {
      si.addEventListener("input", () => doSearch(si.value));
      si.addEventListener("focus", () => { if (si.value) doSearch(si.value); });
      document.addEventListener("click", (e) => {
        if (!$("#searchWrap").contains(e.target)) $("#searchResults").classList.add("d-none");
      });
      $("#searchResults").addEventListener("click", () => {
        $("#searchResults").classList.add("d-none");
        si.value = "";
      });
    }

    // Export
    $("#btnExport").addEventListener("click", (e) => {
      e.preventDefault();
      download("progreso-ciberseguridad.json", Store.exportJSON());
    });
    // Import
    $("#btnImport").addEventListener("click", (e) => { e.preventDefault(); $("#importFile").click(); });
    $("#importFile").addEventListener("change", (e) => {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = () => {
        try {
          Store.importJSON(reader.result);
          alert("Progreso importado correctamente.");
          buildModuleList();
          router();
        } catch (err) {
          alert("No se pudo importar: " + err.message);
        }
      };
      reader.readAsText(file);
    });
    // Reset
    $("#btnReset").addEventListener("click", (e) => {
      e.preventDefault();
      if (confirm("¿Seguro que quieres borrar TODO tu progreso, notas y tests de este navegador? No se puede deshacer.")) {
        Store.resetAll();
        buildModuleList();
        router();
      }
    });
  }

  document.addEventListener("DOMContentLoaded", init);
})();
