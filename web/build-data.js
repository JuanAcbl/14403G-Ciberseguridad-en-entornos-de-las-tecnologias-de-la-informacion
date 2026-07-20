// build-data.js
// Regenera web/data/modulos.js empaquetando los .md del temario en base64,
// para que la web funcione sin servidor (file://, htmlpreview, GitHub Pages).
//
// Uso:  node build-data.js      (ejecutar desde la carpeta /web)
//
// Cuando edites cualquier .md del temario (que están en la carpeta superior),
// vuelve a lanzar este script para actualizar el contenido de la web.

const fs = require("fs");
const path = require("path");

// Los .md están en la carpeta padre de /web
const ROOT = path.resolve(__dirname, "..");

const mods = [
  { id: "5021", file: "5021-incidentes-ciberseguridad.md",   titulo: "Incidentes de ciberseguridad",     icon: "bi-shield-exclamation" },
  { id: "5022", file: "5022-bastionado-redes-sistemas.md",   titulo: "Bastionado de redes y sistemas",    icon: "bi-hdd-network" },
  { id: "5023", file: "5023-puesta-produccion-segura.md",    titulo: "Puesta en producción segura",       icon: "bi-cloud-check" },
  { id: "5024", file: "5024-analisis-forense-informatico.md", titulo: "Análisis forense informático",     icon: "bi-search" },
  { id: "5025", file: "5025-hacking-etico.md",               titulo: "Hacking ético",                     icon: "bi-terminal" },
  { id: "5026", file: "5026-normativa-ciberseguridad.md",    titulo: "Normativa de ciberseguridad",       icon: "bi-file-earmark-text" },
];

let out = "// AUTOGENERADO desde los .md del temario. No editar a mano.\n";
out += "// Regenerar con: node build-data.js\n";
out += "window.MODULOS = [\n";

for (const m of mods) {
  const md = fs.readFileSync(path.join(ROOT, m.file), "utf8");
  const b64 = Buffer.from(md, "utf8").toString("base64");
  out += `  { id:${JSON.stringify(m.id)}, titulo:${JSON.stringify(m.titulo)}, icon:${JSON.stringify(m.icon)}, md_b64:${JSON.stringify(b64)} },\n`;
}
out += "];\n";

const dest = path.join(__dirname, "data", "modulos.js");
fs.writeFileSync(dest, out);
console.log("Generado " + dest + " -> " + fs.statSync(dest).size + " bytes");
