# Web de estudio — Temario de Ciberseguridad

Aplicación web **estática** (solo HTML, CSS y JS) para estudiar el temario del
Curso de Especialización en Ciberseguridad. No necesita servidor ni build: se
abre directamente el `index.html`.

## Características

- 📖 **Lectura de los 6 módulos** renderizados desde sus `.md`, con índice
  lateral automático, resaltado de código y botón de copiar.
- ✅ **Progreso por sección** (marcar como leída) con barras de progreso por
  módulo — se guarda en el navegador (`localStorage`).
- 📝 **Notas personales** por sección, con guardado automático.
- 🔖 **Marcadores** y **tema claro/oscuro**.
- 🎮 **Autoevaluación estilo Kahoot**: 12 preguntas tipo test por módulo,
  contrarreloj y con puntuación; ordenado o aleatorio.
- 🃏 **Flashcards** de repaso (8 por módulo), ordenadas o aleatorias.
- 🖥️ **Modo presentación (slides)** de cada módulo.
- 🔍 **Buscador** global en todo el temario.
- 💾 **Exportar / importar** tu progreso como archivo JSON (útil para pasar tus
  datos a otro navegador o dispositivo).

> El progreso se guarda **por navegador**. Si cambias de equipo o borras los
> datos de navegación, se pierde; usa *Exportar progreso* (menú ⚙️) para
> respaldarlo.

## Cómo usarla

- **Localmente:** abre `web/index.html` con doble clic.
- **En GitHub Pages:** publica el repositorio y apunta Pages a la carpeta
  (la web queda en `.../web/`).

## Estructura

```
web/
├── index.html
├── css/            Bootstrap + iconos + highlight.js + estilos propios (app.css)
├── js/
│   ├── lib/        librerías locales (Bootstrap, marked, highlight.js)
│   ├── store.js    capa de localStorage
│   ├── app.js      render, navegación, progreso, notas, búsqueda
│   ├── slides.js   modo presentación
│   └── quiz.js     autoevaluación (Kahoot) y flashcards
├── data/
│   ├── modulos.js  los 6 .md empaquetados (autogenerado)
│   └── quiz.js     banco de preguntas y flashcards por módulo
└── build-data.js   regenera data/modulos.js desde los .md
```

## Actualizar el contenido

Si editas los `.md` del temario (en la carpeta superior), regenera el paquete:

```bash
cd web
node build-data.js
```

Las preguntas de la autoevaluación se editan a mano en `data/quiz.js`.
