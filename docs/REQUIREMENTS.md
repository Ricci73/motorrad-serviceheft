# BikerDesk — Anforderungen / Feature-Liste

**Stand:** App-Version v53 · Oktober 2026
**Zweck:** Leichtgewichtige Übersicht der Funktionen mit IDs und Status.
Verweise auf das Detail-Design: [`docs/DESIGN.md`](./DESIGN.md).

**Status-Legende:** ✅ umgesetzt & live · 🧪 in Arbeit/Preview · 💡 Idee/Backlog

---

## 1. Motorräder (REQ-BIKE)

| ID | Anforderung | Status |
|----|-------------|--------|
| REQ-BIKE-01 | Mehrere Motorräder verwalten (Marke, Modell, Baujahr, km, Kennzeichen, FIN, Erstzulassung) | ✅ |
| REQ-BIKE-02 | km-Stand mit Datum, Schnell-Update von der Karte | ✅ |
| REQ-BIKE-03 | km-Verlauf als SVG-Graph inkl. Statistik (km/Monat) | ✅ |
| REQ-BIKE-04 | HU/TÜV-Fälligkeit mit Ampel-Status + „Kein TÜV"-Flag für Rennbikes | ✅ |
| REQ-BIKE-05 | Read-only Detailansicht (ℹ️) mit allen Infos | ✅ |
| REQ-BIKE-06 | Drehmomente pro Motorrad (Schraubstelle + Nm + Notiz) | ✅ |
| REQ-BIKE-07 | Füllmengen pro Motorrad (Öl mit Filter, Kühlflüssigkeit) + zuletzt eingefüllte Ölsorte | ✅ |

## 2. Reifen (REQ-TYRE)

| ID | Anforderung | Status |
|----|-------------|--------|
| REQ-TYRE-01 | Reifen-Setups pro Motorrad (Straße kalt / Rennstrecke kalt+warm, V/H Modell+Größe+Druck) | ✅ |
| REQ-TYRE-02 | Editierbare Reifentabelle (Straße/Rennstrecke-Nutzung, JSON Export/Import) | ✅ |
| REQ-TYRE-03 | Position (Vorne/Hinten) aus Reifenbreite abgeleitet, konfigurierbare Grenze, harter Filter | ✅ |
| REQ-TYRE-04 | Reifen-Vorrat im Lager (eigener Tab) mit Kaufmenge, Nachkaufen, Mindestbestand | ✅ |
| REQ-TYRE-05 | Chargen pro Reifen mit eigener DOT; FIFO-Verbrauch beim Reifenwechsel-Service | ✅ |

## 3. Wartung & Service (REQ-SVC)

| ID | Anforderung | Status |
|----|-------------|--------|
| REQ-SVC-01 | Konfigurierbarer Wartungsplan mit Status-Ampel pro Position | ✅ |
| REQ-SVC-02 | Service-Einträge (Datum, km, Kosten, Werkstatt, Notizen, Fotos) | ✅ |
| REQ-SVC-03 | Ölsorte pro Eintrag (Autocomplete, Auto-Übernahme aus Öl-Lagermaterial) | ✅ |
| REQ-SVC-04 | Materialverbrauch aus Lager mit automatischer Kostenübernahme | ✅ |
| REQ-SVC-05 | Live-Kostenvorschau (Material/Reifen) vor dem Speichern + „kein Preis"-Hinweis | ✅ |
| REQ-SVC-06 | Drehmomente- und Füllmengen-Nachschlag direkt im Service-Formular | ✅ |
| REQ-SVC-07 | Automatische Foto-Komprimierung | ✅ |

## 4. Lager (REQ-INV)

| ID | Anforderung | Status |
|----|-------------|--------|
| REQ-INV-01 | Material anlegen (Kaufmenge, Preis, Bestand, Mindestbestand, Motorrad-Zuordnung, Kategorie) | ✅ |
| REQ-INV-02 | Fester Stückpreis pro Artikel (robust gegen wechselnde Menge) | ✅ |
| REQ-INV-03 | Nachkaufen mit gewichtetem Durchschnitts-Stückpreis | ✅ |
| REQ-INV-04 | Verbrauchshistorie + Niedrigbestand-Warnung + Kategorie-Filter | ✅ |

## 5. Trackdays (REQ-TD)

| ID | Anforderung | Status |
|----|-------------|--------|
| REQ-TD-01 | Mehrtägige Events mit Details pro Tag (Art, Gruppe, Zeit, Kosten) + Gesamtsumme | ✅ |
| REQ-TD-02 | Schnell-Anlage über Zeitraum + Gesamtpreis | ✅ |
| REQ-TD-03 | Autovervollständigung Strecke/Veranstalter | ✅ |
| REQ-TD-04 | Checkliste (55 Standardpunkte, 4 Kategorien) + zentrale Master-Checkliste | ✅ |
| REQ-TD-05 | Reifen-Setups pro Trackday verknüpfbar (mehrere, als Kacheln) | ✅ |
| REQ-TD-06 | Read-only Detailansicht; Edit/Checkliste bei Erledigt/Storniert ausgeblendet | ✅ |
| REQ-TD-07 | Kalender-Export (.ics) mit Erinnerungen | ✅ |

## 6. Daten & Plattform (REQ-SYS)

| ID | Anforderung | Status |
|----|-------------|--------|
| REQ-SYS-01 | Speicherung in IndexedDB (primär) + localStorage (Fallback), Auto-Migration | ✅ |
| REQ-SYS-02 | JSON-Backup/-Export, CSV-Export, PDF-Export | ✅ |
| REQ-SYS-03 | Import mit Ersetzen- oder Merge-Modus (kein Duplikat bei gleicher Marke+Modell) | ✅ |
| REQ-SYS-04 | Schnellbackup (1 Tap) + Backup-Erinnerung nach 7 Tagen | ✅ |
| REQ-SYS-05 | PWA: installierbar, offline-fähig (Service Worker), Android-Manifest | ✅ |
| REQ-SYS-06 | Versionsnummer im Header + Update-Banner bei neuer Version | ✅ |
| REQ-SYS-07 | Eingebaute Hilfe (❓) | ✅ |

## 7. Backlog / Ideen (REQ-IDEA)

| ID | Anforderung | Status |
|----|-------------|--------|
| REQ-IDEA-01 | Handbuch mit Screenshots bebildern | 💡 |
| REQ-IDEA-02 | Diagramme aus DESIGN.md als PNG rendern | 💡 |

---

> Diese Liste wird bei neuen Features mitgepflegt. Für Architektur-/Ablaufdetails
> siehe [`docs/DESIGN.md`](./DESIGN.md), für Endnutzer-Doku das eingebaute Hilfe-Modal
> bzw. das BikerDesk-Handbuch.
