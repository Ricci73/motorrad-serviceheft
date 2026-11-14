# BikerDesk — Entwickler-Doku

**Stand:** v58 · November 2026
**Zielgruppe:** Wer an BikerDesk weiterentwickelt (inkl. KI-Agenten).
Für *was* die App ist: [`DESIGN.md`](./DESIGN.md) · [`REQUIREMENTS.md`](./REQUIREMENTS.md).
Diese Datei erklärt das *Wie*.

---

## 1. Projekt in 30 Sekunden

- **Single-File-PWA:** die komplette App ist `index.html` (HTML + CSS + JS inline).
  Kein Framework, kein Build-Schritt, kein npm.
- Zusätzlich: `pouchdb.min.js` (Vendor), `sw.js` (Service Worker), `manifest.json`, `docs/`.
- **Hosting:** GitHub Pages liefert direkt aus `main` aus → Live-URL
  https://ricci73.github.io/motorrad-serviceheft/
- **Speicher:** PouchDB (Primär, Dokument `bikerdesk-state`), IndexedDB + localStorage als Fallback;
  optionaler CouchDB-Sync (opt-in).

## 2. Lokal entwickeln & testen

Kein Server nötig — die Datei direkt im Browser öffnen:

```
file:///<pfad>/motorrad-repo/index.html
```

- **Nach jeder Änderung Hard-Reload** (Firefox/Chrome: Cmd+Shift+R). Der Service Worker
  cached die App-Shell — ohne Hard-Reload siehst du die alte Version.
- Responsive testen: Responsive-Design-Modus (Firefox: Cmd+Alt+M).
  - **Mobil:** 430 px (iPhone 15 Pro Max).
  - **Desktop:** ab 1000 px greift das Desktop-Layout.
- `file://` lädt ggf. Beispieldaten und registriert keinen SW — für reine Layout-Tests egal.
  Deine echten Daten liegen auf der Live-Domain und bleiben unberührt.

## 3. Git-Workflow (verbindlich)

`main` ist live (GitHub Pages). Nie direkt auf `main` entwickeln.

1. `git fetch origin`, sicherstellen dass lokaler `main == origin/main`.
2. Feature-Branch: `git checkout -b dev/<thema>` von `main`.
3. Ändern in `index.html` (und ggf. `sw.js`).
4. **Version hochzählen** — ALLE drei Stellen:
   - `index.html`: Header-Label `id="appVersionLabel"` (z.B. `v58`)
   - `index.html`: `var APP_VERSION = 'v58';`
   - `sw.js`: `const CACHE_NAME = "bikerdesk-v58";`  ← **kritisch**
5. Lokal testen (Mobil 430px + Desktop), Hard-Reload.
6. Commit (nur geänderte Dateien), Branch pushen, **Pull Request gegen `main`**.
7. PR mergen → Pages deployt automatisch. Am Gerät mit Cmd+Shift+R neu laden.

### ⚠️ Service-Worker-Cache — der häufigste Fehler
`sw.js` löscht beim `activate` nur Caches mit **anderem** `CACHE_NAME`. Wird `CACHE_NAME`
bei einem Release **nicht** erhöht, behalten bestehende Nutzer ewig die alte Version.
→ Bei **jedem** Release `CACHE_NAME` mit der App-Version hochzählen.

## 4. Code-Konventionen

- **CSS-Variablen** (`:root`): Farben `--bg #0f0f13`, `--surface #1a1a24`, `--surface2 #24242f`,
  `--border`, `--accent #e85d04`, `--accent2`, `--text`, `--text2`, `--danger`, `--success`;
  Layout `--radius 12px`, `--nav-h 64px`, `--safe-top/--safe-bottom` (iOS notch).
- **Mobile-first / Touch:** Basis-CSS ist fürs Handy. Mindest-Trefferflächen 44–48px.
  Breakpoints additiv: `min-width: 500px` (Stats), `600px` (Bike-Raster, Modals mittig),
  `1000px` (Desktop-Layout, Content-Panel). Mobile Ansicht dabei nie verändern.
- **State:** ein globales `state`-Objekt. Änderungen immer über `save()` persistieren
  (schreibt PouchDB + Fallback). Reihenfolge-kritische Writes laufen über die serialisierte
  `pouchSave()`-Queue (verhindert 409-Konflikte).
- **Keine neuen Abhängigkeiten / kein Build** ohne guten Grund — die Single-File-Natur ist Absicht.

## 5. Stolpersteine

- **SW-Cache** nicht gebumpt → kein Update (siehe oben).
- **Sync-Konflikt:** gesamter Zustand = EIN PouchDB-Dokument. Gleichzeitige Edits auf zwei
  Geräten vor dem Abgleich → eine Revision gewinnt deterministisch, die andere geht verloren.
  Neues Gerät: Sync einschalten und auf „synchron" warten, BEVOR man dort etwas ändert.
- **Manifest** erzwingt `orientation: portrait` (installierte PWA). Desktop-CSS rein additiv.
- **Safari-Eigenheiten:** ältere Bugs betrafen `??`/`||` und verschachtelte Template-Literals
  (siehe Commit-Historie v15–v18) — bei JS-Änderungen im Zweifel in Safari gegentesten.
- **Service Worker und fremde Hosts:** `sw.js` darf Anfragen an andere Origins (CouchDB-Sync,
  Kalender-Proxy) nicht abfangen (`if (new URL(req.url).origin !== self.location.origin) return;`).
  Sonst werden sie stumm geblockt, die Konsole zeigt „ServiceWorker hat abgelehnte Promise an
  FetchEvent.respondWith() übergeben", und im Server-Log kommt keine Anfrage an.
- **Firefox und lokales Netz:** Greift eine öffentliche Seite (github.io, raw.githack.com) auf eine
  Adresse im lokalen oder privaten Netz zu (auch per VPN), fragt Firefox per Popup um
  Erlaubnis. Aus `file://` kommt diese Frage nicht, dort läuft derselbe Abruf ohne Popup, ist also
  kein Beweis, dass er auf der echten Seite funktioniert. Immer auch auf der raw.githack-Preview testen.
- **Proxy-Allowlist:** Der Kalender-Proxy erlaubt nur `https://ricci73.github.io` und
  `https://raw.githack.com`. `rawcdn.githack.com` und `file://` (Origin `null`) sind bewusst nicht erlaubt.

## 6. Versionierung

Fortlaufend `vNN` (aktuell **v58**). Beim Release die drei Stellen in §3.4 gemeinsam erhöhen;
`REQUIREMENTS.md`/`DESIGN.md` bei neuen Features mitpflegen.
