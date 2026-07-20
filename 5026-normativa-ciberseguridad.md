# 5026 - Normativa de ciberseguridad

> Módulo profesional del **Curso de Especialización en Ciberseguridad en Entornos de las Tecnologías de la Información** (Real Decreto 479/2020, de 7 de abril). Apuntes completos, desarrollados y actualizados a la legislación vigente en España y la Unión Europea.

Este módulo es, junto con la gestión de incidentes, el corazón del perfil **GRC** (Gobierno, Riesgo y Cumplimiento) dentro de la ciberseguridad. Mientras que los módulos técnicos del curso (bastionado, incidentes, análisis forense, hacking ético) trabajan el *cómo* técnico, **5026 - Normativa de ciberseguridad** responde a las preguntas del *por qué* y del *con qué obligación legal*: por qué una organización debe proteger la información, qué leyes y esquemas la obligan, cómo demuestra ante un regulador que cumple, y cómo decide de forma racional cuánto invertir en seguridad a partir de un análisis de riesgos.

El módulo tiene una fuerte carga de **derecho aplicado** (protección de datos, seguridad de las redes y sistemas de información, seguridad nacional) combinada con **marcos de gestión** (ISO 27001, ENS, NIST CSF) y **metodología de riesgos** (MAGERIT / PILAR). El enfoque de estos apuntes es eminentemente práctico: no basta con saber que existe el RGPD, hay que saber redactar una cláusula informativa, construir un registro de actividades de tratamiento, categorizar un sistema en el ENS o mapear un control ISO contra el Anexo del Esquema Nacional de Seguridad.

## Ficha del módulo

| Campo | Detalle |
|---|---|
| **Código** | 5026 |
| **Denominación** | Normativa de ciberseguridad |
| **Curso de especialización** | Ciberseguridad en Entornos de las Tecnologías de la Información |
| **Norma reguladora** | Real Decreto 479/2020, de 7 de abril (BOE núm. 116, de 24/04/2020) |
| **Nivel** | Especialización de grado superior (posterior a un Título de Técnico Superior) |
| **Duración total del curso** | 720 horas |
| **Duración orientativa del módulo** | ≈ 90-100 h (según el reparto autonómico; ronda el 12-14 % del curso) |
| **Prerrequisitos de acceso** | Estar en posesión de un Título de Técnico Superior de la familia de Informática y Comunicaciones (p. ej. DAW, DAM, ASIR) o equivalente, tal como fija el RD 479/2020 |
| **Modalidad habitual** | Presencial / semipresencial / distancia (FP) |
| **Ubicación curricular** | Módulo transversal de cumplimiento; se apoya en conceptos vistos en Sistemas Operativos, Redes, Gestión de Bases de Datos y Seguridad Informática del ciclo de origen |

### Competencia general y su encaje

La competencia general del curso es *"realizar tareas de configuración y administración de la seguridad de los sistemas informáticos, así como aplicar las técnicas y procedimientos de análisis de la seguridad en entornos TI"*. Dentro de ese marco, **5026** aporta las competencias de **carácter jurídico-organizativo**:

| Competencia (resumen) | Aportación del módulo 5026 |
|---|---|
| Aplicar la normativa vigente en materia de ciberseguridad y protección de datos | Núcleo del módulo: RGPD, LOPDGDD, NIS2, ENS |
| Gestionar el riesgo de los sistemas de información | MAGERIT v3, PILAR, tratamiento del riesgo |
| Elaborar y mantener documentación de seguridad conforme a estándares | SGSI ISO 27001, Declaración de Aplicabilidad, RAT |
| Interactuar con los organismos reguladores y de referencia | AEPD, INCIBE, CCN, CCN-CERT, ENISA |
| Fomentar la cultura de seguridad y el cumplimiento normativo | Concienciación, deber de secreto, responsabilidad proactiva |

---

## Resultados de Aprendizaje

Los Resultados de Aprendizaje (RA) y sus criterios de evaluación (CE) se redactan al estilo del BOE, adaptados y resumidos. Los cinco RA vertebran todo el módulo y sirven de guía para la evaluación final.

### RA1. Determina el marco normativo aplicable a la ciberseguridad, analizando la legislación nacional y europea vigente.

**Criterios de evaluación (resumen):**
- CE1.1 Se ha identificado la jerarquía normativa aplicable (reglamentos y directivas de la UE, leyes orgánicas y ordinarias, reales decretos).
- CE1.2 Se han descrito el objeto y ámbito del RGPD, la LOPDGDD, la Directiva NIS/NIS2 y sus transposiciones.
- CE1.3 Se han reconocido las funciones de la AEPD, el INCIBE, el CCN/CCN-CERT y ENISA.
- CE1.4 Se ha situado la ciberseguridad en el marco de la **Seguridad Nacional** (Ley 36/2015 y Estrategia Nacional de Ciberseguridad).
- CE1.5 Se han identificado las infracciones y el régimen sancionador asociado a cada norma.

### RA2. Aplica la normativa de protección de datos personales, garantizando los derechos de las personas y las obligaciones del responsable y encargado del tratamiento.

**Criterios de evaluación (resumen):**
- CE2.1 Se han aplicado los **principios** del tratamiento (art. 5 RGPD).
- CE2.2 Se han determinado las **bases de legitimación** (art. 6) adecuadas a cada tratamiento.
- CE2.3 Se han gestionado los **derechos ARSOPOL** de los interesados.
- CE2.4 Se ha elaborado un **Registro de Actividades de Tratamiento (RAT)** conforme al art. 30.
- CE2.5 Se han identificado los supuestos que exigen **DPD** y **EIPD**.
- CE2.6 Se ha diseñado el procedimiento de **notificación de brechas** a la AEPD en 72 h y, cuando proceda, a los interesados.

### RA3. Aplica los esquemas y marcos de seguridad de referencia, seleccionando controles y elaborando la documentación asociada.

**Criterios de evaluación (resumen):**
- CE3.1 Se ha categorizado un sistema en el **ENS** según sus dimensiones de seguridad (D-A-I-C-T).
- CE3.2 Se han seleccionado las medidas del Anexo II del ENS y elaborado la **Declaración de Aplicabilidad**.
- CE3.3 Se ha descrito el ciclo **PDCA** de un **SGSI ISO/IEC 27001**.
- CE3.4 Se han mapeado controles del **Anexo A / ISO 27002** con el marco de trabajo.
- CE3.5 Se ha aplicado el **NIST Cybersecurity Framework** (funciones Govern, Identify, Protect, Detect, Respond, Recover).

### RA4. Gestiona el riesgo de los sistemas de información, aplicando una metodología de análisis y evaluación de riesgos.

**Criterios de evaluación (resumen):**
- CE4.1 Se han inventariado y valorado los **activos** de información.
- CE4.2 Se han identificado **amenazas** y **vulnerabilidades** y estimado su **probabilidad** e **impacto**.
- CE4.3 Se ha calculado el **riesgo** (potencial y residual) con metodología **MAGERIT v3**.
- CE4.4 Se ha operado la herramienta **PILAR** (o equivalente) y distinguido análisis cualitativo y cuantitativo.
- CE4.5 Se han seleccionado **salvaguardas** y definido la estrategia de **tratamiento** conforme al **apetito de riesgo**.

### RA5. Verifica el cumplimiento normativo, elaborando planes de adecuación, auditorías y evidencias.

**Criterios de evaluación (resumen):**
- CE5.1 Se han elaborado **políticas y procedimientos** de seguridad.
- CE5.2 Se ha planificado una **auditoría** de cumplimiento (interna/externa, ENS/ISO).
- CE5.3 Se han recopilado **evidencias** y elaborado planes de acción correctiva.
- CE5.4 Se ha diseñado un **plan de adecuación** al ENS o un **plan director de seguridad**.
- CE5.5 Se ha valorado la importancia de la **mejora continua** y la **concienciación**.

---

# Unidad Didáctica 1. Marco jurídico e institucional de la ciberseguridad

## 1.1. Introducción: por qué existe una normativa de ciberseguridad

La transformación digital ha convertido a la información en el activo más valioso de las organizaciones y, al mismo tiempo, en el principal objetivo de los atacantes. Frente a este escenario, los Estados y la Unión Europea han desarrollado un cuerpo normativo que persigue tres grandes objetivos: **proteger los derechos de las personas** (singularmente el derecho fundamental a la protección de datos personales, reconocido en el art. 18.4 de la Constitución Española y en el art. 8 de la Carta de Derechos Fundamentales de la UE), **garantizar la continuidad de los servicios esenciales y digitales** frente a ciberamenazas, y **proteger la seguridad nacional** en un dominio, el ciberespacio, considerado hoy el quinto dominio operativo junto a tierra, mar, aire y espacio.

Para el profesional GRC es imprescindible entender que la seguridad no es solo un problema técnico: es una **obligación legal** cuyo incumplimiento acarrea sanciones económicas muy elevadas, responsabilidad de administradores y directivos, y daños reputacionales difíciles de reparar. En muchos casos el marco normativo no impone soluciones técnicas concretas, sino **resultados** ("garantizar un nivel de seguridad adecuado al riesgo") y **obligaciones de diligencia**, lo que obliga a la organización a razonar y documentar sus decisiones.

## 1.2. Jerarquía y tipología de las normas

En el ordenamiento español y europeo conviven distintos tipos de normas con distinto rango y forma de aplicación. Conviene distinguirlas con precisión porque su naturaleza determina cómo obligan.

| Tipo de norma | Ámbito | Forma de aplicación | Ejemplo en ciberseguridad |
|---|---|---|---|
| **Reglamento UE** | Unión Europea | Directamente aplicable, sin transposición | RGPD (UE 2016/679), Reglamento de Ciberseguridad (UE 2019/881) |
| **Directiva UE** | Unión Europea | Requiere transposición por cada Estado | NIS (2016/1148), NIS2 (2022/2555), CER |
| **Ley Orgánica** | España | Regula derechos fundamentales | LOPDGDD (LO 3/2018), LO de Seguridad Nacional |
| **Ley ordinaria** | España | Rango legal | Ley 36/2015 de Seguridad Nacional |
| **Real Decreto** | España | Desarrollo reglamentario del Gobierno | RD 311/2022 (ENS), RD 43/2021 (desarrollo NIS) |
| **Guía / norma técnica** | Voluntaria o de referencia | No es ley, pero puede ser exigible por remisión | CCN-STIC serie 800, ISO/IEC 27001 |

Un matiz clave: un **Reglamento europeo** (como el RGPD) es de aplicación directa en toda la UE desde su fecha de aplicación, mientras que una **Directiva** (como NIS2) fija objetivos que cada Estado debe **transponer** a su derecho interno mediante una ley o real decreto. Por eso el RGPD "es" la norma, pero de NIS2 hablamos de "su transposición".

## 1.3. La ciberseguridad en el marco de la Seguridad Nacional

En España, la ciberseguridad se integra en el **Sistema de Seguridad Nacional** regulado por la **Ley 36/2015, de 28 de septiembre, de Seguridad Nacional**. Esta ley define la Seguridad Nacional como la acción del Estado dirigida a proteger la libertad, los derechos y el bienestar de los ciudadanos, y sitúa la ciberseguridad entre los **ámbitos de especial interés**.

De este marco se derivan instrumentos estratégicos:

- **Estrategia de Seguridad Nacional**: documento marco aprobado por el Gobierno que define objetivos y líneas de acción.
- **Estrategia Nacional de Ciberseguridad (ENCS)**: la vigente (2019) desarrolla la de 2013 y establece cinco objetivos: seguridad de redes y sistemas del sector público y servicios esenciales, uso seguro del ciberespacio, protección del ecosistema empresarial y de la ciudadanía, cultura y compromiso con la ciberseguridad, y desarrollo de las capacidades. Coordina su ejecución el **Consejo Nacional de Ciberseguridad**.

Este nivel es el "paraguas político" bajo el que se despliegan las normas concretas (ENS, NIS2) y los organismos técnicos.

## 1.4. Organismos de referencia

El ecosistema institucional español y europeo se reparte entre reguladores (que supervisan y sancionan) y organismos de referencia técnica (que ayudan y coordinan la respuesta).

| Organismo | Nivel | Naturaleza | Función principal |
|---|---|---|---|
| **AEPD** (Agencia Española de Protección de Datos) | España | Autoridad de control independiente | Supervisar el cumplimiento del RGPD/LOPDGDD; instruir y sancionar; publicar guías |
| **CCN** (Centro Criptológico Nacional) | España | Adscrito al CNI | Referencia del ENS; publica guías CCN-STIC; certifica productos |
| **CCN-CERT** | España | Equipo de respuesta del CCN | Respuesta a incidentes del sector público y empresas de interés estratégico |
| **INCIBE** (Instituto Nacional de Ciberseguridad) | España | Sociedad dependiente del Ministerio (SEDIA) | Ciudadanía y empresas (pymes); INCIBE-CERT (con CNPIC para infraestructuras críticas) |
| **CNPIC** (Centro Nacional de Protección de Infraestructuras Críticas) | España | Ministerio del Interior | Protección de infraestructuras críticas |
| **ENISA** (Agencia de la UE para la Ciberseguridad) | UE | Agencia europea | Coordinación, esquemas de certificación (Reglamento 2019/881), apoyo a Estados |
| **EDPB / CEPD** (Comité Europeo de Protección de Datos) | UE | Órgano de las autoridades de control | Coherencia en la aplicación del RGPD; directrices |

**Regla mnemotécnica de reparto de "CERTs" en España:** CCN-CERT → sector público; INCIBE-CERT → ciudadanía y empresas (y, con CNPIC, operadores críticos privados); ESPDEF-CERT → ámbito de Defensa.

## 🧪 Caso práctico 1.1 — Identificar la norma y el organismo aplicable

**Enunciado.** Una clínica dental privada de 15 empleados sufre un ataque de *ransomware* que cifra las historias clínicas de sus pacientes. Determina: (a) qué normas de las estudiadas resultan aplicables; (b) a qué organismos debe o puede acudir; (c) qué obligaciones de notificación surgen.

**Resolución guiada.**
- **Normas.** Como se tratan **datos de salud** (categoría especial, art. 9 RGPD) aplica el **RGPD + LOPDGDD**. Al ser una empresa que probablemente no sea "esencial/importante" según NIS2, la Directiva NIS2 seguramente no le obligue directamente, pero sí las buenas prácticas. El ENS no aplica salvo que preste servicios al sector público.
- **Organismos.** Puede acudir a **INCIBE-CERT** (empresa privada) para apoyo técnico en la respuesta; debe notificar la **brecha de datos** a la **AEPD**.
- **Obligaciones.** Notificación de brecha a la AEPD en **72 h** (art. 33 RGPD) y, por tratarse de datos de salud con alto riesgo, **comunicación a los pacientes afectados** (art. 34).

## ✍️ Ejercicios propuestos 1

1. Elabora un cuadro que distinga "Reglamento" y "Directiva" con dos ejemplos de cada uno en ciberseguridad, explicando por qué NIS2 necesita transposición y el RGPD no.
2. Investiga y resume en 10 líneas los cinco objetivos de la Estrategia Nacional de Ciberseguridad 2019.
3. Para tres escenarios (una universidad pública, un banco, un e-commerce de 3 empleados), indica qué organismo(s) de referencia serían competentes y por qué.

---

# Unidad Didáctica 2. Protección de datos personales: RGPD y LOPDGDD

## 2.1. Marco y conceptos fundamentales

La protección de datos personales se rige por dos normas que forman un bloque indivisible: el **Reglamento (UE) 2016/679, General de Protección de Datos (RGPD)**, aplicable desde el 25 de mayo de 2018, y la **Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD)**, que adapta y completa el RGPD en España y añade un catálogo de **derechos digitales** (Título X).

Antes de nada, hay que dominar las definiciones del art. 4 RGPD, porque de ellas depende toda la aplicación práctica:

| Concepto | Definición operativa | Ejemplo |
|---|---|---|
| **Dato personal** | Información sobre persona física identificada o identificable | Nombre, DNI, email, IP, matrícula, huella |
| **Tratamiento** | Cualquier operación sobre datos (recogida, registro, conservación, consulta, supresión...) | Guardar un CV, enviar una newsletter |
| **Responsable del tratamiento** | Quien decide fines y medios | La empresa que contrata al empleado |
| **Encargado del tratamiento** | Quien trata datos por cuenta del responsable | El proveedor de nóminas o el hosting |
| **Interesado** | La persona física titular de los datos | El cliente, el empleado |
| **Categorías especiales (art. 9)** | Datos sensibles: salud, origen étnico, ideología, religión, afiliación sindical, vida/orientación sexual, biométricos, genéticos | Historia clínica, huella para fichar |
| **Seudonimización** | Tratar datos de forma que ya no se atribuyan a un interesado sin información adicional guardada aparte | Sustituir el DNI por un código |
| **Anonimización** | Proceso irreversible; el dato deja de ser personal (y sale del RGPD) | Estadísticas agregadas sin reidentificación posible |

**Punto crítico:** la seudonimización es una **medida de seguridad** pero el dato sigue siendo personal; la anonimización, si es real e irreversible, **saca el dato del ámbito del RGPD**.

## 2.2. Los principios del tratamiento (art. 5 RGPD)

Todo tratamiento debe respetar estos principios. El último, la **responsabilidad proactiva** (*accountability*), es la gran novedad del RGPD: no basta con cumplir, hay que **poder demostrar** que se cumple.

| Principio | Significado |
|---|---|
| **Licitud, lealtad y transparencia** | Debe existir base legal, no engañar y ser transparente con el interesado |
| **Limitación de la finalidad** | Solo para fines determinados, explícitos y legítimos; no usar para otra cosa incompatible |
| **Minimización de datos** | Solo los datos adecuados, pertinentes y limitados a lo necesario |
| **Exactitud** | Datos exactos y actualizados; suprimir/rectificar los inexactos |
| **Limitación del plazo de conservación** | No conservar más tiempo del necesario |
| **Integridad y confidencialidad** | Seguridad adecuada (técnica y organizativa) |
| **Responsabilidad proactiva (accountability)** | El responsable debe cumplir y **demostrar** el cumplimiento |

## 2.3. Bases de legitimación (art. 6)

Ningún tratamiento es lícito si no se ampara en, al menos, **una** de las seis bases del art. 6. Un error habitual es pensar que el consentimiento es siempre necesario: en muchos casos hay bases más sólidas.

| Base de legitimación (art. 6.1) | Cuándo se usa | Ejemplo |
|---|---|---|
| **a) Consentimiento** | Libre, específico, informado, inequívoco y revocable | Suscripción voluntaria a newsletter |
| **b) Ejecución de un contrato** | Necesario para el contrato o precontrato | Datos de envío de una compra online |
| **c) Obligación legal** | Impuesta al responsable | Retención de nóminas, obligaciones fiscales |
| **d) Intereses vitales** | Proteger la vida | Datos médicos en una urgencia |
| **e) Interés público / ejercicio de poderes públicos** | Administraciones | Padrón municipal |
| **f) Interés legítimo** | Interés del responsable ponderado con los derechos del interesado | Videovigilancia por seguridad, prevención de fraude |

Para las **categorías especiales (art. 9)** el tratamiento está prohibido salvo excepciones tasadas (consentimiento explícito, medicina preventiva/laboral, interés público en salud, etc.). El **consentimiento** debe cumplir el art. 7: debe poder demostrarse, ser tan fácil de retirar como de dar, y para menores en servicios de la sociedad de la información la LOPDGDD fija el umbral en **14 años** en España.

## 2.4. Información y transparencia (arts. 13-14): la cláusula informativa

Cuando se recogen datos hay que informar al interesado. La AEPD recomienda un modelo **por capas**: una primera capa breve en el punto de recogida y una segunda capa detallada (política de privacidad). Un extracto de **cláusula informativa de primera capa** modelo:

```text
INFORMACIÓN BÁSICA SOBRE PROTECCIÓN DE DATOS
Responsable:        CLOUDYOLE PYME, S.L. — NIF B-00000000
Finalidad:          Gestión de la relación comercial y envío de comunicaciones.
Legitimación:       Ejecución de contrato (art. 6.1.b) y consentimiento (art. 6.1.a).
Destinatarios:      No se cederán datos a terceros salvo obligación legal.
Derechos:           Acceso, rectificación, supresión, oposición, limitación y
                    portabilidad, escribiendo a dpd@cloudyole.es
Información adic.:   Consulte la información ampliada en www.cloudyole.es/privacidad
```

## 2.5. Los derechos de las personas: ARSOPOL

El RGPD amplía los antiguos derechos ARCO. La regla nemotécnica en español es **ARSOPOL**. El responsable debe atenderlos, **con carácter gratuito**, en el plazo de **un mes** (prorrogable dos más en casos complejos).

| Derecho | Artículo | Contenido |
|---|---|---|
| **A** – Acceso | 15 | Saber qué datos se tratan y obtener copia |
| **R** – Rectificación | 16 | Corregir datos inexactos |
| **S** – Supresión ("derecho al olvido") | 17 | Borrado cuando ya no son necesarios o se retira el consentimiento |
| **O** – Oposición | 21 | Oponerse a un tratamiento (p. ej. marketing) |
| **P** – Portabilidad | 20 | Recibir los datos en formato estructurado y transmitirlos a otro responsable |
| **O** – (limitación) | 18 | Limitar el tratamiento ("marcar" los datos sin borrarlos) |
| **L** – decisiones automatizadas | 22 | No ser objeto de decisiones basadas solo en tratamiento automatizado, incluida la elaboración de perfiles |

*(En la nemotécnica ARSOPOL: A-cceso, R-ectificación, S-upresión, O-posición, P-ortabilidad, O-limitación, L-decisiones automatizadas.)*

## 2.6. Responsable, encargado y el contrato de encargo (art. 28)

Cuando una empresa (responsable) contrata a un proveedor que trata datos por su cuenta (encargado: hosting, gestoría, CRM en la nube...), es **obligatorio** firmar un **contrato de encargo de tratamiento** (art. 28) que regule: objeto, duración, naturaleza y fin, tipo de datos, obligaciones del encargado (confidencialidad, seguridad, subencargados solo con autorización, asistencia al responsable, devolución/supresión al finalizar). La ausencia de este contrato es una de las infracciones más habituales.

## 2.7. Figuras y herramientas de responsabilidad proactiva

### 2.7.1. Delegado de Protección de Datos (DPD/DPO)

El **DPD** (arts. 37-39 RGPD, art. 34 LOPDGDD) es la figura de garantía. Es **obligatorio** cuando:
- El tratamiento lo hace una **autoridad u organismo público**.
- La actividad principal exige un **seguimiento habitual y sistemático a gran escala** (p. ej. perfilado publicitario, geolocalización masiva).
- La actividad principal es el tratamiento **a gran escala de categorías especiales** o de datos de condenas.
- La LOPDGDD (art. 34) enumera además casos concretos (entidades financieras, sanitarias, colegios profesionales, operadoras de telecomunicaciones, etc.).

El DPD debe actuar con **independencia**, no puede ser sancionado por ejercer sus funciones, y su nombramiento se comunica a la AEPD.

### 2.7.2. Evaluación de Impacto (EIPD / DPIA, art. 35)

La **EIPD** es obligatoria cuando un tratamiento entrañe **alto riesgo** para los derechos y libertades (nuevas tecnologías, tratamientos a gran escala de datos sensibles, observación sistemática de zonas públicas, elaboración de perfiles con efectos jurídicos...). La AEPD publica una lista de tratamientos que la requieren. Estructura típica de una EIPD:

1. Descripción sistemática del tratamiento y sus finalidades.
2. Evaluación de la **necesidad y proporcionalidad**.
3. Evaluación de los **riesgos** para los interesados.
4. **Medidas** previstas para afrontar los riesgos (garantías, seguridad).

Si tras la EIPD persiste un alto riesgo no mitigado, hay que hacer **consulta previa** a la AEPD (art. 36).

### 2.7.3. Registro de Actividades de Tratamiento (RAT, art. 30)

El **RAT** es obligatorio (con matices para empresas de <250 empleados que traten datos ocasionalmente, pero en la práctica casi todas deben llevarlo). Es un inventario de todos los tratamientos. Extracto de ejemplo:

```text
REGISTRO DE ACTIVIDADES DE TRATAMIENTO — Responsable: CLOUDYOLE PYME, S.L.
────────────────────────────────────────────────────────────────────────
Actividad:            Gestión de Recursos Humanos y nóminas
Responsable:          CLOUDYOLE PYME, S.L. — dpd@cloudyole.es
Finalidad:            Gestión laboral, retributiva y de PRL del personal
Base jurídica:        Art. 6.1.b (contrato), 6.1.c (obligación legal laboral/fiscal)
Categorías interesados: Empleados y candidatos
Categorías de datos:  Identificativos, económicos, académicos, salud (bajas laborales)
Categorías especiales: Datos de salud (partes de baja) — base art. 9.2.b
Destinatarios:        TGSS, AEAT, mutua, entidad bancaria, gestoría (encargada)
Transf. internac.:    No
Plazo de conservación: Duración de la relación + plazos de prescripción legal
Medidas de seguridad:  Control de acceso, cifrado, copias, seudonimización (ref. RD 311/2022)
────────────────────────────────────────────────────────────────────────
```

## 2.8. Brechas de seguridad y notificación (arts. 33-34)

Una **violación de seguridad de los datos personales** (brecha) es toda violación que ocasione destrucción, pérdida, alteración, comunicación o acceso no autorizados a datos personales. El procedimiento es uno de los contenidos más "de examen" del módulo:

| Notificación | Destinatario | Plazo | Umbral |
|---|---|---|---|
| **Art. 33** | AEPD (autoridad de control) | **72 horas** desde que se tiene constancia | Salvo que sea **improbable** que suponga riesgo para los derechos |
| **Art. 34** | Interesados afectados | Sin dilación indebida | Solo si hay **alto riesgo** para sus derechos |

Además, **toda** brecha (se notifique o no) debe **documentarse internamente** (registro de brechas). Si la notificación a la AEPD no se hace en 72 h, debe justificarse el retraso. La AEPD dispone de un asistente en línea (**Comunica-Brecha RGPD**) y de la herramienta *Facilita* para pymes.

## 2.9. Régimen sancionador

El RGPD establece dos umbrales de multa (art. 83) y la LOPDGDD clasifica las infracciones para el cálculo de plazos de prescripción.

| Tipo de infracción | Multa máxima RGPD (art. 83) |
|---|---|
| Infracciones "de primer nivel" (RAT, DPD, seguridad, encargado, EIPD...) | Hasta **10 M€** o **2 %** del volumen de negocio anual global (la mayor) |
| Infracciones "de segundo nivel" (principios, bases, derechos, transferencias) | Hasta **20 M€** o **4 %** del volumen de negocio anual global (la mayor) |

La LOPDGDD gradúa la prescripción: infracciones **leves** (1 año), **graves** (2 años), **muy graves** (3 años).

## 2.10. Derechos digitales de la LOPDGDD

La LOPDGDD incorpora en su Título X un catálogo de **derechos digitales** que va más allá del RGPD: derecho a la neutralidad de Internet, a la seguridad digital, a la educación digital, a la desconexión digital en el ámbito laboral, a la intimidad frente al uso de dispositivos de videovigilancia y de geolocalización en el trabajo, y derecho al testamento digital.

## 🧪 Caso práctico 2.1 — Taller de análisis de tratamiento

**Enunciado.** Una tienda online quiere: (1) enviar el pedido a domicilio, (2) enviar newsletter comercial, (3) instalar cámaras en el almacén, (4) usar un CRM en la nube de un proveedor de EE. UU. Para cada uno, determina la **base de legitimación**, si requiere **consentimiento**, si hay **encargado** y si aparece alguna **transferencia internacional**.

**Solución orientativa.**

| Tratamiento | Base | ¿Consentimiento? | ¿Encargado? | ¿Transf. internacional? |
|---|---|---|---|---|
| Envío del pedido | 6.1.b contrato | No | Sí (empresa de transporte) | No |
| Newsletter | 6.1.a consentimiento | Sí | Posible (plataforma mailing) | Según proveedor |
| Cámaras almacén | 6.1.f interés legítimo | No (pero informar y cartel) | Posible (CCTV cloud) | No |
| CRM en EE. UU. | Según finalidad del CRM | — | Sí (proveedor CRM) | Sí → verificar garantías (DPF, cláusulas tipo) |

## 🧪 Caso práctico 2.2 — Redacción de una cláusula y una entrada de RAT

**Enunciado.** Redacta la cláusula informativa de primera capa y una entrada de RAT para el tratamiento "Formulario de contacto web" de una PYME.

**Producto esperado.** Un texto tipo el del apartado 2.4 con finalidad "atención de consultas", base "consentimiento / interés legítimo", y una fila de RAT con conservación "hasta resolver la consulta + 1 año".

## ✍️ Ejercicios propuestos 2

1. Clasifica 10 tipos de datos (email, IP, matrícula, huella, ideología, teléfono, foto, nº de cuenta, datos de salud, cookie técnica) en: dato común / categoría especial / no personal.
2. Diseña el **procedimiento interno de gestión de una brecha** en 6 pasos, indicando responsables y plazos.
3. Determina, para tres organizaciones (un hospital público, una startup de 5 personas que hace *scoring* crediticio, una peluquería), si están **obligadas a nombrar DPD** y por qué.
4. Elabora una tabla ARSOPOL con un ejemplo real de solicitud para cada derecho.

---

# Unidad Didáctica 3. Seguridad de las redes y sistemas: Directiva NIS y NIS2

## 3.1. Origen: la Directiva NIS (2016/1148)

La primera **Directiva NIS** (Network and Information Security, UE 2016/1148) fue la primera norma europea de ciberseguridad de alcance general. Obligaba a los Estados a designar autoridades y CSIRTs, y a imponer medidas y notificación de incidentes a dos tipos de sujetos: **Operadores de Servicios Esenciales (OSE)** —energía, transporte, banca, salud, agua, infraestructura digital— y **Proveedores de Servicios Digitales (PSD)** —mercados en línea, buscadores, servicios de computación en nube. En España se transpuso mediante el **Real Decreto-ley 12/2018** y su reglamento de desarrollo, el **Real Decreto 43/2021**.

## 3.2. NIS2 (Directiva UE 2022/2555): el gran salto

La experiencia demostró que NIS era insuficiente: ámbito limitado, dispersión entre Estados y supervisión débil. La **Directiva (UE) 2022/2555 (NIS2)**, de 14 de diciembre de 2022, deroga la NIS original y amplía sustancialmente el marco. El plazo de transposición finalizó el **17 de octubre de 2024**; España se encuentra en proceso de transposición (anteproyecto de Ley de Coordinación y Gobernanza de la Ciberseguridad).

Principales cambios de NIS2 frente a NIS:

| Aspecto | NIS (2016/1148) | NIS2 (2022/2555) |
|---|---|---|
| **Sujetos** | OSE + PSD | Entidades **esenciales** e **importantes** por sectores y tamaño |
| **Sectores** | 7 esenciales + digitales | **18 sectores** (11 de alta criticidad + 7 críticos) |
| **Criterio de inclusión** | Designación por el Estado | **Autoidentificación** por tamaño (medianas y grandes) y sector |
| **Gobernanza** | Difusa | Responsabilidad y **formación obligatoria de la dirección** |
| **Notificación** | Plazos genéricos | **Alerta temprana en 24 h**, notificación en **72 h**, informe final en **1 mes** |
| **Sanciones** | Débiles | Hasta **10 M€ o 2 %** (esenciales) / **7 M€ o 1,4 %** (importantes) |
| **Cadena de suministro** | Poco tratada | Obligación explícita de gestionar el **riesgo de terceros** |

### 3.2.1. Entidades esenciales vs. importantes

NIS2 distingue dos categorías, con supervisión más estricta para las esenciales (supervisión *ex ante*) que para las importantes (*ex post*, tras un incidente).

| Categoría | Sectores (ejemplos) | Supervisión |
|---|---|---|
| **Esenciales** | Energía, transporte, banca, mercados financieros, salud, agua potable y residual, infraestructura digital, administración pública, espacio | Proactiva (inspecciones, auditorías) |
| **Importantes** | Servicios postales, gestión de residuos, química, alimentación, fabricación, proveedores digitales (mercados, buscadores, redes sociales), investigación | Reactiva (tras indicios/incidente) |

### 3.2.2. Obligaciones de gestión de riesgos (art. 21 NIS2)

Las entidades deben adoptar medidas técnicas, operativas y organizativas **proporcionadas al riesgo**, que incluyan al menos: políticas de análisis de riesgos y de seguridad, gestión de incidentes, continuidad de negocio y copias, **seguridad de la cadena de suministro**, seguridad en la adquisición/desarrollo/mantenimiento, políticas de evaluación de eficacia, higiene y **formación** en ciberseguridad, criptografía y cifrado, seguridad de RR. HH. y control de accesos, y uso de **autenticación multifactor**.

### 3.2.3. Notificación de incidentes significativos (art. 23)

El procedimiento escalonado de NIS2 debe memorizarse y no confundirse con el de brechas del RGPD:

| Hito | Plazo | Contenido |
|---|---|---|
| **Alerta temprana** | **24 h** desde el conocimiento | Indicar si se sospecha causa ilícita o transfronteriza |
| **Notificación** | **72 h** | Evaluación inicial: gravedad, impacto, indicadores de compromiso |
| **Informe intermedio** | A petición del CSIRT | Actualización de estado |
| **Informe final** | **1 mes** tras la notificación | Descripción detallada, causa raíz, medidas aplicadas |

## 3.3. Normas conexas: DORA, CER, Reglamento de Ciberseguridad y CRA

NIS2 no viaja sola. Conviene situarla en el paquete regulatorio europeo:

| Norma | Objeto | Sujetos |
|---|---|---|
| **DORA** (Reg. UE 2022/2554) | Resiliencia operativa digital del sector **financiero** | Bancos, aseguradoras, proveedores TIC financieros |
| **Directiva CER** (UE 2022/2557) | Resiliencia de **entidades críticas** (protección física) | Entidades críticas (complementa NIS2 en lo digital) |
| **Reglamento de Ciberseguridad** (UE 2019/881) | Mandato permanente de ENISA + **esquemas de certificación** europeos | Productos, servicios y procesos TIC |
| **Cyber Resilience Act** (Reg. UE 2024/2847) | Seguridad de **productos con elementos digitales** ("por diseño") | Fabricantes de hardware/software conectados |

## 3.4. Diferencia clave: brecha RGPD vs. incidente NIS2

Es un error frecuente mezclarlas. Una misma incidencia (p. ej. un *ransomware*) puede activar **ambas** obligaciones a la vez, pero con destinatarios, plazos y criterios distintos.

| | Brecha RGPD | Incidente NIS2 |
|---|---|---|
| **Qué protege** | Datos personales | Continuidad de redes y servicios |
| **A quién se notifica** | AEPD (+ interesados si alto riesgo) | CSIRT/autoridad competente NIS |
| **Plazo** | 72 h a AEPD | 24 h alerta + 72 h + 1 mes |
| **Criterio** | Riesgo para derechos de las personas | Impacto significativo en el servicio |

## 🧪 Caso práctico 3.1 — ¿Sujeto NIS2?

**Enunciado.** Una empresa de tratamiento de aguas residuales de un municipio, con 300 empleados y 60 M€ de facturación, sufre un incidente que interrumpe la telemetría de sus plantas durante 8 horas. Determina si es sujeto NIS2, en qué categoría y qué debe notificar y cuándo.

**Solución.** El sector "aguas residuales" está entre los de **alta criticidad**; con 300 empleados y 60 M€ supera los umbrales de mediana empresa → **entidad esencial**. Debe emitir **alerta temprana en 24 h**, **notificación en 72 h** e **informe final en 1 mes** al CSIRT competente. Además, deberá evaluar si hubo afectación de datos personales (probablemente no en este caso), lo que activaría también el RGPD.

## ✍️ Ejercicios propuestos 3

1. Construye una tabla comparativa NIS vs. NIS2 con al menos seis diferencias.
2. Dibuja un diagrama de la **línea temporal de notificación** de un incidente NIS2 sobre un eje de horas/días.
3. Clasifica cinco empresas de distintos sectores como "esencial", "importante" o "no sujeta" a NIS2, justificando el sector y el tamaño.

---

# Unidad Didáctica 4. El Esquema Nacional de Seguridad (ENS)

## 4.1. Qué es el ENS y a quién obliga

El **Esquema Nacional de Seguridad (ENS)** es el marco de referencia de la ciberseguridad del **sector público** español. Nació con el RD 3/2010 (en desarrollo de la antigua Ley 11/2007) y hoy se rige por el **Real Decreto 311/2022, de 3 de mayo**, que lo actualiza para alinearlo con el RGPD, la Directiva NIS y los estándares internacionales, e introduce los **perfiles de cumplimiento**.

Obliga a **todo el sector público** (Administración General del Estado, comunidades autónomas, entidades locales, universidades públicas, organismos y entidades de derecho público) y, muy importante, a las **empresas del sector privado que presten servicios o provean soluciones a entidades públicas**: por eso una empresa TI que quiera contratar con la Administración necesita, en la práctica, la **Certificación de Conformidad con el ENS**.

## 4.2. Principios básicos y requisitos mínimos

El RD 311/2022 se estructura en dos bloques que hay que distinguir:

**Principios básicos (art. 5)** — orientaciones de alto nivel:
- Seguridad como proceso integral.
- Gestión de la seguridad basada en los **riesgos**.
- Prevención, detección, respuesta y conservación.
- Existencia de **líneas de defensa**.
- Vigilancia continua y reevaluación periódica.
- Diferenciación de responsabilidades.

**Requisitos mínimos (art. 12)** — obligaciones concretas: organización e implantación del proceso de seguridad, análisis y gestión de riesgos, gestión de personal, profesionalidad, autorización y control de accesos, protección de las instalaciones, adquisición de productos y servicios, seguridad por defecto, integridad y actualización del sistema, protección de la información almacenada y en tránsito, prevención ante otros sistemas interconectados, registro de actividad, incidentes de seguridad, continuidad de la actividad y mejora continua.

## 4.3. Dimensiones de seguridad: D-A-I-C-T

El ENS valora la seguridad de un sistema según **cinco dimensiones**. Es fundamental dominarlas porque de ellas depende toda la categorización:

| Sigla | Dimensión | Pregunta que responde |
|---|---|---|
| **D** | **Disponibilidad** | ¿Puedo acceder a la información/servicio cuando lo necesito? |
| **A** | **Autenticidad** | ¿Es quien dice ser el origen de la información/usuario? |
| **I** | **Integridad** | ¿La información no ha sido alterada de forma no autorizada? |
| **C** | **Confidencialidad** | ¿Solo accede quien está autorizado? |
| **T** | **Trazabilidad** | ¿Puedo saber quién hizo qué y cuándo? |

*(Nemotécnica: **DAICT**. Ojo: en el ENS se habla de Autenticidad y Trazabilidad, que junto a la tríada clásica CIA amplían el modelo.)*

## 4.4. Categorización de sistemas: BAJA, MEDIA, ALTA

Cada sistema se valora en cada una de las cinco dimensiones en tres niveles (BAJO, MEDIO, ALTO) según el **perjuicio** que causaría un fallo de seguridad. La **categoría del sistema** es la del nivel **más alto** alcanzado en cualquiera de sus dimensiones.

Criterio de valoración del nivel por dimensión (resumen del Anexo I):

| Nivel | Perjuicio si se compromete la dimensión |
|---|---|
| **BAJO** | Perjuicio limitado |
| **MEDIO** | Perjuicio grave |
| **ALTO** | Perjuicio muy grave (irreparable, afecta a funciones esenciales, derechos, seguridad...) |

Regla: **Categoría del sistema = máximo nivel entre las 5 dimensiones.**

### Ejemplo de categorización de un sistema

Sistema: *Sede electrónica de un Ayuntamiento* que tramita solicitudes de ciudadanos, incluyendo pagos y datos personales.

| Dimensión | Nivel valorado | Justificación |
|---|---|---|
| Disponibilidad (D) | **MEDIO** | Una caída prolongada perjudica gravemente el servicio al ciudadano |
| Autenticidad (A) | **ALTO** | Suplantar a un ciudadano en un trámite causaría perjuicio muy grave |
| Integridad (I) | **ALTO** | Alterar una resolución administrativa es muy grave |
| Confidencialidad (C) | **MEDIO** | Hay datos personales comunes, no categorías especiales masivas |
| Trazabilidad (T) | **MEDIO** | Debe poder auditarse quién tramitó qué |
| **CATEGORÍA DEL SISTEMA** | **ALTA** | Por ser ALTO el máximo (A e I) |

## 4.5. Medidas de seguridad (Anexo II) y perfiles de cumplimiento

Las medidas del **Anexo II** se agrupan en tres marcos y su exigencia depende de la categoría del sistema y del nivel de cada dimensión:

| Grupo de medidas | Ejemplos |
|---|---|
| **Marco organizativo [org]** | Política de seguridad, normativa, procedimientos, autorización |
| **Marco operacional [op]** | Planificación, control de accesos, explotación, monitorización, gestión de incidentes, continuidad |
| **Medidas de protección [mp]** | Protección de instalaciones, personal, equipos, comunicaciones, soportes, software, información, servicios |

El RD 311/2022 introduce los **perfiles de cumplimiento específicos**: conjuntos de medidas adaptados a un tipo de entidad o servicio (p. ej. perfil para entidades locales pequeñas, para servicios en la nube), que permiten una implantación proporcionada. También distingue la implantación según categoría (una PYME que provee un servicio de categoría BÁSICA no implanta lo mismo que un ministerio de categoría ALTA).

## 4.6. Declaración de Aplicabilidad (DdA)

La **Declaración de Aplicabilidad** es el documento que, a partir de la categoría del sistema, relaciona **todas** las medidas del Anexo II indicando, para cada una, si **aplica** (y su nivel de exigencia) o **no aplica** (con justificación). Es el equivalente ENS de la SoA de ISO 27001 y el documento vertebral de una auditoría de conformidad.

```text
DECLARACIÓN DE APLICABILIDAD (extracto) — Sistema "Sede electrónica" — Categoría ALTA
────────────────────────────────────────────────────────────────────────────
Código    Medida                                  Nivel exig.  Estado        Evidencia
org.1     Política de seguridad                   Aplica       Implantada    POL-SEG-01
op.acc.5  Mecanismo de autenticación (MFA)        Alto         Implantada    Config IdP
op.exp.8  Registro de actividad                   Alto         Implantada    SIEM/logs
mp.info.3 Cifrado de la información                Alto         Parcial       Plan 2026
mp.com.4  Protección frente a DoS                 Alto         Pendiente     Plan 2026
────────────────────────────────────────────────────────────────────────────
```

## 4.7. Auditoría, conformidad y guías CCN-STIC

- **Categoría BÁSICA**: basta una **autoevaluación**.
- **Categorías MEDIA y ALTA**: exigen **auditoría formal** al menos cada **2 años**.
- La conformidad se materializa en una **Certificación de Conformidad con el ENS** (para MEDIA/ALTA) o una **Declaración de Conformidad** (BÁSICA), publicada con el distintivo correspondiente.

El **CCN** publica las **guías CCN-STIC serie 800**, de referencia obligada. Algunas clave:

| Guía | Contenido |
|---|---|
| **CCN-STIC 800** | Glosario y abreviaturas del ENS |
| **CCN-STIC 801** | Responsabilidades y funciones (roles: responsable de la información, del servicio, de la seguridad, del sistema) |
| **CCN-STIC 803** | Valoración de sistemas (categorización) |
| **CCN-STIC 804** | Guía de implantación del ENS |
| **CCN-STIC 806** | Plan de adecuación al ENS |
| **CCN-STIC 808** | Verificación del cumplimiento |
| **CCN-STIC 809** | Declaración y certificación de conformidad |

El CCN ofrece además herramientas: **PILAR** (análisis de riesgos), **INES** (informe del estado de seguridad), **CLARA** (cumplimiento en Windows), **µPILAR**, **CARMEN**, **MicroCLAUDIA**, etc.

## 🧪 Caso práctico 4.1 — Categorización y adecuación

**Enunciado.** Un consorcio universitario público gestiona un sistema de gestión académica (matrículas, actas, expedientes con datos personales de estudiantes). Categoriza el sistema en las 5 dimensiones, determina la categoría global y decide si requiere autoevaluación o auditoría.

**Solución orientativa.** D: MEDIO; A: ALTO (falsear un acta); I: ALTO (integridad de calificaciones); C: MEDIO; T: MEDIO → **Categoría ALTA** → requiere **auditoría bienal** y **Certificación de Conformidad**.

## ✍️ Ejercicios propuestos 4

1. Categoriza tres sistemas (una web informativa municipal sin trámites, un sistema de nóminas, un sistema de gestión de emergencias 112) en las 5 dimensiones y da su categoría.
2. Elabora un extracto de **Declaración de Aplicabilidad** con 8 medidas (2 por marco) para uno de esos sistemas.
3. Investiga y resume los **cuatro roles** del ENS según la CCN-STIC 801 y quién nombra a cada uno.

---

# Unidad Didáctica 5. Estándares internacionales: ISO 27000 y NIST CSF

## 5.1. La familia ISO/IEC 27000

La familia **ISO/IEC 27000** es el estándar internacional de referencia para la gestión de la seguridad de la información. Las tres normas centrales:

| Norma | Contenido | ¿Certificable? |
|---|---|---|
| **ISO/IEC 27000** | Visión general y vocabulario | No |
| **ISO/IEC 27001** | Requisitos del **SGSI** (Sistema de Gestión de Seguridad de la Información) | **Sí** (empresa auditable y certificable) |
| **ISO/IEC 27002** | Guía de buenas prácticas / **catálogo de controles** | No (es guía de los controles del Anexo A) |

Otras de interés: **27005** (gestión del riesgo), **27017** (nube), **27018** (datos personales en la nube), **27701** (extensión de privacidad — un PIMS sobre el SGSI), **27032** (ciberseguridad).

## 5.2. El SGSI y el ciclo PDCA

Un **SGSI** es un sistema de gestión, no una herramienta técnica: es el conjunto de políticas, procedimientos, roles y controles con los que la organización gestiona la seguridad de forma sistemática y mejorable. ISO 27001 se basa en el ciclo de mejora continua **PDCA (Deming)**:

| Fase | Significado | Actividades típicas |
|---|---|---|
| **Plan** (Planificar) | Definir alcance, política, objetivos, análisis de riesgos, plan de tratamiento | Contexto, liderazgo, evaluación de riesgos, SoA |
| **Do** (Hacer) | Implantar los controles y operar el SGSI | Despliegue de controles, formación, operación |
| **Check** (Verificar) | Medir, monitorizar, auditar | Indicadores, auditorías internas, revisión por la dirección |
| **Act** (Actuar) | Corregir y mejorar | No conformidades, acciones correctivas, mejora |

La versión vigente, **ISO/IEC 27001:2022**, integra los requisitos de las cláusulas 4 a 10 (contexto, liderazgo, planificación, apoyo, operación, evaluación del desempeño y mejora).

## 5.3. La Declaración de Aplicabilidad (SoA) y el Anexo A

El documento clave del SGSI es la **Statement of Applicability (SoA)** o **Declaración de Aplicabilidad**, que enumera todos los controles del **Anexo A** indicando cuáles aplican, su justificación y su estado. La versión **27002:2022 / Anexo A 2022** reorganizó los antiguos 114 controles en **93 controles** agrupados en **4 temas**:

| Tema (2022) | Nº de controles | Ejemplos |
|---|---|---|
| **Organizativos** | 37 | Políticas, roles, gestión de proveedores, clasificación de la información |
| **Personas** | 8 | Concienciación, acuerdos de confidencialidad, teletrabajo |
| **Físicos** | 14 | Perímetro, control de acceso físico, seguridad de equipos |
| **Tecnológicos** | 34 | Control de accesos, cifrado, copias, protección frente a malware, registro |

La 27002:2022 introdujo además cinco **atributos** para clasificar los controles (tipo de control preventivo/detectivo/correctivo, propiedades de seguridad CIA, conceptos de ciberseguridad NIST, capacidades operativas y dominios de seguridad), lo que facilita su mapeo con otros marcos.

## 5.4. NIST Cybersecurity Framework (CSF)

El **NIST Cybersecurity Framework** es un marco voluntario, muy usado internacionalmente, que organiza la ciberseguridad en **funciones**. La versión **CSF 2.0 (2024)** añadió una sexta función, **Govern**, situándola en el centro:

| Función | Sigla | Objetivo |
|---|---|---|
| **Govern** (Gobernar) — *novedad 2.0* | GV | Estrategia, roles, políticas, gestión del riesgo de la organización y de la cadena de suministro |
| **Identify** (Identificar) | ID | Conocer activos, riesgos, contexto |
| **Protect** (Proteger) | PR | Salvaguardas: control de accesos, formación, protección de datos |
| **Detect** (Detectar) | DE | Detección de eventos y anomalías |
| **Respond** (Responder) | RS | Gestión de incidentes, comunicación, mitigación |
| **Recover** (Recuperar) | RC | Recuperación, restauración, lecciones aprendidas |

El CSF se completa con **Categorías**, **Subcategorías**, **Tiers** (niveles de madurez 1-4) y **Profiles** (perfil actual vs. objetivo).

## 5.5. Comparativa de marcos

| Aspecto | ISO 27001 | ENS | NIST CSF 2.0 |
|---|---|---|---|
| **Naturaleza** | Estándar internacional voluntario | Norma legal (obligatoria sector público) | Marco voluntario |
| **Certificable** | Sí | Sí (conformidad) | No (autoevaluación) |
| **Enfoque** | Sistema de gestión (SGSI) | Categorización + medidas | Funciones y resultados |
| **Documento de controles** | SoA / Anexo A (93) | Declaración de Aplicabilidad / Anexo II | Subcategorías |
| **Origen** | ISO/IEC | CCN (España) | NIST (EE. UU.) |

## 5.6. Ejemplo de mapeo ISO 27002 ↔ ENS

Uno de los ejercicios más útiles del perfil GRC es el **mapeo (crosswalk)** entre marcos, para reaprovechar el trabajo y evitar duplicar esfuerzos. El CCN publica guías de equivalencias. Ejemplo ilustrativo:

| Control ISO/IEC 27002:2022 | Medida ENS (RD 311/2022) | Función NIST CSF 2.0 |
|---|---|---|
| 5.1 Políticas de seguridad de la información | org.1 Política de seguridad | GV.PO |
| 5.15 Control de accesos | op.acc.* Control de acceso | PR.AA |
| 8.5 Autenticación segura | op.acc.5 Mecanismo de autenticación | PR.AA |
| 8.24 Uso de criptografía | mp.info.3 Cifrado | PR.DS |
| 8.15 Registro (logging) | op.exp.8 Registro de actividad | DE.CM |
| 5.24 Gestión de incidentes | op.exp.7 / op.mon Gestión de incidentes | RS.MA |
| 5.29 Continuidad de la seguridad | op.cont Continuidad del servicio | RC.RP |
| 5.19 Seguridad en las relaciones con proveedores | op.ext Recursos externos | GV.SC |

## 🧪 Caso práctico 5.1 — Taller de mapeo de controles

**Enunciado.** Una empresa ya certificada en ISO 27001 quiere presentarse a un contrato público que exige conformidad con el ENS de categoría MEDIA. Elabora un mapeo de 10 controles ISO 27002 con su medida ENS equivalente e identifica **tres huecos (gaps)** donde el ENS pide algo que ISO no cubre igual.

**Pistas para la solución.** El ENS es más prescriptivo en trazabilidad (op.exp.8), en la valoración por dimensiones y en la firma electrónica/sellado de tiempo (autenticidad); esos suelen ser gaps típicos frente a un SGSI ISO puro.

## ✍️ Ejercicios propuestos 5

1. Explica con tus palabras el ciclo PDCA aplicado a un instituto de FP que quiere implantar un SGSI para su plataforma Moodle.
2. Clasifica 12 controles del Anexo A 2022 en sus 4 temas (organizativos, personas, físicos, tecnológicos).
3. Sitúa cinco medidas de seguridad reales (MFA, formación, copias, cifrado, plan de recuperación) en las funciones del NIST CSF 2.0.

---

# Unidad Didáctica 6. Gestión de riesgos: MAGERIT v3 y PILAR

## 6.1. Por qué el riesgo está en el centro de todo

Todos los marcos anteriores (ENS, ISO 27001, NIS2) comparten un mismo cimiento: la **gestión del riesgo basada en el análisis**. No se puede proteger todo con la misma intensidad ni gastar sin criterio; hay que **priorizar** en función de qué activos son más valiosos y qué amenazas son más probables y dañinas. El análisis de riesgos es, por tanto, la herramienta que convierte la seguridad en una decisión **racional y justificable**.

## 6.2. MAGERIT v3: conceptos

**MAGERIT** (Metodología de Análisis y Gestión de Riesgos de los Sistemas de Información) es la metodología elaborada por el antiguo Consejo Superior de Administración Electrónica (hoy referencia del sector público español). Su **versión 3** se organiza en tres libros: *Método*, *Catálogo de elementos* y *Guía de técnicas*. Los elementos fundamentales:

| Elemento | Definición | Ejemplo |
|---|---|---|
| **Activo** | Recurso del sistema con valor para la organización | Servidor, base de datos, aplicación, personal, datos |
| **Amenaza** | Evento que puede causar un daño a un activo | Malware, fuego, error humano, fuga de información |
| **Vulnerabilidad** | Debilidad que una amenaza puede aprovechar | Software sin parchear, contraseña débil |
| **Impacto** | Daño causado sobre el activo si se materializa la amenaza | Pérdida de datos, indisponibilidad |
| **Probabilidad / frecuencia** | Con qué frecuencia se espera que ocurra | Alta, media, baja |
| **Riesgo** | Estimación del daño esperado = **probabilidad × impacto** | Nivel de riesgo alto/medio/bajo |
| **Salvaguarda / control** | Medida que reduce la probabilidad o el impacto | Antivirus, cifrado, copias, formación |

MAGERIT valora los activos precisamente en las mismas **dimensiones DAICT** del ENS (disponibilidad, autenticidad, integridad, confidencialidad, trazabilidad), lo que permite encadenar el análisis de riesgos con la categorización ENS.

## 6.3. El proceso de análisis y gestión de riesgos

El proceso, común a MAGERIT/ISO 27005, sigue estas fases:

```text
1. Inventario y valoración de ACTIVOS
        ↓
2. Identificación de AMENAZAS sobre cada activo
        ↓
3. Estimación de la PROBABILIDAD (frecuencia) de cada amenaza
        ↓
4. Estimación del IMPACTO (degradación × valor del activo)
        ↓
5. Cálculo del RIESGO POTENCIAL = Probabilidad × Impacto
        ↓
6. Identificación de SALVAGUARDAS existentes y su eficacia
        ↓
7. Cálculo del RIESGO RESIDUAL (tras salvaguardas)
        ↓
8. TRATAMIENTO del riesgo (aceptar / mitigar / transferir / evitar)
        ↓
9. Aceptación del riesgo residual por la Dirección
```

Se distingue el **riesgo potencial** (o intrínseco: el que habría sin salvaguardas) del **riesgo residual** (el que queda tras aplicar las salvaguardas). La Dirección debe **aceptar formalmente** el riesgo residual: es una decisión de negocio, no técnica.

## 6.4. Análisis cualitativo vs. cuantitativo

| Aspecto | Cualitativo | Cuantitativo |
|---|---|---|
| **Escala** | Niveles (alto/medio/bajo, 1-5) | Valores monetarios (€) |
| **Métricas** | Matrices de riesgo | ALE = SLE × ARO |
| **Ventaja** | Rápido, intuitivo, no requiere datos precisos | Justifica inversiones en términos económicos |
| **Inconveniente** | Subjetivo | Requiere muchos datos fiables |
| **Uso típico** | La mayoría de PYMES y administraciones | Sectores con datos históricos (banca, seguros) |

En el análisis **cuantitativo** se usan tres métricas clásicas:
- **SLE** (Single Loss Expectancy): pérdida por un único incidente = Valor del activo × Factor de exposición.
- **ARO** (Annualized Rate of Occurrence): número esperado de incidentes al año.
- **ALE** (Annualized Loss Expectancy): pérdida anual esperada = **SLE × ARO**.

Ejemplo: si un servidor vale 20.000 €, un incendio destruiría el 100 % (SLE = 20.000 €) y se estima 1 incendio cada 25 años (ARO = 0,04), entonces **ALE = 800 €/año**. Si una salvaguarda (sistema antiincendios) cuesta 500 €/año y reduce el ARO a casi 0, es rentable.

## 6.5. La matriz de riesgos (análisis cualitativo)

La herramienta visual más habitual es la **matriz probabilidad × impacto**:

```text
IMPACTO
  MUY ALTO |  M  |  A  |  A  |  MA |  MA |
     ALTO  |  B  |  M  |  A  |  A  |  MA |
    MEDIO  |  B  |  M  |  M  |  A  |  A  |
     BAJO  |  B  |  B  |  M  |  M  |  A  |
  MUY BAJO |  B  |  B  |  B  |  M  |  M  |
           |MBAJ | BAJ | MED | ALT |MALT |
                    PROBABILIDAD
  Leyenda: B=Bajo  M=Medio  A=Alto  MA=Muy Alto (nivel de riesgo)
```

Ejemplo de tabla de riesgos evaluados:

| Activo | Amenaza | Prob. | Impacto | Riesgo | Salvaguarda | Riesgo residual |
|---|---|---|---|---|---|---|
| Servidor BBDD | Ransomware | Alta | Muy alto | **Muy alto** | Copias offline + EDR + MFA | Medio |
| Web pública | DoS | Media | Alto | **Alto** | WAF + CDN anti-DDoS | Bajo |
| Portátiles | Robo/pérdida | Media | Medio | **Medio** | Cifrado disco + MDM | Bajo |
| Personal | Ingeniería social | Alta | Alto | **Alto** | Formación + simulacros phishing | Medio |
| CPD | Incendio | Baja | Muy alto | **Medio** | Detección + extinción | Bajo |

## 6.6. Tratamiento del riesgo y apetito de riesgo

Para cada riesgo, tras la evaluación, se decide una **estrategia de tratamiento**. Las cuatro estrategias clásicas (las "4 T": *Treat, Transfer, Tolerate, Terminate*):

| Estrategia | En qué consiste | Ejemplo |
|---|---|---|
| **Mitigar / reducir** (*treat*) | Aplicar salvaguardas que bajan probabilidad o impacto | Instalar EDR, cifrado, copias |
| **Transferir / compartir** (*transfer*) | Trasladar el impacto a un tercero | Ciberseguro, externalización |
| **Aceptar / asumir** (*tolerate*) | Convivir con el riesgo (si es bajo o el coste de mitigar es mayor) | Aceptar el riesgo residual bajo |
| **Evitar / eliminar** (*terminate*) | Suprimir la actividad o el activo que genera el riesgo | Dejar de ofrecer un servicio inseguro |

El **apetito de riesgo** (risk appetite) es la cantidad de riesgo que la organización está dispuesta a asumir para alcanzar sus objetivos; la **tolerancia** es la desviación aceptable respecto de ese apetito. Cualquier riesgo por encima del apetito **debe** tratarse; por debajo, puede aceptarse. Es una decisión de la Dirección, no del técnico.

## 6.7. La herramienta PILAR

**PILAR** (Procedimiento Informático y Lógico para el Análisis de Riesgos) es la herramienta oficial del **CCN** que automatiza MAGERIT. Con ella se:
- Construye el **árbol de activos** y sus dependencias.
- Valora activos en las dimensiones DAICT.
- Aplica el **catálogo de amenazas** de MAGERIT.
- Calcula riesgo **potencial** y **residual** según las salvaguardas y su madurez.
- Simula escenarios ("¿qué pasa si aplico esta salvaguarda?").
- Genera informes alineados con el **ENS** (facilita la categorización y la Declaración de Aplicabilidad).

Existen variantes (PILAR Basic, µPILAR) para adaptarse al tamaño de la organización. Alternativas del mercado: EAR/PILAR, y para PYMES herramientas más ligeras.

## 🧪 Caso práctico 6.1 — Mini análisis de riesgos con MAGERIT

**Enunciado.** Para una PYME con un servidor de ficheros, una web corporativa y 10 portátiles, elabora: (a) inventario de 5 activos con valoración DAICT (alto/medio/bajo); (b) identifica una amenaza por activo; (c) construye la tabla de riesgo con probabilidad, impacto, riesgo, salvaguarda y riesgo residual; (d) decide la estrategia de tratamiento de cada uno.

**Producto esperado.** Una tabla como la del apartado 6.5, más una columna de estrategia (mitigar/transferir/aceptar/evitar) y una frase de aceptación del riesgo residual por la Dirección.

## 🧪 Caso práctico 6.2 — Cálculo cuantitativo (ALE)

**Enunciado.** Un servidor de e-commerce genera 3.000 €/día de ingresos. Una caída por DoS lo deja inoperativo 1 día (SLE = 3.000 €) y se estiman 4 ataques exitosos al año (ARO = 4). Calcula el **ALE**. Un servicio anti-DDoS cuesta 6.000 €/año y reduciría el ARO a 0,25. ¿Es rentable?

**Solución.** ALE actual = 3.000 × 4 = **12.000 €/año**. ALE con salvaguarda = 3.000 × 0,25 = 750 €/año. Ahorro = 11.250 €/año; coste = 6.000 €/año → **rentable** (ROSI positivo).

## ✍️ Ejercicios propuestos 6

1. Define con tus palabras: activo, amenaza, vulnerabilidad, impacto, riesgo, salvaguarda, riesgo residual.
2. Rellena una matriz probabilidad × impacto con 6 riesgos de un aula de informática.
3. Para tres riesgos, decide y justifica la estrategia de tratamiento (mitigar/transferir/aceptar/evitar).
4. Calcula el ALE de un escenario de robo de portátiles (SLE 1.200 €, ARO 3) y evalúa una salvaguarda de cifrado + seguros por 2.000 €/año.

---

# Unidad Didáctica 7. Cumplimiento, auditoría y cultura de seguridad

## 7.1. Del riesgo a las políticas: la documentación de seguridad

El cumplimiento se materializa en un **cuerpo documental** jerarquizado. La pirámide documental típica de un SGSI/ENS:

| Nivel | Documento | Contenido |
|---|---|---|
| 1 (estratégico) | **Política de seguridad** | Compromiso y marco general aprobado por la Dirección |
| 2 (táctico) | **Normativas** | Reglas de uso (correo, contraseñas, dispositivos, teletrabajo) |
| 3 (operativo) | **Procedimientos** | Cómo se hacen las cosas paso a paso (alta de usuario, copias, gestión de incidentes) |
| 4 (evidencias) | **Registros** | Prueba de que se hace (logs, actas, informes, tickets) |

La **responsabilidad proactiva** (RGPD) y la lógica del ENS/ISO coinciden: no basta con hacerlo, hay que **documentarlo** para poder **demostrarlo** ante un auditor o un regulador.

## 7.2. Tipos de auditoría

| Criterio | Tipos |
|---|---|
| **Origen** | Interna (la propia organización) / Externa (tercero independiente) |
| **Finalidad** | Certificación / Cumplimiento legal / Diagnóstico (gap analysis) |
| **Marco** | ISO 27001 (entidad acreditada ENAC) / ENS (auditor competente) / RGPD |
| **Enfoque** | Documental / Técnica (pentest, revisión de configuraciones) |

El proceso de auditoría sigue: planificación → recopilación de **evidencias** → identificación de **no conformidades** (mayores/menores) y observaciones → informe → **plan de acción correctiva** → seguimiento. La mejora continua (PDCA) cierra el ciclo.

## 7.3. Plan de adecuación y plan director de seguridad

- **Plan de adecuación al ENS** (CCN-STIC 806): documenta la situación de partida, la categorización, el análisis de riesgos, la Declaración de Aplicabilidad, el análisis de diferencias (gap) y el **cronograma** de implantación de las medidas pendientes.
- **Plan director de seguridad**: en el ámbito privado/ISO, es el documento estratégico que prioriza proyectos de seguridad a 2-3 años a partir del análisis de riesgos y del gap frente al estándar objetivo.

## 7.4. Cultura de seguridad, concienciación y aspectos éticos

La estadística es tozuda: el **factor humano** interviene en la mayoría de los incidentes. Por eso NIS2, el ENS y ISO 27001 exigen **formación y concienciación**. Elementos de un programa: formación periódica, simulacros de *phishing*, campañas, cláusulas de confidencialidad y el **deber de secreto** (que en el RGPD/LOPDGDD subsiste incluso tras finalizar la relación). El profesional GRC debe además conocer los límites del **hacking ético** (autorización previa, contrato, alcance) y los delitos informáticos del **Código Penal** (arts. 197 y ss.: descubrimiento y revelación de secretos, daños informáticos, acceso ilícito).

## ✍️ Ejercicios propuestos 7

1. Redacta el índice (tabla de contenidos) de una **Política de Seguridad** de una PYME.
2. Diseña un programa de **concienciación anual** con 6 acciones y su calendario.
3. Elabora un **plan de acción correctiva** con 5 no conformidades ficticias, su prioridad y su responsable.

---

## Proyecto integrador del módulo

### Enunciado: "Plan de adecuación y mini-SGSI para la PYME *CloudYole Servicios Digitales, S.L.*"

**Contexto ficticio.** *CloudYole Servicios Digitales, S.L.* es una PYME de 28 empleados y 4,5 M€ de facturación que desarrolla y aloja aplicaciones web. Tiene un CPD propio pequeño y usa servicios en la nube. Ha ganado un concurso para prestar servicio a un **ayuntamiento** (lo que le obliga al **ENS**), trata **datos personales** de clientes y empleados (lo que activa el **RGPD/LOPDGDD**) y, por su sector (proveedor digital) y tamaño, podría ser **entidad importante** bajo **NIS2**.

**Objetivo.** El alumnado, en equipos de 2-3 personas, debe elaborar la documentación de cumplimiento y un plan de adecuación, integrando todo lo aprendido.

### Entregables

| Nº | Entregable | Unidad relacionada | Peso |
|---|---|---|---|
| E1 | Informe del **marco normativo aplicable** a CloudYole (RGPD, LOPDGDD, ENS, NIS2) con justificación | UD1, UD3 | 10 % |
| E2 | **Registro de Actividades de Tratamiento** (mínimo 4 tratamientos) + 1 cláusula informativa + procedimiento de brechas | UD2 | 20 % |
| E3 | **Categorización ENS** del sistema que da servicio al ayuntamiento (5 dimensiones + categoría) | UD4 | 15 % |
| E4 | **Declaración de Aplicabilidad** (extracto, ≥ 12 medidas del Anexo II) | UD4 | 10 % |
| E5 | **Análisis de riesgos MAGERIT** (≥ 6 activos, tabla de riesgos, riesgo residual, tratamiento) | UD6 | 20 % |
| E6 | **Mapeo** de 8 controles ISO 27002 ↔ ENS ↔ NIST CSF | UD5 | 10 % |
| E7 | **Plan de adecuación** (gap + cronograma) y **política de seguridad** (índice + apartados clave) | UD4, UD7 | 15 % |

### Producto final y defensa

Cada equipo entrega una memoria (formato informe profesional) y realiza una **defensa oral** de 10 minutos ante el grupo, simulando la presentación a la Dirección de CloudYole del plan director. Se valorará la coherencia entre el análisis de riesgos, las medidas seleccionadas y las obligaciones legales.

---

## Evaluación y rúbrica

### Ponderación de la calificación del módulo

| Instrumento | Peso |
|---|---|
| Pruebas objetivas (conceptos: normativa, plazos, definiciones) | 30 % |
| Casos prácticos y talleres de las unidades | 25 % |
| Proyecto integrador (memoria + defensa) | 35 % |
| Actitud, participación y entrega en plazo | 10 % |

### Rúbrica del proyecto integrador (resumen)

| Criterio | Insuficiente (0-4) | Suficiente/Bien (5-7) | Notable/Excelente (8-10) |
|---|---|---|---|
| **Identificación normativa** | Confunde normas o su ámbito | Identifica las normas aplicables | Justifica con precisión y detecta matices (encargado, transferencias, categoría NIS2) |
| **Protección de datos** | RAT incompleto, bases erróneas | RAT y cláusula correctos | RAT completo, bases bien ponderadas, procedimiento de brechas realista |
| **ENS** | Categorización incorrecta | Categoriza y selecciona medidas | Declaración de Aplicabilidad coherente y justificada |
| **Análisis de riesgos** | Sin metodología clara | Aplica MAGERIT con tabla de riesgos | Riesgo residual, tratamiento y aceptación por Dirección bien argumentados |
| **Integración y mapeo** | Marcos aislados | Mapea algunos controles | Crosswalk completo y reutiliza el trabajo entre marcos |
| **Comunicación** | Desorganizado | Claro y ordenado | Nivel profesional, defensa convincente |

### Relación RA ↔ instrumentos

| Resultado de Aprendizaje | Se evalúa principalmente en |
|---|---|
| RA1 (marco normativo) | Prueba objetiva + E1 |
| RA2 (protección de datos) | Casos UD2 + E2 |
| RA3 (esquemas y marcos) | Casos UD4/UD5 + E3, E4, E6 |
| RA4 (gestión de riesgos) | Casos UD6 + E5 |
| RA5 (verificación del cumplimiento) | E7 + defensa |

---

## Glosario

| Término | Definición breve |
|---|---|
| **Accountability** | Responsabilidad proactiva: cumplir y poder demostrarlo (RGPD art. 5.2) |
| **AEPD** | Agencia Española de Protección de Datos; autoridad de control del RGPD/LOPDGDD |
| **ALE** | Annualized Loss Expectancy; pérdida anual esperada = SLE × ARO |
| **ARO** | Annualized Rate of Occurrence; frecuencia anual de un incidente |
| **ARSOPOL** | Acceso, Rectificación, Supresión, Oposición, Portabilidad, limitación (Oposición), decisiones automatizadas (L) |
| **CCN / CCN-CERT** | Centro Criptológico Nacional y su equipo de respuesta; referencia del ENS |
| **CSF** | Cybersecurity Framework (NIST); funciones GV-ID-PR-DE-RS-RC |
| **DAICT** | Disponibilidad, Autenticidad, Integridad, Confidencialidad, Trazabilidad (dimensiones del ENS/MAGERIT) |
| **DdA / SoA** | Declaración de Aplicabilidad; relaciona las medidas/controles aplicables y su estado |
| **DORA** | Reglamento UE 2022/2554 de resiliencia operativa digital del sector financiero |
| **DPD / DPO** | Delegado de Protección de Datos; figura de garantía del RGPD |
| **EIPD / DPIA** | Evaluación de Impacto relativa a la Protección de Datos (RGPD art. 35) |
| **ENISA** | Agencia de la UE para la Ciberseguridad |
| **ENS** | Esquema Nacional de Seguridad (RD 311/2022) |
| **INCIBE / INCIBE-CERT** | Instituto Nacional de Ciberseguridad; apoyo a ciudadanía y empresas |
| **LOPDGDD** | Ley Orgánica 3/2018 de Protección de Datos y garantía de derechos digitales |
| **MAGERIT** | Metodología de Análisis y Gestión de Riesgos de los Sistemas de Información (v3) |
| **NIS / NIS2** | Directivas UE de seguridad de redes y sistemas (2016/1148 y 2022/2555) |
| **PDCA** | Plan-Do-Check-Act; ciclo de mejora continua de Deming |
| **PILAR** | Herramienta del CCN para análisis de riesgos con MAGERIT |
| **RAT** | Registro de Actividades de Tratamiento (RGPD art. 30) |
| **RGPD** | Reglamento (UE) 2016/679, General de Protección de Datos |
| **Riesgo residual** | Riesgo que permanece tras aplicar las salvaguardas |
| **SGSI** | Sistema de Gestión de Seguridad de la Información (ISO 27001) |
| **SLE** | Single Loss Expectancy; pérdida por un único incidente |

---

## Recursos y bibliografía

### Normativa (fuentes primarias)
- **Reglamento (UE) 2016/679 (RGPD)** — General de Protección de Datos.
- **Ley Orgánica 3/2018 (LOPDGDD)** — Protección de Datos y garantía de derechos digitales.
- **Directiva (UE) 2022/2555 (NIS2)** — Seguridad de las redes y sistemas de información (deroga la Directiva (UE) 2016/1148).
- **Real Decreto-ley 12/2018** y **Real Decreto 43/2021** — transposición y desarrollo de NIS en España.
- **Real Decreto 311/2022** — Esquema Nacional de Seguridad (actualiza el RD 3/2010).
- **Ley 36/2015, de Seguridad Nacional** y **Estrategia Nacional de Ciberseguridad 2019**.
- **Reglamento (UE) 2019/881** (Cybersecurity Act), **Reglamento (UE) 2022/2554** (DORA), **Directiva (UE) 2022/2557** (CER), **Reglamento (UE) 2024/2847** (Cyber Resilience Act).
- **Real Decreto 479/2020** — Curso de especialización en Ciberseguridad en entornos de las TI.

### Estándares
- **ISO/IEC 27001:2022** y **ISO/IEC 27002:2022** (controles), **27005** (riesgos), **27701** (privacidad).
- **NIST Cybersecurity Framework 2.0 (2024)**.
- **MAGERIT v3** — Método, Catálogo de elementos y Guía de técnicas.

### Guías y organismos (referencia y consulta)
- **CCN-STIC serie 800** (guías del ENS): 800, 801, 803, 804, 806, 808, 809.
- Herramientas del CCN: **PILAR**, **INES**, **CLARA**, **µPILAR**.
- **AEPD**: guías prácticas (RAT, brechas, EIPD), herramientas *Facilita* y *Comunica-Brecha RGPD*.
- **INCIBE / INCIBE-CERT**: recursos para empresas y ciudadanía; catálogo de empresas y soluciones.
- **ENISA**: guías de gestión de riesgos y de implementación de NIS2.

### Recomendación metodológica
Los apuntes deben contrastarse siempre con el **texto vigente** de cada norma (BOE, EUR-Lex) y con las **guías actualizadas** de la AEPD y el CCN, ya que la normativa de ciberseguridad evoluciona con rapidez (transposición de NIS2, actualizaciones de guías CCN-STIC y de las series ISO 27000).

---

> *Documento didáctico elaborado para el módulo 5026 - Normativa de ciberseguridad (RD 479/2020). Uso educativo. Revisado con la normativa vigente a 2026; verifíquese el estado de transposición de NIS2 en España en el momento de impartición.*
