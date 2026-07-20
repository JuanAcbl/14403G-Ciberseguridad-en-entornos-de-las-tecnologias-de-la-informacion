# Curso de Especialización en Ciberseguridad en Entornos de las Tecnologías de la Información

Apuntes completos y desarrollados del **Curso de Especialización en Ciberseguridad en Entornos de las Tecnologías de la Información**, regulado por el **Real Decreto 479/2020, de 7 de abril** (publicado en el BOE núm. 134, de 13 de mayo de 2020).

Este repositorio recoge el temario oficial de los seis módulos profesionales, **desarrollado en profundidad** con teoría explicada, ejemplos ilustrativos, **laboratorios prácticos reproducibles** y ejercicios propuestos, con la orientación de un curso de **720 horas**.

> ⚠️ **Aviso ético y legal.** Todo el material práctico (escaneos, explotación, análisis de malware, auditoría inalámbrica, etc.) está pensado **exclusivamente para entornos de laboratorio propios o expresamente autorizados**, en redes aisladas, con fines educativos y defensivos. El uso de estas técnicas contra sistemas de terceros sin autorización por escrito es ilegal (arts. 197 bis/ter y 264 del Código Penal, entre otros). Actúa siempre con autorización, ética y respeto a la legalidad y al RGPD.

---

## 📚 Módulos del curso

| Código | Módulo | Contenido |
|--------|--------|-----------|
| **5021** | [Incidentes de ciberseguridad](5021-incidentes-ciberseguridad.md) | Prevención, detección, respuesta a incidentes (NIST/SANS), SIEM, IDS/IPS, IOC, continuidad y recuperación (BCP/DRP, RTO/RPO). |
| **5022** | [Bastionado de redes y sistemas](5022-bastionado-redes-sistemas.md) | Hardening de Windows y Linux, segmentación y firewalls, VPN, securización de servicios (web, BBDD, correo, DNS), gestión de identidades (AD, LDAP, AAA). |
| **5023** | [Puesta en producción segura](5023-puesta-produccion-segura.md) | S-SDLC y DevSecOps, SAST/DAST/SCA, OWASP Top 10 (código vulnerable → corregido), seguridad en la nube y contenedores (Docker, Kubernetes). |
| **5024** | [Análisis forense informático](5024-analisis-forense-informatico.md) | Metodología y cadena de custodia, adquisición de RAM y disco, análisis con Volatility 3 / Autopsy, timelines, red y malware, informe pericial. |
| **5025** | [Hacking ético](5025-hacking-etico.md) | Marco ético-legal, reconocimiento y enumeración (nmap, OSINT), explotación (Metasploit), post-explotación, auditoría Wi-Fi e ingeniería social. |
| **5026** | [Normativa de ciberseguridad](5026-normativa-ciberseguridad.md) | RGPD y LOPDGDD, Directiva NIS/NIS2, Esquema Nacional de Seguridad (ENS), ISO 27000, NIST CSF y gestión de riesgos (MAGERIT). |

---

## 🧭 Cómo usar estos apuntes

Cada módulo es un documento autocontenido que sigue la misma estructura:

- **Introducción y ficha del módulo** (horas orientativas, prerrequisitos, competencias).
- **Resultados de Aprendizaje (RA)** en estilo BOE con sus criterios de evaluación.
- **Unidades didácticas** desarrolladas, con:
  - 🧪 **Laboratorios prácticos** reproducibles (comandos reales sobre entornos autorizados).
  - ✍️ **Ejercicios propuestos** para consolidar cada bloque.
  - 🛡️ **Contramedidas / defensa** (en los módulos ofensivos), para entender cómo mitigar cada técnica.
- **Proyecto integrador**, **evaluación y rúbrica**, **glosario** y **recursos/bibliografía**.

## 🧪 Entorno de laboratorio recomendado

Un laboratorio virtualizado y **aislado** (red *host-only* / sin salida a Internet salvo cuando sea imprescindible y controlado):

- **Virtualización:** VirtualBox o VMware.
- **Dianas de práctica legales:** Metasploitable 2/3, DVWA, OWASP Juice Shop, WebGoat, VulnHub.
- **Distribuciones de trabajo:** Kali Linux (auditoría), CAINE / SANS SIFT (forense), Security Onion (monitorización).
- **Datasets públicos:** Digital Corpora y NIST CFReDS (forense), Malware-Traffic-Analysis (PCAP).
- **Plataformas de entrenamiento con permiso explícito:** TryHackMe, Hack The Box.

## 📖 Marco normativo y organismos de referencia

- **RD 479/2020** — norma que regula el curso de especialización.
- **INCIBE / INCIBE-CERT** y **CCN-CERT** (Centro Criptológico Nacional).
- **AEPD** (Agencia Española de Protección de Datos).
- **ENISA** (Agencia de la Unión Europea para la Ciberseguridad).
- Marcos: **MITRE ATT&CK**, **NIST** (SP 800-61, 800-115, CSF), **OWASP**, **ISO/IEC 27000**, **CIS Benchmarks**, **MAGERIT**.

---

> **Nota:** parte del material normativo (p. ej., el estado de transposición de **NIS2** en España y la codificación exacta de las medidas del **Anexo II del RD 311/2022 del ENS**) evoluciona con el tiempo. Conviene cotejar estos puntos con el texto vigente antes de impartir.

---

*Documentación estructurada para GitHub · Basada en el Real Decreto 479/2020 (BOE núm. 134).*
