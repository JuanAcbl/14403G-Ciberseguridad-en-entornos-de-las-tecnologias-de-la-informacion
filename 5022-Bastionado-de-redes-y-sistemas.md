# 5022 - Bastionado de redes y sistemas

El módulo profesional **5022 - Bastionado de redes y sistemas** forma parte del **Curso de Especialización en Ciberseguridad en Entornos de las Tecnologías de la Información**, regulado por el **Real Decreto 479/2020, de 7 de abril**. Su finalidad es capacitar al alumnado para **fortificar (hardening)** de forma sistemática, verificable y reproducible los tres pilares de una infraestructura TI: los **sistemas operativos** (Windows y Linux), la **red** (segmentación, cortafuegos, VPN) y los **servicios** (web, bases de datos, correo, DNS), incorporando además la **gestión de identidades y accesos** (Active Directory, LDAP, AAA, MFA).

El enfoque del módulo es estrictamente **defensivo (blue team)**: reducir la **superficie de ataque**, aplicar el principio de **mínimo privilegio**, establecer **líneas base de seguridad (security baselines)** medibles y auditar el cumplimiento frente a marcos de referencia reconocidos como los **CIS Benchmarks**, las **guías CCN-STIC** del Centro Criptológico Nacional, las **DISA STIG** y el **Esquema Nacional de Seguridad (ENS)**. Todo el trabajo práctico se realiza sobre **máquinas virtuales propias, autorizadas y aisladas**.

| Aspecto | Detalle |
|---|---|
| **Código** | 5022 |
| **Denominación** | Bastionado de redes y sistemas |
| **Curso de especialización** | Ciberseguridad en Entornos de las TI (RD 479/2020) |
| **Duración orientativa** | ~140-160 h (parte proporcional de las 720 h del curso) |
| **Prerrequisitos** | Administración de SO (Windows/Linux), redes TCP/IP, virtualización básica, línea de comandos (Bash/PowerShell) |
| **Modalidad de laboratorio** | Máquinas virtuales (VirtualBox/Proxmox/Hyper-V), entornos aislados |
| **Competencia general asociada** | Configurar y gestionar la seguridad de sistemas, redes y servicios reduciendo su superficie de exposición |
| **Marcos de referencia** | CIS Benchmarks, CCN-STIC, DISA STIG, Microsoft Security Baselines, ENS, NIST SP 800-series |
| **Herramientas clave** | Lynis, OpenSCAP, GPO/LGPO, AppLocker, nftables/iptables, WireGuard/OpenVPN, pfSense |

> **Aviso ético y legal.** Todas las técnicas descritas están orientadas a la **protección de sistemas propios o para los que se dispone de autorización expresa por escrito**. La aplicación de estas configuraciones sobre sistemas ajenos sin permiso puede constituir una infracción tipificada en el Código Penal (arts. 197 bis y 264). El alumnado debe operar siempre en entornos de laboratorio controlados.

---

## Resultados de Aprendizaje

Los siguientes **Resultados de Aprendizaje (RA)** y sus **Criterios de Evaluación (CE)** se redactan siguiendo el estilo del BOE y desarrollan los contenidos básicos del RD 479/2020 para este módulo.

### RA1. Configura sistemas operativos aplicando técnicas de bastionado, evaluando su superficie de exposición.

**Criterios de evaluación:**
- **CE1.1** Se ha identificado la superficie de ataque del sistema operativo (servicios, puertos, cuentas, software instalado).
- **CE1.2** Se han aplicado líneas base de seguridad (security baselines) sobre Windows y Linux.
- **CE1.3** Se han endurecido los mecanismos de autenticación local (políticas de contraseñas, bloqueo de cuentas, PAM).
- **CE1.4** Se han configurado controles de aplicaciones (AppLocker, listas blancas) y control de acceso obligatorio (SELinux/AppArmor).
- **CE1.5** Se ha activado y configurado el cifrado de disco (BitLocker, LUKS).
- **CE1.6** Se han configurado subsistemas de auditoría (Event Viewer/auditpol, auditd).
- **CE1.7** Se ha verificado el cumplimiento frente a CIS Benchmarks / CCN-STIC mediante herramientas (Lynis, OpenSCAP).
- **CE1.8** Se han considerado técnicas de gestión y bastionado de dispositivos móviles (MDM).

### RA2. Asegura la infraestructura de red aplicando segmentación, filtrado y cifrado del tráfico.

**Criterios de evaluación:**
- **CE2.1** Se ha diseñado una segmentación de red mediante VLAN y subredes.
- **CE2.2** Se han configurado cortafuegos con filtrado de paquetes y de estado (stateful).
- **CE2.3** Se han definido reglas de cortafuegos en nftables/iptables y en el firewall de Windows.
- **CE2.4** Se han implementado listas de control de acceso (ACL) en dispositivos de red.
- **CE2.5** Se han desplegado túneles VPN (IPSec, OpenVPN, WireGuard) con cifrado robusto.
- **CE2.6** Se ha diseñado una arquitectura perimetral con DMZ.
- **CE2.7** Se han identificado los principios del modelo Zero Trust.

### RA3. Fortifica servicios de red configurando de forma segura servidores web, de bases de datos, de correo y DNS.

**Criterios de evaluación:**
- **CE3.1** Se ha configurado TLS con parámetros robustos y cabeceras de seguridad en servidores web.
- **CE3.2** Se ha endurecido la configuración de servidores de bases de datos (usuarios, privilegios, cifrado).
- **CE3.3** Se han implementado mecanismos antisuplantación de correo (SPF, DKIM, DMARC) y TLS en SMTP.
- **CE3.4** Se ha asegurado el servicio DNS (DNSSEC, restricción de transferencias y recursión).
- **CE3.5** Se ha aplicado el principio de mínima exposición en la configuración de servicios.

### RA4. Gestiona identidades y accesos aplicando políticas de autenticación, autorización y auditoría (AAA).

**Criterios de evaluación:**
- **CE4.1** Se ha diseñado un modelo de administración por niveles (tiering) en Active Directory.
- **CE4.2** Se han aplicado directivas de grupo (GPO) de seguridad.
- **CE4.3** Se ha implementado la gestión de contraseñas de administrador local (LAPS).
- **CE4.4** Se ha configurado autenticación centralizada mediante LDAP y AAA (RADIUS/TACACS+).
- **CE4.5** Se han establecido políticas de contraseñas y autenticación multifactor (MFA).

### RA5. Verifica y documenta el nivel de bastionado mediante auditorías de cumplimiento y elabora informes.

**Criterios de evaluación:**
- **CE5.1** Se han ejecutado auditorías automatizadas de cumplimiento (OpenSCAP, Lynis, MBSA/SecBaseline).
- **CE5.2** Se ha interpretado el resultado de las auditorías y priorizado los hallazgos por criticidad.
- **CE5.3** Se ha elaborado documentación técnica y planes de remediación.
- **CE5.4** Se ha trazado la configuración aplicada frente a controles del ENS y de los CIS Benchmarks.

---

## Unidad 0. Fundamentos del bastionado

### 0.1. Qué es el bastionado y por qué es necesario

El **bastionado**, **fortificación** o **hardening** es el conjunto de acciones destinadas a **reducir la superficie de ataque** de un sistema, dejándolo en un estado de configuración seguro y conocido. Un sistema recién instalado suele venir configurado para la **máxima compatibilidad y facilidad de uso**, no para la máxima seguridad: trae servicios activados que no se usan, cuentas por defecto, protocolos heredados y valores permisivos. El bastionado invierte esa premisa: **lo que no es necesario, se elimina o se deshabilita**.

La **superficie de ataque** es la suma de todos los puntos por los que un atacante podría intentar acceder o comprometer un sistema: puertos y servicios abiertos, interfaces de red, cuentas de usuario, software instalado, dependencias, credenciales, tareas programadas, permisos de ficheros, etc. Cuanto menor sea, menos oportunidades tiene el adversario y menor es la probabilidad de que una vulnerabilidad concreta sea explotable.

### 0.2. Principios rectores

| Principio | Descripción | Ejemplo práctico |
|---|---|---|
| **Mínimo privilegio** | Cada usuario/proceso tiene solo los permisos imprescindibles | Un servicio web se ejecuta con usuario `www-data`, no como `root` |
| **Mínima exposición / superficie** | Se deshabilita todo lo innecesario | Desinstalar Telnet, cerrar puertos no usados |
| **Defensa en profundidad** | Varias capas de control independientes | Firewall + SELinux + TLS + auditoría |
| **Seguro por defecto** | El estado por defecto es el más restrictivo | Política de firewall `default drop` |
| **Segregación de funciones** | Separar roles y responsabilidades | Cuenta de administración distinta de la de uso diario |
| **Fallo seguro (fail-safe)** | Ante error, el sistema queda en estado seguro | Si falla la autenticación, se deniega el acceso |
| **Trazabilidad / rendición de cuentas** | Toda acción relevante queda registrada | Auditoría de accesos y cambios (auditd, Event Log) |

### 0.3. Marcos y líneas base de referencia

Una **línea base de seguridad (security baseline)** es un conjunto documentado de valores de configuración que definen el estado seguro mínimo aceptable para un tipo de sistema. En lugar de inventar la configuración, el profesional se apoya en marcos consolidados:

- **CIS Benchmarks** (Center for Internet Security): guías de configuración por producto (Windows Server 2022, Ubuntu 22.04, Nginx, PostgreSQL, etc.). Definen recomendaciones con dos niveles: **Level 1** (endurecimiento razonable sin romper funcionalidad) y **Level 2** (entornos de alta seguridad, más restrictivo). Incluyen **CIS-CAT** como herramienta de evaluación.
- **CCN-STIC** (Centro Criptológico Nacional - CCN-CERT): serie de guías españolas de seguridad; especialmente la **serie 500/800** para configuración de sistemas y cumplimiento del **ENS**. Ejemplos: CCN-STIC 570 (Windows), CCN-STIC 610 (Linux), CCN-STIC 619 (implementación del ENS).
- **DISA STIG** (Security Technical Implementation Guides, Departamento de Defensa de EE. UU.): guías muy detalladas, distribuidas en formato **SCAP/XCCDF** para evaluación automática.
- **Microsoft Security Baselines**: incluidas en el **Security Compliance Toolkit (SCT)** con la herramienta **LGPO.exe** y **Policy Analyzer**.
- **NIST**: publicaciones SP 800-53 (controles), SP 800-123 (bastionado de servidores), SP 800-207 (Zero Trust).
- **ENS** (Esquema Nacional de Seguridad, RD 311/2022): obligatorio para el sector público español y sus proveedores; categoriza sistemas en niveles **BÁSICO / MEDIO / ALTO**.

### 0.4. El ciclo de vida del bastionado

El hardening no es una acción única, sino un **proceso continuo**:

```
   ┌─────────────┐    ┌──────────────┐     ┌───────────────┐
   │ 1. Inventario│──▶│ 2. Evaluación │──▶│ 3. Aplicación │
   │  y análisis  │   │  (baseline/   │    │  de controles │
   │ de superficie│   │   escaneo)    │    │  (hardening)  │
   └─────────────┘    └──────────────┘     └───────┬───────┘
          ▲                                        │
          │                                        ▼
   ┌──────┴───────┐    ┌──────────────┐    ┌───────────────┐
   │ 6. Mejora    │◀──│ 5. Monitori-  │◀──│4. Verificación│
   │  continua    │    │  zación y    │    │ (auditoría de │
   │              │    │  auditoría   │    │ cumplimiento) │
   └──────────────┘    └──────────────┘    └───────────────┘
```

Un aspecto crítico es **documentar** cada cambio, **probar en preproducción** y disponer de un **plan de reversión (rollback)**: un bastionado mal aplicado puede dejar un sistema inoperativo o inaccesible (por ejemplo, cerrar el puerto SSH sin acceso físico alternativo).

---

## Unidad 1. Bastionado de sistemas operativos Windows

### 1.1. Superficie de ataque en Windows

Antes de endurecer, hay que **conocer** el sistema. Windows expone superficie a través de servicios, tareas programadas, cuentas, recursos compartidos SMB, protocolos heredados (SMBv1, LLMNR, NBT-NS) y funciones opcionales. La inspección inicial se realiza con PowerShell:

```powershell
# Servicios en ejecución y su tipo de inicio
Get-Service | Where-Object {$_.Status -eq 'Running'} | Sort-Object Name

# Puertos a la escucha y proceso propietario
Get-NetTCPConnection -State Listen | Select-Object LocalAddress,LocalPort,OwningProcess
Get-Process -Id (Get-NetTCPConnection -State Listen).OwningProcess -ErrorAction SilentlyContinue

# Características/roles opcionales instalados (Windows Server)
Get-WindowsFeature | Where-Object {$_.Installed}

# Cuentas locales y su estado
Get-LocalUser | Select-Object Name,Enabled,LastLogon

# Comprobar si SMBv1 (protocolo heredado inseguro) está activo
Get-WindowsOptionalFeature -Online -FeatureName SMB1Protocol
```

Un primer paso de reducción de superficie muy habitual es **deshabilitar SMBv1** y los protocolos de resolución de nombres heredados, que son vectores clásicos de ataques de tipo relay y envenenamiento:

```powershell
# Desinstalar SMBv1 (requiere reinicio)
Disable-WindowsOptionalFeature -Online -FeatureName SMB1Protocol -NoRestart

# Deshabilitar LLMNR vía registro (o mejor por GPO, ver Unidad 6)
New-Item -Path "HKLM:\SOFTWARE\Policies\Microsoft\Windows NT\DNSClient" -Force
Set-ItemProperty -Path "HKLM:\SOFTWARE\Policies\Microsoft\Windows NT\DNSClient" `
  -Name "EnableMulticast" -Value 0
```

### 1.2. Directivas de grupo (Group Policy) y Security Baselines

Las **Directivas de Grupo (GPO / Group Policy)** son el mecanismo central de configuración de seguridad en Windows. En un equipo aislado se usan las **Directivas de grupo local (LGPO)** vía `gpedit.msc` o `secpol.msc`; en dominio se aplican de forma centralizada desde Active Directory (ver Unidad 6).

Las categorías más relevantes de `secpol.msc` (Directiva de seguridad local) son:

| Categoría | Contenido | Ejemplo de endurecimiento |
|---|---|---|
| **Directivas de contraseñas** | Longitud, complejidad, historial, caducidad | Longitud mínima 14, historial 24 |
| **Directiva de bloqueo de cuentas** | Umbral, duración, restablecimiento | Bloqueo tras 5-10 intentos fallidos |
| **Asignación de derechos de usuario** | Quién puede iniciar sesión, apagar, etc. | Restringir "Iniciar sesión localmente" |
| **Opciones de seguridad** | Firma SMB, UAC, LSA | Habilitar firma SMB, PPL para LSA |
| **Directivas de auditoría** | Qué eventos se registran | Auditar inicios de sesión y cambios |

En lugar de configurar cientos de valores manualmente, se aplican las **Microsoft Security Baselines**. Estas se distribuen dentro del **Security Compliance Toolkit** e incluyen `LGPO.exe`, que permite importar/exportar directivas locales de forma masiva:

```powershell
# Exportar la configuración actual de directivas locales (copia de seguridad)
.\LGPO.exe /b C:\Backup\LGPO_backup

# Importar un GPO backup de una Security Baseline (p.ej. Windows Server 2022)
.\LGPO.exe /g ".\GPOs\{GUID-de-la-baseline}"

# Aplicar una plantilla de seguridad (.inf) sobre la base de datos de seguridad local
secedit /configure /db secedit.sdb /cfg C:\Baseline\SecurityBaseline.inf /overwrite

# Comparar el estado actual frente a una baseline con Policy Analyzer (GUI)
```

Ejemplo de fragmento de una plantilla de seguridad `.inf` con valores endurecidos de contraseña y bloqueo:

```ini
[System Access]
MinimumPasswordAge = 1
MaximumPasswordAge = 365
MinimumPasswordLength = 14
PasswordComplexity = 1
PasswordHistorySize = 24
LockoutBadCount = 5
ResetLockoutCount = 15
LockoutDuration = 15
ClearTextPassword = 0
```

### 1.3. Control de aplicaciones con AppLocker y WDAC

El **control de aplicaciones** implementa una **lista blanca (allowlisting)**: solo se ejecuta el software explícitamente permitido, bloqueando por defecto el resto. Es una de las mitigaciones más eficaces contra malware y ejecución no autorizada.

- **AppLocker**: disponible en ediciones Enterprise/Education; gestionable por GPO. Define reglas por **editor (firma digital)**, **ruta** o **hash**.
- **WDAC (Windows Defender Application Control)**: mecanismo más moderno y robusto, basado en políticas de integridad de código, más difícil de eludir.

Reglas de AppLocker por PowerShell (recomendación clave: preferir reglas de **editor** o **hash** sobre reglas de **ruta**, ya que las rutas escribibles por el usuario permiten evasión):

```powershell
# Crear reglas por defecto (permite Windows y Program Files, base segura)
Get-AppLockerPolicy -Effective -Xml

# Generar reglas automáticamente a partir de los ejecutables de una carpeta
Get-ChildItem "C:\Program Files\MiApp\*.exe" | Get-AppLockerFileInformation |
  New-AppLockerPolicy -RuleType Publisher,Hash -User Everyone -Optimize |
  Set-AppLockerPolicy -XmlPolicy C:\AppLocker\policy.xml

# El servicio Application Identity debe estar activo para que AppLocker aplique
Set-Service -Name AppIDSvc -StartupType Automatic
Start-Service AppIDSvc
```

> **Buena práctica.** Implantar AppLocker/WDAC primero en modo **auditoría (audit only)**, revisar los eventos generados durante un periodo de rodaje y solo después pasar a **enforce**, para no bloquear aplicaciones legítimas.

### 1.4. Cifrado de disco con BitLocker

**BitLocker** cifra volúmenes completos para proteger la **confidencialidad de los datos en reposo** ante robo o pérdida del equipo. Idealmente se ancla a un chip **TPM (Trusted Platform Module)**, que sella la clave y detecta manipulaciones del arranque.

```powershell
# Comprobar estado y disponibilidad del TPM
Get-Tpm
Get-BitLockerVolume

# Cifrar el volumen del sistema con TPM + PIN y algoritmo XTS-AES 256
Enable-BitLocker -MountPoint "C:" -EncryptionMethod XtsAes256 `
  -TpmAndPinProtector -UsedSpaceOnly

# Añadir un protector de clave de recuperación numérica y guardarla en AD (dominio)
Add-BitLockerKeyProtector -MountPoint "C:" -RecoveryPasswordProtector
Backup-BitLockerKeyProtector -MountPoint "C:" -KeyProtectorId "{ID}"

# Ver la clave de recuperación (custodiarla de forma segura)
(Get-BitLockerVolume -MountPoint "C:").KeyProtector
```

Consideraciones clave: usar **XTS-AES 256**, exigir **PIN de arranque** en equipos de alto riesgo (protege frente a ataques de arranque en frío / DMA), y **custodiar las claves de recuperación** (en AD o Azure AD/Intune, nunca en el mismo equipo).

### 1.5. Windows Defender Antivirus y reglas ASR

**Microsoft Defender Antivirus** es la solución EDR/AV integrada. Su configuración endurecida incluye protección en tiempo real, protección basada en la nube y, sobre todo, las **reglas de reducción de la superficie de ataque (Attack Surface Reduction, ASR)**, que bloquean comportamientos habitualmente abusados por malware (macros de Office lanzando procesos, robo de credenciales de LSASS, ejecución desde correo, etc.).

```powershell
# Asegurar protección en tiempo real y protección en la nube
Set-MpPreference -DisableRealtimeMonitoring $false
Set-MpPreference -MAPSReporting Advanced -SubmitSamplesConsent SendSafeSamples

# Habilitar la protección contra manipulaciones y PUA (aplicaciones potencialmente no deseadas)
Set-MpPreference -PUAProtection Enabled

# Activar reglas ASR en modo bloqueo (1 = Block, 2 = Audit)
# Bloquear robo de credenciales del subsistema LSASS
Add-MpPreference -AttackSurfaceReductionRules_Ids 9e6c4e1f-7d60-472f-ba1a-a39ef669e4b2 `
  -AttackSurfaceReductionRules_Actions Enabled
# Bloquear que las aplicaciones de Office creen procesos secundarios
Add-MpPreference -AttackSurfaceReductionRules_Ids d4f940ab-401b-4efc-aadc-ad5f3c50688a `
  -AttackSurfaceReductionRules_Actions Enabled

# Consultar el estado de la protección
Get-MpComputerStatus | Select-Object AMRunningMode,RealTimeProtectionEnabled,TamperProtectionSource
```

### 1.6. Auditoría y registro de eventos

La **auditoría** permite detectar e investigar incidentes. Se configura la **directiva de auditoría avanzada** (más granular que la básica) y se dimensionan adecuadamente los registros.

```powershell
# Ver la configuración de auditoría avanzada actual
auditpol /get /category:*

# Habilitar auditoría de inicios de sesión (correctos y erróneos)
auditpol /set /subcategory:"Logon" /success:enable /failure:enable
auditpol /set /subcategory:"Account Lockout" /failure:enable

# Auditar la creación de procesos (registra la línea de comandos si se activa por GPO)
auditpol /set /subcategory:"Process Creation" /success:enable

# Aumentar el tamaño del log de seguridad (evita sobrescritura rápida)
wevtutil sl Security /ms:1073741824
```

Eventos clave a vigilar: **4624/4625** (inicio de sesión correcto/fallido), **4672** (privilegios especiales asignados), **4688** (creación de proceso), **4720/4726** (creación/borrado de cuenta), **4728/4732** (adición a grupos). En entornos reales estos eventos se centralizan en un **SIEM** mediante Windows Event Forwarding (WEF) o un agente.

### 🧪 Laboratorio práctico 1.1 — Baseline y verificación en Windows Server

**Objetivo:** aplicar una línea base a un Windows Server de evaluación y verificar el resultado.

1. Despliega una VM de **Windows Server (edición de evaluación de 180 días)** aislada en red interna.
2. Realiza un **inventario inicial** de servicios, puertos y cuentas con los comandos de la sección 1.1 y guárdalo como estado "antes".
3. Descarga el **Security Compliance Toolkit** y la baseline correspondiente. Haz un backup con `LGPO.exe /b`.
4. Aplica la baseline con `LGPO.exe /g` y refuerza contraseñas/bloqueo con una plantilla `.inf` propia (sección 1.2).
5. Deshabilita **SMBv1** y **LLMNR**; activa la **auditoría** de inicios de sesión.
6. Ejecuta **Policy Analyzer** comparando "antes" y "después" y documenta las diferencias.

**Entregable:** informe con capturas del inventario antes/después y la comparativa de Policy Analyzer.

### 🧪 Laboratorio práctico 1.2 — AppLocker en modo auditoría

1. En la VM, crea reglas por defecto de AppLocker y una regla de **editor** para una aplicación de tu elección.
2. Configura las reglas en modo **Audit only** y arranca el servicio `AppIDSvc`.
3. Ejecuta varios binarios (permitidos y no permitidos) y revisa los eventos en `Applications and Services Logs > Microsoft > Windows > AppLocker`.
4. Analiza qué se habría bloqueado en modo enforce.

### ✍️ Ejercicios propuestos

1. Explica la diferencia entre una regla de AppLocker por **ruta**, por **editor** y por **hash**, indicando cuál es más segura y por qué.
2. Justifica por qué se recomienda **XTS-AES 256** frente a otros modos en BitLocker y qué protección adicional aporta el **PIN de arranque**.
3. Enumera cinco eventos de seguridad de Windows relevantes para detectar un intento de acceso no autorizado, indicando su ID y significado.

---

## Unidad 2. Bastionado de sistemas operativos Linux

### 2.1. Superficie de ataque y estado inicial

En Linux, el primer paso es igualmente inventariar. Interesa conocer paquetes instalados, servicios activos, puertos a la escucha, usuarios con shell, tareas cron y binarios con permisos especiales:

```bash
# Servicios activos gestionados por systemd
systemctl list-units --type=service --state=running

# Sockets a la escucha con proceso propietario
ss -tulpen

# Usuarios con shell de inicio de sesión válida
awk -F: '$7 !~ /(nologin|false)$/ {print $1, $7}' /etc/passwd

# Paquetes instalados (Debian/Ubuntu)
apt list --installed 2>/dev/null | wc -l

# Binarios con bit SUID/SGID (potencial escalada de privilegios)
find / -perm -4000 -o -perm -2000 2>/dev/null -type f

# Tareas programadas del sistema y de usuarios
ls -la /etc/cron.* /etc/crontab
```

La regla general: **desinstalar servicios que no se usan** (`apt purge`), no solo pararlos, y deshabilitar los que deban permanecer instalados pero inactivos (`systemctl disable --now`).

### 2.2. Gestión de usuarios, sudo y separación de privilegios

El acceso directo como **root** debe evitarse. Se trabaja con cuentas nominales y se eleva mediante **sudo**, lo que aporta **trazabilidad** (cada acción queda registrada con el usuario real).

```bash
# Deshabilitar el inicio de sesión directo de root por SSH (ver 2.3)
# y bloquear la contraseña de root para forzar el uso de sudo
passwd -l root

# Regla sudo con mínimo privilegio: un usuario solo puede reiniciar un servicio
# Fichero: /etc/sudoers.d/webadmin  (validar SIEMPRE con visudo -c)
```

```ini
# /etc/sudoers.d/webadmin
# El grupo weboperators solo puede gestionar el servicio nginx, nada más
%weboperators ALL=(root) /usr/bin/systemctl restart nginx, /usr/bin/systemctl reload nginx
Defaults:%weboperators   logfile="/var/log/sudo_web.log", log_input, log_output
Defaults env_reset, timestamp_timeout=5, requiretty
```

> **Importante.** Editar sudoers siempre con `visudo` (o validar los fragmentos con `visudo -cf /etc/sudoers.d/webadmin`). Un error de sintaxis puede dejar el sistema sin capacidad de elevar privilegios.

Políticas de contraseñas y caducidad de cuentas:

```bash
# Política de caducidad por defecto en /etc/login.defs
#   PASS_MAX_DAYS 90 / PASS_MIN_DAYS 1 / PASS_WARN_AGE 7

# Aplicar caducidad a un usuario existente
chage -M 90 -m 1 -W 7 usuario

# Bloquear cuentas inactivas automáticamente tras 30 días sin uso
useradd -D -f 30
```

### 2.3. Endurecimiento de PAM

**PAM (Pluggable Authentication Modules)** gobierna la autenticación en Linux. Se endurece para exigir **complejidad de contraseñas** (`pam_pwquality`), **bloqueo tras intentos fallidos** (`pam_faillock`) e **historial** (`pam_pwhistory`).

```ini
# /etc/security/pwquality.conf  (usado por pam_pwquality)
minlen = 14
minclass = 4
maxrepeat = 3
dcredit = -1
ucredit = -1
lcredit = -1
ocredit = -1
dictcheck = 1
```

```bash
# /etc/security/faillock.conf  -> bloqueo tras 5 fallos durante 15 min
deny = 5
unlock_time = 900
fail_interval = 900
even_deny_root
```

En Debian/Ubuntu la integración de estos módulos se realiza en `/etc/pam.d/common-auth` y `common-password`. Ejemplo de línea de `pam_pwquality` y `pam_pwhistory`:

```
# /etc/pam.d/common-password (fragmento)
password  requisite   pam_pwquality.so retry=3
password  required    pam_pwhistory.so remember=24 use_authtok
password  [success=1 default=ignore] pam_unix.so obscure use_authtok try_first_pass yescrypt
```

### 2.4. Bastionado del servicio SSH

**SSH** es la puerta de entrada más habitual a un servidor Linux y, por tanto, un objetivo prioritario. Su endurecimiento se realiza en `/etc/ssh/sshd_config` (o mejor en un fichero dedicado en `/etc/ssh/sshd_config.d/`). Configuración de ejemplo endurecida:

```
# /etc/ssh/sshd_config.d/99-hardening.conf
# --- Autenticación ---
PermitRootLogin no
PasswordAuthentication no
PubkeyAuthentication yes
AuthenticationMethods publickey
KbdInteractiveAuthentication no
PermitEmptyPasswords no
MaxAuthTries 3
MaxSessions 4
LoginGraceTime 30

# --- Restricción de acceso ---
AllowGroups sshusers
AllowTcpForwarding no
X11Forwarding no
PermitTunnel no
ClientAliveInterval 300
ClientAliveCountMax 2

# --- Criptografía robusta (eliminar algoritmos débiles) ---
KexAlgorithms curve25519-sha256,curve25519-sha256@libssh.org
Ciphers chacha20-poly1305@openssh.com,aes256-gcm@openssh.com,aes128-gcm@openssh.com
MACs hmac-sha2-512-etm@openssh.com,hmac-sha2-256-etm@openssh.com
HostKeyAlgorithms ssh-ed25519,rsa-sha2-512

# --- Registro ---
LogLevel VERBOSE
Banner /etc/issue.net
```

Tras editar, **validar la sintaxis antes de recargar** para no perder el acceso:

```bash
# Validar la configuración
sshd -t

# Recargar sin cortar la sesión actual (¡mantén una sesión abierta de seguridad!)
systemctl reload ssh

# Generar par de claves ed25519 en el cliente y copiar la pública al servidor
ssh-keygen -t ed25519 -a 100 -C "admin@lab"
ssh-copy-id -i ~/.ssh/id_ed25519.pub usuario@servidor
```

Se complementa con **fail2ban** para mitigar la fuerza bruta bloqueando IPs con muchos intentos fallidos:

```ini
# /etc/fail2ban/jail.d/sshd.local
[sshd]
enabled  = true
maxretry = 4
findtime = 600
bantime  = 3600
```

### 2.5. Endurecimiento de systemd y del arranque

**systemd** permite aislar servicios con directivas de *sandboxing* que limitan lo que un servicio comprometido puede hacer. Se aplican mediante un fichero drop-in:

```bash
# Crear un override para un servicio, p.ej. una API interna
systemctl edit miapp.service
```

```ini
# /etc/systemd/system/miapp.service.d/hardening.conf
[Service]
# Ejecutar sin privilegios
User=miapp
Group=miapp
# Aislamiento del sistema de ficheros
ProtectSystem=strict
ProtectHome=true
ReadWritePaths=/var/lib/miapp
PrivateTmp=true
# Reducción de capacidades del kernel
NoNewPrivileges=true
CapabilityBoundingSet=
AmbientCapabilities=
# Restricciones adicionales
RestrictAddressFamilies=AF_INET AF_INET6
SystemCallFilter=@system-service
MemoryDenyWriteExecute=true
LockPersonality=true
```

```bash
# Analizar el nivel de exposición de un servicio (puntuación de 0.0 a 10)
systemd-analyze security miapp.service
```

### 2.6. Permisos, integridad y montaje seguro

El sistema de ficheros se endurece con **permisos restrictivos**, opciones de montaje seguras y control de integridad. Opciones de montaje recomendadas en `/etc/fstab` para particiones separadas:

```
# /etc/fstab (fragmento) -- separar /tmp, /var, /home mejora el control
/dev/sdb1  /tmp   ext4  defaults,nodev,nosuid,noexec  0 2
/dev/sdc1  /home  ext4  defaults,nodev,nosuid         0 2
tmpfs      /dev/shm tmpfs defaults,nodev,nosuid,noexec 0 0
```

- **`noexec`**: impide ejecutar binarios desde esa partición (útil en `/tmp`).
- **`nosuid`**: ignora bits SUID/SGID.
- **`nodev`**: ignora ficheros de dispositivo.

Para integridad de ficheros se usa **AIDE (Advanced Intrusion Detection Environment)**, que crea una base de datos de hashes y detecta cambios no autorizados:

```bash
apt install aide
aideinit                      # crea la base de datos de referencia
mv /var/lib/aide/aide.db.new /var/lib/aide/aide.db
aide --check                  # compara el estado actual con la referencia
```

### 2.7. Control de acceso obligatorio: SELinux y AppArmor

El **Control de Acceso Obligatorio (MAC)** confina los procesos incluso si se ejecutan como root, según una política definida por el sistema (no por el propietario del fichero, que es el modelo **DAC** tradicional).

- **SELinux** (RHEL, Fedora, CentOS): granular y potente. Modos `enforcing`, `permissive`, `disabled`.
- **AppArmor** (Debian, Ubuntu, SUSE): basado en perfiles por ruta, más sencillo de administrar.

```bash
# --- SELinux ---
getenforce                      # estado actual
setenforce 1                    # activar enforcing temporalmente
# Persistente en /etc/selinux/config -> SELINUX=enforcing
ausearch -m avc -ts recent      # ver denegaciones registradas
audit2allow -a                  # sugerir reglas (¡revisar antes de aplicar!)

# --- AppArmor ---
aa-status                       # perfiles cargados y su modo
aa-enforce /etc/apparmor.d/usr.sbin.nginx   # poner un perfil en enforce
aa-complain /etc/apparmor.d/usr.sbin.nginx  # modo aprendizaje (log, no bloquea)
```

> **Buena práctica.** No desactivar nunca SELinux/AppArmor para "resolver" un problema. Lo correcto es diagnosticar la denegación (`ausearch`, `journalctl`) y crear la política adecuada.

### 2.8. Auditoría con auditd

El demonio **auditd** registra eventos del kernel según reglas: accesos a ficheros sensibles, ejecución de comandos, cambios de configuración. Es la base de la trazabilidad forense en Linux.

```bash
apt install auditd audispd-plugins
```

```
# /etc/audit/rules.d/hardening.rules
# Vigilar modificaciones de ficheros críticos
-w /etc/passwd -p wa -k identity
-w /etc/shadow -p wa -k identity
-w /etc/sudoers -p wa -k privilege
-w /etc/ssh/sshd_config -p wa -k sshd
# Registrar el uso de comandos de gestión de usuarios
-w /usr/sbin/useradd -p x -k user_mgmt
-w /usr/bin/passwd  -p x -k passwd_change
# Cambios en las reglas de auditoría y bloqueo de configuración (al final)
-e 2
```

```bash
augenrules --load        # cargar las reglas
auditctl -l              # listar reglas activas
ausearch -k identity     # buscar eventos por clave
aureport --summary       # informe resumen
```

### 2.9. Actualizaciones y gestión de parches (patching)

Un sistema sin parches es vulnerable por definición. Se configuran **actualizaciones de seguridad automáticas** y una política de parcheo documentada.

```bash
# Debian/Ubuntu: actualizaciones de seguridad desatendidas
apt install unattended-upgrades
dpkg-reconfigure --priority=low unattended-upgrades
```

```
# /etc/apt/apt.conf.d/50unattended-upgrades (fragmento)
Unattended-Upgrade::Allowed-Origins {
    "${distro_id}:${distro_codename}-security";
};
Unattended-Upgrade::Automatic-Reboot "false";
Unattended-Upgrade::Remove-Unused-Dependencies "true";
```

Para RHEL/derivados se usa `dnf-automatic`. En todo caso, en servidores de producción los parches se **prueban en preproducción** antes de aplicarse, y se mantiene un **inventario de versiones** y un registro de aplicación.

### 2.10. Auditoría de cumplimiento con Lynis y OpenSCAP

**Lynis** es un auditor de hardening ligero, ideal para una revisión rápida y para obtener un **índice de endurecimiento**:

```bash
apt install lynis        # o clonar el repositorio oficial
lynis audit system
```

Ejemplo ilustrativo de salida de Lynis (extracto):

```
[+] Boot and services
    - systemd service manager                         [ FOUND ]
    - Check running services (systemctl)              [ DONE ]
      Result: found 18 running services

[+] SSH Support
    - SSH configuration                               [ FOUND ]
      - PermitRootLogin (set to NO)                   [ OK ]
      - PasswordAuthentication (set to NO)            [ OK ]

  Warnings (2):
  ! Consider hardening compilers by restricting access [HRDN-7222]
  ! iptables module(s) loaded, but no rules active     [FIRE-4512]

  Suggestions (14):
  * Install a file integrity tool to monitor changes   [FINT-4350]
  * Harden the system by removing setuid bits          [PRIV-4540]

  Lynis security scan details:
  Hardening index : 68 [############        ]
```

**OpenSCAP** evalúa el cumplimiento frente a políticas formales **SCAP/XCCDF** (por ejemplo, perfiles CIS o STIG contenidos en `scap-security-guide`), y puede **remediar** automáticamente:

```bash
apt install openscap-scanner ssg-debderived   # o ssg-* según distro

# Listar perfiles disponibles en la guía de seguridad
oscap info /usr/share/xml/scap/ssg/content/ssg-ubuntu2204-ds.xml

# Evaluar frente a un perfil CIS Level 1 y generar informe HTML
oscap xccdf eval \
  --profile xccdf_org.ssgproject.content_profile_cis_level1_server \
  --results resultados.xml --report informe.html \
  /usr/share/xml/scap/ssg/content/ssg-ubuntu2204-ds.xml

# Generar un script de remediación (bash) para los controles no conformes
oscap xccdf generate fix --profile cis_level1_server \
  --output remediar.sh resultados.xml
```

Extracto ilustrativo de un informe OpenSCAP:

```
Title   Ensure SSH root login is disabled
Rule    xccdf_org.ssgproject.content_rule_sshd_disable_root_login
Result  pass
Severity medium

Title   Ensure auditd service is enabled
Rule    xccdf_org.ssgproject.content_rule_service_auditd_enabled
Result  fail
Severity high

Score
  System score: 82.14%
```

### 2.11. Bastionado de dispositivos móviles (MDM)

Los dispositivos móviles (smartphones, tablets) son extensiones de la organización y deben gestionarse mediante **MDM (Mobile Device Management)** / **UEM (Unified Endpoint Management)** o **EMM**. Soluciones habituales: Microsoft Intune, VMware Workspace ONE, Jamf (Apple).

Controles de bastionado móvil típicos:

| Control | Objetivo |
|---|---|
| **Cifrado obligatorio** del almacenamiento | Confidencialidad en caso de pérdida/robo |
| **PIN/biometría** y bloqueo automático | Evitar acceso físico no autorizado |
| **Borrado remoto (remote wipe)** | Neutralizar dispositivos perdidos |
| **Separación trabajo/personal** (contenedores, perfiles de trabajo Android/APP protection) | Proteger datos corporativos (modelo BYOD) |
| **Restricción de tiendas de apps** y listas blancas | Reducir malware móvil |
| **Comprobación de cumplimiento** (parches, no root/jailbreak) | Denegar acceso a dispositivos comprometidos |
| **VPN por app / per-app VPN** | Proteger el tráfico corporativo |

El MDM se integra con el acceso condicional (ver Zero Trust): un dispositivo que no cumple la política de seguridad no obtiene acceso a los recursos corporativos.

### 🧪 Laboratorio práctico 2.1 — Bastionado integral de un servidor Debian/Ubuntu

**Objetivo:** endurecer una VM Debian/Ubuntu y medir la mejora con Lynis.

1. Despliega una VM **Debian 12 o Ubuntu 22.04** aislada. Ejecuta `lynis audit system` y anota el **hardening index** inicial.
2. Aplica: bloqueo de root, sudo con mínimo privilegio, `pam_pwquality`/`pam_faillock`.
3. Endurece **SSH** con el fichero de la sección 2.4 (usando claves ed25519) e instala **fail2ban**.
4. Configura opciones de montaje seguras para `/tmp` y `/dev/shm`, y activa **auditd** con reglas.
5. Habilita **unattended-upgrades** y activa **AppArmor** en enforce para al menos un servicio.
6. Vuelve a ejecutar `lynis audit system` y compara el índice. Documenta cada mejora.

**Entregable:** tabla "antes/después" con el índice de Lynis y justificación de cada control aplicado.

### 🧪 Laboratorio práctico 2.2 — Auditoría de cumplimiento CIS con OpenSCAP

1. Instala `openscap-scanner` y la `scap-security-guide` correspondiente a tu distro.
2. Evalúa la VM frente al perfil **CIS Level 1 Server** y genera el informe HTML.
3. Identifica los 5 hallazgos de mayor severidad. Genera el script de remediación.
4. Revisa el script (¡no lo apliques a ciegas!), aplícalo en la VM y vuelve a evaluar.
5. Presenta la evolución de la **puntuación (score)** y comenta qué controles quedaron sin resolver y por qué.

### ✍️ Ejercicios propuestos

1. Escribe una regla `sudoers` que permita al grupo `dbadmins` reiniciar únicamente PostgreSQL, registrando la sesión.
2. Justifica por qué se eliminan del `sshd_config` algoritmos como `diffie-hellman-group1-sha1` o cifrados `cbc`.
3. Compara **SELinux** y **AppArmor**: modelo, granularidad, distribuciones y facilidad de administración.
4. Diseña un conjunto de reglas `auditd` para vigilar la lectura del fichero `/etc/shadow` y la ejecución de `su`.

---

## Unidad 3. Bastionado de redes

### 3.1. Segmentación de red y VLAN

La **segmentación** divide la red en zonas aisladas para **contener** un compromiso: si un segmento cae, el atacante no alcanza libremente el resto (limita el **movimiento lateral**). Las herramientas principales son las **subredes IP** y las **VLAN (Virtual LAN, IEEE 802.1Q)**, que separan dominios de difusión a nivel de conmutador aunque compartan infraestructura física.

Un diseño de segmentación típico por zonas de confianza:

```
        INTERNET
           │
      [ Router / FW perimetral ]
           │
   ┌───────┼───────────────────────┐
   │       │                        │
[ DMZ ]  [ LAN usuarios ]      [ Servidores internos ]
VLAN 10   VLAN 20                VLAN 30
(web, correo,  (puestos de       (BD, AD, ficheros)
 DNS público)   trabajo)
           │
     [ VLAN 99 Gestión ]  <-- red de administración separada, acceso restringido
     [ VLAN 40 IoT/OT ]   <-- dispositivos no confiables, muy restringidos
```

Configuración de ejemplo de VLAN en un switch gestionable (sintaxis tipo Cisco IOS):

```
! Crear VLAN y nombrarlas
vlan 20
 name USUARIOS
vlan 30
 name SERVIDORES
! Puerto de acceso asignado a la VLAN de usuarios
interface GigabitEthernet0/5
 switchport mode access
 switchport access vlan 20
 spanning-tree portfast
 switchport port-security maximum 1
! Enlace troncal hacia el router (802.1Q)
interface GigabitEthernet0/1
 switchport mode trunk
 switchport trunk allowed vlan 20,30,99
```

> **Seguridad de VLAN.** Evitar la **VLAN 1** por defecto, deshabilitar puertos no usados, activar **port-security**, y proteger frente a ataques de **VLAN hopping** (deshabilitar DTP, fijar la native VLAN a una no usada).

### 3.2. Cortafuegos: filtrado de paquetes vs. inspección de estado

Un **cortafuegos (firewall)** controla el tráfico según reglas. Distinguimos:

- **Filtrado de paquetes sin estado (stateless)**: cada paquete se evalúa de forma aislada por sus cabeceras (IP origen/destino, puerto, protocolo). Es rápido pero limitado: requiere reglas explícitas para el tráfico de vuelta.
- **Inspección de estado (stateful)**: el cortafuegos mantiene una **tabla de conexiones** y reconoce si un paquete pertenece a una conexión ya establecida (`ESTABLISHED`, `RELATED`). Permite reglas más simples y seguras (se permite iniciar conexiones salientes y automáticamente se admite su respuesta).

La política recomendada es **denegar por defecto (default deny)** y permitir solo lo explícitamente necesario.

### 3.3. nftables (Linux moderno)

**nftables** es el marco de cortafuegos actual del kernel Linux (sucesor de iptables). Ruleset de ejemplo, con política restrictiva y conexiones de estado, para un servidor:

```
# /etc/nftables.conf
flush ruleset

table inet filter {
    chain input {
        type filter hook input priority 0; policy drop;

        # Permitir tráfico de conexiones ya establecidas o relacionadas
        ct state established,related accept
        # Descartar paquetes inválidos
        ct state invalid drop
        # Loopback
        iif "lo" accept

        # ICMP (ping) limitado
        ip protocol icmp icmp type echo-request limit rate 5/second accept
        ip6 nexthdr icmpv6 accept

        # SSH solo desde la red de gestión
        ip saddr 10.0.99.0/24 tcp dport 22 ct state new accept

        # Servicios públicos (web)
        tcp dport { 80, 443 } ct state new accept

        # Registrar y descartar el resto
        limit rate 3/minute log prefix "nft-drop: "
    }

    chain forward {
        type filter hook forward priority 0; policy drop;
    }

    chain output {
        type filter hook output priority 0; policy accept;
    }
}
```

```bash
# Validar y aplicar
nft -c -f /etc/nftables.conf     # comprobar sintaxis
systemctl enable --now nftables
nft list ruleset                 # ver reglas activas
```

### 3.4. iptables (clásico) y NAT

Aunque nftables es el estándar actual, **iptables** sigue siendo muy común. Ejemplo equivalente básico con estado y NAT de salida:

```bash
# Política por defecto restrictiva
iptables -P INPUT DROP
iptables -P FORWARD DROP
iptables -P OUTPUT ACCEPT

# Estado
iptables -A INPUT -m conntrack --ctstate ESTABLISHED,RELATED -j ACCEPT
iptables -A INPUT -i lo -j ACCEPT

# SSH desde gestión y HTTP/HTTPS público
iptables -A INPUT -s 10.0.99.0/24 -p tcp --dport 22 -m conntrack --ctstate NEW -j ACCEPT
iptables -A INPUT -p tcp -m multiport --dports 80,443 -m conntrack --ctstate NEW -j ACCEPT

# NAT de salida (enmascaramiento) para una LAN interna
iptables -t nat -A POSTROUTING -s 10.0.20.0/24 -o eth0 -j MASQUERADE

# Persistencia
apt install iptables-persistent
netfilter-persistent save
```

### 3.5. Firewall de Windows con seguridad avanzada

El **Firewall de Windows Defender con seguridad avanzada** también es *stateful* y se configura por perfiles (Dominio, Privado, Público) y por PowerShell o GPO:

```powershell
# Asegurar que el firewall está activo en todos los perfiles y bloquea entrantes por defecto
Set-NetFirewallProfile -Profile Domain,Private,Public -Enabled True `
  -DefaultInboundAction Block -DefaultOutboundAction Allow -LogAllowed True -LogBlocked True

# Permitir RDP solo desde la subred de gestión
New-NetFirewallRule -DisplayName "RDP-Gestion" -Direction Inbound -Protocol TCP `
  -LocalPort 3389 -RemoteAddress 10.0.99.0/24 -Action Allow

# Permitir HTTPS entrante
New-NetFirewallRule -DisplayName "HTTPS-In" -Direction Inbound -Protocol TCP `
  -LocalPort 443 -Action Allow

# Bloquear un protocolo heredado (ejemplo)
New-NetFirewallRule -DisplayName "Block-SMBv1-legacy" -Direction Inbound `
  -Protocol TCP -LocalPort 139 -Action Block
```

### 3.6. Listas de control de acceso (ACL)

Las **ACL** en dispositivos de red (routers/switches) filtran tráfico entre segmentos. Ejemplo de ACL extendida (Cisco IOS) que aísla la VLAN de usuarios de la de servidores salvo servicios concretos:

```
ip access-list extended USUARIOS-A-SERVIDORES
 permit tcp 10.0.20.0 0.0.0.255 host 10.0.30.10 eq 443    ! solo HTTPS a un servidor
 permit tcp 10.0.20.0 0.0.0.255 host 10.0.30.20 eq 53     ! DNS
 permit udp 10.0.20.0 0.0.0.255 host 10.0.30.20 eq 53
 deny   ip  10.0.20.0 0.0.0.255 10.0.30.0 0.0.0.255 log   ! bloquear y registrar el resto
 permit ip  any any
!
interface Vlan20
 ip access-group USUARIOS-A-SERVIDORES in
```

Conceptos clave de ACL: se evalúan **de arriba abajo** (el orden importa), hay un **deny implícito al final**, y se aplican por interfaz y dirección (`in`/`out`).

### 3.7. Arquitectura perimetral: DMZ

Una **DMZ (zona desmilitarizada)** es una subred intermedia que aloja los servicios accesibles desde Internet (web, correo entrante, DNS público), aislándolos de la red interna. Si un servicio de la DMZ es comprometido, el atacante **no accede directamente** a la LAN. El diseño más robusto usa **dos cortafuegos (screened subnet)**:

```
 INTERNET ──▶ [ FW externo ] ──▶  DMZ  ──▶ [ FW interno ] ──▶ LAN interna
                                (web,               (usuarios,
                                 correo,             servidores
                                 proxy inverso)      internos, BD)
```

Reglas de flujo típicas: Internet → DMZ (solo puertos publicados); DMZ → LAN **prohibido salvo excepciones muy controladas** (p. ej., el servidor web a la BD por un puerto concreto); LAN → DMZ/Internet permitido y filtrado.

### 3.8. Redes privadas virtuales (VPN)

Una **VPN** cifra el tráfico sobre una red no confiable (Internet) para dar acceso remoto seguro o interconectar sedes. Tecnologías principales:

| Tecnología | Tipo | Características |
|---|---|---|
| **IPSec** | Site-to-site y acceso remoto | Estándar, en capa 3; fases IKE; robusto pero complejo |
| **OpenVPN** | Acceso remoto principalmente | Sobre TLS (SSL), muy flexible, atraviesa NAT/firewalls bien |
| **WireGuard** | Ambos | Moderno, criptografía fija y moderna, muy simple y rápido |

**WireGuard** — configuración de ejemplo (servidor y cliente). Se genera un par de claves por extremo:

```bash
# Generar claves
wg genkey | tee servidor.key | wg pubkey > servidor.pub
wg genkey | tee cliente.key  | wg pubkey > cliente.pub
```

```ini
# /etc/wireguard/wg0.conf  (SERVIDOR)
[Interface]
Address = 10.10.0.1/24
ListenPort = 51820
PrivateKey = <CLAVE_PRIVADA_SERVIDOR>
# Enrutar/NAT del tráfico del túnel hacia la LAN
PostUp   = nft add rule inet filter forward iifname wg0 accept; \
           nft add rule ip nat postrouting oifname eth0 masquerade
PostDown = nft flush ruleset

[Peer]
# Cliente 1
PublicKey = <CLAVE_PUBLICA_CLIENTE>
AllowedIPs = 10.10.0.2/32
```

```ini
# cliente.conf  (CLIENTE)
[Interface]
Address = 10.10.0.2/24
PrivateKey = <CLAVE_PRIVADA_CLIENTE>
DNS = 10.0.30.20

[Peer]
PublicKey = <CLAVE_PUBLICA_SERVIDOR>
Endpoint = vpn.miempresa.es:51820
AllowedIPs = 10.0.0.0/16     # solo se enruta la red corporativa (split tunnel)
PersistentKeepalive = 25
```

```bash
# Levantar el túnel y verlo
wg-quick up wg0
wg show
```

**IPSec** — ejemplo de parámetros robustos (strongSwan, IKEv2, site-to-site) en `/etc/swanctl/swanctl.conf`:

```
connections {
   site-a-site {
      version = 2
      proposals = aes256gcm16-sha384-ecp384      # cifrado y grupo DH fuertes
      local_addrs  = 203.0.113.1
      remote_addrs = 198.51.100.1
      local  { auth = pubkey; certs = sedeA.pem }
      remote { auth = pubkey; id = sedeB.miempresa.es }
      children {
         net-net {
            local_ts  = 10.0.0.0/16
            remote_ts = 10.1.0.0/16
            esp_proposals = aes256gcm16-ecp384
            start_action = start
         }
      }
   }
}
```

### 3.9. Introducción a Zero Trust

El modelo **Zero Trust** (NIST SP 800-207) parte del principio **"nunca confíes, verifica siempre"**. Frente al modelo perimetral clásico (dentro = confiable), Zero Trust asume que **la red ya está comprometida** y verifica **cada** solicitud de acceso, independientemente de su origen.

Pilares:
- **Verificación explícita**: autenticar y autorizar cada acceso según identidad, dispositivo, ubicación y estado de riesgo.
- **Mínimo privilegio**: acceso justo a tiempo y justo lo necesario (JIT/JEA).
- **Asumir la brecha**: microsegmentación, cifrado extremo a extremo, telemetría y análisis continuos.

En la práctica se materializa con **microsegmentación**, **acceso condicional** basado en identidad y cumplimiento del dispositivo (integración MDM), **MFA obligatorio** y **ZTNA (Zero Trust Network Access)** en lugar de VPN de acceso total. Es el marco de referencia hacia el que evolucionan las arquitecturas modernas, complementando —no sustituyendo de golpe— la segmentación y el perímetro tradicionales.

### 🧪 Laboratorio práctico 3.1 — Cortafuegos perimetral con pfSense y DMZ

**Objetivo:** montar un perímetro con pfSense, una DMZ y reglas de mínima exposición.

1. Despliega una VM **pfSense** con tres interfaces: WAN, LAN (10.0.20.0/24) y DMZ (10.0.10.0/24).
2. Coloca un servidor web (Nginx) en la DMZ y un cliente en la LAN.
3. Crea reglas en pfSense:
   - WAN → DMZ: permitir solo 443/tcp al servidor web (port forward + regla).
   - DMZ → LAN: **bloquear todo** (para impedir el pivoting).
   - LAN → Internet: permitir HTTP/HTTPS y DNS; bloquear el resto.
4. Verifica con `curl`/navegador desde WAN y comprueba que la DMZ no puede iniciar conexiones a la LAN.
5. Activa el **log** de las reglas de bloqueo y revísalo.

**Entregable:** diagrama de la topología, capturas de las reglas y evidencia de que la DMZ está aislada de la LAN.

### 🧪 Laboratorio práctico 3.2 — VPN de acceso remoto con WireGuard

1. Configura un servidor **WireGuard** en una VM Linux (sección 3.8) y un cliente en otra máquina/VM.
2. Aplica **split tunnel** (solo se enruta la red corporativa).
3. Comprueba con `wg show` el handshake y transfiere un fichero por el túnel; captura tráfico con `tcpdump` para confirmar que va cifrado.
4. Añade una regla nftables que solo permita el puerto 51820/udp entrante para el servicio VPN.

### ✍️ Ejercicios propuestos

1. Explica con un ejemplo por qué un firewall **stateful** simplifica y hace más seguras las reglas frente a uno **stateless**.
2. Diseña el esquema de VLAN y las reglas de flujo (permitido/denegado) para una pyme con usuarios, servidores, DMZ y una red IoT.
3. Compara **WireGuard**, **OpenVPN** e **IPSec** en cuanto a criptografía, rendimiento, complejidad y casos de uso.
4. Redacta un ruleset **nftables** para un servidor de bases de datos que solo debe aceptar conexiones al puerto 5432 desde el servidor de aplicaciones (10.0.30.10).

---

## Unidad 4. Bastionado de servicios

### 4.1. Principios de configuración segura de servicios

Todo servicio expuesto debe: ejecutarse con **usuario sin privilegios**, escuchar **solo en las interfaces necesarias** (no en `0.0.0.0` si no hace falta), ocultar **banners/versiones**, aplicar **TLS moderno**, tener **timeouts y límites** contra abusos, y **registrar** su actividad. Se parte siempre de una configuración mínima y se añade lo imprescindible.

### 4.2. Servidores web: Nginx y Apache

El bastionado web se centra en **TLS robusto**, **cabeceras de seguridad HTTP** y **reducción de exposición**. Configuración endurecida de **Nginx**:

```nginx
# /etc/nginx/conf.d/hardening.conf
server {
    listen 443 ssl http2;
    server_name www.miempresa.es;

    # --- TLS moderno (solo 1.2 y 1.3) ---
    ssl_certificate     /etc/ssl/certs/miempresa.pem;
    ssl_certificate_key /etc/ssl/private/miempresa.key;
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_prefer_server_ciphers off;
    ssl_ciphers ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-CHACHA20-POLY1305;
    ssl_session_cache shared:SSL:10m;
    ssl_session_tickets off;
    ssl_stapling on;
    ssl_stapling_verify on;

    # --- Cabeceras de seguridad ---
    add_header Strict-Transport-Security "max-age=63072000; includeSubDomains; preload" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-Frame-Options "DENY" always;
    add_header Content-Security-Policy "default-src 'self'; object-src 'none'; frame-ancestors 'none'" always;
    add_header Referrer-Policy "strict-origin-when-cross-origin" always;
    add_header Permissions-Policy "geolocation=(), microphone=(), camera=()" always;

    # --- Reducción de exposición ---
    server_tokens off;                 # oculta la versión de Nginx
    client_max_body_size 10m;          # limita el tamaño de subidas
    limit_conn_zone $binary_remote_addr zone=addr:10m;
    limit_conn addr 20;
}

# Redirección forzada de HTTP a HTTPS
server {
    listen 80;
    server_name www.miempresa.es;
    return 301 https://$host$request_uri;
}
```

Explicación de las cabeceras clave:
- **HSTS (Strict-Transport-Security)**: obliga al navegador a usar siempre HTTPS, evitando ataques de degradación.
- **X-Content-Type-Options: nosniff**: impide que el navegador "adivine" tipos MIME.
- **X-Frame-Options / frame-ancestors**: protege frente a **clickjacking**.
- **Content-Security-Policy (CSP)**: mitiga **XSS** limitando de dónde se cargan recursos.

Equivalente en **Apache** (mod_ssl + mod_headers):

```apache
# TLS moderno
SSLProtocol             -all +TLSv1.2 +TLSv1.3
SSLCipherSuite          ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384
SSLHonorCipherOrder     off
# Ocultar versión
ServerTokens Prod
ServerSignature Off
# Cabeceras de seguridad
Header always set Strict-Transport-Security "max-age=63072000; includeSubDomains"
Header always set X-Content-Type-Options "nosniff"
Header always set X-Frame-Options "DENY"
Header always set Content-Security-Policy "default-src 'self'"
```

> **Verificación.** La calidad de la configuración TLS y de las cabeceras se comprueba con herramientas como **testssl.sh** (local, offline) o servicios de análisis. El objetivo es una calificación equivalente a "A".

### 4.3. Bases de datos: MySQL/MariaDB y PostgreSQL

El bastionado de bases de datos protege el activo más valioso: los datos. Principios: eliminar cuentas y bases por defecto, mínimo privilegio, cifrado en tránsito (TLS) y escucha restringida.

**MySQL/MariaDB** — el asistente `mysql_secure_installation` realiza el primer endurecimiento (elimina usuarios anónimos, la base `test`, restringe root). Ajustes en `my.cnf`:

```ini
# /etc/mysql/mysql.conf.d/hardening.cnf
[mysqld]
# Escuchar solo en la interfaz interna necesaria
bind-address = 10.0.30.11
# No cargar archivos locales (previene abuso de LOAD DATA LOCAL)
local-infile = 0
# Registrar errores y (en su caso) auditar
log_error = /var/log/mysql/error.log
# Forzar TLS en las conexiones
require_secure_transport = ON
ssl-cert = /etc/mysql/ssl/server-cert.pem
ssl-key  = /etc/mysql/ssl/server-key.pem
ssl-ca   = /etc/mysql/ssl/ca.pem
```

```sql
-- Mínimo privilegio: crear usuario acotado a una BD y a un host concreto
CREATE USER 'app'@'10.0.30.10' IDENTIFIED BY 'contraseña_robusta' REQUIRE SSL;
GRANT SELECT, INSERT, UPDATE, DELETE ON tienda.* TO 'app'@'10.0.30.10';
-- Nunca conceder ALL PRIVILEGES ni acceso desde '%'
FLUSH PRIVILEGES;
-- Revisar usuarios y hosts
SELECT user, host FROM mysql.user;
```

**PostgreSQL** — el control de acceso se basa en el fichero `pg_hba.conf` (Host-Based Authentication) y en `postgresql.conf`:

```
# /etc/postgresql/16/main/pg_hba.conf
# TYPE   DATABASE   USER    ADDRESS          METHOD
local    all        all                      scram-sha-256
hostssl  tienda     app     10.0.30.10/32    scram-sha-256    # solo el app server, con TLS
host     all        all     0.0.0.0/0        reject           # denegar el resto
```

```ini
# postgresql.conf
listen_addresses = '10.0.30.11'
password_encryption = scram-sha-256   # no MD5
ssl = on
ssl_cert_file = 'server.crt'
ssl_key_file  = 'server.key'
log_connections = on
log_disconnections = on
```

Buenas prácticas comunes: no exponer la BD a Internet (solo al servidor de aplicaciones vía firewall/ACL), copias de seguridad cifradas, rotación de credenciales y auditoría de accesos.

### 4.4. Correo electrónico: SPF, DKIM, DMARC y TLS

El correo es objetivo de **suplantación (spoofing)** y **phishing**. Tres registros DNS complementarios protegen el dominio:

- **SPF (Sender Policy Framework)**: declara qué servidores están autorizados a enviar correo del dominio.
- **DKIM (DomainKeys Identified Mail)**: firma criptográficamente los mensajes; el receptor verifica la firma con la clave pública publicada en DNS.
- **DMARC (Domain-based Message Authentication)**: indica qué hacer con el correo que no supera SPF/DKIM y dónde enviar informes.

Registros DNS de ejemplo (formato de zona):

```dns
; SPF: solo el servidor de correo y el proveedor autorizado pueden enviar
miempresa.es.        IN TXT "v=spf1 mx a:mail.miempresa.es include:_spf.proveedor.com -all"

; DKIM: clave pública del selector "s1"
s1._domainkey.miempresa.es. IN TXT "v=DKIM1; k=rsa; p=MIGfMA0GCSqGSIb3DQEBAQ...IDAQAB"

; DMARC: rechazar lo no autenticado y recibir informes agregados
_dmarc.miempresa.es. IN TXT "v=DMARC1; p=reject; rua=mailto:dmarc@miempresa.es; adkim=s; aspf=s; pct=100"
```

El endurecimiento del propio servidor SMTP (Postfix) incluye **TLS obligatorio/oportunista**, deshabilitar relay abierto y limitar exposición:

```
# /etc/postfix/main.cf (fragmento)
smtpd_tls_security_level = may            # STARTTLS oportunista en recepción
smtp_tls_security_level  = may            # cifrar salida cuando el destino lo soporte
smtpd_tls_cert_file = /etc/ssl/certs/mail.pem
smtpd_tls_key_file  = /etc/ssl/private/mail.key
smtpd_tls_protocols = !SSLv2, !SSLv3, !TLSv1, !TLSv1.1
# Evitar ser relay abierto: solo redes propias y usuarios autenticados
smtpd_relay_restrictions = permit_mynetworks, permit_sasl_authenticated, reject_unauth_destination
disable_vrfy_command = yes                # no revelar cuentas con VRFY
```

> **Despliegue seguro de DMARC.** Empezar con `p=none` (solo monitorización mediante informes `rua`), analizar el tráfico legítimo, y endurecer progresivamente a `p=quarantine` y finalmente `p=reject`.

### 4.5. DNS: DNSSEC y restricción de zona

El DNS es crítico y objetivo de **envenenamiento de caché** y **transferencias no autorizadas**. Bastionado en BIND9:

```
# /etc/bind/named.conf.options
options {
    // Recursión SOLO para clientes internos
    recursion yes;
    allow-recursion { 10.0.0.0/8; };
    // Autoritativo: sin recursión para el resto
    allow-query { any; };
    // Restringir transferencias de zona a los secundarios autorizados
    allow-transfer { 10.0.30.21; };
    // Ocultar la versión de BIND
    version "no disponible";
    // Validación DNSSEC en el resolutor
    dnssec-validation auto;
};
```

**DNSSEC** firma las zonas para garantizar la **autenticidad e integridad** de las respuestas mediante una cadena de confianza. Firmado de una zona:

```bash
# Generar claves ZSK y KSK
dnssec-keygen -a ECDSAP256SHA256 -n ZONE miempresa.es
dnssec-keygen -a ECDSAP256SHA256 -f KSK -n ZONE miempresa.es

# Firmar la zona
dnssec-signzone -A -3 $(head -c 16 /dev/urandom | xxd -p) \
  -N INCREMENT -o miempresa.es -t db.miempresa.es

# Publicar el registro DS en la zona padre (registrador) para completar la cadena
```

Medidas complementarias: usar **TSIG** (claves compartidas) para autenticar transferencias entre primario y secundario, limitar la tasa de respuestas (**RRL**) contra amplificación DDoS, y separar servidores **autoritativos** de **resolutores/recursivos**.

### 🧪 Laboratorio práctico 4.1 — Servidor web endurecido y evaluación TLS

**Objetivo:** publicar un sitio HTTPS con configuración TLS y cabeceras de nivel "A".

1. Instala **Nginx** en una VM. Genera un certificado (autofirmado en lab o con una CA interna).
2. Aplica la configuración de la sección 4.2: TLS 1.2/1.3, cifrados fuertes, HSTS, CSP, `server_tokens off`.
3. Fuerza la redirección de HTTP a HTTPS.
4. Ejecuta **testssl.sh** contra el servidor y revisa la calificación; corrige cualquier hallazgo (protocolos débiles, cifrados obsoletos).
5. Comprueba las cabeceras con `curl -I https://...` y verifica que aparecen HSTS, CSP, X-Frame-Options, etc.

**Entregable:** salida de testssl.sh, cabeceras HTTP y justificación de cada directiva.

### 🧪 Laboratorio práctico 4.2 — Protección antisuplantación de correo

1. En un dominio de laboratorio (o zona DNS local con BIND), publica registros **SPF**, **DKIM** y **DMARC** (empezando en `p=none`).
2. Configura DKIM en el MTA (p. ej., con OpenDKIM en Postfix) y firma un correo saliente.
3. Verifica en las cabeceras del mensaje recibido que aparecen `spf=pass`, `dkim=pass` y `dmarc=pass`.
4. Simula un envío desde un servidor no autorizado y comprueba que SPF/DMARC lo detectan.
5. Endurece DMARC a `p=quarantine` y documenta el proceso de despliegue progresivo.

### ✍️ Ejercicios propuestos

1. Explica el propósito de cada cabecera de seguridad HTTP (HSTS, CSP, X-Content-Type-Options, X-Frame-Options) y contra qué ataque protege.
2. Diseña las reglas de red y los privilegios SQL mínimos para que un servidor de aplicaciones acceda a una base de datos PostgreSQL sin exponerla a Internet.
3. Redacta los tres registros SPF, DKIM y DMARC para un dominio ficticio que usa su propio MX y un proveedor de marketing autorizado.
4. Describe qué protege **DNSSEC** y qué protege **TSIG**, y por qué son complementarios.

---

## Unidad 5. Gestión de identidades y accesos (IAM)

### 5.1. Directorio activo y jerarquía de administración por niveles (tiering)

**Active Directory (AD)** es el servicio de directorio de Windows para autenticación, autorización y administración centralizada. Su bastionado es prioritario porque comprometer AD equivale a comprometer todo el dominio.

El **modelo de administración por niveles (tiering)** de Microsoft segrega las credenciales privilegiadas para impedir que el robo de una credencial en un equipo de bajo valor permita escalar al control del dominio:

| Nivel | Activos | Cuentas administrativas |
|---|---|---|
| **Tier 0** | Controladores de dominio, AD CS, servidores de identidad | Admins de dominio/empresa. **Nunca** inician sesión en niveles inferiores |
| **Tier 1** | Servidores de aplicaciones, bases de datos | Admins de servidores. No administran puestos ni Tier 0 |
| **Tier 2** | Puestos de trabajo, dispositivos de usuario | Admins de soporte/helpdesk |

**Regla de oro:** una credencial de un nivel superior **jamás** debe usarse (ni siquiera para RDP) en un equipo de nivel inferior, porque quedaría expuesta a robo (pass-the-hash, dumping de LSASS). Se usan **PAW (Privileged Access Workstations)** dedicadas para administrar Tier 0.

Otras medidas de bastionado de AD: proteger las cuentas privilegiadas (grupo **Protected Users**, deshabilitar delegación), limpiar delegaciones peligrosas, deshabilitar protocolos heredados (NTLMv1), y auditar con herramientas como **PingCastle** o **Purple Knight** (evaluación de la postura de seguridad de AD).

### 5.2. Directivas de grupo (GPO) de seguridad en dominio

Las **GPO** aplican configuración de forma centralizada a usuarios y equipos según su ubicación en las **Unidades Organizativas (OU)**. Ejemplos de GPO de bastionado:

```powershell
# Crear y vincular una GPO a una OU (módulo GroupPolicy)
New-GPO -Name "Baseline-Servidores" | New-GPLink -Target "OU=Servidores,DC=miempresa,DC=es"

# Establecer un valor concreto por GPO (ej.: deshabilitar LLMNR en toda la OU)
Set-GPRegistryValue -Name "Baseline-Servidores" `
  -Key "HKLM\SOFTWARE\Policies\Microsoft\Windows NT\DNSClient" `
  -ValueName "EnableMulticast" -Type DWord -Value 0

# Forzar aplicación y verificar resultado en un equipo
gpupdate /force
gpresult /h C:\gpo-report.html
```

GPO de seguridad recomendadas: importar las **Microsoft Security Baselines** como GPO, restringir la pertenencia a grupos privilegiados (**Restricted Groups**), configurar la **directiva de auditoría avanzada**, desplegar reglas de **AppLocker** y de **firewall**, y aplicar la configuración de **LAPS**.

### 5.3. LAPS (Local Administrator Password Solution)

Un riesgo clásico es que **todos los equipos compartan la misma contraseña de administrador local**: si se compromete uno, el atacante se mueve lateralmente a todos. **Windows LAPS** resuelve esto **generando una contraseña aleatoria y única por equipo**, rotándola periódicamente y almacenándola de forma segura en **Active Directory** (o Azure AD/Entra ID), donde solo usuarios autorizados pueden leerla.

```powershell
# Windows LAPS (integrado en Windows moderno). Preparar el esquema de AD
Update-LapsADSchema

# Conceder a los equipos permiso para escribir su propia contraseña gestionada
Set-LapsADComputerSelfPermission -Identity "OU=Servidores,DC=miempresa,DC=es"

# La política (longitud, complejidad, frecuencia de rotación, backup en AD/Entra)
# se despliega por GPO en:  Computer > Policies > Admin Templates > System > LAPS

# Recuperar la contraseña gestionada de un equipo (usuario autorizado)
Get-LapsADPassword -Identity "SRV-APP01" -AsPlainText
```

### 5.4. LDAP y su bastionado

**LDAP (Lightweight Directory Access Protocol)** es el protocolo de acceso a directorios (AD lo implementa; también OpenLDAP en Linux). Su bastionado esencial:

- **Cifrar el canal**: usar **LDAPS** (LDAP sobre TLS, puerto 636) o **StartTLS**; nunca autenticar en LDAP en claro (puerto 389 sin TLS).
- **Exigir firma y sellado del canal** (channel binding) en AD para mitigar ataques de relay.
- **Deshabilitar binds anónimos**.
- Aplicar **mínimo privilegio** en las cuentas de servicio que consultan el directorio.

```
# OpenLDAP: forzar TLS y negar acceso anónimo (fragmento de configuración)
olcTLSCertificateFile: /etc/ldap/ssl/ldap.crt
olcTLSCertificateKeyFile: /etc/ldap/ssl/ldap.key
olcSecurity: tls=1                 # exigir TLS
# ACL: denegar lectura anónima de contraseñas
olcAccess: to attrs=userPassword by self write by anonymous auth by * none
```

### 5.5. AAA: RADIUS y TACACS+

**AAA** son las tres funciones de control de acceso centralizado:
- **Authentication (Autenticación)**: verificar la identidad.
- **Authorization (Autorización)**: determinar qué puede hacer.
- **Accounting (Registro/Contabilidad)**: registrar qué hizo.

Dos protocolos implementan AAA para el acceso a red y dispositivos:

| Característica | **RADIUS** | **TACACS+** |
|---|---|---|
| Transporte | UDP (1812/1813) | TCP (49) |
| Cifrado | Solo cifra la contraseña | Cifra **todo** el payload |
| AAA | Combina autenticación y autorización | **Separa** las tres funciones (AAA granular) |
| Uso típico | Acceso de red (802.1X, VPN, WiFi) | Administración de equipos de red (comandos por comando) |
| Estándar | Abierto (IETF) | Origen Cisco |

Un caso muy relevante para el bastionado de red es **802.1X** (control de acceso a puerto) con RADIUS: un dispositivo no se admite en la red hasta que se autentica, integrándose con AD como origen de identidades. En Linux, **FreeRADIUS** es la implementación de referencia; en Windows, el rol **NPS (Network Policy Server)**.

### 5.6. Políticas de contraseñas y autenticación multifactor (MFA)

Las contraseñas siguen siendo el eslabón débil. Recomendaciones actuales (alineadas con **NIST SP 800-63B**):

- Priorizar la **longitud** (frases de paso largas) sobre la complejidad forzada.
- Comprobar contra **listas de contraseñas comprometidas** y prohibir las débiles.
- **No forzar caducidad periódica** sin motivo; sí rotar ante indicios de compromiso.
- Almacenar siempre con **hash + sal** robusto (bcrypt, scrypt, Argon2).

La medida más eficaz es el **MFA (autenticación multifactor)**, que combina factores de distinto tipo:
- **Algo que sabes** (contraseña/PIN).
- **Algo que tienes** (token TOTP, llave de seguridad FIDO2, tarjeta).
- **Algo que eres** (biometría).

Preferir factores resistentes al **phishing**: llaves **FIDO2/WebAuthn** o tarjetas inteligentes, por encima de OTP por SMS (vulnerable a SIM swapping). El MFA debe ser **obligatorio para todo acceso administrativo y remoto** (VPN, RDP, consolas cloud), y se integra con el **acceso condicional** (Zero Trust).

### 🧪 Laboratorio práctico 5.1 — AD con tiering, GPO de seguridad y LAPS

**Objetivo:** desplegar un dominio de laboratorio con administración por niveles y LAPS.

1. Promociona un **Windows Server** a controlador de dominio en una VM aislada. Crea las OU `Tier0`, `Tier1`, `Tier2` y `Servidores`.
2. Crea cuentas administrativas separadas por nivel y una GPO que **impida** a las cuentas de Tier 0 iniciar sesión en equipos de Tier 2 (User Rights Assignment: "Deny log on").
3. Importa una **Microsoft Security Baseline** como GPO y vincúlala a la OU de servidores.
4. Despliega **Windows LAPS**: extiende el esquema, concede permisos y aplica la política por GPO.
5. Une un servidor miembro, ejecuta `gpupdate /force` y recupera su contraseña LAPS con `Get-LapsADPassword`.

**Entregable:** estructura de OU, capturas de la GPO de tiering y evidencia de la contraseña LAPS rotada por equipo.

### 🧪 Laboratorio práctico 5.2 — MFA/TOTP en el acceso SSH

1. En una VM Linux, instala el módulo PAM de **Google Authenticator** (`libpam-google-authenticator`).
2. Configura `sshd` y PAM para exigir **clave pública + TOTP** (segundo factor) usando `AuthenticationMethods publickey,keyboard-interactive`.
3. Registra el token en una app TOTP y verifica que el acceso requiere ambos factores.
4. Documenta cómo se guardan de forma segura los códigos de recuperación.

### ✍️ Ejercicios propuestos

1. Explica el modelo de **tiering** de AD y da un ejemplo concreto de por qué un admin de dominio no debe hacer RDP a un puesto de usuario.
2. Compara **RADIUS** y **TACACS+** e indica cuál elegirías para autenticar el acceso administrativo a switches y por qué.
3. Justifica, con base en NIST SP 800-63B, por qué las recomendaciones modernas priorizan la longitud frente a la caducidad periódica.
4. Enumera los tipos de factores MFA y ordénalos por resistencia al phishing, argumentando el orden.

---

## Proyecto integrador del módulo

**Título:** *Bastionado integral de la infraestructura de una pyme ficticia ("CloudLab, S.L.")*.

**Escenario.** CloudLab necesita securizar su infraestructura, compuesta por: un perímetro con acceso a Internet, una **DMZ** con servidor web y correo, una **LAN de usuarios**, una **red de servidores internos** (AD, base de datos, ficheros) y acceso remoto para teletrabajo. El proyecto se realiza íntegramente en un **laboratorio virtualizado aislado**.

**Entregables y fases:**

1. **Diseño y segmentación (Unidad 3).** Diagrama de red con VLAN, DMZ y red de gestión. Justificación de la segmentación y matriz de flujos permitidos/denegados.
2. **Perímetro y VPN (Unidad 3).** pfSense o nftables con política *default deny*, publicación de servicios de la DMZ y **VPN WireGuard** con MFA para teletrabajo.
3. **Bastionado de SO (Unidades 1 y 2).** Aplicar baselines a un **Windows Server** y a un **servidor Linux**; endurecer SSH, PAM, auditoría, cifrado de disco y control de aplicaciones.
4. **Servicios (Unidad 4).** Nginx con TLS "A" y cabeceras; base de datos con acceso restringido; DNS con restricción de zona; correo con SPF/DKIM/DMARC.
5. **Identidades (Unidad 5).** Dominio AD con **tiering**, GPO de seguridad, **LAPS** y **MFA** para accesos administrativos.
6. **Verificación (Unidad 2/5).** Auditoría de cumplimiento con **Lynis** y **OpenSCAP** (Linux) y **Policy Analyzer / SecBaseline** (Windows). Informe con hallazgos priorizados y plan de remediación.
7. **Documentación.** Memoria técnica con la trazabilidad de los controles frente a los **CIS Benchmarks** y al **ENS** (nivel MEDIO), incluyendo procedimientos de reversión.

---

## Evaluación y rúbrica

| Criterio | Peso | Insuficiente (0-4) | Aprobado (5-6) | Notable (7-8) | Sobresaliente (9-10) |
|---|---|---|---|---|---|
| **Bastionado de SO (RA1)** | 20% | No reduce superficie ni aplica baseline | Aplica algunos controles básicos | Aplica baseline completa y verifica | Automatiza, documenta y remedia hallazgos |
| **Bastionado de red (RA2)** | 20% | Sin segmentación ni firewall efectivo | Firewall básico y VLAN | Segmentación, DMZ y VPN correctas | Diseño Zero Trust y microsegmentación |
| **Bastionado de servicios (RA3)** | 20% | Servicios expuestos sin TLS | TLS y alguna cabecera | Servicios endurecidos y verificados | Config óptima (TLS "A", SPF/DKIM/DMARC, DNSSEC) |
| **IAM (RA4)** | 20% | Sin control de identidades | Contraseñas y GPO básicas | Tiering, LAPS y MFA | IAM completo con acceso condicional |
| **Auditoría y documentación (RA5)** | 20% | Sin verificación | Ejecuta una herramienta | Interpreta y prioriza hallazgos | Trazabilidad a CIS/ENS y remediación completa |

**Instrumentos de evaluación:** laboratorios entregables, proyecto integrador, informes de auditoría, pruebas objetivas de conceptos y defensa oral del proyecto. Se valorará especialmente la **reproducibilidad**, la **documentación** y el **rigor** en la aplicación de los marcos de referencia.

---

## Glosario

- **AAA:** Authentication, Authorization, Accounting. Modelo de control de acceso centralizado.
- **ACL:** Access Control List. Lista de reglas que permite o deniega tráfico/accesos.
- **AppLocker / WDAC:** Mecanismos de control de aplicaciones (allowlisting) en Windows.
- **ASR:** Attack Surface Reduction. Reglas de Microsoft Defender que bloquean comportamientos abusados por malware.
- **auditd:** Subsistema de auditoría del kernel Linux.
- **Baseline (línea base):** Conjunto documentado de configuraciones seguras mínimas.
- **BitLocker / LUKS:** Cifrado de disco en Windows / Linux.
- **CIS Benchmarks:** Guías de configuración segura del Center for Internet Security.
- **CCN-STIC:** Guías de seguridad del Centro Criptológico Nacional (España).
- **CSP:** Content Security Policy. Cabecera HTTP que mitiga XSS.
- **DAC / MAC:** Control de acceso discrecional / obligatorio.
- **DMZ:** Zona desmilitarizada; subred intermedia para servicios expuestos.
- **DKIM / SPF / DMARC:** Mecanismos DNS de autenticación y antisuplantación de correo.
- **DNSSEC:** Extensiones de seguridad del DNS (autenticidad e integridad).
- **ENS:** Esquema Nacional de Seguridad (RD 311/2022).
- **GPO:** Group Policy Object. Objeto de directiva de grupo de Windows/AD.
- **Hardening:** Bastionado o fortificación de sistemas.
- **HSTS:** HTTP Strict Transport Security. Fuerza el uso de HTTPS.
- **IPSec / OpenVPN / WireGuard:** Tecnologías de VPN cifrada.
- **LAPS:** Local Administrator Password Solution. Gestión de contraseñas de admin local únicas por equipo.
- **LDAP / LDAPS:** Protocolo de acceso a directorios / su variante sobre TLS.
- **Lynis:** Herramienta de auditoría de hardening en sistemas Unix/Linux.
- **MDM / UEM:** Gestión de dispositivos móviles / gestión unificada de puestos.
- **MFA:** Autenticación multifactor.
- **nftables / iptables:** Marcos de cortafuegos del kernel Linux.
- **OpenSCAP:** Herramienta de evaluación de cumplimiento SCAP/XCCDF.
- **PAM:** Pluggable Authentication Modules (Linux).
- **PAW:** Privileged Access Workstation. Puesto dedicado a administración privilegiada.
- **RADIUS / TACACS+:** Protocolos AAA.
- **SELinux / AppArmor:** Sistemas de control de acceso obligatorio en Linux.
- **STIG:** Security Technical Implementation Guide (DISA).
- **Stateful / Stateless:** Cortafuegos con/sin seguimiento de estado de conexión.
- **Superficie de ataque:** Conjunto de puntos por los que un sistema puede ser atacado.
- **Tiering:** Modelo de administración de AD por niveles de privilegio.
- **TLS:** Transport Layer Security. Cifrado del canal de comunicación.
- **VLAN:** Red de área local virtual (IEEE 802.1Q).
- **Zero Trust:** Modelo de seguridad "nunca confíes, verifica siempre" (NIST SP 800-207).

---

## Recursos y bibliografía

**Marcos, guías y normativa**
- **Center for Internet Security (CIS)** — *CIS Benchmarks* y herramienta *CIS-CAT*: https://www.cisecurity.org
- **Centro Criptológico Nacional (CCN-CERT)** — Serie de guías *CCN-STIC* (p. ej., 570 Windows, 610 Linux, 619 ENS): https://www.ccn-cert.cni.es
- **DISA** — *Security Technical Implementation Guides (STIG)* y contenido SCAP: https://public.cyber.mil/stigs/
- **Microsoft** — *Security Compliance Toolkit* y *Security Baselines* (LGPO, Policy Analyzer): documentación de Microsoft Learn.
- **NIST** — *SP 800-53* (controles), *SP 800-123* (bastionado de servidores), *SP 800-63B* (identidad y autenticación), *SP 800-207* (Zero Trust): https://csrc.nist.gov
- **Esquema Nacional de Seguridad (ENS)** — Real Decreto 311/2022.
- **Real Decreto 479/2020** — Curso de Especialización en Ciberseguridad en Entornos de las TI.

**Herramientas**
- **Lynis** (CISOfy) — auditoría de hardening Unix/Linux: https://cisofy.com/lynis/
- **OpenSCAP** y **SCAP Security Guide (ssg)** — evaluación de cumplimiento: https://www.open-scap.org
- **nftables** — documentación del proyecto Netfilter: https://wiki.nftables.org
- **WireGuard** — https://www.wireguard.com ; **strongSwan** (IPSec) — https://www.strongswan.org
- **pfSense** — https://www.pfsense.org
- **testssl.sh** — comprobación de configuración TLS: https://testssl.sh
- **fail2ban**, **AIDE**, **FreeRADIUS**, **BIND9/OpenDKIM/Postfix** — documentación oficial de cada proyecto.
- **PingCastle** / **Purple Knight** — evaluación de la postura de seguridad de Active Directory.

**Buenas prácticas y referencia de configuración**
- **OWASP** — *Secure Headers Project* y guías de configuración TLS.
- **Mozilla SSL Configuration Generator** — plantillas de configuración TLS para Nginx/Apache.
- **MITRE ATT&CK** — matriz de técnicas adversarias como referencia para priorizar mitigaciones defensivas.
