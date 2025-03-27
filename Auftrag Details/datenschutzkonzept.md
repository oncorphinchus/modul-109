

| Projektname | Cloud-Lösung Orladikofen |
| :---- | :---- |
| Version | 0.1 |
| Erstellt am | 20.03.2025 |
| Autor | [Nishanth Gonukula](mailto:nishanth.gonukula@bbzbl-it.ch) |
| Freigabe durch | [Nishanth Gonukula](mailto:nishanth.gonukula@bbzbl-it.ch) |

**1\. Datenschutzkonzept**

Die Primarschule Orladikofen plant aufgrund ihrer Erweiterung eine digitale Transformation. Es soll die Zusammenarbeit, Flexibilität und Nutzung vorhandener Technologie verbessern. Die bestehende Infrastruktur, bestehend aus lokalen Computern mit separaten Arbeitsbereichen, reicht für den neuen Arbeitsstil nicht mehr aus. Um den Zugriff auf interne und externe Daten zu ermöglichen sowie die Kommunikation und Zusammenarbeit zu verbessern, wird eine Cloud-Lösung eingeführt. Darüber hinaus soll die Lösung in der Cloud auch die Anforderungen des Datenschutzes erfüllen und allen Nutzergruppen gerecht werden, die einfach zu bedienen sein sollen.

**1.1 Schutzmassnahmen zum Datenschutz**

Klassifikation der Daten und deren Zugriffsüberwachung.  
Klassifikationen:

- Geheim  
- Vertraulich  
- Intern  
- Öffentlich

Die von Eltern, Schülern und Lehrern verwendeten Rollen für den Zugriff müssen gut geregelt sein.  
Erstellung rollen- und gruppenspezifischer Berechtigungen innerhalb der Microsoft Entra ID, die wichtige Zugriffsrechte und Schnittstellen dafür festlegen.  
Gleichzeitig ist eine Ressourcenzuteilung im Sinne einer Mindestberechtigung erforderlich.

**Datenspeicherung und Sicherheit**

Die zu speichernden bzw. zu versendenden Daten werden durch eine End-to-End-Verschlüsselung geschützt.  
Zusätzlich kann auch eine Azure-Informationsschutz-Klassifizierung aktiviert werden, um sensible Daten zu markieren und zu schützen.  
Der Schutz des Benutzerprofils erfolgt durch die OneDrive Known Folder Move (KFM).  
Zugangs- und Ressourcenautorisierungsicherheit  
Zusammenwirkend soll die Verbesserung des Schutzniveaus jeden Angriff auf diese sinnvollen Zugänge durch Multi-Faktor-Authentifizierung (MFA) abgewehrt werden.  
Bei der Anmeldung verwenden wir Windows Hello for Business, welches es ermöglicht, sich biometrisch und ohne Passwort anzumelden.  
Zusätzlich werden Passwörter abgewechselt und deren Sicherheit überwacht.

**1.2 Technische Umsetzung: Schritte zur Gewährleistung des Datenschutzes**

Kontrollieren Sie die Identität und den Zugriff zur Installation:

- Einstellungen für Microsoft Entra ID-Rollen und Gruppen  
- Aktivieren der Richtlinien für bedingten Zugriff zur Einschränkung des Zugriffs  
- Verschlüsselung der zu implementierenden Daten:  
- Aktivieren Sie die Verschlüsselung von Microsoft 365-Daten  
- Sicherheit von Geräten und Netzwerken zur Aufrechterhaltung von:  
- Verwaltung der Schulbedürfnisse mit Microsoft Intune  
- Aktivieren der Endpunktsicherheit des Windows Defender  
- Schulung und Sensibilisierung der Benutzer:  
- Lehrende und Studierende werden regelmässig zum sicheren Umgang mit Daten geschult.  
- Es werden Datenschutzrichtlinien und Verhaltensrichtlinien bereitgestellt.

