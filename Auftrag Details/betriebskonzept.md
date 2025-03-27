# **Betriebskonzept**

## **1\. Einleitung**

| Projektname | Cloud-Lösung Orladikofen |
| :---- | :---- |
| Version | 1.0 |
| Erstellt am | 20.03.2025 |
| Autor | [Tri Duc Phi-Tien Nguyen](mailto:tri.nguyen@bbzbl-it.ch) |
| Freigabe durch | [Tri Duc Phi-Tien Nguyen](mailto:tri.nguyen@bbzbl-it.ch) |

Für die Schule Primarschule Orladikofen wird vom Systemhaus Orladikofen eine neue IT-Infrastruktur eingerichtet, die hauptsächlich in der Cloud läuft.  
Dieses Betriebskonzept gibt eine Übersicht über die Einrichtung der neuen IT-Infrastruktur.

## **2\. Ziele**

| Nr. | Ziel | Beschreibung |
| :---- | :---- | :---- |
| 01 | Cloud-basierte Lösung | Die Lösung soll als Cloud-basierte Anwendung bereitgestellt werden, um Flexibilität und Skalierbarkeit zu gewährleisten. |
| 02 | Benutzerfreundlichkeit | Die Lösung muss für Benutzer mit unterschiedlichen IT-Kenntnissen (Lehrpersonen, Schulleitung, Eltern, Schüler) einfach zu bedienen sein. |
| 03 | Einheitliche Kommunikationsplattform | Die Lösung muss Funktionen zur gemeinsamen Bearbeitung von Dokumenten sowie zum Informationsaustausch enthalten. |
| 04 | Datensicherheit | Die Lösung muss die Sicherheit der Daten gewährleisten und die Datenschutzrichtlinien (DSGVO) einhalten. |
| 05 | Rollenbasierter Zugriff | Die Lösung muss einen rollenbasierten Zugriff auf Daten ermöglichen, um die Vertraulichkeit zu gewährleisten (z.B. unterschiedliche Berechtigungen für Eltern, Lehrpersonen, Schulleitung, Schüler). |
| 06 | Externer Zugriff | Die Lösung muss einen sicheren externen Zugriff auf Daten und Funktionen ermöglichen. |
| 07 | Skalierbarkeit | Die Lösung muss in der Lage sein, mit dem Wachstum der Schule und der zunehmenden Anzahl von Benutzern zu skalieren. |
| 08 | Schulung und Support | Eine angemessene Schulung sowie ein unterstützender Support müssen für die Benutzer bereitgestellt werden. |
| 09 | Architekturzeichnung | Eine detaillierte Architekturzeichnung der Cloud-Lösung muss erstellt werden. |
| 10 | Monitoring | Die Lösung muss Funktionen für Monitoring, Logging und Alarmierung beinhalten, um einen reibungslosen Betrieb sicherzustellen. |
| 11 | Remote Management | Die Lösung soll Remote-Management-Funktionen unterstützen. |
| 12 | Hochverfügbarkeit und Backup | Die Lösung muss Hochverfügbarkeit und regelmässige Backups der Daten gewährleisten. |

.

## **3\. Systemarchitektur**

### **3.1 Übersicht**

| Nr.  | Systemkomponente | Beschreibung |
| :---- | :---- | :---- |
| 01  | Microsoft Entra ID | cloudbasiertes Identitätsmanagement |
| 02 | Microsoft Intune | Verwaltung und Sicherung aller Schulgeräte (OneDrive KFM) |
| 03 | Windows Autopilot | automatisierte Gerätebereitstellung |
| 04 | Microsoft 365 | (Exchange Online, Teams, SharePoint, OneDrive) für Kommunikation und Zusammenarbeit |

### **3.2 Architekturdiagramm**

Bild Architekturdiagramm.png im Zip-File enthalten

## **4 Administratives**

### **4.1 Verantwortlichkeiten und Rollenverteilung**

Das IT-Team besteht aus 3 Mitarbeitern mit jeweils definierten Verantwortlichkeiten.

| Hauptverantwortlicher:  Phi-Tien Nguyen | Gesamtverantwortung für die Cloud-Lösung und die IT-Infrastruktur der Schule. Überwachung und Wartung der Systeme (Microsoft Entra ID, Intune, Microsoft 365). Ansprechpartner für die Schulleitung |
| :---- | :---- |
| IT-Mitarbeiter:Nishanth Gonukula | Datenschutz Verantwortlicher. Benutzerunterstützung (Helpdesk, Supportanfragen). Verwaltung von Benutzerkonten und \-berechtigungen. Unterstützung bei der Gerätebereitstellung (Windows Autopilot). |
| IT-Mitarbeiter:Thiago Torrisi | Implementierung und Überwachung der Sicherheitsrichtlinien (DSGVO). Benutzerunterstützung (Helpdesk, Supportanfragen). Verwaltung von Benutzerkonten und \-berechtigungen. Unterstützung bei der Gerätebereitstellung (Windows Autopilot). |

### **4.2 Supportprozesse**

| Dienst | Helpdesk |
| :---- | :---- |
| Kontakt | Telefon: 061 123 45 67E-Mail: support@orladikofen.ch |
| Betriebszeiten | Montag bis Freitag 08:00 \- 17:00 |

| Dienst | Azure Support |
| :---- | :---- |
| Kontakt | Telefon: 061 321  45 67E-Mail: schweiz@azure-support.com |
| Betriebszeiten | Montag bis Sonntag 06:00 \- 22:00 |

