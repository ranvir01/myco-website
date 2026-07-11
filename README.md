# MyConsulting Network

Corporate site for **MyConsulting Network** ([myconsulting.network](https://myconsulting.network)) — a two-sided marketplace connecting businesses with consulting talent.

**Hosted on:** Google Cloud Run (Docker + Cloud Build)

## What it is

- Next.js + TypeScript + Tailwind marketing site
- 3D network globe hero (Three.js / React Three Fiber)
- Business / Talent mode toggle, quote modal, Framer Motion scroll UX
- Partner referral financial model docs and calculators in-repo

## Honest note on "AI" UI labels

Some components use an `AI` prefix for UX polish (greetings / styled CTAs). They are **not** in-app LLM features. AI-assisted work on this project was in design and build tooling, with human ownership of the product.

## Stack

- Next.js 14 (App Router), TypeScript, Tailwind CSS
- Framer Motion, Three.js / React Three Fiber
- React Hook Form + Zod

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy

See `START_DEPLOYMENT_HERE.md` and the Cloud Run / Docker docs in this repo.
