

| Projektname | Cloud-Lösung Orladikofen |
| :---- | :---- |
| Version | 0.1 |
| Erstellt am | 20.03.2025 |
| Autor | [Nishanth Gonukula](mailto:nishanth.gonukula@bbzbl-it.ch) |
| Freigabe durch | [Nishanth Gonukula](mailto:nishanth.gonukula@bbzbl-it.ch) |

**Ausgangslage**

Die Primarschule Orladikofen plant aufgrund ihres Wachstums eine digitale Transformation. Ziel ist es, die Zusammenarbeit, Flexibilität und Nutzung moderner Technologien zu optimieren. Die bestehende Infrastruktur, die auf lokalen Computern mit persönlichen Ablagen basiert, ist für die neue Arbeitsweise nicht mehr geeignet. Eine Cloud Lösung soll eingeführt werden, um den internen und externen Datenzugriff zu ermöglichen und die Kommunikation sowie Kollaboration zu verbessern. Zudem soll die Lösung in der Cloud Datenschutzanforderungen erfüllen und für alle Nutzergruppen einfach bedienbar sein.

| Ist-Zustand(Ausgangslage) | Beschreibung |
| :---- | :---- |
| **Infrastruktur:** | Mit begrenztem Platz werden Computer lokal in einem persönlichen Ablagesystem im Büro aufbewahrt. Der Platzmangel sowie die Notwendigkeit, intern und extern auf Informationen zuzugreifen, machen eine optimale und flexible Lösung für die Datenspeicherung und \-nutzung erforderlich. |
| **Zusammenarbeit:** | Sämtliche Aktivitäten, die derzeit an der Primarschule Orladikofen durchgeführt werden, sind auf die lokalen Computer beschränkt, daher ist die Kooperation weiterhin hängig. Um effizienter Theorie und Praxis zu kombinieren, müsste sich auch die Kommunikation ändern. Vermutlich erfolgt die Hauptkommunikation direkt; so viele E-Mails wie nötig werden versendet. |
| **Digitale Kompetenz:** | Die Lehrkräfte haben wenig Kenntnisse in IT und ICT. Auch dort, im Schulleitungsbereich, kommt es zu Veränderungen, da eine zweite Person in die Schulleitung kommen wird. |
| **Datenschutz:** | Gleichzeitig unternimmt derzeit niemand Massnahmen zum Schutz der Daten, vor allem im digitalisierten Austausch mit den Eltern, der offensichtlich zunehmend wird. |
| **Wachstum:** | Die Primarschule Orladikofen ist nicht nur in diesem Punkt herausgefordert, sie werden von den raschen und schwer kontrollierbaren Entwicklungen auch sehr gefordert. |

| Soll-Zustand (Zielsetzungen) | Beschreibung |
| :---- | :---- |
| **Infrastruktur:** | Derzeit wird an einer Cloud-Lösung gearbeitet, die auf die speziellen Bedürfnisse der Schule ausgerichtet ist. Dadurch wird es möglich, dass die Daten sicher und flexibel sowohl intern als auch extern abgerufen werden können.  |
| **Zusammenarbeit:** | Die Zusammenarbeit ist momentan limitiert, da die Arbeit auf IT-Ressourcen an lokalen Computern beschränkt ist. Die Kommunikation erfolgt vermutlich vorwiegend persönlich oder via E-Mail, wodurch teilweise ineffiziente Abläufe entstehen können..  |
| **Digitale Kompetenz:** | Die Lösung muss einfach sein, so dass alle beteiligten Lehrpersonen, die Schulleitung sowie die Eltern mit wenig IT-Kenntnissen ohne weiteres Hand kostenlos nutzen können. Es braucht auch grosse Hilfe, um diese Schule in die digitale Transformation zu unterstützen.  |
| **Datenschutz:** | Der Austausch von Daten liegt in einem vermittelnden Kontext und setzt eine Erfüllung von Sicherheitsstandards zur Einhaltung des Datenschutzes voraus. Genauso wird beim Zugangssteuerung auch der berücksichtigenden Rolle der Eltern, dem schulischen Lehrpersonal und der Schulleitung Rechnung getragen, um eine rollenspezifische Datenzugriffssteuerung zu ermöglichen.  |
| **Sicherheit:** | Die Sicherheit des Netzwerkes erfordert besondere Aufmerksamkeit und wird konzentriert in der Präsentation behandelt, der kontrollierte Datenzugriffsleitung im Fokus steht. Des Weiteren werden Logging- und Alarmierungsmechanismen zur Überwachung von Sicherheitsvorfällen und der schnellen Reaktion darauf behandelt. Aus der Ferne können Administrationsaufgaben dank obiger Remote Management Funktionen einfach erledigt werden. Zum Schluss wird die Datensicherheit und der kontinuierliche Betrieb durch die Backup Strategie und die hochverfügbare Cloud Lösung betreut.  |

**Lösungsvarianten:**

| Variante 1 | Beschreibung | Vorteile |
| :---- | :---- | :---- |
| Identity-, Access Management | Microsoft Entra ID Dient als Verzeichnisdienst | braucht keinen klassischen Server komplett von überall erreichbar. |
| Geräteverwaltung | Microsoft Intune Verwaltet und schützt Geräte | Sicherheit Zentrale Verwaltung Sicherheit Automatisierung |
| Zusammenarbeit | Microsoft 365 Word PowerPoint Teams Outlook Excel | Geräteunabhängigkeit Automatische Updates Cloud-Speicher Synchronisierte Zusammenarbeit |
| Betriebssystem | Windows 11 | Mehr Produktivität Bessere Leistung Modernes Design |
| Gerätebereitstellung | Windows Autopilot Automatisiert die Geräteeinrichtung und Gerätebereitstellung | Einfache Integration Ermöglicht Remote-Arbeit |
| Cloud-Backup | OneDrive KFM Wichtige Ordner werden automatisch in die Cloud verschoben | Zugriff von überall Schutz vor Datenverlust Ständige Synchronisation Sparen von Speicherplatz Versionsverlauf für Dateien vorhanden |
| Tenant | Microsoft 365 Education Verwaltet Benutzer und Lizenzen und bietet Zugriff auf Office365 Apps | Zugriff auf Office Apps Cloud-Speicher Sichere Kommunikation |
| Schul-Domäne | orladikofen.ch Verwaltet zentral Benutzer und Geräte mit Zugriffs- und Sicherheitsrichtlinien | Sicherheit Erhöhte Datenschutzkontrolle Einfache Verwaltung |
| AD-Verbindung | Hybrid Azure AD Join Lokale AD wird mit Azure AD verbunden für die Verwaltung von Geräten | Erhöhte Sicherheit Flexibilität SSO |
| Serversysteme | Keine |  |
| Schutz | Windows Defender und Endpoint Security Schützen Geräte von Malware, Ransomware, Viren | Schutz vor Malware, Ransomware, Viren Automatische Updates Netzwerkschutz |
| Netzwerkgeräte | Router Switch Firewall  Router: Verbinden Netzwerke und leiten Daten weiter Switch: Verbinden Geräten innerhalb eines Netzwerks Firewall: Schützen das Netzwerk | Effiziente und sichere Netzwerkkommunikation |

| Variante 2 | Beschreibung | Vorteile |
| :---- | :---- | :---- |
| Identity-, Access Management | Active Directory Verwalten Benutzer und steuert den Zugriff auf Netzwerkressourcen | Skaliarbarkeit Einfache Verwaltung Integration Sicherheit |
| Geräteverwaltung | Active Directory, Gruppenrichtlinien Verwalten Geräte zentral, setzen Sicherheitslinien durch, steuern Einstellungen | Automatische Konfiguration Effiziente Verwaltung Zentrale Verwaltung |
| AD-Verbindung | Azure AD Connect Synchronisiert lokale AD-Daten mit Azure AD | SSO Einfache Integration Zentrale Benutzerverwaltung |
| Zusammenarbeit | Microsoft 365 Word PowerPoint Teams Outlook Excel | Geräteunabhängigkeit Automatische Updates Cloud-Speicher Synchronisierte Zusammenarbeit |
| Betriebssystem | Windows 11 |  |
| Schul-Domäne | orladikofen.ch Verwaltet zentral Benutzer und Geräte mit Zugriffs- und Sicherheitsrichtlinien | Sicherheit Erhöhte Datenschutzkontrolle Einfache Verwaltung |
| Tenant | Microsoft 365 Education Verwaltet Benutzer und Lizenzen und bietet Zugriff auf Office365 Apps | Zugriff auf Office Apps Cloud-Speicher Sichere Kommunikation |
| Serversysteme | Lokaler Server Stellt Netzwerkdienste, Speicher, Anwendungen bereit | Mehr Sicherheit Volle Kontrolle Schnelle und stabile Leistung |
| Schutz | Windows Defender und Endpoint Security Schützen Geräte von Malware, Ransomware, Viren | Schutz vor Malware, Ransomware, Viren Automatische Updates Netzwerkschutz |
| Netzwerkgeräte | Router Switch  Firewall NAS Router: Verbinden Netzwerke und leiten Daten weiter Switch: Verbinden Geräten innerhalb eines Netzwerks Firewall: Schützen das Netzwerk NAS: Speichert Daten zentral und ermöglicht anderen Geräten den Zugriff auf die Daten | Effiziente und sichere Netzwerkkommunikation |
| Backup | Lokal Speichert Daten auf physischen Geräten | Keine Abhängigkeit Volle Kontrolle Kostenersparnis |

Begründung Variante 1:  
Variante 1 umfasst eine moderne, cloudbasierte IT-Infrastruktur mit geringem Wartungsaufwand, hoher Sicherheit und verbesserter Skalierbarkeit. Lokale Server sind nicht mehr erforderlich, wenn Microsoft Entra ID und Intune verwendet werden. Dadurch verringert sich die Kosten- und Verwaltungsaufwand. Während Windows Autopilot die Gerätebereitstellung vereinfacht, sorgt OneDrive KFM für eine sichere Cloud-Sicherung.

Darüber hinaus umfasst die cloudbasierte Identitätsverwaltung fortschrittliche Sicherheitsfunktionen wie MFA und Conditional Access, was zu einer Reduktion von Angriffen und Datenverlusten führt. Im Vergleich dazu erfordert Variante 2 eine komplexere Verwaltung, die Wartung lokaler Server und ist anfälliger für Sicherheitsrisiken.

Das ist der Grund, weshalb wir uns für Variante 1 für die Primarschule Orladikofen entschieden haben.