/* ===========================================================================
 * store.js — Capa de persistencia sobre localStorage
 * ---------------------------------------------------------------------------
 * Todo lo que se guarda por persona (en este navegador) pasa por aquí:
 *   - progreso: secciones marcadas como leídas, por módulo
 *   - notas: texto libre por sección
 *   - tests: respuestas y puntuación de la autoevaluación
 *   - prefs: tema, último módulo/posición, marcadores
 *
 * Un único objeto JSON bajo una sola clave, para poder exportar/importar
 * todo el progreso de golpe.
 * =========================================================================== */
(function (global) {
  "use strict";

  const KEY = "ciber_temario_v1";

  const DEFAULT = {
    version: 1,
    prefs: {
      theme: "dark",
      lastModule: null,
      lastHash: null,
    },
    // progreso[moduloId] = { "id-seccion": true, ... }
    progreso: {},
    // notas[moduloId] = { "id-seccion": "texto de la nota" }
    notas: {},
    // marcadores[moduloId] = { "id-seccion": true }
    marcadores: {},
    // tests[moduloId] = { "id-test": { respuestas:{}, aciertos:n, total:n, fecha:"" } }
    tests: {},
  };

  let state = load();

  function load() {
    try {
      const raw = global.localStorage.getItem(KEY);
      if (!raw) return structuredClone(DEFAULT);
      const parsed = JSON.parse(raw);
      // fusiona con defaults por si añadimos campos en el futuro
      return Object.assign(structuredClone(DEFAULT), parsed);
    } catch (e) {
      console.warn("No se pudo leer el progreso, empezando de cero:", e);
      return structuredClone(DEFAULT);
    }
  }

  let saveTimer = null;
  function persist() {
    // guardado con pequeño debounce (notas se teclean rápido)
    clearTimeout(saveTimer);
    saveTimer = setTimeout(() => {
      try {
        global.localStorage.setItem(KEY, JSON.stringify(state));
      } catch (e) {
        console.error("Error guardando en localStorage:", e);
      }
    }, 150);
  }

  function ensure(obj, k, fallback) {
    if (!obj[k]) obj[k] = fallback;
    return obj[k];
  }

  const Store = {
    /* ---- Preferencias ---- */
    getPref(k, def) {
      return state.prefs[k] != null ? state.prefs[k] : def;
    },
    setPref(k, v) {
      state.prefs[k] = v;
      persist();
    },

    /* ---- Progreso (secciones leídas) ---- */
    isDone(mod, sec) {
      return !!(state.progreso[mod] && state.progreso[mod][sec]);
    },
    setDone(mod, sec, val) {
      const m = ensure(state.progreso, mod, {});
      if (val) m[sec] = true; else delete m[sec];
      persist();
    },
    /** nº de secciones leídas de un módulo */
    countDone(mod) {
      return state.progreso[mod] ? Object.keys(state.progreso[mod]).length : 0;
    },

    /* ---- Marcadores ---- */
    isBookmarked(mod, sec) {
      return !!(state.marcadores[mod] && state.marcadores[mod][sec]);
    },
    toggleBookmark(mod, sec) {
      const m = ensure(state.marcadores, mod, {});
      if (m[sec]) delete m[sec]; else m[sec] = true;
      persist();
      return !!m[sec];
    },
    allBookmarks() {
      const out = [];
      for (const mod in state.marcadores) {
        for (const sec in state.marcadores[mod]) out.push({ mod, sec });
      }
      return out;
    },

    /* ---- Notas ---- */
    getNote(mod, sec) {
      return (state.notas[mod] && state.notas[mod][sec]) || "";
    },
    setNote(mod, sec, txt) {
      const m = ensure(state.notas, mod, {});
      if (txt && txt.trim()) m[sec] = txt; else delete m[sec];
      persist();
    },
    hasNote(mod, sec) {
      return !!(state.notas[mod] && state.notas[mod][sec]);
    },

    /* ---- Tests / autoevaluación ---- */
    getTest(mod, testId) {
      return (state.tests[mod] && state.tests[mod][testId]) || null;
    },
    setTest(mod, testId, result) {
      const m = ensure(state.tests, mod, {});
      m[testId] = result;
      persist();
    },

    /* ---- Export / import / reset ---- */
    exportJSON() {
      return JSON.stringify(state, null, 2);
    },
    importJSON(json) {
      const parsed = typeof json === "string" ? JSON.parse(json) : json;
      if (!parsed || typeof parsed !== "object") throw new Error("Archivo no válido");
      state = Object.assign(structuredClone(DEFAULT), parsed);
      persist();
    },
    resetAll() {
      state = structuredClone(DEFAULT);
      try { global.localStorage.removeItem(KEY); } catch (e) {}
    },
    /** acceso de solo lectura al estado completo (para depurar) */
    _dump() { return structuredClone(state); },
  };

  global.Store = Store;
})(window);
