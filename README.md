# Cloud Classroom Catalyst

Ein Projekt zur Analyse und Implementierung einer Cloud-Lösung für die Primarschule Orladikofen.

## Über das Projekt

Die Primarschule Orladikofen plant eine digitale Transformation für die Verbesserung der Zusammenarbeit, Flexibilität und Nutzung moderner Technologien. Dieses Projekt analysiert und vergleicht zwei mögliche Lösungsansätze:

1. **Microsoft Cloud-Lösung** - Eine vollständig cloudbasierte Lösung mit Microsoft 365, Entra ID und modernen Endgeräten
2. **On-Premise-Lösung** - Eine hybride Lösung mit lokalen Servern und Cloud-Diensten

## Technologien

- React mit TypeScript
- Vite als Build-Tool
- TailwindCSS für Styling
- Framer Motion für Animationen
- React Router für Navigation
- Shadcn UI Komponenten

## Lokale Entwicklung

1. Abhängigkeiten installieren:
   ```bash
   npm install
   ```

2. Entwicklungsserver starten:
   ```bash
   npm run dev
   ```

3. Build erstellen:
   ```bash
   npm run build
   ```

4. Build lokal testen:
   ```bash
   npm run preview
   ```

## Vercel Deployment

Das Projekt ist für Vercel-Deployment konfiguriert. Um das Projekt auf Vercel zu deployen:

### Option 1: Über die Vercel-Weboberfläche

1. Bei [Vercel](https://vercel.com) anmelden
2. "New Project" auswählen
3. Das GitHub-Repository importieren
4. Die Standardeinstellungen belassen (Vite wird automatisch erkannt)
5. "Deploy" klicken

### Option 2: Mit Vercel CLI

1. Vercel CLI installieren:
   ```bash
   npm install -g vercel
   ```

2. Im Projektverzeichnis anmelden:
   ```bash
   vercel login
   ```

3. Projekt deployen:
   ```bash
   vercel
   ```

4. Für Produktionsdeployment:
   ```bash
   vercel --prod
   ```

## Projektstruktur

- `/src/components` - Wiederverwendbare UI-Komponenten
- `/src/pages` - Hauptseiten der Anwendung
- `/src/lib` - Hilfsfunktionen und Utilities
- `/public` - Statische Assets

## Lizenz

Dieses Projekt wurde für den ÜK-Modul 109 erstellt.
