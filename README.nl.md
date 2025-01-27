# Gebruikershandleiding – Toegankelijk Subsidieformulier

### Eggermont Louis - 3MCT NWD

Dit document is een handleiding voor gebruikers van het Toegankelijk Subsidieformulier, een project dat is ontwikkeld om een toegankelijk en gebruiksvriendelijk formulier te creëren voor het aanvragen van subsidies. Het formulier is geïnspireerd op de aanvraagprocedure van het VAPH (Vlaams Agentschap voor Personen met een Handicap) en maakt gebruik van React-Aria om toegankelijkheid te garanderen. De stijl van het formulier is zoveel mogelijk gebaseerd op de huisstijl van de Vlaamse overheid en het VAPH voor herkenbaarheid en consistentie.

## Inhoudsopgave

1. Wat doet deze applicatie?
2. Hoe gebruik je deze applicatie?
   - Stap 1: Open het formulier
   - Stap 2: Vul het formulier in
   - Stap 3: Controleer en dien in
3. Navigatie en Toegankelijkheid
   - Toetsenbordnavigatie
   - Schermlezer-ondersteuning
   - VoiceOver: Basiscommando’s voor webnavigatie
4. Toegankelijkheidsfuncties
5. Conclusie

## 1. Wat doet deze applicatie?

Deze applicatie is een digitaal formulier waarmee gebruikers een subsidieaanvraag kunnen indienen. Het formulier is ontworpen om toegankelijk te zijn voor iedereen, inclusief gebruikers met een handicap. Het bevat functionaliteiten zoals:

1. **Toegankelijke formuliervelden**: Elk veld is ontworpen om gemakkelijk te gebruiken te zijn met toetsenbordnavigatie en schermlezers.
2. **Validatie**: Het formulier controleert of de ingevoerde gegevens correct zijn, zowel tijdens het invullen (client-side) als na het indienen (server-side).
3. **Stapsgewijze navigatie**: Gebruikers kunnen door het formulier navigeren in duidelijke stappen.
4. **Responsief ontwerp**: Het formulier werkt goed op verschillende apparaten, zoals desktops, tablets en mobiele telefoons.
5. **Optimalisatie voor schermlezers**: Het formulier is volledig compatibel met schermlezers zoals VoiceOver (macOS/iOS) en NVDA (Windows).

## 2. Hoe gebruik je deze applicatie?

### Stap 1: Open de web pagina

1. Ga naar de applicatie door de URL in je browser in te voeren (bijvoorbeeld `http://localhost:3000` als je de applicatie lokaal runt).
2. Je komt eerst op een basis homepagina terecht. Klik op “Start Uw Aanvraag”.
3. Je wordt dan doorverwezen naar een introductiepagina, waar enkele zaken worden uitgelegd over het formulier en de aanvraagprocedure.
4. Klik op de knop "Start De Aanvraag" om het formulier te starten.

![Alt text](https://assets.digitalocean.com/articles/alligator/boo.svg "a title")

### Stap 2: Vul het formulier in

Het formulier bestaat uit verschillende stappen, die je kunt navigeren via de zijbalk of door op de knoppen "Vorige" en "Volgende" te klikken. Elke stap geeft duidelijk aan waar je bent in het proces, bijvoorbeeld "Stap 1 van 4". Het formulier is opgesplitst in zo veel mogelijk logische secties om het overzichtelijk te houden.

- **Verplichte velden**: Alle velden en secties zijn verplicht, tenzij anders vermeld. Als je een veld foutief invult en het veld verlaat, verschijnt er een foutmelding.
- **Extra beschrijvingen**: Bij sommige invoervelden vind je een extra beschrijving over wat en hoe je het moet invullen.
- **Custom features**:
  - Voor het rijksregisternummer hoef je alleen de cijfers in te voeren; het formulier zorgt automatisch voor de juiste opmaak (bijvoorbeeld 00.00.00-000.00).
  - De nationaliteit is standaard ingesteld op Belgisch voor gemak, maar je kunt dit aanpassen als nodig.
  - **Dynamische vragen**:
    - **Voorbeeld**:
      - Vraag: "Hebt u een of meer wettelijk vertegenwoordigers?"
      - Antwoord "Ja": Er verschijnt een vervolgvraag: "Wie is uw wettelijk vertegenwoordiger? Selecteer maximaal 2 opties."
      - Opties: "Een van mijn ouders", "Mijn beide ouders", "Een voogd", etc.
      - **Regels**:
        - Als u "Mijn beide ouders" kiest, worden andere opties uitgeschakeld.
        - Bij elke geselecteerde optie verschijnen velden voor persoonlijke gegevens.

### Stap 3: Controleer en dien in

1. Dien het formulier in:
   - Klik op de knop "Indienen" om je aanvraag te versturen.
   - Als er nog ongeldige velden zijn, gaat de focus van je browser automatisch naar het eerste ongeldige veld, zodat je dit kunt corrigeren.
   - Als alles correct is ingevuld, wordt je aanvraag succesvol ingediend.

## 3. Navigatie en Toegankelijkheid

### Toetsenbordnavigatie

Het formulier is volledig bedienbaar met een toetsenbord. Hier zijn enkele tips voor efficiënte navigatie:

- Gebruik de Tab-toets om door de velden en knoppen te navigeren.
- Gebruik Shift + Tab om terug te gaan naar het vorige veld.
- Druk op Enter om knoppen zoals "Vorige", "Volgende" en "Indienen" te activeren.
- Gebruik de pijltjestoetsen om keuzerondjes (radio buttons) en selectievakjes (checkboxes) te selecteren.

### Schermlezer-ondersteuning

Het formulier is geoptimaliseerd voor schermlezers zoals VoiceOver (macOS/iOS) en NVDA (Windows). Hier zijn enkele belangrijke functies:

- **Skip-to-main navigatie**: Gebruikers kunnen direct naar de hoofdinhoud van het formulier springen via een verborgen link bovenaan de pagina. Dit is handig voor gebruikers die met een toetsenbord navigeren.
- **Zijbalk voor navigatie**: Een zijbalk toont de verschillende stappen van het formulier. Deze is toegankelijk voor schermlezers en helpt gebruikers om hun voortgang te volgen.
- **Focus management**: De focus wordt automatisch beheerd wanneer nieuwe inhoud wordt geladen, zodat de gebruikerservaring niet wordt verstoord. Bijvoorbeeld, wanneer een nieuwe stap wordt geladen, wordt de focus verplaatst naar de kop van die stap, zodat de gebruiker direct weet waar hij of zij is.
- **Voorwaardelijke vragen**: Vervolgvragen worden duidelijk aangekondigd aan schermlezergebruikers met behulp van ARIA-tags, zodat ze weten dat er aanvullende informatie nodig is.

### VoiceOver: Basiscommando’s voor webnavigatie

VoiceOver is een schermlezer die standaard is ingebouwd in macOS-apparaten. Het helpt gebruikers met een visuele beperking om webpagina’s en formulieren te navigeren. Hieronder vind je een uitleg van de basiscommando’s voor het navigeren van een webpagina of formulier met VoiceOver.

#### VoiceOver starten en stoppen

- VoiceOver starten of stoppen: Druk op Command + F5.
- VoiceOver-activatietoetsen (VO-toetsen): VoiceOver gebruikt de combinatie van Control + Option (afgekort als VO) voor de meeste commando’s.

#### Basisnavigatie

- Volgend item lezen: Druk op VO + Pijl-rechts.
- Vorig item lezen: Druk op VO + Pijl-links.
- Lezen pauzeren of hervatten: Druk op Control.
- Interactie met objecten (bijv. iframes, menu’s, applicatiegebieden):
  - Ga naar binnen: Druk op VO + Shift + Pijl-omlaag.
  - Ga naar buiten: Druk op VO + Shift + Pijl-omhoog.

#### Navigeren tussen focusbare elementen

- Volgend focusbaar element (link, knop, invoerveld, etc.): Druk op Tab.
- Vorig focusbaar element: Druk op Shift + Tab.

#### De rotor gebruiken

De rotor is een handig hulpmiddel om snel te navigeren tussen verschillende soorten elementen op een webpagina, zoals koppen, links, formulieren en meer.

1. Open de rotor: Druk op VO + U.
2. Selecteer een elementtype:
   - Gebruik Pijl-links en Pijl-rechts om tussen de beschikbare elementtypen te navigeren. De beschikbare opties kunnen zijn:
     - Links
     - Koppen
     - Tabellen
     - Frames
     - Afbeeldingen
     - Formuliervelden
     - Landmarks
     - Bezochte links
     - Niet-bezochte links
3. Selecteer een specifiek element:
   - Gebruik Pijl-omhoog en Pijl-omlaag om een specifiek element te selecteren.
   - Druk op Enter om het geselecteerde element te activeren.
4. Verlaat de rotor: Druk op Escape.

## 4. Toegankelijkheidsfuncties

1. **Huidige stap weergave**:
   - De huidige stap wordt duidelijk weergegeven in de paginatitel, zijbalk en formulierkoppen (bijvoorbeeld "Stap 1 van 4"). Dit helpt gebruikers om hun voortgang te volgen.
2. **Motion reduction**:
   - Het formulier ondersteunt motion reduction voor gebruikers die gevoelig zijn voor animaties. Bijvoorbeeld, het draaiende laadanimatie wordt verminderd of uitgeschakeld voor een betere gebruikerservaring.
3. **Custom masking**:
   - Voor velden zoals het rijksregisternummer hoef je alleen de cijfers in te voeren; het formulier zorgt automatisch voor de juiste opmaak (bijvoorbeeld 00.00.00-000.00).
4. **Vooringevulde velden**:
   - De nationaliteit is standaard ingesteld op Belgisch voor gemak. Je kunt dit aanpassen als nodig.
5. **Sentence casing voor labels**:
   - Alle labels gebruiken sentence casing (eerste letter van de zin in hoofdletters), wat voldoet aan de richtlijnen voor toegankelijkheid.
6. **Contrast voldoet aan WCAG AAA**:
   - Voor het kleurcontrast van het formulier wordt gestreefd naar de WCAG AAA-richtlijnen, wat zorgt voor een optimale leesbaarheid voor gebruikers met visuele beperkingen.
7. **Logische opdeling van het formulier**:
   - Het formulier is opgesplitst in zo veel mogelijk logische secties om het overzichtelijk te houden. Dit maakt het gemakkelijker voor gebruikers om de juiste informatie in te vullen zonder overweldigd te raken.
8. **Focus management**:
   - Wanneer je naar de volgende stap gaat, wordt de focus automatisch verplaatst naar de kop van die stap. Dit zorgt ervoor dat de gebruikerservaring niet wordt verstoord en dat gebruikers direct weten waar ze zijn.
9. **Taalinstellingen**:
   - De taal van de pagina en de React Aria-componenten is ingesteld op Nederlands. Dit zorgt ervoor dat de datumvelden automatisch de juiste opmaak hebben (bijvoorbeeld dd/mm/yyyy) en dat validatieberichten automatisch in het Nederlands worden weergegeven.

## 5. Conclusie

Het Toegankelijk Subsidieformulier combineert gebruiksvriendelijkheid met strikte toegankelijkheidsnormen. Of u nu een schermlezer, toetsenbord of mobiel apparaat gebruikt: het formulier past zich aan úw behoeften aan.
