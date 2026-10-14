/* Rechenweg-Prüfer
   Liest Rechenwege im deutschen Zahlenformat, z. B. "(1.850.000 + 150.000) : 2 × 6 %"
   Erlaubt: Zahlen (1.234,56), + − × : ( ) %, "Mio", "Mrd", "Tsd", "€", ein oder mehrere "=".
   Läuft im Browser (window.Rechner) und in Node (module.exports) für die Tests. */
(function (root) {
  'use strict';

  var EINHEITEN = { mio: 1e6, mrd: 1e9, tsd: 1e3 };

  // Beschriftungen in Klammern entfernen: "56 € (db)" -> "56 €"
  function ohneBeschriftung(text) {
    var alt;
    var s = String(text);
    do {
      alt = s;
      // Beschriftung = Klammer mit Buchstaben, aber ohne Rechenzeichen
      s = s.replace(/\([^()]*[A-Za-zÄÖÜäöüß][^()]*\)/g, function (m) {
        return /[+\-−–×*·:÷\/%]/.test(m) ? m : '';
      });
      // Klammer ohne Rechenzeichen direkt nach einer Zahl ist auch eine Beschriftung: "88,8 (2024)"
      s = s.replace(/([0-9A-Za-zÄÖÜäöüß€%)])(\s*)\([^()+\-−–×*·:÷\/%]*\)/g, '$1$2');
    } while (s !== alt);
    return s;
  }

  function zahlLesen(roh) {
    var s = roh;
    if (s.indexOf(',') >= 0) {
      s = s.replace(/\./g, '').replace(',', '.');
      if (s.indexOf(',') >= 0) return NaN;
    } else if (s.indexOf('.') >= 0) {
      if (/^\d{1,3}(\.\d{3})+$/.test(s)) s = s.replace(/\./g, '');
      else if ((s.match(/\./g) || []).length > 1) return NaN;
    }
    if (s === '' || s === '.') return NaN;
    return parseFloat(s);
  }

  function zerlegen(text) {
    var s = text
      // einzelnes x/X als Malzeichen lesen
      .replace(/(^|[^A-Za-zÄÖÜäöüß])[xX](?![A-Za-zÄÖÜäöüß])/g, '$1*')
      // Einheiten wie MXN, kg, Stück, EUR weglassen (Mio, Mrd, Tsd bleiben)
      .replace(/[A-Za-zÄÖÜäöüß]+\.?/g, function (w) { return /^(mio|mrd|tsd)\.?$/i.test(w) ? w : ' '; })
      .replace(/[×*·⋅]/g, '*')
      .replace(/[:÷\/]/g, '/')
      .replace(/[−–—]/g, '-')
      .replace(/€|eur(o)?\b/gi, '')
      .replace(/\s+/g, ' ')
      .trim();
    var tokens = [];
    var i = 0;
    while (i < s.length) {
      var c = s[i];
      if (c === ' ') { i++; continue; }
      if (/[0-9]/.test(c) || (c === ',' && /[0-9]/.test(s[i + 1] || ''))) {
        var j = i;
        while (j < s.length && /[0-9.,]/.test(s[j])) j++;
        var roh = s.slice(i, j).replace(/[.,]$/, function (m) { j--; return ''; });
        var z = zahlLesen(roh);
        if (isNaN(z)) throw new Error('Zahl „' + roh + '“ nicht lesbar');
        tokens.push({ t: 'zahl', v: z });
        i = j;
        continue;
      }
      if ('+-*/()%'.indexOf(c) >= 0) { tokens.push({ t: c }); i++; continue; }
      var w = s.slice(i).match(/^(mio|mrd|tsd)\.?/i);
      if (w) { tokens.push({ t: 'einheit', v: EINHEITEN[w[1].toLowerCase()] }); i += w[0].length; continue; }
      throw new Error('Zeichen „' + c + '“ verstehe ich nicht');
    }
    return tokens;
  }

  function auswerten(tokens) {
    var pos = 0;
    var ops = 0;
    function sieh() { return tokens[pos]; }
    function nimm(t) { if (sieh() && sieh().t === t) { pos++; return true; } return false; }

    function ausdruck() {
      var v = term();
      while (sieh() && (sieh().t === '+' || sieh().t === '-')) {
        var op = tokens[pos++].t; ops++;
        var r = term();
        v = op === '+' ? v + r : v - r;
      }
      return v;
    }
    function term() {
      var v = faktor();
      while (sieh() && (sieh().t === '*' || sieh().t === '/')) {
        var op = tokens[pos++].t; ops++;
        var r = faktor();
        if (op === '/' && r === 0) throw new Error('Division durch 0');
        v = op === '*' ? v * r : v / r;
      }
      return v;
    }
    function faktor() {
      if (nimm('-')) return -faktor();
      if (nimm('+')) return faktor();
      var v = primaer();
      for (;;) {
        if (nimm('%')) { v = v / 100; ops++; continue; }
        if (sieh() && sieh().t === 'einheit') { v = v * tokens[pos++].v; continue; }
        break;
      }
      return v;
    }
    function primaer() {
      var tk = sieh();
      if (!tk) throw new Error('Rechnung endet zu früh');
      if (tk.t === 'zahl') { pos++; return tk.v; }
      if (nimm('(')) {
        var v = ausdruck();
        if (!nimm(')')) throw new Error('Klammer „)“ fehlt');
        return v;
      }
      throw new Error('Unerwartetes Zeichen „' + tk.t + '“');
    }

    var wert = ausdruck();
    if (pos < tokens.length) throw new Error('Unerwartetes Zeichen „' + tokens[pos].t + '“');
    return { wert: wert, ops: ops };
  }

  // Liest eine ganze Eingabe, auch mit "=". Rückgabe:
  // { ok, wert, nurZahl, teile:[werte], gleichFehler, fehler }
  function lesen(eingabe) {
    var text = ohneBeschriftung(eingabe || '');
    if (!text.trim()) return { ok: false, leer: true };
    var stuecke = text.split('=').map(function (s) { return s.trim(); });
    // "x = 3 × 4" -> Variable vorne weglassen
    while (stuecke.length > 1 && !/[0-9]/.test(stuecke[0])) stuecke.shift();
    stuecke = stuecke.filter(function (s) { return s.length; });
    if (!stuecke.length) return { ok: false, fehler: 'Keine Rechnung gefunden' };
    var werte = [];
    var opsErstes = 0;
    try {
      stuecke.forEach(function (st, i) {
        var r = auswerten(zerlegen(st));
        if (i === 0) opsErstes = r.ops;
        werte.push(r.wert);
      });
    } catch (e) {
      return { ok: false, fehler: e.message };
    }
    var wert = werte[0];
    var gleichFehler = null;
    for (var k = 1; k < werte.length; k++) {
      if (!nahe(werte[k], wert, toleranzFuer(werte[k], 2))) { gleichFehler = { erwartet: wert, steht: werte[k] }; break; }
    }
    return { ok: true, wert: wert, nurZahl: opsErstes === 0, teile: werte, gleichFehler: gleichFehler };
  }

  function toleranzFuer(ziel, nk) {
    var stellen = (nk === undefined || nk === null) ? 2 : nk;
    return 0.6 * Math.pow(10, -stellen) + Math.abs(ziel) * 1e-5;
  }

  function nahe(a, b, tol) { return Math.abs(a - b) <= tol; }

  function format(z, nk) {
    if (typeof z !== 'number' || !isFinite(z)) return '–';
    var stellen = (nk === undefined || nk === null) ? 2 : nk;
    return z.toLocaleString('de-DE', { minimumFractionDigits: 0, maximumFractionDigits: stellen });
  }

  // Prüft eine Eingabe gegen einen Schritt { ergebnis, nk, tol, nurZahl }
  function pruefen(eingabe, schritt) {
    var r = lesen(eingabe);
    var tol = schritt.tol !== undefined ? schritt.tol : toleranzFuer(schritt.ergebnis, schritt.nk);
    if (r.leer) return { status: 'leer', meldung: 'Tippe zuerst deinen Rechenweg ein.' };
    if (!r.ok) return { status: 'unlesbar', meldung: r.fehler + '. Nutze Zahlen und × : + − ( ) %.' };
    if (r.gleichFehler) {
      return { status: 'gleich', wert: r.wert, meldung: 'Deine Rechnung ergibt ' + format(r.wert, 4) + ', hinter dem = steht aber ' + format(r.gleichFehler.steht, 4) + '.' };
    }
    var richtig = nahe(r.wert, schritt.ergebnis, tol);
    if (richtig && r.nurZahl && !schritt.nurZahl) {
      return { status: 'ohneWeg', wert: r.wert, meldung: 'Das Ergebnis stimmt, aber der Rechenweg fehlt. Schreib die Rechnung mit hin, z. B. „a × b“.' };
    }
    if (richtig) return { status: 'richtig', wert: r.wert };
    var hinweis = 'Das stimmt noch nicht.';
    if (schritt.ergebnis !== 0) {
      if (nahe(r.wert * 100, schritt.ergebnis, tol * 2)) hinweis = 'Fast: Gefragt ist der Wert in Prozent. Rechne noch × 100.';
      else if (nahe(r.wert / 100, schritt.ergebnis, tol * 2)) hinweis = 'Fast: Dein Ergebnis ist 100-mal zu groß. Prüfe die Prozentrechnung.';
      else if (nahe(-r.wert, schritt.ergebnis, tol)) hinweis = 'Fast: Das Vorzeichen stimmt nicht.';
      else if (nahe(r.wert - 100, schritt.ergebnis, tol) || nahe(r.wert + 100, schritt.ergebnis, tol)) hinweis = 'Fast: Gefragt ist die Veränderung. Denk an „− 100“.';
    }
    return { status: 'falsch', wert: r.wert, meldung: hinweis };
  }

  var Rechner = { lesen: lesen, pruefen: pruefen, format: format, ohneBeschriftung: ohneBeschriftung, toleranzFuer: toleranzFuer };
  if (typeof module !== 'undefined' && module.exports) module.exports = Rechner;
  else root.Rechner = Rechner;
})(typeof window !== 'undefined' ? window : this);
