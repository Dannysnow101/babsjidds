# BABSJIDDS website

Next.js 16 (App Router) + TypeScript + Tailwind CSS. Landing page toggles between the two
divisions — Travelling (fully built out) and Chandelling (kept simple for now).

## Before you deploy

Open `src/lib/contact.ts` and fill in the real phone number, WhatsApp number, and email.
Everything on the site pulls from that one file.

## Running locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Deploying to Netlify

1. Push this to a GitHub repo (or drag the project into Netlify's dashboard).
2. In Netlify: New site from Git → pick the repo. Build command `npm run build`,
   publish directory is handled automatically by Netlify's Next.js runtime.
3. Deploy. Then check **Site settings → Forms** in the Netlify dashboard — you should see
   two forms picked up automatically: `visa-application` (from `/travel/apply`) and
   `contact` (from `/travel/contact`). No backend or database needed; submissions show up
   there and Netlify can email you when one comes in (Forms → Settings → notifications).
4. Buy the domain whenever you're ready and point it at the Netlify site — no code changes
   needed.

## What's built

- `/` — the toggle between Travelling and Chandelling
- `/travel` — home, `/travel/visa-services`, `/travel/apply` (the lead form),
  `/travel/hotels`, `/travel/about`, `/travel/contact`
- `/chandelling` — single page for now, structured so it's easy to split into more pages
  once you've got the details from your dad

## What's intentionally left out for v1

No login, no payments, no admin dashboard, no database — matches what you asked for.
The apply and contact forms just email straight to Netlify Forms. If you add an admin
dashboard or accounts later, none of the existing pages need a rewrite to support it.
