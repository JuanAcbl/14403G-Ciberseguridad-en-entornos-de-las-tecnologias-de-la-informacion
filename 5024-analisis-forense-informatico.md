# 5024 - Análisis forense informático

## Introducción al módulo

El módulo profesional **5024 - Análisis forense informático** forma parte del **Curso de Especialización en Ciberseguridad en Entornos de las Tecnologías de la Información**, regulado por el **Real Decreto 479/2020, de 7 de abril**. Este curso de especialización se dirige a titulados de determinados ciclos formativos de Grado Superior de la familia profesional de Informática y Comunicaciones (y afines) que desean adquirir competencias avanzadas en el ámbito de la ciberseguridad.

El análisis forense informático (o **DFIR**, *Digital Forensics and Incident Response*) es la disciplina que aplica métodos científicos y técnicas rigurosas para **identificar, adquirir, preservar, analizar y presentar** evidencias digitales de manera que sean **admisibles en un procedimiento judicial** o útiles en una investigación interna. A diferencia de la administración de sistemas o del pentesting, el forense parte de una premisa fundamental: **toda actuación debe ser reproducible, documentada y respetuosa con la integridad de la prueba**. Un perito informático no solo debe "encontrar el dato", sino demostrar cómo lo encontró, garantizar que no lo ha alterado y explicarlo de forma comprensible ante un tribunal.

Este módulo combina una fuerte base **teórico-jurídica** (metodología, cadena de custodia, marco legal español) con una intensa parte **práctica de laboratorio** (adquisición de memoria y disco, análisis con Volatility 3, Autopsy, carving, timelines, análisis de red y de malware). El enfoque es siempre **defensivo y pericial**: nunca se trabaja con malware real fuera de entornos aislados, y todos los laboratorios utilizan **datasets forenses públicos y legales** pensados para docencia.

### Tabla resumen del módulo

| Elemento | Descripción |
|---|---|
| **Código y denominación** | 5024 - Análisis forense informático |
| **Curso** | Especialización en Ciberseguridad en Entornos de las TI (RD 479/2020) |
| **Duración de referencia** | 120 horas (parte proporcional del curso de 720 h) |
| **Modalidad recomendada** | Presencial / semipresencial con laboratorio virtualizado |
| **Prerrequisitos** | Titulación de CFGS de Informática (DAM, DAW, ASIR o equivalente); conocimientos de redes TCP/IP, sistemas operativos Windows y GNU/Linux, sistemas de archivos y línea de comandos |
| **Competencia general asociada** | Realizar análisis forenses digitales, recopilando y preservando evidencias, para determinar el origen y el alcance de un incidente de ciberseguridad y elaborar los informes correspondientes |
| **Software base de laboratorio** | Distribuciones forenses **CAINE** y **SANS SIFT Workstation**; virtualización con VirtualBox/VMware en red aislada |
| **Herramientas clave** | Autopsy/The Sleuth Kit, Volatility 3, FTK Imager, Guymager, dd/dcfldd, Wireshark/tshark, Zeek, YARA, RegRipper, plaso/log2timeline, KAPE |
| **Normativa técnica de referencia** | RFC 3227, UNE 71505, UNE 71506, ISO/IEC 27037, 27041, 27042, 27043 |
| **Marco legal** | LECrim, Ley 1/2000 (LEC), Constitución Española (art. 18), doctrina sobre licitud de la prueba |

### Orientaciones pedagógicas

El módulo se articula en **ocho unidades didácticas** que siguen el ciclo natural de una investigación forense: primero la metodología y el marco legal, después la adquisición, luego el análisis (memoria, disco, red, malware) y, por último, la elaboración del informe pericial. Se recomienda dedicar aproximadamente un **40 % del tiempo a teoría y marco normativo** y un **60 % a laboratorio práctico supervisado**, culminando con un **proyecto integrador** que simula un caso real de principio a fin.

---

## Resultados de Aprendizaje

A continuación se recogen los Resultados de Aprendizaje (RA) del módulo, redactados conforme al estilo del BOE, con sus criterios de evaluación (CE) resumidos.

### RA1. Aplica metodologías de análisis forense digital, describiendo sus fases y el marco legal y normativo aplicable.

- **CE1.1** Se han identificado los **principios** del análisis forense (integridad, reproducibilidad, trazabilidad, mínima intervención).
- **CE1.2** Se han descrito las **fases** del proceso forense: identificación, adquisición/preservación, análisis y presentación.
- **CE1.3** Se ha documentado la **cadena de custodia** garantizando la integridad de la evidencia.
- **CE1.4** Se ha aplicado el **orden de volatilidad** en la recolección de evidencias (RFC 3227).
- **CE1.5** Se ha relacionado la actuación pericial con la **legislación española** (LECrim, licitud de la prueba) y con las **normas UNE/ISO** aplicables.

### RA2. Realiza la adquisición forense de sistemas físicos y lógicos, empleando herramientas de volcado y clonado que garantizan la integridad de los datos.

- **CE2.1** Se ha adquirido la **memoria RAM** de un sistema mediante herramientas específicas (FTK Imager, WinPMEM, LiME).
- **CE2.2** Se ha realizado el **clonado bit a bit** de un dispositivo de almacenamiento (dd, dcfldd, Guymager).
- **CE2.3** Se han empleado **bloqueadores de escritura** (write blockers) físicos o lógicos.
- **CE2.4** Se han calculado y verificado **funciones hash** (MD5, SHA-256) para asegurar la integridad.
- **CE2.5** Se han generado los **formatos de imagen** adecuados (RAW/dd, E01/EWF) con su documentación asociada.

### RA3. Analiza sistemas de archivos y evidencias almacenadas, recuperando información y elaborando líneas temporales de la actividad del sistema.

- **CE3.1** Se ha analizado la estructura de sistemas de archivos **NTFS y EXT4** (MFT, journaling, inodos).
- **CE3.2** Se ha realizado **recuperación de datos borrados** y *file carving* (foremost, PhotoRec).
- **CE3.3** Se han extraído y analizado **metadatos** de archivos y del sistema.
- **CE3.4** Se ha construido una **línea temporal** (timeline) con plaso/log2timeline.
- **CE3.5** Se ha analizado la memoria volátil con **Volatility 3** (procesos, conexiones, artefactos de malware).

### RA4. Analiza el tráfico de red y las muestras de código malicioso, identificando indicadores de compromiso en entornos controlados.

- **CE4.1** Se ha capturado y analizado **tráfico de red** (PCAP) con Wireshark, tshark y Zeek.
- **CE4.2** Se han aplicado técnicas de **ingeniería inversa básica** (strings, cabeceras PE, reglas YARA).
- **CE4.3** Se ha empleado **sandboxing** en entorno aislado para el análisis dinámico de muestras controladas.
- **CE4.4** Se han identificado y documentado **indicadores de compromiso (IOC)**.
- **CE4.5** Se han aplicado **medidas de seguridad y aislamiento** en el manejo de código potencialmente malicioso.

### RA5. Elabora informes periciales técnicos, presentando las evidencias y conclusiones de forma rigurosa y comprensible.

- **CE5.1** Se ha estructurado el **informe pericial** conforme a estándares reconocidos.
- **CE5.2** Se ha redactado con **rigor técnico** y a la vez de forma **comprensible** para destinatarios no técnicos.
- **CE5.3** Se han **presentado las evidencias** con su cadena de custodia y verificación de integridad.
- **CE5.4** Se han formulado **conclusiones** trazables a las evidencias analizadas.
- **CE5.5** Se ha preparado la **ratificación** del informe (defensa ante el tribunal).

---

## Unidad Didáctica 1. Fundamentos y metodología del análisis forense digital

### 1.1. ¿Qué es el análisis forense informático?

El **análisis forense informático** es la aplicación de técnicas científicas y analíticas a los sistemas y dispositivos informáticos con el fin de **recuperar, preservar y examinar evidencias digitales** que puedan ser presentadas en un contexto legal. La palabra "forense" proviene del latín *forensis* ("relativo al foro"), es decir, a la actividad que se lleva ante un tribunal. Esto marca la diferencia esencial con otras disciplinas técnicas: el resultado del trabajo forense está destinado, potencialmente, a sostener o refutar hechos en un procedimiento judicial.

Una **evidencia digital** es cualquier información almacenada o transmitida en formato binario que pueda tener valor probatorio. Su naturaleza tiene características particulares que condicionan toda la metodología:

- Es **volátil**: la memoria RAM, las conexiones de red o los procesos en ejecución desaparecen al apagar el equipo.
- Es **frágil y fácilmente alterable**: el simple hecho de abrir un archivo modifica sus marcas de tiempo de acceso.
- Es **duplicable con exactitud**: una copia bit a bit correctamente realizada es idéntica al original y puede verificarse matemáticamente mediante hash.
- Puede estar **oculta, cifrada o borrada**, requiriendo técnicas específicas para recuperarla.

### 1.2. Principios del análisis forense digital

Toda actuación forense se rige por cuatro principios rectores que deben respetarse en cada fase:

| Principio | Descripción |
|---|---|
| **Integridad** | La evidencia no debe alterarse. Se trabaja siempre sobre copias verificadas; el original se preserva. |
| **Reproducibilidad** | Cualquier otro perito, aplicando los mismos procedimientos, debe poder llegar a los mismos resultados. |
| **Trazabilidad** | Toda manipulación queda documentada: quién, qué, cuándo, cómo y por qué (cadena de custodia). |
| **Mínima intervención** | Se altera lo mínimo imprescindible; cuando la alteración es inevitable (p. ej., volcado de RAM en vivo), se documenta y justifica. |

Un principio internacionalmente reconocido es el de los **ACPO Principles** (Association of Chief Police Officers, Reino Unido), citado como referencia en multitud de manuales y compatible con las normas ISO:

1. Ninguna acción debe modificar los datos que puedan aportarse posteriormente ante un tribunal.
2. Cuando sea necesario acceder a los datos originales, la persona debe estar **capacitada** y ser capaz de explicar la relevancia y las implicaciones de sus acciones.
3. Debe crearse y conservarse un **registro de auditoría** de todos los procesos aplicados; un tercero debe poder repetirlos y obtener el mismo resultado.
4. El responsable de la investigación tiene la **responsabilidad global** de que se cumplan la ley y estos principios.

### 1.3. Fases del proceso forense

El proceso forense sigue un ciclo bien definido, alineado con la norma **ISO/IEC 27043** (marco de procesos de investigación de incidentes):

```text
┌──────────────────────────────────────────────────────────────────────┐
│  1. IDENTIFICACIÓN     → Detectar y reconocer las fuentes de evidencia │
│  2. ADQUISICIÓN        → Recolectar y copiar la evidencia (imagen)     │
│  3. PRESERVACIÓN       → Garantizar integridad (hash, precinto, custodia)│
│  4. ANÁLISIS           → Examinar la evidencia para reconstruir hechos │
│  5. PRESENTACIÓN        → Documentar y comunicar (informe pericial)     │
└──────────────────────────────────────────────────────────────────────┘
        (la CADENA DE CUSTODIA recorre transversalmente todas las fases)
```

- **Identificación:** localizar los dispositivos y datos relevantes (ordenadores, móviles, servidores, la nube, dispositivos de red). Se decide qué es potencialmente relevante y en qué orden actuar.
- **Adquisición:** obtención de una copia forense. Aquí es crítico el **orden de volatilidad** y el uso de bloqueadores de escritura.
- **Preservación:** cálculo de hashes, precintado físico, etiquetado y registro en la cadena de custodia.
- **Análisis:** la fase más técnica y extensa; se reconstruyen los hechos a partir de los artefactos.
- **Presentación:** elaboración del informe pericial y, en su caso, ratificación ante el tribunal.

### 1.4. El orden de volatilidad (RFC 3227)

La **RFC 3227** ("Guidelines for Evidence Collection and Archiving", febrero de 2002) es un documento de referencia fundamental. Establece que la evidencia debe recolectarse de la **más volátil a la menos volátil**, porque los datos más volátiles desaparecen antes:

| Orden | Tipo de evidencia | Ejemplos |
|---|---|---|
| 1 (más volátil) | Registros y caché de CPU | Contenido de registros del procesador |
| 2 | Memoria RAM | Procesos, conexiones, claves de cifrado en memoria |
| 3 | Estado de red y conexiones | Tabla ARP, conexiones activas, tabla de rutas |
| 4 | Procesos en ejecución | Lista de procesos, tareas programadas |
| 5 | Disco (sistemas de archivos) | Archivos, MFT, journaling |
| 6 (menos volátil) | Soportes de respaldo y logs remotos | Backups, logs en servidores externos, configuración física |

La RFC 3227 también recomienda: minimizar cambios en los datos, no confiar en los programas del propio sistema comprometido (usar binarios de confianza), documentar cada acción con su hora exacta y proceder metódicamente.

### 1.5. Marco legal y normativo en España

El perito informático en España debe conocer el marco jurídico que da validez a su trabajo. Los pilares son:

**Legislación procesal y constitucional:**

- **Constitución Española, art. 18:** derecho al honor, la intimidad y el secreto de las comunicaciones. Cualquier acceso a comunicaciones o datos personales debe respetar estos derechos; su vulneración puede acarrear la nulidad de la prueba.
- **Ley de Enjuiciamiento Criminal (LECrim):** tras la reforma de la **LO 13/2015**, regula específicamente las medidas de investigación tecnológica (registro de dispositivos de almacenamiento masivo — art. 588 sexies, interceptación de comunicaciones, registro remoto de equipos). Establece la necesidad de **autorización judicial** para muchas actuaciones.
- **Ley 1/2000 de Enjuiciamiento Civil (LEC):** regula la **prueba pericial** en el ámbito civil, la figura del perito, su designación e informe.
- **Código Penal:** tipifica los delitos informáticos (acceso ilícito, daños informáticos, descubrimiento y revelación de secretos, estafa informática, etc.).

**Licitud de la prueba:** una prueba obtenida vulnerando derechos fundamentales es **nula** (doctrina del "fruto del árbol envenenado", art. 11.1 de la LOPJ). El perito debe garantizar que la evidencia se obtuvo de forma lícita y sin manipulación. Una cadena de custodia rota puede llevar a que la prueba pierda valor probatorio.

**Normas técnicas UNE (AENOR):**

- **UNE 71505:** "Tecnologías de la información. Sistema de gestión de evidencias electrónicas (SGEE)". Consta de tres partes (vocabulario y principios, buenas prácticas, formatos).
- **UNE 71506:** "Metodología para el análisis forense de las evidencias electrónicas". Es la norma española de referencia que describe las fases del proceso forense.

**Normas internacionales ISO/IEC (la familia forense):**

| Norma | Contenido |
|---|---|
| **ISO/IEC 27037** | Directrices para la **identificación, recolección, adquisición y preservación** de evidencias digitales. |
| **ISO/IEC 27041** | Guía para **garantizar la idoneidad y adecuación** de los métodos de investigación. |
| **ISO/IEC 27042** | Directrices para el **análisis e interpretación** de la evidencia digital. |
| **ISO/IEC 27043** | **Principios y procesos** de la investigación de incidentes. |

**Contexto institucional español:** en el ámbito policial destacan el **Grupo de Delitos Telemáticos (GDT) de la Guardia Civil** y la **Brigada de Investigación Tecnológica (BIT) de la Policía Nacional**, unidades especializadas en ciberdelincuencia. El **INCIBE** (Instituto Nacional de Ciberseguridad, en León) presta apoyo, formación y respuesta a incidentes (a través de INCIBE-CERT). Como perito, es importante conocer estas entidades y sus canales de colaboración.

### 1.6. La cadena de custodia

La **cadena de custodia** es el conjunto de procedimientos que garantizan la **integridad y trazabilidad** de la evidencia desde su recolección hasta su presentación en el juicio. Responde a la pregunta: *¿podemos demostrar que esta evidencia es la misma que se recogió y que no ha sido alterada?*

Elementos que la componen:

- **Documentación:** actas de recolección, formularios de custodia, fotografías del escenario, etiquetas identificativas.
- **Hashing:** cálculo de la huella digital (MD5/SHA-256) de la evidencia en el momento de la adquisición y en cada verificación posterior. Si el hash coincide, la integridad está garantizada.
- **Precintado:** los dispositivos se introducen en bolsas antiestáticas selladas con etiquetas numeradas y firmadas; se rompe el precinto solo de forma documentada.
- **Registro de transferencias:** cada vez que la evidencia cambia de manos o de ubicación, se anota (quién la entrega, quién la recibe, fecha y hora, motivo).

Ejemplo de campos de un **formulario de cadena de custodia**:

```text
Nº de caso / referencia: ___________________
Descripción del elemento: __________________
Nº de serie / identificador: _______________
Fotografía adjunta: [ ]
Hash de la imagen (SHA-256): _______________
Fecha y hora de adquisición: _______________
Perito que adquiere: _______________________
── Registro de transferencias ──
Fecha/Hora | Entrega (nombre/firma) | Recibe (nombre/firma) | Motivo
___________|_______________________|______________________|________
```

### 🧪 Laboratorio práctico 1.1: Verificación de integridad mediante hash

**Objetivo:** comprender por qué el hash garantiza la integridad y cómo cualquier modificación mínima lo cambia por completo (efecto avalancha).

**Entorno:** estación forense CAINE o SIFT (o cualquier Linux). Trabajo sobre un archivo de prueba creado por el alumno, sin datos reales.

```bash
# 1. Creamos un archivo de evidencia simulada
echo "Contenido original de la evidencia digital" > evidencia.txt

# 2. Calculamos su hash SHA-256 (huella digital)
sha256sum evidencia.txt
# Anotamos el hash en el formulario de cadena de custodia

# 3. Verificamos la integridad más tarde
sha256sum -c <<< "$(sha256sum evidencia.txt)"
# Resultado esperado: evidencia.txt: OK

# 4. Modificamos UN solo carácter y observamos el "efecto avalancha"
echo "Contenido modificado de la evidencia digital" > evidencia.txt
sha256sum evidencia.txt
# El hash es completamente distinto: la integridad se ha roto
```

**Cuestiones:** ¿por qué se recomienda SHA-256 frente a MD5 en contextos actuales? (colisiones conocidas en MD5). ¿Qué ocurre en la cadena de custodia si el hash de verificación no coincide con el original?

### ✍️ Ejercicios propuestos

1. **Ordena de mayor a menor volatilidad** los siguientes elementos y justifica según la RFC 3227: tabla de rutas, backup en cinta, memoria RAM, contenido del disco duro, tabla de conexiones activas, caché de CPU.
2. **Redacta un supuesto** en el que una prueba digital sea declarada nula por vulneración de derechos fundamentales, indicando qué artículo constitucional se ve afectado.
3. **Elabora una plantilla completa de formulario de cadena de custodia** para tu centro, incluyendo todos los campos necesarios y un espacio para al menos cinco transferencias.

---

## Unidad Didáctica 2. Recolección y preservación de evidencias. El primer respondiente

### 2.1. El primer respondiente (First Responder)

El **primer respondiente** es la persona que llega en primer lugar a la escena y toma las decisiones iniciales sobre las evidencias digitales. Sus decisiones son críticas e, a menudo, **irreversibles**. La regla básica es: *no tocar nada hasta tener un plan, y documentarlo todo desde el primer segundo*.

Las decisiones clave del primer respondiente incluyen:

- **¿El equipo está encendido o apagado?** Si está apagado, **no encenderlo** (encenderlo modifica marcas de tiempo, escribe en disco y puede activar mecanismos anti-forense). Si está encendido, se planteará el **análisis en vivo** (live forensics) para capturar la memoria RAM antes de apagarlo.
- **¿Se apaga o se mantiene encendido?** Existen dos filosofías: *pull the plug* (desconectar bruscamente para preservar el estado del disco y evitar rutinas de borrado) o *graceful shutdown*. Hoy, para preservar la volátil, casi siempre se hace **primero el volcado de RAM en vivo** y después la desconexión.
- **¿Está cifrado el disco?** (BitLocker, LUKS, FileVault). Si el equipo está encendido y desbloqueado, apagarlo puede dejar el disco **inaccesible para siempre**. Se debe capturar la memoria (que puede contener claves) y valorar la adquisición lógica en caliente.

### 2.2. Análisis en vivo (live) vs. análisis post-mortem

| Aspecto | Análisis en vivo (live) | Análisis post-mortem (dead) |
|---|---|---|
| Estado del equipo | Encendido, en funcionamiento | Apagado |
| Datos capturables | RAM, procesos, conexiones, disco | Solo disco |
| Alteración del sistema | Inevitable (documentada) | Mínima (con write blocker) |
| Reproducibilidad | Limitada (estado único) | Alta |
| Cuándo se usa | Cifrado activo, RAM crítica, sistemas que no pueden pararse | Caso general, equipos apagados |

### 2.3. Documentación de la escena

Antes de tocar nada, se documenta la escena:

- **Fotografía general** del puesto, cableado, pantallas encendidas (fotografiar lo que muestra la pantalla).
- **Inventario** de dispositivos: ordenadores, discos externos, pendrives, móviles, routers, cámaras, notas con contraseñas.
- **Etiquetado** de cada cable y puerto antes de desconectar.
- **Anotación de la hora del sistema** frente a la hora real (para corregir desviaciones de reloj en el timeline posterior).

### 2.4. Bloqueadores de escritura (write blockers)

Un **bloqueador de escritura** es un dispositivo (hardware) o mecanismo (software) que **permite leer** un soporte pero **impide cualquier escritura** sobre él, garantizando que la adquisición no altera el original. Son imprescindibles para preservar la integridad.

- **Hardware write blockers:** dispositivos físicos que se interponen entre el disco original y la estación de adquisición (por SATA, USB, IDE). Son la opción más robusta y reconocida judicialmente.
- **Software write blockers:** en Linux se puede montar en solo lectura o usar utilidades que bloquean la escritura a nivel de kernel. Ejemplo en CAINE con la utilidad de bloqueo integrada, o montaje `mount -o ro,noload`.

```bash
# Montaje forense en SOLO LECTURA (Linux) - nunca en rw sobre el original
sudo mount -o ro,noexec,nodev,noload /dev/sdb1 /mnt/evidencia
# Comprobar que está montado en modo lectura
mount | grep sdb1   # debe aparecer (ro,...)
```

### 🧪 Laboratorio práctico 2.1: Preparación de la estación forense y descarga de un dataset legal

**Objetivo:** montar el laboratorio y familiarizarse con datasets forenses públicos.

**Entorno:** máquina virtual con **CAINE** o **SIFT Workstation** en **red aislada** (adaptador *host-only* o sin red).

```bash
# 1. Verificar herramientas forenses instaladas en SIFT/CAINE
which sha256sum dd dcfldd foremost photorec ewfacquire
vol -h            # Volatility 3
tsk_recover -V    # The Sleuth Kit

# 2. Descargar (en un entorno con red controlada) una imagen de práctica pública.
#    Fuentes legales para docencia:
#    - Digital Corpora (https://digitalcorpora.org) - imágenes "M57-Patents", etc.
#    - NIST CFReDS (https://cfreds.nist.gov) - imágenes de referencia
#    - Volatility Foundation - memory samples públicos
# 3. Verificar el hash publicado por la fuente contra el descargado
sha256sum imagen_practica.dd
# Comparar con el hash oficial del dataset -> deben coincidir
```

**Nota ética:** todo el trabajo se realiza sobre datasets pensados para docencia. Nunca se manipulan datos personales reales sin cobertura legal.

### ✍️ Ejercicios propuestos

1. **Elabora un protocolo de actuación de primer respondiente** en una página, en forma de lista de comprobación (checklist) para un equipo (a) apagado y (b) encendido con posible cifrado.
2. **Investiga y compara** dos bloqueadores de escritura hardware comerciales frente a una solución software en CAINE, indicando ventajas e inconvenientes en un contexto judicial.
3. **Justifica** cuándo elegirías análisis en vivo frente a post-mortem para: un servidor de producción 24/7, un portátil apagado incautado, un equipo con BitLocker desbloqueado.

---

## Unidad Didáctica 3. Adquisición y análisis de memoria volátil (RAM)

### 3.1. Importancia de la memoria RAM

La **memoria RAM** es una de las fuentes de evidencia más valiosas y a la vez más volátiles. Contiene información que **no existe en ningún otro sitio**: procesos en ejecución (incluido malware que solo vive en memoria, *fileless*), conexiones de red activas, comandos ejecutados, contenido de portapapeles, claves de cifrado y contraseñas en claro, artefactos de inyección de código y datos descifrados. Por ello, en un equipo encendido, **el volcado de RAM debe ser lo primero** (orden de volatilidad).

### 3.2. Herramientas de adquisición de memoria

| Herramienta | Sistema | Descripción |
|---|---|---|
| **FTK Imager** | Windows | Herramienta gráfica gratuita; permite volcar RAM y crear imágenes de disco. Muy usada por su fiabilidad y aceptación. |
| **WinPMEM** | Windows | Volcador de memoria de código abierto (proyecto Rekall/Velociraptor). Ligero, por línea de comandos. |
| **DumpIt** | Windows | Utilidad de un solo clic que genera un volcado RAW de la RAM. |
| **LiME** (*Linux Memory Extractor*) | Linux | Módulo de kernel que vuelca la RAM de sistemas Linux/Android. |
| **AVML** | Linux | Volcador de memoria de Microsoft para Linux, sin dependencias. |

```bash
# --- Windows: volcado con WinPMEM ---
winpmem.exe -o memoria.raw --format raw
sha256sum memoria.raw > memoria.raw.sha256   # integridad inmediata

# --- Linux: volcado con LiME (módulo de kernel) ---
sudo insmod lime.ko "path=/media/evidencia/memoria.lime format=lime"
# 'format=lime' añade metadatos; 'format=raw' produce volcado plano
```

**Buenas prácticas de volcado:** guardar el volcado en un soporte externo (nunca en el disco investigado), calcular el hash inmediatamente, y anotar la herramienta y versión utilizadas para la reproducibilidad.

### 3.3. Análisis de memoria con Volatility 3

**Volatility 3** es el framework de referencia para el análisis de volcados de memoria. Reescrito respecto a Volatility 2, ya **no requiere especificar el perfil** (`--profile`): identifica automáticamente el sistema mediante los símbolos. Se invoca con `vol` o `python3 vol.py`.

Sintaxis general:

```bash
vol -f <archivo_volcado> <plugin> [opciones]
```

Plugins esenciales (nomenclatura de Volatility 3):

| Plugin | Función |
|---|---|
| `windows.info` | Información del sistema operativo del volcado |
| `windows.pslist` | Lista de procesos activos (recorriendo la lista enlazada del kernel) |
| `windows.pstree` | Procesos en forma de árbol (relaciones padre-hijo) |
| `windows.psscan` | Escaneo de procesos (detecta procesos ocultos/terminados) |
| `windows.netscan` | Conexiones de red y sockets |
| `windows.malfind` | Detección de posible código inyectado (memoria RWX sin respaldo en disco) |
| `windows.cmdline` | Argumentos de línea de comandos de cada proceso |
| `windows.dlllist` | DLLs cargadas por proceso |
| `windows.handles` | Handles abiertos (archivos, claves de registro, mutex) |
| `windows.hashdump` | Extracción de hashes de contraseñas (SAM) |
| `windows.filescan` | Objetos de archivo en memoria |
| `linux.pslist` / `linux.bash` | Procesos y comandos bash en volcados Linux |

Ejemplo de flujo de trabajo:

```bash
# 1. Identificar el sistema
vol -f memoria.raw windows.info

# 2. Enumerar procesos y buscar anomalías (nombres raros, rutas atípicas)
vol -f memoria.raw windows.pslist
vol -f memoria.raw windows.pstree   # ver el árbol: ¿un proceso hijo sospechoso?

# 3. Detectar procesos ocultos comparando pslist vs psscan
vol -f memoria.raw windows.psscan

# 4. Ver conexiones de red (posible C2 - command & control)
vol -f memoria.raw windows.netscan

# 5. Buscar inyección de código en procesos
vol -f memoria.raw windows.malfind -o ./dump_malfind/

# 6. Extraer líneas de comando (¿ejecución de scripts, PowerShell ofuscado?)
vol -f memoria.raw windows.cmdline
```

**Interpretación forense:** por ejemplo, un proceso `svchost.exe` cuyo padre **no** sea `services.exe`, o que aparezca en `psscan` pero no en `pslist`, es una fuerte señal de manipulación. Una región de memoria marcada como `PAGE_EXECUTE_READWRITE` sin fichero asociado que detecta `malfind` sugiere inyección de shellcode.

### 🧪 Laboratorio práctico 3.1: Análisis de un volcado de memoria público con Volatility 3

**Objetivo:** analizar un volcado de RAM de un dataset público e identificar un proceso malicioso.

**Entorno:** SIFT/CAINE aislada. Se usa un *memory sample* público de la Volatility Foundation o de un reto DFIR abierto (p. ej., muestras de práctica que acompañan a la documentación de Volatility).

```bash
# 1. Verificar integridad del sample descargado
sha256sum sample_publico.raw

# 2. Identificar el SO
vol -f sample_publico.raw windows.info

# 3. Árbol de procesos: localizar el proceso anómalo
vol -f sample_publico.raw windows.pstree

# 4. Inspeccionar el proceso sospechoso (sustituir <PID>)
vol -f sample_publico.raw windows.cmdline --pid <PID>
vol -f sample_publico.raw windows.dlllist --pid <PID>

# 5. Buscar inyección y volcar la región sospechosa
vol -f sample_publico.raw windows.malfind --pid <PID> -o ./evid_malfind/

# 6. Conexiones de red asociadas
vol -f sample_publico.raw windows.netscan
```

**Entregable:** breve informe con el PID del proceso malicioso, su proceso padre, la IP/puerto de C2 detectados y las evidencias que sustentan la conclusión.

### 🧪 Laboratorio práctico 3.2: Volcado de RAM de una VM propia y verificación

**Objetivo:** practicar la adquisición completa sobre un sistema controlado (VM propia).

```bash
# En la VM Windows de laboratorio:
winpmem.exe -o E:\memoria_lab.raw --format raw
# En la estación forense, verificar y analizar:
sha256sum memoria_lab.raw
vol -f memoria_lab.raw windows.pslist
vol -f memoria_lab.raw windows.netscan
```

Documentar hora, herramienta, versión y hash en el formulario de cadena de custodia.

### ✍️ Ejercicios propuestos

1. **Explica la diferencia** entre `pslist` y `psscan` y por qué comparar ambos permite detectar procesos ocultos.
2. **Investiga** qué información sensible (claves, contraseñas) puede recuperarse de un volcado de RAM y qué implicaciones legales tiene su tratamiento.
3. **Diseña una tabla de decisión** que indique, para tres escenarios distintos, qué plugins de Volatility 3 aplicarías y en qué orden.

---

## Unidad Didáctica 4. Adquisición y clonado forense de discos

### 4.1. Imagen forense frente a copia convencional

Una **copia convencional** (copiar/pegar archivos) solo replica los datos accesibles del sistema de archivos y modifica marcas de tiempo. Una **imagen forense** es una **copia bit a bit** (sector a sector) de todo el dispositivo, incluyendo:

- Espacio asignado (archivos visibles).
- **Espacio no asignado** (donde residen los archivos borrados).
- **Slack space** (espacio sobrante al final de los clústeres, que puede contener restos de datos anteriores).
- Sectores del sistema, tabla de particiones, áreas ocultas (HPA/DCO).

Solo la imagen bit a bit garantiza que **ningún dato queda fuera** y permite la recuperación de información borrada.

### 4.2. Formatos de imagen

| Formato | Extensión | Características |
|---|---|---|
| **RAW / dd** | `.dd`, `.raw`, `.img` | Copia plana exacta; sin metadatos ni compresión. Máxima compatibilidad. |
| **EWF / Expert Witness** | `.E01` | Formato de EnCase; incluye **metadatos del caso, compresión y hash integrado** por bloques (verificación de integridad interna). Muy usado judicialmente. |
| **AFF4** | `.aff4` | Formato abierto avanzado, soporta adquisición parcial y metadatos ricos. |

### 4.3. Herramientas de clonado

**dd** es la herramienta clásica de Unix para copia bit a bit. **dcfldd** es una versión mejorada (del *Defense Computer Forensics Lab*) que añade **hashing al vuelo**, barra de progreso y verificación. **Guymager** es una herramienta gráfica de adquisición forense muy usada en CAINE. **ewfacquire** genera imágenes E01.

```bash
# --- Identificar los discos (¡no confundir origen y destino!) ---
sudo fdisk -l
lsblk

# --- Clonado RAW con dd (origen /dev/sdb -> imagen) ---
sudo dd if=/dev/sdb of=/media/evidencia/imagen.dd bs=4M conv=noerror,sync status=progress
#   if = input file (dispositivo ORIGEN)
#   of = output file (imagen DESTINO)
#   conv=noerror,sync -> continúa ante errores de lectura y rellena con ceros
#   ¡ERROR FATAL: invertir if/of destruiría la evidencia!

# --- Clonado con dcfldd (hashing simultáneo) ---
sudo dcfldd if=/dev/sdb of=/media/evidencia/imagen.dd hash=sha256 \
     hashwindow=1G hashlog=/media/evidencia/imagen.hashes bs=4M

# --- Adquisición en formato E01 con ewfacquire ---
sudo ewfacquire /dev/sdb
#   pregunta interactivamente: nº caso, examinador, notas, formato, compresión...

# --- Verificación posterior de la imagen ---
sha256sum imagen.dd
ewfverify imagen.E01   # verifica los hashes internos del E01
```

**Regla de oro:** el clonado se realiza **siempre a través de un bloqueador de escritura** sobre el disco original, y se calcula el hash **antes y después** para demostrar que la imagen es fiel y que el original no se alteró.

### 4.4. Montaje de imágenes para análisis

Una vez adquirida, la imagen se **monta en solo lectura** o se procesa directamente con herramientas forenses, nunca se modifica.

```bash
# Ver la estructura de particiones de la imagen
mmls imagen.dd

# Montar una partición concreta en solo lectura (calcular offset = sector_inicio * 512)
sudo mount -o ro,loop,offset=$((2048*512)) imagen.dd /mnt/analisis

# Alternativa: mapear con kpartx o usar The Sleuth Kit directamente
sudo fls -r -o 2048 imagen.dd    # listar archivos con TSK sin montar
```

### 🧪 Laboratorio práctico 4.1: Adquisición forense de un pendrive con Guymager y verificación

**Objetivo:** realizar una adquisición completa y verificable de un dispositivo USB de prueba (preparado por el docente con datos ficticios).

**Pasos:**

1. Conectar el USB a través de un **bloqueador de escritura** (o montaje ro).
2. Abrir **Guymager** en CAINE, seleccionar el dispositivo.
3. Elegir formato **E01**, rellenar campos del caso (nº de caso, examinador, descripción).
4. Activar el cálculo de **hash MD5 y SHA-256** y la **verificación** posterior.
5. Iniciar la adquisición y esperar la confirmación de "verificación correcta".
6. Documentar el hash resultante en la cadena de custodia.

```bash
# Verificación por línea de comandos como comprobación cruzada
ewfverify caso001.E01
ewfinfo caso001.E01     # muestra metadatos: examinador, fecha, hashes
```

### ✍️ Ejercicios propuestos

1. **Explica con tus palabras** qué son el *slack space* y el espacio no asignado, y por qué solo una imagen bit a bit los conserva.
2. **Compara** los formatos RAW/dd y E01 en una tabla, indicando cuándo usar cada uno.
3. **Describe el riesgo** de invertir los parámetros `if` y `of` en `dd` y qué medidas de prevención aplicarías.

---

## Unidad Didáctica 5. Análisis de sistemas de archivos y recuperación de datos

### 5.1. Sistemas de archivos NTFS y EXT4

Comprender la estructura interna de los sistemas de archivos es esencial para localizar evidencias, recuperar datos borrados e interpretar marcas de tiempo.

**NTFS (New Technology File System — Windows):**

El elemento central es la **MFT (Master File Table)**, una base de datos donde **cada archivo y directorio tiene un registro** de 1 KB. Cada registro contiene *atributos*:

- `$STANDARD_INFORMATION`: marcas de tiempo MACE (Modified, Accessed, Changed/MFT, Entry created) y permisos.
- `$FILE_NAME`: nombre y otra copia de marcas de tiempo (útil para detectar *timestomping*).
- `$DATA`: los datos del archivo (si es pequeño, residen en la propia MFT — *resident*).

NTFS mantiene un **journaling** ($LogFile y $UsafeJournal / $J) que registra los cambios y permite reconstruir actividad. Los flujos de datos alternativos (**ADS**, *Alternate Data Streams*) pueden ocultar información.

**EXT4 (Linux):**

Se basa en **inodos**: cada archivo tiene un inodo con sus metadatos (permisos, propietario, marcas de tiempo — incluyendo `crtime`, tiempo de creación) y punteros a los bloques de datos. EXT4 usa **journaling** ($journal) para garantizar la consistencia. Cuando se borra un archivo, el inodo se marca como libre pero los datos permanecen hasta ser sobrescritos.

| Concepto | NTFS | EXT4 |
|---|---|---|
| Estructura central | MFT (registros) | Tabla de inodos |
| Marcas de tiempo | MACE (x2: $SI y $FN) | atime, mtime, ctime, crtime |
| Journaling | $LogFile, $J | $journal |
| Ocultación típica | ADS, timestomping | atributos extendidos |

### 5.2. Análisis con The Sleuth Kit y Autopsy

**The Sleuth Kit (TSK)** es un conjunto de herramientas de línea de comandos para análisis forense de sistemas de archivos. **Autopsy** es su interfaz gráfica, que además añade módulos de ingesta (extracción de artefactos web, correo, EXIF, keyword search, etc.).

Herramientas TSK organizadas por "capa":

```bash
# Capa de sistema de archivos
fsstat imagen.dd                 # información del sistema de archivos

# Capa de nombres de archivo
fls -r -p imagen.dd              # lista archivos y directorios (incluidos borrados, marcados *)
fls -rd imagen.dd                # solo archivos borrados

# Capa de metadatos (inodo / registro MFT)
istat imagen.dd 12345            # detalles del inodo/registro 12345

# Capa de datos (contenido)
icat imagen.dd 12345 > archivo_recuperado   # extraer el contenido de un inodo

# Recuperar todos los archivos borrados posibles
tsk_recover -e imagen.dd ./recuperados/
```

En **Autopsy** se crea un caso, se añade la imagen como fuente de datos, se ejecutan los módulos de ingesta y se navega por la línea temporal, los archivos recuperados, los resultados de búsqueda por palabras clave y los artefactos extraídos.

### 5.3. Recuperación de datos borrados y file carving

Existen dos aproximaciones a la recuperación:

- **Recuperación basada en metadatos:** aprovecha que el inodo/registro MFT del archivo borrado aún existe (TSK, `tsk_recover`).
- **File carving:** cuando los metadatos ya no existen, se buscan **patrones de cabecera y pie de archivo** (*magic numbers*) directamente en el flujo de bytes del espacio no asignado. Por ejemplo, un JPEG empieza por `FF D8 FF` y termina por `FF D9`.

Herramientas de carving:

| Herramienta | Descripción |
|---|---|
| **foremost** | Carving por firmas configurable (foremost.conf). Rápido y clásico. |
| **PhotoRec** | Recupera más de 480 tipos de archivo; muy eficaz. Acompaña a TestDisk. |
| **scalpel** | Derivado de foremost, orientado a rendimiento. |
| **bulk_extractor** | Extrae emails, tarjetas, URLs, IPs del flujo bruto sin analizar el FS. |

```bash
# Carving con foremost (extrae por tipos hacia ./salida)
foremost -t jpg,pdf,doc,zip -i imagen.dd -o ./salida_foremost/
cat ./salida_foremost/audit.txt      # informe de lo recuperado

# Carving con PhotoRec (interactivo, guiado por menús)
photorec imagen.dd

# Extracción de artefactos con bulk_extractor
bulk_extractor -o ./bulk_out/ imagen.dd
```

### 5.4. Análisis del Registro de Windows con RegRipper

El **Registro de Windows** es una mina de evidencias: dispositivos USB conectados, programas ejecutados, cuentas de usuario, últimos documentos abiertos, configuración de red. Los *hives* principales son `SYSTEM`, `SOFTWARE`, `SAM`, `SECURITY` (en `Windows\System32\config`) y `NTUSER.DAT` (por usuario).

**RegRipper** automatiza la extracción mediante *plugins*:

```bash
# Extraer información de un hive concreto
rip.pl -r NTUSER.DAT -f ntuser        # perfil de usuario (documentos recientes, run...)
rip.pl -r SYSTEM -p usbstor           # dispositivos USB conectados
rip.pl -r SOFTWARE -p winver          # versión de Windows instalada
```

### 🧪 Laboratorio práctico 5.1: Recuperación de archivos borrados con foremost y PhotoRec

**Objetivo:** recuperar archivos eliminados de una imagen de práctica pública (Digital Corpora / CFReDS).

```bash
# 1. Verificar integridad de la imagen
sha256sum imagen_practica.dd

# 2. Ver el sistema de archivos
fsstat imagen_practica.dd

# 3. Listar archivos borrados con TSK
fls -rd imagen_practica.dd

# 4. Recuperar por metadatos
tsk_recover -e imagen_practica.dd ./recuperados_tsk/

# 5. Carving por firmas (para lo que ya no tiene metadatos)
foremost -i imagen_practica.dd -o ./recuperados_foremost/
cat ./recuperados_foremost/audit.txt

# 6. Verificar el hash de cada archivo recuperado y documentarlo
sha256sum ./recuperados_foremost/jpg/*.jpg
```

**Entregable:** tabla con los archivos recuperados, su tipo, tamaño, método de recuperación (metadatos vs carving) y hash.

### 🧪 Laboratorio práctico 5.2: Análisis de la MFT y detección de timestomping

**Objetivo:** identificar un archivo cuyas marcas de tiempo han sido manipuladas comparando `$STANDARD_INFORMATION` y `$FILE_NAME`.

```bash
# Con TSK, inspeccionar un registro MFT concreto
istat imagen_practica.dd <nº_registro>
# Comparar las marcas de $SI y $FN: una discrepancia sospechosa (p. ej., $SI muy anterior a $FN)
# es un indicio clásico de timestomping (herramientas como timestomp).
```

### ✍️ Ejercicios propuestos

1. **Dibuja un esquema** de un registro de la MFT indicando sus atributos principales y qué información forense aporta cada uno.
2. **Explica la diferencia** entre recuperación por metadatos y file carving, y en qué situación cada una es la única viable.
3. **Investiga** tres claves del Registro de Windows con valor forense y qué evidencia aporta cada una.

---

## Unidad Didáctica 6. Análisis de metadatos y construcción de líneas temporales (timelines)

### 6.1. El valor de la línea temporal

Reconstruir **qué ocurrió y en qué orden** es a menudo el objetivo central de una investigación. Una **línea temporal (timeline)** ordena cronológicamente todos los eventos que el sistema ha registrado: creación/modificación de archivos, ejecución de programas, inicios de sesión, conexiones de red, entradas de registro, logs de eventos. Correlacionar estos eventos permite responder preguntas como *"¿el usuario descargó el archivo antes o después de que llegara el correo?"*.

### 6.2. Fuentes de eventos temporales

- **Marcas de tiempo del sistema de archivos** (MACE en NTFS, atime/mtime/ctime/crtime en EXT4).
- **Registro de Windows** (última ejecución, dispositivos, MRU).
- **Logs de eventos de Windows** (`.evtx`): inicios de sesión (4624/4625), creación de procesos (4688), servicios, etc.
- **Artefactos de navegación web** (historial, caché, cookies).
- **Logs de aplicaciones** y del sistema (`syslog`, `journald` en Linux).
- **Prefetch, Amcache, ShimCache** (evidencias de ejecución en Windows).

### 6.3. Metadatos de archivos

Los **metadatos** son "datos sobre los datos". Un archivo de imagen JPEG puede contener **EXIF** con la fecha de captura, el modelo de cámara e incluso **coordenadas GPS**. Un documento de ofimática guarda autor, fechas y a veces el historial de revisiones.

```bash
# Extraer metadatos con exiftool
exiftool foto.jpg           # muestra EXIF: fecha, cámara, GPS...
exiftool documento.docx     # autor, software, fechas de creación/modificación

# Extracción masiva a CSV para análisis
exiftool -r -csv ./directorio/ > metadatos.csv
```

### 6.4. plaso / log2timeline: la "super timeline"

**plaso** (Plaso Langar Að Safna Öllu) es el framework de referencia para crear **super timelines**: combina automáticamente decenas de fuentes de artefactos en una única línea temporal. Sus dos herramientas principales:

- **`log2timeline.py`**: recorre la imagen o el directorio y extrae todos los eventos a un almacén intermedio (`.plaso`).
- **`psort.py`**: ordena, filtra y exporta el resultado a formatos analizables (CSV, ELK, etc.).

```bash
# 1. Generar el almacenamiento de eventos a partir de la imagen
log2timeline.py --storage-file caso.plaso imagen.dd

# 2. Ver información de lo recopilado
pinfo.py caso.plaso

# 3. Exportar a CSV ordenado cronológicamente
psort.py -o l2tcsv -w timeline.csv caso.plaso

# 4. Filtrar por rango de fechas (acotar el incidente)
psort.py -o l2tcsv -w timeline_filtrado.csv caso.plaso \
     "date > '2024-01-10 00:00:00' AND date < '2024-01-12 23:59:59'"
```

El resultado, abierto en una hoja de cálculo o en herramientas como **Timesketch**, permite navegar el incidente evento a evento.

### 6.5. KAPE: recolección dirigida de artefactos

**KAPE** (*Kroll Artifact Parser and Extractor*) es una herramienta para Windows que **recolecta y procesa artefactos de forma dirigida y muy rápida**, ideal en respuesta a incidentes cuando no hay tiempo para una imagen completa. Usa *Targets* (qué recolectar: MFT, Registro, EVTX, Prefetch...) y *Modules* (qué parsear con qué herramienta). Es especialmente útil para *triage* inicial.

### 🧪 Laboratorio práctico 6.1: Super timeline con plaso sobre una imagen pública

**Objetivo:** construir una línea temporal completa y localizar la secuencia de un incidente simulado.

```bash
# 1. Integridad
sha256sum imagen_practica.dd

# 2. Crear el almacén de eventos
log2timeline.py --storage-file caso.plaso imagen_practica.dd

# 3. Exportar a CSV
psort.py -o l2tcsv -w timeline.csv caso.plaso

# 4. Analizar en hoja de cálculo: filtrar por el usuario/fecha del incidente,
#    localizar: descarga -> ejecución -> creación de persistencia -> conexión de red
```

**Entregable:** narrativa cronológica del incidente (5-10 eventos clave) con la marca de tiempo y la fuente de cada uno.

### ✍️ Ejercicios propuestos

1. **Extrae con exiftool** los metadatos de tres fotografías (propias o de un dataset) e identifica cuáles contienen coordenadas GPS. Reflexiona sobre las implicaciones de privacidad.
2. **Explica** por qué una super timeline es más potente que analizar cada artefacto por separado, y qué riesgo introduce la desviación del reloj del sistema.
3. **Enumera** cinco fuentes de eventos temporales en Windows y qué tipo de actividad delata cada una.

---

## Unidad Didáctica 7. Análisis de tráfico de red y de código malicioso

### 7.1. Fundamentos del análisis forense de red

El **análisis forense de red** (*network forensics*) estudia el tráfico capturado para reconstruir comunicaciones, identificar exfiltración de datos, localizar servidores de mando y control (**C2**), y detectar intrusiones. La evidencia principal es el **archivo PCAP** (*Packet Capture*), que contiene los paquetes capturados con sus marcas de tiempo.

### 7.2. Captura y análisis con Wireshark y tshark

**Wireshark** es el analizador de protocolos gráfico de referencia; **tshark** es su versión de línea de comandos, ideal para automatizar y procesar grandes capturas. **Zeek** (antes Bro) es un motor de análisis de red que genera logs estructurados de alto nivel.

```bash
# Captura (en el interfaz de laboratorio aislado, con permisos)
sudo tshark -i eth0 -w captura.pcap

# --- Análisis de un PCAP existente ---
# Estadísticas de protocolos
tshark -r captura.pcap -q -z io,phs

# Extraer conversaciones IP (quién habla con quién y cuánto)
tshark -r captura.pcap -q -z conv,ip

# Filtrar peticiones HTTP y ver hosts y URIs solicitadas
tshark -r captura.pcap -Y "http.request" -T fields \
       -e ip.src -e http.host -e http.request.uri

# Extraer consultas DNS (posible tunneling o dominios C2 sospechosos)
tshark -r captura.pcap -Y "dns.flags.response == 0" -T fields -e dns.qry.name

# Seguir un flujo TCP concreto
tshark -r captura.pcap -q -z follow,tcp,ascii,0
```

Filtros de visualización útiles en Wireshark: `http.request`, `dns`, `ip.addr == x.x.x.x`, `tcp.port == 443`, `tcp.flags.syn == 1 && tcp.flags.ack == 0` (SYN de escaneo/inicio de conexión), `ftp || telnet` (protocolos en claro con posibles credenciales).

### 7.3. Análisis con Zeek

**Zeek** procesa un PCAP y genera **logs por protocolo** (conn.log, dns.log, http.log, ssl.log, files.log...), mucho más manejables para investigar volúmenes grandes.

```bash
# Procesar un PCAP con Zeek (genera los .log en el directorio actual)
zeek -r captura.pcap

# Analizar conexiones con zeek-cut (extrae columnas concretas)
cat conn.log | zeek-cut id.orig_h id.resp_h id.resp_p proto duration
cat dns.log  | zeek-cut query   # todos los dominios consultados
cat http.log | zeek-cut host uri method   # actividad web
```

Zeek facilita la detección de **beaconing** (conexiones periódicas y regulares a un mismo host, típicas de un C2) y la extracción de ficheros transferidos (`files.log`).

### 7.4. Análisis de malware: enfoque defensivo y precauciones

> ⚠️ **ADVERTENCIA ÉTICA Y DE SEGURIDAD (obligatoria):** el análisis de malware en este módulo es **exclusivamente defensivo y pericial**. **Nunca** se descarga ni se ejecuta malware real fuera de un entorno de sandbox **aislado**. Se emplean el fichero de prueba **EICAR** (inofensivo, diseñado para probar antivirus) y **datasets docentes** de muestras neutralizadas. Precauciones imprescindibles:
> - **Red totalmente aislada** (host-only o sin red) para el análisis dinámico.
> - **Snapshots** de la VM antes de cada ejecución, para revertir.
> - **Nunca** copiar muestras al equipo anfitrión ni a soportes compartidos.
> - Etiquetar claramente los soportes con muestras.

El análisis de malware se divide en **estático** (sin ejecutar) y **dinámico** (ejecutando en entorno controlado).

**Análisis estático básico:**

```bash
# El fichero de prueba EICAR (inofensivo) - cadena estándar de test antivirus
echo 'X5O!P%@AP[4\PZX54(P^)7CC)7}$EICAR-STANDARD-ANTIVIRUS-TEST-FILE!$H+H*' > eicar.com

# 1. Identificar tipo real del fichero (no fiarse de la extensión)
file muestra.bin

# 2. Extraer cadenas legibles (URLs, IPs, nombres, comandos)
strings -n 8 muestra.bin | less
strings -e l muestra.bin      # cadenas Unicode (UTF-16)

# 3. Calcular hashes para buscar en bases de reputación (VirusTotal, etc.)
sha256sum muestra.bin
md5sum muestra.bin

# 4. Analizar cabeceras PE de un ejecutable Windows
pev muestra.exe               # info del PE
# secciones, imports (¿WinAPI sospechosas: VirtualAlloc, CreateRemoteThread?)
```

**Reglas YARA** para identificación de patrones:

```text
rule Detecta_Cadena_Sospechosa
{
    meta:
        author = "alumno FP ciberseguridad"
        description = "Ejemplo docente: detecta un patrón de ejemplo"
    strings:
        $a = "http://malicioso.example/c2" ascii
        $b = { 6A 40 68 00 30 00 00 }   // patrón de bytes (opcode)
        $mz = "MZ"
    condition:
        $mz at 0 and ($a or $b)
}
```

```bash
# Escanear un fichero o directorio con una regla YARA
yara regla.yar muestra.bin
yara -r reglas/ ./directorio_sospechoso/
```

**Análisis dinámico y sandboxing:** en un **sandbox aislado** (por ejemplo **Cuckoo/CAPE Sandbox** desplegado en laboratorio, o servicios en línea como **ANY.RUN** *usados como servicio externo con muestras controladas*) se ejecuta la muestra y se observa su comportamiento: procesos creados, ficheros modificados, claves de registro, tráfico de red generado. El resultado es un informe con los **IOC** observados.

### 7.5. Indicadores de compromiso (IOC)

Un **IOC** (*Indicator of Compromise*) es una evidencia observable que indica una intrusión. Se documentan para detección y compartición (formatos **STIX/TAXII**, **MISP**):

| Tipo de IOC | Ejemplos |
|---|---|
| **Basados en red** | IP/dominio de C2, URL, patrón de tráfico (beaconing) |
| **Basados en host** | Hash de fichero (MD5/SHA-256), nombre/ruta de fichero, clave de registro de persistencia, mutex |
| **De comportamiento** | Secuencia de acciones (TTP), técnica MITRE ATT&CK asociada |

El marco **MITRE ATT&CK** permite clasificar las **TTP** (Tácticas, Técnicas y Procedimientos) observadas, dando un lenguaje común para describir la actividad del adversario.

### 🧪 Laboratorio práctico 7.1: Análisis de un PCAP con tshark y Zeek

**Objetivo:** identificar comunicación sospechosa en una captura pública (dataset docente o reto DFIR abierto).

```bash
# 1. Integridad
sha256sum captura.pcap

# 2. Panorama general de protocolos
tshark -r captura.pcap -q -z io,phs

# 3. Procesar con Zeek y revisar dominios consultados
zeek -r captura.pcap
cat dns.log | zeek-cut query | sort | uniq -c | sort -rn | head

# 4. Localizar conexiones regulares (posible beaconing) y descargas
cat conn.log | zeek-cut id.resp_h id.resp_p duration | sort | uniq -c | sort -rn
cat http.log | zeek-cut host uri

# 5. Documentar los IOC de red encontrados (IP, dominio, URI)
```

### 🧪 Laboratorio práctico 7.2: Triaje estático con strings, YARA y EICAR

**Objetivo:** practicar análisis estático de forma 100 % segura con EICAR y una muestra docente neutralizada.

```bash
# 1. Generar EICAR y comprobar que el antivirus lo detecta (test inofensivo)
echo 'X5O!P%@AP[4\PZX54(P^)7CC)7}$EICAR-STANDARD-ANTIVIRUS-TEST-FILE!$H+H*' > eicar.com
clamscan eicar.com     # debe reportar detección

# 2. Sobre una muestra docente: tipo, cadenas y hash
file muestra_docente.bin
strings -n 8 muestra_docente.bin | grep -Ei 'http|\.exe|cmd|powershell'
sha256sum muestra_docente.bin

# 3. Crear una regla YARA que detecte una cadena característica y escanear
yara mi_regla.yar muestra_docente.bin
```

**Recordatorio:** todo en la VM aislada, con snapshot previo. Sin ejecución de la muestra en esta práctica estática.

### ✍️ Ejercicios propuestos

1. **Redacta una regla YARA** que detecte ficheros PE (`MZ` al inicio) que contengan a la vez la cadena "cmd.exe" y una URL. Pruébala contra ficheros de prueba.
2. **Explica qué es el beaconing** y cómo lo detectarías a partir de un `conn.log` de Zeek.
3. **Clasifica** cinco IOC de ejemplo según sean de red, de host o de comportamiento, y asocia al menos uno a una técnica de MITRE ATT&CK.

---

## Unidad Didáctica 8. Elaboración del informe pericial y ratificación

### 8.1. El informe pericial: naturaleza y requisitos

El **informe pericial** es el producto final del trabajo forense y, con frecuencia, la única parte que verá el tribunal. Debe cumplir dos exigencias aparentemente opuestas: **rigor técnico** (todo verificable y reproducible) y **claridad** (comprensible para jueces, fiscales y abogados sin formación técnica). Un informe excelente pero incomprensible es inútil; un informe claro pero sin rigor, impugnable.

Requisitos de un buen informe pericial:

- **Objetividad e imparcialidad:** el perito informa sobre hechos, no defiende a una parte. En el ámbito judicial presta juramento o promesa de actuar con objetividad (art. 335 LEC).
- **Trazabilidad:** cada conclusión se apoya en evidencias identificables y en una metodología descrita.
- **Reproducibilidad:** otro perito debe poder repetir el análisis.
- **Integridad demostrable:** hashes y cadena de custodia documentados.

### 8.2. Estructura del informe pericial

Aunque no existe un formato único obligatorio, una estructura ampliamente aceptada (alineada con UNE 197001 para informes periciales y con las buenas prácticas del sector) es:

```text
1. PORTADA E IDENTIFICACIÓN
   - Título, nº de caso, perito (nombre, titulación, colegiación si aplica), fecha
2. ÍNDICE
3. OBJETO DEL INFORME
   - Qué se ha solicitado, preguntas a responder (objetivos periciales)
4. ALCANCE Y LIMITACIONES
   - Qué se ha analizado y qué queda fuera; condicionantes
5. DECLARACIÓN DE INDEPENDENCIA / TACHA
6. RELACIÓN DE EVIDENCIAS Y CADENA DE CUSTODIA
   - Inventario, hashes, cómo se adquirieron y preservaron
7. METODOLOGÍA Y HERRAMIENTAS
   - Normas seguidas (UNE 71506, ISO 27037...), software y versiones
8. ANÁLISIS Y HALLAZGOS
   - Desarrollo técnico, con evidencias numeradas y capturas
9. CONCLUSIONES
   - Respuestas claras a los objetivos, trazables a los hallazgos
10. ANEXOS
   - Volcados, timelines, capturas, glosario, cadena de custodia completa
```

### 8.3. Redacción técnica y comprensible

Buenas prácticas de redacción:

- **Separar hechos de opiniones/interpretaciones.** "El fichero X tiene el hash Y" es un hecho; "esto indica que el usuario descargó el fichero" es una interpretación que debe justificarse.
- **Numerar las evidencias** (Evidencia 1, 2...) y referenciarlas en las conclusiones.
- **Usar un glosario** para los términos técnicos (hash, MFT, C2...).
- **Incluir capturas de pantalla** de las herramientas con la evidencia visible.
- **Escribir las conclusiones en lenguaje llano**, respondiendo directamente a las preguntas planteadas.
- **Evitar el lenguaje ambiguo** o afirmaciones no sustentadas; usar niveles de certeza cuando proceda ("es altamente probable que...", indicando el fundamento).

### 8.4. Presentación de evidencias y conclusiones

Cada hallazgo relevante debe presentarse con: **descripción**, **cómo se obtuvo** (herramienta, comando), **la evidencia en sí** (captura, hash) y **su significado**. Las conclusiones cierran el círculo respondiendo a los objetivos del apartado 3. Una conclusión no puede introducir hechos nuevos que no aparezcan en el análisis.

### 8.5. La ratificación

La **ratificación** es el acto por el que el perito comparece ante el tribunal (juicio oral) para **confirmar su informe, explicarlo y responder a las preguntas** de las partes (interrogatorio y contrainterrogatorio). El perito debe:

- Dominar por completo su informe y ser capaz de explicarlo sin tecnicismos innecesarios.
- Mantener la **objetividad** también bajo presión del contrainterrogatorio.
- Reconocer las **limitaciones** de su análisis con honestidad (no afirmar más de lo que la evidencia sustenta).
- Estar preparado para defender la **metodología** y la **cadena de custodia** (es donde más se ataca la validez de la prueba).

### 🧪 Laboratorio práctico 8.1: Redacción de un informe pericial completo

**Objetivo:** redactar un informe pericial real a partir de uno de los laboratorios previos (p. ej., el análisis de memoria de la UD3 o la timeline de la UD6).

**Pasos:**

1. Tomar los hallazgos de un caso analizado en laboratorio.
2. Redactar el informe siguiendo la estructura del apartado 8.2.
3. Incluir la relación de evidencias con sus hashes y la cadena de custodia.
4. Documentar la metodología (normas, herramientas y versiones).
5. Redactar conclusiones que respondan a objetivos periciales concretos.
6. Adjuntar capturas y un glosario.

**Entregable:** informe pericial de 8-15 páginas listo para "ratificar" en una simulación de juicio en clase.

### ✍️ Ejercicios propuestos

1. **Reescribe** un párrafo técnico denso (que te proporcione el docente) para que sea comprensible por un juez sin formación informática, sin perder rigor.
2. **Prepara** una lista de 10 preguntas que un abogado de la parte contraria podría hacerte en la ratificación y esboza tus respuestas.
3. **Identifica** en un informe de ejemplo tres afirmaciones que mezclen hecho e interpretación y sepáralas correctamente.

---

## Proyecto integrador del módulo

### Enunciado: "Operación Cuaderno Azul" (caso simulado)

La empresa ficticia *Cloudyole Solutions S.L.* sospecha que un empleado ha **exfiltrado información confidencial** y ha dejado un equipo comprometido con software malicioso. El departamento legal solicita un **peritaje informático completo**. Se entrega al alumnado un **conjunto de evidencias docentes** (imagen de disco pública tipo M57/CFReDS adaptada, un volcado de memoria y una captura PCAP), todas de origen legal y pensadas para docencia.

### Fases del proyecto

1. **Planificación y marco legal:** definir objetivos periciales, identificar la normativa aplicable (LECrim, UNE 71506, ISO 27037) y preparar la documentación de cadena de custodia.
2. **Adquisición y preservación:** verificar la integridad de todas las evidencias entregadas (hashes SHA-256), registrar la cadena de custodia y montar las imágenes en solo lectura.
3. **Análisis de memoria (Volatility 3):** identificar procesos maliciosos, inyección de código y conexiones C2.
4. **Análisis de disco (Autopsy/TSK, foremost):** recuperar archivos borrados, analizar la MFT/registro y localizar los documentos exfiltrados.
5. **Timeline (plaso):** construir una super timeline y reconstruir la secuencia del incidente.
6. **Análisis de red (Zeek/tshark):** identificar la exfiltración y los IOC de red.
7. **Correlación e IOC:** consolidar todos los indicadores de compromiso (host y red) y mapearlos a MITRE ATT&CK.
8. **Informe pericial:** redactar el informe completo y prepararlo para ratificación.
9. **Ratificación (simulación):** defensa oral del informe ante un "tribunal" (docente y compañeros).

### Entregables

- Documentación de cadena de custodia cumplimentada.
- Cuaderno de laboratorio con todos los comandos y hashes.
- Super timeline (CSV) del incidente.
- Listado de IOC en formato estructurado.
- **Informe pericial** completo.
- Presentación/defensa oral (ratificación simulada).

---

## Evaluación y rúbrica

### Ponderación por Resultado de Aprendizaje

| RA | Peso | Instrumento de evaluación |
|---|---|---|
| RA1 (Metodología y marco legal) | 15 % | Prueba teórica + ejercicios |
| RA2 (Adquisición) | 20 % | Prácticas de laboratorio evaluadas |
| RA3 (Análisis de sistemas y memoria) | 25 % | Prácticas + proyecto integrador |
| RA4 (Red y malware) | 20 % | Prácticas de laboratorio + IOC |
| RA5 (Informe pericial) | 20 % | Informe del proyecto + ratificación |

### Rúbrica de evaluación (niveles de desempeño)

| Criterio | Insuficiente (0-4) | Suficiente-Bien (5-7) | Notable-Excelente (8-10) |
|---|---|---|---|
| **Metodología y cadena de custodia** | No documenta o rompe la integridad | Documenta lo básico; algún hash sin verificar | Cadena de custodia impecable, hashes verificados, normas citadas |
| **Adquisición forense** | Altera el original o no verifica | Imagen correcta con verificación básica | Imagen verificada, formato adecuado, write blocker, documentación completa |
| **Análisis técnico** | Hallazgos erróneos o sin fundamento | Identifica los hallazgos principales | Análisis profundo, correlaciona fuentes, detecta anti-forense |
| **Uso de herramientas** | Uso incorrecto o inseguro | Uso correcto guiado | Uso autónomo, eficiente y justificado de múltiples herramientas |
| **Seguridad y ética** | Manipula malware sin aislamiento | Aplica precauciones básicas | Aislamiento riguroso, snapshots, enfoque defensivo ejemplar |
| **Informe pericial** | Confuso, sin estructura ni trazabilidad | Estructurado y comprensible | Riguroso, claro, trazable, defendible en ratificación |

**Criterio de superación:** para aprobar el módulo se debe alcanzar al menos un 5 en cada RA. La **manipulación insegura de malware real** o la **rotura deliberada de la cadena de custodia** en el proyecto conllevan la no superación de la práctica correspondiente.

---

## Glosario

- **ADS (Alternate Data Streams):** flujos de datos alternativos de NTFS que pueden ocultar información.
- **Cadena de custodia:** procedimientos que garantizan la integridad y trazabilidad de la evidencia.
- **Carving (file carving):** recuperación de ficheros por sus firmas de cabecera/pie, sin metadatos.
- **C2 (Command & Control):** infraestructura del atacante para controlar sistemas comprometidos.
- **DFIR:** *Digital Forensics and Incident Response*, forense digital y respuesta a incidentes.
- **EWF / E01:** formato de imagen forense (Expert Witness) con metadatos y hash integrados.
- **Hash:** huella digital de longitud fija (MD5, SHA-256) que verifica la integridad de los datos.
- **HPA/DCO:** áreas ocultas de un disco duro (Host Protected Area / Device Configuration Overlay).
- **IOC (Indicator of Compromise):** evidencia observable de una intrusión.
- **MFT (Master File Table):** tabla central de NTFS que describe cada archivo/directorio.
- **MACE:** marcas de tiempo NTFS (Modified, Accessed, Changed, Entry created).
- **PCAP:** archivo de captura de paquetes de red.
- **Slack space:** espacio sobrante al final de un clúster que puede contener restos de datos.
- **Sandbox:** entorno aislado para ejecutar y observar código potencialmente malicioso.
- **Super timeline:** línea temporal que combina múltiples fuentes de artefactos (plaso).
- **Timestomping:** manipulación de las marcas de tiempo de un archivo para dificultar el análisis.
- **TTP:** Tácticas, Técnicas y Procedimientos del adversario (MITRE ATT&CK).
- **Write blocker:** dispositivo/mecanismo que impide la escritura sobre un soporte durante la adquisición.
- **YARA:** lenguaje/herramienta para crear reglas de detección de patrones en ficheros.

---

## Recursos y bibliografía

### Normativa técnica

- **RFC 3227** — *Guidelines for Evidence Collection and Archiving* (IETF, 2002). Orden de volatilidad y recolección de evidencias.
- **UNE 71505** — *Sistema de gestión de evidencias electrónicas (SGEE)* (AENOR).
- **UNE 71506** — *Metodología para el análisis forense de las evidencias electrónicas* (AENOR).
- **UNE 197001** — Requisitos generales para la elaboración de informes y dictámenes periciales.
- **ISO/IEC 27037** — Identificación, recolección, adquisición y preservación de evidencias digitales.
- **ISO/IEC 27041** — Aseguramiento de la idoneidad de los métodos de investigación.
- **ISO/IEC 27042** — Análisis e interpretación de la evidencia digital.
- **ISO/IEC 27043** — Principios y procesos de la investigación de incidentes.

### Marco legal (España)

- **Constitución Española**, art. 18 (intimidad, secreto de las comunicaciones).
- **Ley de Enjuiciamiento Criminal (LECrim)**, especialmente tras la LO 13/2015 (medidas de investigación tecnológica, arts. 588 y ss.).
- **Ley 1/2000 de Enjuiciamiento Civil (LEC)**, prueba pericial (arts. 335 y ss.).
- **Ley Orgánica del Poder Judicial (LOPJ)**, art. 11.1 (licitud de la prueba).
- **Código Penal**, delitos informáticos.

### Instituciones de referencia

- **INCIBE / INCIBE-CERT** — Instituto Nacional de Ciberseguridad (León).
- **Grupo de Delitos Telemáticos (GDT)** de la Guardia Civil.
- **Brigada de Investigación Tecnológica (BIT)** de la Policía Nacional.
- **CCN-CERT** — Centro Criptológico Nacional (ámbito de las AAPP).

### Herramientas (documentación oficial)

- **The Sleuth Kit y Autopsy** — sleuthkit.org
- **Volatility 3** — volatilityfoundation.org
- **FTK Imager** (Exterro) y **Guymager** (adquisición)
- **dd / dcfldd**, **ewfacquire/ewfverify** (libewf)
- **foremost, PhotoRec/TestDisk, bulk_extractor, scalpel** (carving)
- **plaso / log2timeline** y **Timesketch** (timelines)
- **KAPE** (Kroll) — recolección dirigida
- **RegRipper** (registro de Windows)
- **Wireshark / tshark**, **Zeek** (red)
- **YARA**, **pev/PE-bear**, **strings** (malware estático)
- **Cuckoo / CAPE Sandbox** (sandboxing), **ANY.RUN** (servicio en línea)
- **CAINE** y **SANS SIFT Workstation** (distribuciones forenses)

### Datasets y entornos de práctica (legales y públicos)

- **Digital Corpora** (digitalcorpora.org) — imágenes como el escenario *M57-Patents*.
- **NIST CFReDS** (cfreds.nist.gov) — *Computer Forensic Reference Data Sets*.
- **Volatility Foundation** — *memory samples* públicos de práctica.
- **Retos DFIR públicos** — CTF forenses y ejercicios abiertos de la comunidad.

### Bibliografía recomendada

- Casey, E. *Digital Evidence and Computer Crime*. Academic Press.
- Carrier, B. *File System Forensic Analysis*. Addison-Wesley (referencia sobre TSK, NTFS, EXT).
- Ligh, M. et al. *The Art of Memory Forensics*. Wiley (base de Volatility).
- Guías y formación de **INCIBE** y del **SANS Institute** (FOR500/FOR508/FOR572).

---

> **Nota final para el alumnado:** el análisis forense es tanto una disciplina técnica como una responsabilidad ética y legal. La destreza con las herramientas carece de valor si no se acompaña del respeto escrupuloso a la integridad de la prueba, a la legalidad vigente y a la objetividad pericial. Un buen perito no es el que "encuentra lo que quiere encontrar", sino el que documenta con rigor lo que la evidencia demuestra, y sabe explicarlo con honestidad ante un tribunal.
