# Minara Interview Wrapup

Personal showcase website for a DevRel / Technical Operations candidate targeting Minara.

## What this site includes

- `Resume` — data-driven bilingual resume rendered from `data/resume.json`
- `Projects` — case-study pages for two runnable demos:
  - `Minara API Developer Cookbook`
  - `Card-to-Autopilot PoC`
- `JD Fit` — maps the candidate's evidence to Minara's 4 role pillars
- `Automation` — OpenClaw × Minara operations automation module library
- `Contact` — fast contact page for recruiter / hiring manager follow-up

## Tech stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS 4
- Data-driven content from `data/*.json` and `data/site.ts`

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build

```bash
npm run build
```

## Content files

- `data/site.ts` — site metadata, nav, footer, CTAs
- `data/resume.json` — resume content
- `data/projects.json` — project list + case-study content
- `data/jd.json` — JD pillars, evidence chips, KPI suggestions
- `data/automationModules.json` — OpenClaw module library grouped by pillar

## Deployment

This site is Vercel-friendly.

```bash
vercel
```

A placeholder `public/resume.pdf` is included so the resume download CTA works out of the box.
