# Meli's 30' Family-Traumreise

Ein Familien-Reise-Entscheidungshelfer: gemeinsam per Multi-Kriterien-Gewichtung die nächste große Reise finden. Kein Backend nötig — alle Daten liegen im Browser (`localStorage`).

## Tech-Stack

- React + Vite + TypeScript
- Tailwind CSS 4
- Ergebnisse lokal in `localStorage`, exportierbar als JSON/CSV
- Deployment als statische Seite via GitHub Pages

## Lokal installieren

```bash
npm install
```

## Lokal starten

```bash
npm run dev
```

Öffnet die App unter `http://localhost:5173/Traumreise/`.

## Build

```bash
npm run build
```

Erzeugt die produktionsreife Seite in `dist/`.

```bash
npm run preview
```

zeigt den Production-Build lokal an.

## Deployment auf GitHub Pages

1. Passe in [vite.config.ts](vite.config.ts) den `base`-Pfad an deinen Repo-Namen an, z. B. `/mein-repo/`.
2. Erstelle das Repo auf GitHub und push den Code auf `main`.
3. Deploye mit:

   ```bash
   npm run deploy
   ```

   Das baut die App und pusht `dist/` in den `gh-pages`-Branch (via [gh-pages](https://www.npmjs.com/package/gh-pages)).
4. Aktiviere in den Repo-Settings unter **Pages** den Branch `gh-pages` als Quelle.
5. Die App ist danach unter `https://<dein-user>.github.io/<repo-name>/` erreichbar.

## Reise-Daten anpassen

Alle Reiseoptionen, Basis-Scores, Beschreibungen, Archetypen und Kriterien liegen zentral in [src/data/trips.ts](src/data/trips.ts) und lassen sich dort direkt bearbeiten, ohne die restliche App anzufassen.

## Projektstruktur

```
src/
  data/trips.ts          Reiseoptionen, Scores, Archetypen, Kriterien
  types/                 Zentrale TypeScript-Typen
  state/                 App-State-Hook (Schritte, Auswahl, Gewichtung)
  utils/                 Scoring, localStorage, JSON/CSV-Export
  components/            UI je Schritt (Landing, Archetypen, Reisen, Gewichtung, Ergebnis, Gespeicherte Stimmen)
```
