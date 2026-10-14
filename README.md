# Klausurtrainer

Kostenlose Lern-Website für die Klasse: pro Klassenarbeit ein Bereich mit **Fortschritt**, **Lernzettel**, **Aufgaben** (Prüfungsmodus mit Rechenweg-Prüfer) und **Lernkarten**. Keine Anmeldung, kein Server, kein Tracking. Der Fortschritt bleibt im Browser (localStorage) und lässt sich als Code auf ein anderes Gerät mitnehmen.

## Ordner

```
index.html              Seite + Liste der Klassenarbeiten (Block LERNSTOFF)
css/styles.css          Aussehen (hell/dunkel)
js/rechner.js           Rechenweg-Prüfer (deutsches Zahlenformat, × : + − ( ) %, Mio)
js/app.js               die App
content/lf9-marketing.js  Lernstoff Marketing LF 9
content/_vorlage.js     Vorlage für neue Klassenarbeiten
tools/test.js           rechnet alle Musterlösungen nach
```

## Neuen Stoff hinzufügen

1. `content/_vorlage.js` kopieren, z. B. nach `content/lf8-klr.js`, und ausfüllen (oder Claude Code mit den Arbeitsblättern bitten, die Datei nach dieser Vorlage zu füllen).
2. In `index.html` im Block `LERNSTOFF` eine Zeile ergänzen: `<script src="content/lf8-klr.js"></script>`
3. `node tools/test.js` ausführen. Das Skript schickt jede Musterlösung durch denselben Prüfer wie die Website und meldet falsche Zahlen.
4. Hochladen (siehe unten). Ein neues Fach erscheint automatisch oben in der Fächerleiste.

## Online stellen (GitHub Pages, kostenlos)

1. Auf github.com ein neues öffentliches Repository anlegen, z. B. `klausurtrainer`.
2. Alle Dateien aus diesem Ordner hochladen („Add file → Upload files“).
3. Settings → Pages → Source: „Deploy from a branch“, Branch `main`, Ordner `/ (root)` → Save.
4. Nach ein bis zwei Minuten ist die Seite unter `https://DEIN-NAME.github.io/klausurtrainer/` erreichbar.

Lokal ansehen geht auch ohne Server: `index.html` doppelt anklicken.

## Hinweise zum Inhalt

- Zahlen und Lösungswege stammen aus den Arbeitsblättern LS 01–17. Wo die Ich-kann-Liste davon abweicht (LS 08 Beschriftung, LS 09, LS 16, LS 17), gilt das Arbeitsblatt.
- Aufgaben mit „Neue Übungsaufgabe“ haben eigene Zahlen. Inhalte mit „ergänzt“ (LS 06, LS 07a, Corporate Identity) stehen nicht in den Unterlagen und sollten mit der Lehrkraft abgeglichen werden.
- Die Original-PDFs der Lehrkraft gehören nicht auf die öffentliche Seite.
