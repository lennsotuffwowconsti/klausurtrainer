/* Lernstoff: LF 9 Marketingkonzepte planen und umsetzen (Industriekaufleute)
   Quelle: Arbeitsblätter LS 01 – LS 17 (ManzMobilia GmbH) und Ich-kann-Liste.
   Zahlen und Lösungswege stammen aus den Arbeitsblättern. Wo die Ich-kann-Liste davon abweicht,
   gilt das Arbeitsblatt. Aufgaben mit "Neue Übungsaufgabe" haben eigene Zahlen. */
(window.LERN_BEREICHE = window.LERN_BEREICHE || []).push({
  id: 'lf9-marketing',
  fach: 'Marketing',
  titel: 'LF 9 Marketing',
  untertitel: 'Klassenarbeit Marketingkonzepte',

  themen: [
    { id: 'analyse', titel: 'Marktanalyse', blaetter: 'LS 01–05', kurz: 'Marketingmix, Portfolio, Produktlebenszyklus, SWOT, Marktforschung.' },
    { id: 'ziele', titel: 'Ziele & Strategien', blaetter: 'LS 06', kurz: 'Käufermarkt, SMART-Ziele, Kostenführerschaft, Differenzierung, Nische.' },
    { id: 'produkt', titel: 'Produkt & Marke', blaetter: 'LS 07, 07a', kurz: 'Kreativitätstechniken, Nutzen, Produktentwicklung, Verpackung, Marke.' },
    { id: 'preis', titel: 'Preispolitik', blaetter: 'LS 08–09', kurz: 'Kalkulation, Wettbewerbspreis, Preistest, Preisdifferenzierung.' },
    { id: 'kommunikation', titel: 'Kommunikationspolitik', blaetter: 'LS 10–12', kurz: 'Werbung, Werbeerfolg, Salespromotion, Öffentlichkeitsarbeit.' },
    { id: 'distribution', titel: 'Distributionspolitik', blaetter: 'LS 13–15', kurz: 'Absatzwege, Reisender vs. Handelsvertreter, E-Commerce.' },
    { id: 'aussenhandel', titel: 'Außenhandel', blaetter: 'LS 16', kurz: 'Incoterms, Kosten des Verkäufers, Wechselkurs, Inkasso und Akkreditiv.' },
    { id: 'controlling', titel: 'Marketing-Controlling', blaetter: 'LS 17', kurz: 'Kennzahlencockpit, Soll-Ist-Vergleich, Branchenvergleich.' }
  ],

  /* ===================== LERNZETTEL ===================== */
  lernzettel: [
    // ---- Marktanalyse
    {
      id: 'z-mix', thema: 'analyse', titel: 'Marketing, Absatzprogramm und Marketingmix', quelle: 'LS 01',
      kern: 'Der **Verkauf** arbeitet am einzelnen Auftrag, das **Marketing** am Markt. Beide gehören zum **Absatz**.',
      punkte: [
        '**Absatzprogramm** = alles, was verkauft wird (auch Handelswaren). **Produktionsprogramm** = alles, was selbst hergestellt wird (auch für den Eigenbedarf). Schnittmenge: eigene Erzeugnisse, die verkauft werden.',
        '**Programmbreite** = Zahl der Produktgruppen. **Programmtiefe** = Zahl der Ausführungen je Gruppe. 3 Gruppen mit je 2 Modellen = schmal und flach.',
        '**Marketingmix (4 P):** Produkt- und Programmpolitik, Preis- und Konditionenpolitik, Kommunikationspolitik, Distributionspolitik.',
        'Grundlagen des Mix: Marktforschung, Portfolioanalyse, Produktlebenszyklus, SWOT-Analyse.',
        '**Marktsegmentierung:** heterogenen Gesamtmarkt in homogene Teilmärkte aufteilen. Ablauf: Markterfassung → Segmentierung → Marktbearbeitung.',
        'Kriterien: **demografisch** (Alter, Einkommen), **geografisch** (Region, Klima), **psychografisch** (Werte, Interessen), **verhaltensbasiert** (Markentreue, Preisbewusstsein).'
      ],
      fallen: ['Handelswaren gehören zum Absatz-, nicht zum Produktionsprogramm.', 'Im B2B wird meist nur nach Branche, Region oder Größe segmentiert.']
    },
    {
      id: 'z-portfolio', thema: 'analyse', titel: 'Portfolioanalyse (BCG-Matrix)', quelle: 'LS 02',
      schema: [
        { text: 'Eigenen (absoluten) Marktanteil berechnen', formel: 'Marktanteil = eigener Umsatz : Marktvolumen × 100' },
        { text: 'Marktanteil des **stärksten einzelnen** Wettbewerbers berechnen', formel: 'MA Konkurrent = Umsatz Konkurrent : Marktvolumen × 100' },
        { text: 'Relativen Marktanteil bilden (auf 1 Stelle runden)', formel: 'rel. MA = eigener MA : MA stärkster Wettbewerber' },
        { text: 'Marktwachstum berechnen', formel: 'Wachstum = (MV neu − MV alt) : MV alt × 100' },
        { text: 'In die Matrix eintragen: x-Achse rel. MA (Grenze 1,0), y-Achse Wachstum (Grenze 10 %), Kreisfläche = Umsatz' }
      ],
      tabelle: {
        titel: 'Die vier Felder', kopf: ['Feld', 'Lage', 'Strategie', 'Maßnahmen'],
        zeilen: [
          ['Question Marks', 'rel. MA < 1, Wachstum > 10 %', 'Offensivstrategie', 'Produktmodifikation, Differenzierung, Werbung, Salespromotion'],
          ['Stars', 'rel. MA > 1, Wachstum > 10 %', 'Investitionsstrategie', 'gewichtige Modifikation, Differenzierung, Werbung'],
          ['Cash-Cows', 'rel. MA > 1, Wachstum < 10 %', 'Abschöpfungsstrategie', 'Erinnerungswerbung, Preise halten, wenig investieren'],
          ['Poor Dogs', 'rel. MA < 1, Wachstum < 10 %', 'Desinvestitionsstrategie', 'eliminieren, neues Produkt (Innovation)']
        ]
      },
      punkte: ['Empfehlungen nicht blind übernehmen: Ein Poor Dog kann als **Ergänzungsprodukt** nötig sein, als **Einstiegsmodell** dienen oder aus **Imagegründen** bleiben.'],
      fallen: ['„Sonstige“ ist kein Wettbewerber, auch wenn der Umsatz größer ist.', 'Marktwachstum misst das Marktvolumen, nicht den eigenen Umsatz.']
    },
    {
      id: 'z-plz', thema: 'analyse', titel: 'Produktlebenszyklus', quelle: 'LS 02',
      kern: 'x-Achse: **Zeit**, y-Achse: **Umsatz**. Entscheidend ist die **Veränderung** des Umsatzes, nicht seine Höhe.',
      tabelle: {
        kopf: ['Phase', 'Verlauf', 'Maßnahmen'],
        zeilen: [
          ['I Einführung', 'Umsatz niedrig, steigt langsam', 'Bekanntheit aufbauen, Einführungswerbung, Handel gewinnen'],
          ['II Wachstum', 'Umsatz steigt kräftig', 'weiter werben, leichte Modifikation, Differenzierung, Verkaufsförderung'],
          ['III Reife und Sättigung', 'Zuwachs wird kleiner, Höhepunkt', 'gewichtige Modifikation, Differenzierung, Sonderpreise, Erinnerungswerbung'],
          ['IV Degeneration', 'Umsatz fällt deutlich', 'eliminieren, Lager über Sonderpreise abverkaufen, Innovation']
        ]
      },
      fallen: ['Bürostuhl Standard hat den kleinsten Umsatz, sinkt aber nur leicht: Reife und Sättigung, nicht Degeneration.']
    },
    {
      id: 'z-swot', thema: 'analyse', titel: 'SWOT-Analyse', quelle: 'LS 03',
      schema: [
        { text: 'Stärken und Schwächen im Vergleich zum stärksten Wettbewerber herausarbeiten (intern)' },
        { text: 'Chancen und Risiken auf dem Markt erkennen (extern, Zukunft)' },
        { text: 'In der 4-Felder-Matrix verknüpfen und je Feld eine Strategie ableiten (SO, ST, WO, WT)' }
      ],
      tabelle: {
        titel: 'Beispiel ManzMobilia (Lösungsblatt)', kopf: ['Feld', 'Strategie'],
        zeilen: [
          ['SO Stärke × Chance', 'Flexibler Maschinenpark erlaubt individuelle Produkte.'],
          ['WO Schwäche × Chance', 'Veraltete Produkte durch ergonomische, umweltgerechte ersetzen.'],
          ['ST Stärke × Risiko', 'Hohe Qualität betonen, damit der Preis weniger zählt.'],
          ['WT Schwäche × Risiko', 'Hohe Produktionskosten senken, um dem Preisdruck standzuhalten.']
        ]
      },
      punkte: ['S = Strengths (Stärken), W = Weaknesses (Schwächen), O = Opportunities (Chancen), T = Threats (Risiken).']
    },
    {
      id: 'z-mafo', thema: 'analyse', titel: 'Marktforschung', quelle: 'LS 04, LS 05',
      schema: [
        { text: 'Marktvolumen = Summe der Umsätze aller Anbieter', formel: 'MV = Umsatz A + Umsatz B + …' },
        { text: 'Marktanteil', formel: 'MA = eigener Umsatz : Marktvolumen × 100' },
        { text: 'Veränderung in %', formel: 'Zahl aktuelles Jahr : Zahl Bezugsjahr × 100 − 100' },
        { text: 'Stichprobe', formel: 'Anzahl = Grundgesamtheit × Prozentsatz' }
      ],
      punkte: [
        'Sinkender Marktanteil bei wachsendem Markt = **Verdrängung** durch Wettbewerber.',
        '**Primärforschung** (field research): Daten neu erheben, z. B. Befragung, Beobachtung, Experiment. Passgenau, aber teuer.',
        '**Sekundärforschung** (desk research): vorhandene Daten auswerten, z. B. eigene Statistiken, Verbandsberichte. Schnell und günstig, aber evtl. veraltet.',
        'Ausgangslage und Wettbewerb → meist Sekundärforschung. Kundenwünsche, Kaufmotive, Preisvorstellungen → Primärforschung.',
        '**Offene Fragen** liefern neue Ideen, sind aber schwer auszuwerten. **Geschlossene Fragen** sind schnell auswertbar, engen aber ein.',
        'Rücklaufquote erhöhen: Anreiz (Gutschein, Gewinnspiel), kurzer Fragebogen, online befragen, klare Fragen, erinnern.'
      ],
      fallen: ['Prozent und Prozentpunkte: Von 11 % auf 10 % sind **1 Prozentpunkt**, aber **−9,09 %**.']
    },
    // ---- Ziele
    {
      id: 'z-ziele', thema: 'ziele', titel: 'Marketingziele und -strategien', quelle: 'LS 06 · ergänzt, mit Lehrkraft abgleichen',
      punkte: [
        '**Verkäufermarkt:** Nachfrage > Angebot, Anbieter stark. **Käufermarkt:** Angebot > Nachfrage, Kunde stark. Daraus ist Marketing entstanden.',
        '**Ökonomische Ziele:** Umsatz, Absatz, Marktanteil, Deckungsbeitrag, Gewinn (aus der Buchhaltung messbar).',
        '**Psychologische Ziele:** Bekanntheitsgrad, Image, Kundenzufriedenheit, Kaufabsicht, Markentreue (nur über Befragung messbar).',
        'Ein Ziel nennt Inhalt (was), Ausmaß (wie viel), Zeitbezug (bis wann) und Bereich (wo). **SMART:** spezifisch, messbar, attraktiv, realistisch, terminiert.',
        'Zielbeziehungen: komplementär (fördern sich), konkurrierend (behindern sich), indifferent (egal).',
        '**Kostenführerschaft:** niedrigste Kosten, über den Preis verkaufen. **Differenzierung:** sich abheben, Kunde zahlt mehr. **Nische:** auf ein enges Segment konzentrieren.',
        'Kostenführerschaft und Differenzierung schließen sich meist aus. Wer beides will, bleibt „in der Mitte stecken“.'
      ],
      fallen: ['Kostenführerschaft heißt niedrigste **Kosten**, nicht zwingend niedrigster Preis.']
    },
    // ---- Produkt
    {
      id: 'z-produkt', thema: 'produkt', titel: 'Produktideen, Nutzen und Produktentwicklung', quelle: 'LS 07',
      punkte: [
        '**Morphologischer Kasten** (systematisch): Produkt in Merkmale zerlegen, je Merkmal Ausprägungen suchen, beste Kombination wählen.',
        '**Brainstorming** (intuitiv): 5–7 Personen, Ideen auf Zuruf, keine Kritik, Menge vor Güte, 20–40 Minuten.',
        '**Brainwriting:** jeder schreibt allein auf Karten, danach clustern. **Methode 6-3-5:** 6 Personen, 3 Ideen, 5 Minuten, 5-mal weitergeben = 108 Ideen.',
        '**Grundnutzen** = Funktion (man kann darauf sitzen). **Zusatznutzen** = Erbauungsnutzen (Ästhetik) + Geltungsnutzen (Prestige). Gekauft wird über den Zusatznutzen.',
        'Produktentwicklung: 1 Ideenfindung → 2 Screening (Grob-, Feinauswahl) → 3 Produktkonzept → 4 Konstruktion → 5 Prototyp und Qualitätstest → 6 Produkttest und Markteinführung.',
        'Verpackung: Schutz, absatzfördernde Wirkung, Information und Service, Umwelt (Verpackungsgesetz). Arten: Verkaufs-, Um-, Transportverpackung.'
      ]
    },
    {
      id: 'z-massnahmen', thema: 'produkt', titel: 'Produktpolitische Maßnahmen', quelle: 'LS 07',
      tabelle: {
        kopf: ['Maßnahme', 'Merkmal', 'Beispiel'],
        zeilen: [
          ['Produktinnovation', 'ganz neues Produkt (Markt- oder Unternehmensneuheit)', 'neuer Schreibtisch Deluxe'],
          ['Produktdifferenzierung', 'Variante kommt **dazu**, altes bleibt', 'NAS zusätzlich mit 32 TB'],
          ['Produktmodifikation', 'Produkt wird verbessert, altes **verschwindet**', 'Lkw mit weniger Verbrauch ersetzt alten'],
          ['Diversifikation horizontal', 'verwandtes Produkt, gleiche Stufe', 'Autohersteller bringt Geländewagen'],
          ['Diversifikation vertikal', 'vor- oder nachgelagerte Stufe', 'Fastfood-Kette mit eigenen Bauernhöfen (vorgelagert), eigene Läden (nachgelagert)'],
          ['Diversifikation lateral', 'branchenfremd', 'Sportartikel- und Motorbootfirma verkauft Musikinstrumente'],
          ['Produktelimination', 'Produkt fliegt raus (oft per Deckungsbeitrag entschieden)', 'Limonade wird vom Markt genommen']
        ]
      },
      punkte: ['Prüffrage 1: Bleibt das alte Produkt? Ja → Differenzierung, nein → Modifikation.', 'Prüffrage 2: Neues Betätigungsfeld? Ja → Diversifikation, dann Richtung bestimmen.']
    },
    {
      id: 'z-marke', thema: 'produkt', titel: 'Markenpolitik und USP', quelle: 'LS 07a · ergänzt, mit Lehrkraft abgleichen',
      punkte: [
        '**Markenartikel:** gleichbleibende Qualität und Aufmachung, Markenname und -zeichen, hoher Bekanntheitsgrad, überall erhältlich, intensive Werbung, meist höherer Preis.',
        '**Nutzen für den Hersteller:** Abhebung vom Wettbewerb, Preisspielraum, Kundenbindung, Anker für Werbung, Markentransfer, Macht gegenüber dem Handel, rechtlicher Schutz.',
        '**Nutzen für den Kunden:** Orientierung, Qualitätsvermutung, geringeres Kaufrisiko, Wiedererkennung, Prestige, Vertrauen.',
        '**USP (Alleinstellungsmerkmal):** einzigartig, für den Kunden relevant, wahrnehmbar, verteidigbar (z. B. Patent), kurz kommunizierbar.'
      ]
    },
    // ---- Preis
    {
      id: 'z-kalk', thema: 'preis', titel: 'Kostenorientierte Preisfestlegung (Angebotskalkulation)', quelle: 'LS 08',
      schema: [
        { text: 'Materialeinzelkosten + Materialgemeinkosten = Materialkosten', formel: 'MGK = MEK × MGK-Satz' },
        { text: 'Fertigungslöhne + Fertigungsgemeinkosten = Fertigungskosten I', formel: 'FGK = FL × FGK-Satz' },
        { text: 'Maschinenkosten + Fertigungslöhne Maschinenplatz + Restgemeinkosten = Fertigungskosten II' },
        { text: 'Materialkosten + Fertigungskosten = **Herstellkosten**' },
        { text: '+ Verwaltungs- und Vertriebsgemeinkosten = **Selbstkosten**', formel: 'VwVtGK = HK × Satz' },
        { text: '+ Gewinnzuschlag (vom Hundert) = **Barverkaufspreis**', formel: 'Gewinn = SK × Satz' },
        { text: '+ Kundenskonto (im Hundert) = **Zielverkaufspreis**', formel: 'ZVP = BVP : (100 − Skonto) × 100' },
        { text: '+ Kundenrabatt (im Hundert) = **Listenverkaufspreis netto**', formel: 'LVP = ZVP : (100 − Rabatt) × 100' },
        { text: '+ 19 % Umsatzsteuer = **Listenverkaufspreis brutto**' }
      ],
      tabelle: {
        titel: 'Schreibtisch Deluxe (LS 08)', kopf: ['Position', 'Satz', 'Euro'],
        zeilen: [
          ['Materialeinzelkosten', '', '360,00'], ['+ MGK', '20 %', '72,00'], ['= Materialkosten', '', '432,00'],
          ['Fertigungskosten I (50 FL + 80 % FGK)', '', '90,00'], ['Fertigungskosten II (125 + 7 + 30 % Rest-GK)', '', '134,10'],
          ['= Herstellkosten', '', '656,10'], ['+ VwVtGK', '20 %', '131,22'], ['= Selbstkosten', '', '787,32'],
          ['+ Gewinnzuschlag', '20 %', '157,46'], ['= Barverkaufspreis', '', '944,78'], ['+ Kundenskonto', '3 %', '29,22'],
          ['= Zielverkaufspreis', '', '974,00'], ['+ Kundenrabatt', '10 %', '108,22'], ['= LVP netto', '', '1.082,22'],
          ['+ USt', '19 %', '205,62'], ['= LVP brutto', '', '1.287,84']
        ]
      },
      fallen: [
        'Skonto und Rabatt **im Hundert**: 944,78 sind 97 % → 944,78 : 97 × 100. Wer × 1,03 rechnet, liegt zu niedrig.',
        'Verwaltungs- und Vertriebsgemeinkosten sind **ein** Zuschlag (20 % auf die HK). Erst danach kommt der Gewinn.'
      ]
    },
    {
      id: 'z-wettbewerb', thema: 'preis', titel: 'Wettbewerbs- und nachfrageorientierter Preis', quelle: 'LS 08',
      schema: [
        { text: 'Wettbewerb: Durchschnittspreis der Wettbewerber bilden', formel: 'Ø-Preis = Summe der Preise : Anzahl' },
        { text: 'Stärken-Schwächen-Analyse: Punkte addieren, Rang bestimmen' },
        { text: 'Strategie wählen und Preis festlegen (ManzMobilia Rang 2 → Premium, 1.250 €)' },
        { text: 'Nachfrage: je Preisstufe Umsatz, Kosten, Gewinn rechnen', formel: 'Gewinn = Preis × Absatz − (Fixkosten + kv × Absatz)' },
        { text: 'Preis mit dem **höchsten Gewinn** wählen (hier 1.150 €)' }
      ],
      tabelle: {
        kopf: ['Strategie', 'Preislage', 'Merkmal'],
        zeilen: [
          ['Mittelpreis', 'am Durchschnitt', 'wirkt weder hochwertig noch günstig'],
          ['Premium', 'dauerhaft darüber', 'nur mit erkennbarem Vorteil'],
          ['Skimming', 'hoch, dann gesenkt', 'typisch für technische Neuheiten'],
          ['Promotion', 'dauerhaft darunter', 'Gefahr: wirkt minderwertig'],
          ['Penetration', 'niedrig, dann angehoben', 'schnell viele Kunden, Anhebung riskant']
        ]
      },
      punkte: ['Kostenorientiert = Untergrenze, Wettbewerb = Rahmen, Preistest = Obergrenze.', 'Preiselastizität: Wie stark reagieren Kunden auf Preisänderungen?'],
      fallen: ['Höchster Umsatz ist nicht höchster Gewinn: Bei 1.050 € ist der Umsatz am höchsten, der Gewinn aber bei 1.150 €.']
    },
    {
      id: 'z-diff', thema: 'preis', titel: 'Preisdifferenzierung', quelle: 'LS 09',
      kern: 'Gleiches oder ähnliches Produkt zu **unterschiedlichen Preisen** an verschiedene Käufergruppen. Voraussetzung: Die Teilmärkte lassen sich trennen.',
      tabelle: {
        kopf: ['Art', 'Unterschied nach', 'Beispiel'],
        zeilen: [
          ['räumlich', 'Ort', 'Auto im Ausland günstiger'], ['personell', 'Käufergruppe', 'Studentenabo, Behördenpreis'],
          ['zeitlich', 'Zeitpunkt', 'Nachttarif, Nebensaison, Kino-Dienstag'], ['mengenmäßig', 'Menge (Rabatt)', '10 % ab 10 Maschinen'],
          ['produktbezogen', 'Ausstattung', 'Hardcover und Taschenbuch, 1. und 2. Klasse'], ['verwendungsmäßig', 'Zweck', 'Speisesalz und Industriesalz']
        ]
      },
      schema: [
        { text: 'Gewinn ohne Differenzierung', formel: 'Preis × Absatz − (Fixkosten + kv × Absatz)' },
        { text: 'Gewinn mit Differenzierung: Zusatzabsatz zum Sonderpreis dazu', formel: 'Umsatz = 540 × 12.000 + 460 × 2.000' },
        { text: 'Fixkosten bleiben gleich, nur die variablen Kosten wachsen mit' }
      ],
      fallen: ['Nicht der höhere Umsatz entscheidet, sondern der höhere Gewinn. Beide Varianten vollständig durchrechnen.']
    },
    // ---- Kommunikation
    {
      id: 'z-werbung', thema: 'kommunikation', titel: 'Werbung und Werbeplanung', quelle: 'LS 10',
      punkte: [
        '**AIDA:** Attention (Aufmerksamkeit), Interest (Interesse), Desire (Besitzwunsch), Action (Kauf).',
        '**Grundsätze:** Wahrheit, Klarheit, Wirksamkeit, Wirtschaftlichkeit, soziale Akzeptanz.',
        '**Werbeplan:** Werbeobjekt, Werbeziel, Zielgruppe, Werbebotschaft, Werbemittel, Werbeträger, Streuzeit, Streugebiet, Werbeetat.',
        '**Werbemittel** = die Anzeige, der Spot. **Werbeträger** = Zeitschrift, Sender, Website. Merke: Der Träger trägt das Mittel.',
        '**Kontakthäufigkeit** = wie oft dieselbe Person erreicht wird. **Kontaktqualität** = wie gut der Kontakt passt (Fachzeitschrift für Entscheider).',
        'Einzelwerbung (ein Unternehmen), Sammelwerbung (mehrere, mit Namen), Verbundwerbung (Unternehmen, deren Produkte sich ergänzen), Gemeinschaftswerbung (ganze Branche, ohne Namen).'
      ],
      schema: [
        { text: 'Umsatzsteuer ist durchlaufender Posten: mit Nettopreisen rechnen', formel: 'netto = brutto : 1,19' },
        { text: 'Medien vergleichbar machen', formel: 'Tausend-Kontakt-Preis = Kosten : Reichweite × 1.000' },
        { text: 'Werbeerfolg (ökonomisch)', formel: 'Mehrumsatz = Umsatz nachher − Umsatz vorher' },
        { text: 'Werberendite', formel: 'Mehrumsatz : Werbekosten × 100' }
      ],
      fallen: ['Werbeerfolg ist schwer zuzurechnen: Auch Produktverbesserungen, Wettbewerber und Konjunktur wirken auf den Umsatz.']
    },
    {
      id: 'z-sp-pr', thema: 'kommunikation', titel: 'Salespromotion und Öffentlichkeitsarbeit', quelle: 'LS 11, LS 12',
      tabelle: {
        titel: 'Verkaufsförderung: „der verlängerte Arm der Werbung“', kopf: ['Art', 'Beispiele'],
        zeilen: [
          ['konsumentenorientiert (Verbraucherpromotion)', 'Produktproben, Gewinnspiele, Give-aways, Umtauschgarantie, Duo- und Kombipack, Verpackungsentsorgung'],
          ['handelsorientiert (Handelspromotion)', 'Produktvorführungen, befristete Preisnachlässe, Displaymaterial, Schaufensterdeko, Schulungen für Händler'],
          ['verkaufspersonalorientiert (Verkäuferpromotion)', 'Seminare (Produktwissen, Verkaufstechnik), Anreize wie Provision, Geschäftswagen, Smartphone']
        ]
      },
      punkte: [
        '**PR-Ziel:** Aufbau und Pflege eines positiven Unternehmensimages.',
        '**Adressaten:** Endverbraucher, Groß- und Einzelhandel, Kapitalgeber, Mitarbeiter, staatliche und private Institutionen (der Staat beeinflusst Steuern, Arbeitssicherheit, Umweltrecht).',
        '**Instrumente:** Veröffentlichungen, Veranstaltungen (Tag der offenen Tür), Nachrichten, Reden, Sponsoring, Spenden, Krisenmanagement, visuelle Identität.',
        '**Pressemitteilung im Krisenfall:** Bedauern, Sachverhalt, Verantwortung übernehmen, Sofortmaßnahmen, Vorbeugung, Entschuldigung.',
        '**Corporate Identity** (ergänzt): Corporate Design, Corporate Communication, Corporate Behaviour, Corporate Culture.'
      ]
    },
    // ---- Distribution
    {
      id: 'z-absatzwege', thema: 'distribution', titel: 'Absatzwege und Absatzorgane', quelle: 'LS 13',
      punkte: [
        '**Direkter Absatz:** ohne Handel. Vorteile: günstigere Preise (keine Handelsspanne), direkter Kundenkontakt, schnelle Reaktion, volle Kontrolle.',
        '**Indirekter Absatz:** mit Groß- und/oder Einzelhandel. Vorteile: höhere Reichweite, Handel übernimmt Lager und Vorfinanzierung, weniger eigener Vertrieb.',
        '**Konsumgüter:** meist indirekt. **Investitionsgüter:** meist direkt (wenige Kunden, hohe Werte, erklärungsbedürftig); indirekt nur über Industriegroßhandel.',
        '**Unternehmenseigen:** Reisender, Verkaufsabteilung, Verkaufsniederlassung, Geschäftsleitung, (E-Commerce). **Unternehmensfremd:** Handelsvertreter, Kommissionär, Handelsmakler.',
        'Vertragshändler (z. B. Autobranche) und Franchising (McDonald’s, OBI) sind rechtlich selbstständig.',
        '**Kommissionär:** im eigenen Namen auf fremde Rechnung. **Makler:** vermittelt von Fall zu Fall.'
      ]
    },
    {
      id: 'z-reisender', thema: 'distribution', titel: 'Reisender oder Handelsvertreter', quelle: 'LS 14',
      schema: [
        { text: 'Kosten des Reisenden (Fixum + Provision)', formel: 'K(R) = Fixum + Provisionssatz × Umsatz' },
        { text: 'Kosten des Handelsvertreters (nur Provision)', formel: 'K(HV) = Provisionssatz × Umsatz' },
        { text: 'Kritischer Umsatz: beide Kosten gleichsetzen', formel: '2.400 + 0,01x = 0,03x → x = 2.400 : 0,02 = 120.000 €' },
        { text: 'Punktwertverfahren: Gewichtung × Punkte, dann addieren' },
        { text: 'Entscheidung: quantitativ, qualitativ, Prognosesicherheit, Empfehlung' }
      ],
      tabelle: {
        kopf: ['Merkmal', 'Reisender', 'Handelsvertreter'],
        zeilen: [
          ['Rechtsstellung', 'Angestellter', 'selbstständiger Kaufmann'], ['Vertrag', 'Dienstvertrag (Arbeitsvertrag)', 'Vertretervertrag'],
          ['handelt', 'in fremdem Namen, auf fremde Rechnung', 'in fremdem Namen, auf fremde Rechnung'],
          ['Vergütung', 'Fixum + Provision', 'Provision'], ['Kosten', 'überwiegend fix', 'rein variabel'],
          ['günstiger bei', 'hohem Umsatz', 'niedrigem oder unsicherem Umsatz']
        ]
      },
      punkte: ['Besuchsberichte: Kontrollinstrument für den Arbeitgeber und Marktinformationen (Kundenwünsche, Beanstandungen, Wettbewerber).'],
      fallen: ['Punktwertverfahren ist subjektiv: Kleine Änderungen an der Gewichtung kippen das Ergebnis.', 'Im Lösungsblatt steht beim Handelsvertreter „Übersicht 4 Punkte“, gewichtet aber 50. Mit 5 Punkten ergibt sich die Summe 440.']
    },
    {
      id: 'z-ecommerce', thema: 'distribution', titel: 'E-Commerce', quelle: 'LS 15',
      punkte: [
        'Vorteile Unternehmen: höhere Bekanntheit, größerer Kundenkreis, modernes Image, kürzere Lieferzeiten, papierlos, schnelle Reaktion auf den Markt.',
        'Vorteile Kunden: rund um die Uhr bestellen, von zu Hause, bequem zahlen, umfassend informieren, Lieferbarkeit sehen.',
        'Risiken: Datensicherheit, Datenschutz, anonymer Partner, ernst gemeinte Bestellung?, Ware nicht anfassbar, Widerrufsrecht im B2C.',
        'B2C: 14 Tage Widerrufsrecht (Fernabsatz), Preise immer brutto (Preisangabenverordnung). B2B: Nettopreise erlaubt.',
        'Entwicklung: 2010–2019 jährlich ca. 11–12 % Wachstum, Höhepunkt 2020/21 (Corona), 2022 Rückgang, danach geringeres Wachstum.'
      ],
      schema: [{ text: 'Anstieg in Prozent', formel: '88,8 : 20,2 × 100 − 100 = 339,6 %' }],
      fallen: ['439,6 % ist der Endwert im Verhältnis zum Ausgangswert, gefragt ist meist der **Anstieg** (− 100).']
    },
    // ---- Außenhandel
    {
      id: 'z-incoterms', thema: 'aussenhandel', titel: 'Incoterms 2020', quelle: 'LS 16',
      kern: 'Incoterms regeln **Kosten**, **Gefahrübergang** und **Versicherungspflicht**. Sie regeln nicht Eigentum, Recht oder Gerichtsstand.',
      tabelle: {
        kopf: ['Klausel', 'Verkäufer zahlt bis', 'Gefahr geht über'],
        zeilen: [
          ['EXW ab Werk', 'Bereitstellung im Werk', 'im Werk'], ['FCA frei Frachtführer', 'Übergabe an Frachtführer', 'bei Übergabe'],
          ['FAS frei Längsseite Schiff', 'Kai im Verschiffungshafen', 'an der Längsseite'], ['FOB frei an Bord', 'verladen an Bord', 'an Bord'],
          ['CFR Kosten und Fracht', 'Bestimmungshafen (ohne Entladung)', 'schon an Bord'],
          ['CIF Kosten, Versicherung, Fracht', 'Bestimmungshafen inkl. Entladung und Versicherung', 'schon an Bord'],
          ['CPT frachtfrei', 'Bestimmungsort', 'beim ersten Frachtführer'], ['CIP frachtfrei versichert', 'Bestimmungsort + Versicherung', 'beim ersten Frachtführer'],
          ['DAP geliefert benannter Ort', 'Bestimmungsort (unentladen)', 'am Bestimmungsort'], ['DPU geliefert entladen', 'Bestimmungsort, entladen', 'nach Entladung'],
          ['DDP geliefert verzollt', 'Bestimmungsort inkl. Einfuhrzoll', 'am Bestimmungsort']
        ],
        fuss: 'Entladung bei CIF so wie im Arbeitsblatt (Material 4).'
      },
      punkte: [
        'Bei den C-Klauseln fallen Kosten- und Gefahrübergang **auseinander**.',
        'Nur **CIF** und **CIP** verpflichten zur Transportversicherung (Warenwert + 10 %).',
        'FAS, FOB, CFR, CIF nur für See- und Binnenschiff. Alle anderen sind universell.'
      ],
      schema: [{ text: 'Kosten je Klausel: Transportkette der Reihe nach auflisten, bis zum Übergabepunkt addieren' }]
    },
    {
      id: 'z-zahlung', thema: 'aussenhandel', titel: 'Wechselkurs und Zahlungssicherung', quelle: 'LS 16',
      schema: [
        { text: 'Mengennotierung: Kurs = Fremdwährung je 1 €', formel: 'Euro = Betrag in Fremdwährung : Kurs' },
        { text: 'Kursverlust', formel: 'Euro (Angebot) − Euro (Zahlung)' }
      ],
      punkte: [
        'Steigt der Kurs (mehr Pesos je Euro), ist derselbe Peso-Betrag **weniger Euro** wert.',
        'Absichern: in Euro fakturieren oder Devisentermingeschäft.',
        '**Dokumenteninkasso** (D/P): Bank wickelt nur ab, kein eigenes Zahlungsversprechen. Käufer bekommt Dokumente nur gegen Zahlung. Günstig, aber Käufer kann die Abnahme verweigern.',
        '**Dokumentenakkreditiv** (L/C): Bank des Käufers verspricht selbst zu zahlen, wenn die Dokumente stimmen. Sehr sicher, teurer.',
        'Akkreditiv bei unbekanntem Käufer, hohem Wert, unsicherem Land, verderblicher Ware. Inkasso bei langer Geschäftsbeziehung.',
        'Banken prüfen nur Dokumente, nie die Ware.'
      ],
      fallen: ['Bei Mengennotierung wird **geteilt**, nicht malgenommen: 6.322.640 MXN : 15,44486.']
    },
    // ---- Controlling
    {
      id: 'z-controlling', thema: 'controlling', titel: 'Marketing-Controlling mit Kennzahlen', quelle: 'LS 17',
      kern: 'Controlling heißt **steuern**, nicht nur kontrollieren.',
      schema: [
        { text: 'Kennzahlen festlegen' }, { text: 'Soll-Vorgaben formulieren' }, { text: 'Ist-Situation erfassen' },
        { text: 'Soll-Ist-Vergleich: Ziel erreicht?' }, { text: 'Wenn nein: Ursachen erforschen, Gegenmaßnahmen erarbeiten, wieder Ist erfassen' }
      ],
      tabelle: {
        titel: 'Kennzahlen (Info 2)', kopf: ['Kennzahl', 'Formel'],
        zeilen: [
          ['Umsatz', 'Absatz × Verkaufspreis'], ['Marktanteil', 'eigener Umsatz : Marktvolumen × 100'],
          ['Reklamationsquote', 'reklamierte Bestellungen : alle Bestellungen × 100'], ['Servicegrad (Lieferfähigkeit)', 'termingerechte Lieferungen : alle Bestellungen × 100'],
          ['Kundenzufriedenheit', 'zufriedene Kunden : befragte Kunden × 100'], ['Veränderung', 'Jahr 02 : Jahr 01 × 100 − 100'],
          ['Abweichung relativ', '(Ist − Soll) : Soll × 100'], ['Zielerreichungsgrad', 'Ist : Soll × 100']
        ]
      },
      punkte: ['Branchenvergleich ist schwer: Zahlen der Konkurrenz sind oft nicht veröffentlicht oder anders abgegrenzt.', 'Hohe Reklamationsquote → geringere Kundenzufriedenheit → Image und Umsatz leiden.'],
      fallen: ['Kundenzufriedenheit: „sehr zufrieden“ und „zufrieden“ zählen beide (60 + 700 = 760).', 'Relative Abweichung immer auf das **Soll** beziehen.']
    }
  ],

  /* ===================== LEGENDE ===================== */
  legende: [
    { thema: 'analyse', begriff: 'MV', erklaerung: 'Marktvolumen: Summe der Umsätze aller Anbieter.', beispiel: '35 Mio. € Schreibtische Standard' },
    { thema: 'analyse', begriff: 'MA', erklaerung: 'Marktanteil: eigener Umsatz : Marktvolumen × 100.', beispiel: '6,65 : 35 × 100 = 19 %' },
    { thema: 'analyse', begriff: 'rel. MA', erklaerung: 'Relativer Marktanteil: eigener MA : MA des stärksten Wettbewerbers. Über 1 = Marktführer.', beispiel: '19 : 15 = 1,3' },
    { thema: 'analyse', begriff: 'BCG', erklaerung: 'Boston Consulting Group, hat die Portfolio-Matrix entwickelt.', beispiel: 'Grenzen 1,0 und 10 %' },
    { thema: 'analyse', begriff: 'PLZ', erklaerung: 'Produktlebenszyklus mit 4 Phasen.', beispiel: 'Schreibtisch Deluxe: 4,2 → 3,0 Mio. = Degeneration' },
    { thema: 'analyse', begriff: 'SWOT', erklaerung: 'Strengths, Weaknesses, Opportunities, Threats.', beispiel: 'Stärke: flexibler Maschinenpark' },
    { thema: 'analyse', begriff: 'Stichprobe', erklaerung: 'Teil der Kunden, der befragt wird. Repräsentativ = gleiche Struktur wie alle Kunden.', beispiel: '8 % von 1.200 = 96 Großunternehmen West' },
    { thema: 'ziele', begriff: 'SMART', erklaerung: 'spezifisch, messbar, attraktiv, realistisch, terminiert.', beispiel: 'MA von 12 auf 15 % bis 31.12.' },
    { thema: 'ziele', begriff: 'Prozentpunkte', erklaerung: 'Differenz zweier Prozentwerte.', beispiel: '12 % → 15 % = 3 Prozentpunkte = +25 %' },
    { thema: 'produkt', begriff: 'USP', erklaerung: 'Unique Selling Proposition, Alleinstellungsmerkmal.', beispiel: 'patentierte Rückenmechanik' },
    { thema: 'produkt', begriff: '6-3-5', erklaerung: '6 Personen, 3 Ideen, 5 Minuten je Runde.', beispiel: '6 × 3 × 6 = 108 Ideen' },
    { thema: 'preis', begriff: 'MEK / MGK', erklaerung: 'Materialeinzelkosten / Materialgemeinkosten.', beispiel: '360 € / 20 % = 72 €' },
    { thema: 'preis', begriff: 'FL / FGK', erklaerung: 'Fertigungslöhne / Fertigungsgemeinkosten.', beispiel: '50 € / 80 % = 40 €' },
    { thema: 'preis', begriff: 'HK', erklaerung: 'Herstellkosten = Materialkosten + Fertigungskosten.', beispiel: '656,10 €' },
    { thema: 'preis', begriff: 'VwVtGK', erklaerung: 'Verwaltungs- und Vertriebsgemeinkosten, auf die HK bezogen.', beispiel: '20 % von 656,10 = 131,22 €' },
    { thema: 'preis', begriff: 'SK', erklaerung: 'Selbstkosten = HK + VwVtGK.', beispiel: '787,32 €' },
    { thema: 'preis', begriff: 'BVP / ZVP', erklaerung: 'Barverkaufspreis / Zielverkaufspreis.', beispiel: '944,78 € / 974,00 €' },
    { thema: 'preis', begriff: 'LVP', erklaerung: 'Listenverkaufspreis, netto oder brutto (mit 19 % USt).', beispiel: '1.082,22 € / 1.287,84 €' },
    { thema: 'preis', begriff: 'Kf / kv', erklaerung: 'Fixkosten (gesamt) / variable Kosten je Stück.', beispiel: '1.800.000 € / 600 €' },
    { thema: 'kommunikation', begriff: 'TKP', erklaerung: 'Tausend-Kontakt-Preis: Kosten für 1.000 erreichte Personen.', beispiel: '20.000 € : 400.000 × 1.000 = 50 €' },
    { thema: 'kommunikation', begriff: 'ET', erklaerung: 'Entscheidungsträger: Personen, die über Investitionen entscheiden.', beispiel: 'Spiegel: 400.000 ET' },
    { thema: 'kommunikation', begriff: 'Werberendite', erklaerung: 'Mehrumsatz : Werbekosten × 100.', beispiel: '5,6 Mio. : 0,82 Mio. × 100 = 682,93 %' },
    { thema: 'kommunikation', begriff: 'PR', erklaerung: 'Public Relations, Öffentlichkeitsarbeit.', beispiel: 'Pressemitteilung nach dem Störfall' },
    { thema: 'kommunikation', begriff: 'CI', erklaerung: 'Corporate Identity: einheitliches Auftreten nach außen.', beispiel: 'Logo, Farben, Verhalten' },
    { thema: 'distribution', begriff: 'HV', erklaerung: 'Handelsvertreter, selbstständig, nur Provision.', beispiel: '3 % vom Umsatz' },
    { thema: 'distribution', begriff: 'Fixum', erklaerung: 'festes Monatsgehalt des Reisenden.', beispiel: '2.400 € je Monat' },
    { thema: 'distribution', begriff: 'kritischer Umsatz', erklaerung: 'Umsatz, bei dem beide Absatzorgane gleich viel kosten.', beispiel: '120.000 € je Monat' },
    { thema: 'distribution', begriff: 'B2B / B2C', erklaerung: 'Business to Business / Business to Consumer.', beispiel: 'ManzMobilia: überwiegend B2B' },
    { thema: 'aussenhandel', begriff: 'MXN', erklaerung: 'Mexikanischer Peso.', beispiel: '1 € = 15,37591 MXN (Geldkurs)' },
    { thema: 'aussenhandel', begriff: 'Geldkurs / Briefkurs', erklaerung: 'Kurse der Bank in Mengennotierung (Fremdwährung je 1 €).', beispiel: '15,37591 / 15,44486' },
    { thema: 'aussenhandel', begriff: 'VK', erklaerung: 'Versicherungskosten.', beispiel: 'Rotterdam – Veracruz 1.500 €' },
    { thema: 'aussenhandel', begriff: 'D/P', erklaerung: 'Documents against Payment: Dokumente gegen Zahlung (Inkasso).', beispiel: 'Konnossement erst nach Zahlung' },
    { thema: 'aussenhandel', begriff: 'L/C', erklaerung: 'Letter of Credit, Dokumentenakkreditiv.', beispiel: 'Bank des Käufers zahlt' },
    { thema: 'aussenhandel', begriff: 'Konnossement', erklaerung: 'Transportdokument im Seeverkehr, berechtigt zur Herausgabe der Ware.', beispiel: 'Ware gegen Dokumente' },
    { thema: 'controlling', begriff: 'Soll / Ist', erklaerung: 'Planwert / tatsächlicher Wert.', beispiel: 'Soll 9,0 Mio., Ist 9,696 Mio.' },
    { thema: 'controlling', begriff: 'Reklamationsquote', erklaerung: 'reklamierte : alle Bestellungen × 100.', beispiel: '240 : 2.400 × 100 = 10 %' },
    { thema: 'controlling', begriff: 'Lieferfähigkeit', erklaerung: 'termingerecht gelieferte : alle Bestellungen × 100 (Servicegrad).', beispiel: '2.250 : 2.400 × 100 = 93,75 %' },
    { thema: 'controlling', begriff: 'DB-Quote', erklaerung: 'Deckungsbeitrag : Umsatz × 100.', beispiel: '3,496 : 9,696 × 100 = 36,06 %' }
  ],

  /* ===================== AUFGABEN ===================== */
  aufgaben: [
    // ================= MARKTANALYSE =================
    {
      id: 'a-portfolio', thema: 'analyse', titel: 'Portfolio der Schreibtische', quelle: 'LS 02 · Original', kontext: 'BCG-Matrix',
      einleitung: 'Die Controlling-Abteilung hat die Werte für alle Produkte geliefert, nur die beiden Schreibtische fehlen noch.',
      angaben: [
        { titel: 'Material 1: Umsätze 2025 (BBDO Branchenreport)', kopf: ['Wettbewerber', 'Standard', 'Deluxe'],
          zeilen: [['ManzMobilia GmbH', '6.650.000 €', '3.000.000 €'], ['König & Klever AG', '5.250.000 €', '3.750.000 €'], ['Fleischer KG', '4.900.000 €', '2.600.000 €'],
            ['Auermann OHG', '4.500.000 €', '2.700.000 €'], ['Pro Office AG', '5.100.000 €', '2.000.000 €'], ['KW Bürosysteme KG', '4.200.000 €', '2.100.000 €'],
            ['Sonstige', '4.400.000 €', '8.850.000 €'], ['Gesamtumsatz (Marktvolumen)', '35.000.000 €', '25.000.000 €']],
          fuss: 'Erwartetes Marktvolumen: Standard 36.400.000 €, Deluxe 27.000.000 €.' }
      ],
      teile: [
        { nr: '1.1', text: 'Ermitteln Sie für beide Schreibtische eigenen Marktanteil, Marktanteil des Hauptkonkurrenten, relativen Marktanteil (1 Stelle) und Marktwachstum.', punkte: 9 },
        { nr: '1.3', text: 'Ordnen Sie beide Produkte einem Feld zu und geben Sie eine Strategieempfehlung.', punkte: 3 },
        { nr: '1.5', text: 'Erläutern Sie, warum man die Empfehlungen der BCG nicht eins zu eins umsetzen sollte.', punkte: 3 }
      ],
      schritte: [
        { teil: '1.1', label: 'MA Standard', wozu: 'Erst brauchst du deinen eigenen Anteil am Markt.', frage: 'Berechnen Sie den Marktanteil des Schreibtischs Standard.', muster: '6,65 Mio. € (eigener Umsatz) : 35 Mio. € (Marktvolumen) × 100', ergebnis: 19, einheit: '%', tipp: 'Marktanteil = eigener Umsatz : Marktvolumen × 100', warum: 'Der Marktanteil zeigt, wie viel vom Kuchen dir gehört.' },
        { teil: '1.1', label: 'MA K&K Std.', frage: 'Berechnen Sie den Marktanteil des stärksten Wettbewerbers (König & Klever AG) bei Standard.', muster: '5,25 Mio. € (König & Klever) : 35 Mio. € (Marktvolumen) × 100', ergebnis: 15, einheit: '%', tipp: 'MA Konkurrent = Umsatz Konkurrent : Marktvolumen × 100', warum: 'Für den relativen Marktanteil brauchst du den stärksten einzelnen Wettbewerber.' },
        { teil: '1.1', label: 'rel. MA Std.', frage: 'Berechnen Sie den relativen Marktanteil (eine Stelle nach dem Komma).', muster: '19 % (eigener MA) : 15 % (MA König & Klever)', ergebnis: 1.3, nk: 1, tol: 0.06, tipp: 'rel. MA = eigener Marktanteil : Marktanteil stärkster Wettbewerber', warum: 'Über 1,0 heißt: Du bist in diesem Segment Marktführer.' },
        { teil: '1.1', label: 'Wachstum Std.', frage: 'Berechnen Sie das Marktwachstum bei Schreibtischen Standard.', muster: '(36,4 Mio. € − 35 Mio. €) : 35 Mio. € × 100', ergebnis: 4, einheit: '%', tipp: 'Marktwachstum = (MV neu − MV alt) : MV alt × 100', warum: 'Gemessen wird das Wachstum des Marktvolumens, nicht deines Umsatzes.' },
        { teil: '1.1', label: 'MA Deluxe', frage: 'Berechnen Sie den Marktanteil des Schreibtischs Deluxe.', muster: '3 Mio. € (eigener Umsatz) : 25 Mio. € (Marktvolumen) × 100', ergebnis: 12, einheit: '%', tipp: 'Marktanteil = eigener Umsatz : Marktvolumen × 100' },
        { teil: '1.1', typ: 'auswahl', label: 'Hauptkonkurrent', frage: 'Wer ist bei Deluxe der stärkste Wettbewerber?', optionen: ['Sonstige (8.850.000 €)', 'König & Klever AG (3.750.000 €)', 'Auermann OHG (2.700.000 €)', 'Fleischer KG (2.600.000 €)'], richtig: 1, hinweis: 'Ist „Sonstige“ ein einzelnes Unternehmen?', warum: '„Sonstige“ ist eine Sammelposition aus vielen kleinen Anbietern und kein Wettbewerber.' },
        { teil: '1.1', label: 'MA K&K Dlx.', frage: 'Berechnen Sie den Marktanteil von König & Klever bei Deluxe.', muster: '3,75 Mio. € (König & Klever) : 25 Mio. € (Marktvolumen) × 100', ergebnis: 15, einheit: '%', tipp: 'MA Konkurrent = Umsatz Konkurrent : Marktvolumen × 100' },
        { teil: '1.1', label: 'rel. MA Dlx.', frage: 'Berechnen Sie den relativen Marktanteil des Schreibtischs Deluxe.', muster: '12 % (eigener MA) : 15 % (MA König & Klever)', ergebnis: 0.8, nk: 1, tol: 0.06, tipp: 'rel. MA = eigener Marktanteil : Marktanteil stärkster Wettbewerber', warum: 'Unter 1,0: Ein Wettbewerber ist größer.' },
        { teil: '1.1', label: 'Wachstum Dlx.', frage: 'Berechnen Sie das Marktwachstum bei Schreibtischen Deluxe.', muster: '(27 Mio. € − 25 Mio. €) : 25 Mio. € × 100', ergebnis: 8, einheit: '%', tipp: 'Marktwachstum = (MV neu − MV alt) : MV alt × 100' },
        { teil: '1.3', typ: 'auswahl', label: 'Feld Standard', frage: 'Schreibtisch Standard: rel. MA 1,3 und Wachstum 4 %. In welchem Feld liegt er?', optionen: ['Star', 'Cash-Cow', 'Question Mark', 'Poor Dog'], richtig: 1, hinweis: 'Grenzen: rel. MA 1,0 und Wachstum 10 %.', warum: 'Marktführer (über 1,0) in einem kaum wachsenden Markt (unter 10 %) = Cash-Cow.' },
        { teil: '1.3', typ: 'auswahl', label: 'Feld Deluxe', frage: 'Schreibtisch Deluxe: rel. MA 0,8 und Wachstum 8 %. In welchem Feld liegt er?', optionen: ['Star', 'Cash-Cow', 'Question Mark', 'Poor Dog'], richtig: 3, hinweis: 'Beide Werte liegen unter der Grenze.', warum: 'Schwache Position in einem schwach wachsenden Markt = Poor Dog.' },
        { teil: '1.3', typ: 'auswahl', label: 'Strategie', frage: 'Welche Strategie empfiehlt die BCG für Cash-Cows?', optionen: ['Investitionsstrategie', 'Abschöpfungsstrategie', 'Offensivstrategie', 'Desinvestitionsstrategie'], richtig: 1, warum: 'Cash-Cows bringen Geld, ohne viel zu brauchen: Gewinne abschöpfen, Erinnerungswerbung, Preise halten.' },
        { teil: '1.5', typ: 'text', frage: 'Nennen Sie drei Gründe, warum man einen Poor Dog nicht vorschnell eliminieren sollte.', antwort: ['Ergänzungsprodukt: Ohne ihn vergibt der Kunde den Gesamtauftrag woanders.', 'Einstiegsmodell: Kunden wechseln später zur Deluxe-Variante.', 'Image: Das Produkt gehört zum Bild des Unternehmens.'] }
      ]
    },
    {
      id: 'a-plz', thema: 'analyse', titel: 'Produkte im Lebenszyklus', quelle: 'LS 02 · Original', kontext: 'Produktlebenszyklus',
      angaben: [
        { titel: 'Material 2: Umsätze der ManzMobilia (in €)', kopf: ['Jahr', 'Schrank Std.', 'Schrank Dlx.', 'Stuhl Std.', 'Stuhl Dlx.', 'Tisch Std.', 'Tisch Dlx.'],
          zeilen: [['2021', '5.000.000', '2.600.000', '1.500.000', '–', '5.000.000', '3.800.000'], ['2022', '5.200.000', '3.000.000', '1.600.000', '–', '5.300.000', '4.200.000'],
            ['2023', '5.600.000', '3.400.000', '1.500.000', '4.000.000', '5.600.000', '4.000.000'], ['2024', '5.900.000', '3.600.000', '1.400.000', '4.200.000', '5.900.000', '3.800.000'],
            ['2025', '6.500.000', '3.800.000', '1.300.000', '4.500.000', '6.650.000', '3.000.000']] }
      ],
      teile: [
        { nr: '2.1', text: 'Nennen Sie die Phasen und beschriften Sie die Achsen.', punkte: 2 },
        { nr: '2.2', text: 'Legen Sie anhand der Umsatzzahlen fest, in welcher Phase sich die Produkte befinden.', punkte: 6 },
        { nr: '2.3', text: 'Nennen Sie je Phase eine absatzpolitische Maßnahme.', punkte: 4 }
      ],
      schritte: [
        { teil: '2.1', typ: 'auswahl', label: 'Achsen', frage: 'Wie sind die Achsen des Produktlebenszyklus beschriftet?', optionen: ['x: Umsatz, y: Zeit', 'x: Zeit, y: Umsatz', 'x: Marktanteil, y: Wachstum', 'x: Preis, y: Absatz'], richtig: 1, warum: 'Waagerecht die Zeit, senkrecht der Umsatz.' },
        { teil: '2.1', typ: 'text', frage: 'Nennen Sie die vier Phasen in der richtigen Reihenfolge.', antwort: ['I Einführungsphase', 'II Wachstumsphase', 'III Reife- und Sättigungsphase', 'IV Degenerationsphase'] },
        { teil: '2.2', typ: 'auswahl', label: 'Schrank Std.', frage: 'Büroschrank Standard: 5,0 → 6,5 Mio. €, steigt kräftig weiter.', optionen: ['Einführung', 'Wachstum', 'Reife und Sättigung', 'Degeneration'], richtig: 1, warum: 'Starker, anhaltender Anstieg = Wachstumsphase.' },
        { teil: '2.2', typ: 'auswahl', label: 'Schrank Dlx.', frage: 'Büroschrank Deluxe: 2,2 → 3,8 Mio. €, die Zuwächse werden kleiner.', optionen: ['Einführung', 'Wachstum', 'Reife und Sättigung', 'Degeneration'], richtig: 2, warum: 'Der Umsatz steigt nur noch schwach: Reife und Sättigung.' },
        { teil: '2.2', typ: 'auswahl', label: 'Stuhl Std.', frage: 'Bürostuhl Standard: Höhepunkt 2022 mit 1,6 Mio. €, danach leicht rückläufig auf 1,3 Mio. €.', optionen: ['Einführung', 'Wachstum', 'Reife und Sättigung', 'Degeneration'], richtig: 2, hinweis: 'Entscheidend ist, wie stark der Umsatz fällt, nicht wie hoch er ist.', warum: 'Der Rückgang verläuft flach. Das ist noch Reife und Sättigung.' },
        { teil: '2.2', typ: 'auswahl', label: 'Stuhl Dlx.', frage: 'Bürostuhl Deluxe: seit 2023 am Markt, 4,0 → 4,5 Mio. €.', optionen: ['Einführung', 'Wachstum', 'Reife und Sättigung', 'Degeneration'], richtig: 1, warum: 'Junges Produkt mit deutlichem Anstieg.' },
        { teil: '2.2', typ: 'auswahl', label: 'Tisch Std.', frage: 'Schreibtisch Standard: 3,8 → 6,65 Mio. €, zuletzt noch deutlich steigend.', optionen: ['Einführung', 'Wachstum', 'Reife und Sättigung', 'Degeneration'], richtig: 1, warum: 'Deutliches Wachstum bis zuletzt.' },
        { teil: '2.2', typ: 'auswahl', label: 'Tisch Dlx.', frage: 'Schreibtisch Deluxe: Höhepunkt 2022 mit 4,2 Mio. €, dann Einbruch auf 3,0 Mio. €.', optionen: ['Einführung', 'Wachstum', 'Reife und Sättigung', 'Degeneration'], richtig: 3, warum: 'Starker Einbruch = Degeneration.' },
        { teil: '2.3', typ: 'text', frage: 'Nennen Sie für jede Phase eine passende absatzpolitische Maßnahme.', antwort: ['Einführung: Bekanntheit aufbauen, Einführungswerbung, Handel gewinnen', 'Wachstum: weiter werben, leichte Modifikation, Differenzierung', 'Reife: gewichtige Modifikation, Sonderpreise, Erinnerungswerbung', 'Degeneration: eliminieren, abverkaufen, neues Produkt entwickeln'] }
      ]
    },
    {
      id: 'a-wettbewerb', thema: 'analyse', titel: 'Wettbewerbsanalyse Büromöbel', quelle: 'LS 04 · Original', kontext: 'Marktvolumen und Marktanteile',
      einleitung: 'Der Gewinn der ManzMobilia ist eingebrochen. Frau Beyerer will erst wissen, woher das Problem kommt.',
      angaben: [
        { titel: 'Material 4: Studie Büromöbel', kopf: ['Wettbewerber', 'Umsatz 2024', 'Umsatz 2025'],
          zeilen: [['ManzMobilia GmbH', '25.824.000,00 €', '24.095.000,00 €'], ['Designermöbel AG', '28.171.636,36 €', '31.323.500,00 €'], ['König & Klever AG', '79.819.636,36 €', '81.923.000,00 €'],
            ['Fleischer KG', '21.128.727,27 €', '24.095.000,00 €'], ['Pro Office AG', '56.343.272,73 €', '60.237.500,00 €'], ['Sonstige', '23.476.363,64 €', '19.276.000,00 €']],
          fuss: 'Marktvolumen 2024: 234.763.636,36 €. 2025: 240.950.000,00 €. Prognose 2026: 256.000.000,00 €.' }
      ],
      teile: [
        { nr: '5.2', text: 'Um wie viel % ist das Marktvolumen 2025 gewachsen?', punkte: 2 },
        { nr: '5.3', text: 'Um wie viel % soll der Markt 2026 wachsen?', punkte: 2 },
        { nr: '5.4', text: 'Ermitteln Sie die Marktanteile für 2024 und 2025.', punkte: 4 },
        { nr: '5.5', text: 'Wie haben sich die Marktanteile prozentual (nicht in Prozentpunkten) verändert?', punkte: 3 },
        { nr: '5.9', text: 'Fassen Sie die Ergebnisse zusammen.', punkte: 3 }
      ],
      schritte: [
        { teil: '5.2', label: 'Wachstum 2025', frage: 'Berechnen Sie das Wachstum des Marktvolumens 2025 gegenüber 2024.', muster: '240.950.000 € (MV 2025) : 234.763.636,36 € (MV 2024) × 100 − 100', ergebnis: 2.64, einheit: '%', tipp: 'Veränderung = Zahl aktuelles Jahr : Zahl Bezugsjahr × 100 − 100', warum: 'Das Bezugsjahr (2024) ist 100 %. Alles darüber ist Wachstum.' },
        { teil: '5.3', label: 'Prognose 2026', frage: 'Berechnen Sie das erwartete Marktwachstum 2026.', muster: '256.000.000 € (Prognose 2026) : 240.950.000 € (MV 2025) × 100 − 100', ergebnis: 6.25, einheit: '%', tipp: 'Veränderung = Zahl aktuelles Jahr : Zahl Bezugsjahr × 100 − 100' },
        { teil: '5.4', label: 'MA Manz 2024', frage: 'Berechnen Sie den Marktanteil der ManzMobilia 2024.', muster: '25.824.000 € (Umsatz Manz) : 234.763.636,36 € (MV 2024) × 100', ergebnis: 11, einheit: '%', tipp: 'Marktanteil = eigener Umsatz : Marktvolumen × 100' },
        { teil: '5.4', label: 'MA Manz 2025', frage: 'Berechnen Sie den Marktanteil der ManzMobilia 2025.', muster: '24.095.000 € (Umsatz Manz) : 240.950.000 € (MV 2025) × 100', ergebnis: 10, einheit: '%', tipp: 'Marktanteil = eigener Umsatz : Marktvolumen × 100' },
        { teil: '5.4', label: 'MA Pro Office 25', frage: 'Berechnen Sie den Marktanteil der Pro Office AG 2025.', muster: '60.237.500 € (Umsatz Pro Office) : 240.950.000 € (MV 2025) × 100', ergebnis: 25, einheit: '%', tipp: 'Marktanteil = eigener Umsatz : Marktvolumen × 100', warum: '2024 lag Pro Office bei 24 %.' },
        { teil: '5.5', label: 'Veränd. Manz', frage: 'Um wie viel Prozent hat sich der Marktanteil der ManzMobilia verändert?', muster: '10 % (MA 2025) : 11 % (MA 2024) × 100 − 100', ergebnis: -9.09, einheit: '%', tipp: 'Veränderung = Zahl aktuelles Jahr : Zahl Bezugsjahr × 100 − 100', warum: 'Der Anteil fällt um 1 Prozentpunkt, das sind aber −9,09 %.' },
        { teil: '5.5', label: 'Veränd. Pro Off.', frage: 'Um wie viel Prozent hat sich der Marktanteil der Pro Office AG verändert (24 % → 25 %)?', muster: '25 % (MA 2025) : 24 % (MA 2024) × 100 − 100', ergebnis: 4.17, einheit: '%', tipp: 'Veränderung = Zahl aktuelles Jahr : Zahl Bezugsjahr × 100 − 100' },
        { teil: '5.5', typ: 'auswahl', label: 'Punkte vs. %', frage: 'Der Marktanteil sinkt von 11 % auf 10 %. Welche Aussage stimmt?', optionen: ['Er sinkt um 1 %.', 'Er sinkt um 1 Prozentpunkt bzw. um 9,09 %.', 'Er sinkt um 10 Prozentpunkte.', 'Er sinkt um 11 %.'], richtig: 1, warum: 'Prozentpunkte = Differenz der Prozentwerte. Prozent = Veränderung bezogen auf den Ausgangswert.' },
        { teil: '5.9', typ: 'text', frage: 'Fassen Sie die Ergebnisse der Wettbewerbsanalyse zusammen.', antwort: ['Das Marktvolumen ist gestiegen (+2,64 %), 2026 werden +6,25 % erwartet.', 'ManzMobilia konnte davon nicht profitieren, der Marktanteil sank von 11 % auf 10 %.', 'Wettbewerber haben Marktanteile auf Kosten der ManzMobilia gewonnen (Verdrängung).', 'Folge: Maßnahmen für bestehende Produkte einleiten (z. B. neuer Schreibtisch Deluxe, Qualität der Stühle).'] }
      ]
    },
    {
      id: 'a-stichprobe', thema: 'analyse', titel: 'Stichprobe und Marktforschung', quelle: 'LS 05 · Original', kontext: 'Kundenbefragung',
      einleitung: 'Für den neuen Schreibtisch sollen 8 % der Geschäftskunden repräsentativ befragt werden. Runden Sie auf 2 Stellen.',
      angaben: [
        { titel: 'Kunden der ManzMobilia', kopf: ['Region', 'Groß: Zahl', 'm / w', 'Mittel: Zahl', 'm / w', 'Klein: Zahl', 'm / w'],
          zeilen: [['West', '1.200', '70 % / 30 %', '8.400', '80 % / 20 %', '2.400', '60 % / 40 %'], ['Ost', '600', '65 % / 35 %', '4.200', '70 % / 30 %', '2.400', '60 % / 40 %']] }
      ],
      teile: [
        { nr: '3', text: 'Wie viele und welche Unternehmen sollen befragt werden?', punkte: 6 },
        { nr: '5', text: 'Wie werden die Informationen beschafft?', punkte: 4 }
      ],
      schritte: [
        { teil: '3', label: 'Groß West', frage: 'Wie viele Großunternehmen aus dem Westen werden befragt?', muster: '1.200 (Großunternehmen West) × 8 %', ergebnis: 96, nk: 2, tipp: 'Anzahl = Grundgesamtheit × Prozentsatz', warum: 'Repräsentativ heißt: Jede Gruppe ist im gleichen Verhältnis vertreten wie bei allen Kunden.' },
        { teil: '3', label: 'Groß West m', frage: 'Wie viele davon haben männliche Verantwortliche?', muster: '96 (Groß West) × 70 %', ergebnis: 67.2, tipp: 'Anzahl × Anteil männlich' },
        { teil: '3', label: 'Mittel West', frage: 'Wie viele mittlere Unternehmen aus dem Westen werden befragt?', muster: '8.400 (Mittlere West) × 8 %', ergebnis: 672, tipp: 'Anzahl = Grundgesamtheit × Prozentsatz' },
        { teil: '3', label: 'Mittel West w', frage: 'Wie viele davon haben weibliche Verantwortliche?', muster: '672 (Mittlere West) × 20 %', ergebnis: 134.4, tipp: 'Anzahl × Anteil weiblich' },
        { teil: '3', label: 'Klein Ost', frage: 'Wie viele Kleinunternehmen aus dem Osten werden befragt?', muster: '2.400 (Klein Ost) × 8 %', ergebnis: 192, tipp: 'Anzahl = Grundgesamtheit × Prozentsatz' },
        { teil: '3', label: 'Klein Ost m', frage: 'Wie viele davon haben männliche Verantwortliche?', muster: '192 (Klein Ost) × 60 %', ergebnis: 115.2, tipp: 'Anzahl × Anteil männlich' },
        { teil: '5', typ: 'auswahl', label: 'Kaufmotive', frage: 'Kaufmotive der Kunden: Wie beschafft man diese Information?', optionen: ['Eigene Statistiken, Sekundärforschung', 'Fragebogenaktion, Primärforschung', 'Verbandsveröffentlichung, Sekundärforschung', 'Konjunkturbericht, Sekundärforschung'], richtig: 1, warum: 'Wünsche und Motive der Zielgruppe stehen nirgends: neu erheben = Primärforschung.' },
        { teil: '5', typ: 'auswahl', label: 'Reklamation', frage: 'Reklamationsquote: Wie beschafft man diese Information?', optionen: ['Eigene Statistiken, Sekundärforschung', 'Fragebogenaktion, Primärforschung', 'Internetauftritt der Wettbewerber', 'Beobachtung, Primärforschung'], richtig: 0, warum: 'Die Zahl liegt schon im Haus vor (unternehmensspezifische Ausgangslage).' },
        { teil: '5', typ: 'auswahl', label: 'MV Branche', frage: 'Marktvolumen der Büromöbelbranche: Woher kommt die Zahl?', optionen: ['Fragebogenaktion', 'Verbandsveröffentlichungen (Sekundärforschung)', 'Experiment', 'Eigene Statistiken'], richtig: 1, warum: 'Branchenzahlen veröffentlichen Verbände. Sie dienen der Analyse der Wettbewerbssituation.' },
        { teil: '5', typ: 'text', frage: 'Unterscheiden Sie offene und geschlossene Fragen und nennen Sie je einen Vor- und Nachteil.', antwort: ['Offen: freies Antwortfeld. Vorteil: neue Ideen. Nachteil: aufwendig auszuwerten.', 'Geschlossen: Antworten zum Ankreuzen. Vorteil: schnell und einheitlich auswertbar. Nachteil: engt ein, Aspekte fehlen.'] }
      ]
    },
    {
      id: 'a-portfolio-uebung', thema: 'analyse', titel: 'Portfolio Bürostuhl Deluxe', quelle: 'Neue Übungsaufgabe', kontext: 'BCG mit neuen Zahlen',
      angaben: [
        { titel: 'Bürostühle Deluxe, Jahr 01', kopf: ['Anbieter', 'Umsatz'],
          zeilen: [['ManzMobilia GmbH', '4.200.000 €'], ['Sitzwerk AG', '5.600.000 €'], ['Comfort KG', '3.500.000 €'], ['Sonstige', '14.700.000 €'], ['Marktvolumen', '28.000.000 €']],
          fuss: 'Prognose Marktvolumen Jahr 02: 30.000.000 €.' }
      ],
      teile: [{ nr: '1', text: 'Berechnen Sie die Kennzahlen der Portfolioanalyse.', punkte: 6 }, { nr: '2', text: 'Ordnen Sie das Produkt ein.', punkte: 2 }],
      schritte: [
        { teil: '1', label: 'MA eigen', frage: 'Berechnen Sie den Marktanteil der ManzMobilia.', muster: '4,2 Mio. € (eigener Umsatz) : 28 Mio. € (Marktvolumen) × 100', ergebnis: 15, einheit: '%', tipp: 'Marktanteil = eigener Umsatz : Marktvolumen × 100' },
        { teil: '1', label: 'MA Sitzwerk', frage: 'Berechnen Sie den Marktanteil des stärksten Wettbewerbers.', muster: '5,6 Mio. € (Sitzwerk) : 28 Mio. € (Marktvolumen) × 100', ergebnis: 20, einheit: '%', tipp: 'Stärkster einzelner Wettbewerber, nicht „Sonstige“.' },
        { teil: '1', label: 'rel. MA', frage: 'Berechnen Sie den relativen Marktanteil (2 Stellen).', muster: '15 % (eigener MA) : 20 % (MA Sitzwerk)', ergebnis: 0.75, tipp: 'rel. MA = eigener MA : MA stärkster Wettbewerber' },
        { teil: '1', label: 'Wachstum', frage: 'Berechnen Sie das Marktwachstum.', muster: '(30 Mio. € − 28 Mio. €) : 28 Mio. € × 100', ergebnis: 7.14, einheit: '%', tipp: 'Marktwachstum = (MV neu − MV alt) : MV alt × 100' },
        { teil: '1', label: 'MA Jahr 02', frage: 'Welchen Marktanteil hätte ManzMobilia im Jahr 02, wenn der Umsatz gleich bleibt?', muster: '4,2 Mio. € (eigener Umsatz) : 30 Mio. € (MV Jahr 02) × 100', ergebnis: 14, einheit: '%', tipp: 'gleicher Umsatz : neues Marktvolumen × 100', warum: 'Gleicher Umsatz in einem wachsenden Markt bedeutet sinkenden Marktanteil.' },
        { teil: '2', typ: 'auswahl', label: 'Feld', frage: 'rel. MA 0,75 und Wachstum 7,14 %: Welches Feld?', optionen: ['Star', 'Cash-Cow', 'Question Mark', 'Poor Dog'], richtig: 3, warum: 'Beide Werte liegen unter den Grenzen 1,0 und 10 %.' }
      ]
    },

    // ================= ZIELE =================
    {
      id: 'a-ziele', thema: 'ziele', titel: 'Ziele und Strategien zuordnen', quelle: 'LS 06 · Übung (ergänzt)', kontext: 'SMART, Zielarten, Strategien',
      einleitung: 'Die Antworten zu LS 06 stehen nicht in den Arbeitsblättern. Bitte mit der Lehrkraft abgleichen.',
      teile: [{ nr: '1', text: 'Unterscheiden Sie Käufer- und Verkäufermarkt.', punkte: 2 }, { nr: '2', text: 'Beschreiben und beurteilen Sie Marketingziele.', punkte: 6 }, { nr: '3', text: 'Unterscheiden Sie die drei Marketingstrategien.', punkte: 4 }],
      schritte: [
        { teil: '1', typ: 'auswahl', label: 'Marktform', frage: 'Viele Anbieter, gesättigter Markt, der Kunde kann frei wählen. Welche Marktform?', optionen: ['Verkäufermarkt', 'Käufermarkt', 'Monopol', 'Nischenmarkt'], richtig: 1, warum: 'Angebot größer als Nachfrage: Der Käufer ist in der stärkeren Position.' },
        { teil: '2', typ: 'auswahl', label: 'Zielart', frage: '„Bekanntheitsgrad von 40 % auf 55 % steigern“ ist ein …', optionen: ['ökonomisches Ziel', 'psychologisches Ziel', 'Sachziel der Produktion', 'Finanzziel'], richtig: 1, warum: 'Bekanntheit misst man nur über Befragung, nicht in der Buchhaltung.' },
        { teil: '2', typ: 'auswahl', label: 'SMART', frage: 'Welche Formulierung ist ein vollständiges Marketingziel?', optionen: ['Wir wollen bekannter werden.', 'Mehr Umsatz mit Schreibtischen.', 'Marktanteil Schreibtisch Deluxe bis 31.12. von 12 % auf 15 % steigern.', 'Bis Jahresende viel Werbung machen.'], richtig: 2, warum: 'Inhalt, Ausmaß, Zeit und Bereich sind genannt.' },
        { teil: '2', label: 'Zuwachs MA', frage: 'Der Marktanteil soll von 12 % auf 15 % steigen. Um wie viel Prozent wächst er?', muster: '15 % (Ziel) : 12 % (heute) × 100 − 100', ergebnis: 25, einheit: '%', tipp: 'Veränderung = neu : alt × 100 − 100', warum: 'Das sind 3 Prozentpunkte, aber ein Zuwachs von 25 %.' },
        { teil: '2', typ: 'auswahl', label: 'Zielbeziehung', frage: 'Hoher Marktanteil über Niedrigpreise und hohe Umsatzrentabilität. Wie stehen die Ziele zueinander?', optionen: ['komplementär', 'konkurrierend', 'indifferent', 'identisch'], richtig: 1, warum: 'Niedrige Preise drücken die Rendite: Die Ziele behindern sich.' },
        { teil: '3', typ: 'auswahl', label: 'Strategie', frage: 'Ein Hersteller fertigt große Stückzahlen standardisiert und verkauft über den Preis. Welche Strategie?', optionen: ['Differenzierung', 'Kostenführerschaft', 'Nischenstrategie', 'Premiumstrategie'], richtig: 1, warum: 'Niedrigste Kosten durch Masse und schlanke Prozesse.' },
        { teil: '3', typ: 'auswahl', label: 'Strategie 2', frage: 'Ein Anbieter baut nur Stehpulte für Architekturbüros. Welche Strategie?', optionen: ['Kostenführerschaft', 'Differenzierung', 'Nischenstrategie', 'Massenmarketing'], richtig: 2, warum: 'Beschränkung auf ein eng abgegrenztes Segment.' },
        { teil: '3', typ: 'text', frage: 'Warum sollte man Kostenführerschaft und Differenzierung nicht gleichzeitig verfolgen?', antwort: ['Beides gleichzeitig führt meist dazu, weder der günstigste noch der beste Anbieter zu sein.', 'Man bleibt „in der Mitte stecken“, der Kunde hat keinen Grund, gerade hier zu kaufen.', 'In einer Nische sind beide Wege möglich.'] }
      ]
    },

    // ================= PRODUKT =================
    {
      id: 'a-massnahmen', thema: 'produkt', titel: 'Produktpolitische Maßnahmen', quelle: 'LS 07 · Original', kontext: 'Fälle zuordnen',
      teile: [{ nr: '4', text: 'Um welche produktpolitischen Maßnahmen handelt es sich in folgenden Fällen?', punkte: 7 }, { nr: '2', text: 'Nutzen und Produktentwicklung', punkte: 3 }],
      schritte: [
        { teil: '4', typ: 'auswahl', label: '4.1', frage: 'Ein Getränkehersteller nimmt eine vor zwei Jahren eingeführte Limonade wegen Absatzschwierigkeiten vom Markt.', optionen: ['Produktmodifikation', 'Produktelimination', 'Produktdifferenzierung', 'laterale Diversifikation'], richtig: 1, warum: 'Das Produkt verlässt das Programm.' },
        { teil: '4', typ: 'auswahl', label: '4.2', frage: 'Ein Hersteller bietet sein NAS-System bisher mit 8 und 16 TB an, künftig zusätzlich mit 32 TB.', optionen: ['Produktdifferenzierung', 'Produktmodifikation', 'Produktinnovation', 'horizontale Diversifikation'], richtig: 0, warum: 'Die alten Varianten bleiben, eine neue kommt dazu.' },
        { teil: '4', typ: 'auswahl', label: '4.3', frage: 'Ein Autohersteller bietet Limousinen, Kombis und Vans an und nimmt einen Geländewagen dazu.', optionen: ['Produktdifferenzierung', 'horizontale Diversifikation', 'vertikale Diversifikation', 'laterale Diversifikation'], richtig: 1, warum: 'Artverwandtes Produkt auf der gleichen Fertigungsstufe.' },
        { teil: '4', typ: 'auswahl', label: '4.4', frage: 'Eine Fastfood-Kette betreibt seit kurzem eigene landwirtschaftliche Betriebe.', optionen: ['horizontale Diversifikation', 'vorgelagerte vertikale Diversifikation', 'nachgelagerte vertikale Diversifikation', 'laterale Diversifikation'], richtig: 1, warum: 'Die Landwirtschaft liegt vor der eigenen Stufe.' },
        { teil: '4', typ: 'auswahl', label: '4.5', frage: 'Ein Lkw-Hersteller senkt den Dieselverbrauch. Die neuen Fahrzeuge ersetzen die alten.', optionen: ['Produktdifferenzierung', 'Produktmodifikation', 'Produktelimination', 'Produktinnovation'], richtig: 1, warum: 'Das alte Produkt verschwindet, das verbesserte ersetzt es.' },
        { teil: '4', typ: 'auswahl', label: '4.6', frage: 'Ein Sportartikelhersteller baut ein eigenes Händlernetz mit Geschäften in Europas Hauptstädten auf.', optionen: ['vorgelagerte vertikale Diversifikation', 'nachgelagerte vertikale Diversifikation', 'horizontale Diversifikation', 'Produktdifferenzierung'], richtig: 1, warum: 'Der Handel folgt nach der eigenen Stufe.' },
        { teil: '4', typ: 'auswahl', label: '4.7', frage: 'Eine Firma für Sportartikel, Motorboote und Motorräder will künftig Musikinstrumente verkaufen.', optionen: ['horizontale Diversifikation', 'vertikale Diversifikation', 'laterale Diversifikation', 'Produktinnovation'], richtig: 2, warum: 'Völlig branchenfremd.' },
        { teil: '2', typ: 'auswahl', label: 'Nutzen', frage: 'Ein Bürostuhl einer bekannten Designermarke im Chefbüro. Welcher Nutzen steht im Vordergrund?', optionen: ['Grundnutzen', 'Erbauungsnutzen', 'Geltungsnutzen', 'Funktionsnutzen'], richtig: 2, warum: 'Prestige und Anerkennung sind Geltungsnutzen (Teil des Zusatznutzens).' },
        { teil: '2', typ: 'auswahl', label: 'Phase', frage: 'In welcher Phase der Produktentwicklung wird eine Break-even-Analyse gemacht?', optionen: ['Ideenfindung', 'Screening (Feinauswahl)', 'Konstruktion', 'Markteinführung'], richtig: 1, warum: 'In der Feinauswahl wird die Wirtschaftlichkeit geprüft.' },
        { teil: '2', typ: 'text', frage: 'Erläutern Sie die Methode 6-3-5.', antwort: ['6 Personen, jede trägt 3 Ideen in ein Formular ein.', 'Nach 5 Minuten wird weitergereicht, Ideen werden aufgegriffen und weiterentwickelt.', '5-mal weitergeben: 6 Formulare mit je 18 Ideen = 108 Ideen.'] }
      ]
    },
    {
      id: 'a-marke-uebung', thema: 'produkt', titel: 'Neue Fälle und Marke', quelle: 'Neue Übungsaufgabe', kontext: 'Maßnahmen, Verpackung, USP',
      teile: [{ nr: '1', text: 'Ordnen Sie die Fälle zu.', punkte: 5 }, { nr: '2', text: 'Marke und USP', punkte: 3 }],
      schritte: [
        { teil: '1', typ: 'auswahl', label: 'Fall 1', frage: 'ManzMobilia bietet den Schreibtisch Standard zusätzlich in Eiche an. Weiß und Grau bleiben im Programm.', optionen: ['Produktmodifikation', 'Produktdifferenzierung', 'horizontale Diversifikation', 'Produktinnovation'], richtig: 1, warum: 'Neue Variante neben den alten.' },
        { teil: '1', typ: 'auswahl', label: 'Fall 2', frage: 'Der Bürostuhl Deluxe bekommt eine bessere Verarbeitung. Das alte Modell wird nicht mehr gebaut.', optionen: ['Produktmodifikation', 'Produktdifferenzierung', 'Produktelimination', 'vertikale Diversifikation'], richtig: 0, warum: 'Das verbesserte Produkt ersetzt das alte.' },
        { teil: '1', typ: 'auswahl', label: 'Fall 3', frage: 'ManzMobilia nimmt Akustik-Trennwände für Büros ins Programm.', optionen: ['horizontale Diversifikation', 'laterale Diversifikation', 'vorgelagerte vertikale Diversifikation', 'Produktmodifikation'], richtig: 0, warum: 'Verwandtes Produkt für dieselben Kunden, gleiche Stufe.' },
        { teil: '1', typ: 'auswahl', label: 'Fall 4', frage: 'ManzMobilia kauft ein Sägewerk, das Holz für die Schreibtische liefert.', optionen: ['nachgelagerte vertikale Diversifikation', 'vorgelagerte vertikale Diversifikation', 'horizontale Diversifikation', 'laterale Diversifikation'], richtig: 1, warum: 'Das Sägewerk liefert zu, liegt also vor der eigenen Stufe.' },
        { teil: '1', typ: 'auswahl', label: 'Verpackung', frage: 'Welche Verpackung dient überwiegend dem Weg vom Hersteller zum Händler?', optionen: ['Verkaufsverpackung', 'Umverpackung', 'Transportverpackung', 'Mehrwegbecher'], richtig: 2, warum: 'Beispiel: die Palette mit Joghurtbechern.' },
        { teil: '2', typ: 'auswahl', label: 'USP', frage: 'Welches Merkmal eignet sich als Alleinstellungsmerkmal?', optionen: ['„besonders schönes Design“', 'patentierte Rückenmechanik, die nachweislich Beschwerden senkt', 'gleicher Preis wie die Konkurrenz', '„hohe Qualität“'], richtig: 1, warum: 'Einzigartig, relevant, wahrnehmbar, durch Patent verteidigbar, kurz erklärbar.' },
        { teil: '2', typ: 'text', frage: 'Nennen Sie drei Vorteile der Marke für den Hersteller und drei für den Kunden.', antwort: ['Hersteller: Abhebung vom Wettbewerb, Preisspielraum, Kundenbindung (auch: Markentransfer, Macht gegenüber Handel, Rechtsschutz).', 'Kunde: Orientierung, Qualitätsvermutung, geringeres Kaufrisiko (auch: Wiedererkennung, Prestige, Vertrauen).'] }
      ]
    },

    // ================= PREIS =================
    {
      id: 'a-kalkulation', thema: 'preis', titel: 'Kalkulation Schreibtisch Deluxe', quelle: 'LS 08 · Original', kontext: 'Kostenorientierter Preis',
      einleitung: 'Karl Kulierer hat alle Kosten des neuen Schreibtischs Deluxe zusammengetragen. Ermitteln Sie den Listenverkaufspreis brutto.',
      angaben: [
        { titel: 'Material 4: Kosten je Stück', kopf: ['Position', 'Wert'],
          zeilen: [['Materialeinzelkosten', '360,00 €'], ['Materialgemeinkosten', '20 %'], ['Fertigungslöhne', '50,00 €'], ['Fertigungsgemeinkosten', '80 %'],
            ['Maschinenabhängige Fertigungsgemeinkosten', '125,00 €'], ['Fertigungslöhne des Maschinenplatzes', '7,00 €'], ['Restgemeinkosten (auf FL Maschinenplatz)', '30 %'],
            ['Verwaltungs- und Vertriebsgemeinkosten', '20 %'], ['Gewinnzuschlag', '20 %'], ['Kundenskonto', '3 %'], ['Kundenrabatt', '10 %'], ['Umsatzsteuer', '19 %']] }
      ],
      teile: [{ nr: '2', text: 'Ermitteln Sie anhand der Kosten mithilfe des Kalkulationsschemas den Listenverkaufspreis brutto.', punkte: 16 }],
      schritte: [
        { teil: '2', label: 'MGK', frage: 'Berechnen Sie die Materialgemeinkosten.', muster: '360 € (MEK) × 20 %', ergebnis: 72, einheit: '€', tipp: 'MGK = Materialeinzelkosten × Zuschlagssatz', warum: 'Gemeinkosten werden über einen Zuschlagssatz auf die Einzelkosten verteilt.' },
        { teil: '2', label: 'Materialkosten', frage: 'Berechnen Sie die Materialkosten.', muster: '360 € (MEK) + 72 € (MGK)', ergebnis: 432, einheit: '€', tipp: 'Materialkosten = MEK + MGK' },
        { teil: '2', label: 'FGK', frage: 'Berechnen Sie die Fertigungsgemeinkosten.', muster: '50 € (Fertigungslöhne) × 80 %', ergebnis: 40, einheit: '€', tipp: 'FGK = Fertigungslöhne × Zuschlagssatz' },
        { teil: '2', label: 'FK I', frage: 'Berechnen Sie die Fertigungskosten I.', muster: '50 € (FL) + 40 € (FGK)', ergebnis: 90, einheit: '€', tipp: 'Fertigungskosten I = FL + FGK' },
        { teil: '2', label: 'Rest-GK', frage: 'Berechnen Sie die Restgemeinkosten.', muster: '7 € (FL Maschinenplatz) × 30 %', ergebnis: 2.1, einheit: '€', tipp: 'Restgemeinkosten = FL Maschinenplatz × Satz' },
        { teil: '2', label: 'FK II', frage: 'Berechnen Sie die Fertigungskosten II.', muster: '125 € (Maschinenkosten) + 7 € (FL Maschinenplatz) + 2,10 € (Restgemeinkosten)', ergebnis: 134.1, einheit: '€', tipp: 'FK II = Maschinenkosten + FL Maschinenplatz + Restgemeinkosten' },
        { teil: '2', label: 'HK', frage: 'Berechnen Sie die Herstellkosten.', muster: '432 € (Materialkosten) + 90 € (FK I) + 134,10 € (FK II)', ergebnis: 656.1, einheit: '€', tipp: 'Herstellkosten = Materialkosten + Fertigungskosten' },
        { teil: '2', label: 'VwVtGK', frage: 'Berechnen Sie die Verwaltungs- und Vertriebsgemeinkosten.', muster: '656,10 € (HK) × 20 %', ergebnis: 131.22, einheit: '€', tipp: 'VwVtGK = Herstellkosten × Zuschlagssatz', warum: 'Basis sind die Herstellkosten.' },
        { teil: '2', label: 'SK', frage: 'Berechnen Sie die Selbstkosten.', muster: '656,10 € (HK) + 131,22 € (VwVtGK)', ergebnis: 787.32, einheit: '€', tipp: 'Selbstkosten = HK + VwVtGK' },
        { teil: '2', label: 'Gewinn', frage: 'Berechnen Sie den Gewinnzuschlag.', muster: '787,32 € (SK) × 20 %', ergebnis: 157.46, einheit: '€', tipp: 'Gewinn = Selbstkosten × Gewinnzuschlag (vom Hundert)', warum: 'Der Gewinn wird vom Hundert gerechnet: Die Selbstkosten sind die bekannte Basis.' },
        { teil: '2', label: 'BVP', frage: 'Berechnen Sie den Barverkaufspreis.', muster: '787,32 € (SK) + 157,46 € (Gewinn)', ergebnis: 944.78, einheit: '€', tipp: 'BVP = Selbstkosten + Gewinn' },
        { teil: '2', label: 'ZVP', wozu: 'Der Kunde zieht später 3 % Skonto ab. Der Barverkaufspreis sind also nur 97 % des Zielverkaufspreises.', frage: 'Berechnen Sie den Zielverkaufspreis.', muster: '944,78 € (BVP) : (100 % − 3 %)', platzhalter: '944,78 : 97 × 100', ergebnis: 974, einheit: '€', tipp: 'ZVP = BVP : (100 − Skontosatz) × 100', warum: 'Im Hundert rechnen, weil die Basis (ZVP) erst gesucht wird.' },
        { teil: '2', label: 'Skonto', frage: 'Wie hoch ist der Kundenskonto in Euro?', muster: '974 € (ZVP) − 944,78 € (BVP)', ergebnis: 29.22, einheit: '€', tipp: 'Skonto = ZVP − BVP (oder ZVP × 3 %)' },
        { teil: '2', label: 'LVP netto', frage: 'Berechnen Sie den Listenverkaufspreis netto.', muster: '974 € (ZVP) : (100 % − 10 %)', ergebnis: 1082.22, einheit: '€', tipp: 'LVP = ZVP : (100 − Rabattsatz) × 100', warum: 'Auch der Rabatt wird im Hundert gerechnet.' },
        { teil: '2', label: 'USt', frage: 'Berechnen Sie die Umsatzsteuer.', muster: '1.082,22 € (LVP netto) × 19 %', ergebnis: 205.62, einheit: '€', tipp: 'USt = LVP netto × 19 %' },
        { teil: '2', label: 'LVP brutto', frage: 'Berechnen Sie den Listenverkaufspreis brutto.', muster: '1.082,22 € (LVP netto) + 205,62 € (USt)', ergebnis: 1287.84, einheit: '€', tipp: 'LVP brutto = LVP netto + USt' }
      ]
    },
    {
      id: 'a-wettbewerbspreis', thema: 'preis', titel: 'Wettbewerbsorientierter Preis', quelle: 'LS 08 · Original', kontext: 'Ø-Preis und Stärken-Schwächen',
      angaben: [
        { titel: 'Listenverkaufspreise brutto der Wettbewerber', kopf: ['Wettbewerber', 'Preis'], zeilen: [['Designermöbel AG', '1.200,00 €'], ['König & Klever AG', '1.300,00 €'], ['Fleischer KG', '1.150,00 €'], ['Auermann OHG', '1.100,00 €'], ['Pro Office AG', '1.000,00 €']] },
        { titel: 'Stärken-Schwächen-Analyse (Punkte 1–6)', kopf: ['Anbieter', 'Design', 'Qualität', 'Image', 'Beratung'],
          zeilen: [['Designermöbel AG', '5', '5', '6', '5'], ['König & Klever AG', '6', '6', '6', '5'], ['Fleischer KG', '5', '5', '5', '5'], ['Auermann OHG', '4', '5', '5', '5'], ['Pro Office AG', '4', '5', '5', '3'], ['ManzMobilia GmbH', '5', '6', '6', '5']] }
      ],
      teile: [{ nr: '1', text: 'Unterbreiten Sie einen Preisvorschlag aufgrund wettbewerbsorientierter Überlegungen.', punkte: 6 }],
      schritte: [
        { teil: '1', label: 'Ø-Preis', frage: 'Schritt 1: Berechnen Sie den Durchschnittspreis der Wettbewerber.', muster: '(1.200 € + 1.300 € + 1.150 € + 1.100 € + 1.000 €) : 5 (Wettbewerber)', ergebnis: 1150, einheit: '€', tipp: 'Ø-Preis = Summe aller Preise : Anzahl der Wettbewerber' },
        { teil: '1', label: 'Punkte Manz', frage: 'Schritt 2: Wie viele Punkte erreicht die ManzMobilia?', muster: '5 (Design) + 6 (Qualität) + 6 (Image) + 5 (Beratung)', ergebnis: 22, nk: 0, tipp: 'Punkte aller Kriterien addieren' },
        { teil: '1', label: 'Punkte K&K', frage: 'Wie viele Punkte erreicht König & Klever?', muster: '6 (Design) + 6 (Qualität) + 6 (Image) + 5 (Beratung)', ergebnis: 23, nk: 0, tipp: 'Punkte aller Kriterien addieren' },
        { teil: '1', typ: 'auswahl', label: 'Rang', frage: 'Welchen Rang hat die ManzMobilia (Designermöbel 21, Fleischer 20, Auermann 19, Pro Office 17)?', optionen: ['Rang 1', 'Rang 2', 'Rang 3', 'Rang 6'], richtig: 1, warum: 'Nur König & Klever (23) liegt vor ManzMobilia (22).' },
        { teil: '1', typ: 'auswahl', label: 'Strategie', frage: 'Schritt 3: Welche Preisstrategie passt?', optionen: ['Promotionsstrategie', 'Mittelpreisstrategie', 'Premiumstrategie', 'Penetrationsstrategie'], richtig: 2, warum: 'Das Produkt hebt sich erkennbar ab (Rang 2). Das rechtfertigt einen Preis über dem Durchschnitt.' },
        { teil: '1', typ: 'auswahl', label: 'Preis', frage: 'Schritt 4: Welcher Verkaufspreis passt zur Premiumstrategie?', optionen: ['1.000 €', '1.150 €', '1.250 €', '1.400 €'], richtig: 2, warum: 'Über dem Durchschnitt von 1.150 €, aber unter dem Marktführer König & Klever (1.300 €).' }
      ]
    },
    {
      id: 'a-preistest', thema: 'preis', titel: 'Preistest Schreibtisch Deluxe', quelle: 'LS 08 · Original', kontext: 'Nachfrageorientierter Preis',
      einleitung: 'Die Berg KG hat einen Preistest durchgeführt. Fixkosten: 1.800.000 €, variable Kosten: 600 € je Stück.',
      angaben: [
        { titel: 'Material 6: Ergebnis des Preistests', kopf: ['LVP brutto', '1.050 €', '1.100 €', '1.150 €', '1.200 €', '1.250 €', '1.300 €'],
          zeilen: [['Absatz (Stück)', '6.000', '5.500', '5.300', '4.800', '4.200', '3.500']] }
      ],
      teile: [{ nr: '1', text: 'Zu welchem Preis sollte der Schreibtisch aufgrund nachfrageorientierter Überlegungen angeboten werden?', punkte: 8 }, { nr: '2', text: 'Unterbreiten Sie einen begründeten Vorschlag für den endgültigen Preis.', punkte: 3 }],
      schritte: [
        { teil: '1', label: 'Umsatz 1.150', wozu: 'Gewinnmaximal ist die Preisstufe mit dem höchsten Gewinn. Rechne sie Stufe für Stufe durch.', frage: 'Berechnen Sie den Umsatz bei 1.150 €.', muster: '1.150 € (Preis) × 5.300 Stück (Absatz)', ergebnis: 6095000, einheit: '€', tipp: 'Umsatz = Preis × Absatzmenge' },
        { teil: '1', label: 'kv 1.150', frage: 'Berechnen Sie die variablen Kosten bei 1.150 €.', muster: '600 € (kv) × 5.300 Stück (Absatz)', ergebnis: 3180000, einheit: '€', tipp: 'variable Kosten = kv × Absatzmenge' },
        { teil: '1', label: 'K 1.150', frage: 'Berechnen Sie die Gesamtkosten bei 1.150 €.', muster: '1.800.000 € (Fixkosten) + 3.180.000 € (variable Kosten)', ergebnis: 4980000, einheit: '€', tipp: 'Gesamtkosten = Fixkosten + variable Kosten' },
        { teil: '1', label: 'Gewinn 1.150', frage: 'Berechnen Sie den Gewinn bei 1.150 €.', muster: '6.095.000 € (Umsatz) − 4.980.000 € (Gesamtkosten)', ergebnis: 1115000, einheit: '€', tipp: 'Gewinn = Umsatz − Gesamtkosten' },
        { teil: '1', label: 'Gewinn 1.200', frage: 'Berechnen Sie den Gewinn bei 1.200 € in einer Rechnung.', muster: '1.200 € × 4.800 Stück − (1.800.000 € + 600 € × 4.800 Stück)', ergebnis: 1080000, einheit: '€', tipp: 'Gewinn = Preis × Absatz − (Fixkosten + kv × Absatz)' },
        { teil: '1', label: 'Gewinn 1.100', frage: 'Berechnen Sie den Gewinn bei 1.100 €.', muster: '1.100 € × 5.500 Stück − (1.800.000 € + 600 € × 5.500 Stück)', ergebnis: 950000, einheit: '€', tipp: 'Gewinn = Preis × Absatz − (Fixkosten + kv × Absatz)', warum: 'Die übrigen Stufen: 1.050 € → 900.000 €, 1.250 € → 930.000 €, 1.300 € → 650.000 €.' },
        { teil: '1', typ: 'auswahl', label: 'Gewinnmax.', frage: 'Welcher Preis bringt den höchsten Gewinn?', optionen: ['1.050 €', '1.100 €', '1.150 €', '1.200 €'], richtig: 2, warum: '1.115.000 € ist der höchste Gewinn aller Stufen.' },
        { teil: '1', typ: 'auswahl', label: 'Umsatzmax.', frage: 'Bei welchem Preis ist der Umsatz am höchsten?', optionen: ['1.050 € (6.300.000 €)', '1.150 € (6.095.000 €)', '1.200 € (5.760.000 €)', '1.300 € (4.550.000 €)'], richtig: 0, warum: 'Höchster Umsatz und höchster Gewinn liegen an verschiedenen Stellen, weil die Kosten mit der Menge wachsen.' },
        { teil: '2', typ: 'text', frage: 'Kostenorientiert 1.287,84 €, wettbewerbsorientiert 1.250 €, nachfrageorientiert 1.150 €. Welchen Preis schlagen Sie vor?', antwort: ['Die Kalkulation liefert die Untergrenze, der Wettbewerb den Rahmen, der Preistest die Zahlungsbereitschaft.', 'Ein Preis zwischen 1.150 € und 1.250 € ist gut begründbar, z. B. 1.150 € (höchster Gewinn laut Preistest).', 'Wichtig ist die Begründung: Liegt der Preis unter 1.287,84 €, wird der geplante Gewinnzuschlag nicht voll erreicht.'] }
      ]
    },
    {
      id: 'a-preisdiff', thema: 'preis', titel: 'Preisdifferenzierung für Behörden', quelle: 'LS 09 · Original', kontext: 'Gewinnvergleich',
      einleitung: 'Senkt ManzMobilia den Preis für Städte und Gemeinden von 540 € auf 460 €, können zusätzlich 2.000 Stück abgesetzt werden. Die Fixkosten bleiben bei 2.880.000 €.',
      angaben: [
        { titel: 'Material 1: Absatzprognose', kopf: ['Angabe', 'Wert'], zeilen: [['Verkaufspreis', '540,00 € je Stück'], ['Absatz', '12.000 Stück'], ['variable Kosten', '200,00 € je Stück'], ['Fixkosten', '2.880.000,00 €'], ['Behördenpreis', '460,00 € für zusätzlich 2.000 Stück']] }
      ],
      teile: [{ nr: '1', text: 'Wie lautet der Fachbegriff für die Idee von Herrn Eting?', punkte: 1 }, { nr: '2', text: 'Analysieren Sie die Auswirkung auf den Gewinn.', punkte: 8 }],
      schritte: [
        { teil: '1', typ: 'auswahl', label: 'Art', frage: 'Behörden erhalten einen Sonderpreis. Welche Art der Preisdifferenzierung ist das?', optionen: ['räumlich', 'zeitlich', 'personell', 'mengenmäßig'], richtig: 2, warum: 'Eine bestimmte Käufergruppe bekommt einen Sonderpreis.' },
        { teil: '2', label: 'Gewinn ohne', frage: 'Berechnen Sie den Gewinn ohne Preisdifferenzierung.', muster: '540 € × 12.000 Stück − (2.880.000 € + 200 € × 12.000 Stück)', ergebnis: 1200000, einheit: '€', tipp: 'Gewinn = Preis × Absatz − (Fixkosten + kv × Absatz)' },
        { teil: '2', label: 'Umsatz mit', frage: 'Berechnen Sie den Umsatz mit Preisdifferenzierung.', muster: '540 € × 12.000 Stück + 460 € × 2.000 Stück', ergebnis: 7400000, einheit: '€', tipp: 'Umsatz = Normalpreis × Normalabsatz + Sonderpreis × Zusatzabsatz' },
        { teil: '2', label: 'kv mit', frage: 'Berechnen Sie die variablen Kosten mit Preisdifferenzierung.', muster: '200 € (kv) × (12.000 + 2.000) Stück', ergebnis: 2800000, einheit: '€', tipp: 'variable Kosten = kv × gesamte Menge' },
        { teil: '2', label: 'K mit', frage: 'Berechnen Sie die Gesamtkosten mit Preisdifferenzierung.', muster: '2.880.000 € (Fixkosten) + 2.800.000 € (variable Kosten)', ergebnis: 5680000, einheit: '€', tipp: 'Gesamtkosten = Fixkosten + variable Kosten', warum: 'Die Fixkosten bleiben gleich, weil die Maschinen reichen.' },
        { teil: '2', label: 'Gewinn mit', frage: 'Berechnen Sie den Gewinn mit Preisdifferenzierung.', muster: '7.400.000 € (Umsatz) − 5.680.000 € (Gesamtkosten)', ergebnis: 1720000, einheit: '€', tipp: 'Gewinn = Umsatz − Gesamtkosten' },
        { teil: '2', label: 'Mehrgewinn', frage: 'Um wie viel Euro steigt der Gewinn?', muster: '1.720.000 € (mit) − 1.200.000 € (ohne)', ergebnis: 520000, einheit: '€', tipp: 'Mehrgewinn = Gewinn mit − Gewinn ohne', warum: 'Kurzweg: 2.000 Stück × (460 € − 200 €) Deckungsbeitrag = 520.000 €.' },
        { teil: '2', typ: 'text', frage: 'Begründen Sie das Ergebnis in einem Satz.', antwort: ['Jedes zusätzliche Stück bringt 260 € Deckungsbeitrag (460 € − 200 €), weil die Fixkosten schon gedeckt sind. Deshalb steigt der Gewinn um 520.000 €.'] }
      ]
    },
    {
      id: 'a-kalk-uebung', thema: 'preis', titel: 'Kalkulation Bürostuhl Comfort', quelle: 'Neue Übungsaufgabe', kontext: 'Angebotskalkulation',
      angaben: [
        { titel: 'Kosten je Stück', kopf: ['Position', 'Wert'], zeilen: [['Materialeinzelkosten', '120,00 €'], ['MGK', '25 %'], ['Fertigungslöhne', '40,00 €'], ['FGK', '150 %'], ['VwVtGK', '15 %'], ['Gewinn', '10 %'], ['Kundenskonto', '2 %'], ['Kundenrabatt', '15 %'], ['USt', '19 %']] }
      ],
      teile: [{ nr: '1', text: 'Ermitteln Sie den Listenverkaufspreis brutto.', punkte: 12 }],
      schritte: [
        { teil: '1', label: 'MK', frage: 'Berechnen Sie die Materialkosten.', muster: '120 € (MEK) + 120 € × 25 % (MGK)', ergebnis: 150, einheit: '€', tipp: 'Materialkosten = MEK + MEK × MGK-Satz' },
        { teil: '1', label: 'FK', frage: 'Berechnen Sie die Fertigungskosten.', muster: '40 € (FL) + 40 € × 150 % (FGK)', ergebnis: 100, einheit: '€', tipp: 'Fertigungskosten = FL + FL × FGK-Satz', warum: 'Zuschläge über 100 % sind bei Fertigungsgemeinkosten normal.' },
        { teil: '1', label: 'HK', frage: 'Berechnen Sie die Herstellkosten.', muster: '150 € (MK) + 100 € (FK)', ergebnis: 250, einheit: '€', tipp: 'HK = Materialkosten + Fertigungskosten' },
        { teil: '1', label: 'SK', frage: 'Berechnen Sie die Selbstkosten.', muster: '250 € (HK) + 250 € × 15 % (VwVtGK)', ergebnis: 287.5, einheit: '€', tipp: 'SK = HK + HK × VwVtGK-Satz' },
        { teil: '1', label: 'BVP', frage: 'Berechnen Sie den Barverkaufspreis.', muster: '287,50 € (SK) + 287,50 € × 10 % (Gewinn)', ergebnis: 316.25, einheit: '€', tipp: 'BVP = SK + SK × Gewinnsatz' },
        { teil: '1', label: 'ZVP', frage: 'Berechnen Sie den Zielverkaufspreis (2 % Skonto).', muster: '316,25 € (BVP) : 98 × 100', ergebnis: 322.70, einheit: '€', tipp: 'ZVP = BVP : (100 − Skonto) × 100' },
        { teil: '1', label: 'LVP netto', frage: 'Berechnen Sie den Listenverkaufspreis netto (15 % Rabatt).', muster: '322,70 € (ZVP) : 85 × 100', ergebnis: 379.65, einheit: '€', tipp: 'LVP = ZVP : (100 − Rabatt) × 100' },
        { teil: '1', label: 'LVP brutto', frage: 'Berechnen Sie den Listenverkaufspreis brutto.', muster: '379,65 € (LVP netto) × 119 %', ergebnis: 451.78, einheit: '€', tipp: 'LVP brutto = LVP netto × 1,19' }
      ]
    },
    {
      id: 'a-diff-uebung', thema: 'preis', titel: 'Sonderpreis für Schulen', quelle: 'Neue Übungsaufgabe', kontext: 'Preisdifferenzierung',
      einleitung: 'Ein Hersteller von Schülertischen verkauft 6.000 Stück zu 400 €. Fixkosten 900.000 €, kv 150 €. Schulen sollen 280 € zahlen, dadurch kommen 1.500 Stück dazu.',
      teile: [{ nr: '1', text: 'Prüfen Sie, ob sich der Sonderpreis lohnt.', punkte: 6 }],
      schritte: [
        { teil: '1', label: 'Gewinn ohne', frage: 'Berechnen Sie den Gewinn ohne Sonderpreis.', muster: '400 € × 6.000 Stück − (900.000 € + 150 € × 6.000 Stück)', ergebnis: 600000, einheit: '€', tipp: 'Gewinn = Preis × Absatz − (Fixkosten + kv × Absatz)' },
        { teil: '1', label: 'Umsatz mit', frage: 'Berechnen Sie den Umsatz mit Sonderpreis.', muster: '400 € × 6.000 Stück + 280 € × 1.500 Stück', ergebnis: 2820000, einheit: '€', tipp: 'Normalpreis × Normalabsatz + Sonderpreis × Zusatzabsatz' },
        { teil: '1', label: 'K mit', frage: 'Berechnen Sie die Gesamtkosten mit Sonderpreis.', muster: '900.000 € (Fixkosten) + 150 € × 7.500 Stück', ergebnis: 2025000, einheit: '€', tipp: 'Fixkosten + kv × gesamte Menge' },
        { teil: '1', label: 'Gewinn mit', frage: 'Berechnen Sie den Gewinn mit Sonderpreis.', muster: '2.820.000 € (Umsatz) − 2.025.000 € (Gesamtkosten)', ergebnis: 795000, einheit: '€', tipp: 'Gewinn = Umsatz − Gesamtkosten' },
        { teil: '1', label: 'Mehrgewinn', frage: 'Um wie viel steigt der Gewinn?', muster: '1.500 Stück × (280 € − 150 €)', ergebnis: 195000, einheit: '€', tipp: 'Zusatzmenge × (Sonderpreis − kv)' },
        { teil: '1', typ: 'auswahl', label: 'Voraussetzung', frage: 'Was muss gelten, damit der Sonderpreis funktioniert?', optionen: ['Die Schulen dürfen die Tische nicht an Privatkunden weiterverkaufen.', 'Der Sonderpreis muss über 400 € liegen.', 'Die Fixkosten müssen steigen.', 'Alle Kunden zahlen 280 €.'], richtig: 0, warum: 'Die Teilmärkte müssen sich trennen lassen.' }
      ]
    },

    // ================= KOMMUNIKATION =================
    {
      id: 'a-werbeerfolg', thema: 'kommunikation', titel: 'Werbeerfolg Bürostühle', quelle: 'LS 10 · Original', kontext: 'Ökonomischer Werbeerfolg',
      einleitung: 'Für die Bürostühle wurde eine Werbekampagne in Fachzeitschriften geschaltet. Kosten: 820.000 €.',
      angaben: [{ titel: 'Zahlen aus dem Controlling', kopf: ['Jahr', 'Absatz', 'Preis je Stück'], zeilen: [['Geschäftsjahr 01', '145.000 Stück', '820,00 €'], ['Geschäftsjahr 02', '150.000 Stück', '830,00 €']] }],
      teile: [{ nr: '8.1', text: 'Beurteilen Sie den ökonomischen Erfolg der Werbekampagne.', punkte: 6 }, { nr: '8.2', text: 'Warum ist die Kontrolle des Werbeerfolgs schwierig?', punkte: 3 }],
      schritte: [
        { teil: '8.1', label: 'Umsatz 01', frage: 'Berechnen Sie den Umsatz im Jahr 01.', muster: '145.000 Stück × 820 €', ergebnis: 118900000, einheit: '€', tipp: 'Umsatz = Absatz × Preis' },
        { teil: '8.1', label: 'Umsatz 02', frage: 'Berechnen Sie den Umsatz im Jahr 02.', muster: '150.000 Stück × 830 €', ergebnis: 124500000, einheit: '€', tipp: 'Umsatz = Absatz × Preis' },
        { teil: '8.1', label: 'Mehrumsatz', frage: 'Wie hoch ist der Umsatzzuwachs?', muster: '124.500.000 € (Jahr 02) − 118.900.000 € (Jahr 01)', ergebnis: 5600000, einheit: '€', tipp: 'Mehrumsatz = Umsatz nachher − Umsatz vorher' },
        { teil: '8.1', label: 'Werberendite', frage: 'Berechnen Sie die Werberendite.', muster: '5.600.000 € (Mehrumsatz) : 820.000 € (Werbekosten) × 100', ergebnis: 682.93, einheit: '%', tipp: 'Werberendite = Mehrumsatz : Werbekosten × 100', warum: 'Jeder Werbe-Euro brachte rund 6,83 € Mehrumsatz.' },
        { teil: '8.1', label: 'Überschuss', frage: 'Um wie viel übersteigt der Mehrumsatz die Werbekosten?', muster: '5.600.000 € (Mehrumsatz) − 820.000 € (Werbekosten)', ergebnis: 4780000, einheit: '€', tipp: 'Mehrumsatz − Werbekosten' },
        { teil: '8.2', typ: 'text', frage: 'Erläutern Sie, warum die Kontrolle des Werbeerfolgs in der Praxis schwierig ist.', antwort: ['Andere Maßnahmen wirken mit, z. B. Produktverbesserungen oder Verkaufsförderung.', 'Die Maßnahmen der Wettbewerber beeinflussen den eigenen Umsatz.', 'Auch die Konjunktur kann den Umsatz steigern oder senken.'] }
      ]
    },
    {
      id: 'a-tkp', thema: 'kommunikation', titel: 'Mediaplan: Tausend-Kontakt-Preis', quelle: 'LS 10 · Material 1', kontext: 'Zeitschriften vergleichen',
      einleitung: 'Werbeetat 100.000 € (± 10 %). Zielgruppe sind Entscheidungsträger (ET). Preise sind netto, die USt bleibt außen vor.',
      angaben: [
        { titel: 'Angebot Centrum Media Group', kopf: ['Titel', 'Erscheinen', 'davon ET', 'Preis je Anzeige'],
          zeilen: [['Der Spiegel', '1 × pro Woche', '400.000', '20.000 €'], ['Stern', '1 × pro Woche', '200.000', '22.000 €'], ['FAZ', 'täglich', '100.000', '10.000 €'], ['Wirtschaftswoche', '1 × pro Woche', '200.000', '12.000 €'], ['manager magazin', '1 × im Monat', '150.000', '12.000 €']],
          fuss: 'Produktionskosten einer Anzeige einmalig 5.000 €. Alle Preise zuzüglich 19 % USt.' }
      ],
      teile: [{ nr: '3', text: 'Vergleichen Sie die Zeitschriften und treffen Sie eine Medienauswahl im Rahmen des Etats.', punkte: 8 }],
      schritte: [
        { teil: '3', label: 'TKP Spiegel', wozu: 'Der Tausend-Kontakt-Preis macht Medien mit verschiedener Reichweite vergleichbar.', frage: 'Berechnen Sie den TKP des Spiegel bezogen auf die Entscheidungsträger.', muster: '20.000 € (Preis) : 400.000 (ET) × 1.000', ergebnis: 50, einheit: '€', tipp: 'TKP = Kosten : Reichweite × 1.000' },
        { teil: '3', label: 'TKP Stern', frage: 'Berechnen Sie den TKP des Stern.', muster: '22.000 € (Preis) : 200.000 (ET) × 1.000', ergebnis: 110, einheit: '€', tipp: 'TKP = Kosten : Reichweite × 1.000' },
        { teil: '3', label: 'TKP WiWo', frage: 'Berechnen Sie den TKP der Wirtschaftswoche.', muster: '12.000 € (Preis) : 200.000 (ET) × 1.000', ergebnis: 60, einheit: '€', tipp: 'TKP = Kosten : Reichweite × 1.000' },
        { teil: '3', label: 'TKP mm', frage: 'Berechnen Sie den TKP des manager magazins.', muster: '12.000 € (Preis) : 150.000 (ET) × 1.000', ergebnis: 80, einheit: '€', tipp: 'TKP = Kosten : Reichweite × 1.000', warum: 'FAZ: 10.000 : 100.000 × 1.000 = 100 €.' },
        { teil: '3', typ: 'auswahl', label: 'Günstigster', frage: 'Welche Zeitschrift erreicht die Entscheidungsträger am günstigsten?', optionen: ['Stern', 'FAZ', 'Der Spiegel', 'manager magazin'], richtig: 2, warum: 'Der Spiegel hat mit 50 € den niedrigsten TKP.' },
        { teil: '3', label: 'Kosten Plan', frage: 'Kosten für 4 Anzeigen im Spiegel plus einmalige Produktion?', muster: '4 (Anzeigen) × 20.000 € + 5.000 € (Produktion)', ergebnis: 85000, einheit: '€', tipp: 'Anzahl × Preis + Produktionskosten', warum: 'Es bleiben 15.000 €, z. B. für eine Anzeige in der Wirtschaftswoche (dann 97.000 €).' },
        { teil: '3', typ: 'auswahl', label: 'Brutto/Netto', frage: 'Warum rechnet man im Mediaplan ohne Umsatzsteuer?', optionen: ['Weil Werbung steuerfrei ist.', 'Weil die USt ein durchlaufender Posten ist (Vorsteuer).', 'Weil der Etat brutto gilt.', 'Weil Zeitschriften keine USt berechnen.'], richtig: 1, warum: 'Das Unternehmen bekommt die Vorsteuer vom Finanzamt zurück.' }
      ]
    },
    {
      id: 'a-kommunikation-zuordnen', thema: 'kommunikation', titel: 'Werbung, Promotion oder PR?', quelle: 'LS 10–12 · Original', kontext: 'Fälle zuordnen',
      teile: [{ nr: '9', text: 'Entscheiden Sie, worum es sich in den Fällen handelt.', punkte: 4 }, { nr: '11', text: 'Arten der Verkaufsförderung', punkte: 3 }, { nr: '12', text: 'Öffentlichkeitsarbeit', punkte: 4 }],
      schritte: [
        { teil: '9', typ: 'auswahl', label: 'Milch', frage: 'Der Milchindustrieverband startet die Kampagne „Milch – von Natur aus wertvoll!“.', optionen: ['Einzelwerbung', 'Sammelwerbung', 'Verbundwerbung', 'Gemeinschaftswerbung'], richtig: 3, warum: 'Ein ganzer Wirtschaftszweig wirbt ohne Namen.' },
        { teil: '9', typ: 'auswahl', label: 'ManzMobilia', frage: 'ManzMobilia startet allein die Kampagne „ergonomisches Arbeiten“.', optionen: ['Einzelwerbung', 'Sammelwerbung', 'Verbundwerbung', 'Gemeinschaftswerbung'], richtig: 0, warum: 'Ein Unternehmen wirbt für sich.' },
        { teil: '9', typ: 'auswahl', label: 'ASUS/Canon', frage: 'PC-Hersteller ASUS wirbt zusammen mit Druckerhersteller Canon.', optionen: ['Einzelwerbung', 'Sammelwerbung', 'Verbundwerbung', 'Gemeinschaftswerbung'], richtig: 2, warum: 'Produkte, die sich ergänzen, werben gemeinsam mit Namen.' },
        { teil: '9', typ: 'auswahl', label: 'Kraichgau', frage: 'Der Kraichgau-Tourismus e. V. bietet eine Broschüre mit familienfreundlichen Hotels der Region an.', optionen: ['Einzelwerbung', 'Sammelwerbung', 'Verbundwerbung', 'Gemeinschaftswerbung'], richtig: 1, warum: 'Mehrere Unternehmen der gleichen Art, namentlich genannt.' },
        { teil: '11', typ: 'auswahl', label: 'Promotion 1', frage: 'Ein Hersteller schult die Verkäufer im Fachhandel und stellt Displaymaterial bereit.', optionen: ['Verbraucherpromotion', 'Handelspromotion', 'Verkäuferpromotion', 'Öffentlichkeitsarbeit'], richtig: 1, warum: 'Die Maßnahme richtet sich an den Handel.' },
        { teil: '11', typ: 'auswahl', label: 'Promotion 2', frage: 'Kunden bekommen beim Kauf eines Schreibtischs ein Kombipack mit Stuhl und nehmen an einem Gewinnspiel teil.', optionen: ['Verbraucherpromotion', 'Handelspromotion', 'Verkäuferpromotion', 'Sponsoring'], richtig: 0, warum: 'Richtet sich direkt an den Endkunden.' },
        { teil: '11', typ: 'auswahl', label: 'Promotion 3', frage: 'Die besten eigenen Außendienstler bekommen einen Geschäftswagen.', optionen: ['Verbraucherpromotion', 'Handelspromotion', 'Verkäuferpromotion', 'Gemeinschaftswerbung'], richtig: 2, warum: 'Anreiz für das eigene Verkaufspersonal.' },
        { teil: '12', typ: 'auswahl', label: 'PR-Ziel', frage: 'Was ist das Ziel der Öffentlichkeitsarbeit?', optionen: ['kurzfristig den Absatz steigern', 'ein positives Unternehmensimage aufbauen und pflegen', 'Händler zum Kauf bewegen', 'Preise durchsetzen'], richtig: 1, warum: 'PR wirbt für das Unternehmen, nicht für ein einzelnes Produkt.' },
        { teil: '12', typ: 'text', frage: 'Was gehört in eine Pressemitteilung nach dem Störfall in der Lackieranlage?', antwort: ['Bedauern ausdrücken und den Vorfall sachlich schildern.', 'Verantwortung übernehmen, Zusammenarbeit mit Behörden.', 'Sofortmaßnahmen: Anlage abgeschaltet, Gutachter beauftragt, Ergebnisse veröffentlichen.', 'Vorbeugung: Investition in Technik, mehr Wartung, Schulungen. Entschuldigung bei den Bürgern.'] },
        { teil: '12', typ: 'text', frage: 'Nennen Sie die Adressaten der Öffentlichkeitsarbeit.', antwort: ['Endverbraucher und -verwender', 'Groß- und Einzelhandel', 'Kapitalgeber', 'Mitarbeiter', 'staatliche und private Institutionen'] }
      ]
    },
    {
      id: 'a-werbe-uebung', thema: 'kommunikation', titel: 'Werbeerfolg Schreibtisch Standard', quelle: 'Neue Übungsaufgabe', kontext: 'Werberendite und Werbekostenanteil',
      angaben: [{ titel: 'Zahlen', kopf: ['Jahr', 'Absatz', 'Preis'], zeilen: [['Jahr 01 (ohne Kampagne)', '9.000 Stück', '540 €'], ['Jahr 02 (mit Kampagne)', '10.200 Stück', '540 €']], fuss: 'Kosten der Kampagne: 400.000 €' }],
      teile: [{ nr: '1', text: 'Beurteilen Sie den Werbeerfolg rechnerisch.', punkte: 6 }],
      schritte: [
        { teil: '1', label: 'Mehrumsatz', frage: 'Berechnen Sie den Mehrumsatz in einer Rechnung.', muster: '(10.200 Stück − 9.000 Stück) × 540 €', ergebnis: 648000, einheit: '€', tipp: 'Mehrabsatz × Preis (Preis gleich geblieben)' },
        { teil: '1', label: 'Werberendite', frage: 'Berechnen Sie die Werberendite.', muster: '648.000 € (Mehrumsatz) : 400.000 € (Werbekosten) × 100', ergebnis: 162, einheit: '%', tipp: 'Werberendite = Mehrumsatz : Werbekosten × 100' },
        { teil: '1', label: 'Umsatz 02', frage: 'Berechnen Sie den Umsatz im Jahr 02.', muster: '10.200 Stück × 540 €', ergebnis: 5508000, einheit: '€', tipp: 'Umsatz = Absatz × Preis' },
        { teil: '1', label: 'Werbekostenanteil', frage: 'Berechnen Sie den Werbekostenanteil am Umsatz im Jahr 02.', muster: '400.000 € (Werbekosten) : 5.508.000 € (Umsatz) × 100', ergebnis: 7.26, einheit: '%', tipp: 'Werbekostenanteil = Werbekosten : Umsatz × 100' },
        { teil: '1', typ: 'auswahl', label: 'Urteil', frage: 'Wie ist der Erfolg zu beurteilen?', optionen: ['Erfolgreich: Jeder Werbe-Euro brachte 1,62 € Mehrumsatz.', 'Misserfolg, weil die Werbekosten über dem Mehrumsatz liegen.', 'Nicht beurteilbar, weil der Preis gleich blieb.', 'Erfolgreich, weil der Umsatz über 5 Mio. € liegt.'], richtig: 0, warum: 'Achtung: Mehrumsatz ist noch kein Mehrgewinn. Für ein vollständiges Urteil bräuchte man den Deckungsbeitrag.' }
      ]
    },

    // ================= DISTRIBUTION =================
    {
      id: 'a-reisender', thema: 'distribution', titel: 'Reisender oder Handelsvertreter', quelle: 'LS 14 · Original', kontext: 'Kritischer Umsatz',
      einleitung: 'Der Seminarbedarf soll in 8 Verkaufsgebieten verkauft werden. Erwarteter Umsatz: 100.000 € je Monat und Absatzorgan.',
      angaben: [
        { titel: 'Material 2: Daten zu den Absatzorganen', kopf: ['Absatzorgan', 'Vergütung'], zeilen: [['Reisender', '2.400 € Fixum je Monat + 1 % Provision'], ['Handelsvertreter', '3 % Provision vom Umsatz']] },
        { titel: 'Punktwertverfahren (Lösungsblatt)', kopf: ['Kriterium', 'Gewichtung', 'Reisender', 'Handelsvertreter'],
          zeilen: [['Motivation', '40', '4', '5'], ['Kontrolle des Absatzorgans', '20', '5', '3'], ['Produkt- und Firmenkenntnisse', '20', '5', '4'], ['Übersicht über den Büroartikelmarkt', '10', '4', '5'], ['Pflege des Kundenstamms', '10', '4', '5']] }
      ],
      teile: [{ nr: '2', text: 'Welches Absatzorgan ist beim prognostizierten Umsatz günstiger?', punkte: 4 }, { nr: '5', text: 'Berechnen Sie den kritischen Umsatz.', punkte: 2 }, { nr: '7', text: 'Entscheidung bei 110.000 €, Tendenz steigend.', punkte: 4 }, { nr: '8', text: 'Qualitative Analyse (Punktwertverfahren).', punkte: 4 }, { nr: '10', text: 'Warum schreiben Reisende Besuchsberichte?', punkte: 2 }],
      schritte: [
        { teil: '2', label: 'K Reisender', frage: 'Was kostet der Reisende bei 100.000 € Umsatz im Monat?', muster: '2.400 € (Fixum) + 100.000 € × 1 % (Provision)', ergebnis: 3400, einheit: '€', tipp: 'K(R) = Fixum + Provisionssatz × Umsatz' },
        { teil: '2', label: 'K HV', frage: 'Was kostet der Handelsvertreter bei 100.000 € Umsatz?', muster: '100.000 € × 3 % (Provision)', ergebnis: 3000, einheit: '€', tipp: 'K(HV) = Provisionssatz × Umsatz' },
        { teil: '2', typ: 'auswahl', label: 'günstiger', frage: 'Welches Absatzorgan ist bei 100.000 € günstiger?', optionen: ['Reisender', 'Handelsvertreter', 'beide gleich'], richtig: 1, warum: '3.000 € sind 400 € weniger als 3.400 €.' },
        { teil: '5', label: 'krit. Umsatz', wozu: 'Gleichsetzen: 2.400 + 0,01x = 0,03x, also 2.400 = 0,02x.', frage: 'Berechnen Sie den kritischen Umsatz.', muster: '2.400 € (Fixum) : (3 % − 1 %)', platzhalter: '2.400 : 0,02', ergebnis: 120000, einheit: '€', tipp: 'kritischer Umsatz = Fixum : (Provision HV − Provision Reisender)', warum: 'Bei 120.000 € kosten beide 3.600 €. Darüber ist der Reisende günstiger.' },
        { teil: '7', label: 'K R 110.000', frage: 'Was kostet der Reisende bei 110.000 €?', muster: '2.400 € (Fixum) + 110.000 € × 1 %', ergebnis: 3500, einheit: '€', tipp: 'K(R) = Fixum + 1 % × Umsatz' },
        { teil: '7', label: 'K HV 110.000', frage: 'Was kostet der Handelsvertreter bei 110.000 €?', muster: '110.000 € × 3 %', ergebnis: 3300, einheit: '€', tipp: 'K(HV) = 3 % × Umsatz' },
        { teil: '7', typ: 'auswahl', label: 'Entscheidung', frage: 'Die Prognose von 110.000 € ist relativ sicher und steigt. Wie entscheiden Sie?', optionen: ['Handelsvertreter, weil er heute 200 € günstiger ist.', 'Reisender, weil der kritische Umsatz von 120.000 € bald überschritten wird.', 'Beide gleichzeitig.', 'Keinen von beiden.'], richtig: 1, warum: 'Bei steigenden Umsätzen ist der Reisende mit seinen Fixkosten langfristig günstiger.' },
        { teil: '8', label: 'Punkte R', frage: 'Berechnen Sie die gewichteten Punkte des Reisenden.', muster: '40 × 4 + 20 × 5 + 20 × 5 + 10 × 4 + 10 × 4', ergebnis: 440, nk: 0, tipp: 'Summe aus Gewichtung × Punkte' },
        { teil: '8', label: 'Punkte HV', frage: 'Berechnen Sie die gewichteten Punkte des Handelsvertreters.', muster: '40 × 5 + 20 × 3 + 20 × 4 + 10 × 5 + 10 × 5', ergebnis: 440, nk: 0, tipp: 'Summe aus Gewichtung × Punkte', warum: 'Pattsituation. Hinweis: Im Lösungsblatt steht beim HV „Übersicht 4 Punkte“, gewichtet aber 50; mit 5 Punkten ergibt sich 440.' },
        { teil: '10', typ: 'text', frage: 'Führen Sie zwei Gründe an, warum Reisende Besuchsberichte schreiben.', antwort: ['Kontrollinstrument für den Arbeitgeber.', 'Wichtige Marktinformationen: Kundenwünsche, Beanstandungen, Verhalten der Wettbewerber.'] }
      ]
    },
    {
      id: 'a-absatzwege', thema: 'distribution', titel: 'Absatzwege und E-Commerce', quelle: 'LS 13, LS 15 · Original', kontext: 'Zuordnen und Prozentrechnung',
      angaben: [{ titel: 'Umsatz im Online-Handel (B2C)', kopf: ['Jahr', 'Umsatz'], zeilen: [['2010', '20,2 Mrd. €'], ['2024', '88,8 Mrd. €']] }],
      teile: [{ nr: '13', text: 'Absatzwege und Absatzorgane', punkte: 4 }, { nr: '15', text: 'Ermitteln Sie, um wie viel Prozent der Umsatz von 2010 bis 2024 gestiegen ist.', punkte: 3 }],
      schritte: [
        { teil: '13', typ: 'auswahl', label: 'ManzMobilia', frage: 'ManzMobilia verkauft über Innendienst und Reisende an Geschäftskunden, ohne Handel. Welcher Absatzweg?', optionen: ['direkter Absatz', 'indirekter Absatz', 'Franchising', 'Kommissionsgeschäft'], richtig: 0, warum: 'Kein Handel dazwischen = direkt.' },
        { teil: '13', typ: 'auswahl', label: 'Investitionsgut', frage: 'Warum ist im Investitionsgüterbereich der direkte Absatz üblich?', optionen: ['Viele Kunden kaufen kleine Mengen.', 'Wenige Kunden, hohe Auftragswerte, erklärungsbedürftige Produkte.', 'Der Einzelhandel ist dort besonders stark.', 'Der Staat schreibt es vor.'], richtig: 1, warum: 'Beratung, Planung, Montage und Service lassen sich kaum an den Handel abgeben.' },
        { teil: '13', typ: 'auswahl', label: 'Kommissionär', frage: 'Wer handelt im eigenen Namen, aber auf fremde Rechnung?', optionen: ['Reisender', 'Handelsvertreter', 'Kommissionär', 'Handelsmakler'], richtig: 2, warum: 'Unverkaufte Ware geht an den Kommittenten zurück.' },
        { teil: '13', typ: 'auswahl', label: 'Fremd', frage: 'Welches Absatzorgan ist unternehmensfremd?', optionen: ['Verkaufsniederlassung', 'Reisender', 'Handelsvertreter', 'Verkaufsabteilung'], richtig: 2, warum: 'Der Handelsvertreter ist selbstständiger Kaufmann.' },
        { teil: '15', label: 'Endwert %', frage: 'Wie viel Prozent sind 88,8 Mrd. € von 20,2 Mrd. €?', muster: '88,8 Mrd. € (2024) : 20,2 Mrd. € (2010) × 100', ergebnis: 439.6, nk: 1, tol: 0.06, einheit: '%', tipp: 'Dreisatz: 20,2 = 100 %, 88,8 = x %' },
        { teil: '15', label: 'Anstieg', frage: 'Um wie viel Prozent ist der Umsatz gestiegen?', muster: '88,8 Mrd. € : 20,2 Mrd. € × 100 − 100', ergebnis: 339.6, nk: 1, tol: 0.06, einheit: '%', tipp: 'Anstieg = Endwert in % − 100', warum: 'Gefragt ist der Anstieg. Die 100 % des Ausgangsjahres werden abgezogen.' },
        { teil: '15', typ: 'text', frage: 'Nennen Sie je drei Vorteile eines Onlineshops für ManzMobilia und für die Kunden.', antwort: ['Unternehmen: höhere Bekanntheit, größerer Kundenkreis, modernes Image (auch: kürzere Lieferzeit, papierlos, schnelle Reaktion).', 'Kunden: 24 Stunden bestellen, umfassend informieren, Lieferbarkeit sehen (auch: bequem zahlen, schneller als per Post).'] }
      ]
    },
    {
      id: 'a-reisender-uebung', thema: 'distribution', titel: 'Außendienst für Bürostühle', quelle: 'Neue Übungsaufgabe', kontext: 'Kritischer Umsatz',
      einleitung: 'Ein Reisender kostet 3.000 € Fixum und 2 % Provision. Ein Handelsvertreter verlangt 5 % Provision.',
      teile: [{ nr: '1', text: 'Vergleichen Sie die Kosten und ermitteln Sie den kritischen Umsatz.', punkte: 6 }],
      schritte: [
        { teil: '1', label: 'krit. Umsatz', frage: 'Berechnen Sie den kritischen Umsatz.', muster: '3.000 € (Fixum) : (5 % − 2 %)', ergebnis: 100000, einheit: '€', tipp: 'kritischer Umsatz = Fixum : (Provision HV − Provision Reisender)' },
        { teil: '1', label: 'R 80.000', frage: 'Kosten des Reisenden bei 80.000 € Umsatz?', muster: '3.000 € + 80.000 € × 2 %', ergebnis: 4600, einheit: '€', tipp: 'Fixum + Provisionssatz × Umsatz' },
        { teil: '1', label: 'HV 80.000', frage: 'Kosten des Handelsvertreters bei 80.000 €?', muster: '80.000 € × 5 %', ergebnis: 4000, einheit: '€', tipp: 'Provisionssatz × Umsatz' },
        { teil: '1', label: 'R 150.000', frage: 'Kosten des Reisenden bei 150.000 €?', muster: '3.000 € + 150.000 € × 2 %', ergebnis: 6000, einheit: '€', tipp: 'Fixum + Provisionssatz × Umsatz' },
        { teil: '1', label: 'HV 150.000', frage: 'Kosten des Handelsvertreters bei 150.000 €?', muster: '150.000 € × 5 %', ergebnis: 7500, einheit: '€', tipp: 'Provisionssatz × Umsatz' },
        { teil: '1', typ: 'auswahl', label: 'Merksatz', frage: 'Welcher Merksatz stimmt?', optionen: ['Bei hohen Umsätzen ist der Handelsvertreter günstiger.', 'Bei hohen Umsätzen ist der Reisende günstiger.', 'Der Reisende ist immer teurer.', 'Die Kosten hängen nicht vom Umsatz ab.'], richtig: 1, warum: 'Die Fixkosten des Reisenden verteilen sich auf mehr Umsatz, die Provision des HV wächst voll mit.' }
      ]
    },

    // ================= AUSSENHANDEL =================
    {
      id: 'a-cif-ddp', thema: 'aussenhandel', titel: 'CIF Veracruz oder DDP Mexiko-City', quelle: 'LS 16 · Original', kontext: 'Gonzalez Ltd.',
      einleitung: 'Das Angebot an die Gonzalez Ltd. wurde auf Basis CIF Veracruz kalkuliert. Der Kunde will zum gleichen Preis DDP Mexiko-City. Umrechnung der Peso-Kosten mit 1 € = 15,37591 MXN.',
      angaben: [
        { titel: 'Material 2: Transportkosten', kopf: ['Position', 'Betrag'],
          zeilen: [['Anfuhrkosten Bruchsal–Rotterdam (Lkw)', '520,00 €'], ['Verladekosten Lkw/Schiff', '90,00 €'], ['Ausfuhrzoll', 'keine'], ['Frachtkosten Seetransport', '3.800,00 €'],
            ['Versicherung Rotterdam–Veracruz', '1.500,00 €'], ['Entladekosten Schiff/Lkw', '2.370,00 MXN'], ['Einfuhrzoll', '60.110,596 MXN'], ['Zufuhrkosten Lkw nach Mexiko-City', '7.902,00 MXN'],
            ['Versicherung Bruchsal–Rotterdam (optional)', '250,00 €'], ['Versicherung Veracruz–Mexiko-City (optional)', '3.160,00 MXN']] }
      ],
      teile: [{ nr: '4.1', text: 'Prüfen Sie die Konsequenzen, wenn ManzMobilia auf den Wunsch eingeht. Führen Sie genaue Berechnungen durch.', punkte: 10 }, { nr: '4.2', text: 'Begründen Sie, ob ManzMobilia auf die Forderung eingehen sollte.', punkte: 2 }, { nr: '7', text: 'Die Ware wird bei der Entladung in Veracruz beschädigt.', punkte: 2 }],
      schritte: [
        { teil: '4.1', label: 'Entladung €', frage: 'Rechnen Sie die Entladekosten in Euro um.', muster: '2.370 MXN (Entladekosten) : 15,37591 (Kurs)', ergebnis: 154.14, einheit: '€', tipp: 'Euro = Betrag in MXN : Kurs', warum: 'Mengennotierung: Der Kurs sagt, wie viele Pesos 1 € kostet.' },
        { teil: '4.1', label: 'Einfuhrzoll €', frage: 'Rechnen Sie den Einfuhrzoll in Euro um.', muster: '60.110,596 MXN (Einfuhrzoll) : 15,37591 (Kurs)', ergebnis: 3909.40, einheit: '€', tipp: 'Euro = Betrag in MXN : Kurs' },
        { teil: '4.1', label: 'Zufuhr €', frage: 'Rechnen Sie die Zufuhrkosten in Euro um.', muster: '7.902 MXN (Zufuhr) : 15,37591 (Kurs)', ergebnis: 513.92, einheit: '€', tipp: 'Euro = Betrag in MXN : Kurs' },
        { teil: '4.1', label: 'Kosten CIF', wozu: 'Bei CIF zahlt der Verkäufer bis zum Bestimmungshafen inklusive Entladung und Versicherung (laut Arbeitsblatt).', frage: 'Berechnen Sie die Kosten der ManzMobilia bei CIF Veracruz.', muster: '520 € (Anfuhr) + 90 € (Verladung) + 3.800 € (Seefracht) + 1.500 € (Versicherung) + 154,14 € (Entladung)', ergebnis: 6064.14, einheit: '€', tipp: 'Alle Positionen bis zum Bestimmungshafen addieren' },
        { teil: '4.1', label: 'Kosten DDP', frage: 'Berechnen Sie die Kosten bei DDP Mexiko-City.', muster: '6.064,14 € (CIF) + 3.909,40 € (Einfuhrzoll) + 513,92 € (Zufuhr)', ergebnis: 10487.46, einheit: '€', tipp: 'CIF-Kosten + Einfuhrzoll + Zufuhr bis zum Kunden' },
        { teil: '4.1', label: 'Mehrkosten', frage: 'Wie hoch wären die Mehrkosten für ManzMobilia?', muster: '10.487,46 € (DDP) − 6.064,14 € (CIF)', ergebnis: 4423.32, einheit: '€', tipp: 'Mehrkosten = DDP − CIF', warum: 'Mit den optionalen Versicherungen (250 € + 205,52 €) wären es 10.942,98 € statt 10.487,46 €.' },
        { teil: '4.2', typ: 'text', frage: 'Sollte ManzMobilia auf die Forderung eingehen?', antwort: ['Dagegen: rund 4.423 € höhere Kosten, die den Gewinn schmälern; zusätzlich Einfuhrabwicklung und Risiko bis Mexiko-City.', 'Dafür: Großauftrag und neue Geschäftsbeziehung in Mexiko sichern.', 'Ergebnis mit Begründung, z. B. nur gegen Preisaufschlag.'] },
        { teil: '7', typ: 'auswahl', label: 'Schaden CIF', frage: 'Bei CIF Veracruz wird die Ware bei der Entladung beschädigt. Wer trägt das Risiko?', optionen: ['ManzMobilia, ohne Versicherung', 'Gonzalez Ltd., aber die Versicherung von ManzMobilia übernimmt den Schaden', 'die Reederei allein', 'beide je zur Hälfte'], richtig: 1, warum: 'Die Gefahr ging an Bord auf den Käufer über. Der Verkäufer musste aber eine Transportversicherung abschließen.' },
        { teil: '7', typ: 'auswahl', label: 'Schaden DDP', frage: 'Und bei DDP Mexiko-City?', optionen: ['Gonzalez Ltd.', 'ManzMobilia, denn die Gefahr geht erst am Bestimmungsort über', 'die Bank', 'niemand'], richtig: 1, warum: 'Bei DDP trägt der Verkäufer die Gefahr bis Mexiko-City. Eine Versicherung ist nicht Pflicht.' }
      ]
    },
    {
      id: 'a-incoterms', thema: 'aussenhandel', titel: 'Kosten bei FOB, FAS und DPU', quelle: 'LS 16 · Original', kontext: 'Incoterms',
      angaben: [{ titel: 'Transportkette', kopf: ['Position', 'Betrag'], zeilen: [['Anfuhr Lkw', '520,00 €'], ['Verladung Lkw/Schiff', '90,00 €'], ['Seefracht', '3.800,00 €'], ['Entladung Veracruz', '154,14 €']] }],
      teile: [{ nr: '5', text: 'Ermitteln Sie die Kosten der ManzMobilia bei folgenden Incoterms.', punkte: 6 }, { nr: '3', text: 'Gefahrübergang und Versicherung', punkte: 3 }],
      schritte: [
        { teil: '5', label: 'FOB', frage: 'Kosten bei FOB Rotterdam?', muster: '520 € (Anfuhr) + 90 € (Verladung)', ergebnis: 610, einheit: '€', tipp: 'FOB: bis die Ware an Bord verladen ist' },
        { teil: '5', label: 'FAS', frage: 'Kosten bei FAS Rotterdam?', muster: '520 € (Anfuhr)', ergebnis: 520, einheit: '€', nurZahl: true, tipp: 'FAS: bis zur Längsseite des Schiffs, ohne Verladung' },
        { teil: '5', label: 'DPU', frage: 'Kosten bei DPU Quay Port of Veracruz?', muster: '520 € (Anfuhr) + 90 € (Verladung) + 3.800 € (Seefracht) + 154,14 € (Entladung)', ergebnis: 4564.14, einheit: '€', tipp: 'DPU: bis zum Bestimmungsort, entladen (ohne Versicherungspflicht)' },
        { teil: '3', typ: 'auswahl', label: 'Versicherung', frage: 'Bei welchen Klauseln muss der Verkäufer eine Transportversicherung abschließen?', optionen: ['FOB und FAS', 'CIF und CIP', 'CFR und CPT', 'DAP und DDP'], richtig: 1, warum: 'Das „I“ steht für Insurance.' },
        { teil: '3', typ: 'auswahl', label: 'C-Klauseln', frage: 'Was ist das Besondere an den C-Klauseln?', optionen: ['Der Käufer zahlt alles.', 'Kosten- und Gefahrübergang fallen auseinander.', 'Sie gelten nur im Inland.', 'Sie regeln den Eigentumsübergang.'], richtig: 1, warum: 'Der Verkäufer zahlt bis zum Ziel, die Gefahr geht aber schon im Abgangshafen bzw. beim ersten Frachtführer über.' },
        { teil: '3', typ: 'auswahl', label: 'Seeklauseln', frage: 'Welche Klauseln gelten nur für den See- und Binnenschiffstransport?', optionen: ['EXW, FCA, CPT, CIP', 'FAS, FOB, CFR, CIF', 'DAP, DPU, DDP', 'alle elf'], richtig: 1, warum: 'Für Container und andere Verkehrsträger gibt es FCA, CPT und CIP.' }
      ]
    },
    {
      id: 'a-wechselkurs', thema: 'aussenhandel', titel: 'Wechselkurs und Zahlungssicherung', quelle: 'LS 16 · Original', kontext: 'Peso-Rechnung',
      einleitung: 'Anfang Oktober wurde der Gonzalez Ltd. ein Preis von 6.322.640,00 MXN angeboten (Kurs 15,44486). Zwei Monate später steht der Kurs bei 15,95484.',
      teile: [{ nr: '6', text: 'Begründen Sie rechnerisch, welche Situation sich für ManzMobilia ergibt.', punkte: 5 }, { nr: '8.2', text: 'Entscheiden Sie, welches Instrument der Zahlungssicherung vorteilhafter ist.', punkte: 4 }],
      schritte: [
        { teil: '6', label: 'Betrag Okt.', frage: 'Wie viel Euro sind 6.322.640 MXN im Oktober wert?', muster: '6.322.640 MXN (Rechnungsbetrag) : 15,44486 (Kurs Oktober)', ergebnis: 409368.55, einheit: '€', tipp: 'Euro = MXN : Kurs' },
        { teil: '6', label: 'Betrag Dez.', frage: 'Wie viel Euro sind es beim Kurs im Dezember?', muster: '6.322.640 MXN (Rechnungsbetrag) : 15,95484 (Kurs Dezember)', ergebnis: 396283.51, einheit: '€', tipp: 'Euro = MXN : Kurs' },
        { teil: '6', label: 'Kursverlust', frage: 'Wie viel Euro erhält ManzMobilia weniger als erwartet?', muster: '409.368,55 € (Oktober) − 396.283,51 € (Dezember)', ergebnis: 13085.04, einheit: '€', tipp: 'Verlust = Euro alt − Euro neu' },
        { teil: '6', typ: 'auswahl', label: 'Richtung', frage: 'Der Kurs steigt von 15,44 auf 15,95 MXN je Euro. Was bedeutet das?', optionen: ['Der Peso wird stärker, ManzMobilia bekommt mehr Euro.', 'Der Euro wird stärker, derselbe Peso-Betrag ist weniger Euro wert.', 'Nichts, der Rechnungsbetrag ist fest.', 'Der Käufer muss mehr Pesos zahlen.'], richtig: 1, warum: 'Wer in fremder Währung fakturiert, trägt das Kursrisiko. Absichern: in Euro fakturieren oder Devisentermingeschäft.' },
        { teil: '8.2', typ: 'auswahl', label: 'Instrument', frage: 'Neue Geschäftsbeziehung, hoher Auftragswert, weit entfernter Käufer. Welches Instrument ist für ManzMobilia vorteilhafter?', optionen: ['Dokumenteninkasso', 'Dokumentenakkreditiv', 'Zahlung nach Lieferung', 'offene Rechnung'], richtig: 1, warum: 'Beim Akkreditiv verspricht die Bank des Käufers selbst die Zahlung.' },
        { teil: '8.2', typ: 'text', frage: 'Erläutern Sie den Unterschied zwischen Dokumenteninkasso und Dokumentenakkreditiv.', antwort: ['Inkasso: Bank wickelt nur ab, gibt kein Zahlungsversprechen. Käufer bekommt Dokumente erst gegen Zahlung, kann die Abnahme aber verweigern. Dann trägt der Verkäufer „nur“ den Rücktransport (bei verderblicher Ware gravierend).', 'Akkreditiv: Bank des Käufers verpflichtet sich zu zahlen, wenn die Dokumente stimmen. Sehr sicher, aber teurer.', 'Banken prüfen nur Dokumente, nie die Ware.'] }
      ]
    },
    {
      id: 'a-export-uebung', thema: 'aussenhandel', titel: 'Export nach Japan', quelle: 'Neue Übungsaufgabe', kontext: 'Incoterms und Yen',
      einleitung: 'ManzMobilia liefert Büroschränke nach Osaka. Rechnungsbetrag: 12.000.000 JPY. Kurs bei Angebot 155,411, bei Zahlungseingang 160,250 (JPY je 1 €).',
      angaben: [{ titel: 'Transportkette', kopf: ['Position', 'Betrag'], zeilen: [['Anfuhr zum Hafen Hamburg', '380,00 €'], ['Verladung auf das Schiff', '120,00 €'], ['Seefracht nach Osaka', '2.900,00 €'], ['Transportversicherung', '650,00 €'], ['Entladung in Osaka', '210,00 €']] }],
      teile: [{ nr: '1', text: 'Ermitteln Sie die Kosten des Verkäufers.', punkte: 4 }, { nr: '2', text: 'Wechselkursrechnung', punkte: 4 }],
      schritte: [
        { teil: '1', label: 'FOB', frage: 'Kosten bei FOB Hamburg?', muster: '380 € (Anfuhr) + 120 € (Verladung)', ergebnis: 500, einheit: '€', tipp: 'FOB: bis verladen an Bord' },
        { teil: '1', label: 'CFR', frage: 'Kosten bei CFR Osaka (ohne Entladung, ohne Versicherung)?', muster: '380 € (Anfuhr) + 120 € (Verladung) + 2.900 € (Seefracht)', ergebnis: 3400, einheit: '€', tipp: 'CFR: Kosten und Fracht bis zum Bestimmungshafen' },
        { teil: '1', typ: 'auswahl', label: 'Gefahr CFR', frage: 'Wo geht bei CFR Osaka die Gefahr über?', optionen: ['im Werk', 'an Bord in Hamburg', 'in Osaka nach der Entladung', 'beim Kunden'], richtig: 1, warum: 'Typisch für C-Klauseln: Kosten bis Osaka, Gefahr schon an Bord in Hamburg.' },
        { teil: '2', label: 'Euro Angebot', frage: 'Wie viel Euro erwartet ManzMobilia beim Angebot?', muster: '12.000.000 JPY : 155,411 (Kurs Angebot)', ergebnis: 77214.48, einheit: '€', tipp: 'Euro = Fremdwährung : Kurs' },
        { teil: '2', label: 'Euro Zahlung', frage: 'Wie viel Euro gehen tatsächlich ein?', muster: '12.000.000 JPY : 160,25 (Kurs Zahlung)', ergebnis: 74882.99, einheit: '€', tipp: 'Euro = Fremdwährung : Kurs' },
        { teil: '2', label: 'Verlust', frage: 'Wie hoch ist der Kursverlust?', muster: '77.214,48 € − 74.882,99 €', ergebnis: 2331.49, einheit: '€', tipp: 'Euro beim Angebot − Euro bei Zahlung' }
      ]
    },

    // ================= CONTROLLING =================
    {
      id: 'a-cockpit', thema: 'controlling', titel: 'Kennzahlencockpit ManzMobilia', quelle: 'LS 17 · Original', kontext: 'Interner Vergleich und Branche',
      einleitung: 'Der Umsatz ist um über 10 % eingebrochen. Ermitteln Sie die Kennzahlen für Jahr 01 und Jahr 02. Runden Sie auf zwei Stellen.',
      angaben: [
        { titel: 'Informationen I: Absatz (Preise in beiden Jahren gleich)', kopf: ['Modell', 'Absatz 01', 'Absatz 02', 'Preis'],
          zeilen: [['Schreibtisch Standard', '12.200', '13.100', '540,00 €'], ['Schreibtisch Deluxe', '1.980', '2.250', '1.020,00 €'], ['Büroschrank Standard', '15.500', '16.280', '400,00 €'],
            ['Büroschrank Deluxe', '4.600', '5.025', '760,00 €'], ['Bürostuhl Standard', '8.000', '3.300', '350,00 €'], ['Bürostuhl Deluxe', '9.500', '5.500', '650,00 €']] },
        { titel: 'Informationen II–IV', kopf: ['Angabe', 'Jahr 01', 'Jahr 02'],
          zeilen: [['Bestellungen', '2.600', '2.400'], ['davon reklamiert', '230', '240'], ['termingemäß ausgeliefert', '2.400', '2.250'], ['Marktvolumen Büromöbel', '240.000.000 €', '260.000.000 €'],
            ['Kundenbefragung Jahr 02', '', '60 sehr zufrieden, 700 zufrieden, 90 weniger, 150 nicht (von 1.000)']],
          fuss: 'Branche: Reklamationsquote 7 %, Lieferfähigkeit 92 %, Kundenzufriedenheit 85 %.' }
      ],
      teile: [{ nr: '1', text: 'Ermitteln Sie die Kennzahlen des Kennzahlencockpits und interpretieren Sie das Ergebnis.', punkte: 14 }, { nr: '2', text: 'Vergleichen Sie mit der Branche.', punkte: 3 }, { nr: '10', text: 'Beschreiben Sie den Prozess des Marketing-Controllings.', punkte: 2 }],
      schritte: [
        { teil: '1', label: 'Tisch Std. 01', frage: 'Berechnen Sie den Umsatz Schreibtisch Standard im Jahr 01.', muster: '12.200 Stück × 540 €', ergebnis: 6588000, einheit: '€', tipp: 'Umsatz = Absatz × Verkaufspreis' },
        { teil: '1', label: 'Tisch Std. 02', frage: 'Berechnen Sie den Umsatz Schreibtisch Standard im Jahr 02.', muster: '13.100 Stück × 540 €', ergebnis: 7074000, einheit: '€', tipp: 'Umsatz = Absatz × Verkaufspreis' },
        { teil: '1', label: 'Veränd. Tisch', frage: 'Um wie viel Prozent hat sich der Umsatz Schreibtisch Standard verändert?', muster: '7.074.000 € (Jahr 02) : 6.588.000 € (Jahr 01) × 100 − 100', ergebnis: 7.38, einheit: '%', tipp: 'Veränderung = Jahr 02 : Jahr 01 × 100 − 100' },
        { teil: '1', label: 'Stühle 01', frage: 'Berechnen Sie den Umsatz der Produktgruppe Bürostühle im Jahr 01.', muster: '8.000 Stück × 350 € + 9.500 Stück × 650 €', ergebnis: 8975000, einheit: '€', tipp: 'Summe der Umsätze Standard und Deluxe' },
        { teil: '1', label: 'Stühle 02', frage: 'Berechnen Sie den Umsatz der Bürostühle im Jahr 02.', muster: '3.300 Stück × 350 € + 5.500 Stück × 650 €', ergebnis: 4730000, einheit: '€', tipp: 'Summe der Umsätze Standard und Deluxe' },
        { teil: '1', label: 'Veränd. Stühle', frage: 'Um wie viel Prozent ist der Umsatz der Bürostühle gefallen?', muster: '4.730.000 € : 8.975.000 € × 100 − 100', ergebnis: -47.3, einheit: '%', tipp: 'Veränderung = Jahr 02 : Jahr 01 × 100 − 100', warum: 'Fast die Hälfte weg: Hier liegt das Hauptproblem.' },
        { teil: '1', label: 'Umsatz ges. 02', wozu: 'Gesamtumsatz Jahr 01: 8.607.600 € (Schreibtische) + 9.696.000 € (Schränke) + 8.975.000 € (Stühle) = 27.278.600 €.', frage: 'Berechnen Sie den Gesamtumsatz im Jahr 02 (Schreibtische 9.369.000 €, Schränke 10.331.000 €).', muster: '9.369.000 € (Schreibtische) + 10.331.000 € (Schränke) + 4.730.000 € (Stühle)', ergebnis: 24430000, einheit: '€', tipp: 'Summe der drei Produktgruppen' },
        { teil: '1', label: 'Veränd. gesamt', frage: 'Um wie viel Prozent hat sich der Gesamtumsatz verändert (Jahr 01: 27.278.600 €)?', muster: '24.430.000 € : 27.278.600 € × 100 − 100', ergebnis: -10.44, einheit: '%', tipp: 'Veränderung = Jahr 02 : Jahr 01 × 100 − 100' },
        { teil: '1', label: 'MA 01', frage: 'Berechnen Sie den Marktanteil im Jahr 01.', muster: '27.278.600 € (Umsatz) : 240.000.000 € (Marktvolumen) × 100', ergebnis: 11.37, einheit: '%', tipp: 'Marktanteil = Umsatz : Marktvolumen × 100' },
        { teil: '1', label: 'MA 02', frage: 'Berechnen Sie den Marktanteil im Jahr 02.', muster: '24.430.000 € (Umsatz) : 260.000.000 € (Marktvolumen) × 100', ergebnis: 9.4, einheit: '%', tipp: 'Marktanteil = Umsatz : Marktvolumen × 100' },
        { teil: '1', label: 'Rekl. 01', frage: 'Berechnen Sie die Reklamationsquote im Jahr 01.', muster: '230 (Reklamationen) : 2.600 (Bestellungen) × 100', ergebnis: 8.85, einheit: '%', tipp: 'Reklamationsquote = reklamierte : alle Bestellungen × 100' },
        { teil: '1', label: 'Rekl. 02', frage: 'Berechnen Sie die Reklamationsquote im Jahr 02.', muster: '240 (Reklamationen) : 2.400 (Bestellungen) × 100', ergebnis: 10, einheit: '%', tipp: 'Jahr 02: 230 + 10 = 240 Reklamationen', warum: 'Weniger Bestellungen, aber mehr Reklamationen.' },
        { teil: '1', label: 'Lieferf. 02', frage: 'Berechnen Sie die Lieferfähigkeit im Jahr 02.', muster: '2.250 (termingemäß) : 2.400 (Bestellungen) × 100', ergebnis: 93.75, einheit: '%', tipp: 'Lieferfähigkeit = termingemäße : alle Bestellungen × 100', warum: 'Jahr 01: 2.400 : 2.600 × 100 = 92,31 %.' },
        { teil: '1', label: 'Zufriedenheit', frage: 'Berechnen Sie die Kundenzufriedenheit im Jahr 02.', muster: '(60 + 700) (zufriedene Kunden) : 1.000 (befragte Kunden) × 100', ergebnis: 76, einheit: '%', tipp: 'zufriedene Kunden : befragte Kunden × 100', warum: '„Sehr zufrieden“ und „zufrieden“ zählen beide.' },
        { teil: '2', typ: 'auswahl', label: 'Branche', frage: 'Wie schneidet ManzMobilia im Branchenvergleich ab?', optionen: ['überall besser als die Branche', 'Lieferfähigkeit besser, Reklamationsquote und Zufriedenheit schlechter', 'überall schlechter', 'genau im Durchschnitt'], richtig: 1, warum: '93,75 % > 92 %, aber 10 % > 7 % Reklamationen und 76 % < 85 % Zufriedenheit.' },
        { teil: '2', typ: 'text', frage: 'Formulieren Sie ein Gesamtfazit.', antwort: ['Umsatz −10,44 % trotz wachsendem Markt, Marktanteil sinkt von 11,37 % auf 9,40 %.', 'Ursache vor allem Bürostühle (−47,30 %): Qualitätsprobleme, Reklamationen steigen auf 10 %.', 'Schreibtische und Schränke entwickeln sich positiv.', 'Maßnahmen: Qualität verbessern, Image pflegen, Reklamationsstatistik wieder führen.'] },
        { teil: '10', typ: 'text', frage: 'Beschreiben Sie den Prozess des Marketing-Controllings.', antwort: ['Kennzahlen festlegen', 'Soll-Vorgaben formulieren', 'Ist-Situation erfassen', 'Soll-Ist-Vergleich: Ziel erreicht? Ja → abgeschlossen.', 'Nein → Ursachen erforschen, Gegenmaßnahmen erarbeiten, erneut Ist erfassen.'] }
      ]
    },
    {
      id: 'a-soll-ist', thema: 'controlling', titel: 'Soll-Ist-Vergleich', quelle: 'Neue Übungsaufgabe', kontext: 'Abweichung und DB-Quote',
      angaben: [{ titel: 'Planzahlen und Ergebnis', kopf: ['Größe', 'Wert'], zeilen: [['Umsatz Soll', '9.000.000 €'], ['Umsatz Ist', '9.696.000 €'], ['Deckungsbeitrag', '3.496.000 €'], ['Werbekosten', '970.000 €']] }],
      teile: [{ nr: '1', text: 'Berechnen Sie die Kennzahlen und interpretieren Sie das Ergebnis.', punkte: 8 }],
      schritte: [
        { teil: '1', label: 'Abw. absolut', frage: 'Berechnen Sie die absolute Abweichung.', muster: '9.696.000 € (Ist) − 9.000.000 € (Soll)', ergebnis: 696000, einheit: '€', tipp: 'absolute Abweichung = Ist − Soll' },
        { teil: '1', label: 'Abw. relativ', frage: 'Berechnen Sie die relative Abweichung.', muster: '696.000 € (Abweichung) : 9.000.000 € (Soll) × 100', ergebnis: 7.73, einheit: '%', tipp: 'relative Abweichung = (Ist − Soll) : Soll × 100', warum: 'Immer auf das Soll beziehen.' },
        { teil: '1', label: 'Zielerreichung', frage: 'Berechnen Sie den Zielerreichungsgrad.', muster: '9.696.000 € (Ist) : 9.000.000 € (Soll) × 100', ergebnis: 107.73, einheit: '%', tipp: 'Zielerreichungsgrad = Ist : Soll × 100' },
        { teil: '1', label: 'DB-Quote', frage: 'Berechnen Sie die Deckungsbeitragsquote.', muster: '3.496.000 € (DB) : 9.696.000 € (Umsatz) × 100', ergebnis: 36.06, einheit: '%', tipp: 'DB-Quote = Deckungsbeitrag : Umsatz × 100' },
        { teil: '1', label: 'Werbeanteil', frage: 'Berechnen Sie den Werbekostenanteil.', muster: '970.000 € (Werbekosten) : 9.696.000 € (Umsatz) × 100', ergebnis: 10, einheit: '%', tipp: 'Werbekostenanteil = Werbekosten : Umsatz × 100' },
        { teil: '1', label: 'Quote 8→10', frage: 'Der Werbekostenanteil steigt von 8 % auf 10 %. Um wie viel Prozent ist das?', muster: '10 % : 8 % × 100 − 100', ergebnis: 25, einheit: '%', tipp: 'neu : alt × 100 − 100', warum: 'Das sind 2 Prozentpunkte, aber 25 % mehr.' },
        { teil: '1', typ: 'auswahl', label: 'Warnsignal', frage: 'Welche Kombination ist ein klassisches Warnsignal?', optionen: ['steigender Umsatz, steigende DB-Quote', 'steigender Umsatz, sinkende DB-Quote', 'sinkende Werbekosten, steigender Umsatz', 'gleicher Umsatz, gleiche Kosten'], richtig: 1, warum: 'Der Mehrumsatz wurde über den Preis erkauft und kostet Marge.' }
      ]
    }
  ],

  /* ===================== LERNKARTEN ===================== */
  karten: [
    // Marktanalyse
    { id: 'k-a1', thema: 'analyse', typ: 'begriff', vorne: 'Absatzprogramm', hinten: 'Alles, was ein Unternehmen verkauft, auch zugekaufte Handelswaren.' },
    { id: 'k-a2', thema: 'analyse', typ: 'begriff', vorne: 'Produktionsprogramm', hinten: 'Alles, was ein Unternehmen selbst herstellt, auch für den Eigenbedarf.' },
    { id: 'k-a3', thema: 'analyse', typ: 'begriff', vorne: 'Programmbreite', hinten: 'Anzahl der verschiedenen Produktgruppen.' },
    { id: 'k-a4', thema: 'analyse', typ: 'begriff', vorne: 'Programmtiefe', hinten: 'Anzahl der Ausführungen innerhalb einer Produktgruppe.' },
    { id: 'k-a5', thema: 'analyse', typ: 'begriff', vorne: 'Marketingmix', hinten: 'Kombinierter Einsatz von Produkt-, Preis-, Kommunikations- und Distributionspolitik.' },
    { id: 'k-a6', thema: 'analyse', typ: 'begriff', vorne: 'Marktsegmentierung', hinten: 'Aufteilung eines heterogenen Gesamtmarkts in homogene Teilmärkte.' },
    { id: 'k-a7', thema: 'analyse', typ: 'begriff', vorne: 'psychografische Segmentierung', hinten: 'Einteilung nach Werten, Einstellungen, Meinungen und Interessen.' },
    { id: 'k-a8', thema: 'analyse', typ: 'begriff', vorne: 'verhaltensbasierte Segmentierung', hinten: 'Einteilung nach Markentreue, Preisbewusstsein und Entscheidungsmustern.' },
    { id: 'k-a9', thema: 'analyse', typ: 'formel', vorne: 'Formel: Marktanteil', hinten: 'eigener Umsatz : Marktvolumen × 100' },
    { id: 'k-a10', thema: 'analyse', typ: 'formel', vorne: 'Formel: relativer Marktanteil', hinten: 'eigener Marktanteil : Marktanteil des stärksten Wettbewerbers' },
    { id: 'k-a11', thema: 'analyse', typ: 'formel', vorne: 'Formel: Marktwachstum', hinten: '(Marktvolumen neu − Marktvolumen alt) : Marktvolumen alt × 100' },
    { id: 'k-a12', thema: 'analyse', typ: 'formel', vorne: 'Formel: Veränderung in Prozent', hinten: 'Zahl aktuelles Jahr : Zahl Bezugsjahr × 100 − 100' },
    { id: 'k-a13', thema: 'analyse', typ: 'begriff', vorne: 'Stars', hinten: 'Marktführer in einem wachsenden Markt. Strategie: investieren.' },
    { id: 'k-a14', thema: 'analyse', typ: 'begriff', vorne: 'Cash-Cows', hinten: 'Marktführer in einem kaum wachsenden Markt. Strategie: abschöpfen.' },
    { id: 'k-a15', thema: 'analyse', typ: 'begriff', vorne: 'Question Marks', hinten: 'Schwache Position in einem wachsenden Markt. Strategie: Offensive, Ausgang offen.' },
    { id: 'k-a16', thema: 'analyse', typ: 'begriff', vorne: 'Poor Dogs', hinten: 'Schwache Position in einem stagnierenden Markt. Strategie: desinvestieren.' },
    { id: 'k-a17', thema: 'analyse', typ: 'wann', vorne: 'Ein Wert in der BCG-Matrix liegt über 1,0. Was heißt das?', hinten: 'Der relative Marktanteil ist über 1: Das Unternehmen ist in diesem Segment Marktführer.' },
    { id: 'k-a18', thema: 'analyse', typ: 'begriff', vorne: 'Degenerationsphase', hinten: 'Umsatz fällt deutlich. Maßnahmen: eliminieren, abverkaufen, neues Produkt.' },
    { id: 'k-a19', thema: 'analyse', typ: 'begriff', vorne: 'Reife- und Sättigungsphase', hinten: 'Umsatz steigt nur noch schwach und erreicht seinen Höhepunkt.' },
    { id: 'k-a20', thema: 'analyse', typ: 'begriff', vorne: 'SWOT', hinten: 'Strengths, Weaknesses (intern) und Opportunities, Threats (extern).' },
    { id: 'k-a21', thema: 'analyse', typ: 'begriff', vorne: 'Primärforschung', hinten: 'Daten werden für die Fragestellung neu erhoben (Befragung, Beobachtung, Experiment).' },
    { id: 'k-a22', thema: 'analyse', typ: 'begriff', vorne: 'Sekundärforschung', hinten: 'Vorhandene interne oder externe Daten werden ausgewertet.' },
    { id: 'k-a23', thema: 'analyse', typ: 'wann', vorne: 'Du willst die Zahlungsbereitschaft der Kunden wissen. Welche Forschung?', hinten: 'Primärforschung, z. B. Befragung oder Preistest.' },
    { id: 'k-a24', thema: 'analyse', typ: 'text', vorne: 'Was bedeutet ein sinkender Marktanteil bei wachsendem Markt?', hinten: 'Verdrängung: Wettbewerber gewinnen Anteile auf Kosten des Unternehmens.' },
    { id: 'k-a25', thema: 'analyse', typ: 'text', vorne: 'Vor- und Nachteil geschlossener Fragen?', hinten: 'Vorteil: schnell und einheitlich auswertbar. Nachteil: engt ein, wichtige Aspekte fehlen.' },
    { id: 'k-a26', thema: 'analyse', typ: 'text', vorne: 'Wie erhöht man die Rücklaufquote?', hinten: 'Anreiz bieten, kurzer Fragebogen, online befragen, klare Fragen, erinnern.' },
    // Ziele
    { id: 'k-z1', thema: 'ziele', typ: 'begriff', vorne: 'Käufermarkt', hinten: 'Angebot größer als Nachfrage, der Kunde ist in der stärkeren Position.' },
    { id: 'k-z2', thema: 'ziele', typ: 'begriff', vorne: 'Verkäufermarkt', hinten: 'Nachfrage größer als Angebot, der Anbieter ist in der stärkeren Position.' },
    { id: 'k-z3', thema: 'ziele', typ: 'begriff', vorne: 'ökonomische Marketingziele', hinten: 'Umsatz, Absatz, Marktanteil, Deckungsbeitrag, Gewinn.' },
    { id: 'k-z4', thema: 'ziele', typ: 'begriff', vorne: 'psychologische Marketingziele', hinten: 'Bekanntheitsgrad, Image, Kundenzufriedenheit, Kaufabsicht, Markentreue.' },
    { id: 'k-z5', thema: 'ziele', typ: 'begriff', vorne: 'SMART', hinten: 'spezifisch, messbar, attraktiv, realistisch, terminiert' },
    { id: 'k-z6', thema: 'ziele', typ: 'begriff', vorne: 'komplementäre Ziele', hinten: 'Ziele, die sich gegenseitig fördern.' },
    { id: 'k-z7', thema: 'ziele', typ: 'begriff', vorne: 'konkurrierende Ziele', hinten: 'Ziele, die sich gegenseitig behindern.' },
    { id: 'k-z8', thema: 'ziele', typ: 'begriff', vorne: 'indifferente Ziele', hinten: 'Ziele, die sich gegenseitig nicht beeinflussen.' },
    { id: 'k-z9', thema: 'ziele', typ: 'begriff', vorne: 'Kostenführerschaft', hinten: 'Günstigster Anbieter durch niedrigste Kosten, Verkauf über den Preis.' },
    { id: 'k-z10', thema: 'ziele', typ: 'begriff', vorne: 'Differenzierungsstrategie', hinten: 'Sich erkennbar abheben (Qualität, Design, Service), damit der Kunde mehr zahlt.' },
    { id: 'k-z11', thema: 'ziele', typ: 'begriff', vorne: 'Nischenstrategie', hinten: 'Konzentration auf ein eng abgegrenztes Marktsegment.' },
    { id: 'k-z12', thema: 'ziele', typ: 'text', vorne: 'Welche vier Angaben braucht ein Marketingziel?', hinten: 'Zielinhalt (was), Zielausmaß (wie viel), Zeitbezug (bis wann), Zielbereich (wo).' },
    { id: 'k-z13', thema: 'ziele', typ: 'wann', vorne: 'Quote steigt von 12 % auf 15 %. Prozentpunkte oder Prozent?', hinten: '3 Prozentpunkte, das entspricht +25 %.' },
    { id: 'k-z14', thema: 'ziele', typ: 'text', vorne: 'Was heißt „stuck in the middle“?', hinten: 'Wer Kostenführerschaft und Differenzierung zugleich will, ist weder der günstigste noch der beste Anbieter.' },
    // Produkt
    { id: 'k-p1', thema: 'produkt', typ: 'begriff', vorne: 'Morphologischer Kasten', hinten: 'Systematische Methode: Produkt in Merkmale zerlegen, Ausprägungen suchen, beste Kombination wählen.' },
    { id: 'k-p2', thema: 'produkt', typ: 'begriff', vorne: 'Brainstorming', hinten: '5–7 Personen sammeln Ideen auf Zuruf, ohne Kritik, Menge vor Güte.' },
    { id: 'k-p3', thema: 'produkt', typ: 'begriff', vorne: 'Brainwriting (Kartenabfrage)', hinten: 'Jeder schreibt Ideen allein auf Karten, danach werden sie geclustert.' },
    { id: 'k-p4', thema: 'produkt', typ: 'begriff', vorne: 'Methode 6-3-5', hinten: '6 Personen, je 3 Ideen, alle 5 Minuten weitergeben: 108 Ideen.' },
    { id: 'k-p5', thema: 'produkt', typ: 'begriff', vorne: 'Grundnutzen', hinten: 'Bedürfnisbefriedigung durch die technisch-funktionalen Eigenschaften.' },
    { id: 'k-p6', thema: 'produkt', typ: 'begriff', vorne: 'Geltungsnutzen', hinten: 'Teil des Zusatznutzens: Prestige und Anerkennung.' },
    { id: 'k-p7', thema: 'produkt', typ: 'begriff', vorne: 'Erbauungsnutzen', hinten: 'Teil des Zusatznutzens: ästhetische Eigenschaften wie Form, Farbe, Material.' },
    { id: 'k-p8', thema: 'produkt', typ: 'begriff', vorne: 'Screening-Phase', hinten: 'Grobauswahl (passt die Idee?) und Feinauswahl (Wirtschaftlichkeit, z. B. Break-even).' },
    { id: 'k-p9', thema: 'produkt', typ: 'begriff', vorne: 'Produktinnovation', hinten: 'Entwicklung und Einführung neuer Produkte (Markt- oder Unternehmensneuheit).' },
    { id: 'k-p10', thema: 'produkt', typ: 'begriff', vorne: 'Produktdifferenzierung', hinten: 'Neue Variante kommt dazu, das ursprüngliche Produkt bleibt.' },
    { id: 'k-p11', thema: 'produkt', typ: 'begriff', vorne: 'Produktmodifikation', hinten: 'Produkt wird verbessert und ersetzt das alte, das vom Markt geht.' },
    { id: 'k-p12', thema: 'produkt', typ: 'begriff', vorne: 'horizontale Diversifikation', hinten: 'Artverwandte Produkte der gleichen Fertigungsstufe kommen dazu.' },
    { id: 'k-p13', thema: 'produkt', typ: 'begriff', vorne: 'vertikale Diversifikation', hinten: 'Ausdehnung auf vor- oder nachgelagerte Stufen.' },
    { id: 'k-p14', thema: 'produkt', typ: 'begriff', vorne: 'laterale Diversifikation', hinten: 'Vorstoß in bisher branchenfremde Bereiche.' },
    { id: 'k-p15', thema: 'produkt', typ: 'begriff', vorne: 'Produktelimination', hinten: 'Herausnahme eines Produkts aus dem Programm, oft per Deckungsbeitrag entschieden.' },
    { id: 'k-p16', thema: 'produkt', typ: 'begriff', vorne: 'Umverpackung', hinten: 'Zusätzliche Hülle um die Verkaufsverpackung (Selbstbedienung, Diebstahlschutz).' },
    { id: 'k-p17', thema: 'produkt', typ: 'begriff', vorne: 'USP', hinten: 'Alleinstellungsmerkmal: einzigartig, relevant, wahrnehmbar, verteidigbar, kommunizierbar.' },
    { id: 'k-p18', thema: 'produkt', typ: 'begriff', vorne: 'Markentransfer', hinten: 'Einführung weiterer Produkte unter einem bekannten Markennamen.' },
    { id: 'k-p19', thema: 'produkt', typ: 'wann', vorne: 'Altes Produkt bleibt, neue Variante kommt dazu. Welche Maßnahme?', hinten: 'Produktdifferenzierung' },
    { id: 'k-p20', thema: 'produkt', typ: 'text', vorne: 'Phasen der Produktentwicklung?', hinten: 'Ideenfindung, Screening, Produktkonzept, Konstruktion, Prototyp und Qualitätstest, Produkttest und Markteinführung.' },
    { id: 'k-p21', thema: 'produkt', typ: 'text', vorne: 'Aspekte der Verpackungsgestaltung?', hinten: 'Schutzfunktion, absatzfördernde Wirkung, Information und Service, Umweltaspekte.' },
    { id: 'k-p22', thema: 'produkt', typ: 'text', vorne: 'Nutzen der Marke für den Kunden?', hinten: 'Orientierung, Qualitätsvermutung, geringeres Kaufrisiko, Wiedererkennung, Prestige, Vertrauen.' },
    // Preis
    { id: 'k-r1', thema: 'preis', typ: 'begriff', vorne: 'kostenorientierte Preisfestlegung', hinten: 'Die Kosten plus Gewinnzuschlag bestimmen den Preis. Der Markt bleibt außen vor.' },
    { id: 'k-r2', thema: 'preis', typ: 'begriff', vorne: 'wettbewerbsorientierte Preisfestlegung', hinten: 'Der eigene Preis richtet sich nach den Preisen der Wettbewerber.' },
    { id: 'k-r3', thema: 'preis', typ: 'begriff', vorne: 'nachfrageorientierte Preisfestlegung', hinten: 'Preistest ermittelt die Zahlungsbereitschaft, gewählt wird der Preis mit dem höchsten Gewinn.' },
    { id: 'k-r4', thema: 'preis', typ: 'begriff', vorne: 'Premiumstrategie', hinten: 'Preis dauerhaft deutlich über dem Durchschnitt, nur mit erkennbarem Vorteil möglich.' },
    { id: 'k-r5', thema: 'preis', typ: 'begriff', vorne: 'Skimmingstrategie', hinten: 'Hoher Einführungspreis, der schrittweise gesenkt wird.' },
    { id: 'k-r6', thema: 'preis', typ: 'begriff', vorne: 'Penetrationsstrategie', hinten: 'Niedriger Einstiegspreis, später moderat angehoben.' },
    { id: 'k-r7', thema: 'preis', typ: 'begriff', vorne: 'Promotionsstrategie', hinten: 'Preis dauerhaft deutlich unter dem Durchschnitt. Risiko: wirkt minderwertig.' },
    { id: 'k-r8', thema: 'preis', typ: 'begriff', vorne: 'Mittelpreisstrategie', hinten: 'Preis am Durchschnitt der Wettbewerber. Wirkt weder hochwertig noch günstig.' },
    { id: 'k-r9', thema: 'preis', typ: 'begriff', vorne: 'Preiselastizität der Nachfrage', hinten: 'Wie stark die Nachfrager auf Preisänderungen reagieren.' },
    { id: 'k-r10', thema: 'preis', typ: 'formel', vorne: 'Formel: Zielverkaufspreis', hinten: 'Barverkaufspreis : (100 − Skontosatz) × 100' },
    { id: 'k-r11', thema: 'preis', typ: 'formel', vorne: 'Formel: Listenverkaufspreis netto', hinten: 'Zielverkaufspreis : (100 − Rabattsatz) × 100' },
    { id: 'k-r12', thema: 'preis', typ: 'formel', vorne: 'Formel: Selbstkosten', hinten: 'Herstellkosten + Verwaltungs- und Vertriebsgemeinkosten' },
    { id: 'k-r13', thema: 'preis', typ: 'formel', vorne: 'Formel: Herstellkosten', hinten: 'Materialkosten + Fertigungskosten' },
    { id: 'k-r14', thema: 'preis', typ: 'formel', vorne: 'Formel: Gewinn je Preisstufe', hinten: 'Preis × Absatz − (Fixkosten + kv × Absatz)' },
    { id: 'k-r15', thema: 'preis', typ: 'wann', vorne: 'Gewinnzuschlag: vom Hundert oder im Hundert?', hinten: 'Vom Hundert: Die Selbstkosten sind die bekannte Basis (SK × 20 %).' },
    { id: 'k-r16', thema: 'preis', typ: 'wann', vorne: 'Skonto und Rabatt: vom Hundert oder im Hundert?', hinten: 'Im Hundert: Die Basis wird erst gesucht (BVP : 97 × 100).' },
    { id: 'k-r17', thema: 'preis', typ: 'begriff', vorne: 'Preisdifferenzierung', hinten: 'Gleiches Produkt zu unterschiedlichen Preisen an verschiedene Käufergruppen.' },
    { id: 'k-r18', thema: 'preis', typ: 'begriff', vorne: 'personelle Preisdifferenzierung', hinten: 'Bestimmte Käufergruppen erhalten Sonderpreise (Studenten, Behörden, Rentner).' },
    { id: 'k-r19', thema: 'preis', typ: 'begriff', vorne: 'zeitliche Preisdifferenzierung', hinten: 'Unterschiedliche Preise zu verschiedenen Zeiten (Nachttarif, Nebensaison).' },
    { id: 'k-r20', thema: 'preis', typ: 'begriff', vorne: 'verwendungsmäßige Preisdifferenzierung', hinten: 'Preis hängt vom Einsatzzweck ab (Speisesalz und Industriesalz).' },
    { id: 'k-r21', thema: 'preis', typ: 'begriff', vorne: 'produktbezogene Preisdifferenzierung', hinten: 'Sehr ähnliche Varianten zu verschiedenen Preisen (Hardcover und Taschenbuch).' },
    { id: 'k-r22', thema: 'preis', typ: 'begriff', vorne: 'räumliche Preisdifferenzierung', hinten: 'Unterschiedliche Preise in verschiedenen Regionen.' },
    { id: 'k-r23', thema: 'preis', typ: 'begriff', vorne: 'mengenmäßige Preisdifferenzierung', hinten: 'Entspricht der Rabattgewährung ab bestimmten Mengen.' },
    { id: 'k-r24', thema: 'preis', typ: 'text', vorne: 'Warum lohnt sich ein Sonderpreis über den variablen Kosten?', hinten: 'Die Fixkosten bleiben gleich. Jedes Zusatzstück bringt Preis minus kv als Deckungsbeitrag.' },
    // Kommunikation
    { id: 'k-k1', thema: 'kommunikation', typ: 'begriff', vorne: 'AIDA', hinten: 'Attention, Interest, Desire, Action' },
    { id: 'k-k2', thema: 'kommunikation', typ: 'begriff', vorne: 'Werbemittel', hinten: 'Die konkrete Gestaltung der Botschaft: Anzeige, Prospekt, Spot, Banner.' },
    { id: 'k-k3', thema: 'kommunikation', typ: 'begriff', vorne: 'Werbeträger', hinten: 'Das Medium, das das Werbemittel verbreitet: Zeitschrift, Sender, Website.' },
    { id: 'k-k4', thema: 'kommunikation', typ: 'begriff', vorne: 'Streuzeit', hinten: 'Wann und wie lange geworben wird.' },
    { id: 'k-k5', thema: 'kommunikation', typ: 'begriff', vorne: 'Streugebiet', hinten: 'Wo geworben wird (bundesweit, regional).' },
    { id: 'k-k6', thema: 'kommunikation', typ: 'begriff', vorne: 'Werbeetat', hinten: 'Das für die Werbung verfügbare Budget.' },
    { id: 'k-k7', thema: 'kommunikation', typ: 'begriff', vorne: 'Kontakthäufigkeit', hinten: 'Wie oft die Werbung dieselbe Person erreicht.' },
    { id: 'k-k8', thema: 'kommunikation', typ: 'begriff', vorne: 'Kontaktqualität', hinten: 'Wie aufmerksam und passend der Kontakt ist, z. B. Fachzeitschrift für Entscheider.' },
    { id: 'k-k9', thema: 'kommunikation', typ: 'formel', vorne: 'Formel: Tausend-Kontakt-Preis', hinten: 'Kosten : Reichweite × 1.000' },
    { id: 'k-k10', thema: 'kommunikation', typ: 'formel', vorne: 'Formel: Werberendite', hinten: 'Mehrumsatz : Werbekosten × 100' },
    { id: 'k-k11', thema: 'kommunikation', typ: 'formel', vorne: 'Formel: Werbekostenanteil', hinten: 'Werbekosten : Umsatz × 100' },
    { id: 'k-k12', thema: 'kommunikation', typ: 'begriff', vorne: 'Sammelwerbung', hinten: 'Mehrere Unternehmen werben gemeinsam und werden namentlich genannt.' },
    { id: 'k-k13', thema: 'kommunikation', typ: 'begriff', vorne: 'Verbundwerbung', hinten: 'Unternehmen, deren Produkte sich ergänzen, werben gemeinsam mit Namen.' },
    { id: 'k-k14', thema: 'kommunikation', typ: 'begriff', vorne: 'Gemeinschaftswerbung', hinten: 'Ein ganzer Wirtschaftszweig wirbt, ohne Firmennamen.' },
    { id: 'k-k15', thema: 'kommunikation', typ: 'begriff', vorne: 'Salespromotion', hinten: 'Verkaufsförderung, der „verlängerte Arm der Werbung“: Maßnahmen für Verbraucher, Handel und Verkäufer.' },
    { id: 'k-k16', thema: 'kommunikation', typ: 'begriff', vorne: 'Handelspromotion', hinten: 'Verkaufsförderung, die sich an den Handel richtet: Displays, Schulungen, Deko-Service.' },
    { id: 'k-k17', thema: 'kommunikation', typ: 'begriff', vorne: 'Öffentlichkeitsarbeit (PR)', hinten: 'Aufbau und Pflege eines positiven Unternehmensimages.' },
    { id: 'k-k18', thema: 'kommunikation', typ: 'begriff', vorne: 'Corporate Identity', hinten: 'Einheitliche Darstellung des Unternehmens nach außen (Design, Kommunikation, Verhalten, Kultur).' },
    { id: 'k-k19', thema: 'kommunikation', typ: 'text', vorne: 'Grundsätze der Werbung?', hinten: 'Wahrheit, Klarheit, Wirksamkeit, Wirtschaftlichkeit, soziale Akzeptanz.' },
    { id: 'k-k20', thema: 'kommunikation', typ: 'text', vorne: 'Warum ist Werbeerfolg schwer messbar?', hinten: 'Andere Maßnahmen, Wettbewerber und Konjunktur wirken gleichzeitig auf den Umsatz.' },
    { id: 'k-k21', thema: 'kommunikation', typ: 'wann', vorne: 'Medien mit verschiedener Reichweite vergleichen. Welche Kennzahl?', hinten: 'Tausend-Kontakt-Preis (TKP)' },
    { id: 'k-k22', thema: 'kommunikation', typ: 'text', vorne: 'Instrumente der Öffentlichkeitsarbeit?', hinten: 'Veröffentlichungen, Veranstaltungen, Nachrichten, Reden, Sponsoring, Spenden, Krisenmanagement, visuelle Identität.' },
    // Distribution
    { id: 'k-d1', thema: 'distribution', typ: 'begriff', vorne: 'Absatzweg', hinten: 'Der Weg des Erzeugnisses vom Hersteller zum Verbraucher oder Verwender.' },
    { id: 'k-d2', thema: 'distribution', typ: 'begriff', vorne: 'direkter Absatz', hinten: 'Verkauf ohne Einschaltung des Handels.' },
    { id: 'k-d3', thema: 'distribution', typ: 'begriff', vorne: 'indirekter Absatz', hinten: 'Groß- und/oder Einzelhandel ist zwischengeschaltet.' },
    { id: 'k-d4', thema: 'distribution', typ: 'begriff', vorne: 'Reisender', hinten: 'Angestellter Außendienstler, handelt in fremdem Namen auf fremde Rechnung, Fixum + Provision.' },
    { id: 'k-d5', thema: 'distribution', typ: 'begriff', vorne: 'Handelsvertreter', hinten: 'Selbstständiger Kaufmann, ständig für andere tätig, nur Provision.' },
    { id: 'k-d6', thema: 'distribution', typ: 'begriff', vorne: 'Kommissionär', hinten: 'Handelt im eigenen Namen auf fremde Rechnung.' },
    { id: 'k-d7', thema: 'distribution', typ: 'begriff', vorne: 'Handelsmakler', hinten: 'Vermittelt Verträge von Fall zu Fall, ohne ständige Bindung.' },
    { id: 'k-d8', thema: 'distribution', typ: 'begriff', vorne: 'Franchising', hinten: 'Rechtlich selbstständiger Nehmer verkauft unter Name und Konzept des Gebers.' },
    { id: 'k-d9', thema: 'distribution', typ: 'begriff', vorne: 'Vertragshändler', hinten: 'Selbstständig, führt im Wesentlichen die Produkte eines Herstellers, erhält Gebietsschutz.' },
    { id: 'k-d10', thema: 'distribution', typ: 'begriff', vorne: 'kritischer Umsatz', hinten: 'Umsatz, bei dem Reisender und Handelsvertreter gleich viel kosten.' },
    { id: 'k-d11', thema: 'distribution', typ: 'formel', vorne: 'Formel: kritischer Umsatz', hinten: 'Fixum : (Provisionssatz HV − Provisionssatz Reisender)' },
    { id: 'k-d12', thema: 'distribution', typ: 'formel', vorne: 'Formel: Kosten des Reisenden', hinten: 'Fixum + Provisionssatz × Umsatz' },
    { id: 'k-d13', thema: 'distribution', typ: 'wann', vorne: 'Hoher, sicherer Umsatz: Reisender oder Handelsvertreter?', hinten: 'Reisender, weil sich seine Fixkosten auf mehr Umsatz verteilen.' },
    { id: 'k-d14', thema: 'distribution', typ: 'begriff', vorne: 'Punktwertverfahren', hinten: 'Kriterien gewichten, Punkte vergeben, Gewichtung × Punkte addieren.' },
    { id: 'k-d15', thema: 'distribution', typ: 'begriff', vorne: 'E-Commerce', hinten: 'Verkauf über das Internet: informieren, bestellen und bezahlen online.' },
    { id: 'k-d16', thema: 'distribution', typ: 'begriff', vorne: 'B2C', hinten: 'Business to Consumer: Kunden sind Privatpersonen.' },
    { id: 'k-d17', thema: 'distribution', typ: 'text', vorne: 'Pflichten im B2C-Onlinehandel?', hinten: '14 Tage Widerrufsrecht ohne Begründung, Endpreise inklusive Umsatzsteuer angeben.' },
    { id: 'k-d18', thema: 'distribution', typ: 'text', vorne: 'Warum schreiben Reisende Besuchsberichte?', hinten: 'Kontrolle für den Arbeitgeber und Marktinfos: Kundenwünsche, Beanstandungen, Wettbewerber.' },
    { id: 'k-d19', thema: 'distribution', typ: 'text', vorne: 'Warum im Investitionsgüterbereich meist direkter Absatz?', hinten: 'Wenige Kunden, hohe Auftragswerte, erklärungsbedürftige Produkte mit Beratung und Service.' },
    { id: 'k-d20', thema: 'distribution', typ: 'text', vorne: 'Risiken von Geschäften über das Internet?', hinten: 'Datensicherheit, Datenschutz, anonymer Partner, Ware nicht anfassbar, Widerrufsrecht.' },
    // Außenhandel
    { id: 'k-h1', thema: 'aussenhandel', typ: 'begriff', vorne: 'Incoterms', hinten: 'Vertragsklauseln der Internationalen Handelskammer zu Kosten, Gefahrübergang und Versicherung.' },
    { id: 'k-h2', thema: 'aussenhandel', typ: 'begriff', vorne: 'EXW', hinten: 'Ab Werk: Käufer holt ab und trägt ab dort Kosten und Gefahr.' },
    { id: 'k-h3', thema: 'aussenhandel', typ: 'begriff', vorne: 'FOB', hinten: 'Frei an Bord: Verkäufer trägt Kosten und Gefahr, bis die Ware an Bord verladen ist.' },
    { id: 'k-h4', thema: 'aussenhandel', typ: 'begriff', vorne: 'FAS', hinten: 'Frei Längsseite Schiff: Kosten und Gefahr bis an die Kaimauer im Verschiffungshafen.' },
    { id: 'k-h5', thema: 'aussenhandel', typ: 'begriff', vorne: 'CIF', hinten: 'Kosten, Versicherung, Fracht bis Bestimmungshafen. Gefahr geht schon an Bord über.' },
    { id: 'k-h6', thema: 'aussenhandel', typ: 'begriff', vorne: 'CFR', hinten: 'Kosten und Fracht bis Bestimmungshafen, ohne Versicherung. Gefahr an Bord.' },
    { id: 'k-h7', thema: 'aussenhandel', typ: 'begriff', vorne: 'CIP', hinten: 'Frachtfrei versichert bis Bestimmungsort. Gefahr beim ersten Frachtführer.' },
    { id: 'k-h8', thema: 'aussenhandel', typ: 'begriff', vorne: 'DPU', hinten: 'Geliefert entladen: Kosten und Gefahr bis zum Bestimmungsort, inklusive Entladung, unverzollt.' },
    { id: 'k-h9', thema: 'aussenhandel', typ: 'begriff', vorne: 'DDP', hinten: 'Geliefert verzollt: Verkäufer trägt alles bis zum Bestimmungsort, inklusive Einfuhrabgaben.' },
    { id: 'k-h10', thema: 'aussenhandel', typ: 'begriff', vorne: 'Mengennotierung', hinten: 'Der Kurs gibt an, wie viele Einheiten Fremdwährung 1 € kostet.' },
    { id: 'k-h11', thema: 'aussenhandel', typ: 'formel', vorne: 'Formel: Fremdwährung in Euro', hinten: 'Betrag in Fremdwährung : Kurs' },
    { id: 'k-h12', thema: 'aussenhandel', typ: 'begriff', vorne: 'Dokumenteninkasso', hinten: 'Bank wickelt nur ab, ohne eigenes Zahlungsversprechen: Dokumente gegen Zahlung.' },
    { id: 'k-h13', thema: 'aussenhandel', typ: 'begriff', vorne: 'Dokumentenakkreditiv', hinten: 'Bank des Käufers verspricht selbst zu zahlen, wenn die Dokumente stimmen.' },
    { id: 'k-h14', thema: 'aussenhandel', typ: 'begriff', vorne: 'Konnossement', hinten: 'Transportdokument im Seeverkehr, berechtigt zur Herausgabe der Ware.' },
    { id: 'k-h15', thema: 'aussenhandel', typ: 'wann', vorne: 'Unbekannter Käufer, hoher Wert, unsicheres Land: welches Instrument?', hinten: 'Dokumentenakkreditiv' },
    { id: 'k-h16', thema: 'aussenhandel', typ: 'wann', vorne: 'Kurs steigt in Mengennotierung. Was passiert mit einer Forderung in Fremdwährung?', hinten: 'Sie ist weniger Euro wert.' },
    { id: 'k-h17', thema: 'aussenhandel', typ: 'text', vorne: 'Was regeln Incoterms nicht?', hinten: 'Eigentumsübergang, anwendbares Recht, Gerichtsstand.' },
    { id: 'k-h18', thema: 'aussenhandel', typ: 'text', vorne: 'Risiken von Außenhandelsgeschäften?', hinten: 'Politische Lage, andere Rechtslage, mehr Wettbewerber, Transportrisiko, Wechselkurs, Zahlungsausfall, Sprache und Kultur.' },
    { id: 'k-h19', thema: 'aussenhandel', typ: 'text', vorne: 'Vorteile von Außenhandelsgeschäften?', hinten: 'Größerer Absatzmarkt, höhere Bekanntheit, Ausgleich von Schwankungen, Stückkostendegression, Unabhängigkeit vom Heimatmarkt.' },
    { id: 'k-h20', thema: 'aussenhandel', typ: 'text', vorne: 'Wie sichert man das Wechselkursrisiko ab?', hinten: 'In Euro fakturieren oder ein Devisentermingeschäft abschließen.' },
    // Controlling
    { id: 'k-c1', thema: 'controlling', typ: 'begriff', vorne: 'Marketing-Controlling', hinten: 'Steuert und optimiert alle marketingpolitischen Entscheidungen, nicht nur Kontrolle.' },
    { id: 'k-c2', thema: 'controlling', typ: 'begriff', vorne: 'Soll-Ist-Vergleich', hinten: 'Planwert wird dem tatsächlichen Wert gegenübergestellt, Abweichungen werden untersucht.' },
    { id: 'k-c3', thema: 'controlling', typ: 'formel', vorne: 'Formel: Reklamationsquote', hinten: 'reklamierte Bestellungen : alle Bestellungen × 100' },
    { id: 'k-c4', thema: 'controlling', typ: 'formel', vorne: 'Formel: Lieferfähigkeit (Servicegrad)', hinten: 'termingerechte Lieferungen : alle Bestellungen × 100' },
    { id: 'k-c5', thema: 'controlling', typ: 'formel', vorne: 'Formel: Kundenzufriedenheitsquote', hinten: 'zufriedene Kunden : befragte Kunden × 100' },
    { id: 'k-c6', thema: 'controlling', typ: 'formel', vorne: 'Formel: Zielerreichungsgrad', hinten: 'Ist : Soll × 100' },
    { id: 'k-c7', thema: 'controlling', typ: 'formel', vorne: 'Formel: relative Abweichung', hinten: '(Ist − Soll) : Soll × 100' },
    { id: 'k-c8', thema: 'controlling', typ: 'formel', vorne: 'Formel: Deckungsbeitragsquote', hinten: 'Deckungsbeitrag : Umsatz × 100' },
    { id: 'k-c9', thema: 'controlling', typ: 'begriff', vorne: 'Mengenabweichung', hinten: 'Es wurden mehr oder weniger Stück verkauft als geplant.' },
    { id: 'k-c10', thema: 'controlling', typ: 'begriff', vorne: 'Preisabweichung', hinten: 'Der erzielte Durchschnittspreis lag über oder unter dem Plan.' },
    { id: 'k-c11', thema: 'controlling', typ: 'begriff', vorne: 'Struktureffekt', hinten: 'Andere Produkte als geplant verkauft, mit anderen Margen.' },
    { id: 'k-c12', thema: 'controlling', typ: 'wann', vorne: 'Steigender Umsatz, sinkende DB-Quote. Was bedeutet das?', hinten: 'Warnsignal: Der Mehrumsatz wurde über den Preis erkauft.' },
    { id: 'k-c13', thema: 'controlling', typ: 'text', vorne: 'Prozess des Marketing-Controllings?', hinten: 'Kennzahlen festlegen, Soll vorgeben, Ist erfassen, vergleichen, bei Abweichung Ursachen und Maßnahmen, erneut Ist erfassen.' },
    { id: 'k-c14', thema: 'controlling', typ: 'text', vorne: 'Warum ist ein Branchenvergleich schwer?', hinten: 'Zahlen der Wettbewerber sind oft nicht veröffentlicht oder unterschiedlich abgegrenzt.' },
    { id: 'k-c15', thema: 'controlling', typ: 'text', vorne: 'Bezug Reklamationsquote und Kundenzufriedenheit?', hinten: 'Steigen die Reklamationen, sinkt meist die Zufriedenheit, Image und Umsatz leiden.' },
    { id: 'k-c16', thema: 'controlling', typ: 'wann', vorne: 'Worauf bezieht sich die relative Abweichung?', hinten: 'Immer auf den Sollwert.' }
  ]
});
