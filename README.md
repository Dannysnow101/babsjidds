# BABSJIDDS SERVICES NIGERIA LIMITED

![Version](https://img.shields.io/badge/version-0.1.0-blue) ![Next.js](https://img.shields.io/badge/Next.js-16-black) ![Status](https://img.shields.io/badge/status-Active-brightgreen) ![License](https://img.shields.io/badge/license-Private-red)

> Official website for BABSJIDDS SERVICES NIGERIA LIMITED — bringing the company's two service lines online for the first time, built to drive client inquiries and give the business a professional web presence.

This site was designed and built by **Sowale Daniel (Danny Snow)** as a personal project for his father's company. BABSJIDDS operates two distinct businesses — a travel and visa assistance agency, and a ship chandelling operation supplying vessels at Nigerian ports. The site gives each service line its own dedicated section while presenting them under a single brand identity.

---

## ✨ Features

- ✈️ **Travelling Service** — Visa assistance (Tourist, Student, Work, Business, Transit) to any destination, plus hotel booking support
- ⚓ **Chandelling Service** — Deck/engine stores, safety equipment, and spare parts for vessels calling at Nigerian ports
- 📋 **Visa Application Form** — Clients fill in their details online; the form captures and emails the submission via Netlify Forms, then shows a printable summary page
- 🔗 **Direct WhatsApp & Call CTAs** — Every page routes clients to WhatsApp or phone instantly, reducing friction on mobile
- 🖨️ **Printable Application Summary** — After submitting a visa application, clients can save or print their submission as a PDF
- 📍 **Centralised Contact Details** — All phone numbers, addresses, and links live in one file (`src/lib/contact.ts`), so nothing needs hunting if details change

---

## 🛠️ Tech Stack

| Layer       | Technology              | Purpose                                 |
|-------------|-------------------------|-----------------------------------------|
| Framework   | Next.js 16 (App Router) | Routing, SSR, static generation         |
| Language    | TypeScript 5            | Type safety across all components       |
| UI          | React 19                | Component rendering                     |
| Styling     | Tailwind CSS v4         | Utility-first, dark-palette styling     |
| Fonts       | Bodoni Moda + Manrope   | Display and body typography             |
| Icons       | Lucide React            | UI and section icons                    |
| Forms       | Netlify Forms           | Serverless form capture (no backend)    |
| Deployment  | Netlify                 | Static hosting + form processing        |

---

## 🌐 Site Structure

```
babsjidds.com/
│
├── /                     → Landing page — choose Travelling or Chandelling
│
├── /travel               → Travel homepage — visa services overview + how it works
├── /travel/visa-services → All five visa types with individual apply links
├── /travel/apply         → Visa application form (with printable confirmation)
├── /travel/hotels        → Hotel booking assistance info
├── /travel/contact       → Travel service contact page
└── /travel/about         → About BABSJIDDS Travelling
│
└── /chandelling          → Chandelling homepage — supplies and contact CTA
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** v18 or higher
- **npm** v9 or higher

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/your-username/babsjidds.git
cd babsjidds

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

> **Note:** The visa application form uses Netlify Forms and will only process submissions when deployed to Netlify. In local development, the form submission will appear to succeed but nothing is captured. Use `netlify dev` for full local testing.

---

## 🔐 Environment Variables

None required. Contact details and company info are hardcoded in `src/lib/contact.ts`.

---

## 📜 Scripts

| Command          | Description                    |
|------------------|--------------------------------|
| `npm run dev`    | Start the development server   |
| `npm run build`  | Build the app for production   |
| `npm run start`  | Run the production build locally |
| `npm run lint`   | Run ESLint                     |

---

## 📁 Project Structure

```
babsjidds/
│
├── public/
│   ├── __forms.html          → Netlify Forms registration (do not delete)
│   ├── logo.png              → Company logo
│   ├── icon.png              → Favicon
│   └── hero-emblem.png       → Background emblem on the landing page
│
├── src/
│   ├── app/
│   │   ├── page.tsx          → Landing page — two-panel service selector
│   │   ├── layout.tsx        → Root layout (fonts, metadata, global styles)
│   │   ├── globals.css       → Global CSS and Tailwind base
│   │   │
│   │   ├── travel/
│   │   │   ├── layout.tsx        → Travel section layout (header + footer)
│   │   │   ├── page.tsx          → Travel homepage
│   │   │   ├── visa-services/    → Visa types listing page
│   │   │   ├── apply/            → Visa application form
│   │   │   ├── hotels/           → Hotel assistance page
│   │   │   ├── about/            → About page
│   │   │   └── contact/          → Contact page
│   │   │
│   │   └── chandelling/
│   │       ├── layout.tsx        → Chandelling section layout
│   │       └── page.tsx          → Chandelling homepage
│   │
│   ├── components/
│   │   ├── travel/
│   │   │   ├── TravelHeader.tsx  → Navigation bar for the travel section
│   │   │   └── TravelFooter.tsx  → Footer for the travel section
│   │   ├── chandelling/
│   │   │   ├── ChandellingHeader.tsx
│   │   │   └── ChandellingFooter.tsx
│   │   └── ui/
│   │       └── Button.tsx        → Shared button component (primary + secondary variants)
│   │
│   └── lib/
│       └── contact.ts            → ⚠️ Single source of truth for all contact details
│
└── package.json
```

---

## 📞 Updating Contact Details

All phone numbers, email, WhatsApp links, and the office address are defined in **one place only**:

```
src/lib/contact.ts
```

Edit that file and every page on the site updates automatically. Nothing else needs touching.

---

## ☁️ Deployment

The site is configured for **Netlify**. The `public/__forms.html` file registers the visa application form with Netlify — it must not be deleted or the form submissions will stop working.

### Deploy via Netlify CLI

```bash
# Build
npm run build

# Deploy to production
netlify deploy --prod --dir=.next
```

### Deploy via GitHub (recommended)

1. Push the repo to GitHub
2. Connect it in the Netlify dashboard
3. Set build command: `npm run build`
4. Set publish directory: `.next`
5. Done — Netlify handles forms automatically, no extra config needed

---

## 🗺️ Roadmap

- [x] Two-service landing page
- [x] Travel section with visa services overview
- [x] Visa application form with printable confirmation
- [x] Chandelling section with contact CTA
- [x] WhatsApp and call direct-link CTAs
- [ ] Netlify CMS or admin panel for updating content without code changes
- [ ] Multi-language support (Yoruba / Igbo / Hausa)
- [ ] Blog / news section for travel tips

---

## 📄 License

Private — all rights reserved. Built for BABSJIDDS SERVICES NIGERIA LIMITED (RC 1055264).

---

## 📬 Contact

**BABSJIDDS SERVICES NIGERIA LIMITED**
Suite 18C Platinum Mall, Ikota First Gate, Eti-Osa, Lekki 106104, Lagos, Nigeria

📞 +234 802 312 7479
✉️ babsburg2020@gmail.com

---

*Built by [Sowale Daniel](https://github.com/your-username)*
