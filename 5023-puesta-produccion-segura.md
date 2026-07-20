# 5023 - Puesta en producción segura

## Presentación del módulo

El módulo profesional **5023 - Puesta en producción segura** forma parte del **Curso de Especialización en Ciberseguridad en Entornos de las Tecnologías de la Información**, regulado por el **Real Decreto 479/2020, de 7 de abril**. Su objetivo es capacitar al alumnado para **integrar la seguridad en todas las fases del ciclo de vida del desarrollo del software (SDLC)** y en el despliegue de aplicaciones en entornos productivos, tanto tradicionales como en la nube y basados en contenedores.

A diferencia de un enfoque clásico en el que la seguridad se «añade» al final, este módulo se apoya en la filosofía **DevSecOps** («shift-left security»): desplazar los controles de seguridad **lo más a la izquierda posible** del pipeline, es decir, hacia las fases de diseño y codificación, donde corregir un defecto es mucho más barato que hacerlo en producción. El coste de corregir una vulnerabilidad crece de forma aproximadamente exponencial conforme avanza el ciclo de vida: lo que en diseño cuesta 1, en producción puede costar entre 30 y 100 veces más.

El módulo es eminentemente **práctico**. El alumnado aprenderá a **auditar código** (SAST), **analizar aplicaciones en ejecución** (DAST), **revisar dependencias de terceros** (SCA), **modelar amenazas** (STRIDE), **corregir el OWASP Top 10** y **endurecer (hardening)** contenedores Docker y clústeres Kubernetes, integrando todo ello en **pipelines de CI/CD** (GitLab CI y GitHub Actions).

> ⚠️ **Aviso ético y legal.** Todas las prácticas ofensivas de este módulo se realizan **exclusivamente** sobre aplicaciones **deliberadamente vulnerables** y diseñadas para el aprendizaje (OWASP Juice Shop, WebGoat, DVWA), ejecutadas **en máquinas virtuales o contenedores propios, aislados de la red y NUNCA expuestos a Internet**. El objetivo del módulo no es atacar sistemas de terceros —lo cual constituye delito según los artículos 197 bis y 264 del Código Penal español—, sino **detectar y CORREGIR** debilidades en el software propio. El pentesting sobre sistemas ajenos solo es legal con autorización expresa y por escrito.

### Tabla resumen del módulo

| Característica | Detalle |
|---|---|
| **Código y denominación** | 5023 - Puesta en producción segura |
| **Curso** | Especialización en Ciberseguridad en Entornos de las TI |
| **Normativa** | Real Decreto 479/2020, de 7 de abril |
| **Duración total del curso** | 720 horas |
| **Horas orientativas del módulo** | ~150-170 h (parte proporcional del curso) |
| **Modalidad** | Presencial / semipresencial con laboratorios virtualizados |
| **Prerrequisitos recomendados** | Programación (Python/JavaScript/Java), fundamentos de redes y protocolo HTTP, administración de sistemas GNU/Linux, bases de datos SQL, Git |
| **Familia profesional** | Informática y Comunicaciones |
| **Entorno de trabajo** | GNU/Linux (Kali/Ubuntu), Docker, Kubernetes (minikube/kind), IDE con plugins de seguridad |

### Competencias profesionales asociadas

Al finalizar el módulo, el alumnado será competente para:

- **Determinar el nivel de seguridad requerido** por aplicaciones y aplicar procedimientos de análisis y corrección de vulnerabilidades.
- **Configurar y auditar** sistemas y aplicaciones aplicando políticas de seguridad y de desarrollo seguro.
- **Detectar y corregir vulnerabilidades** de aplicaciones web analizando su código fuente y su comportamiento en ejecución.
- **Implantar sistemas seguros de desplegado** de software, integrando la seguridad en la cadena de valor del desarrollo (CI/CD).
- **Desplegar de forma segura** cargas de trabajo en la nube y en entornos de contenedores y orquestación.

---

## Resultados de Aprendizaje

Siguiendo la estructura del BOE (RD 479/2020) para el módulo 5023, se establecen los siguientes **Resultados de Aprendizaje (RA)** y sus criterios de evaluación (CE) resumidos.

### RA1. Configura herramientas y sistemas de desarrollo seguro, determinando el nivel de seguridad requerido y aplicando estándares.

- **CE1.1** Se ha reconocido la necesidad de aplicar un ciclo de vida de desarrollo seguro (S-SDLC).
- **CE1.2** Se han identificado las fases del desarrollo seguro y las prácticas asociadas (NIST SSDF, OWASP SAMM).
- **CE1.3** Se ha realizado el **modelado de amenazas** (threat modeling) de una aplicación.
- **CE1.4** Se han aplicado técnicas de **programación segura** (validación de entrada, gestión de errores, criptografía).
- **CE1.5** Se ha gestionado de forma segura la **configuración y los secretos** de la aplicación.
- **CE1.6** Se ha utilizado el **control de versiones** de forma segura.

### RA2. Detecta y corrige vulnerabilidades de aplicaciones auditando su código y su comportamiento.

- **CE2.1** Se han descrito las principales vulnerabilidades del software.
- **CE2.2** Se han empleado herramientas de **análisis estático (SAST)**.
- **CE2.3** Se han empleado herramientas de **análisis dinámico (DAST)**.
- **CE2.4** Se ha realizado **análisis de dependencias y composición de software (SCA)**.
- **CE2.5** Se han interpretado los informes y **priorizado las vulnerabilidades** (CVSS, CWE).
- **CE2.6** Se han aplicado las **correcciones** oportunas verificando su eficacia.

### RA3. Detecta y corrige vulnerabilidades de aplicaciones web analizando el OWASP Top 10.

- **CE3.1** Se han identificado las vulnerabilidades del **OWASP Top 10**.
- **CE3.2** Se han reproducido vulnerabilidades en entornos de práctica controlados y aislados.
- **CE3.3** Se han aplicado técnicas de **validación y saneamiento** de la entrada.
- **CE3.4** Se ha implementado una **gestión segura de sesiones y autenticación** (cookies, JWT, OAuth2/OIDC).
- **CE3.5** Se ha corregido cada tipo de vulnerabilidad con código defensivo.

### RA4. Implanta sistemas seguros de desplegado de software integrando la seguridad en el pipeline de CI/CD.

- **CE4.1** Se han descrito los principios de **integración y despliegue continuos**.
- **CE4.2** Se han integrado etapas de seguridad (SAST/DAST/SCA) en el **pipeline**.
- **CE4.3** Se han configurado **gates de calidad y seguridad** (quality gates).
- **CE4.4** Se ha gestionado la firma y la integridad de artefactos.
- **CE4.5** Se ha automatizado el despliegue de forma segura.

### RA5. Despliega de forma segura cargas en la nube y en contenedores, aplicando hardening.

- **CE5.1** Se ha descrito el **modelo de responsabilidad compartida**.
- **CE5.2** Se han aplicado buenas prácticas de seguridad **cloud** (IAM, cifrado, redes).
- **CE5.3** Se ha realizado el **hardening de imágenes y contenedores Docker**.
- **CE5.4** Se ha securizado un clúster **Kubernetes** (RBAC, NetworkPolicies, Pod Security, secrets).
- **CE5.5** Se ha aplicado **Infraestructura como Código (IaC) segura**.

---

# UNIDAD DIDÁCTICA 1. Ciclo de vida de desarrollo seguro y DevSecOps

## 1.1. Del SDLC al S-SDLC

El **SDLC** (*Software Development Life Cycle*, ciclo de vida de desarrollo del software) describe las fases por las que atraviesa un producto software: **requisitos → diseño → implementación (codificación) → pruebas → despliegue → mantenimiento**. En un SDLC tradicional, la seguridad —si aparece— lo hace en la fase de pruebas o, peor aún, tras un incidente en producción.

El **S-SDLC** (*Secure* SDLC) integra actividades de seguridad **en cada fase**:

| Fase del SDLC | Actividad de seguridad | Artefacto/salida |
|---|---|---|
| Requisitos | Requisitos de seguridad, casos de abuso | Historias de abuso, requisitos ASVS |
| Diseño | **Threat modeling** (STRIDE), revisión de arquitectura | Diagrama de flujo de datos, lista de amenazas |
| Codificación | Programación segura, **SAST**, revisión de código | Reglas de linting de seguridad, hallazgos SAST |
| Pruebas | **DAST**, pentesting, fuzzing | Informe de vulnerabilidades |
| Despliegue | Hardening, gestión de secretos, **SCA** en release | Configuración endurecida, SBOM |
| Mantenimiento | Gestión de parches, monitorización, respuesta a incidentes | Ticket de vulnerabilidades, métricas |

### Marcos de referencia

- **NIST SSDF (SP 800-218)**: *Secure Software Development Framework*. Organiza las prácticas en cuatro grupos: **PO** (Prepare the Organization), **PS** (Protect the Software), **PW** (Produce Well-Secured Software) y **RV** (Respond to Vulnerabilities). Es la referencia normativa para proveedores de software del gobierno de EE. UU. y una excelente guía general.
- **OWASP SAMM** (*Software Assurance Maturity Model*): modelo de madurez que evalúa cinco funciones de negocio (Governance, Design, Implementation, Verification, Operations), cada una con prácticas y **tres niveles de madurez**. Permite medir dónde está una organización y planificar mejoras.
- **BSIMM** (*Building Security In Maturity Model*): descriptivo, basado en observar lo que hacen realmente muchas organizaciones.
- **Microsoft SDL**: uno de los pioneros; aporta prácticas como el propio threat modeling con STRIDE.

## 1.2. DevSecOps: cultura, automatización y medición

**DevOps** unificó desarrollo (Dev) y operaciones (Ops) mediante automatización, integración/entrega continua y colaboración. **DevSecOps** añade la **seguridad (Sec) como responsabilidad compartida de todo el equipo**, no de un departamento aislado que actúa al final.

Principios clave:

- **Shift-left**: adelantar los controles de seguridad al principio del ciclo.
- **Seguridad como código**: políticas, escaneos y configuraciones versionadas y automatizadas.
- **Automatización en el pipeline**: los escaneos de seguridad se ejecutan solos en cada *commit*/*merge*.
- **Feedback rápido**: el desarrollador recibe los hallazgos en minutos, en su flujo de trabajo.
- **Fail fast**: los **quality/security gates** detienen la entrega si se superan umbrales de riesgo.

```
   PLAN → CODE → BUILD → TEST → RELEASE → DEPLOY → OPERATE → MONITOR
    │       │       │       │        │         │         │         │
  Threat  SAST    SCA    DAST     Firma     Config    RASP     Logs/
  model   +       +      +        artef.    hardened  WAF      SIEM
          secrets IaC    IAST                                  Feedback
          scan    scan
    └──────────────────────── bucle continuo ────────────────────────┘
```

## 1.3. Modelado de amenazas con STRIDE

El **modelado de amenazas** (*threat modeling*) es un ejercicio estructurado que responde a cuatro preguntas (marco de Shostack):

1. ¿Qué estamos construyendo? → **Diagrama de flujo de datos (DFD)**.
2. ¿Qué puede salir mal? → **STRIDE**.
3. ¿Qué vamos a hacer al respecto? → **Contramedidas**.
4. ¿Lo hemos hecho bien? → **Validación**.

**STRIDE** clasifica las amenazas en seis categorías, cada una asociada a una propiedad de seguridad que viola:

| Letra | Amenaza | Propiedad violada | Ejemplo | Mitigación típica |
|---|---|---|---|---|
| **S** | *Spoofing* (suplantación) | Autenticación | Robar credenciales, falsear identidad | MFA, tokens firmados, mTLS |
| **T** | *Tampering* (manipulación) | Integridad | Modificar datos en tránsito o en BD | Firmas, hashes, HTTPS, integridad referencial |
| **R** | *Repudiation* (repudio) | No repudio | Negar haber realizado una acción | Logs de auditoría firmados, trazabilidad |
| **I** | *Information disclosure* | Confidencialidad | Fuga de datos, verbosidad de errores | Cifrado, control de acceso, mensajes de error genéricos |
| **D** | *Denial of Service* | Disponibilidad | Agotamiento de recursos | Rate limiting, cuotas, autoescalado |
| **E** | *Elevation of Privilege* | Autorización | Usuario normal ejecuta acciones de admin | Principio de mínimo privilegio, validación de roles |

Un **DFD** representa: **entidades externas** (rectángulos), **procesos** (círculos), **almacenes de datos** (dos líneas paralelas) y **flujos de datos** (flechas), separados por **límites de confianza** (líneas discontinuas) que marcan dónde cambia el nivel de confianza (p. ej., entre el navegador y el servidor).

### 🧪 Laboratorio práctico 1.1 — Threat modeling de una app con OWASP Threat Dragon

**Objetivo:** modelar las amenazas de una aplicación web sencilla de banca online.

1. Instala **OWASP Threat Dragon** (aplicación de escritorio o web, gratuita y open source).
2. Dibuja el DFD de la aplicación:
   - Entidad externa: *Usuario (navegador)*.
   - Proceso: *Servidor web / API*.
   - Almacén de datos: *Base de datos de cuentas*.
   - Flujo: login (usuario → API), consulta de saldo (API → BD).
   - Límite de confianza entre navegador e infraestructura del banco.
3. Para cada elemento y flujo, aplica STRIDE y anota al menos una amenaza y una mitigación. Ejemplo para el flujo de login:
   - **S**: suplantación del usuario → MFA + bloqueo por intentos.
   - **T**: manipulación del cuerpo de la petición → validación y HTTPS.
   - **I**: fuga de credenciales → hash de contraseñas (bcrypt/argon2), TLS.
4. Exporta el informe en JSON/PDF.

**Entregable:** DFD + tabla de amenazas STRIDE con mitigaciones (mínimo 10 amenazas).

### ✍️ Ejercicios propuestos

1. Explica con tus palabras la diferencia entre SDLC y S-SDLC y por qué el enfoque *shift-left* reduce costes. Ilustra con la curva de coste de corrección.
2. Elige una aplicación que uses a diario (correo web, red social) y aplica las cuatro preguntas del marco de Shostack, identificando al menos dos amenazas por cada letra de STRIDE.
3. Compara NIST SSDF y OWASP SAMM: ¿qué aporta cada uno y en qué situación usarías uno u otro?

---

# UNIDAD DIDÁCTICA 2. Programación segura, configuración y gestión de secretos

## 2.1. Principios de programación segura

La mayoría de las vulnerabilidades nacen de **confiar en datos que no se deben confiar** y de **gestionar mal errores, secretos y criptografía**. Los principios fundamentales (recogidos en las *OWASP Secure Coding Practices* y en los *Cheat Sheets*) son:

- **Nunca confíes en la entrada** (*never trust user input*): toda entrada externa es potencialmente maliciosa.
- **Validación en el servidor**: la validación en cliente es UX, no seguridad. El control efectivo está siempre en el servidor.
- **Defensa en profundidad**: múltiples capas de control; si una falla, otra protege.
- **Mínimo privilegio**: cada componente tiene solo los permisos que necesita.
- **Fallar de forma segura** (*fail securely*): ante un error, denegar por defecto (*default deny*).
- **Minimizar la superficie de ataque**: menos código, menos endpoints, menos dependencias.
- **No reinventar la criptografía**: usar bibliotecas probadas.

## 2.2. Validación y saneamiento de la entrada

Conviene distinguir tres conceptos:

- **Validación**: comprobar que la entrada cumple un formato esperado (**allowlist** — lista de permitidos — es mejor que **denylist** — lista de prohibidos).
- **Saneamiento/escapado**: transformar la entrada para que sea inofensiva en su **contexto de destino** (HTML, SQL, shell, LDAP…). La clave es el **escapado dependiente del contexto**.
- **Codificación de salida** (*output encoding*): codificar los datos al **mostrarlos**, no solo al recibirlos.

```python
# Validación con allowlist de un nombre de usuario en Python
import re

USERNAME_RE = re.compile(r"^[a-zA-Z0-9_]{3,20}$")  # solo caracteres permitidos

def validar_usuario(nombre: str) -> str:
    if not USERNAME_RE.fullmatch(nombre):
        raise ValueError("Nombre de usuario no válido")
    return nombre
```

## 2.3. Gestión segura de errores y logging

- **No revelar información sensible** en los mensajes de error al usuario (stack traces, versiones, rutas, SQL). Mostrar un mensaje genérico y registrar el detalle en el log del servidor.
- **No registrar secretos** en los logs (contraseñas, tokens, PAN de tarjetas, datos personales). Enmascarar.
- Registrar eventos de seguridad relevantes: inicios de sesión, fallos de autenticación, accesos denegados, cambios de privilegios.

```javascript
// Mal: se filtra el detalle interno al cliente
app.use((err, req, res, next) => {
  res.status(500).json({ error: err.stack }); // ❌ expone stack trace
});

// Bien: mensaje genérico al usuario, detalle en el log del servidor
app.use((err, req, res, next) => {
  logger.error({ msg: err.message, stack: err.stack, reqId: req.id }); // detalle interno
  res.status(500).json({ error: "Se ha producido un error. Inténtelo más tarde." }); // ✅
});
```

## 2.4. Criptografía correcta

Errores frecuentes y su corrección:

| Error habitual | Corrección |
|---|---|
| Almacenar contraseñas en claro o con MD5/SHA1 | **Hash específico de contraseñas**: bcrypt, scrypt o **Argon2id** con sal única |
| Usar cifrado simétrico en modo ECB | Usar **AES-256-GCM** (cifrado autenticado, AEAD) con IV/nonce único |
| Generar claves/tokens con `random` normal | Usar CSPRNG (`secrets` en Python, `crypto.randomBytes` en Node) |
| Hardcodear claves en el código | Gestor de secretos / KMS |
| Implementar tu propio algoritmo | Bibliotecas probadas (libsodium, `cryptography`) |

```python
# Hash correcto de contraseñas con Argon2
from argon2 import PasswordHasher
ph = PasswordHasher()  # Argon2id por defecto, sal aleatoria interna

hash_almacenado = ph.hash("contraseña_del_usuario")  # se guarda en BD

# Verificación
try:
    ph.verify(hash_almacenado, "contraseña_introducida")
    # opcional: ph.check_needs_rehash(hash_almacenado) para actualizar parámetros
except Exception:
    raise ValueError("Credenciales incorrectas")
```

```python
# Generación de tokens seguros (p. ej., para reset de contraseña)
import secrets
token = secrets.token_urlsafe(32)  # ✅ CSPRNG, no usar random.random()
```

## 2.5. Gestión de configuración y secretos

Un **secreto** es cualquier credencial que da acceso: contraseñas, claves de API, tokens, certificados, cadenas de conexión. La regla de oro: **los secretos NUNCA se versionan en el repositorio**.

Jerarquía de buenas prácticas (de menos a más segura):

1. **Variables de entorno** + fichero `.env` **excluido de Git** (`.gitignore`). Adecuado para desarrollo local.
2. **Gestores de secretos** del proveedor (AWS Secrets Manager, Azure Key Vault, GCP Secret Manager).
3. **HashiCorp Vault**: gestión centralizada, secretos dinámicos (credenciales de BD de corta vida), rotación automática, cifrado como servicio, auditoría.

```bash
# .gitignore — impedir que los secretos entren en el repositorio
.env
.env.local
*.pem
*.key
secrets/
```

```bash
# .env  (NUNCA se sube al repo; se aporta un .env.example sin valores reales)
DB_HOST=localhost
DB_USER=app
DB_PASSWORD=super-secreto-solo-local
JWT_SECRET=cambiame-en-produccion
```

```python
# Carga de secretos desde el entorno (nunca hardcodeados)
import os
db_password = os.environ["DB_PASSWORD"]   # falla ruidosamente si no está definida
jwt_secret = os.environ["JWT_SECRET"]
```

### HashiCorp Vault (introducción práctica)

```bash
# Arrancar Vault en modo desarrollo (SOLO para pruebas locales, datos en memoria)
vault server -dev

# En otra terminal
export VAULT_ADDR='http://127.0.0.1:8200'
vault login <root-token-mostrado>

# Guardar un secreto en el motor KV
vault kv put secret/miapp db_password="super-secreto" api_key="ABC123"

# Leer el secreto
vault kv get secret/miapp
vault kv get -field=db_password secret/miapp
```

## 2.6. Control de versiones seguro

- **`.gitignore`** riguroso para evitar subir secretos, artefactos y configuración sensible.
- **Detección de secretos** con herramientas como **gitleaks** o **git-secrets**, integrada en un *pre-commit hook* y en el pipeline.
- **Firma de commits** con GPG/SSH (`git commit -S`) para garantizar autoría.
- **Protección de ramas** (branch protection): revisiones obligatorias, sin *force push* a `main`.
- Si un secreto se filtró alguna vez, **rotarlo inmediatamente** (borrarlo del historial no basta, ya está comprometido).

```bash
# Escaneo de secretos filtrados en el historial de un repositorio
gitleaks detect --source . --report-format json --report-path gitleaks-report.json

# Hook de pre-commit que bloquea el commit si detecta un secreto
gitleaks protect --staged --verbose
```

### 🧪 Laboratorio práctico 2.1 — Detección de secretos y gestión con Vault

**Objetivo:** evitar filtrar secretos y centralizar su gestión.

1. Crea un repositorio Git local con una app de ejemplo que —a propósito— tenga una `API_KEY` hardcodeada en el código.
2. Ejecuta `gitleaks detect` y comprueba que la detecta. Interpreta el informe.
3. Refactoriza el código para leer la clave de una variable de entorno; añade `.env` al `.gitignore` y crea un `.env.example`.
4. Instala un hook de pre-commit con `gitleaks protect --staged` y verifica que ahora impide el commit de un secreto.
5. Arranca Vault en modo dev, guarda el secreto en `secret/miapp` y modifica la app para leerlo de Vault.

**Entregable:** informe de gitleaks (antes/después), diff del refactor y captura de la lectura desde Vault.

### 🧪 Laboratorio práctico 2.2 — Corrección de criptografía débil

**Objetivo:** migrar un almacén de contraseñas inseguro.

1. Parte de un script que guarda contraseñas con `hashlib.md5`.
2. Explica por qué es inseguro (rápido de calcular, sin sal, colisiones, *rainbow tables*).
3. Reescríbelo con `argon2-cffi` (Argon2id) y sal automática.
4. Añade `check_needs_rehash` para permitir la migración progresiva.

**Entregable:** código antes/después y una breve justificación técnica.

### ✍️ Ejercicios propuestos

1. Enumera cinco datos que **nunca** deben aparecer en los logs y propón cómo enmascararlos.
2. Diseña una política de gestión de secretos para un equipo de 5 desarrolladores (desarrollo local, CI/CD y producción). Justifica dónde usarías `.env`, dónde Vault y dónde un KMS.
3. Explica la diferencia entre validación por **allowlist** y por **denylist** y por qué la primera es preferible con un ejemplo de números de teléfono.

---

# UNIDAD DIDÁCTICA 3. Auditoría de código y aplicaciones: SAST, DAST y SCA

## 3.1. Panorama de las técnicas de análisis

| Técnica | Qué analiza | Cuándo | Ventajas | Limitaciones |
|---|---|---|---|---|
| **SAST** | Código fuente / binario (caja blanca) | En codificación / build | Detecta temprano, señala línea exacta, no necesita ejecutar | Falsos positivos, no ve fallos de configuración en runtime |
| **DAST** | Aplicación en ejecución (caja negra) | En pruebas / staging | Encuentra fallos reales en runtime, agnóstico al lenguaje | Cobertura limitada, no señala la línea de código, más lento |
| **IAST** | Instrumentación en runtime (caja gris) | En pruebas | Combina SAST+DAST, menos falsos positivos | Requiere agente, dependiente del lenguaje |
| **SCA** | Dependencias de terceros | Continuo | Detecta CVE conocidas en librerías | Solo cubre vulnerabilidades ya publicadas |
| **RASP** | Protección en runtime en producción | Operación | Bloquea ataques en vivo | Impacto en rendimiento |

## 3.2. Priorización: CWE, CVE y CVSS

- **CWE** (*Common Weakness Enumeration*): catálogo de **tipos** de debilidad (p. ej., CWE-89 = Inyección SQL). El **CWE/SANS Top 25** lista las debilidades más peligrosas.
- **CVE** (*Common Vulnerabilities and Exposures*): identificador de una **vulnerabilidad concreta** en un producto concreto (p. ej., CVE-2021-44228, Log4Shell).
- **CVSS** (*Common Vulnerability Scoring System*): puntúa la **severidad** de 0.0 a 10.0. Umbrales: Baja (0.1–3.9), Media (4.0–6.9), Alta (7.0–8.9), Crítica (9.0–10.0).
- **EPSS**: probabilidad de que una vulnerabilidad sea explotada. Útil para priorizar más allá del CVSS.

## 3.3. SAST con SonarQube y Semgrep

### SonarQube

**SonarQube** es una plataforma de análisis estático de calidad y seguridad que mide *bugs*, *code smells*, *security hotspots* y vulnerabilidades, y aplica un **Quality Gate** (puerta de calidad).

```bash
# Analizar un proyecto con sonar-scanner apuntando a un SonarQube local (Docker)
docker run -d --name sonarqube -p 9000:9000 sonarqube:community

# sonar-project.properties en la raíz del proyecto:
#   sonar.projectKey=miapp
#   sonar.sources=src
#   sonar.host.url=http://localhost:9000
#   sonar.login=<TOKEN>

sonar-scanner
```

### Semgrep

**Semgrep** es un analizador estático ligero, rápido y basado en **reglas** que se parecen al propio código. Es multilenguaje y muy usado en pipelines.

```bash
# Escaneo con el conjunto de reglas de seguridad automático
semgrep --config=auto .

# Escaneo con reglas específicas de OWASP Top 10 / lenguaje
semgrep --config="p/owasp-top-ten" --config="p/python" src/

# Salida en SARIF para integrar en la plataforma de CI
semgrep --config=auto --sarif --output semgrep.sarif .
```

```yaml
# Regla Semgrep personalizada: detectar uso peligroso de eval() en Python
rules:
  - id: python-dangerous-eval
    languages: [python]
    severity: ERROR
    message: "Uso de eval() con entrada externa: riesgo de ejecución de código."
    pattern: eval(...)
```

## 3.4. SCA con OWASP Dependency-Check, Trivy y Snyk

El **SCA** (*Software Composition Analysis*) analiza las **dependencias de terceros** buscando **CVE conocidas** y generando un **SBOM** (*Software Bill of Materials*, formato CycloneDX o SPDX).

```bash
# OWASP Dependency-Check sobre un proyecto (Java/Node/etc.)
dependency-check.sh --project "miapp" --scan ./ --format HTML --out ./reports

# Trivy: escaneo del sistema de ficheros (dependencias + secretos + config)
trivy fs --scanners vuln,secret,misconfig .

# Trivy: análisis de dependencias con umbral de severidad
trivy fs --severity HIGH,CRITICAL --exit-code 1 .

# Snyk: test de dependencias y monitorización continua
snyk test
snyk monitor
```

> **Caso real Log4Shell (CVE-2021-44228).** Una vulnerabilidad crítica (CVSS 10.0) en la librería Log4j permitía ejecución remota de código. Una organización con SCA y SBOM sabía en minutos qué aplicaciones la usaban; sin SCA, la búsqueda podía llevar semanas. Este caso justifica por sí solo el análisis de dependencias.

## 3.5. DAST con OWASP ZAP

**OWASP ZAP** (*Zed Attack Proxy*) es el DAST open source de referencia. Actúa como proxy interceptor y permite escaneos automatizados. El **baseline scan** es el más adecuado para CI porque es rápido y no intrusivo (pasivo).

```bash
# ZAP Baseline Scan contra una app de PRÁCTICA en local (Docker)
docker run -t --rm --network host \
  ghcr.io/zaproxy/zaproxy:stable zap-baseline.py \
  -t http://localhost:3000 \
  -r zap-baseline-report.html

# Full scan (activo, más intrusivo) — SOLO sobre apps propias/aisladas
docker run -t --rm ghcr.io/zaproxy/zaproxy:stable zap-full-scan.py \
  -t http://localhost:3000 -r zap-full-report.html
```

> Recuerda: el objetivo `http://localhost:3000` debe ser una app de práctica (p. ej., **OWASP Juice Shop**) en tu propio contenedor aislado. **Nunca** lances ZAP contra sistemas de terceros sin autorización.

### 🧪 Laboratorio práctico 3.1 — Trío SAST + SCA + DAST sobre Juice Shop

**Objetivo:** ejecutar la triada de análisis sobre una aplicación deliberadamente vulnerable y aislada.

1. **Levantar la app de práctica (aislada):**
   ```bash
   docker run -d --name juiceshop -p 127.0.0.1:3000:3000 bkimminich/juice-shop
   ```
   Fíjate en el `127.0.0.1`: la app **solo escucha en loopback**, no en toda la red.
2. **SCA:** clona el repositorio de Juice Shop y ejecuta `trivy fs --scanners vuln .` y `dependency-check`. Anota las CVE por severidad.
3. **SAST:** ejecuta `semgrep --config=auto` sobre el código clonado.
4. **DAST:** lanza `zap-baseline.py` contra `http://localhost:3000` y genera el informe HTML.
5. Cruza los hallazgos: ¿qué encontró cada herramienta que las otras no?

**Entregable:** tabla comparativa de hallazgos por herramienta y severidad, con al menos tres vulnerabilidades priorizadas por CVSS.

### ✍️ Ejercicios propuestos

1. Explica por qué SAST y DAST son **complementarios** y no sustitutivos, con un ejemplo de fallo que solo detecta cada uno.
2. Dado un informe con 200 hallazgos, describe un método de **priorización** combinando CVSS, EPSS y exposición del activo.
3. Escribe una regla Semgrep propia que detecte el uso de `subprocess` con `shell=True` en Python y explica el riesgo.

---

# UNIDAD DIDÁCTICA 4. Vulnerabilidades web: OWASP Top 10 y su corrección

El **OWASP Top 10** es el estándar de facto que recoge los diez riesgos de seguridad más críticos en aplicaciones web. A continuación se explica cada uno con un par **código vulnerable → código corregido** con enfoque **defensivo** (detectar y corregir, nunca atacar terceros).

## A01:2021 — Broken Access Control (Control de acceso roto)

Es el riesgo **número uno**. Ocurre cuando un usuario puede actuar fuera de los permisos previstos: acceder a recursos de otros (**IDOR**, *Insecure Direct Object Reference*), escalar privilegios, etc.

```python
# ❌ VULNERABLE: cualquiera puede ver la factura de cualquier usuario (IDOR)
@app.get("/api/facturas/<int:factura_id>")
def ver_factura(factura_id):
    factura = db.get_factura(factura_id)
    return jsonify(factura)  # no comprueba propiedad
```

```python
# ✅ CORREGIDO: se verifica que la factura pertenece al usuario autenticado
@app.get("/api/facturas/<int:factura_id>")
@login_required
def ver_factura(factura_id):
    factura = db.get_factura(factura_id)
    if factura is None or factura.propietario_id != current_user.id:
        abort(404)  # no revelar existencia; denegar por defecto
    return jsonify(factura)
```

**Defensa:** denegar por defecto, verificar autorización **en el servidor** en cada petición, usar referencias indirectas o UUID no adivinables, aplicar RBAC/ABAC de forma centralizada.

## A02:2021 — Cryptographic Failures (Fallos criptográficos)

Datos sensibles expuestos por ausencia o mal uso de cifrado (contraseñas sin *hash* fuerte, TLS mal configurado, algoritmos obsoletos).

```python
# ❌ VULNERABLE: contraseña con MD5, sin sal
import hashlib
hash = hashlib.md5(password.encode()).hexdigest()
```

```python
# ✅ CORREGIDO: Argon2id con sal automática (ver UD2)
from argon2 import PasswordHasher
ph = PasswordHasher()
hash = ph.hash(password)
```

**Defensa:** clasificar los datos, cifrar en tránsito (**TLS 1.2/1.3**) y en reposo (AES-256-GCM), *hashing* de contraseñas con Argon2/bcrypt, no cachear datos sensibles, gestión de claves adecuada.

## A03:2021 — Injection (Inyección: SQL, NoSQL, comandos, LDAP)

La entrada no confiable se interpreta como código o comando. La **inyección SQL** es el ejemplo clásico.

```python
# ❌ VULNERABLE: concatenación de strings → inyección SQL
def login(user, pwd):
    q = f"SELECT * FROM users WHERE user='{user}' AND pass='{pwd}'"
    return db.execute(q)   # user = "' OR '1'='1" rompe la consulta
```

```python
# ✅ CORREGIDO: consultas parametrizadas (prepared statements)
def login(user, pwd):
    q = "SELECT * FROM users WHERE user = %s AND pass = %s"
    return db.execute(q, (user, pwd))   # el driver escapa los parámetros
```

```javascript
// ❌ Inyección de comandos en Node
const { exec } = require("child_process");
exec("ping -c 1 " + userInput);   // userInput = "8.8.8.8; rm -rf /"

// ✅ Corregido: execFile sin shell, argumentos separados
const { execFile } = require("child_process");
execFile("ping", ["-c", "1", userInput]);   // no interpreta metacaracteres de shell
```

**Defensa:** consultas parametrizadas / ORM, validación por allowlist, escapado según contexto, evitar `shell=True`/`exec` con concatenación.

## A04:2021 — Insecure Design (Diseño inseguro)

Fallos de **diseño**, no de implementación: ausencia de límites de negocio, de threat modeling, de patrones seguros. Ejemplo: un flujo de recuperación de contraseña con preguntas de seguridad triviales, o no limitar la cantidad de compras. **Se corrige en fase de diseño**: threat modeling (UD1), historias de abuso, patrones seguros de referencia, límites de tasa.

## A05:2021 — Security Misconfiguration (Configuración de seguridad incorrecta)

Servicios con configuración por defecto, cuentas por defecto, mensajes de error verbosos, cabeceras ausentes, puertos abiertos innecesarios.

```javascript
// ✅ Cabeceras de seguridad con Helmet en Express
const helmet = require("helmet");
app.use(helmet());   // añade CSP, X-Content-Type-Options, HSTS, etc.
app.disable("x-powered-by");   // no revelar el framework
```

**Defensa:** *hardening* documentado y automatizado, eliminar componentes/funciones no usadas, deshabilitar directorios listados, revisar configuración con Trivy/CIS Benchmarks.

## A06:2021 — Vulnerable and Outdated Components (Componentes vulnerables y obsoletos)

Uso de librerías, frameworks o runtimes con CVE conocidas (el caso Log4Shell). **Defensa:** inventario de dependencias (SBOM), **SCA** continuo (UD3), política de actualización, eliminar dependencias no usadas.

## A07:2021 — Identification and Authentication Failures (Fallos de identificación y autenticación)

Contraseñas débiles, ausencia de MFA, gestión de sesiones deficiente, IDs de sesión predecibles.

```python
# ✅ Buenas prácticas de autenticación
# - Bloqueo tras N intentos fallidos (anti fuerza bruta)
# - Contraseñas verificadas contra listas de contraseñas comprometidas (HIBP)
# - MFA (TOTP) disponible
# - Tokens de sesión aleatorios (CSPRNG), rotados tras el login
```

**Defensa:** MFA, política de contraseñas robustas, rate limiting, IDs de sesión aleatorios y regenerados tras autenticación, expiración de sesiones. (Se amplía en UD5.)

## A08:2021 — Software and Data Integrity Failures (Fallos de integridad de software y datos)

Actualizaciones o dependencias sin verificar su integridad, *deserialización insegura*, pipelines de CI/CD comprometidos (ataques a la cadena de suministro tipo SolarWinds).

```python
# ❌ VULNERABLE: deserialización insegura con pickle sobre datos externos
import pickle
obj = pickle.loads(datos_recibidos)   # ejecución de código arbitrario

# ✅ CORREGIDO: usar formato de datos, no de objetos
import json
obj = json.loads(datos_recibidos)   # JSON no ejecuta código
```

**Defensa:** verificar firmas e *hashes* de dependencias y actualizaciones, no deserializar datos no confiables, firmar artefactos (UD6), SLSA.

## A09:2021 — Security Logging and Monitoring Failures (Fallos de registro y monitorización)

Sin logs de seguridad ni alertas, un ataque puede pasar desapercibido durante meses. **Defensa:** registrar eventos de seguridad (logins, accesos denegados, cambios de privilegios), centralizar en un **SIEM**, alertar, proteger la integridad de los logs, sin registrar datos sensibles.

## A10:2021 — Server-Side Request Forgery (SSRF)

La aplicación realiza una petición a una URL **controlada por el atacante**, alcanzando servicios internos (p. ej., el *metadata endpoint* de la nube `169.254.169.254`).

```python
# ❌ VULNERABLE: la app descarga cualquier URL que le pasen
import requests
@app.get("/fetch")
def fetch():
    url = request.args["url"]
    return requests.get(url).text   # puede apuntar a servicios internos
```

```python
# ✅ CORREGIDO: allowlist de dominios y validación estricta
import requests
from urllib.parse import urlparse

DOMINIOS_PERMITIDOS = {"api.proveedor-confiable.com"}

@app.get("/fetch")
def fetch():
    url = request.args["url"]
    host = urlparse(url).hostname
    if host not in DOMINIOS_PERMITIDOS:
        abort(400, "Dominio no permitido")
    # además: bloquear IPs privadas/loopback/link-local a nivel de red/DNS
    return requests.get(url, timeout=5, allow_redirects=False).text
```

**Defensa:** allowlist de destinos, bloqueo de rangos privados/loopback/link-local, deshabilitar redirecciones, segmentación de red que impida al servicio salir a la metadata cloud.

### 🧪 Laboratorio práctico 4.1 — OWASP Juice Shop / WebGoat: reproducir y corregir

**Objetivo:** localizar tres vulnerabilidades del Top 10 en un entorno legal y aislado, comprender su causa y proponer la corrección de código.

1. Levanta **OWASP Juice Shop** o **WebGoat** en local aislado (`-p 127.0.0.1:...`).
2. Completa retos guiados que ilustren **A01 (Broken Access Control)**, **A03 (Injection)** y **A07 (Auth)**. WebGoat incluye lecciones autoexplicadas con el porqué de cada fallo.
3. Para cada vulnerabilidad, redacta:
   - Qué debilidad (CWE) representa.
   - Por qué es explotable (causa raíz).
   - El **fragmento de corrección** (par vulnerable → corregido).
4. Verifica la corrección con Semgrep (que ya no salte la regla) y con un re-escaneo de ZAP.

> **Ética:** estas aplicaciones están **diseñadas para ser atacadas con fines de aprendizaje** y se ejecutan en tu contenedor aislado. No repliques estas técnicas fuera de este laboratorio.

**Entregable:** ficha de tres vulnerabilidades con causa raíz, CWE, CVSS estimado y par de código vulnerable/corregido.

### ✍️ Ejercicios propuestos

1. Toma el código vulnerable de SSRF de esta unidad y amplía la defensa para resolver también el nombre DNS y bloquear si resuelve a una IP privada. Explica el riesgo del *DNS rebinding*.
2. Clasifica cada uno de los diez riesgos según qué técnica de análisis (SAST/DAST/SCA/threat modeling) lo detecta mejor.
3. Explica la diferencia entre **XSS reflejado, almacenado y basado en DOM** y propón la defensa común (codificación de salida contextual + CSP).

---

# UNIDAD DIDÁCTICA 5. Gestión segura de sesiones, autenticación y autorización

## 5.1. Cookies de sesión seguras

Cuando se usan sesiones en servidor con cookie de identificador, la cookie debe llevar los atributos de seguridad:

| Atributo | Función |
|---|---|
| `HttpOnly` | La cookie no es accesible desde JavaScript → mitiga robo por XSS |
| `Secure` | Solo se envía por HTTPS |
| `SameSite=Strict/Lax` | Mitiga **CSRF** limitando el envío entre sitios |
| `Path` / `Domain` | Acota el alcance de la cookie |
| Expiración corta | Reduce la ventana de robo |

```javascript
// ✅ Configuración de cookie de sesión segura en Express
app.use(session({
  secret: process.env.SESSION_SECRET,   // desde el entorno, no hardcodeado
  name: "sid",                           // no revelar el framework por defecto
  cookie: {
    httpOnly: true,
    secure: true,        // requiere HTTPS
    sameSite: "strict",
    maxAge: 15 * 60 * 1000   // 15 minutos
  },
  resave: false,
  saveUninitialized: false
}));
```

**Regeneración de sesión:** tras un login o un cambio de privilegios, regenerar el ID de sesión para evitar **session fixation**.

## 5.2. JWT (JSON Web Tokens)

Un **JWT** es un token autocontenido formado por `header.payload.signature` codificados en Base64URL. Se usa mucho en APIs *stateless*. Errores frecuentes y su corrección:

| Error | Corrección |
|---|---|
| Aceptar `alg: none` | Fijar el algoritmo esperado en la verificación |
| Confundir HS256 y RS256 (algorithm confusion) | No permitir que el token decida el algoritmo |
| Guardar el JWT en `localStorage` (accesible por XSS) | Cookie `HttpOnly` + `Secure` + `SameSite` |
| Tokens de larga duración sin revocación | Access token corto + refresh token + lista de revocación |
| Meter datos sensibles en el payload | El payload es legible; no incluir secretos |

```python
# ✅ Verificación correcta de un JWT (PyJWT): algoritmo fijado, exp validado
import jwt

def verificar(token: str, clave_publica: str) -> dict:
    return jwt.decode(
        token,
        clave_publica,
        algorithms=["RS256"],        # ✅ algoritmo fijado; nunca aceptar "none"
        options={"require": ["exp", "iat"]},   # exigir expiración
        audience="miapp",
    )
```

## 5.3. OAuth2 y OpenID Connect (OIDC)

- **OAuth2** es un marco de **autorización delegada**: permite que una app acceda a recursos en nombre del usuario **sin conocer su contraseña**, mediante *access tokens*.
- **OIDC** es una capa de **autenticación** sobre OAuth2 que añade el **ID Token** (un JWT que identifica al usuario).

Flujo recomendado para aplicaciones web y SPA/móvil: **Authorization Code Flow con PKCE** (*Proof Key for Code Exchange*), que protege el intercambio del código de autorización.

```
Usuario → App(cliente) → /authorize (Servidor de autorización)
   ← redirección con "code"
App → /token (code + code_verifier PKCE) → Access Token + ID Token (OIDC)
App usa Access Token → API de recursos
```

Roles: **Resource Owner** (usuario), **Client** (la app), **Authorization Server** (emite tokens), **Resource Server** (la API). Buenas prácticas: usar PKCE, validar `state` (anti-CSRF), `nonce` (anti-replay en OIDC), *scopes* mínimos, `redirect_uri` en allowlist y tokens de corta duración.

### 🧪 Laboratorio práctico 5.1 — Endurecer sesiones y JWT

**Objetivo:** corregir una autenticación débil.

1. Parte de una API de ejemplo que emite un JWT firmado con HS256 y una clave débil hardcodeada, sin `exp`, guardado en `localStorage`.
2. Identifica todos los fallos (algorithm confusion, clave débil, sin expiración, XSS-exposición).
3. Migra a: clave robusta desde el entorno, `exp` corto, verificación con algoritmo fijado y almacenamiento en cookie `HttpOnly`/`Secure`/`SameSite`.
4. Añade un *refresh token* y un mecanismo de revocación (lista negra o rotación).
5. Comprueba con ZAP que las cookies llevan los flags de seguridad.

**Entregable:** diff del código, tabla de fallos→correcciones y captura de las cabeceras `Set-Cookie`.

### ✍️ Ejercicios propuestos

1. Explica por qué guardar un JWT en `localStorage` es más peligroso que en una cookie `HttpOnly` frente a XSS, y qué contramedida adicional necesita la cookie frente a CSRF.
2. Dibuja el flujo Authorization Code con PKCE e indica qué protege cada parámetro (`state`, `nonce`, `code_verifier`).
3. Diseña una política de expiración y rotación de tokens para una banca online justificando los tiempos.

---

# UNIDAD DIDÁCTICA 6. Integración de la seguridad en el pipeline CI/CD

## 6.1. Fundamentos de CI/CD

- **CI (Integración Continua):** cada cambio se integra y se prueba automáticamente (build + tests + análisis).
- **CD (Entrega/Despliegue Continuo):** cada cambio validado se entrega (Continuous Delivery, con aprobación manual) o se despliega (Continuous Deployment, automático) a producción.

Un **pipeline seguro** encadena etapas de seguridad tras cada *commit*/*merge request* y aplica **gates**:

```
[commit] → build → test unitario → SAST (Semgrep/Sonar) → SCA (Trivy/Dependency-Check)
        → construir imagen → escaneo de imagen (Trivy) → firmar artefacto (cosign)
        → desplegar a staging → DAST (ZAP baseline) → GATE → desplegar a producción
```

## 6.2. Quality/Security Gates

Un **gate** es una condición que **detiene** el pipeline si no se cumple. Ejemplos: «no fusionar si hay vulnerabilidades **Critical/High**», «cobertura de tests < 80 %», «hallazgos SAST bloqueantes = 0». Se implementa con **`exit-code`** de las herramientas (`trivy ... --exit-code 1`) o con el Quality Gate de SonarQube.

## 6.3. Pipeline en GitHub Actions

```yaml
# .github/workflows/devsecops.yml
name: DevSecOps Pipeline
on: [push, pull_request]

jobs:
  seguridad:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      # --- Detección de secretos ---
      - name: Gitleaks
        uses: gitleaks/gitleaks-action@v2

      # --- SAST ---
      - name: Semgrep SAST
        uses: returntocorp/semgrep-action@v1
        with:
          config: p/owasp-top-ten

      # --- SCA + escaneo de sistema de ficheros ---
      - name: Trivy filesystem (dependencias)
        uses: aquasecurity/trivy-action@master
        with:
          scan-type: fs
          scan-ref: .
          severity: HIGH,CRITICAL
          exit-code: '1'          # GATE: falla si hay High/Critical

      # --- Build de la imagen ---
      - name: Build image
        run: docker build -t miapp:${{ github.sha }} .

      # --- Escaneo de la imagen de contenedor ---
      - name: Trivy image scan
        uses: aquasecurity/trivy-action@master
        with:
          image-ref: miapp:${{ github.sha }}
          severity: CRITICAL
          exit-code: '1'
```

## 6.4. Pipeline en GitLab CI

```yaml
# .gitlab-ci.yml
stages: [build, test, security, deploy]

sast:
  stage: security
  image: returntocorp/semgrep
  script:
    - semgrep --config=auto --error --sarif --output semgrep.sarif .
  artifacts:
    reports: { sast: semgrep.sarif }

dependency_scan:
  stage: security
  image: aquasec/trivy:latest
  script:
    - trivy fs --severity HIGH,CRITICAL --exit-code 1 .   # GATE

container_scan:
  stage: security
  image: aquasec/trivy:latest
  script:
    - trivy image --severity CRITICAL --exit-code 1 $CI_REGISTRY_IMAGE:$CI_COMMIT_SHA

dast_zap:
  stage: security
  image: ghcr.io/zaproxy/zaproxy:stable
  script:
    - zap-baseline.py -t $STAGING_URL -r zap-report.html || true   # informativo
  artifacts:
    paths: [zap-report.html]
```

> GitLab también ofrece plantillas integradas (`Security/SAST.gitlab-ci.yml`, `Dependency-Scanning`, `Container-Scanning`, `DAST`) que se incluyen con `include:` y aportan estos escaneos ya configurados.

## 6.5. Integridad de artefactos y cadena de suministro

- **Firma de artefactos e imágenes** con **cosign** (proyecto Sigstore) para garantizar procedencia e integridad.
- **SBOM** generado en el build (CycloneDX/SPDX) y adjuntado a la release.
- **SLSA** (*Supply-chain Levels for Software Artifacts*): marco para asegurar la cadena de suministro.

```bash
# Firmar y verificar una imagen con cosign
cosign sign miregistro/miapp:1.0.0
cosign verify miregistro/miapp:1.0.0 --certificate-identity ... --certificate-oidc-issuer ...

# Generar SBOM de una imagen con Trivy
trivy image --format cyclonedx --output sbom.json miapp:1.0.0
```

### 🧪 Laboratorio práctico 6.1 — Pipeline DevSecOps de extremo a extremo

**Objetivo:** montar un pipeline con etapas de seguridad y gates reales.

1. Crea un repositorio con una app sencilla y un `Dockerfile`.
2. Añade el workflow de GitHub Actions (o `.gitlab-ci.yml`) con: gitleaks, Semgrep, Trivy fs, build, Trivy image y ZAP baseline.
3. Introduce **a propósito** una dependencia vulnerable y comprueba que el **gate de Trivy** detiene el pipeline.
4. Corrige la dependencia y verifica que el pipeline pasa a verde.
5. Genera y publica el **SBOM** como artefacto de la ejecución.

**Entregable:** enlace/captura del pipeline en rojo (gate activado) y en verde tras la corrección, más el SBOM.

### ✍️ Ejercicios propuestos

1. Justifica qué etapas del pipeline deben ser **bloqueantes** (gate) y cuáles **informativas**, y por qué el DAST full scan no suele ir en el pipeline de cada commit.
2. Explica qué es un ataque a la **cadena de suministro** y cómo lo mitigan la firma de artefactos y el SBOM.
3. Diseña una estrategia de gestión de **falsos positivos** para que el equipo no ignore los informes de seguridad.

---

# UNIDAD DIDÁCTICA 7. Seguridad en la nube y modelo de responsabilidad compartida

## 7.1. Modelo de responsabilidad compartida

En la nube, la seguridad se **reparte** entre el proveedor (CSP) y el cliente. **La frontera depende del modelo de servicio**:

| Capa | On-Premise | IaaS | PaaS | SaaS |
|---|---|---|---|---|
| Datos | Cliente | Cliente | Cliente | Cliente |
| Aplicación | Cliente | Cliente | Cliente | Proveedor |
| Runtime / middleware | Cliente | Cliente | Proveedor | Proveedor |
| Sistema operativo | Cliente | Cliente | Proveedor | Proveedor |
| Virtualización / hardware / red física | Cliente | Proveedor | Proveedor | Proveedor |

Regla mnemotécnica: el proveedor es responsable de la seguridad **DE** la nube (infraestructura); el cliente, de la seguridad **EN** la nube (sus datos, su configuración, sus identidades). **La mayoría de incidentes cloud se deben a errores de configuración del cliente**, no a fallos del proveedor.

## 7.2. Buenas prácticas de seguridad cloud

- **IAM (gestión de identidades y accesos):**
  - **Mínimo privilegio**: conceder solo los permisos necesarios.
  - **No usar la cuenta root** para el día a día; protegerla con MFA.
  - **Roles** en lugar de claves de acceso de larga duración; credenciales temporales.
  - Revisar y rotar credenciales; eliminar identidades y permisos no usados.
- **Cifrado:** en reposo (KMS gestionado, claves rotadas) y en tránsito (TLS). Cifrado por defecto de discos y buckets.
- **Redes:** segmentación en VPC/subredes, *security groups* restrictivos (denegar por defecto), sin exposición innecesaria a Internet; endpoints privados para servicios gestionados.
- **Almacenamiento:** buckets **privados por defecto**; bloquear acceso público (los buckets S3 públicos mal configurados son una causa habitual de filtraciones).
- **Monitorización:** logs de auditoría (CloudTrail/Activity Log), detección de amenazas, alertas de cambios de configuración.
- **CSPM** (*Cloud Security Posture Management*): herramientas que detectan configuraciones incorrectas de forma continua.

```json
// ❌ Política IAM peligrosa: permisos totales
{ "Effect": "Allow", "Action": "*", "Resource": "*" }
```

```json
// ✅ Política IAM de mínimo privilegio: solo lectura de un bucket concreto
{
  "Effect": "Allow",
  "Action": ["s3:GetObject"],
  "Resource": "arn:aws:s3:::mi-bucket-app/*"
}
```

### 🧪 Laboratorio práctico 7.1 — Auditoría de configuración cloud (IaC) con Trivy

**Objetivo:** detectar *misconfigurations* sin necesidad de una cuenta cloud real.

1. Prepara ficheros de **Terraform** de ejemplo con errores comunes (bucket público, *security group* con `0.0.0.0/0` en el puerto 22, sin cifrado).
2. Ejecuta el escaneo de configuración:
   ```bash
   trivy config ./terraform
   ```
3. Interpreta cada hallazgo (regla, severidad, recurso).
4. Corrige el IaC y vuelve a escanear hasta dejarlo limpio.

**Entregable:** informe de Trivy antes/después y explicación de cada corrección.

### ✍️ Ejercicios propuestos

1. Dibuja el modelo de responsabilidad compartida y sitúa quién responde ante: un fallo del hipervisor, un bucket público, una contraseña débil de un usuario.
2. Explica por qué usar **roles con credenciales temporales** es más seguro que claves de acceso permanentes.
3. Propón una arquitectura de red segura para una app de tres capas (web, aplicación, BD) en una VPC, indicando qué expones y qué no.

---

# UNIDAD DIDÁCTICA 8. Hardening de contenedores Docker

## 8.1. Riesgos de los contenedores

Los contenedores comparten el **kernel** del host: un contenedor privilegiado o mal aislado puede comprometer el host (*container escape*). Los riesgos habituales: imágenes con CVE, ejecución como **root**, secretos incrustados en la imagen, imágenes «gordas» con superficie de ataque grande, capacidades excesivas.

## 8.2. Buenas prácticas de hardening (CIS Docker Benchmark)

| Práctica | Motivo |
|---|---|
| **Imágenes mínimas** (`alpine`, `distroless`, `slim`) | Menor superficie de ataque |
| **Usuario no root** (`USER`) | Limitar impacto de un compromiso |
| **Multi-stage build** | No dejar herramientas de compilación en la imagen final |
| **Fijar versiones** (tags concretos, no `latest`) | Reproducibilidad e integridad |
| **`.dockerignore`** | No copiar `.env`, `.git`, claves… a la imagen |
| **No secretos en la imagen** | Un `docker history` los revela |
| **`--read-only` y `cap-drop`** | Filesystem inmutable y mínimas capacidades |
| **Escaneo de imagen** (Trivy) | Detectar CVE antes de desplegar |
| **`HEALTHCHECK`** | Detectar contenedores no sanos |

### Dockerfile: antes y después

```dockerfile
# ❌ VULNERABLE: imagen gorda, root, tag latest, dependencias sin fijar
FROM node:latest
COPY . .
RUN npm install
CMD ["node", "server.js"]
```

```dockerfile
# ✅ ENDURECIDO: multi-stage, imagen slim, usuario no root, versión fijada
# --- etapa de build ---
FROM node:20.11-slim AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci --omit=dev          # instalación reproducible, solo prod
COPY . .

# --- etapa final mínima ---
FROM node:20.11-slim
WORKDIR /app
# usuario no root
RUN groupadd -r app && useradd -r -g app app
COPY --from=build /app /app
USER app                        # no ejecutar como root
EXPOSE 3000
HEALTHCHECK --interval=30s CMD node healthcheck.js || exit 1
CMD ["node", "server.js"]
```

```
# .dockerignore
.git
.env
node_modules
*.pem
*.key
Dockerfile
```

## 8.3. Ejecución endurecida en runtime

```bash
# Ejecución con mínimos privilegios y filesystem de solo lectura
docker run -d \
  --name miapp \
  --read-only \                       # FS inmutable
  --tmpfs /tmp \                       # zona escribible acotada
  --cap-drop=ALL \                     # eliminar todas las capacidades
  --cap-add=NET_BIND_SERVICE \         # añadir solo las necesarias
  --security-opt no-new-privileges \   # impedir escalada de privilegios
  --user 1000:1000 \                   # usuario no root
  -p 127.0.0.1:3000:3000 \
  miapp:1.0.0
```

## 8.4. Escaneo de imágenes con Trivy

```bash
# Escanear vulnerabilidades de una imagen
trivy image miapp:1.0.0

# Solo High/Critical y fallar (para el pipeline)
trivy image --severity HIGH,CRITICAL --exit-code 1 miapp:1.0.0

# Buscar también secretos y malas configuraciones en la imagen
trivy image --scanners vuln,secret,misconfig miapp:1.0.0
```

### 🧪 Laboratorio práctico 8.1 — Endurecer y escanear una imagen Docker

**Objetivo:** reducir drásticamente la superficie de ataque de una imagen.

1. Construye la imagen «vulnerable» (Dockerfile de arriba) y escanéala con Trivy. Anota el número de CVE y el tamaño de la imagen.
2. Reescribe el Dockerfile con las prácticas de hardening (multi-stage, slim, usuario no root, `.dockerignore`).
3. Vuelve a escanear y compara: CVE, tamaño, usuario de ejecución (`docker inspect`).
4. Ejecuta el contenedor endurecido con `--read-only`, `--cap-drop=ALL` y `no-new-privileges`.
5. Comprueba con `docker history` que **no** hay secretos en las capas.

**Entregable:** tabla comparativa (tamaño, nº CVE, usuario) antes/después y el Dockerfile final comentado.

### ✍️ Ejercicios propuestos

1. Explica por qué ejecutar como root dentro del contenedor es peligroso incluso con aislamiento de namespaces.
2. Investiga las imágenes **distroless** de Google: ventajas y limitaciones frente a `alpine`.
3. Diseña una política de imágenes base para tu organización (qué imágenes se permiten, cómo se fijan y cómo se escanean en el pipeline).

---

# UNIDAD DIDÁCTICA 9. Seguridad en Kubernetes e Infraestructura como Código

## 9.1. Superficie de ataque de Kubernetes

Kubernetes (K8s) orquesta contenedores en un clúster. Su seguridad se apoya en las **4C**: **Cloud, Cluster, Container, Code**. Los principales controles son **RBAC**, **Network Policies**, **Pod Security**, **gestión de Secrets** y el escaneo de manifiestos (CIS Kubernetes Benchmark).

## 9.2. RBAC (Role-Based Access Control)

RBAC define **qué** puede hacer **quién** sobre **qué recursos**. Principio: **mínimo privilegio**; evitar el rol `cluster-admin` salvo para administración.

```yaml
# Role: permite SOLO leer pods en el namespace "produccion"
apiVersion: rbac.authorization.k8s.io/v1
kind: Role
metadata:
  namespace: produccion
  name: lector-pods
rules:
  - apiGroups: [""]
    resources: ["pods"]
    verbs: ["get", "list", "watch"]   # solo lectura, sin create/delete
---
apiVersion: rbac.authorization.k8s.io/v1
kind: RoleBinding
metadata:
  name: enlace-lector-pods
  namespace: produccion
subjects:
  - kind: User
    name: desarrollador1
roleRef:
  kind: Role
  name: lector-pods
  apiGroup: rbac.authorization.k8s.io
```

## 9.3. Network Policies

Por defecto, en Kubernetes **todos los pods pueden comunicarse entre sí**. Una **NetworkPolicy** aplica microsegmentación (*default deny* + permitir lo necesario).

```yaml
# Denegar todo el tráfico de entrada por defecto en el namespace
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: default-deny-ingress
  namespace: produccion
spec:
  podSelector: {}          # aplica a todos los pods
  policyTypes: ["Ingress"]
  # sin reglas ingress = se deniega toda entrada
---
# Permitir SOLO que el frontend hable con la API en el puerto 8080
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: frontend-a-api
  namespace: produccion
spec:
  podSelector:
    matchLabels: { app: api }
  policyTypes: ["Ingress"]
  ingress:
    - from:
        - podSelector:
            matchLabels: { app: frontend }
      ports:
        - protocol: TCP
          port: 8080
```

## 9.4. Pod Security (Pod Security Standards)

Los **Pod Security Standards** definen tres niveles: **privileged** (sin restricciones), **baseline** (mínimo razonable) y **restricted** (endurecido). Se aplican con el **Pod Security Admission** mediante etiquetas en el namespace.

```yaml
# Namespace con el estándar "restricted" aplicado
apiVersion: v1
kind: Namespace
metadata:
  name: produccion
  labels:
    pod-security.kubernetes.io/enforce: restricted
```

```yaml
# securityContext endurecido en el Pod/Deployment
spec:
  securityContext:
    runAsNonRoot: true            # nunca root
    runAsUser: 1000
    fsGroup: 1000
    seccompProfile: { type: RuntimeDefault }
  containers:
    - name: api
      image: miapp:1.0.0
      securityContext:
        allowPrivilegeEscalation: false
        readOnlyRootFilesystem: true
        capabilities:
          drop: ["ALL"]           # eliminar todas las capacidades
```

## 9.5. Gestión de Secrets

Los **Secrets** de Kubernetes se almacenan en `etcd` **codificados en Base64, que no es cifrado**. Buenas prácticas:

- Activar **cifrado en reposo** de `etcd` (encryption at rest).
- Restringir el acceso a Secrets con **RBAC**.
- No poner secretos en `ConfigMaps` ni en variables de entorno visibles.
- Usar soluciones externas: **External Secrets Operator + Vault**, **Sealed Secrets** (secretos cifrados que sí se pueden versionar), o **CSI Secrets Store**.

```yaml
# Referencia segura a un Secret como volumen (mejor que env var)
volumes:
  - name: secret-db
    secret:
      secretName: db-credenciales
      defaultMode: 0400          # solo lectura para el propietario
```

## 9.6. IaC seguro y escaneo de manifiestos

**Infraestructura como Código** (Terraform, Kubernetes YAML, Helm) debe escanearse igual que el código de aplicación, para detectar malas configuraciones **antes** de aplicarlas.

```bash
# Escanear manifiestos de Kubernetes y Terraform con Trivy
trivy config ./k8s-manifests
trivy config ./terraform

# Alternativas específicas de IaC
# checkov -d ./terraform
# kube-bench   # comprueba el CIS Kubernetes Benchmark en el propio clúster
```

### 🧪 Laboratorio práctico 9.1 — Securizar un clúster con minikube/kind

**Objetivo:** aplicar RBAC, NetworkPolicy y Pod Security en un clúster local.

1. Levanta un clúster local: `minikube start` o `kind create cluster`.
2. Despliega una app de dos componentes (frontend + api) en el namespace `produccion`.
3. Aplica un `Role`/`RoleBinding` de solo lectura para un usuario de prueba y verifica con `kubectl auth can-i`.
4. Aplica `default-deny-ingress` y comprueba que el frontend deja de alcanzar la API; luego añade la política que lo permite en el puerto 8080.
5. Etiqueta el namespace como `restricted` e intenta desplegar un pod como root: debe ser rechazado. Corrige el `securityContext`.
6. Escanea los manifiestos con `trivy config` y corrige los hallazgos.

**Entregable:** manifiestos finales, salida de `kubectl auth can-i`, evidencia del bloqueo/permiso de red y del rechazo del pod root, e informe de Trivy limpio.

### 🧪 Laboratorio práctico 9.2 — Secrets: de Base64 a gestión segura

**Objetivo:** entender que Base64 no protege y aplicar una solución adecuada.

1. Crea un Secret y decodifícalo con `kubectl get secret ... -o jsonpath` + `base64 -d` para demostrar que **no está cifrado**.
2. Monta el Secret como **volumen de solo lectura** en lugar de variable de entorno.
3. (Opcional) Instala **Sealed Secrets** y comprueba que el `SealedSecret` sí puede versionarse en Git.

**Entregable:** demostración de la decodificación Base64 y del montaje seguro.

### ✍️ Ejercicios propuestos

1. Explica por qué el comportamiento por defecto de red de Kubernetes es inseguro y cómo lo corrige una NetworkPolicy *default-deny*.
2. Compara las tres opciones de gestión de secretos en K8s (External Secrets+Vault, Sealed Secrets, CSI) indicando cuándo usar cada una.
3. Redacta un `securityContext` «restricted» completo y justifica cada campo.

---

## Proyecto integrador del módulo

**Título:** *Puesta en producción segura de una aplicación web completa.*

**Escenario:** el equipo recibe una aplicación web (API + frontend) con vulnerabilidades introducidas a propósito. El objetivo es llevarla a producción de forma segura aplicando **todo** lo aprendido, en un entorno **local y aislado**.

**Fases y entregables:**

1. **Threat modeling (UD1):** DFD + análisis STRIDE con mitigaciones.
2. **Programación segura y secretos (UD2):** eliminar secretos hardcodeados (gitleaks + Vault/`.env`), corregir criptografía débil.
3. **Auditoría (UD3):** ejecutar SAST (Semgrep/Sonar), SCA (Trivy/Dependency-Check) y DAST (ZAP baseline); informe priorizado por CVSS.
4. **Corrección OWASP Top 10 (UD4/UD5):** corregir al menos cinco categorías del Top 10 con pares vulnerable→corregido; endurecer sesiones/JWT/OAuth2.
5. **Pipeline DevSecOps (UD6):** montar un pipeline (GitHub Actions o GitLab CI) con gates bloqueantes; generar SBOM y firmar la imagen.
6. **Contenedores (UD8):** endurecer el Dockerfile (multi-stage, no root, slim) y dejar el escaneo Trivy sin High/Critical.
7. **Kubernetes/Cloud (UD7/UD9):** desplegar en minikube con RBAC, NetworkPolicy *default-deny*, Pod Security `restricted` y gestión segura de Secrets; escanear IaC con `trivy config`.

**Producto final:** repositorio con el código corregido, el pipeline en verde, los informes de seguridad (antes/después), el SBOM, los manifiestos endurecidos y una **memoria** que documente cada vulnerabilidad encontrada, su causa raíz (CWE), su corrección y la evidencia de verificación.

---

## Evaluación y rúbrica

**Ponderación orientativa por Resultado de Aprendizaje:**

| RA | Peso | Instrumento principal |
|---|---|---|
| RA1 (S-SDLC, threat modeling, secretos) | 15 % | Threat model + lab de secretos |
| RA2 (SAST/DAST/SCA) | 20 % | Informe de auditoría priorizado |
| RA3 (OWASP Top 10, sesiones) | 25 % | Pares vulnerable→corregido verificados |
| RA4 (CI/CD seguro) | 20 % | Pipeline con gates + SBOM + firma |
| RA5 (cloud/contenedores/K8s) | 20 % | Hardening Docker + clúster securizado |

**Rúbrica de niveles de desempeño:**

| Criterio | Insuficiente (0-4) | Suficiente/Bien (5-7) | Notable (8-9) | Excelente (10) |
|---|---|---|---|---|
| **Detección** | No identifica vulnerabilidades | Detecta las evidentes | Detecta y prioriza con CVSS/CWE | Detecta, correlaciona SAST/DAST/SCA y prioriza con EPSS/exposición |
| **Corrección** | No corrige o rompe la app | Corrige parcialmente | Corrige con código defensivo correcto | Corrige con defensa en profundidad y verifica reejecutando el análisis |
| **Automatización CI/CD** | Sin pipeline | Pipeline básico sin gates | Pipeline con gates funcionales | Pipeline completo con SBOM, firma y gestión de falsos positivos |
| **Hardening** | Imagen root, sin controles | Alguna práctica aislada | Docker+K8s endurecidos | Hardening completo verificado con benchmarks (CIS) y escaneos limpios |
| **Documentación y ética** | Ausente | Básica | Clara y trazable | Memoria rigurosa, reproducible y con consideraciones éticas/legales |

**Requisito ético (eliminatorio):** cualquier práctica realizada fuera del entorno aislado autorizado, o sobre sistemas de terceros sin permiso, invalida la evaluación de la actividad.

---

## Glosario

- **AEAD:** cifrado autenticado con datos asociados (p. ej., AES-GCM); garantiza confidencialidad e integridad.
- **ASVS:** *Application Security Verification Standard* de OWASP; catálogo de requisitos de seguridad verificables por niveles.
- **CI/CD:** integración continua / entrega o despliegue continuo.
- **CSPM:** gestión de la postura de seguridad en la nube.
- **CVE / CWE / CVSS:** vulnerabilidad concreta / tipo de debilidad / puntuación de severidad.
- **DAST / SAST / SCA / IAST:** análisis dinámico / estático / de composición / interactivo.
- **DevSecOps:** integración de la seguridad como responsabilidad compartida en DevOps.
- **DFD:** diagrama de flujo de datos, base del threat modeling.
- **Gate (quality/security gate):** condición que detiene el pipeline si no se cumplen umbrales.
- **Hardening:** endurecimiento; reducir la superficie de ataque de un sistema.
- **IaC:** infraestructura como código (Terraform, YAML de K8s, Helm).
- **IDOR:** referencia directa insegura a objetos (control de acceso roto).
- **JWT:** token web JSON, autocontenido y firmado.
- **Mínimo privilegio:** conceder solo los permisos estrictamente necesarios.
- **OAuth2 / OIDC:** autorización delegada / capa de autenticación sobre OAuth2.
- **RBAC / ABAC:** control de acceso basado en roles / en atributos.
- **RASP:** protección de aplicaciones en tiempo de ejecución.
- **SBOM:** inventario de componentes del software (CycloneDX/SPDX).
- **S-SDLC:** ciclo de vida de desarrollo seguro.
- **Shift-left:** adelantar los controles de seguridad al inicio del ciclo.
- **SLSA:** niveles de seguridad de la cadena de suministro de artefactos.
- **SSRF:** falsificación de petición del lado del servidor.
- **STRIDE:** taxonomía de amenazas (Spoofing, Tampering, Repudiation, Information disclosure, DoS, Elevation of privilege).
- **Vault:** gestor de secretos de HashiCorp.
- **XSS / CSRF:** cross-site scripting / cross-site request forgery.

---

## Recursos y bibliografía

**Estándares y marcos:**

- **OWASP Top 10** (2021) — los diez riesgos web más críticos: `owasp.org/Top10`.
- **OWASP ASVS** — *Application Security Verification Standard*.
- **OWASP SAMM** — modelo de madurez de aseguramiento del software.
- **OWASP Cheat Sheet Series** — guías concisas de programación segura.
- **NIST SP 800-218 (SSDF)** — *Secure Software Development Framework*.
- **SANS / CWE Top 25** — debilidades de software más peligrosas.
- **CVSS v3.1/v4.0** — sistema de puntuación de vulnerabilidades (FIRST).
- **CIS Docker Benchmark** y **CIS Kubernetes Benchmark** — guías de hardening.
- **CNCF** — *Cloud Native Computing Foundation*; proyectos y buenas prácticas cloud-native.

**Aplicaciones de práctica LEGALES (siempre en local/aislado):**

- **OWASP Juice Shop** — app web deliberadamente vulnerable moderna (JavaScript).
- **OWASP WebGoat** — lecciones guiadas de vulnerabilidades web.
- **DVWA** (*Damn Vulnerable Web Application*) — PHP/MySQL, con niveles de dificultad.

**Herramientas:**

- **SAST:** SonarQube, Semgrep.
- **DAST:** OWASP ZAP.
- **SCA / imágenes / IaC:** OWASP Dependency-Check, Trivy, Snyk.
- **Secretos:** HashiCorp Vault, gitleaks, git-secrets.
- **Firma / SBOM:** cosign (Sigstore), CycloneDX, SPDX, SLSA.
- **CI/CD:** GitLab CI, GitHub Actions.
- **Contenedores/Orquestación:** Docker, Kubernetes (minikube, kind), Helm.
- **Threat modeling:** OWASP Threat Dragon, Microsoft Threat Modeling Tool.

**Marco legal (España):**

- **Código Penal**, arts. 197 bis y 264 (delitos contra sistemas informáticos): recuerda que las prácticas ofensivas solo son lícitas en entornos propios/autorizados.
- **RGPD / LOPDGDD** — protección de datos personales, relevante en logging y gestión de datos.
- **ENS** (*Esquema Nacional de Seguridad*, RD 311/2022) — para el sector público.

> **Cierre del módulo.** La seguridad no es una fase ni un producto: es una **práctica continua** que atraviesa todo el ciclo de vida. Un buen profesional de la puesta en producción segura *detecta pronto, corrige bien, automatiza y verifica*, y siempre actúa dentro de la ley y de la ética profesional.
