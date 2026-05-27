# veloci-web

Marketing site for **Veloci** — the agile workspace built for shipping. Next.js 15 + Tailwind v3 + shadcn-style components. Deploys to Vercel free tier.

## Stack

- Next.js 15 (App Router, RSC)
- React 19
- TypeScript 5
- Tailwind CSS 3
- shadcn/ui-style components (copied in, no runtime)
- lucide-react for icons

## Local dev

```bash
npm install
cp .env.example .env.local
npm run dev
# http://localhost:3000
```

## Deploy to Vercel (free)

Vercel's Hobby tier is free forever for personal projects — no card needed. Two ways:

### Option A — push to GitHub, import in dashboard (recommended)

1. Push this repo to GitHub (any name, e.g. `veloci-web`).
2. Go to [vercel.com/new](https://vercel.com/new) → **Sign in with GitHub** (free).
3. Click **Import** next to `veloci-web`. Vercel auto-detects Next.js — leave every default as-is.
4. Open **Environment Variables** and add:
   - `NEXT_PUBLIC_SITE_URL` → e.g. `https://veloci-web.vercel.app` (Vercel will tell you the URL; you can come back and update after the first deploy)
   - `NEXT_PUBLIC_APP_URL` → e.g. `https://app.veloci.app` (or your Cloudflare-tunneled dev URL for now)
5. Click **Deploy**. ~90 seconds later you get `https://veloci-web.vercel.app`.

Every `git push` to `main` triggers a production redeploy. Every push to any other branch gets a unique preview URL.

### Option B — Vercel CLI

```bash
npm i -g vercel
vercel login            # opens browser
vercel                  # first run: walks you through linking
vercel --prod           # promote to production
```

### Add your custom domain (once you buy one)

1. Buy `veloci.app` (or `.xyz`, etc.) at [Cloudflare Registrar](https://dash.cloudflare.com) — cheapest, no markup.
2. In Vercel: **Project → Settings → Domains → Add** → `veloci.app`.
3. Vercel shows you 1–2 DNS records to add. Add them in Cloudflare DNS (proxy off / "DNS only"). Wait ~1 min for SSL.
4. Update `NEXT_PUBLIC_SITE_URL=https://veloci.app` and redeploy.

### Free tier limits to know

- 100 GB bandwidth / month
- Unlimited deployments
- Unlimited preview URLs
- Custom domains: unlimited
- Vercel will email if you approach a limit; nothing breaks silently.

## Structure

```
app/
  layout.tsx          # root layout, fonts, metadata
  page.tsx            # the landing page
  globals.css         # Tailwind + design tokens
components/
  site/               # header, footer
  sections/           # hero, trust-band, features, ai-callout, comparison, pricing, cta
  ui/                 # button, card, badge (shadcn-style)
lib/
  utils.ts            # cn() helper
```
