// Prüft alle Inhalte: Jede Musterlösung läuft durch denselben Rechenweg-Prüfer wie auf der Website.
// Aufruf: node tools/test.js
'use strict';
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const R = require('../js/rechner.js');

const root = path.join(__dirname, '..');
const ctx = { window: {} };
vm.createContext(ctx);
fs.readdirSync(path.join(root, 'content')).filter(f => f.endsWith('.js') && !f.startsWith('_')).forEach(f => {
  vm.runInContext(fs.readFileSync(path.join(root, 'content', f), 'utf8'), ctx, { filename: f });
});
const bereiche = ctx.window.LERN_BEREICHE || [];
let fehler = 0, rechen = 0, auswahl = 0, text = 0;
function f(msg) { fehler++; console.log('FEHLER  ' + msg); }

bereiche.forEach(b => {
  const ids = new Set();
  const themen = new Set(b.themen.map(t => t.id));
  const pruefId = (id, wo) => { if (ids.has(id)) f(wo + ': doppelte id ' + id); ids.add(id); };
  b.lernzettel.forEach(z => { pruefId(z.id, 'Lernzettel'); if (!themen.has(z.thema)) f('Lernzettel ' + z.id + ': Thema unbekannt'); });
  b.legende.forEach(l => { if (!themen.has(l.thema)) f('Legende ' + l.begriff + ': Thema unbekannt'); });
  b.karten.forEach(k => {
    pruefId(k.id, 'Karte');
    if (!themen.has(k.thema)) f('Karte ' + k.id + ': Thema unbekannt');
    if (!k.vorne || !k.hinten) f('Karte ' + k.id + ': vorne/hinten fehlt');
  });
  b.aufgaben.forEach(a => {
    pruefId(a.id, 'Aufgabe');
    if (!themen.has(a.thema)) f(a.id + ': Thema unbekannt');
    const teile = new Set(a.teile.map(t => t.nr));
    a.schritte.forEach((s, i) => {
      const wo = a.id + ' Schritt ' + (i + 1);
      if (!teile.has(s.teil)) f(wo + ': Teil ' + s.teil + ' fehlt in teile');
      const typ = s.typ || 'rechnen';
      if (typ === 'rechnen') {
        rechen++;
        if (typeof s.ergebnis !== 'number') return f(wo + ': ergebnis fehlt');
        if (!s.tipp) f(wo + ': Formel-Tipp fehlt');
        const r = R.pruefen(s.muster, s);
        if (r.status !== 'richtig') f(wo + ': Musterlösung „' + s.muster + '“ → ' + r.status + ' (' + (r.wert !== undefined ? r.wert : r.meldung) + ', erwartet ' + s.ergebnis + ')');
        const genau = R.lesen(s.muster).wert;
        if (Math.abs(genau - s.ergebnis) > R.toleranzFuer(s.ergebnis, s.nk) * 0.9 && s.tol === undefined) f(wo + ': knapp an der Toleranz (' + genau + ' vs ' + s.ergebnis + ')');
        if (!s.nurZahl) {
          const nur = R.pruefen(String(s.ergebnis).replace('.', ','), s);
          if (nur.status !== 'ohneWeg') f(wo + ': reine Zahl sollte „Rechenweg fehlt“ melden, gab ' + nur.status);
        }
      } else if (typ === 'auswahl') {
        auswahl++;
        if (!(s.richtig >= 0 && s.richtig < s.optionen.length)) f(wo + ': richtig-Index ungültig');
      } else if (typ === 'text') {
        text++;
        if (!s.antwort || !s.antwort.length) f(wo + ': Antwort fehlt');
      } else f(wo + ': unbekannter Typ ' + typ);
    });
  });
  const proThema = {};
  b.karten.forEach(k => { proThema[k.thema] = (proThema[k.thema] || 0) + 1; });
  console.log(b.id + ': ' + b.aufgaben.length + ' Aufgaben, ' + b.lernzettel.length + ' Lernzettel, ' + b.legende.length + ' Legende, ' + b.karten.length + ' Karten ' + JSON.stringify(proThema));
});

// Ein paar Eingaben, wie Schüler sie tippen
const faelle = [
  ['(1.850.000 + 150.000) : 2 × 6 %', 60000],
  ['6,65 Mio : 35 Mio x 100', 19],
  ['944,78 : 97 × 100 = 974', 974],
  ['x = 88,8 : 20,2 × 100 − 100', 339.6039603960396],
  ['2.370 MXN : 15,37591', 154.13721854511377],
  ['56 € (db) : 70 min (Zeit pro Stück)', 0.8]
];
faelle.forEach(([e, w]) => { const r = R.lesen(e); if (!r.ok || Math.abs(r.wert - w) > 1e-9) f('Prüfer: „' + e + '“ ergibt ' + r.wert); });
const gl = R.pruefen('3 × 4 = 13', { ergebnis: 12, nk: 0 });
if (gl.status !== 'gleich') f('Prüfer: falsches Ergebnis hinter = nicht erkannt');

console.log('\n' + rechen + ' Rechenschritte, ' + auswahl + ' Auswahlfragen, ' + text + ' Textfragen geprüft.');
console.log(fehler ? fehler + ' Fehler.' : 'Alles in Ordnung.');
process.exit(fehler ? 1 : 0);
