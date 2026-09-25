# 🏍️ BikerDesk

Dein digitaler Schreibtisch als Motorradfahrer — kostenlos, mobil, offline-fähig.

**👉 [App öffnen](https://ricci73.github.io/motorrad-serviceheft/)**

---

## ✨ Features

### 🏍️ Motorräder
- Mehrere Motorräder verwalten (Marke, Modell, Baujahr, km-Stand, Kennzeichen, FIN/VIN, Erstzulassung)
- **km-Verlauf** mit SVG-Graph — zeigt km/Monat, Gesamtkilometer und Timeline
- km-Stand mit Datum — schnelle Aktualisierung direkt von der Karte
- HU/TÜV Fälligkeit mit Ampel-Status (✅ OK / ⚠️ Bald / 🔴 Überfällig)
- "Kein TÜV"-Flag für Rennstrecken-Motorräder
- **Detailansicht** (ℹ️) — alle Infos, Reifen-Setups und Statistik eines Motorrads ansehen ohne Bearbeiten-Modus

### 🛞 Reifen
- Reifen-Setups pro Motorrad (Straße = nur Kaltdruck, Rennstrecke = kalt + warm)
- Vorne/Hinten je Modell, Größe und Drücke
- Editierbare **Reifentabelle** (hinzufügen/ändern/löschen, JSON Export/Import) — Reifen für Straße und/oder Rennstrecke mit eigenen Drücken; dient als Vorbefüllung für Setups
- Setups mit Trackdays verknüpfbar (mehrere pro Trackday wählbar)
- Übersichtstabelle über alle Setups
- **Reifen-Vorrat** (im Lager unter 🛞 Reifen) — Reifen aus der Reifentabelle wählen, getrennt nach Vorne/Hinten, mit Kaufmenge, Preis, Mindestbestand
- **Chargen mit eigener DOT** — mehrere Fertigungschargen pro Reifen; Bestand = Summe der Chargen; Nachkaufen mit anderer DOT legt eine neue Charge an
- **Automatischer Abzug bei Reifenwechsel-Service** (FIFO — älteste DOT zuerst), Kosten und verbrauchte DOT werden im Serviceeintrag übernommen
- **Detailansicht** (ℹ️) für Trackdays — alle Tage, Setups, Checklisten-Fortschritt read-only

### 🔧 Wartungsplan
- Konfigurierbare Intervalle (km & Monate)
- Status-Ampel pro Position
- Mit einem Klick als erledigt markieren

### 📋 Serviceheft
- Einträge mit Datum, km, Kosten, Werkstatt, Notizen
- Fotos & Belege direkt mit der Kamera aufnehmen oder aus der Galerie
- Einträge nachträglich bearbeiten
- Automatische Foto-Komprimierung

### 📦 Materiallager
- Material anlegen mit Kaufmenge, Preis, Bestand, Mindestbestand, Motorrad-Zuordnung
- Beim Service: Material wählen → Kosten automatisch, Bestand reduziert
- **Nachkaufen** — Bestand auffüllen, Stückpreis als gewichteter Durchschnitt
- **Verbrauchshistorie** — jede Anlage/Nachkauf/Verbrauch mit Datum
- **Niedrigbestand-Warnung** bei Unterschreitung des Mindestbestands
- **Kategorie-Filter** im Lager
- Umschalter **📦 Material / 🛞 Reifen** — Reifen-Vorrat separat verwaltet (siehe 🛞 Reifen)

### 🏁 Trackdays
- Rennstrecken-Termine planen (Strecke, Veranstalter, Motorrad, Status)
- **Mehrtägige Events** — ein Trackday über mehrere Tage mit Details pro Tag (Art, Gruppe, beste Zeit, Kosten) und Gesamtsumme
- **Schnell-Anlage** — Zeitraum + Gesamtpreis eingeben, Tage werden automatisch erzeugt
- **Autovervollständigung** — Strecke und Veranstalter schlagen bereits verwendete Werte vor
- Checkliste mit 55 Standard-Punkten in 4 Kategorien
- **Master-Checkliste** — zentral bearbeitbar, dient als Vorlage für neue Trackdays
- Trackday-Listen individuell anpassbar; eine Liste kann zur neuen Master-Liste gemacht werden
- .ics Kalender-Export mit Erinnerungen

### 📤 Export & Import
- **⚡ Schnellbackup** — 1 Tap sichert alle Daten als JSON
- **Backup-Erinnerung** — Hinweis wenn letztes Backup > 7 Tage her
- JSON-Backup, CSV-Export, PDF-Export, Kalender (.ics)
- Import mit Ersetzen- oder Merge-Modus (Merge fügt neue Motorräder, Trackdays und Material hinzu)

---

## 📱 Installation

### iPhone (Safari)
1. Safari öffnen → [App-URL](https://ricci73.github.io/motorrad-serviceheft/) aufrufen
2. Teilen-Symbol (⬆️) antippen
3. **„Zum Home-Bildschirm"** wählen

### Android (Chrome)
1. Chrome öffnen → [App-URL](https://ricci73.github.io/motorrad-serviceheft/) aufrufen
2. Chrome zeigt automatisch **„App installieren"** Banner — antippen
3. Falls kein Banner: Drei-Punkte-Menü (⋮) → **„App installieren"**

### Desktop
URL im Browser öffnen. In Chrome/Edge: Adressleiste → Install-Icon (⊕) klicken.

---

## 🔧 Technologie

- Reines **HTML + CSS + JavaScript** — keine Frameworks
- **IndexedDB** + localStorage (GB-Kapazität)
- **PWA** mit Manifest + Service Worker — installierbar und offline-fähig
- **Versionsnummer** im Header + automatischer **Update-Hinweis** bei neuer Version
- Automatische Foto-Komprimierung via Canvas API
- SVG-basierte Diagramme (km-Verlauf)

---

## 💾 Datensicherung

⚠️ Daten werden lokal im Browser gespeichert. Regelmäßige Backups empfohlen!

- **⚡ Schnellbackup** (Header-Button) — 1 Tap, JSON wird heruntergeladen
- **Backup-Erinnerung** — die App erinnert nach 7 Tagen ohne Backup
- Datei sicher aufbewahren (iCloud Drive, NAS, Google Drive)
- Bei Bedarf über 📦 Daten → JSON importieren wiederherstellen

---

## ❓ Hilfe

Die App enthält eine eingebaute Hilfe — tippe ❓ (oben rechts).

---

## 📄 Lizenz

MIT — frei verwendbar und anpassbar.

