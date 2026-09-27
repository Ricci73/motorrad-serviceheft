# BikerDesk — Detail-Design (UML)

**Stand:** App-Version v53 · September 2026
**Quelle:** abgeleitet aus dem echten Code (`index.html`, main, v53)
**Notation:** Mermaid (rendert in VS Code, GitHub, den meisten Markdown-Viewern)

BikerDesk ist eine Single-File Vanilla-HTML/CSS/JS-PWA mit einem zentralen In-Memory
`state`-Objekt, das per IndexedDB (primär) und localStorage (Fallback) persistiert wird.
Kein Framework, kein Backend — Hosting über GitHub Pages, Offline-Fähigkeit über einen
Service Worker.

---

## 1. Anwendungsfälle (Use-Case-Sicht)

Akteure: **Fahrer/in** (einziger menschlicher Nutzer) und **System / Service Worker**
(technischer Akteur für Persistenz und Update). Mermaid kennt kein natives
UML-Use-Case-Diagramm — hier als gruppiertes Diagramm mit `include`-Beziehungen für
die wiederkehrenden Kernabläufe (Persistenz, Kostenberechnung).

```mermaid
graph LR
    Fahrer(("👤 Fahrer/in"))
    System(("⚙️ System /<br/>Service Worker"))

    subgraph Motorraeder["Motorräder"]
        UC1["Motorrad anlegen/bearbeiten"]
        UC2["Detailansicht öffnen (ℹ️)"]
        UC3["km-Stand aktualisieren"]
        UC4["Reifen-Setups pflegen"]
        UC5["Drehmomente pflegen"]
        UC6["Füllmengen pflegen"]
    end

    subgraph Wartung["Wartung & Service"]
        UC7["Wartungsplan pflegen"]
        UC8["Service-Eintrag erfassen"]
        UC9["Ölsorte erfassen"]
    end

    subgraph Lager["Lager & Reifen"]
        UC10["Material verwalten"]
        UC11["Material nachkaufen"]
        UC12["Reifen-Vorrat verwalten"]
        UC13["Reifentabelle pflegen"]
    end

    subgraph Trackdays["Trackdays"]
        UC14["Trackday planen (mehrtägig)"]
        UC15["Checkliste abarbeiten"]
        UC16["Kalender-Export (.ics)"]
    end

    subgraph Daten["Daten"]
        UC17["Backup/Export (JSON/CSV/PDF)"]
        UC18["Import (Ersetzen/Merge)"]
    end

    UCP["Daten persistieren<br/>(IndexedDB + localStorage)"]
    UCK["Kosten berechnen<br/>(Stückpreis + FIFO)"]
    UCU["App-Update anwenden"]

    Fahrer --- UC1
    Fahrer --- UC2
    Fahrer --- UC3
    Fahrer --- UC4
    Fahrer --- UC5
    Fahrer --- UC6
    Fahrer --- UC7
    Fahrer --- UC8
    Fahrer --- UC9
    Fahrer --- UC10
    Fahrer --- UC11
    Fahrer --- UC12
    Fahrer --- UC13
    Fahrer --- UC14
    Fahrer --- UC15
    Fahrer --- UC16
    Fahrer --- UC17
    Fahrer --- UC18

    UC8 -.->|include| UCK
    UC8 -.->|include| UCP
    UC11 -.->|include| UCK
    UC1 -.->|include| UCP
    UC10 -.->|include| UCP
    UC14 -.->|include| UCP
    UC18 -.->|include| UCP

    System --- UCP
    System --- UCU
    UCU -.->|controllerchange| Fahrer
```

---

## 2. Statische Sicht

### 2.1 Datenmodell (Klassendiagramm)

Das zentrale `state`-Objekt und alle Entitäten mit ihren tatsächlich im Code
erzeugten/gespeicherten Feldern (inkl. abgeleiteter Felder wie `kmDate`, `unitPrice`).

```mermaid
classDiagram
    class AppState {
        +Bike[] bikes
        +Map~bikeId, Maintenance[]~ maintenance
        +Map~bikeId, Log[]~ logs
        +InventoryItem[] inventory
        +Trackday[] trackdays
        +ChecklistItem[] masterChecklist
        +TyreTableRow[] tyreTable
        +TyreStock[] tyreStock
        +int tyreWidthThreshold
        +string selectedBike
        +string editingBikeId
        +string editingMaintenanceId
        +photo[] pendingPhotos
        +string currentPage
    }

    class Bike {
        +string id
        +string make
        +string model
        +int year
        +int km
        +string kmDate
        +string plate
        +string icon
        +string fin
        +string firstReg
        +string huDate
        +string huLast
        +bool noHu
        +string notes
        +float oilFilter
        +float coolant
        +TyreSetup[] tyreSetups
        +TorqueSpec[] torqueSpecs
        +KmHistory[] kmHistory
    }

    class TyreSetup {
        +string id
        +string name
        +string type
        +string frontModel
        +string frontSize
        +string frontCold
        +string frontWarm
        +string rearModel
        +string rearSize
        +string rearCold
        +string rearWarm
    }

    class TorqueSpec {
        +string id
        +string stelle
        +string nm
        +string notiz
    }

    class KmHistory {
        +int km
        +string date
    }

    class Maintenance {
        +string id
        +string name
        +int intervalKm
        +int intervalMonth
        +int lastKm
        +string lastDate
        +string notes
    }

    class Log {
        +string id
        +string date
        +int km
        +string type
        +float cost
        +string workshop
        +string notes
        +string oilType
        +photo[] photos
        +UsedMaterial[] materials
        +UsedTyre[] tyres
    }

    class UsedMaterial {
        +string name
        +float qty
        +string unit
        +float cost
    }

    class UsedTyre {
        +string name
        +string groesse
        +string position
        +int qty
        +string dots
        +float cost
    }

    class InventoryItem {
        +string id
        +string name
        +string unit
        +string category
        +float qty
        +float price
        +float unitPrice
        +float stock
        +float minStock
        +string bikeId
        +string date
        +string notes
        +InvHistory[] history
    }

    class InvHistory {
        +string type
        +float qty
        +string date
        +string ref
    }

    class TyreStock {
        +string id
        +string modell
        +string groesse
        +string position
        +int minStock
        +string notes
        +TyreBatch[] batches
    }

    class TyreBatch {
        +string dot
        +int qty
        +float price
        +string date
    }

    class TyreTableRow {
        +string id
        +string hersteller
        +string modell
        +string groesse
        +bool street
        +string streetCold
        +bool track
        +string trackCold
        +string trackWarm
    }

    class Trackday {
        +string id
        +string track
        +string status
        +string organizer
        +string bikeId
        +string[] tyreSetupIds
        +string notes
        +TrackdayDay[] days
        +ChecklistItem[] checklist
    }

    class TrackdayDay {
        +string datum
        +string art
        +string gruppe
        +string besteZeit
        +float kosten
    }

    class ChecklistItem {
        +string cat
        +string name
        +bool done
    }

    AppState "1" *-- "0..*" Bike : bikes
    AppState "1" *-- "0..*" InventoryItem : inventory
    AppState "1" *-- "0..*" Trackday : trackdays
    AppState "1" *-- "0..*" TyreStock : tyreStock
    AppState "1" *-- "0..*" TyreTableRow : tyreTable
    AppState "1" *-- "0..*" ChecklistItem : masterChecklist

    Bike "1" *-- "0..*" TyreSetup : tyreSetups
    Bike "1" *-- "0..*" TorqueSpec : torqueSpecs
    Bike "1" *-- "0..*" KmHistory : kmHistory

    AppState "1" o-- "0..*" Maintenance : maintenance by bikeId
    AppState "1" o-- "0..*" Log : logs by bikeId
    Maintenance "0..*" --> "1" Bike : keyed by bikeId
    Log "0..*" --> "1" Bike : keyed by bikeId

    Log "1" *-- "0..*" UsedMaterial : materials
    Log "1" *-- "0..*" UsedTyre : tyres
    InventoryItem "1" *-- "0..*" InvHistory : history
    TyreStock "1" *-- "1..*" TyreBatch : batches

    Trackday "1" *-- "1..*" TrackdayDay : days
    Trackday "1" *-- "0..*" ChecklistItem : checklist
    Trackday "0..*" --> "0..1" Bike : bikeId
    Trackday "0..*" --> "0..*" TyreSetup : tyreSetupIds

    InventoryItem "0..*" --> "0..1" Bike : bikeId
    Log ..> InventoryItem : deducts stock via materials
    Log ..> TyreStock : deducts batches FIFO via tyres
    TyreTableRow ..> TyreSetup : prefills
    TyreTableRow ..> TyreStock : source for stock
    ChecklistItem <.. Trackday : cloned from masterChecklist
```

### 2.2 Komponentensicht

```mermaid
graph TB
    subgraph Hosting["CDN / Hosting"]
        GH["GitHub Pages<br/>(statisches HTML/CSS/JS)"]
    end

    subgraph Client["Browser (PWA, installierbar, offline-faehig)"]
        subgraph UI["UI-Layer (Vanilla JS, keine Frameworks)"]
            Pages["Seiten: Motorraeder · Wartung · Serviceheft<br/>Lager · Trackdays · Reifen"]
            Modals["Modals & Formulare<br/>(saveBike, saveLog, saveInvItem, ...)"]
            Render["Render-Funktionen<br/>(renderBikes, renderLogbook, SVG km-Graph)"]
            ExportUI["Export/Import<br/>(JSON, CSV, PDF, ICS)"]
        end

        subgraph StateLayer["State-Layer"]
            State["let state = {...}<br/>zentrales In-Memory-Objekt"]
            SaveFn["save() · load()<br/>Dual-Write Koordination"]
        end

        subgraph Persistence["Persistenz-Layer"]
            IDB["IndexedDB (primaer)<br/>DB 'MotoServiceheftDB' v1<br/>Store 'appdata' key 'state'<br/>dbOpen/dbSave/dbLoad"]
            LS["localStorage (Fallback + Migration)<br/>key 'moto_serviceheft'<br/>+ 'moto_last_backup'"]
        end

        SW["Service Worker (./sw.js)<br/>Cache + Offline<br/>Update-Banner bei neuer Version"]
    end

    GH -->|laedt App-Shell| UI
    GH -->|registriert| SW
    SW -->|cached App-Shell| Client
    SW -.->|controllerchange -> Reload| Render

    Pages --> Modals
    Modals --> SaveFn
    Render --> State
    ExportUI --> State

    SaveFn -->|state schreiben| State
    SaveFn -->|dbSave| IDB
    SaveFn -->|Spiegel-Write| LS

    State -.->|load: IDB zuerst| IDB
    State -.->|Fallback + einmalige Migration| LS
```

> Hinweis: `sw.js` wird per `navigator.serviceWorker.register('./sw.js')` eingebunden,
> liegt aber nicht im selben Repo-Verzeichnis wie `index.html` — die Cache-Details sind
> aus dem Registrierungscode abgeleitet.

---

## 3. Dynamische Sicht

### 3.1 Service-Eintrag speichern mit Material- und Reifenverbrauch (`saveLog()`)

```mermaid
sequenceDiagram
    actor User
    participant UI as UI (Log-Modal)
    participant saveLog
    participant invUnitPrice
    participant tyreConsume
    participant State as state (memory)
    participant IDB as IndexedDB
    participant LS as localStorage

    User->>UI: Material wählen (onLogMaterialSelect)
    UI->>invUnitPrice: Stückpreis für inv
    invUnitPrice-->>UI: unitPrice (bzw. 0)
    User->>UI: Reifen aus Vorrat wählen (logTyres)
    UI->>UI: updateLogCostPreview()
    Note over UI: Live-Vorschau: matCost + tyreCost + manuelle Kosten<br/>⚠️ "kein Preis" bei unitPrice<=0

    User->>UI: 💾 Speichern
    UI->>saveLog: saveLog()
    saveLog->>saveLog: Pflichtfelder prüfen (date, km, type)
    alt Felder fehlen
        saveLog-->>User: Toast "Datum, km und Wartungsart sind Pflicht"
    else gültig
        loop je gewähltes Material
            saveLog->>invUnitPrice: invUnitPrice(inv)
            invUnitPrice-->>saveLog: unitPrice
            saveLog->>saveLog: materialCost += unitPrice * qty
            saveLog->>State: inv.stock = max(0, stock - qty)
            saveLog->>State: inv.history.push({type:'Verbrauch', qty, date, ref})
        end
        loop je gewählter Reifen
            saveLog->>tyreConsume: tyreConsume(t, qty)
            Note over tyreConsume: FIFO über t.batches (älteste DOT zuerst)
            tyreConsume->>State: batch.qty -= take; leere Chargen entfernen
            tyreConsume-->>saveLog: {taken, cost, dots}
            saveLog->>saveLog: tyreCost += cost
        end
        saveLog->>saveLog: totalCost = manuelleKosten + materialCost + tyreCost
        saveLog->>State: log{...} erzeugen, logs[bike].unshift(log)
        saveLog->>State: bike.km / kmDate / kmHistory aktualisieren (falls km höher)
        saveLog->>saveLog: save()
        saveLog->>IDB: dbSave() (primär)
        saveLog->>LS: localStorage.setItem (Fallback)
        saveLog->>UI: closeLogModal(); renderStats(); renderLogbook()
        saveLog-->>User: Toast "✅ Eintrag gespeichert (+X € Material/Reifen)"
    end
```

### 3.2 JSON Merge-Import (`importJSON()`, mode='merge')

```mermaid
sequenceDiagram
    actor User
    participant UI as UI (Daten-Modal)
    participant importJSON
    participant normStr
    participant State as state (memory)
    participant IDB as IndexedDB
    participant LS as localStorage

    User->>UI: Datei wählen (Modus = Merge)
    UI->>importJSON: importJSON(event)
    importJSON->>importJSON: FileReader.readAsText → JSON.parse
    alt data.bikes fehlt / kein Array
        importJSON-->>User: Toast "Ungültige Datei"
    else Merge-Modus
        Note over importJSON,normStr: normStr(s) = lowercase, ohne Leer-/Bindestriche

        loop je Bike mit torqueSpecs
            importJSON->>normStr: Ziel-Bike per id, sonst make+model
            importJSON->>State: torqueSpecs nur ergänzen wenn Ziel keine hat (torqueAdded++)
        end

        loop je Bike mit oilFilter/coolant
            importJSON->>normStr: Ziel-Bike per id, sonst make+model
            importJSON->>State: Füllmengen nur in leere Felder setzen (fillAdded++)
        end

        loop je Bike
            importJSON->>normStr: exists? per id ODER make+model
            alt nicht vorhanden
                importJSON->>State: bikes.push(b); maintenance/logs anlegen (added++)
            end
        end

        loop je Trackday
            importJSON->>State: push wenn id fehlt (tdAdded++)
        end
        loop je Inventory-Item
            importJSON->>State: push wenn id fehlt (invAdded++)
        end
        loop je tyreStock
            importJSON->>State: push wenn id fehlt
        end
        importJSON->>State: masterChecklist / tyreTable nur wenn noch leer

        importJSON-->>User: Toast "✅ ... hinzugefügt" (bzw. "Nichts Neues")
        importJSON->>importJSON: save()
        importJSON->>IDB: dbSave()
        importJSON->>LS: localStorage.setItem
        importJSON->>UI: renderBikes / renderTrackdays / renderInventory ...
    end
```

### 3.3 App-Update via Service Worker

```mermaid
sequenceDiagram
    actor User
    participant Page as Page (App)
    participant SW as ServiceWorker (sw.js)
    participant Banner as UpdateBanner

    Page->>SW: navigator.serviceWorker.register('./sw.js')
    SW-->>Page: reg (_swReg = reg)

    alt reg.waiting && controller vorhanden
        Page->>Banner: showUpdateBanner()
    end

    Note over SW: Neue Version deployed
    SW->>Page: updatefound (reg.installing = nw)
    Page->>Page: nw.addEventListener('statechange')
    alt nw.state === 'installed' && controller vorhanden
        Page->>Banner: showUpdateBanner() — "🔄 Neue Version verfügbar"
    end

    User->>Banner: Klick "Jetzt laden"
    Banner->>Page: applyUpdate()
    alt _swReg.waiting vorhanden
        Page->>SW: reg.waiting.postMessage({type:'SKIP_WAITING'})
        SW->>SW: skipWaiting() → aktiviert, übernimmt Kontrolle
        SW->>Page: controllerchange
        Page->>Page: _reloaded prüfen (nur einmal)
        Page->>Page: location.reload()
    else kein waiting-SW
        Page->>Page: location.reload()
    end
```

### 3.4 Trackday-Status (Zustandsdiagramm)

```mermaid
stateDiagram-v2
    [*] --> Geplant : Trackday anlegen
    Geplant --> Gebucht : buchen
    Geplant --> Storniert : absagen
    Gebucht --> Erledigt : Termin gefahren
    Gebucht --> Storniert : absagen
    Geplant --> Erledigt : direkt abhaken

    state Erledigt {
        note as N1
            Detail-View read-only:
            Edit- und Checklist-Buttons ausgeblendet
        end note
    }
    state Storniert {
        note as N2
            Detail-View read-only:
            Edit- und Checklist-Buttons ausgeblendet
        end note
    }

    Erledigt --> [*]
    Storniert --> [*]
```

---

## Anmerkungen

- Die Feldlisten stammen aus den `save*`-Funktionen (nicht nur aus den Formularen),
  inkl. abgeleiteter Felder (`kmDate`, `unitPrice`).
- `logs` und `maintenance` sind im `state` nach `bikeId` verschlüsselt
  (`state.logs[bikeId] = [...]`), daher als assoziative Beziehung modelliert.
- Der **feste Stückpreis** (`unitPrice`) macht die Kostenrechnung robust gegenüber
  wechselnder Bedeutung von `qty` (Kaufmenge vs. aktueller Bestand nach Nachkauf).
- Reifenverbrauch nutzt **FIFO** über `batches` (älteste DOT zuerst).
