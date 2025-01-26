# Accessible Subsidy Form – Research Project (MCT Howest)

[![en](https://img.shields.io/badge/lang-nl-red.svg)](README.nl.md)

🚀 This project researches how to create accessible forms for subsidies using React-Aria. The form is inspired by the application process of VAPH (Vlaams Agentschap voor Personen met een Handicap).

## 📖 Table of Contents

1. [Getting Started (Running the Project)](#getting-started-running-the-project)
   - Install Node.js and npm
   - Get the Project Files (Git or ZIP)
   - Install Dependencies
   - Run the Project
2. [Understanding the Project](#understanding-the-project)
   - Install Visual Studio Code
   - Project Structure
   - Editing Validation and Form Steps
   - Running the Project with Different Validation Modes
   - Testing Accessibility

---

## 1️⃣ Getting Started (Running the Project)

This section helps you set up the project on a fresh computer with minimal installation.

### Step 1: Install Node.js and npm

This project requires **Node.js** (which allows running JavaScript outside a browser) and **npm** (which manages project dependencies).

#### ✅ Installing Node.js & npm

- **Windows:** Download and install from [Node.js Official Website](https://nodejs.org/).
- **macOS:** Use Homebrew:
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
  💡 **Verify installation:**

```sh
node -v
npm -v
```

If both commands return version numbers, Node.js and npm are installed successfully.

---

### Step 2: Get the Project Files

There are **two ways** to download the project files:

#### ✅ Option 1: Using Git

Git is a tool that helps manage project files.

1. **Install Git:**
   - **Windows & macOS:** Download and install from [Git Official Website](https://git-scm.com/downloads)
   - **Linux (Ubuntu/Debian-based):**
     ```sh
     sudo apt install git
     ```
   - **Linux (Arch-based):**
     ```sh
     sudo pacman -S git
     ```
2. **Clone the Repository:**
   ```sh
   git clone https://github.com/LouisEggermont/research-project-mct-howest.git
   cd research-project-mct-howest
   ```

#### ✅ Option 2: Downloading the Source Code (Simpleler)

1. Go to the **[GitHub Repository](https://github.com/LouisEggermont/research-project-mct-howest)**
2. Click the **"Code"** button (green button near the top)
3. Click **"Download ZIP"**
4. Extract the ZIP file to a folder on your computer
5. Open **Command Prompt** (Windows) or **Terminal** (macOS/Linux) and navigate to the extracted folder:
   ```sh
   cd path/to/extracted-folder
   ```

---

### Step 3: Install Project Dependencies

Once you have the project files, install the necessary dependencies:

```sh
npm install
```

---

### Step 4: Run the Project

Start the development server:

```sh
npm run dev
```

Open your browser and go to **[http://localhost:3000](http://localhost:3000)** to view the project.

---

## 2️⃣ Understanding the Project

Now that the project is running, this section explains how to modify and test it.

### Step 1: Install Visual Studio Code (Recommended)

For editing the project, install **[Visual Studio Code (VS Code)](https://code.visualstudio.com/)**.

Once installed, open the project folder in VS Code:

```sh
code path/to/project-folder
```

---

### Step 2: Project Structure

```
research-project-mct-howest/
│── src/app/                 # Main application files
│   ├── page.tsx             # Main form page
│   ├── layout.tsx           # Page layout
│   ├── actions/             # Handles form validation
│── src/components/          # Reusable components
│   ├── ui/                  # Custom UI components for the project
│   ├── aria/                # React Aria components (some modified from the starter kit)
│── public/                  # Static files (images, fonts)
│── .pa11yci                 # Accessibility test config
│── tailwind.config.ts       # Tailwind CSS settings
│── package.json             # Project dependencies
```

- `src/app/` contains the main application files, including routing and layouts.
- `src/components/` holds reusable components:
  - `ui/` contains every custom UI component built for the project.
  - `aria/` includes React Aria components downloaded from the official React Aria starter kit ([React Aria Docs](https://react-spectrum.adobe.com/react-aria/getting-started.html)), some of which are modified to fit the project's needs.
- `public/` stores static assets like images and fonts.
- `.pa11yci` is the configuration file for accessibility testing.
- `tailwind.config.ts` contains Tailwind CSS settings.
- `package.json` lists project dependencies and scripts.

---

### Step 3: Editing Validation and Form Steps

The form has two types of validation:

#### ✅ Client-Side Validation (React-Aria)

- Happens instantly when filling out the form and on submit
- Uses HTML validation provided by React-Aria (e.g., required fields, correct email format)

Example:

```tsx
<input type="email" required />
```

#### ✅ Server-Side Validation (Zod)

- Happens **after** the form is submitted and client validation passed
- Ensures all data is correct before processing
- Uses the Zod library:

```tsx
import { z } from "zod";
const schema = z.object({
  email: z.string().email("Invalid email format"),
});
```

---

### Step 4: Running the Project with Different Validation Modes

You can start the project with different validation settings:

| Command                            | Description                                          |
| ---------------------------------- | ---------------------------------------------------- |
| `npm run dev`                      | Default mode (all validation enabled)                |
| `npm run dev:no-validation`        | Disables both client-side and server-side validation |
| `npm run dev:no-server-validation` | Disables only server-side validation                 |
| `npm run dev:no-client-validation` | Disables only client-side validation                 |

💡 **Example:** Running without client-side validation

```sh
npm run dev:no-client-validation
```

This is useful for testing how validation affects form accessibility.

---

### Step 5: Testing Accessibility

This project uses **Pa11y CI** to check accessibility compliance.

#### ✅ Run The server

```sh
npm run dev
```

#### ✅ Run Accessibility Tests

```sh
npm run test:accessibility
```

This will generate a report listing accessibility issues.

#### ✅ Fixing Accessibility Issues

- Follow recommendations in the Pa11y CI report
- Ensure all form fields have clear labels
- Improve color contrast for better readability

---

## 🎉 Congratulations!

You now know how to:
✅ Install Node.js and npm
✅ Get the project files (using Git or downloading ZIP)
✅ Install dependencies and run the project
✅ Edit validation and form steps
✅ Run accessibility tests

🚀 Happy coding! If you need help, refer to [Next.js Documentation](https://nextjs.org/docs).
