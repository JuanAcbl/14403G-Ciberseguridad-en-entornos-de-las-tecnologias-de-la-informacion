# 5021 - Incidentes de ciberseguridad

Este módulo profesional constituye uno de los pilares operativos del **Curso de Especialización en Ciberseguridad en Entornos de las Tecnologías de la Información** (Real Decreto 479/2020, de 7 de abril). Mientras que otros módulos del curso se centran en el diseño seguro, el análisis forense o la seguridad en el desarrollo, el módulo **5021 - Incidentes de ciberseguridad** aborda el ciclo de vida completo de un incidente desde la óptica defensiva (*blue team*): cómo **prevenirlos**, cómo **detectarlos** cuando la prevención falla, cómo **responder** de forma ordenada y coordinada, y cómo **recuperar** la operativa normal minimizando el impacto sobre el negocio.

El enfoque es eminentemente práctico y se sitúa en el contexto de un **SOC** (*Security Operations Center*) y de equipos de **DFIR** (*Digital Forensics and Incident Response*). A lo largo del módulo el alumnado construirá y operará un pequeño laboratorio de seguridad completo (SIEM, IDS/IPS, plataforma de *ticketing* y respuesta) con herramientas reales de código abierto, siempre en **entornos propios, aislados y autorizados**. La filosofía es clara: nunca se ataca lo que no es nuestro, nunca se practica fuera de una red de laboratorio controlada, y toda simulación de ataque se realiza con utilidades de test benignas y reconocidas.

| Aspecto | Detalle |
|---|---|
| **Código y denominación** | 5021 - Incidentes de ciberseguridad |
| **Marco normativo** | Real Decreto 479/2020, de 7 de abril |
| **Curso** | Especialización en Ciberseguridad en Entornos de las TI |
| **Horas orientativas del módulo** | ~150 h (parte proporcional del total de 720 h del curso) |
| **Modalidad recomendada** | Presencial / semipresencial con laboratorio virtualizado |
| **Prerrequisitos** | Redes TCP/IP, administración de sistemas Linux/Windows, fundamentos de seguridad, virtualización básica |
| **Competencias asociadas** | Prevenir, detectar, gestionar y responder ante incidentes; correlacionar eventos de seguridad; garantizar continuidad y recuperación |
| **Perfil profesional de salida** | Analista de SOC (Tier 1/2), Técnico de respuesta a incidentes (IR), Analista de seguridad *blue team* |
| **Herramientas troncales** | Wazuh, Elastic Stack (ELK), Suricata, Zeek, Sigma, TheHive/Cortex, Velociraptor, OpenVAS/Greenbone |

> **Aviso ético permanente.** Todos los laboratorios de este módulo se realizan exclusivamente sobre **máquinas propias, en red aislada (host-only / red interna) y con autorización explícita**. Las herramientas de generación de tráfico o de escaneo (nmap, EICAR, datasets PCAP públicos) se emplean únicamente contra dianas de laboratorio propias. Escanear, interceptar o atacar sistemas de terceros sin autorización por escrito es un **delito** tipificado en los artículos 197 bis y siguientes del Código Penal español. El objetivo de este módulo es **defensivo**.

---

## Resultados de Aprendizaje

A continuación se enumeran los Resultados de Aprendizaje (RA) del módulo, redactados conforme al estilo normativo del BOE, junto con un resumen de sus Criterios de Evaluación (CE). Estos RA vertebran las unidades didácticas y la evaluación.

### RA1. Aplica medidas preventivas frente a incidentes de ciberseguridad, identificando amenazas y vulnerabilidades y desplegando controles de protección y monitorización.

**Criterios de evaluación:**
- **CE1.a)** Se han identificado y clasificado los principales tipos de amenazas (malware, ingeniería social, ataques de red, amenazas internas, APT).
- **CE1.b)** Se han reconocido las vulnerabilidades más habituales y su ciclo de vida (descubrimiento, divulgación, parcheo), utilizando referencias como CVE, CVSS y CWE.
- **CE1.c)** Se han realizado análisis de vulnerabilidades con herramientas automatizadas (OpenVAS/Greenbone, Nessus) sobre activos propios.
- **CE1.d)** Se ha desplegado y configurado un SIEM para la recolección y normalización de logs.
- **CE1.e)** Se han aplicado políticas de seguridad y técnicas de bastionado (*hardening*) preventivo sobre sistemas y servicios.

### RA2. Detecta incidentes de ciberseguridad mediante la monitorización de redes y sistemas, empleando IDS/IPS, análisis de tráfico y correlación de eventos e indicadores de compromiso.

**Criterios de evaluación:**
- **CE2.a)** Se han monitorizado redes y sistemas identificando actividad anómala.
- **CE2.b)** Se han desplegado y ajustado sistemas de detección/prevención de intrusiones (Suricata, Snort) con reglas propias y de comunidad.
- **CE2.c)** Se ha analizado tráfico de red y eventos para identificar patrones maliciosos.
- **CE2.d)** Se han gestionado indicadores de compromiso (IOC) y reglas de detección (Sigma, YARA) integrándolos en el SIEM.
- **CE2.e)** Se han correlacionado eventos de distintas fuentes y clasificado los incidentes según su criticidad.

### RA3. Gestiona la respuesta ante incidentes de ciberseguridad aplicando metodologías reconocidas, coordinando la contención, erradicación y recuperación, y documentando el proceso.

**Criterios de evaluación:**
- **CE3.a)** Se han aplicado las fases de respuesta según NIST SP 800-61 y el modelo PICERL de SANS.
- **CE3.b)** Se ha elaborado y seguido un plan de respuesta a incidentes.
- **CE3.c)** Se han gestionado incidentes mediante una plataforma de *ticketing* y análisis (TheHive/Cortex).
- **CE3.d)** Se han realizado las comunicaciones y notificaciones obligatorias (AEPD, INCIBE-CERT, CCN-CERT) cuando procede.
- **CE3.e)** Se han redactado informes post-incidente y extraído lecciones aprendidas.

### RA4. Garantiza la continuidad de negocio y la recuperación ante desastres, definiendo planes, estrategias de copia de seguridad y objetivos de recuperación, y verificándolos mediante pruebas.

**Criterios de evaluación:**
- **CE4.a)** Se han diferenciado los conceptos de BCP y DRP y su alcance.
- **CE4.b)** Se han definido objetivos RTO y RPO a partir de un análisis de impacto en el negocio (BIA).
- **CE4.c)** Se han diseñado estrategias de copia de seguridad conforme a la regla 3-2-1(-1-0).
- **CE4.d)** Se han planificado y ejecutado pruebas y simulacros de recuperación.
- **CE4.e)** Se ha valorado la resiliencia del sistema frente a distintos escenarios de desastre.

### RA5. Opera de forma ética, legal y coordinada en el tratamiento de incidentes, respetando la cadena de custodia, la normativa de protección de datos y los protocolos de escalado.

**Criterios de evaluación:**
- **CE5.a)** Se ha respetado la cadena de custodia de las evidencias digitales.
- **CE5.b)** Se ha aplicado la normativa aplicable (RGPD, LOPDGDD, Directiva NIS2/Real Decreto de transposición, ENS).
- **CE5.c)** Se han seguido protocolos de escalado y comunicación con las partes implicadas.
- **CE5.d)** Se ha actuado con criterios éticos y de confidencialidad en todo momento.

---

## Unidad 1. Fundamentos y prevención de incidentes

### 1.1. ¿Qué es un incidente de ciberseguridad?

Antes de hablar de prevención conviene precisar el vocabulario, porque en el día a día de un SOC se emplean con ligereza términos que no significan lo mismo. Un **evento** es cualquier ocurrencia observable en un sistema o red: un inicio de sesión, la apertura de una conexión, la escritura de un fichero. La inmensa mayoría de los eventos son perfectamente normales. Un **evento de seguridad** es aquel que tiene relevancia para la seguridad, como un intento de autenticación fallido o el bloqueo de una conexión por el cortafuegos. Una **alerta** es la notificación que genera un sistema de detección cuando un evento (o una correlación de eventos) coincide con un patrón sospechoso. Finalmente, un **incidente de ciberseguridad** es un evento o conjunto de eventos que **compromete o amenaza con comprometer** la confidencialidad, integridad o disponibilidad (la tríada **CIA**) de la información o de los sistemas, o que supone una violación de las políticas de seguridad.

La distinción entre alerta e incidente es crucial: un SOC recibe miles de alertas al día, pero solo una fracción minúscula se **triará** (clasificará) como incidente real. El proceso que lleva de un torrente de eventos a un incidente confirmado y gestionado es, en esencia, el objeto de estudio de este módulo.

```text
   EVENTOS ──► EVENTOS DE SEGURIDAD ──► ALERTAS ──► TRIAJE ──► INCIDENTES
 (millones)        (miles)              (cientos)   (filtro)    (pocos)
   ruido           relevante           sospechoso   análisis   confirmado
```

Es útil también recordar el concepto de la **tríada CIA** ampliada, porque orienta qué protegemos y qué mide el impacto de un incidente:

| Dimensión | Qué protege | Ejemplo de incidente que la vulnera |
|---|---|---|
| **Confidencialidad** | Que la información solo sea accesible a quien está autorizado | Exfiltración de una base de datos de clientes |
| **Integridad** | Que la información y los sistemas no se alteren sin autorización | Modificación de registros contables, *defacement* web |
| **Disponibilidad** | Que los servicios estén operativos cuando se necesitan | Ataque de denegación de servicio (DoS), *ransomware* |
| **Autenticidad** (ampliada) | Garantizar el origen de la información | Suplantación de identidad, correo *spoofing* |
| **Trazabilidad / No repudio** | Poder atribuir acciones a un actor | Borrado de logs para ocultar actividad |

### 1.2. Amenazas: tipología y actores

Una **amenaza** es cualquier circunstancia o evento con potencial de causar un impacto adverso sobre un activo. No debe confundirse con la **vulnerabilidad** (la debilidad que la amenaza aprovecha) ni con el **riesgo** (la probabilidad de que la amenaza materialice la vulnerabilidad, ponderada por el impacto). La relación clásica es:

> **Riesgo = Amenaza × Vulnerabilidad × Impacto**

Las amenazas se pueden clasificar por su naturaleza y por el actor que las origina:

- **Malware**: software malicioso. Incluye virus, gusanos, troyanos, *rootkits*, *keyloggers* y, muy destacadamente hoy, el ***ransomware***, que cifra los datos de la víctima y exige un rescate, a menudo combinado con exfiltración previa (doble extorsión).
- **Ingeniería social**: manipulación psicológica para obtener información o accesos. El ***phishing*** (y sus variantes *spear phishing*, *whaling*, *smishing* por SMS y *vishing* por voz) es la puerta de entrada más común a incidentes graves.
- **Ataques de red**: escaneos de reconocimiento, ataques *man-in-the-middle*, *ARP spoofing*, secuestro de sesiones, y especialmente los ataques de **denegación de servicio** (DoS) y **denegación de servicio distribuida** (DDoS).
- **Ataques a aplicaciones web**: inyección SQL, *cross-site scripting* (XSS), inclusión de ficheros, deserialización insegura (véase el OWASP Top 10).
- **Amenazas internas** (*insider threats*): empleados o colaboradores, negligentes o malintencionados, que abusan de accesos legítimos.
- **APT** (*Advanced Persistent Threat*): actores sofisticados, a menudo con patrocinio estatal, que persiguen objetivos concretos con permanencia prolongada y sigilo. Se les asigna nombres/códigos (p. ej. APT28, APT29) y se cataloga su comportamiento en marcos como **MITRE ATT&CK**.

Los **actores de amenaza** se agrupan típicamente en: *script kiddies* (baja sofisticación), *hacktivistas* (motivación ideológica), ciberdelincuencia organizada (motivación económica, el grueso del *ransomware*), amenazas internas y actores estatales (APT).

### 1.3. Vulnerabilidades y su ciclo de vida

Una **vulnerabilidad** es una debilidad en un activo o control que puede ser explotada por una amenaza. Su gestión ordenada requiere hablar el idioma común de la industria:

- **CVE** (*Common Vulnerabilities and Exposures*): identificador único de una vulnerabilidad concreta, con formato `CVE-AAAA-NNNNN` (p. ej. `CVE-2021-44228`, la célebre *Log4Shell*). Lo mantiene MITRE.
- **CVSS** (*Common Vulnerability Scoring System*): puntuación de gravedad de 0.0 a 10.0. En su versión 3.1 se desglosa en métricas base (vector de ataque, complejidad, privilegios, interacción, alcance, impacto CIA), temporales y de entorno.
- **CWE** (*Common Weakness Enumeration*): clasifica el **tipo** de debilidad (p. ej. `CWE-89` inyección SQL, `CWE-79` XSS).
- **KEV** (*Known Exploited Vulnerabilities*): catálogo de CISA con vulnerabilidades que se sabe están siendo explotadas activamente; prioritario para el parcheo.

El **ciclo de vida** de una vulnerabilidad va del descubrimiento a la divulgación (idealmente **coordinada** o *responsible disclosure*), la publicación del CVE, la aparición del *exploit* (a veces antes del parche: *zero-day*) y finalmente el parcheo y la verificación. La **gestión de vulnerabilidades** es el proceso continuo de descubrir, evaluar, priorizar, remediar y verificar.

| Rango CVSS 3.1 | Gravedad |
|---|---|
| 0.0 | Ninguna |
| 0.1 – 3.9 | Baja |
| 4.0 – 6.9 | Media |
| 7.0 – 8.9 | Alta |
| 9.0 – 10.0 | Crítica |

### 1.4. Análisis de vulnerabilidades con herramientas automatizadas

El análisis de vulnerabilidades escanea los activos buscando servicios expuestos, versiones vulnerables y configuraciones inseguras, y los contrasta con bases de datos de firmas. Las dos herramientas de referencia son **Nessus** (Tenable, comercial con versión Essentials gratuita limitada) y **OpenVAS / Greenbone Vulnerability Management (GVM)**, la solución libre por excelencia.

Conviene diferenciar el **escaneo de vulnerabilidades** (automático, no intrusivo, identifica debilidades) del **test de intrusión / pentest** (explotación real controlada, con autorización explícita). En este módulo, con enfoque *blue team*, nos centramos en el escaneo defensivo sobre activos propios.

Un flujo típico con Greenbone:

```bash
# Sobre una instalación de Greenbone Community Edition (laboratorio propio)
# 1. Verificar que los feeds de vulnerabilidades están actualizados
sudo greenbone-feed-sync

# 2. Comprobar el estado de los servicios
sudo gvm-check-setup

# El resto de la operativa se hace desde la interfaz web (GSA), pero se puede
# automatizar con gvm-tools y el protocolo GMP:
gvm-cli --gmp-username admin --gmp-password '****' socket \
  --xml "<get_tasks/>"
```

> **Ética:** el escaneo se lanza únicamente contra la subred de laboratorio (p. ej. `192.168.56.0/24` en red host-only). Nunca contra direcciones que no sean del propio laboratorio.

### 1.5. SIEM: recolección, normalización y correlación de logs

Un **SIEM** (*Security Information and Event Management*) es el corazón del SOC. Combina dos funciones históricas: la **SIM** (gestión de la información de seguridad, es decir, almacenamiento y análisis a largo plazo de logs) y la **SEM** (gestión de eventos de seguridad, es decir, monitorización y alerta en tiempo real). Un SIEM moderno:

1. **Recolecta** logs y telemetría de múltiples fuentes (cortafuegos, servidores, endpoints, aplicaciones, cloud).
2. **Normaliza** y enriquece los datos a un esquema común (parsing, geolocalización de IP, resolución de usuarios).
3. **Almacena** e indexa para búsqueda rápida.
4. **Correlaciona** eventos mediante reglas para detectar patrones que un evento aislado no revelaría.
5. **Alerta** y facilita la investigación mediante *dashboards*.

En el laboratorio del módulo usaremos dos combinaciones muy extendidas y libres: **Wazuh** (que integra un HIDS, gestión de logs y capacidades XDR/SIEM sobre Elastic) y el **Elastic Stack** clásico (*Elasticsearch* + *Logstash* + *Kibana* + *Beats*, conocido como **ELK**).

```text
        [Fuentes]                 [Ingesta]            [Almacén]        [Análisis]
 Firewall, DNS, Windows,   ──►  Beats / Agent /  ──►  Elasticsearch ──►  Kibana
 Linux syslog, IDS, Cloud       Logstash / Wazuh        (índices)        (dashboards,
 Endpoints (Sysmon)             (parse+enrich)                            alertas, KQL)
```

La **gestión y correlación de logs** exige decidir **qué** recolectar (no todo: se satura el almacenamiento y se genera ruido), **cuánto** retener (por normativa y por capacidad de investigación retrospectiva) y **cómo** normalizar. Fuentes imprescindibles: autenticación (éxitos y fallos), creación de procesos (en Windows, mediante **Sysmon**), tráfico DNS, conexiones de red, cambios de privilegios y accesos a recursos críticos.

### 1.6. Políticas de seguridad y bastionado preventivo

La tecnología sin gobierno no basta. Las **políticas de seguridad** son el conjunto de normas, procedimientos y directrices que la organización establece para proteger sus activos. Se estructuran jerárquicamente: **política** (qué y por qué, aprobada por dirección), **normas** (requisitos concretos), **procedimientos** (cómo, paso a paso) y **guías** (recomendaciones). Marcos de referencia: **ISO/IEC 27001/27002**, el **Esquema Nacional de Seguridad (ENS)** obligatorio para el sector público español, y los controles **CIS**.

El **bastionado** o ***hardening*** consiste en reducir la superficie de ataque de un sistema: desinstalar servicios y software innecesarios, cerrar puertos, aplicar el **principio de mínimo privilegio**, endurecer configuraciones por defecto, forzar cifrado, y aplicar líneas base de seguridad (*CIS Benchmarks*, guías **CCN-STIC** del CCN-CERT para el ámbito español). Ejemplos de medidas de bastionado en Linux:

```bash
# Deshabilitar login SSH de root y forzar solo clave pública (extracto de sshd_config)
PermitRootLogin no
PasswordAuthentication no
Protocol 2

# Cortafuegos por defecto denegar-todo, permitir lo mínimo (ufw)
sudo ufw default deny incoming
sudo ufw default allow outgoing
sudo ufw allow 22/tcp
sudo ufw enable

# Comprobación automatizada de cumplimiento con Lynis
sudo lynis audit system
```

Wazuh, además, incluye módulos de **evaluación de configuración de seguridad (SCA)** que verifican automáticamente el cumplimiento de *CIS Benchmarks* sobre los endpoints monitorizados, cerrando el círculo entre política y verificación.

### 🧪 Laboratorio práctico 1.1 — Escaneo de vulnerabilidades en red aislada

**Objetivo:** identificar vulnerabilidades de una diana de laboratorio con Greenbone/OpenVAS y priorizarlas por CVSS.

**Entorno:** red host-only `192.168.56.0/24`. Máquina atacante-analista con Greenbone Community Edition (o Kali). Diana: **Metasploitable 2** (VM deliberadamente vulnerable, en red aislada, **sin acceso a Internet ni a la red corporativa**).

**Pasos:**
1. Confirma el aislamiento de la red: la diana no debe tener salida a Internet ni ruta hacia la LAN real.
2. Reconocimiento básico y benigno con nmap contra la diana propia:
   ```bash
   nmap -sV -O 192.168.56.101 -oN metasploitable_scan.txt
   ```
3. Lanza una tarea de escaneo completo desde la interfaz de Greenbone contra `192.168.56.101`.
4. Exporta el informe y localiza al menos tres vulnerabilidades **Críticas** o **Altas**.
5. Para cada una, anota su **CVE**, su **CVSS** y una medida de remediación.

**Entregable:** tabla con CVE, servicio afectado, CVSS, y remediación propuesta.

### 🧪 Laboratorio práctico 1.2 — Despliegue del SIEM (Wazuh) y primer *hardening*

**Objetivo:** desplegar Wazuh y verificar el cumplimiento de una línea base con el módulo SCA.

**Pasos:**
1. Instala Wazuh (all-in-one) en una VM Linux del laboratorio:
   ```bash
   curl -sO https://packages.wazuh.com/4.x/wazuh-install.sh
   sudo bash ./wazuh-install.sh -a
   ```
2. Despliega el **agente Wazuh** en un endpoint (Windows o Linux) del laboratorio y verifícalo en el dashboard (`Agents`).
3. Ejecuta el módulo **SCA** contra un *CIS Benchmark* y revisa el porcentaje de cumplimiento.
4. Aplica **tres** medidas de bastionado (p. ej. las de SSH del apartado 1.6) y vuelve a ejecutar el SCA para comprobar la mejora.

**Entregable:** captura del cumplimiento SCA antes/después y descripción de las medidas aplicadas.

### ✍️ Ejercicios propuestos

1. **Clasifica** cinco incidentes reales recientes (a partir de noticias del INCIBE o del CCN-CERT) según la tríada CIA afectada y el tipo de amenaza.
2. Dado el CVE **CVE-2021-44228 (Log4Shell)**, investiga y redacta media página: CWE asociado, vector de ataque según CVSS 3.1, sistemas afectados y por qué fue tan grave.
3. Diseña, para una PYME ficticia, una **política de contraseñas** y una **política de gestión de parches** de una página cada una, alineadas con el ENS categoría BÁSICA.

---

## Unidad 2. Detección de incidentes

### 2.1. Monitorización de redes y sistemas

La **detección** parte de una premisa realista: por muy buena que sea la prevención, tarde o temprano un adversario penetrará el perímetro. La monitorización continua busca reducir el **tiempo de permanencia** (*dwell time*) del atacante y, con ello, dos métricas clave del SOC: el **MTTD** (*Mean Time To Detect*, tiempo medio hasta detectar) y el **MTTR** (*Mean Time To Respond*, tiempo medio hasta responder). Cuanto menores, mejor.

La monitorización se apoya en dos grandes familias de telemetría complementarias:

- **NSM** (*Network Security Monitoring*): visibilidad del tráfico de red. Detecta escaneos, C2 (*command and control*), exfiltración, movimientos laterales visibles en la red. Herramientas: **Suricata**, **Snort**, **Zeek**, y suites integradas como **Security Onion**.
- **EDR/HIDS** (*Endpoint Detection and Response* / *Host IDS*): visibilidad del endpoint. Detecta ejecución de procesos maliciosos, persistencia, manipulación de ficheros, escaladas de privilegio. Herramientas: **Wazuh** (con **Sysmon** en Windows), **Velociraptor**, EDR comerciales.

La regla de oro es que **ninguna fuente es suficiente por sí sola**; la correlación entre red y endpoint es lo que da contexto y reduce falsos positivos.

### 2.2. IDS/IPS: Suricata y Snort

Un **IDS** (*Intrusion Detection System*) detecta y alerta; un **IPS** (*Intrusion Prevention System*) además bloquea activamente el tráfico malicioso (se sitúa *inline*). Según su alcance:

- **NIDS/NIPS** (basados en red): analizan el tráfico de un segmento (**Suricata**, **Snort**).
- **HIDS/HIPS** (basados en host): analizan la actividad de un equipo concreto (**Wazuh**, **OSSEC**).

Según su método de detección:

- **Basado en firmas**: compara con patrones conocidos. Muy fiable para amenazas conocidas, ciego ante lo nuevo.
- **Basado en anomalías**: aprende un comportamiento normal y alerta ante desviaciones. Detecta lo desconocido, pero genera más falsos positivos.

**Suricata** es un motor de IDS/IPS/NSM moderno, multihilo, que además de firmas produce metadatos ricos del tráfico (registros de flujos, DNS, TLS, HTTP, extracción de ficheros) en formato **EVE JSON**, fácilmente ingerible por un SIEM. Ejemplo de despliegue y una regla propia:

```bash
# Instalar y comprobar Suricata
sudo apt install suricata -y
sudo suricata --build-info | head

# Actualizar conjuntos de reglas de comunidad (ET Open) con suricata-update
sudo suricata-update
sudo suricata-update list-sources

# Ejecutar sobre una interfaz (modo IDS) en el laboratorio
sudo suricata -i eth1 -c /etc/suricata/suricata.yaml
```

Una **regla Suricata** ilustrativa que detecta un escaneo con nmap contra nuestra propia diana (basada en el *user-agent* o en el volumen; aquí un ejemplo didáctico que alerta ante intento de conexión a un puerto sensible):

```text
alert tcp any any -> $HOME_NET 3389 (msg:"LAB - Intento de conexion RDP desde host no autorizado"; \
  flow:to_server,established; \
  threshold:type limit, track by_src, count 1, seconds 60; \
  classtype:attempted-recon; sid:9000001; rev:1;)
```

Y una regla clásica para detectar tráfico de la señal de prueba **EICAR** transitando por HTTP (útil para validar el *pipeline* de detección sin malware real):

```text
alert http any any -> any any (msg:"LAB - Cadena de prueba EICAR detectada en HTTP"; \
  content:"X5O!P%@AP[4\PZX54(P^)7CC)7}$EICAR"; \
  http.response_body; classtype:trojan-activity; sid:9000002; rev:1;)
```

### 2.3. Análisis de tráfico con Zeek y datasets PCAP

**Zeek** (antes Bro) no es un IDS de firmas: es un **motor de análisis de tráfico** que genera registros estructurados y de altísimo valor forense (`conn.log`, `dns.log`, `http.log`, `ssl.log`, `files.log`, `notice.log`). Es la herramienta de referencia para reconstruir "qué pasó" en la red durante un incidente.

Para practicar análisis de tráfico sin generar ataques reales, se emplean **datasets PCAP públicos**, como los de **Malware-Traffic-Analysis.net** (capturas reales de tráfico malicioso ya "detonado", publicadas para formación). El análisis se hace en un entorno aislado y **sin ejecutar** ningún artefacto.

```bash
# Analizar un PCAP de laboratorio con Zeek (genera los .log en el directorio actual)
zeek -r captura_laboratorio.pcap

# Revisar las conexiones y las peticiones DNS
cat conn.log | zeek-cut id.orig_h id.resp_h id.resp_p proto service
cat dns.log  | zeek-cut query qtype_name answers

# Extracción de ficheros transferidos (útil para localizar payloads en un PCAP de estudio)
zeek -r captura_laboratorio.pcap FileExtract::prefix=./ficheros_extraidos/
```

Con **tshark** (Wireshark en línea de comandos) se puede triangular rápidamente:

```bash
# Top de hosts que más conexiones inician (posible escaneo o C2)
tshark -r captura_laboratorio.pcap -q -z endpoints,ip

# Filtrar peticiones HTTP con user-agent sospechoso
tshark -r captura_laboratorio.pcap -Y 'http.request' -T fields \
  -e ip.src -e http.host -e http.user_agent
```

### 2.4. Indicadores de compromiso (IOC) y su gestión

Un **IOC** (*Indicator of Compromise*) es un artefacto observable que evidencia una intrusión: un *hash* de un fichero malicioso, una IP o dominio de C2, una clave de registro, un nombre de proceso, un *user-agent*. Es útil situarlos en la **Pirámide del Dolor** de David Bianco, que ordena los indicadores según lo costoso que le resulta al atacante cambiarlos (y, por tanto, según su valor defensivo):

```text
        △   TTPs               ← lo más doloroso de cambiar (comportamiento)
       ─┼─  Herramientas
      ──┼── Artefactos red/host
     ───┼─── Nombres de dominio
    ────┼──── Direcciones IP
   ─────┼───── Hash de ficheros   ← lo más trivial de cambiar (poco valor)
```

Detectar por *hash* es fácil de evadir; detectar por **TTP** (Tácticas, Técnicas y Procedimientos, catalogados en **MITRE ATT&CK**) obliga al adversario a cambiar su forma de operar, mucho más costoso. Por eso la detección moderna prioriza el comportamiento.

Los IOC y la inteligencia de amenazas (**CTI**, *Cyber Threat Intelligence*) se comparten en plataformas como **MISP** y se expresan de forma estructurada con **STIX/TAXII**. Para la detección en el endpoint se usan **reglas YARA** (patrones sobre ficheros/memoria) y, para logs, **reglas Sigma** (el "escribir una vez, traducir a cualquier SIEM").

### 2.5. Correlación de eventos y reglas Sigma

La **correlación** es el proceso de combinar eventos de distintas fuentes y momentos para revelar un patrón de ataque que ningún evento aislado mostraría. Ejemplo: un login fallido no es nada; cincuenta logins fallidos seguidos de uno exitoso desde la misma IP, seguidos de la creación de un usuario administrador, es un incidente de fuerza bruta con compromiso.

**Sigma** es un formato genérico y abierto para escribir reglas de detección sobre logs, independiente del SIEM. Una misma regla Sigma se **convierte** (con `sigma-cli`/`pySigma`) a la sintaxis del backend concreto (Elastic Lucene/EQL, Splunk SPL, Microsoft KQL, etc.). Ejemplo de regla Sigma que detecta la creación de un usuario y su adición al grupo de administradores en Windows:

```yaml
title: Creación de usuario local y alta en administradores
id: 8f1a2b3c-0001-4a2b-9c8d-lab000000001
status: experimental
description: Detecta la creación de una cuenta local seguida de su adición al grupo de administradores
logsource:
  product: windows
  service: security
detection:
  selection_create:
    EventID: 4720   # A user account was created
  selection_admin:
    EventID: 4732   # A member was added to a security-enabled local group
    TargetUserName|contains: 'Administradores'
  condition: selection_create and selection_admin
  timeframe: 10m
level: high
tags:
  - attack.persistence
  - attack.t1136.001
```

Convertirla al backend de Elasticsearch:

```bash
pip install sigma-cli pysigma-backend-elasticsearch
sigma convert -t lucene -p ecs_windows regla_usuario_admin.yml
```

Y una consulta directa en **KQL** (lenguaje de consulta de Kibana) para investigar picos de logins fallidos:

```text
event.code : "4625" and winlog.event_data.LogonType : "3"
| stats count by source.ip, user.name
```

Su equivalente en **Lucene** para el buscador de Kibana:

```text
event.code:4625 AND winlog.event_data.LogonType:3
```

### 2.6. Clasificación de incidentes por criticidad

No todos los incidentes merecen la misma respuesta. La **priorización** cruza el **impacto** (potencial daño a la organización) con la **urgencia** (velocidad a la que se propaga o el margen para actuar), y a menudo se resume en niveles de criticidad. Marcos habituales: la **taxonomía de INCIBE-CERT/CCN-CERT** y el niveles de peligrosidad/impacto de la **Guía Nacional de Notificación y Gestión de Ciberincidentes**.

| Nivel | Denominación (orientativa) | Ejemplo | Respuesta esperada |
|---|---|---|---|
| **Crítico** | Muy alto | Ransomware activo cifrando servidores de producción | Activación inmediata del equipo, dirección informada |
| **Alto** | Alto | Compromiso confirmado de una cuenta con privilegios | Contención en horas, análisis prioritario |
| **Medio** | Medio | Malware contenido por el EDR en un endpoint aislado | Investigación en la jornada |
| **Bajo** | Bajo | Escaneo externo sin explotación | Registro y seguimiento |
| **Informativo** | — | Alerta de política, falso positivo probable | Revisión rutinaria |

La clasificación se apoya también en el **modelo de datos de la clasificación de la NIS2/ENS** y en criterios como número de afectados, si hay datos personales implicados (lo que activa obligaciones RGPD) y si el servicio es esencial.

### 🧪 Laboratorio práctico 2.1 — Detección con Suricata y validación con EICAR/nmap

**Objetivo:** validar el *pipeline* de detección de red generando actividad benigna controlada.

**Entorno:** VM con Suricata monitorizando la interfaz de la red host-only; una segunda VM como origen del tráfico de prueba. Todo aislado.

**Pasos:**
1. Arranca Suricata en modo IDS sobre la interfaz de laboratorio y comprueba que `suricata-update` ha cargado el ruleset ET Open.
2. Añade las reglas propias `sid:9000001` (RDP) y `sid:9000002` (EICAR) del apartado 2.2 a `/etc/suricata/rules/local.rules` y recarga.
3. Genera un **escaneo benigno** contra tu propia diana:
   ```bash
   nmap -sT -p 3389 192.168.56.101
   ```
4. Descarga la **cadena de prueba EICAR** (fichero antivirus estándar, totalmente inofensivo) desde un servidor web de laboratorio para disparar la regla HTTP.
5. Revisa `/var/log/suricata/fast.log` y `eve.json` y localiza tus alertas:
   ```bash
   sudo tail -f /var/log/suricata/fast.log
   jq 'select(.event_type=="alert") | {sid:.alert.signature_id, sig:.alert.signature}' \
     /var/log/suricata/eve.json
   ```

**Entregable:** capturas de `fast.log` con las dos alertas y explicación de qué las disparó.

### 🧪 Laboratorio práctico 2.2 — Análisis forense de red de un PCAP público

**Objetivo:** reconstruir la actividad de un tráfico de estudio con Zeek y tshark.

**Pasos:**
1. Descarga un PCAP de estudio de **Malware-Traffic-Analysis.net** (dataset público de formación).
2. Ejecuta `zeek -r` y examina `conn.log`, `dns.log`, `http.log`.
3. Identifica: el host infectado (origen), el/los dominios y IP de C2, y los ficheros descargados.
4. Extrae al menos **tres IOC** (dominio, IP y hash de fichero) y consúltalos (de forma solo lectura, con fines formativos) en fuentes de reputación.
5. Redacta una mini-cronología ("timeline") de lo observado.

**Entregable:** *timeline* del tráfico, tabla de IOC y captura de los logs relevantes de Zeek.

### 🧪 Laboratorio práctico 2.3 — Reglas Sigma y correlación en el SIEM

**Objetivo:** escribir, convertir y probar una regla de detección de fuerza bruta.

**Pasos:**
1. Genera eventos `4625` (login fallido) en un endpoint Windows de laboratorio mediante intentos fallidos manuales controlados.
2. Escribe una regla **Sigma** que alerte ante *N* eventos 4625 desde la misma IP en 5 minutos seguidos de un 4624 (login correcto).
3. Conviértela a **Lucene/KQL** con `sigma convert` y créala como regla de detección en Kibana/Wazuh.
4. Comprueba que se genera la alerta y ajústala para reducir falsos positivos.

**Entregable:** regla Sigma, consulta convertida y captura de la alerta.

### ✍️ Ejercicios propuestos

1. Sitúa **cinco IOC** distintos en la Pirámide del Dolor y justifica su valor defensivo relativo.
2. Redacta una tabla que asocie **cinco técnicas de MITRE ATT&CK** con una fuente de log que permitiría detectarlas.
3. Compara IDS **basado en firmas** vs **basado en anomalías**: dos ventajas y dos inconvenientes de cada uno, con un ejemplo de amenaza que cada uno detectaría mejor.

---

## Unidad 3. Respuesta ante incidentes

### 3.1. Metodologías: NIST SP 800-61 y SANS PICERL

La respuesta a incidentes no se improvisa: se guía por metodologías consolidadas. Las dos referencias mundiales son la **NIST SP 800-61** ("Computer Security Incident Handling Guide") y el modelo **PICERL** del **SANS Institute**. Ambas describen las mismas ideas con distinto agrupamiento de fases:

| NIST SP 800-61 (4 fases) | SANS PICERL (6 fases) |
|---|---|
| 1. Preparación | 1. **P**reparation (Preparación) |
| 2. Detección y Análisis | 2. **I**dentification (Identificación) |
| 3. Contención, Erradicación y Recuperación | 3. **C**ontainment (Contención) |
| 4. Actividad Post-Incidente | 4. **E**radication (Erradicación) |
| | 5. **R**ecovery (Recuperación) |
| | 6. **L**essons Learned (Lecciones aprendidas) |

Es fundamental entender que el ciclo es **iterativo**: las lecciones aprendidas alimentan la preparación del siguiente incidente. No es una línea recta, sino un bucle de mejora continua.

```text
   ┌──────────────────────────────────────────────────────────┐
   ▼                                                            │
Preparación ─► Identificación ─► Contención ─► Erradicación ─► Recuperación ─► Lecciones
(playbooks,      (triaje,         (aislar,       (eliminar       (restaurar,      (informe,
 herramientas,   alcance,         limitar        causa raíz,     validar,         mejora)
 formación)      priorizar)       propagación)   parchear)       vigilar)
```

### 3.2. Fase de Preparación

Es la fase más importante y la única que se hace **antes** del incidente. Incluye: constituir el **CSIRT/equipo de respuesta** y definir roles (líder de incidente, analista, comunicaciones, enlace legal), redactar el **Plan de Respuesta a Incidentes (IRP)** y los ***playbooks*** por tipo de incidente (ransomware, phishing, compromiso de cuenta, fuga de datos), aprovisionar herramientas (SIEM, EDR, plataforma de *ticketing*, kit forense, canal de comunicación fuera de banda), definir la matriz de escalado y contactos (incluidos externos: INCIBE-CERT, fuerzas y cuerpos de seguridad, proveedores), y **entrenar** al equipo con simulacros.

Un ***playbook*** es un procedimiento paso a paso para un tipo concreto de incidente. Ejemplo esquemático de *playbook* de phishing:

```text
PLAYBOOK: Correo de phishing reportado
1. Recepción y creación de caso en TheHive.
2. Análisis del correo (cabeceras, remitente, enlaces, adjuntos en sandbox/Cortex).
3. Determinar alcance: ¿cuántos destinatarios? ¿alguien hizo clic / introdujo credenciales?
4. Contención: bloquear remitente/dominio/URL en el correo y proxy; purgar el mensaje de buzones.
5. Erradicación: reset de credenciales de afectados; revisar reglas de reenvío maliciosas.
6. Recuperación: reactivar cuentas, reforzar MFA.
7. Cierre: IOC extraídos, informe, aviso concienciación.
```

### 3.3. Identificación (Detección y Análisis)

Es el puente con la Unidad 2. Aquí se **confirma** que una alerta es realmente un incidente, se determina su **naturaleza y alcance** (qué sistemas, qué datos, qué usuarios) y se **clasifica** su criticidad. Tareas clave: triaje de la alerta, recopilación inicial de evidencias respetando la **cadena de custodia**, correlación en el SIEM, y **declaración formal** del incidente que activa el plan. Aquí es esencial documentar desde el minuto uno: cada acción con marca de tiempo, autor y justificación.

### 3.4. Contención

Objetivo: **frenar la propagación** y limitar el daño sin destruir evidencias. Se distingue entre:

- **Contención a corto plazo**: medidas inmediatas (aislar el equipo de la red, desconectar una VLAN, bloquear una IP/cuenta). Prioriza la rapidez.
- **Contención a largo plazo**: soluciones temporales robustas que permiten mantener la operación mientras se prepara la erradicación (p. ej. aplicar reglas de firewall, poner un sistema en cuarentena vigilada).

Decisión crítica y a menudo dilemática: **¿aislar de inmediato (perdiendo posible telemetría del atacante) o vigilar para entender el alcance?** Depende de la criticidad y del riesgo. En ransomware activo, la contención es inmediata y sin dudas. Importante: **aislar no siempre es apagar**; apagar un equipo puede destruir evidencias volátiles en memoria (procesos, conexiones, claves de cifrado), por lo que la decisión debe coordinarse con el equipo forense.

Con **Velociraptor** (herramienta de DFIR y respuesta remota a escala) se puede aislar un endpoint de forma controlada manteniéndolo accesible solo para el analista:

```text
# En la consola de Velociraptor, sobre el cliente comprometido (laboratorio):
# Aislamiento de red preservando la conexión con el servidor Velociraptor
Client > Quarantine Host

# Recogida de artefactos volátiles antes de cualquier acción destructiva
Collect Artifact: Windows.Memory.ProcessInfo
Collect Artifact: Windows.Network.Netstat
```

### 3.5. Erradicación

Eliminar la **causa raíz** y todo rastro del atacante: eliminar malware y mecanismos de **persistencia** (tareas programadas, servicios, claves de arranque, cuentas creadas), **parchear** la vulnerabilidad explotada, y reforzar controles. La erradicación debe ser completa: si se limpia el malware pero se deja la puerta trasera o la cuenta creada por el atacante, el incidente reaparecerá. Por eso la identificación del **vector de entrada** y de todos los sistemas afectados (el "alcance") es prerrequisito de una erradicación efectiva.

### 3.6. Recuperación

Restaurar los sistemas a operación normal de forma **segura y verificada**: reconstruir desde imágenes/backups limpios y de confianza, restaurar datos, validar la integridad, y **monitorizar intensivamente** los sistemas recuperados durante un tiempo prudencial para asegurarse de que el atacante no regresa. La recuperación se coordina estrechamente con los planes de continuidad y backup de la Unidad 4. Un criterio de negocio determina cuándo un sistema puede volver a producción; conviene tener criterios objetivos ("go/no-go") acordados de antemano.

### 3.7. Actividad Post-Incidente y Lecciones Aprendidas

Cuando el fuego está apagado empieza el aprendizaje. Se convoca una **reunión de lecciones aprendidas** (idealmente en un plazo corto, p. ej. dos semanas) que responde a preguntas concretas: ¿Qué ocurrió y cuándo? ¿Qué se hizo bien y qué mal? ¿Se detectó a tiempo? ¿Faltaban herramientas, permisos o información? ¿Qué medidas evitarían la reincidencia? El producto es el **informe post-incidente** y un plan de mejora con acciones, responsables y plazos.

Un buen **informe post-incidente** contiene, como mínimo: resumen ejecutivo (para dirección, sin jerga), cronología detallada (*timeline*), alcance e impacto, causa raíz, vector de entrada, acciones de respuesta tomadas, IOC y TTP observados (mapeados a MITRE ATT&CK), y recomendaciones. Debe ser **honesto** y orientado a mejorar, no a repartir culpas.

### 3.8. Ticketing y gestión del caso: TheHive y Cortex

**TheHive** es una plataforma libre de gestión de casos de respuesta a incidentes: permite crear **casos**, dividirlos en **tareas**, adjuntar **observables** (IOC), colaborar en tiempo real y mantener la trazabilidad completa. **Cortex** es su motor de **análisis y respuesta**: ejecuta *analyzers* (que enriquecen observables, p. ej. consultar la reputación de una IP o el veredicto de un hash) y *responders* (que ejecutan acciones, p. ej. bloquear una IP en el firewall). Se integra con **MISP** para el intercambio de inteligencia.

Flujo típico:

```text
Alerta (Wazuh/Suricata) ──► TheHive (crea caso) ──► Observables (IP, hash, dominio)
                                     │
                                     ▼
                           Cortex analyzers (reputación, VT, sandbox)
                                     │
                                     ▼
                           Enriquecimiento + decisión ──► Responder (bloqueo)
                                     │
                                     ▼
                           Cierre del caso + informe + IOC a MISP
```

Un caso en TheHive documenta automáticamente **quién** hizo **qué** y **cuándo**, lo que es esencial para la cadena de custodia y para el informe final. La integración Wazuh → TheHive puede automatizarse con la API de TheHive (webhook desde el SIEM al detectar una alerta de nivel alto).

### 3.9. Comunicación y notificaciones legales

Un incidente no es solo técnico: tiene dimensiones **legales y comunicativas**. En España las obligaciones más relevantes son:

- **AEPD (Agencia Española de Protección de Datos)**: si el incidente supone una **violación de la seguridad de datos personales** (brecha), el RGPD (art. 33) obliga a notificar a la autoridad de control **en un plazo máximo de 72 horas** desde que se tiene constancia, salvo que sea improbable que suponga un riesgo. Si el riesgo es **alto** para los afectados, también hay que **comunicárselo a ellos** (art. 34).
- **INCIBE-CERT**: CERT de referencia para ciudadanos y empresas del sector privado (y operadores). Canal de notificación y apoyo en la gestión de incidentes.
- **CCN-CERT**: CERT gubernamental (Centro Criptológico Nacional), competente para el sector público y sistemas clasificados; su plataforma **LUCIA** gestiona la notificación de ciberincidentes en el ámbito del ENS.
- **NIS2 / transposición nacional**: para entidades esenciales e importantes, obligación de notificar a la autoridad competente con plazos escalonados (alerta temprana en 24 h, notificación en 72 h, informe final en un mes).
- **Fuerzas y Cuerpos de Seguridad**: cuando hay indicios de delito, denuncia ante Policía Nacional (Brigada Central de Investigación Tecnológica) o Guardia Civil (GDT).

Es imprescindible tener **preparados los canales y las plantillas** de notificación **antes** del incidente (fase de preparación), porque los plazos son cortos y el estrés durante el incidente es alto. La comunicación **interna** (dirección, empleados) y **externa** (clientes, medios, reguladores) debe estar coordinada y usar canales **fuera de banda** si se sospecha que las comunicaciones internas están comprometidas.

### 3.10. Cadena de custodia de evidencias

Aunque el análisis forense profundo corresponde a otro módulo, la respuesta a incidentes debe **preservar** las evidencias correctamente para no invalidarlas. La **cadena de custodia** documenta la trazabilidad de cada evidencia desde su recolección hasta su presentación: quién la recogió, cuándo, cómo, dónde se almacenó y quién ha tenido acceso. Principios: recoger según el **orden de volatilidad** (primero lo más volátil: memoria, conexiones, procesos; después disco), calcular y registrar **hashes** (SHA-256) para garantizar integridad, trabajar siempre sobre **copias** y no sobre el original, y documentarlo todo.

```bash
# Registro de integridad de una evidencia (imagen de disco o volcado) en el laboratorio
sha256sum evidencia_disco.dd > evidencia_disco.dd.sha256
# Verificación posterior
sha256sum -c evidencia_disco.dd.sha256
```

### 🧪 Laboratorio práctico 3.1 — Gestión de un incidente end-to-end con TheHive y Cortex

**Objetivo:** gestionar un caso completo desde la alerta hasta el cierre.

**Escenario:** el laboratorio 2.1 ha generado una alerta de "RDP no autorizado". Trátala como un incidente simulado de acceso sospechoso.

**Pasos:**
1. Despliega **TheHive** y **Cortex** en el laboratorio (Docker) y conéctalos.
2. Crea un **caso** a partir de la alerta, con su severidad y descripción.
3. Añade **observables** (la IP origen del "escaneo", el puerto, el nombre del host).
4. Ejecuta un **analyzer** de Cortex sobre la IP (en laboratorio, con datos ficticios o analyzers offline).
5. Crea **tareas** siguiendo el *playbook* PICERL (identificar, contener, erradicar, recuperar) y asígnalas.
6. Cierra el caso y **exporta el informe**.

**Entregable:** informe del caso exportado desde TheHive y captura del *timeline* del caso.

### 🧪 Laboratorio práctico 3.2 — Redacción de un plan de respuesta y un *playbook*

**Objetivo:** producir documentación operativa de respuesta.

**Pasos:**
1. Redacta un **Plan de Respuesta a Incidentes (IRP)** de 2-3 páginas para una PYME: alcance, roles, fases, matriz de escalado y contactos (incluyendo AEPD e INCIBE-CERT).
2. Desarrolla un ***playbook* de ransomware** completo siguiendo PICERL, con la decisión explícita de "no apagar, aislar" y el punto de notificación a AEPD si hay datos personales.
3. Diseña una **plantilla de informe post-incidente**.

**Entregable:** IRP, playbook e informe (documento único o carpeta).

### ✍️ Ejercicios propuestos

1. Mapea las **6 fases de PICERL** a las **4 fases de NIST 800-61** y explica con tus palabras por qué el ciclo es iterativo.
2. Ante una brecha de datos personales detectada un viernes a las 18:00: ¿cuándo vence el plazo de los **72 h** de la AEPD? ¿Qué información mínima debe contener la notificación? ¿Cuándo hay que avisar además a los afectados?
3. Explica el **orden de volatilidad** y por qué "apagar el equipo comprometido" puede ser un error en la fase de contención.

---

## Unidad 4. Recuperación ante desastres y continuidad de negocio

### 4.1. BCP y DRP: dos planes complementarios

La resiliencia de una organización descansa sobre dos planes que a menudo se confunden:

- **BCP** (*Business Continuity Plan*, Plan de Continuidad de Negocio): visión amplia y orientada al **negocio**. Define cómo la organización mantiene sus **funciones críticas** operativas durante y después de una interrupción grave (no solo ciber: también incendios, pandemias, cortes de suministro). Abarca personas, procesos, instalaciones y proveedores.
- **DRP** (*Disaster Recovery Plan*, Plan de Recuperación ante Desastres): subconjunto **técnico** del BCP, centrado en **recuperar la infraestructura TI y los datos** tras un desastre.

Dicho de otro modo: el BCP responde a "¿cómo seguimos funcionando como empresa?"; el DRP responde a "¿cómo volvemos a poner en marcha los sistemas?". El DRP sirve al BCP.

### 4.2. BIA, RTO y RPO

El punto de partida de ambos planes es el **BIA** (*Business Impact Analysis*, Análisis de Impacto en el Negocio), que identifica los **procesos críticos**, sus dependencias (sistemas, datos, personas, proveedores) y el **impacto** de su interrupción a lo largo del tiempo (económico, legal, reputacional). Del BIA se derivan los dos objetivos temporales que gobiernan toda la estrategia:

- **RTO** (*Recovery Time Objective*): **cuánto tiempo** puede estar caído un servicio antes de que el impacto sea inaceptable. Responde a "¿en cuánto hay que recuperarlo?".
- **RPO** (*Recovery Point Objective*): **cuántos datos** (medidos en tiempo) podemos permitirnos perder. Responde a "¿hasta qué punto en el pasado debe llegar la última copia útil?". Un RPO de 1 hora exige copias al menos cada hora.

```text
     ...datos...    [ÚLTIMA COPIA]      💥 DESASTRE            [SERVICIO RECUPERADO]
   ──────────────────────┼──────────────────┼──────────────────────────┼───────►  tiempo
                         │◄──── RPO ────────►│◄────────── RTO ─────────►│
                    máxima pérdida de datos     máximo tiempo de caída
                       aceptable                  aceptable
```

Dos métricas complementarias que suelen aparecer: **MTD/MTPD** (*Maximum Tolerable Downtime*, tiempo máximo de inactividad tolerable, del cual el RTO debe ser menor) y **WRT** (*Work Recovery Time*, tiempo para verificar y reintegrar tras la restauración técnica).

Cuanto más exigentes (más bajos) sean RTO y RPO, **más cara** es la solución. Por eso se dimensionan por criticidad: no todos los servicios necesitan un RPO de segundos.

| Estrategia DR | RTO típico | RPO típico | Coste |
|---|---|---|---|
| Solo backup en frío | Días | Horas/1 día | Bajo |
| Backup + sitio frío (*cold site*) | 1-3 días | Horas | Medio-bajo |
| Sitio templado (*warm site*) | Horas | Minutos/horas | Medio-alto |
| Sitio caliente / replicación (*hot site*) | Minutos | Segundos/minutos | Alto |
| Alta disponibilidad activo-activo | ~0 | ~0 | Muy alto |

### 4.3. Estrategias de copia de seguridad: la regla 3-2-1

La copia de seguridad es la última línea de defensa, especialmente frente a **ransomware**. La regla clásica es la **3-2-1**, ampliada modernamente a **3-2-1-1-0**:

- **3** copias de los datos (el original + 2 backups).
- **2** soportes o tecnologías distintos (p. ej. disco y cinta / nube).
- **1** copia **fuera del sitio** (*offsite*), geográficamente separada.
- **1** copia **inmutable o desconectada** (*offline* / *air-gapped* / WORM), que el ransomware no pueda cifrar.
- **0** errores: las copias se **verifican** (no basta con hacerlas; hay que probar que restauran).

```text
        [DATOS ORIGINALES]
              │
      ┌───────┴────────┐
      ▼                ▼
  [Backup 1]       [Backup 2]
  disco local       nube / offsite
  (rápido)          (fuera del sitio + inmutable)
      │
      └──► verificación periódica de restauración (0 errores)
```

Tipos de copia y su compromiso espacio/tiempo:

| Tipo | Qué copia | Ventaja | Inconveniente |
|---|---|---|---|
| **Completa** (*full*) | Todos los datos | Restauración simple | Lenta, mucho espacio |
| **Incremental** | Cambios desde la última copia (de cualquier tipo) | Rápida, poco espacio | Restauración lenta (cadena de copias) |
| **Diferencial** | Cambios desde la última copia **completa** | Restauración más simple que incremental | Crece con el tiempo |

Además, conceptos clave: **retención** (cuánto tiempo se guardan las copias, p. ej. esquema abuelo-padre-hijo), **inmutabilidad** (copias que no pueden modificarse ni borrarse durante un periodo), y **cifrado** de las copias (una copia robada no debe ser un incidente añadido).

Ejemplo didáctico de copia y verificación en laboratorio:

```bash
# Copia de un directorio a un destino remoto (offsite simulado) con rsync y cifrado en tránsito (SSH)
rsync -avz --delete /datos/ backup@192.168.56.50:/backups/datos/

# Snapshot inmutable a nivel de sistema de ficheros (ejemplo con Btrfs)
sudo btrfs subvolume snapshot -r /datos /snapshots/datos_$(date +%F)

# Verificación de integridad de una copia
sha256sum -c /backups/datos.manifest.sha256
```

### 4.4. Pruebas, simulacros y mejora continua

Un plan que no se prueba **no es un plan, es una esperanza**. Las pruebas validan que los tiempos reales de recuperación cumplen el RTO/RPO y que el equipo sabe ejecutar el procedimiento. De menor a mayor realismo (y disrupción):

1. **Revisión de escritorio** (*checklist review*): se lee el plan y se comprueba que está actualizado.
2. **Tabletop** (simulacro de mesa): el equipo discute cómo respondería ante un escenario hipotético, sin tocar sistemas. Excelente relación coste/beneficio.
3. **Walkthrough / simulación**: se ejecutan pasos en un entorno de pruebas.
4. **Prueba paralela**: se levanta el entorno de recuperación en paralelo, sin afectar a producción.
5. **Prueba de conmutación completa** (*full interruption / failover*): se conmuta realmente a los sistemas de recuperación. La más realista y la más arriesgada.

Cada prueba genera un informe con las **desviaciones** detectadas (RTO real vs objetivo, pasos que fallaron, información desactualizada) que alimenta la **mejora continua** del plan. La periodicidad recomendada es al menos anual y siempre tras cambios significativos en la infraestructura.

### 🧪 Laboratorio práctico 4.1 — Diseño de estrategia 3-2-1 y prueba de restauración

**Objetivo:** implementar y **verificar** una estrategia de copia conforme a 3-2-1.

**Pasos:**
1. En el laboratorio, define un directorio de "datos de producción" con contenido de prueba.
2. Implementa: (a) copia local completa, (b) copia offsite con `rsync` a otra VM, (c) *snapshot* inmutable/solo-lectura.
3. Genera y guarda un **manifiesto de hashes** de los datos.
4. **Simula el desastre**: borra los datos originales.
5. **Restaura** desde la copia offsite y **verifica** con el manifiesto que la restauración es íntegra.
6. Mide el **tiempo de restauración** (RTO real) y compáralo con un RTO objetivo que hayas fijado.

**Entregable:** documentación de la estrategia (mapeada a los "3-2-1"), evidencia de verificación de hashes y el RTO medido.

### 🧪 Laboratorio práctico 4.2 — Simulacro *tabletop* de ransomware

**Objetivo:** ejercitar la toma de decisiones de continuidad y respuesta.

**Escenario:** un ransomware ha cifrado el servidor de ficheros y el de la aplicación de facturación. Hay copias según 3-2-1, incluida una copia inmutable de hace 6 horas.

**Pasos (en grupo, sin tocar sistemas):**
1. Clasifica la criticidad del incidente y activa (verbalmente) el plan.
2. Decide qué se contiene primero y en qué orden se recupera (prioridad por BIA).
3. Determina si se cumple el RPO (¿6 horas de datos perdidos es aceptable?) y el RTO objetivo.
4. Define las **notificaciones** (¿hay datos personales? → AEPD; INCIBE-CERT).
5. Toma la decisión (fundamentada) sobre el pago del rescate (recomendación estándar: **no pagar**; motívalo).

**Entregable:** acta del *tabletop* con decisiones, tiempos objetivo y lista de mejoras detectadas en el plan.

### ✍️ Ejercicios propuestos

1. Para tres servicios de una empresa ficticia (web corporativa, ERP, correo), propón **RTO y RPO** razonados y justifica por qué son distintos.
2. Explica por qué la copia **inmutable/offline** es la medida más eficaz contra el ransomware, y qué la diferencia de una simple copia en la nube.
3. Diseña un **calendario anual de pruebas** de continuidad para una PYME, indicando tipo de prueba y objetivo de cada una.

---

## Proyecto integrador del módulo

**Título:** *Operación de un SOC de laboratorio: del despliegue a la lección aprendida.*

**Descripción.** El alumnado, en equipos de 2-3 personas, construye y opera un SOC completo en un laboratorio virtualizado y aislado, y gestiona un incidente simulado de principio a fin, produciendo toda la documentación asociada.

**Arquitectura mínima del laboratorio (red host-only, sin salida a la red real):**

```text
   ┌───────────────┐     ┌────────────────┐     ┌──────────────────┐
   │  Endpoint(s)  │     │   Suricata /   │     │  Wazuh / ELK     │
   │  Win + Sysmon │────►│   Zeek (NSM)   │────►│   (SIEM)         │
   │  Linux + agent│     │                │     │                  │
   └───────────────┘     └────────────────┘     └────────┬─────────┘
          │                                              │ alertas
          │  (diana: Metasploitable en subred aislada)   ▼
          │                                     ┌──────────────────┐
          └────────────────────────────────────►│ TheHive + Cortex │
                                                 │  (IR / casos)    │
                                                 └──────────────────┘
```

**Fases y entregables:**

1. **Prevención (U1):** desplegar el SIEM, aplicar bastionado a los endpoints (verificado por SCA) y ejecutar un análisis de vulnerabilidades sobre la diana. *Entregable:* informe de vulnerabilidades priorizado + evidencias de hardening.
2. **Detección (U2):** desplegar Suricata/Zeek, cargar reglas de comunidad y **al menos dos reglas propias** (una Suricata, una Sigma). Generar actividad benigna controlada (nmap, EICAR) o analizar un PCAP público. *Entregable:* reglas propias + capturas de alertas + IOC extraídos.
3. **Respuesta (U3):** al dispararse la alerta, gestionar el caso completo en TheHive siguiendo PICERL, con notificaciones simuladas (AEPD/INCIBE-CERT según proceda). *Entregable:* caso exportado + informe post-incidente con *timeline* y mapeo a MITRE ATT&CK.
4. **Continuidad (U4):** definir RTO/RPO de los servicios del laboratorio, implementar copias 3-2-1 y ejecutar una prueba de restauración. *Entregable:* estrategia de backup + evidencia de restauración verificada + RTO medido.
5. **Defensa oral:** presentación de 15 minutos del proyecto ante el grupo, incluyendo las **lecciones aprendidas**.

**Restricción ética explícita:** todo el proyecto se realiza en red aislada, sobre máquinas propias, con herramientas defensivas y de test benignas. Cualquier "ataque" se limita a nmap/EICAR/PCAP públicos contra dianas propias.

---

## Evaluación y rúbrica

La evaluación combina la observación del trabajo en el laboratorio, los entregables de cada unidad y el proyecto integrador. Se propone la siguiente ponderación:

| Instrumento | Peso | RA evaluados |
|---|---|---|
| Laboratorios de las unidades (entregables) | 30 % | RA1–RA5 |
| Ejercicios propuestos y participación | 10 % | RA1–RA5 |
| Proyecto integrador (documentación técnica) | 35 % | RA1–RA5 |
| Defensa oral del proyecto | 10 % | RA3, RA5 |
| Prueba teórico-práctica | 15 % | RA1–RA4 |

**Rúbrica del proyecto integrador (niveles de logro):**

| Criterio | Insuficiente (0-4) | Suficiente/Bien (5-7) | Notable/Sobresaliente (8-10) |
|---|---|---|---|
| **Prevención** (análisis vuln. + hardening + SIEM) | SIEM no operativo o sin escaneo | SIEM operativo, escaneo básico, hardening parcial | SIEM completo, escaneo priorizado por CVSS, hardening verificado con SCA |
| **Detección** (IDS + reglas propias + IOC) | Sin reglas propias, sin alertas | IDS operativo con reglas de comunidad y una regla propia | Suricata+Zeek, reglas propias (Suricata+Sigma) funcionando, IOC bien documentados y mapeados a ATT&CK |
| **Respuesta** (PICERL + ticketing + informe) | Sin gestión del caso ni informe | Caso en TheHive y fases PICERL cubiertas básicamente | Caso completo, notificaciones legales correctas, informe post-incidente riguroso con timeline y lecciones |
| **Continuidad** (RTO/RPO + 3-2-1 + prueba) | Sin backups o sin RTO/RPO | Backups 3-2-1 y RTO/RPO definidos | 3-2-1(-1-0) con copia inmutable, restauración verificada y RTO medido y comparado |
| **Ética y rigor** | Incumple aislamiento o no documenta | Respeta el aislamiento, documentación correcta | Cadena de custodia impecable, aislamiento y documentación ejemplares |

**Criterio de superación:** obtener al menos un 5 en la media ponderada y no tener ningún RA con calificación inferior a 4. Es condición **indispensable** el respeto absoluto de las normas de aislamiento y ética del laboratorio.

---

## Glosario

- **APT** — *Advanced Persistent Threat*. Actor sofisticado y persistente, frecuentemente con patrocinio estatal.
- **BCP** — *Business Continuity Plan*. Plan de continuidad de negocio.
- **BIA** — *Business Impact Analysis*. Análisis de impacto en el negocio.
- **C2 / C&C** — *Command and Control*. Infraestructura desde la que el atacante controla los equipos comprometidos.
- **Cadena de custodia** — Documentación de la trazabilidad de una evidencia digital para preservar su validez.
- **CIA** — *Confidentiality, Integrity, Availability*. Tríada de la seguridad de la información.
- **CTI** — *Cyber Threat Intelligence*. Inteligencia de amenazas.
- **CVE / CVSS / CWE** — Identificador de vulnerabilidad / sistema de puntuación de gravedad / enumeración de tipos de debilidad.
- **CSIRT / CERT** — Equipo de respuesta a incidentes de seguridad.
- **DRP** — *Disaster Recovery Plan*. Plan de recuperación ante desastres.
- **DFIR** — *Digital Forensics and Incident Response*.
- **EDR / XDR** — *Endpoint/Extended Detection and Response*.
- **EICAR** — Cadena de texto estándar e inofensiva para probar antivirus sin usar malware real.
- **ENS** — Esquema Nacional de Seguridad (España).
- **HIDS / NIDS** — IDS basado en host / basado en red.
- **IDS / IPS** — Sistema de detección / prevención de intrusiones.
- **IOC** — *Indicator of Compromise*. Indicador de compromiso.
- **IRP** — *Incident Response Plan*. Plan de respuesta a incidentes.
- **KQL / Lucene / EQL / SPL** — Lenguajes de consulta de SIEM (Kibana, Elastic, Splunk).
- **MISP** — Plataforma abierta de intercambio de inteligencia de amenazas.
- **MITRE ATT&CK** — Base de conocimiento de tácticas, técnicas y procedimientos de adversarios (TTP).
- **MTTD / MTTR** — Tiempo medio hasta detectar / responder.
- **NSM** — *Network Security Monitoring*. Monitorización de seguridad de red.
- **PICERL** — Modelo de fases de SANS: Preparation, Identification, Containment, Eradication, Recovery, Lessons learned.
- **Playbook** — Procedimiento paso a paso para responder a un tipo concreto de incidente.
- **Ransomware** — Malware que cifra datos y exige un rescate; a menudo con doble extorsión (exfiltración previa).
- **RTO / RPO** — Objetivo de tiempo de recuperación / objetivo de punto de recuperación.
- **SCA** — *Security Configuration Assessment*. Evaluación de configuración de seguridad (cumplimiento de benchmarks).
- **SIEM / SIM / SEM** — Gestión de información y eventos de seguridad.
- **Sigma / YARA** — Reglas de detección genéricas para logs / patrones sobre ficheros y memoria.
- **STIX / TAXII** — Formato y protocolo estándar para expresar e intercambiar CTI.
- **TTP** — Tácticas, Técnicas y Procedimientos de un adversario.
- **Triaje** — Proceso de clasificación y priorización de alertas para identificar incidentes reales.
- **Zero-day** — Vulnerabilidad explotada antes de que exista parche.

---

## Recursos y bibliografía

**Estándares y guías de referencia:**
- **NIST SP 800-61** Rev. 2/3 — *Computer Security Incident Handling Guide*.
- **NIST SP 800-53** y **NIST Cybersecurity Framework (CSF)** — controles y funciones (Identificar, Proteger, Detectar, Responder, Recuperar).
- **NIST SP 800-34** — *Contingency Planning Guide* (continuidad y recuperación).
- **ISO/IEC 27001 / 27002 / 27035** (gestión de incidentes) **/ 22301** (continuidad de negocio).
- **SANS Incident Handler's Handbook** — modelo PICERL.

**Organismos y CERT (España y UE):**
- **INCIBE** e **INCIBE-CERT** — https://www.incibe.es — avisos, guías y notificación de incidentes para empresas y ciudadanos.
- **CCN-CERT** (Centro Criptológico Nacional) — https://www.ccn-cert.cni.es — guías **CCN-STIC**, herramientas (LUCIA, CARMEN, REYES, MicroCLAUDIA) y ENS.
- **AEPD** (Agencia Española de Protección de Datos) — https://www.aepd.es — notificación de brechas de datos personales (RGPD art. 33/34).
- **ENISA** (Agencia de la UE para la Ciberseguridad) — https://www.enisa.europa.eu — informes de amenazas (*Threat Landscape*) y buenas prácticas.
- **CISA KEV** — catálogo de vulnerabilidades explotadas conocidas.

**Marcos de conocimiento:**
- **MITRE ATT&CK** — https://attack.mitre.org — TTP de adversarios.
- **MITRE CVE** y **NVD (NIST)** — bases de datos de vulnerabilidades.
- **OWASP Top 10** — riesgos en aplicaciones web.
- **Pirámide del Dolor** (David J. Bianco) — valor relativo de los IOC.

**Herramientas de laboratorio (todas libres/gratuitas salvo indicación):**
- **SIEM / HIDS:** Wazuh, Elastic Stack (Elasticsearch, Logstash, Kibana, Beats), OSSEC.
- **NSM / IDS-IPS:** Suricata, Snort, Zeek, Security Onion, Wireshark/tshark.
- **Detección y reglas:** Sigma (`sigma-cli`/pySigma), YARA, Sysmon (con configuraciones tipo SwiftOnSecurity).
- **DFIR / respuesta:** Velociraptor, TheHive, Cortex, MISP, Volatility (memoria, opcional).
- **Análisis de vulnerabilidades:** OpenVAS / Greenbone Community Edition, Nessus Essentials, Lynis (auditoría de sistemas).
- **Backup / continuidad:** rsync, Btrfs/ZFS snapshots, restic/BorgBackup (para prácticas de copias con cifrado e inmutabilidad).

**Datasets y entornos de práctica (legales y públicos):**
- **Malware-Traffic-Analysis.net** — capturas PCAP para análisis de tráfico (uso formativo, sin ejecutar artefactos).
- **Metasploitable 2/3** — VM deliberadamente vulnerable, **solo en red aislada**.
- **EICAR test file** — prueba de antivirus/IDS sin malware real.
- **Boss of the SOC (BOTS)**, **CyberDefenders**, **Blue Team Labs Online**, **LetsDefend** — ejercicios de *blue team* guiados.

> **Recordatorio final.** La legislación y las guías evolucionan; consulta siempre la versión vigente en las fuentes oficiales (INCIBE-CERT, CCN-CERT, AEPD, ENISA). Y por encima de todo: practica solo en tus propios entornos, aislados y autorizados. El conocimiento defensivo se construye protegiendo, nunca atacando lo ajeno.
