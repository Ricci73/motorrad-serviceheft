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
- Material anlegen mit Kaufmenge, Preis, Bestand
- Beim Service: Material wählen → Kosten automatisch, Bestand reduziert

### 🏁 Trackdays
- Rennstrecken-Termine planen (Strecke, Veranstalter, Gruppe, Status)
- Checkliste mit 55 Standard-Punkten in 4 Kategorien
- Checklisten-Vorlagen speichern und wiederverwenden
- .ics Kalender-Export mit Erinnerungen

### 📤 Export & Import
- JSON-Backup, CSV-Export, PDF-Export, Kalender (.ics)
- Import mit Ersetzen- oder Merge-Modus

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
4. App erscheint im App-Drawer wie eine native App

### Desktop
Einfach die URL im Browser öffnen. In Chrome/Edge: Adressleiste → Install-Icon (⊕) klicken.

---

## 🔧 Technologie

- Reines **HTML + CSS + JavaScript** — keine Frameworks
- **IndexedDB** + localStorage (GB-Kapazität)
- **PWA** mit Manifest + Service Worker — installierbar und offline-fähig
- Automatische Foto-Komprimierung via Canvas API
- SVG-basierte Diagramme (km-Verlauf)

---

## 💾 Datensicherung

⚠️ Daten werden lokal im Browser gespeichert. Regelmäßige Backups empfohlen:

1. 📦 Daten → **JSON-Backup exportieren**
2. Datei sicher aufbewahren (Cloud-Speicher, NAS)
3. Bei Bedarf über **JSON importieren** wiederherstellen

---

## ❓ Hilfe

Die App enthält eine eingebaute Hilfe — tippe ❓ (oben rechts).

---

## 📄 Lizenz

MIT — frei verwendbar und anpassbar.

