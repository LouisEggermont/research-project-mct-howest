# Toegankelijk Subsidieformulier – Research Project (MCT Howest)

[![en](https://img.shields.io/badge/lang-en-red.svg)](README.md)

Dit project onderzoekt hoe toegankelijke formulieren voor subsidies kunnen worden gemaakt met behulp van React-Aria. Het formulier is geïnspireerd op de aanvraagprocedure van het VAPH (Vlaams Agentschap voor Personen met een Handicap).

## Inhoudsopgave

1. [Het Project Runnen](#het-project-runnen)
   - Installeer Node.js en npm
   - Download de Project Files (Git of ZIP)
   - Installeer de Dependencies
   - Run het Project
2. [Het Project Begrijpen](#het-project-begrijpen)
   - Installeer Visual Studio Code
   - Project Structuur
   - Validatie Bewerken
   - Project Runnen met Verschillende Validatie Modes
   - Toegankelijkheid Testen

---

## 1. Het Project Runnen

Dit gedeelte helpt je het project op te zetten op een nieuwe computer met minimale installatie.

### Stap 1: Installeer Node.js en npm

Dit project vereist **Node.js** (waarmee JavaScript buiten een browser kan worden uitgevoerd) en **npm** (dat de project dependencies beheert).

#### Node.js & npm Installeren

- **Windows:** Download en installeer vanaf de [Node.js Officiële Website](https://nodejs.org/).
- **macOS:** Gebruik Homebrew:
  ```sh
  brew install node
  ```
- **Linux (Debian/Ubuntu):**
  ```sh
  sudo apt update
  sudo apt install nodejs npm
  ```
- **Linux (Arch-based):**

  ```sh
  sudo pacman -S nodejs npm
  ```

  **Controleer de installatie:**

```sh
node -v
npm -v
```

Als beide commando's versienummers returnen, zijn Node.js en npm succesvol geïnstalleerd.

---

### Stap 2: Download de Project Files

Er zijn **twee manieren** om de projectbestanden te downloaden:

#### Optie 1: Git Gebruiken

Git is een tool die helpt bij het beheren van projectbestanden.

1. **Installeer Git:**
   - **Windows & macOS:** Download en installeer vanaf de [Git Officiële Website](https://git-scm.com/downloads)
   - **Linux (Ubuntu/Debian-based):**
     ```sh
     sudo apt install git
     ```
   - **Linux (Arch-based):**
     ```sh
     sudo pacman -S git
     ```
2. **Clone de Repository:**
   ```sh
   git clone https://github.com/LouisEggermont/research-project-mct-howest.git
   cd research-project-mct-howest
   ```

#### Optie 2: Download de Source Code (Eenvoudiger)

1. Ga naar de **[GitHub Repository](https://github.com/LouisEggermont/research-project-mct-howest)**
2. Klik op de **"Code"** knop (groene knop bovenaan)
3. Klik op **"Download ZIP"**
4. Pak het ZIP-bestand uit naar een map op je computer
5. Open **Command Prompt** (Windows) of **Terminal** (macOS/Linux) en navigeer naar de uitgepakte map:
   ```sh
   cd pad/naar/uitgepakte-map
   ```

---

### Stap 3: Installeer Project Dependencies

Zodra je de projectbestanden hebt, installeer de benodigde dependencies:

```sh
npm install
```

---

### Stap 4: Run het Project

Start de development server:

```sh
npm run dev
```

Open je browser en ga naar **[http://localhost:3000](http://localhost:3000)** om het project te bekijken.

---

## 2. Het Project Begrijpen

Nu het project draait, legt dit gedeelte uit hoe je het kunt aanpassen en testen.

### Stap 1: Installeer Visual Studio Code (Aanbevolen)

Om het project te bewerken, installeer **[Visual Studio Code (VS Code)](https://code.visualstudio.com/)**.

Zodra het is geïnstalleerd, open de projectmap in VS Code:

```sh
code pad/naar/project-map
```

---

### Stap 2: Project Structuur

```
research-project-mct-howest/
│── src/app/                 # Hoofdapplicatiebestanden
│   ├── page.tsx             # Hoofdformulierpagina
│   ├── layout.tsx           # Paginalay-out
│   ├── actions/             # Handelt formuliervalidatie
│── src/components/          # Herbruikbare componenten
│   ├── ui/                  # Aangepaste UI-componenten voor het project
│   ├── aria/                # React Aria-componenten (sommige aangepast vanuit de starter kit)
│── public/                  # Statische bestanden (afbeeldingen, lettertypen)
│── .pa11yci                 # Configuratiebestand voor toegankelijkheidstests
│── tailwind.config.ts       # Tailwind CSS-instellingen
│── package.json             # Project dependencies
```

- `src/app/` bevat de hoofdapplicatiebestanden, inclusief routing en lay-outs.
- `src/components/` bevat herbruikbare componenten:
  - `ui/` bevat alle aangepaste UI-componenten die voor het project zijn gebouwd.
  - `aria/` bevat React Aria-componenten die zijn gedownload van de officiële React Aria starter kit ([React Aria Docs](https://react-spectrum.adobe.com/react-aria/getting-started.html)), waarvan sommige zijn aangepast om aan de behoeften van het project te voldoen.
- `public/` bevat statische bestanden zoals afbeeldingen en lettertypen.
- `.pa11yci` is het configuratiebestand voor toegankelijkheidstests.
- `tailwind.config.ts` bevat Tailwind CSS-instellingen.
- `package.json` bevat de project dependencies en scripts.

---

### Stap 3: Validatie Bewerken

Het formulier heeft twee soorten validatie:

#### Client-Side Validation (React-Aria)

- Gebeurt direct tijdens het invullen van het formulier en bij submit
- Gebruikt HTML-validatie van React-Aria (bijv. verplichte velden, correct e-mailformaat)

Voorbeeld:

```tsx
<input type="email" required />
```

#### Server-Side Validation (Zod)

- Gebeurt **na** de submit van het formulier en als de clientvalidatie geslaagd is
- Zorgt ervoor dat alle gegevens correct zijn voordat ze worden verwerkt
- Gebruikt de Zod library:

```tsx
import { z } from "zod";
const schema = z.object({
  email: z.string().email("Ongeldig e-mailformaat"),
});
```

---

### Stap 4: Project Runnen met Verschillende Validatie Modes

Je kunt het project starten met verschillende validatie-instellingen:

| Commando                           | Beschrijving                                             |
| ---------------------------------- | -------------------------------------------------------- |
| `npm run dev`                      | Standaardmodus (alle validatie ingeschakeld)             |
| `npm run dev:no-validation`        | Schakelt zowel client-side als server-side validatie uit |
| `npm run dev:no-server-validation` | Schakelt alleen server-side validatie uit                |
| `npm run dev:no-client-validation` | Schakelt alleen client-side validatie uit                |

**Voorbeeld:** Draaien zonder client-side validatie

```sh
npm run dev:no-client-validation
```

Dit is handig om te testen hoe validatie de toegankelijkheid van het formulier beïnvloedt.

---

### Stap 5: Toegankelijkheid Testen

Dit project gebruikt **Pa11y CI** om de toegankelijkheidscompliance te controleren.

#### Run de Server

```sh
npm run dev
```

#### Run Accessibility Tests

```sh
npm run test:accessibility
```

Dit genereert een rapport met toegankelijkheidsproblemen.

#### Fixing Accessibility Issues

- Volg de aanbevelingen in het Pa11y CI-rapport
- Zorg ervoor dat alle formuliervelden duidelijke labels hebben
- Verbeter het kleurcontrast voor betere leesbaarheid

---

## Gefeliciteerd!

Je weet nu hoe je:

- Node.js en npm kunt installeren
- De project files kunt downloaden (met Git of ZIP)
- Dependencies kunt installeren en het project kunt runnen
- Validatie en formulierstappen kunt bewerken
- Accessibility tests kunt uitvoeren

Als je hulp nodig hebt, raadpleeg dan de [Next.js Documentation](https://nextjs.org/docs).
