/* Klausurtrainer – App
   Liest alle Bereiche aus window.LERN_BEREICHE (je eine Datei in /content)
   und baut daraus die Seite. Kein Server, keine Anmeldung, Fortschritt im Browser. */
(function () {
  'use strict';

  var R = window.Rechner;
  var BEREICHE = window.LERN_BEREICHE || [];
  BEREICHE.forEach(function (b) {
    ['themen', 'lernzettel', 'legende', 'aufgaben', 'karten'].forEach(function (k) { b[k] = b[k] || []; });
    b.aufgaben.forEach(function (a) { a.teile = a.teile || []; a.schritte.forEach(function (s) { if (!s.typ) s.typ = 'rechnen'; }); });
  });
  var app = document.getElementById('app');
  var MS = 'klausurtrainer:v1:';
  // In einer eingebetteten Vorschau gehen Downloads nicht, dort nur der Code
  var imRahmen = (function () { try { return window.self !== window.top; } catch (e) { return true; } })();

  // ---------- Hilfen ----------
  function esc(s) {
    return String(s === undefined || s === null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }
  // **fett**, `formel`, Zeilenumbruch
  function fmt(s) {
    return esc(s)
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/`(.+?)`/g, '<code>$1</code>')
      .replace(/\n/g, '<br>');
  }
  function zahl(z, nk) { return R.format(z, nk === undefined ? 2 : nk); }
  function mitEinheit(z, s) {
    var nk = s.nk === undefined ? 2 : s.nk;
    var t = zahl(z, nk);
    if (s.einheit === '€') t = z.toLocaleString('de-DE', { minimumFractionDigits: nk, maximumFractionDigits: nk });
    return t + (s.einheit ? ' ' + s.einheit : '');
  }
  function mischen(a) {
    var b = a.slice();
    for (var i = b.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = b[i]; b[i] = b[j]; b[j] = t; }
    return b;
  }
  function prozent(a, b) { return b ? Math.round(a / b * 100) : 0; }

  // ---------- Speicher (localStorage, immer mit try/catch) ----------
  var speicherOk = true;
  var fluechtig = {};
  function laden(key) {
    try { var v = window.localStorage.getItem(MS + key); return v ? JSON.parse(v) : null; }
    catch (e) { speicherOk = false; return fluechtig[key] || null; }
  }
  function sichern(key, wert) {
    fluechtig[key] = wert;
    try { window.localStorage.setItem(MS + key, JSON.stringify(wert)); }
    catch (e) { speicherOk = false; }
  }
  function leererStand() {
    return { v: 1, haken: {}, gelesen: {}, aufg: {}, karten: {}, fehler: {}, stat: { schritte: 0, erste: 0, kr: 0, kf: 0, thema: {} } };
  }
  function stand(b) {
    if (!b._stand) {
      var s = laden(b.id);
      b._stand = (s && s.v === 1) ? s : leererStand();
      ['haken', 'gelesen', 'aufg', 'karten', 'fehler'].forEach(function (k) { b._stand[k] = b._stand[k] || {}; });
      b._stand.stat = b._stand.stat || leererStand().stat;
      b._stand.stat.thema = b._stand.stat.thema || {};
    }
    return b._stand;
  }
  function speichern(b) { sichern(b.id, stand(b)); }
  function themaStat(b, th) {
    var t = stand(b).stat.thema;
    t[th] = t[th] || { s: 0, e: 0, kr: 0, kf: 0 };
    return t[th];
  }

  // ---------- Theme ----------
  var themen = ['system', 'light', 'dark'];
  var themeWahl = laden('_theme') || 'system';
  function themeSetzen(w) {
    themeWahl = w;
    if (w === 'system') document.documentElement.removeAttribute('data-theme');
    else document.documentElement.setAttribute('data-theme', w);
    sichern('_theme', w);
  }
  themeSetzen(themeWahl);

  // ---------- Zustand der Ansicht ----------
  var V = { bereich: null, tab: 'aufgaben', aufgabe: null, fach: null, zettelThema: 'alle', karten: null, nurFalsche: false, confirm: null, meldung: null };

  function bereichVon(id) { for (var i = 0; i < BEREICHE.length; i++) if (BEREICHE[i].id === id) return BEREICHE[i]; return null; }
  function themaVon(b, id) { for (var i = 0; i < b.themen.length; i++) if (b.themen[i].id === id) return b.themen[i]; return { id: id, titel: id }; }
  function aufgabeVon(b, id) { for (var i = 0; i < b.aufgaben.length; i++) if (b.aufgaben[i].id === id) return b.aufgaben[i]; return null; }
  function karteVon(b, id) { for (var i = 0; i < b.karten.length; i++) if (b.karten[i].id === id) return b.karten[i]; return null; }

  function hashSetzen() {
    var h = V.bereich ? V.bereich.id + '.' + V.tab : '';
    try { if (location.hash.slice(1) !== h) history.replaceState(null, '', h ? '#' + h : location.pathname); } catch (e) { /* egal */ }
  }
  function hashLesen() {
    var h = (location.hash || '').slice(1).split('.');
    var b = bereichVon(h[0]);
    if (b) { V.bereich = b; if (['fortschritt', 'lernzettel', 'aufgaben', 'lernkarten'].indexOf(h[1]) >= 0) V.tab = h[1]; }
  }

  // ---------- Fortschritts-Logik ----------
  function kartenStand(b, id) {
    var k = stand(b).karten[id];
    if (!k || (k.r + k.f) === 0) return 'neu';
    if (k.serie >= 2) return 'sitzt';
    return 'lerne';
  }
  function stapel(b, th) { return b.karten.filter(function (k) { return th === 'alle' || k.thema === th; }); }
  function stapelSitzt(b, th) { return stapel(b, th).filter(function (k) { return kartenStand(b, k.id) === 'sitzt'; }).length; }

  function einheiten(b) {
    var st = stand(b);
    var liste = [];
    b.themen.forEach(function (t) {
      b.lernzettel.filter(function (z) { return z.thema === t.id; }).forEach(function (z) {
        liste.push({ id: 'z:' + z.id, thema: t.id, art: 'Lernzettel', titel: z.titel, auto: !!st.gelesen[z.id] });
      });
      b.aufgaben.filter(function (a) { return a.thema === t.id; }).forEach(function (a) {
        var g = st.aufg[a.id];
        liste.push({ id: 'a:' + a.id, thema: t.id, art: 'Aufgabe', titel: a.titel, auto: !!(g && g.fertig) });
      });
      var n = stapel(b, t.id).length;
      if (n) liste.push({ id: 'k:' + t.id, thema: t.id, art: 'Lernkarten', titel: 'Stapel ' + t.titel + ' (' + n + ' Karten)', auto: stapelSitzt(b, t.id) === n });
    });
    liste.forEach(function (e) { e.erledigt = e.auto || !!st.haken[e.id]; });
    return liste;
  }

  function fehlerMerken(b, key, daten) {
    var f = stand(b).fehler;
    var alt = f[key] || { n: 0 };
    daten.n = alt.n + 1;
    daten.offen = true;
    f[key] = daten;
  }
  function fehlerErledigt(b, key) { var f = stand(b).fehler[key]; if (f) f.offen = false; }

  // ---------- Grundgerüst ----------
  function render() {
    hashSetzen();
    var h = '';
    h += kopf();
    h += '<main class="wrap">';
    if (!BEREICHE.length) h += '<p class="leer">Noch kein Lernstoff eingetragen. Lege eine Datei in /content an.</p>';
    else if (!V.bereich) h += startSeite();
    else h += bereichSeite(V.bereich);
    h += '</main>';
    h += '<footer class="wrap fuss"><span>Kostenlos, ohne Anmeldung. Dein Fortschritt bleibt nur in diesem Browser gespeichert.</span>' +
      (speicherOk ? '' : '<span class="warn-text"> Speichern ist in diesem Browser gerade nicht möglich. Nutze „Fortschritt mitnehmen“, bevor du die Seite schließt.</span>') + '</footer>';
    app.innerHTML = h;
    nachRender();
  }

  function kopf() {
    var faecher = [];
    BEREICHE.forEach(function (b) { if (faecher.indexOf(b.fach) < 0) faecher.push(b.fach); });
    var aktFach = V.bereich ? V.bereich.fach : V.fach;
    var h = '<header class="kopf"><div class="wrap kopf-in">';
    h += '<button class="marke" data-a="start" type="button">Klausurtrainer<span>Industriekaufleute</span></button>';
    h += '<nav class="faecher" aria-label="Fächer">';
    faecher.forEach(function (f) {
      h += '<button type="button" class="fach' + (f === aktFach ? ' an' : '') + '" data-a="fach" data-f="' + esc(f) + '">' + esc(f) + '</button>';
    });
    h += '</nav>';
    var tl = { system: 'Auto', light: 'Hell', dark: 'Dunkel' }[themeWahl];
    h += '<button type="button" class="theme" data-a="theme" aria-label="Farbschema wechseln, gerade: ' + tl + '">' + tl + '</button>';
    h += '</div></header>';
    return h;
  }

  function startSeite() {
    var h = '<section class="start"><h1>Für jede Klassenarbeit ein eigener Bereich</h1>' +
      '<p class="lead">Lernzettel lesen, Prüfungsaufgaben Schritt für Schritt rechnen, Lernkarten abfragen. Wähle oben ein Fach oder unten eine Klassenarbeit.</p>';
    var faecher = [];
    BEREICHE.forEach(function (b) { if (faecher.indexOf(b.fach) < 0) faecher.push(b.fach); });
    faecher.filter(function (f) { return !V.fach || V.fach === f; }).forEach(function (f) {
      h += '<h2 class="eyebrow">' + esc(f) + '</h2><div class="liste">';
      BEREICHE.filter(function (b) { return b.fach === f; }).forEach(function (b) {
        var e = einheiten(b);
        var fertig = e.filter(function (x) { return x.erledigt; }).length;
        h += '<button type="button" class="karte-btn" data-a="bereich" data-id="' + esc(b.id) + '">' +
          '<span class="kb-titel">' + esc(b.titel) + '</span>' +
          '<span class="kb-meta">' + esc(b.untertitel || '') + '</span>' +
          '<span class="pill">' + fertig + '/' + e.length + '</span></button>';
      });
      h += '</div>';
    });
    return h + '</section>';
  }

  function bereichSeite(b) {
    var tabs = [['fortschritt', 'Fortschritt'], ['lernzettel', 'Lernzettel'], ['aufgaben', 'Aufgaben'], ['lernkarten', 'Lernkarten']];
    var h = '<div class="b-kopf"><p class="eyebrow">' + esc(b.fach) + ' · ' + esc(b.untertitel || '') + '</p><h1>' + esc(b.titel) + '</h1></div>';
    h += '<nav class="tabs" role="tablist">';
    tabs.forEach(function (t) {
      h += '<button type="button" role="tab" aria-selected="' + (V.tab === t[0]) + '" class="tab' + (V.tab === t[0] ? ' an' : '') + '" data-a="tab" data-t="' + t[0] + '">' + t[1] + '</button>';
    });
    h += '</nav>';
    if (V.tab === 'fortschritt') h += fortschrittSeite(b);
    else if (V.tab === 'lernzettel') h += zettelSeite(b);
    else if (V.tab === 'aufgaben') h += V.aufgabe ? aufgabeSeite(b, V.aufgabe) : aufgabenListe(b);
    else h += V.karten ? kartenSitzung(b) : kartenUebersicht(b);
    return h;
  }

  // ---------- Fortschritt ----------
  function balken(a, n, label) {
    var p = prozent(a, n);
    return '<div class="balken-zeile"><div class="bz-text"><span>' + esc(label) + '</span><span class="mono">' + a + ' von ' + n + ' erledigt (' + p + ' %)</span></div>' +
      '<div class="balken" role="progressbar" aria-valuenow="' + p + '" aria-valuemin="0" aria-valuemax="100"><i style="width:' + p + '%"></i></div></div>';
  }

  function fortschrittSeite(b) {
    var st = stand(b);
    var e = einheiten(b);
    var fertig = e.filter(function (x) { return x.erledigt; }).length;
    var h = '<section class="panel">';
    h += balken(fertig, e.length, 'Gesamt');
    h += '<div class="themen-balken">';
    b.themen.forEach(function (t) {
      var et = e.filter(function (x) { return x.thema === t.id; });
      h += balken(et.filter(function (x) { return x.erledigt; }).length, et.length, t.titel);
    });
    h += '</div></section>';

    // Statistik
    var aGes = b.aufgaben.length;
    var aFertig = b.aufgaben.filter(function (a) { return st.aufg[a.id] && st.aufg[a.id].fertig; }).length;
    var s = st.stat;
    var kGes = s.kr + s.kf;
    var schwach = schwaechstesThema(b);
    h += '<section class="stats">';
    h += kachel('Aufgaben gelöst', aFertig + ' / ' + aGes);
    h += kachel('Schritte beim 1. Versuch richtig', s.schritte ? prozent(s.erste, s.schritte) + ' %' : '–', s.schritte ? s.erste + ' von ' + s.schritte : 'noch keine Schritte');
    h += kachel('Lernkarten', s.kr + ' gewusst', s.kf + ' nicht gewusst');
    h += kachel('Trefferquote Karten', kGes ? prozent(s.kr, kGes) + ' %' : '–');
    h += kachel('Schwächstes Thema', schwach ? schwach.titel : '–', schwach ? schwach.info : 'braucht erst ein paar Antworten');
    h += '</section>';

    // Wiederholen
    var offen = [];
    Object.keys(st.fehler).forEach(function (k) { var f = st.fehler[k]; if (f.offen) offen.push({ key: k, f: f }); });
    offen.sort(function (x, y) { return y.f.n - x.f.n; });
    h += '<section class="panel"><h2>Das solltest du wiederholen</h2>';
    if (!offen.length) h += '<p class="muted">Noch nichts. Hier sammeln sich alle Schritte und Karten, die du falsch hattest.</p>';
    else {
      h += '<ul class="wdh">';
      offen.slice(0, 25).forEach(function (o) {
        var f = o.f;
        var knopf = f.art === 'schritt'
          ? '<button type="button" class="link" data-a="oeffne-schritt" data-id="' + esc(f.aufgabe) + '" data-i="' + f.idx + '">Üben</button>'
          : '<button type="button" class="link" data-a="falsche-karten">Üben</button>';
        h += '<li><span class="tag">' + (f.art === 'schritt' ? 'Aufgabe' : 'Karte') + '</span><span class="wdh-text">' + esc(f.text) +
          '<small>' + esc(f.wo || '') + ' · ' + f.n + '× falsch</small></span>' + knopf + '</li>';
      });
      h += '</ul>';
    }
    h += '</section>';

    // Lerneinheiten
    h += '<section class="panel"><h2>Lerneinheiten</h2><p class="muted klein">Haken setzen sich automatisch, wenn du einen Abschnitt gelesen, eine Aufgabe beendet oder alle Karten eines Stapels sicher hast. Du kannst auch selbst abhaken.</p>';
    b.themen.forEach(function (t) {
      var et = e.filter(function (x) { return x.thema === t.id; });
      var ef = et.filter(function (x) { return x.erledigt; }).length;
      h += '<details class="einheiten-thema"><summary><span>' + esc(t.titel) + '</span><span class="mono">' + ef + '/' + et.length + '</span></summary><ul class="checks">';
      et.forEach(function (x) {
        var id = 'chk-' + x.id.replace(/[^a-z0-9]/gi, '-');
        h += '<li><input type="checkbox" id="' + id + '" data-a="haken" data-id="' + esc(x.id) + '"' + (x.erledigt ? ' checked' : '') + (x.auto ? ' disabled' : '') + '>' +
          '<label for="' + id + '"><span class="tag">' + x.art + '</span> ' + esc(x.titel) + '</label></li>';
      });
      h += '</ul></details>';
    });
    h += '</section>';

    // Mitnehmen
    h += '<section class="panel"><h2>Fortschritt mitnehmen</h2>' +
      '<p class="muted klein">Ohne Anmeldung liegt dein Fortschritt nur in diesem Browser. Kopiere den Code und füge ihn auf dem anderen Gerät unten ein.</p>' +
      '<div class="export"><textarea id="export-code" readonly rows="3">' + esc(exportCode()) + '</textarea>' +
      '<div class="reihe"><button type="button" class="btn" data-a="kopieren">Code kopieren</button>' +
      (imRahmen ? '' : '<button type="button" class="btn ghost" data-a="datei-speichern">Als Datei speichern</button>') + '</div></div>' +
      '<label class="lbl" for="import-code">Code von einem anderen Gerät</label>' +
      '<textarea id="import-code" rows="3" placeholder="Code hier einfügen"></textarea>' +
      '<div class="reihe"><button type="button" class="btn" data-a="import">Fortschritt laden</button>' +
      '<label class="btn ghost datei-lbl" for="import-datei">Datei laden</label><input type="file" id="import-datei" accept=".json,.txt" class="sr"></div>' +
      (V.meldung ? '<p class="meldung" role="status">' + esc(V.meldung) + '</p>' : '') +
      '</section>';

    // Zurücksetzen
    h += '<section class="panel gefahr"><h2>Fortschritt zurücksetzen</h2>';
    if (V.confirm === 'reset') {
      h += '<p>Wirklich alles für „' + esc(b.titel) + '“ löschen? Das lässt sich nicht rückgängig machen.</p>' +
        '<div class="reihe"><button type="button" class="btn bad" data-a="reset-ja">Ja, alles löschen</button><button type="button" class="btn ghost" data-a="reset-nein">Abbrechen</button></div>';
    } else {
      h += '<p class="muted klein">Löscht Haken, Aufgaben, Lernkarten und Statistik dieser Klassenarbeit.</p><button type="button" class="btn ghost" data-a="reset">Fortschritt zurücksetzen</button>';
    }
    h += '</section>';
    return h;
  }

  function kachel(titel, wert, sub) {
    return '<div class="kachel"><span class="k-titel">' + esc(titel) + '</span><span class="k-wert' + (/[0-9–]/.test(String(wert).charAt(0)) ? '' : ' wort') + '">' + esc(wert) + '</span>' + (sub ? '<span class="k-sub">' + esc(sub) + '</span>' : '') + '</div>';
  }

  function schwaechstesThema(b) {
    var best = null;
    b.themen.forEach(function (t) {
      var s = themaStat(b, t.id);
      var n = s.s + s.kr + s.kf;
      if (n < 4) return;
      var q = (s.e + s.kr) / n;
      if (!best || q < best.q) best = { q: q, titel: t.titel, info: Math.round(q * 100) + ' % richtig (' + n + ' Antworten)' };
    });
    return best;
  }

  function exportCode() {
    var daten = {};
    BEREICHE.forEach(function (b) { daten[b.id] = stand(b); });
    try { return btoa(unescape(encodeURIComponent(JSON.stringify({ app: 'klausurtrainer', v: 1, daten: daten })))); }
    catch (e) { return ''; }
  }
  function importieren(code) {
    try {
      var text = code.trim();
      var obj = text.charAt(0) === '{' ? JSON.parse(text) : JSON.parse(decodeURIComponent(escape(atob(text))));
      if (!obj || obj.app !== 'klausurtrainer' || !obj.daten) throw new Error();
      var n = 0;
      Object.keys(obj.daten).forEach(function (id) {
        var b = bereichVon(id);
        if (b && obj.daten[id] && obj.daten[id].v === 1) { b._stand = null; sichern(id, obj.daten[id]); stand(b); n++; }
      });
      V.meldung = n ? 'Fortschritt geladen (' + n + ' Klassenarbeit' + (n > 1 ? 'en' : '') + ').' : 'Im Code war kein passender Fortschritt.';
    } catch (e) {
      V.meldung = 'Der Code ist nicht lesbar. Kopiere ihn bitte vollständig.';
    }
  }

  // ---------- Lernzettel ----------
  function zettelSeite(b) {
    var st = stand(b);
    var h = '<div class="filter" role="group" aria-label="Thema">';
    h += '<button type="button" class="chip' + (V.zettelThema === 'alle' ? ' an' : '') + '" data-a="zthema" data-t="alle">Alle</button>';
    b.themen.forEach(function (t) { h += '<button type="button" class="chip' + (V.zettelThema === t.id ? ' an' : '') + '" data-a="zthema" data-t="' + t.id + '">' + esc(t.titel) + '</button>'; });
    h += '</div>';
    b.themen.filter(function (t) { return V.zettelThema === 'alle' || V.zettelThema === t.id; }).forEach(function (t) {
      h += '<section class="thema-block"><p class="eyebrow">' + esc(t.blaetter || '') + '</p><h2>' + esc(t.titel) + '</h2>';
      b.lernzettel.filter(function (z) { return z.thema === t.id; }).forEach(function (z) {
        var id = 'gel-' + z.id;
        h += '<article class="zettel' + (st.gelesen[z.id] ? ' gelesen' : '') + '"><header><h3>' + esc(z.titel) + '</h3>' + (z.quelle ? '<span class="quelle">' + esc(z.quelle) + '</span>' : '') + '</header>';
        if (z.kern) h += '<p class="kern">' + fmt(z.kern) + '</p>';
        if (z.schema && z.schema.length) {
          h += '<h4>Rechenschema</h4><ol class="schema">';
          z.schema.forEach(function (s) { h += '<li><span>' + fmt(s.text) + '</span>' + (s.formel ? '<code class="formel">' + esc(s.formel) + '</code>' : '') + '</li>'; });
          h += '</ol>';
        }
        if (z.tabelle) h += tabelle(z.tabelle);
        if (z.punkte && z.punkte.length) {
          h += '<h4>' + esc(z.punkteTitel || 'Für Textfragen') + '</h4><ul class="punkte">';
          z.punkte.forEach(function (p) { h += '<li>' + fmt(p) + '</li>'; });
          h += '</ul>';
        }
        if (z.fallen && z.fallen.length) {
          h += '<div class="fallen"><h4>Typische Fallen</h4><ul>';
          z.fallen.forEach(function (p) { h += '<li>' + fmt(p) + '</li>'; });
          h += '</ul></div>';
        }
        if (z.hinweis) h += '<p class="hinweis">' + fmt(z.hinweis) + '</p>';
        h += '<div class="gelesen-zeile"><input type="checkbox" id="' + id + '" data-a="gelesen" data-id="' + esc(z.id) + '"' + (st.gelesen[z.id] ? ' checked' : '') + '><label for="' + id + '">Gelesen</label></div>';
        h += '</article>';
      });
      var leg = b.legende.filter(function (l) { return l.thema === t.id; });
      if (leg.length) {
        h += '<details class="legende"><summary>Legende: ' + leg.length + ' Begriffe und Abkürzungen</summary><dl>';
        leg.forEach(function (l) {
          h += '<div><dt>' + esc(l.begriff) + '</dt><dd>' + fmt(l.erklaerung) + (l.beispiel ? '<span class="bsp">Beispiel: ' + fmt(l.beispiel) + '</span>' : '') + '</dd></div>';
        });
        h += '</dl></details>';
      }
      h += '</section>';
    });
    return h;
  }

  function tabelle(t) {
    var h = '<div class="tab-scroll">' + (t.titel ? '<p class="tab-titel">' + esc(t.titel) + '</p>' : '') + '<table><thead><tr>';
    t.kopf.forEach(function (k) { h += '<th>' + esc(k) + '</th>'; });
    h += '</tr></thead><tbody>';
    t.zeilen.forEach(function (z) {
      h += '<tr>';
      z.forEach(function (c, i) { h += '<td' + (i > 0 && /^[−\-+]?[\d.,]+\s?(€|%|Stück|MXN)?$/.test(String(c)) ? ' class="num"' : '') + '>' + fmt(c) + '</td>'; });
      h += '</tr>';
    });
    h += '</tbody></table>' + (t.fuss ? '<p class="tab-fuss">' + fmt(t.fuss) + '</p>' : '') + '</div>';
    return h;
  }

  // ---------- Aufgabenliste ----------
  function aufgabenListe(b) {
    var st = stand(b);
    var h = '';
    b.themen.forEach(function (t) {
      var liste = b.aufgaben.filter(function (a) { return a.thema === t.id; });
      if (!liste.length) return;
      h += '<section class="thema-block"><p class="eyebrow">' + esc(t.titel) + '</p><p class="muted">' + esc(t.kurz || '') + '</p><div class="liste">';
      liste.forEach(function (a) {
        var g = st.aufg[a.id];
        var pill = '<span class="pill">Neu</span>';
        if (g && g.fertig && g.best !== undefined && g.best !== null) pill = '<span class="pill ok">' + zahl(g.best, 1) + '/' + zahl(maxPunkte(a), 0) + ' P</span>';
        if (g && !g.fertigLauf && g.i > 0) pill = '<span class="pill blau">Schritt ' + (g.i + 1) + '/' + a.schritte.length + '</span>';
        h += '<button type="button" class="karte-btn" data-a="aufgabe" data-id="' + esc(a.id) + '">' +
          '<span class="kb-titel">' + esc(a.titel) + '</span>' +
          '<span class="kb-meta">' + esc(a.quelle) + (a.kontext ? ' · ' + esc(a.kontext) : '') + ' · ' + a.schritte.length + ' Schritte</span>' + pill + '</button>';
      });
      h += '</div></section>';
    });
    return h;
  }

  function maxPunkte(a) { return a.teile.reduce(function (s, t) { return s + (t.punkte || 0); }, 0); }
  function schrittPunkte(a, idx) {
    var s = a.schritte[idx];
    var teil = a.teile.filter(function (t) { return t.nr === s.teil; })[0];
    if (!teil) return 0;
    var n = a.schritte.filter(function (x) { return x.teil === s.teil; }).length;
    return (teil.punkte || 0) / n;
  }

  // ---------- Aufgabe (Prüfungsmodus) ----------
  function lauf(b, a) {
    var st = stand(b);
    var g = st.aufg[a.id];
    if (!g) { g = st.aufg[a.id] = { i: 0, erg: {}, fertig: false, fertigLauf: false, best: null }; }
    g.erg = g.erg || {};
    return g;
  }

  function aufgabeSeite(b, id) {
    var a = aufgabeVon(b, id);
    if (!a) { V.aufgabe = null; return aufgabenListe(b); }
    var g = lauf(b, a);
    var h = '<div class="a-kopf"><button type="button" class="link zurueck" data-a="liste">← Alle Aufgaben</button>' +
      '<p class="eyebrow">' + esc(themaVon(b, a.thema).titel) + ' · ' + esc(a.quelle) + '</p><h2>' + esc(a.titel) + '</h2>' +
      (a.einleitung ? '<p class="einleitung">' + fmt(a.einleitung) + '</p>' : '') + '</div>';

    if (a.angaben && a.angaben.length) {
      h += '<details class="angaben"' + (g.i === 0 ? ' open' : '') + '><summary>Angaben</summary>';
      a.angaben.forEach(function (t) { h += tabelle(t); });
      h += '</details>';
    }
    h += '<details class="stellung"' + (g.i === 0 ? ' open' : '') + '><summary>Aufgabenstellung</summary><ol class="teile">';
    a.teile.forEach(function (t) {
      h += '<li><span class="nr mono">' + esc(t.nr) + '</span><span>' + fmt(t.text) + ' <span class="punkte mono">(' + zahl(t.punkte, 1) + ' Punkte)</span></span></li>';
    });
    h += '</ol></details>';

    // Ergebnis-Chips
    var chips = '';
    for (var i = 0; i < Math.min(g.i, a.schritte.length); i++) {
      var s = a.schritte[i];
      var e = g.erg[i] || {};
      if (s.typ === 'text') continue;
      var wert = s.typ === 'auswahl' ? s.optionen[s.richtig] : mitEinheit(s.ergebnis, s);
      chips += '<span class="chip-erg' + (e.erste ? '' : ' nach') + '" title="' + esc(s.frage) + '"><b>' + esc(s.label || ('Schritt ' + (i + 1))) + '</b> ' + esc(wert) + '</span>';
    }
    if (chips) h += '<div class="chips" aria-label="Bisherige Ergebnisse">' + chips + '</div>';

    if (g.i >= a.schritte.length) h += abschluss(b, a, g);
    else h += schrittKarte(b, a, g);
    return h;
  }

  function schrittKarte(b, a, g) {
    var idx = g.i;
    var s = a.schritte[idx];
    var e = g.erg[idx] = g.erg[idx] || { fehl: 0, tipp: false, muster: false, ok: false };
    var teil = a.teile.filter(function (t) { return t.nr === s.teil; })[0];
    var h = '<section class="schritt" aria-live="polite">';
    h += '<div class="s-kopf mono"><span>Schritt ' + (idx + 1) + ' / ' + a.schritte.length + '</span>' + (teil ? '<span>Aufgabe ' + esc(teil.nr) + '</span>' : '') + '</div>';
    if (s.wozu) h += '<p class="wozu">' + fmt(s.wozu) + '</p>';
    h += '<p class="frage">' + fmt(s.frage) + '</p>';

    if (s.typ === 'auswahl') {
      h += '<div class="optionen">';
      s.optionen.forEach(function (o, i) {
        var cls = '';
        if (e.ok && i === s.richtig) cls = ' richtig';
        else if (e.gewaehlt && e.gewaehlt.indexOf(i) >= 0) cls = ' falsch';
        h += '<button type="button" class="option' + cls + '" data-a="wahl" data-i="' + i + '"' + (e.ok ? ' disabled' : '') + '><span class="mono">' + (i + 1) + '</span>' + fmt(o) + '</button>';
      });
      h += '</div>';
      if (!e.ok && e.fehl) h += '<p class="fb falsch">Nicht richtig. ' + (s.hinweis ? fmt(s.hinweis) : 'Versuch es noch einmal.') + '</p>';
    } else if (s.typ === 'text') {
      if (!e.aufgedeckt) {
        h += '<label class="lbl" for="notiz">Deine Stichpunkte (nur für dich)</label><textarea id="notiz" rows="3" placeholder="Erst selbst überlegen, dann aufdecken"></textarea>';
        h += '<div class="reihe"><button type="button" class="btn" data-a="aufdecken">Antwort aufdecken</button></div>';
      } else {
        h += '<div class="antwort"><h4>Musterantwort</h4><ul>';
        s.antwort.forEach(function (p) { h += '<li>' + fmt(p) + '</li>'; });
        h += '</ul></div>';
        if (!e.bewertet) h += '<div class="reihe"><button type="button" class="btn ok" data-a="gewusst">Gewusst</button><button type="button" class="btn bad" data-a="nicht-gewusst">Nicht gewusst</button></div>';
      }
    } else {
      if (!e.ok && !e.muster) {
        h += '<label class="lbl" for="eingabe">Dein Rechenweg' + (s.einheit ? ' (Ergebnis in ' + esc(s.einheit) + ')' : '') + '</label>';
        h += '<div class="eingabe-feld"><input id="eingabe" type="text" inputmode="decimal" autocomplete="off" spellcheck="false" placeholder="z. B. ' + esc(s.platzhalter || '1.200 × 20 %') + '" value="' + esc(e.eingabe || '') + '">' +
          '<output id="live" class="live mono" for="eingabe"></output></div>';
        h += '<div class="tasten" aria-label="Rechenzeichen">';
        ['×', ':', '+', '−', '(', ')', '%', ',', 'Mio', '='].forEach(function (t) { h += '<button type="button" class="taste" data-a="taste" data-t="' + t + '">' + t + '</button>'; });
        h += '<button type="button" class="taste" data-a="taste" data-t="⌫" aria-label="Löschen">⌫</button></div>';
        h += '<div class="reihe"><button type="button" class="btn" data-a="pruefen">Prüfen</button>' +
          '<button type="button" class="btn ghost" data-a="tipp">Formel-Tipp</button>' +
          '<button type="button" class="btn ghost" data-a="muster">Musterlösung</button></div>';
        if (e.meldung) h += '<p class="fb ' + (e.meldungArt || 'falsch') + '">' + fmt(e.meldung) + '</p>';
        if (e.tipp) h += '<div class="tipp"><h4>Formel-Tipp</h4><code class="formel">' + esc(s.tipp) + '</code></div>';
      }
    }

    // Nach dem Lösen
    var geloest = (s.typ === 'rechnen' && (e.ok || e.muster)) || (s.typ === 'auswahl' && e.ok) || (s.typ === 'text' && e.bewertet);
    if (geloest) {
      if (s.typ === 'rechnen') {
        h += e.ok ? '<p class="fb richtig">Richtig: ' + esc(mitEinheit(s.ergebnis, s)) + '</p>' : '<p class="fb hinweis">So geht es:</p>';
        h += '<div class="muster"><h4>So steht es in der Prüfung</h4><p class="mono">' + esc(s.muster) + ' = ' + esc(mitEinheit(s.ergebnis, s)) + '</p></div>';
      }
      if (s.typ === 'auswahl') h += '<p class="fb richtig">Richtig.</p>';
      if (s.warum) h += '<p class="warum">' + fmt(s.warum) + '</p>';
      h += '<div class="reihe"><button type="button" class="btn" data-a="weiter" id="weiter">Weiter →</button></div>';
    }
    h += '</section>';
    return h;
  }

  function abschluss(b, a, g) {
    var max = maxPunkte(a);
    var p = 0;
    var wdh = [];
    a.schritte.forEach(function (s, i) {
      var e = g.erg[i] || {};
      p += e.punkte || 0;
      if (!e.erste) wdh.push({ i: i, s: s });
    });
    if (!g.fertigLauf) {
      g.fertigLauf = true;
      g.fertig = true;
      g.best = g.best === null || g.best === undefined ? p : Math.max(g.best, p);
      speichern(b);
    }
    var h = '<section class="abschluss"><p class="eyebrow">Aufgabe beendet</p>' +
      '<p class="ergebnis"><span class="mono">' + zahl(p, 1) + '</span> von ' + zahl(max, 0) + ' Punkten <span class="muted">(' + prozent(p, max) + ' %)</span></p>';
    if (wdh.length) {
      h += '<h3>Diese Schritte solltest du wiederholen</h3><ul class="wdh">';
      wdh.forEach(function (w) { h += '<li><span class="tag mono">' + (w.i + 1) + '</span><span class="wdh-text">' + fmt(w.s.frage) + '</span></li>'; });
      h += '</ul>';
    } else h += '<p>Alle Schritte beim ersten Versuch richtig.</p>';
    var naechste = naechsteAufgabe(b, a);
    h += '<div class="reihe"><button type="button" class="btn" data-a="nochmal">Nochmal</button>' +
      (naechste ? '<button type="button" class="btn ghost" data-a="aufgabe" data-id="' + esc(naechste.id) + '">Nächste Aufgabe: ' + esc(naechste.titel) + '</button>' : '') +
      '<button type="button" class="btn ghost" data-a="liste">Zur Übersicht</button></div></section>';
    return h;
  }

  function naechsteAufgabe(b, a) {
    var i = b.aufgaben.indexOf(a);
    return b.aufgaben[i + 1] || null;
  }

  function schrittAbschliessen(b, a, g, idx, punkteAnteil) {
    var s = a.schritte[idx];
    var e = g.erg[idx];
    e.erste = punkteAnteil === 1;
    e.punkte = schrittPunkte(a, idx) * punkteAnteil;
    var st = stand(b);
    var ts = themaStat(b, a.thema);
    st.stat.schritte++; ts.s++;
    if (e.erste) { st.stat.erste++; ts.e++; fehlerErledigt(b, 's:' + a.id + ':' + idx); }
    else fehlerMerken(b, 's:' + a.id + ':' + idx, { art: 'schritt', aufgabe: a.id, idx: idx, text: s.frage.replace(/\*\*/g, ''), wo: a.titel });
    speichern(b);
  }

  // ---------- Lernkarten ----------
  var TYP = { begriff: 'Begriff', formel: 'Formel', wann: 'Wann rechne ich was?', text: 'Textantwort' };

  function kartenUebersicht(b) {
    var h = '<section class="panel karten-optionen"><div class="gelesen-zeile"><input type="checkbox" id="nur-falsche" data-a="nur-falsche"' + (V.nurFalsche ? ' checked' : '') + '><label for="nur-falsche">Nur falsche Karten üben</label></div>' +
      '<p class="muted klein">Abfrage: vier Antworten, am Laptop mit den Tasten 1–4. Karteikarten: umdrehen mit der Leertaste, dann selbst bewerten. Falsche Karten kommen am Ende der Runde nochmal.</p></section>';
    h += '<div class="liste">';
    var gruppen = b.themen.map(function (t) { return { id: t.id, titel: t.titel, sub: t.blaetter }; });
    gruppen.push({ id: 'alle', titel: 'Alle Themen gemischt', sub: 'gesamter Stoff' });
    gruppen.forEach(function (t) {
      var karten = stapel(b, t.id);
      if (!karten.length) return;
      var sitzt = stapelSitzt(b, t.id);
      var falsch = karten.filter(function (k) { return istFalsch(b, k.id); }).length;
      var p = prozent(sitzt, karten.length);
      h += '<div class="stapel"><div class="st-kopf"><span class="kb-titel">' + esc(t.titel) + '</span><span class="kb-meta">' + esc(t.sub || '') + '</span></div>' +
        '<p class="mono st-zahl">' + sitzt + ' von ' + karten.length + ' sitzen' + (falsch ? ' · ' + falsch + ' falsch' : '') + '</p>' +
        '<div class="balken"><i style="width:' + p + '%"></i></div>' +
        '<div class="reihe"><button type="button" class="btn" data-a="karten-start" data-t="' + t.id + '" data-m="abfrage">Abfrage</button>' +
        '<button type="button" class="btn ghost" data-a="karten-start" data-t="' + t.id + '" data-m="kartei">Karteikarten</button></div></div>';
    });
    h += '</div>';
    return h;
  }

  function istFalsch(b, id) { var k = stand(b).karten[id]; return !!(k && k.f > 0 && kartenStand(b, id) !== 'sitzt'); }

  function kartenStarten(b, th, modus, nurFalsche) {
    var karten = stapel(b, th);
    if (nurFalsche) karten = karten.filter(function (k) { return istFalsch(b, k.id); });
    if (!karten.length) { V.meldungKarten = nurFalsche ? 'In diesem Stapel hast du gerade keine falschen Karten.' : 'Dieser Stapel ist leer.'; V.karten = null; return; }
    V.meldungKarten = null;
    V.karten = { thema: th, modus: modus, queue: mischen(karten.map(function (k) { return k.id; })), erste: {}, gesehen: {}, richtigErste: 0, total: karten.length, aktuell: null, aufgedeckt: false, antwort: null, optionen: null, nurFalsche: nurFalsche };
    naechsteKarte(b);
  }

  function naechsteKarte(b) {
    var k = V.karten;
    k.aktuell = k.queue.shift() || null;
    k.aufgedeckt = false; k.antwort = null; k.optionen = null;
    if (k.aktuell && k.modus === 'abfrage') k.optionen = optionenFuer(b, karteVon(b, k.aktuell));
  }

  function optionenFuer(b, karte) {
    var pool = b.karten.filter(function (k) { return k.id !== karte.id && k.typ === karte.typ && k.hinten !== karte.hinten; });
    var gleichesThema = mischen(pool.filter(function (k) { return k.thema === karte.thema; }));
    var andere = mischen(pool.filter(function (k) { return k.thema !== karte.thema; }));
    var falsche = (karte.falsch || []).slice();
    var kandidaten = gleichesThema.concat(andere).map(function (k) { return k.hinten; });
    for (var i = 0; falsche.length < 3 && i < kandidaten.length; i++) if (falsche.indexOf(kandidaten[i]) < 0) falsche.push(kandidaten[i]);
    var opt = mischen([{ t: karte.hinten, r: true }].concat(falsche.slice(0, 3).map(function (t) { return { t: t, r: false }; })));
    return opt;
  }

  function karteBewerten(b, id, richtig) {
    var k = V.karten;
    var st = stand(b);
    var kk = st.karten[id] = st.karten[id] || { r: 0, f: 0, serie: 0 };
    var karte = karteVon(b, id);
    var ts = themaStat(b, karte.thema);
    if (richtig) { kk.r++; kk.serie++; st.stat.kr++; ts.kr++; }
    else { kk.f++; kk.serie = 0; st.stat.kf++; ts.kf++; }
    if (!k.gesehen[id]) { k.gesehen[id] = true; if (richtig) k.richtigErste++; }
    if (!richtig) {
      k.queue.push(id);
      fehlerMerken(b, 'k:' + id, { art: 'karte', text: karte.vorne, wo: 'Lernkarten · ' + themaVon(b, karte.thema).titel });
    } else if (kartenStand(b, id) === 'sitzt') fehlerErledigt(b, 'k:' + id);
    speichern(b);
  }

  function kartenSitzung(b) {
    var k = V.karten;
    var titel = k.thema === 'alle' ? 'Alle Themen' : themaVon(b, k.thema).titel;
    var h = '<div class="a-kopf"><button type="button" class="link zurueck" data-a="karten-ende">← Alle Stapel</button>' +
      '<p class="eyebrow">' + (k.modus === 'abfrage' ? 'Abfrage' : 'Karteikarten') + (k.nurFalsche ? ' · nur falsche' : '') + '</p><h2>' + esc(titel) + '</h2></div>';
    var erledigt = Object.keys(k.gesehen).length;
    h += '<p class="mono fortschritt-kl">' + erledigt + ' von ' + k.total + ' gesehen · noch ' + (k.queue.length + (k.aktuell ? 1 : 0)) + ' in dieser Runde</p>';
    if (!k.aktuell) {
      h += '<section class="abschluss"><p class="eyebrow">Runde fertig</p><p class="ergebnis"><span class="mono">' + k.richtigErste + '</span> von ' + k.total + ' beim ersten Mal gewusst</p>' +
        '<div class="reihe"><button type="button" class="btn" data-a="karten-start" data-t="' + k.thema + '" data-m="' + k.modus + '">Neue Runde</button>' +
        '<button type="button" class="btn ghost" data-a="karten-start" data-t="' + k.thema + '" data-m="' + k.modus + '" data-f="1">Nur falsche Karten</button>' +
        '<button type="button" class="btn ghost" data-a="karten-ende">Alle Stapel</button></div></section>';
      return h;
    }
    var karte = karteVon(b, k.aktuell);
    var stn = kartenStand(b, karte.id);
    h += '<section class="lkarte"><div class="lk-kopf"><span class="tag">' + esc(TYP[karte.typ] || karte.typ) + '</span><span class="tag st-' + stn + '">' + { neu: 'neu', lerne: 'lerne ich', sitzt: 'sitzt' }[stn] + '</span></div>';
    h += '<p class="lk-vorne">' + fmt(karte.vorne) + '</p>';
    if (k.modus === 'abfrage') {
      h += '<div class="optionen">';
      k.optionen.forEach(function (o, i) {
        var cls = '';
        if (k.antwort !== null) { if (o.r) cls = ' richtig'; else if (k.antwort === i) cls = ' falsch'; }
        h += '<button type="button" class="option' + cls + '" data-a="kwahl" data-i="' + i + '"' + (k.antwort !== null ? ' disabled' : '') + '><span class="mono">' + (i + 1) + '</span>' + fmt(o.t) + '</button>';
      });
      h += '</div>';
      if (k.antwort !== null) {
        var ok = k.optionen[k.antwort].r;
        h += '<p class="fb ' + (ok ? 'richtig' : 'falsch') + '">' + (ok ? 'Richtig.' : 'Falsch. Die Karte kommt am Ende der Runde nochmal.') + '</p>';
        if (karte.extra) h += '<p class="warum">' + fmt(karte.extra) + '</p>';
        h += '<div class="reihe"><button type="button" class="btn" data-a="knext" id="weiter">Weiter →</button></div>';
      }
    } else {
      if (!k.aufgedeckt) h += '<div class="reihe"><button type="button" class="btn" data-a="umdrehen" id="weiter">Umdrehen</button></div>';
      else {
        h += '<div class="lk-hinten">' + fmt(karte.hinten) + (karte.extra ? '<p class="warum">' + fmt(karte.extra) + '</p>' : '') + '</div>';
        h += '<div class="reihe"><button type="button" class="btn ok" data-a="kgewusst">Gewusst</button><button type="button" class="btn bad" data-a="knicht">Nicht gewusst</button></div>';
      }
    }
    h += '</section>';
    return h;
  }

  // ---------- Nach dem Rendern ----------
  function nachRender() {
    var inp = document.getElementById('eingabe');
    if (inp) {
      liveRechnen();
      inp.addEventListener('input', liveRechnen);
      inp.addEventListener('keydown', function (ev) { if (ev.key === 'Enter') { ev.preventDefault(); aktion('pruefen'); } });
      if (!('ontouchstart' in window)) inp.focus();
    }
    var w = document.getElementById('weiter');
    if (w && !inp) w.focus({ preventScroll: true });
    var datei = document.getElementById('import-datei');
    if (datei) datei.addEventListener('change', function () {
      var f = datei.files && datei.files[0];
      if (!f) return;
      var rd = new FileReader();
      rd.onload = function () { importieren(String(rd.result || '')); render(); };
      rd.readAsText(f);
    });
  }

  function liveRechnen() {
    var inp = document.getElementById('eingabe');
    var out = document.getElementById('live');
    if (!inp || !out) return;
    var r = R.lesen(inp.value);
    if (r.leer) out.textContent = '';
    else if (!r.ok) out.textContent = '…';
    else out.textContent = '= ' + R.format(r.wert, 4);
    var b = V.bereich, a = b && V.aufgabe && aufgabeVon(b, V.aufgabe);
    if (a) { var g = lauf(b, a); if (g.erg[g.i]) g.erg[g.i].eingabe = inp.value; }
  }

  // ---------- Aktionen ----------
  function aktion(name, ds) {
    ds = ds || {};
    var b = V.bereich;
    var a = b && V.aufgabe ? aufgabeVon(b, V.aufgabe) : null;
    var g = a ? lauf(b, a) : null;
    var s = a && g && g.i < a.schritte.length ? a.schritte[g.i] : null;
    var e = s ? g.erg[g.i] : null;
    var nachOben = false;

    switch (name) {
      case 'start': V.bereich = null; V.fach = null; V.aufgabe = null; V.karten = null; nachOben = true; break;
      case 'fach': {
        var liste = BEREICHE.filter(function (x) { return x.fach === ds.f; });
        if (liste.length === 1) { V.bereich = liste[0]; V.tab = 'aufgaben'; }
        else { V.bereich = null; V.fach = ds.f; }
        V.aufgabe = null; V.karten = null; nachOben = true; break;
      }
      case 'theme': themeSetzen(themen[(themen.indexOf(themeWahl) + 1) % 3]); break;
      case 'bereich': V.bereich = bereichVon(ds.id); V.tab = 'aufgaben'; V.aufgabe = null; V.karten = null; nachOben = true; break;
      case 'tab': V.tab = ds.t; V.aufgabe = null; V.karten = null; V.confirm = null; V.meldung = null; break;
      case 'zthema': V.zettelThema = ds.t; break;
      case 'gelesen': stand(b).gelesen[ds.id] = !stand(b).gelesen[ds.id]; speichern(b); break;
      case 'haken': stand(b).haken[ds.id] = !stand(b).haken[ds.id]; speichern(b); break;
      case 'aufgabe': {
        V.aufgabe = ds.id; V.tab = 'aufgaben';
        var na = aufgabeVon(b, ds.id); var ng = lauf(b, na);
        if (ng.fertigLauf) { ng.i = 0; ng.erg = {}; ng.fertigLauf = false; }
        nachOben = true; break;
      }
      case 'oeffne-schritt': {
        V.tab = 'aufgaben'; V.aufgabe = ds.id;
        var oa = aufgabeVon(b, ds.id); var og = lauf(b, oa);
        og.fertigLauf = false; og.i = Math.min(+ds.i, oa.schritte.length - 1);
        for (var x = og.i; x < oa.schritte.length; x++) delete og.erg[x];
        nachOben = true; break;
      }
      case 'liste': V.aufgabe = null; nachOben = true; break;
      case 'nochmal': g.i = 0; g.erg = {}; g.fertigLauf = false; speichern(b); nachOben = true; break;
      case 'taste': {
        var inp = document.getElementById('eingabe');
        if (!inp) return;
        var start = inp.selectionStart === null ? inp.value.length : inp.selectionStart;
        var ende = inp.selectionEnd === null ? inp.value.length : inp.selectionEnd;
        if (ds.t === '⌫') {
          var von = start === ende ? Math.max(0, start - 1) : start;
          inp.value = inp.value.slice(0, von) + inp.value.slice(ende); start = von;
        } else {
          var t = ds.t === ',' ? ',' : (ds.t === 'Mio' ? ' Mio ' : ' ' + ds.t + ' ');
          if (ds.t === '(' ) t = '(';
          if (ds.t === ')') t = ')';
          if (ds.t === '%') t = ' % ';
          inp.value = inp.value.slice(0, start) + t + inp.value.slice(ende); start = start + t.length;
        }
        inp.value = inp.value.replace(/\s{2,}/g, ' ');
        start = Math.min(start, inp.value.length);
        try { inp.focus({ preventScroll: true }); inp.setSelectionRange(start, start); } catch (err) { /* egal */ }
        liveRechnen();
        return;
      }
      case 'pruefen': {
        if (!s || s.typ !== 'rechnen' || e.ok) return;
        var eing = (document.getElementById('eingabe') || {}).value || '';
        e.eingabe = eing;
        var p = R.pruefen(eing, s);
        if (p.status === 'richtig') {
          e.ok = true; e.meldung = null;
          schrittAbschliessen(b, a, g, g.i, e.fehl === 0 && !e.tipp ? 1 : (e.tipp ? 0.5 : 0.5));
        } else if (p.status === 'leer' || p.status === 'unlesbar' || p.status === 'ohneWeg' || p.status === 'gleich') {
          e.meldung = p.meldung; e.meldungArt = 'hinweis';
        } else {
          e.fehl++;
          e.meldung = p.meldung + (e.fehl >= 2 ? ' Der Formel-Tipp hilft dir.' : '');
          e.meldungArt = 'falsch';
          if (e.fehl >= 2) e.tipp = true;
        }
        speichern(b); break;
      }
      case 'tipp': if (e) e.tipp = !e.tipp; break;
      case 'muster':
        if (e && !e.ok) { e.muster = true; schrittAbschliessen(b, a, g, g.i, 0); }
        break;
      case 'wahl': {
        if (!s || e.ok) return;
        var i = +ds.i;
        if (i === s.richtig) { e.ok = true; schrittAbschliessen(b, a, g, g.i, e.fehl === 0 ? 1 : 0); }
        else { e.fehl++; e.gewaehlt = (e.gewaehlt || []).concat(i); }
        speichern(b); break;
      }
      case 'aufdecken': if (e) e.aufgedeckt = true; break;
      case 'gewusst': if (e && !e.bewertet) { e.bewertet = true; schrittAbschliessen(b, a, g, g.i, 1); } break;
      case 'nicht-gewusst': if (e && !e.bewertet) { e.bewertet = true; schrittAbschliessen(b, a, g, g.i, 0); } break;
      case 'weiter': g.i++; speichern(b); nachOben = 'schritt'; break;

      case 'nur-falsche': V.nurFalsche = !V.nurFalsche; break;
      case 'karten-start': kartenStarten(b, ds.t, ds.m, ds.f === '1' || (!ds.f && V.nurFalsche)); nachOben = true; break;
      case 'karten-ende': V.karten = null; nachOben = true; break;
      case 'falsche-karten': V.tab = 'lernkarten'; kartenStarten(b, 'alle', 'abfrage', true); nachOben = true; break;
      case 'kwahl': {
        var k = V.karten;
        if (!k || k.antwort !== null) return;
        k.antwort = +ds.i;
        karteBewerten(b, k.aktuell, k.optionen[k.antwort].r);
        break;
      }
      case 'knext': naechsteKarte(b); break;
      case 'umdrehen': V.karten.aufgedeckt = true; break;
      case 'kgewusst': karteBewerten(b, V.karten.aktuell, true); naechsteKarte(b); break;
      case 'knicht': karteBewerten(b, V.karten.aktuell, false); naechsteKarte(b); break;

      case 'kopieren': {
        var ta = document.getElementById('export-code');
        var code = exportCode();
        var fertig = function (ok) { V.meldung = ok ? 'Code kopiert. Auf dem anderen Gerät unter „Code von einem anderen Gerät“ einfügen.' : 'Kopieren ging nicht automatisch. Der Code ist markiert, kopiere ihn mit Strg+C bzw. lange drücken.'; render(); if (!ok) { var t2 = document.getElementById('export-code'); if (t2) { t2.focus(); t2.select(); } } };
        try { navigator.clipboard.writeText(code).then(function () { fertig(true); }, function () { fertig(false); }); }
        catch (err) { if (ta) { ta.select(); } fertig(false); }
        return;
      }
      case 'datei-speichern': {
        try {
          var blob = new Blob([exportCode()], { type: 'text/plain' });
          var url = URL.createObjectURL(blob);
          var link = document.createElement('a');
          link.href = url; link.download = 'klausurtrainer-fortschritt.txt';
          document.body.appendChild(link); link.click(); link.remove();
          setTimeout(function () { URL.revokeObjectURL(url); }, 2000);
          V.meldung = 'Datei wird gespeichert. Falls nichts passiert, nutze „Code kopieren“.';
        } catch (err) { V.meldung = 'Speichern als Datei geht hier nicht. Nutze „Code kopieren“.'; }
        break;
      }
      case 'import': importieren((document.getElementById('import-code') || {}).value || ''); break;
      case 'reset': V.confirm = 'reset'; break;
      case 'reset-nein': V.confirm = null; break;
      case 'reset-ja': b._stand = leererStand(); speichern(b); V.confirm = null; V.meldung = null; break;
      default: return;
    }
    render();
    if (nachOben === true) window.scrollTo(0, 0);
    if (nachOben === 'schritt') {
      var el = document.querySelector('.chips') || document.querySelector('.schritt') || document.querySelector('.abschluss');
      if (el && el.getBoundingClientRect().top < 0) el.scrollIntoView({ block: 'start' });
    }
  }

  document.addEventListener('click', function (ev) {
    var t = ev.target.closest('[data-a]');
    if (!t || t.tagName === 'INPUT') return;
    ev.preventDefault();
    aktion(t.getAttribute('data-a'), t.dataset);
  });
  // Rechentasten nehmen dem Eingabefeld nicht den Fokus (Handy-Tastatur bleibt offen)
  document.addEventListener('mousedown', function (ev) { if (ev.target.closest('.taste')) ev.preventDefault(); });
  document.addEventListener('change', function (ev) {
    var t = ev.target;
    if (t.tagName === 'INPUT' && t.type === 'checkbox' && t.getAttribute('data-a')) aktion(t.getAttribute('data-a'), t.dataset);
  });
  document.addEventListener('keydown', function (ev) {
    var tag = (ev.target.tagName || '').toLowerCase();
    if (tag === 'input' || tag === 'textarea') return;
    if (ev.ctrlKey || ev.metaKey || ev.altKey) return;
    // Lernkarten
    if (V.karten && V.karten.aktuell) {
      var k = V.karten;
      if (k.modus === 'abfrage' && k.antwort === null && /^[1-4]$/.test(ev.key)) { ev.preventDefault(); aktion('kwahl', { i: String(+ev.key - 1) }); return; }
      if (k.modus === 'abfrage' && k.antwort !== null && ev.key === 'Enter') { ev.preventDefault(); aktion('knext'); return; }
      if (k.modus === 'kartei' && !k.aufgedeckt && (ev.key === ' ' || ev.key === 'Enter')) { ev.preventDefault(); aktion('umdrehen'); return; }
      if (k.modus === 'kartei' && k.aufgedeckt && (ev.key === 'j' || ev.key === '1')) { ev.preventDefault(); aktion('kgewusst'); return; }
      if (k.modus === 'kartei' && k.aufgedeckt && (ev.key === 'n' || ev.key === '2')) { ev.preventDefault(); aktion('knicht'); return; }
    }
    // Auswahlfragen in Aufgaben
    var b = V.bereich;
    if (b && V.tab === 'aufgaben' && V.aufgabe && /^[1-6]$/.test(ev.key)) {
      var a = aufgabeVon(b, V.aufgabe), g = lauf(b, a), s = a.schritte[g.i];
      if (s && s.typ === 'auswahl' && +ev.key <= s.optionen.length && !(g.erg[g.i] || {}).ok) { ev.preventDefault(); aktion('wahl', { i: String(+ev.key - 1) }); }
    }
  });

  hashLesen();
  if (!V.bereich && BEREICHE.length === 1) V.bereich = BEREICHE[0];
  render();
})();
