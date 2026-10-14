/* VORLAGE für eine neue Klassenarbeit
   1. Datei kopieren und umbenennen, z. B. content/lf8-klr.js
   2. In index.html im Block LERNSTOFF eine Zeile ergänzen:
        <script src="content/lf8-klr.js"></script>
   3. Testen: node tools/test.js  (rechnet jede Musterlösung nach)

   Rechenwege schreibst du so, wie man sie in der Prüfung hinschreibt.
   Beschriftungen kommen in Klammern hinter die Zahl: 303.900 € (Fixkosten) + 10 € (kv) × 30.000 kg
   Klammern mit Rechenzeichen werden gerechnet: (1.850.000 + 150.000) : 2 × 6 %            */
(window.LERN_BEREICHE = window.LERN_BEREICHE || []).push({
  id: 'lf8-klr',                       // eindeutig, nur Kleinbuchstaben, Zahlen, Bindestrich
  fach: 'Rechnungswesen',              // erscheint oben in der Fächerleiste
  titel: 'LF 8 KLR',
  untertitel: 'Klassenarbeit Kosten- und Leistungsrechnung',

  themen: [
    { id: 'thema1', titel: 'Erstes Thema', blaetter: 'LS 01–03', kurz: 'Ein Satz, worum es geht.' }
  ],

  lernzettel: [
    {
      id: 'z-1', thema: 'thema1', titel: 'Überschrift des Abschnitts', quelle: 'LS 01',
      kern: 'Ein Satz zum Mitnehmen. **Fett** geht mit Sternchen.',
      schema: [
        { text: 'Erster Rechenschritt', formel: 'Ergebnis = A × B' },
        { text: 'Zweiter Rechenschritt', formel: 'C = Ergebnis − D' }
      ],
      // tabelle: { titel: '…', kopf: ['Spalte 1', 'Spalte 2'], zeilen: [['a', 'b']] },
      punkte: ['Stichpunkt für Textfragen'],
      fallen: ['Typischer Fehler']
    }
  ],

  legende: [
    { thema: 'thema1', begriff: 'kv', erklaerung: 'variable Kosten je Stück', beispiel: '10 € je kg' }
  ],

  aufgaben: [
    {
      id: 'a-1', thema: 'thema1', titel: 'Name der Aufgabe', quelle: 'Abi 2020 · Original', kontext: 'Stichwort',
      einleitung: 'Kurze Ausgangssituation.',
      angaben: [{ titel: 'Angaben', kopf: ['Größe', 'Wert'], zeilen: [['Fixkosten', '303.900 €'], ['kv', '10 €']] }],
      teile: [{ nr: '4.1', text: 'Originale Aufgabenstellung.', punkte: 5 }],
      schritte: [
        // Rechenschritt
        { teil: '4.1', label: 'Kosten', wozu: 'Wofür man das rechnet (optional).', frage: 'Berechnen Sie die Gesamtkosten bei 30.000 kg.',
          muster: '303.900 € (Fixkosten) + 10 € (kv) × 30.000 kg', ergebnis: 603900, einheit: '€', nk: 2,
          tipp: 'K = Kf + kv × x', warum: 'Ein Satz, warum man so rechnet.' },
        // Auswahlfrage
        { teil: '4.1', typ: 'auswahl', label: 'Entscheidung', frage: 'Welche Maschine ist günstiger?', optionen: ['Alpha', 'Beta'], richtig: 0, warum: 'Begründung.' },
        // Textfrage (aufdecken, dann Gewusst / Nicht gewusst)
        { teil: '4.1', typ: 'text', frage: 'Nennen Sie zwei Gründe …', antwort: ['Grund 1', 'Grund 2'] }
      ]
    }
  ],

  karten: [
    // typ: begriff | formel | wann | text
    { id: 'k-1', thema: 'thema1', typ: 'begriff', vorne: 'Fixkosten', hinten: 'Kosten, die unabhängig von der Menge anfallen.' },
    { id: 'k-2', thema: 'thema1', typ: 'formel', vorne: 'Formel: Gesamtkosten', hinten: 'Kf + kv × x' }
  ]
});
