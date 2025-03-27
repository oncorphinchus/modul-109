**Sicherheitskonzept für Schule Orladikofen** 

| Projektname | Cloud-Lösung Orladikofen |
| :---- | :---- |
| Version | 0.1 |
| Erstellt am | 20.03.2025 |
| Autor | [Thiago Torrisi](mailto:thiago.torrisi@bbzbl-it.ch) |
| Freigabe durch | [Thiago Torrisi](mailto:thiago.torrisi@bbzbl-it.ch) |

**1\. Ziel**   
Schutz der Schuldaten gemäss ihrer Vertraulichkeitsstufe vor unbefugtem Zugriff, Verlust oder Missbrauch.   
    
**2\. Verantwortlichkeiten** 

* **IT-Admin**: Umsetzung der technischen Sicherheitsmassnahmen.   
* **Lehrer**: Einhaltung der Sicherheitsrichtlinien.   
* **Schulleitung:** Überprüfung und Umsetzung des Sicherheitskonzepts.   
* **Schüler:** Einsicht auf Noten & Absenzen.   
   

**3\. Datenklassifizierung & Schutzmassnahmen**   
Daten werden in vier Vertraulichkeitsstufen eingeteilt: 

| Datenklasse  | Beispiele  | Zugriffsregelung  | Schutzmassnahmen  |
| ----- | ----- | ----- | ----- |
| Klasse1,  Geheim  | Geb. Urkunde, Gesundheitsdaten, Authentifizierungsdaten, Impfpass, Krankenkasse-Karte, Sorgerecht, Jugendhilfe  |  Schulleitung     | Starke Verschlüsselung, separate Speicherung, Zugriffskontrolle mit Logging  |
| Klasse 2,  Vertraulich  | Personaldaten, Noten, Zeugnisse, Absenzen, Vermerke, Prüfungen  | Eltern  Schüler  Lehrer  | Verschlüsselung, eingeschränkter Zugriff, 2FA  |
| Klasse 3,  Intern  | Kontaktdaten Schüler/Eltern, Schul-Mail Adressen, Stundenplan, Mittagstisch-Liste,  | Lehrer  Hauswart  | Passwortschutz, Zugriff nur im Firmennetzwerk  |
| Klasse 4,  Öffentlich  | Webseite, Öffnungszeiten, Telefonnummer Kundendienst, Adresse  | Jeder darf zugreifen  | Keine Massnahmen nötig  |

 

Sicherheits Umsetzung

| Abschnitt: | Beschreibung: |
| :---- | :---- |
| **Zugriffskontrolle**  | Zugriff wird basierend auf der Datenklasse vergeben.  Nutzung von sicheren Passwörter und Zwei-Faktor-Authentifizierung für vertrauliche und geheime Daten sind ein Muss.  Passwörter werden jedes halbe Jahr geändert als Schutzmassnahme.  Regelmässige Überprüfung und Anpassung von Zugriffsrechten.  |
| **Datensicherung**: | **Intern, vertraulich und geheim**: Tägliche Backups mit sicherer Speicherung.  **Geheim**: Backups nur an stark gesicherten Orten. Daten bleiben in der Schweiz. Regelmässige Tests zur Wiederherstellung der Daten. |
| **Cyberangriff Massnahmen:** | **Intern & vertraulich**: Firewalls, Virenschutz, sichere Netzwerke.  **Geheim**: Zusätzliche Verschlüsselung und getrennte Netzwerke, Zugriff Compliant.  Regelmässige Schulungen zu Phishing für die Lehrer.  |
| **Notfallmassnahmen** | Sicherheitsvorfälle müssen sofort der IT-Abteilung gemeldet werden.  Schnellstmögliche Wiederherstellung von Daten entsprechend ihrer Kritikalität.  Geheime Daten erfordern eine gesonderte Eskalation und Dokumentation.  Datenbank mit Prüfungen nach Breach wird GPO gesetzt oder entfernt. |
| **Schulung & Sensibilisierung:** | Alle Lehrer werden im Thema Datenschutz und Sicherheitsrichtlinien geschult.  Spezielle Schulungen für Mitglieder der Schulleitung, welche Zugriff auf vertrauliche und geheime Daten hat |
| **Überprüfung und Aktualisierung**  | Jährliche Überprüfung des Sicherheitskonzept und falls notwendig änderungen vornehmen  Anpassungen bei neuen Bedrohungen oder technologischen Entwicklungen. (Quantencomputer) |

 

