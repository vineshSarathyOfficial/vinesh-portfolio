# Vinesh Parthasarathy — Full Stack Engineer Portfolio

A premium, high-performance portfolio website built with modern web technologies, featuring clean Geist-inspired minimalism, dynamic layouts, and an interactive Design Token Studio.

---

## 🚀 Key Features

* **Design Token Studio**: A real-time style customization widget that lets visitors toggle design variables dynamically:
  * **Themes**: Geist Minimal, Nord Retro, Solarized Warm, and Cyberpunk Neon.
  * **Accents**: Indigo, Violet, Emerald, Crimson, and Amber.
  * **Typography**: Sans-Serif, Monospace, and Serif.
  * **Radius Configurations**: Sharp (0px), Rounded (8px/16px/24px), and Pill shapes.
  * **Dynamic Color Overrides**: Direct font color adjustments.
* **Interactive Physics**: Custom hardware-accelerated 3D tilt hover matrices and spotlight mouse trackers.
* **Responsive Mobile Drawer**: A fullscreen, scroll-locked navigation drawer featuring absolute header decoupling to prevent background transparency bleed on deep sections.
* **Dynamic Brand Logo**: Architectural monogram vector symbol (`VP` monogram) and dynamic lowercase wordmark that adapts to the active design theme and accent values.
* **Next.js Static Favicon Route**: Automatically linked `icon.svg` route for tab brand assets.
* **Single Source of Truth**: Centralized profile configuration data inside `src/data/portfolio.ts` to easily update descriptions, case studies, and capabilities.

---

## 🛠️ Technology Stack

* **Core**: Next.js 16 (App Router), React, TypeScript.
* **Styling**: Tailwind CSS, Vanilla CSS custom variables.
* **Icons**: Lucide React.
* **Animations**: CSS transitions, Intersection Observer scroll reveals.
* **Fonts**: Geist Sans & Geist Mono (optimized via `next/font`).

---

## 📁 Directory Structure

```bash
├── public/                 # Static files (Resume PDF, metadata images)
├── src/
│   ├── app/                # Next.js App Router (pages, layout, icon.svg, globals.css)
│   ├── components/         # Reusable UI component modules
│   │   ├── footer/         # Footer block
│   │   ├── hero/           # Hero section and Design Token Studio
│   │   ├── navigation/     # Decoupled sticky Navbar and mobile overlays
│   │   ├── projects/       # Projects showcase with dynamic status badges
│   │   ├── skills/         # Capabilities technical grid
│   │   └── ui/             # Reusable design atoms (Button, Reveal, Tilt)
│   └── data/
│       └── portfolio.ts    # Profile info, projects lists, and social links (SSOT)
```

---

## ⚡ Development & Scripts

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Locally (Development server with Hot Reload)
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### 3. Lint Checks (TypeScript and ESLint validation)
```bash
npm run lint
```

### 4. Build for Production
```bash
npm run build
```
Creates an optimized static production bundle inside the `.next` directory.

---

## 🚀 Deployment (Vercel)

The easiest way to deploy this portfolio is using Vercel:

1. Push your repository code to GitHub, GitLab, or Bitbucket.
2. Go to [Vercel](https://vercel.com/new) and select the repository.
3. Vercel automatically detects Next.js settings. Click **Deploy**.
4. Set up custom domains (e.g. `vineshsarathy.com`) in the project settings dashboard.

---

## 📄 License
This project is private and tailored specifically for Vinesh Parthasarathy's professional portfolio.
