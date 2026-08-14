# 🏍️ BikerDesk

Dein digitaler Schreibtisch als Motorradfahrer — kostenlos, mobil, offline-fähig.

**👉 [App öffnen](https://ricci73.github.io/motorrad-serviceheft/)**

---

## ✨ Features

### 🏍️ Motorräder
- Mehrere Motorräder verwalten (Marke, Modell, Baujahr, km-Stand, Kennzeichen, FIN/VIN, Erstzulassung)
- km-Stand mit Datum — schnelle Aktualisierung direkt von der Karte
- HU/TÜV Fälligkeit mit Ampel-Status (✅ OK / ⚠️ Bald / 🔴 Überfällig)
- "Kein TÜV"-Flag für Rennstrecken-Motorräder

### 🔧 Wartungsplan
- Konfigurierbare Intervalle (km & Monate)
- Status-Ampel pro Position
- Mit einem Klick als erledigt markieren

### 📋 Serviceheft
- Einträge mit Datum, km, Kosten, Werkstatt, Notizen
- Fotos & Belege direkt mit der Kamera aufnehmen oder aus der Galerie hochladen
- Einträge nachträglich bearbeiten (Kosten, Fotos hinzufügen)
- Automatische Foto-Komprimierung (max 1200px, JPEG 75%)

### 📦 Materiallager
- Material anlegen (Öl, Filter, Bremsbeläge, etc.) mit Kaufmenge, Preis, Bestand
- Beim Service: Material aus Lager wählen → Kosten automatisch berechnet, Bestand reduziert

### 🏁 Trackdays
- Rennstrecken-Termine planen und verwalten (Strecke, Veranstalter, Gruppe, Status)
- **Checkliste** — 55 Standard-Punkte in 4 Kategorien (Kleidung, Dokumente, Technik, Infrastruktur)
- Punkte abhaken, hinzufügen, entfernen — pro Trackday individuell
- Checklisten-Vorlagen speichern und wiederverwenden
- .ics Kalender-Export mit Erinnerungen (3 Tage + 1 Tag vorher)

### 📤 Export & Import
- **JSON-Backup** — alle Daten sichern und wiederherstellen
- **CSV-Export** — Einträge für Excel / Numbers
- **PDF-Export** — druckbares Serviceheft pro Motorrad
- **Kalender-Export (.ics)** — HU-Termine, Wartungen und Trackdays

---

## 📱 Auf dem iPhone installieren

1. **Safari** öffnen und [diese URL](https://ricci73.github.io/motorrad-serviceheft/) aufrufen
2. Teilen-Symbol antippen
3. **„Zum Home-Bildschirm"** wählen
4. Die App öffnet sich im Vollbild — wie eine native App

---

## 🔧 Technologie

- Reines **HTML + CSS + JavaScript** — keine Frameworks, keine Dependencies
- **IndexedDB** als Primärspeicher (GB-Kapazität) + localStorage Fallback
- Vollständig **offline-fähig** — kein Server, kein Internet nötig
- Optimiert für **iPhone (iOS 13+), Android und Desktop**
- Automatische Foto-Komprimierung via Canvas API

---

## 💾 Datensicherung

1. App öffnen → **📦 Daten** (oben rechts)
2. **JSON-Backup exportieren**
3. Datei sicher aufbewahren (iCloud, Google Drive, etc.)
4. Bei Bedarf über **JSON-Datei importieren** wiederherstellen

---

## 📄 Lizenz

MIT — frei verwendbar und anpassbar.

