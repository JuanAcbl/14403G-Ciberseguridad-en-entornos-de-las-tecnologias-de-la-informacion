/* ===========================================================================
 * slides.js — Modo presentación
 * ---------------------------------------------------------------------------
 * Toma el módulo ya renderizado en #mdBody y trocea su contenido en
 * diapositivas: cada h2/h3 (y lo que le sigue hasta la próxima cabecera) es
 * una slide. Navegación con flechas del teclado, botones y barra de progreso.
 * =========================================================================== */
(function (global) {
  "use strict";

  let overlay = null;
  let slides = [];
  let idx = 0;

  function ensureOverlay() {
    if (overlay) return overlay;
    overlay = document.createElement("div");
    overlay.className = "slides-overlay";
    overlay.innerHTML = `
      <div class="slides-topbar">
        <i class="bi bi-easel2 fs-5 text-info"></i>
        <span class="fw-semibold" id="slModTitle"></span>
        <span class="ms-auto small text-secondary" id="slCounter"></span>
        <button class="btn btn-sm btn-outline-light" id="slClose"><i class="bi bi-x-lg"></i> Salir</button>
      </div>
      <div class="slides-progress"><span id="slBar" style="width:0%"></span></div>
      <div class="slides-stage" id="slStage"></div>
      <div class="slides-nav">
        <button class="btn btn-outline-light" id="slPrev"><i class="bi bi-arrow-left"></i> Anterior</button>
        <span class="small text-secondary">← / → para navegar · Esc para salir</span>
        <button class="btn btn-primary" id="slNext">Siguiente <i class="bi bi-arrow-right"></i></button>
      </div>`;
    document.body.appendChild(overlay);

    overlay.querySelector("#slClose").addEventListener("click", close);
    overlay.querySelector("#slPrev").addEventListener("click", () => go(idx - 1));
    overlay.querySelector("#slNext").addEventListener("click", () => go(idx + 1));
    document.addEventListener("keydown", onKey);
    return overlay;
  }

  function onKey(e) {
    if (!overlay || !overlay.classList.contains("open")) return;
    if (e.key === "ArrowRight" || e.key === "PageDown") go(idx + 1);
    else if (e.key === "ArrowLeft" || e.key === "PageUp") go(idx - 1);
    else if (e.key === "Escape") close();
  }

  function buildSlidesFromBody() {
    const body = document.getElementById("mdBody");
    if (!body) return [];
    const heads = Array.from(body.querySelectorAll("h2, h3"));
    return heads.map(h => {
      // clon del título sin los controles (checkbox/marcador/nota)
      const titleClone = h.querySelector(".section-head span.flex-grow-1");
      const title = titleClone ? titleClone.textContent.trim() : h.textContent.trim();

      // reunir el contenido hasta la siguiente cabecera
      const frag = document.createElement("div");
      let n = h.nextElementSibling;
      while (n && !/^H[23]$/.test(n.tagName)) {
        if (!n.classList.contains("note-box")) frag.appendChild(n.cloneNode(true));
        n = n.nextElementSibling;
      }
      return { level: h.tagName === "H2" ? 2 : 3, title, html: frag.innerHTML };
    });
  }

  function render() {
    const stage = overlay.querySelector("#slStage");
    const s = slides[idx];
    stage.innerHTML = `
      <div class="slide">
        <div class="slide-kicker">${s.level === 2 ? "SECCIÓN" : "APARTADO"} ${idx + 1} / ${slides.length}</div>
        <h2 class="mt-2 mb-3">${escapeHtml(s.title)}</h2>
        <div class="slide-content">${s.html || '<p class="text-secondary">—</p>'}</div>
      </div>`;
    // re-resaltar código dentro de la slide
    stage.querySelectorAll("pre code").forEach(b => { try { hljs.highlightElement(b); } catch (e) {} });

    overlay.querySelector("#slCounter").textContent = `${idx + 1} / ${slides.length}`;
    overlay.querySelector("#slBar").style.width = ((idx + 1) / slides.length * 100) + "%";
    overlay.querySelector("#slPrev").disabled = idx === 0;
    overlay.querySelector("#slNext").disabled = idx === slides.length - 1;
    stage.scrollTop = 0;
  }

  function go(i) {
    if (i < 0 || i >= slides.length) return;
    idx = i;
    render();
  }

  function open(modId, secciones) {
    ensureOverlay();
    slides = buildSlidesFromBody();
    if (!slides.length) { alert("No hay secciones para presentar en este módulo."); return; }
    idx = 0;
    const mod = (global.MODULOS || []).find(m => m.id === modId);
    overlay.querySelector("#slModTitle").textContent = mod ? `${mod.id} · ${mod.titulo}` : "Presentación";
    overlay.classList.add("open");
    document.body.style.overflow = "hidden";
    render();
  }

  function close() {
    if (!overlay) return;
    overlay.classList.remove("open");
    document.body.style.overflow = "";
  }

  function escapeHtml(s) {
    return s.replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  }

  global.Slides = { open, close };
})(window);
