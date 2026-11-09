# QIW Website — Claude Code Instructions

> Loads only when working inside `site/`. Moved here from the root CLAUDE.md on 2026-11-08 so other projects in this folder don't pay for it. Doc paths below are relative to this folder (`../docs/`).

---

## Project Overview

**Company:** Quantum Intelligence Works LLC — public brand: **QIW (Quantum Intelligence Works)**, rebranded from QuantumAI on 2026-06-10  
**Tagline:** Engineering the Future of Intelligence  
**Site goal:** Convert cold-email prospects into discovery calls. Tier 1A services only on v1, presented publicly as three build lanes: **Website Build** (Custom Websites) · **App Build** (Web Apps & Internal Tools) · **Business Infrastructure** (Infrastructure & Integrations). The AI Automation Agent layer is internal/sales-only — it does not appear on the public site.

**2026-11-08 (Chase):** this site moves to **hearthqiw.online** and gains a **Products** section, with Hearth first at `/hearth/` (approved, despite rule 4 below). Start from `HANDOFF-company-site.md`.

---

## File Map (read these before writing code)

| File | Purpose |
|---|---|
| `site/CLAUDE.md` | This file. Master instructions for the website. |
| `../docs/design-system.md` | Brand tokens, typography, color, spacing, motion rules. The $10K checklist enforced as code rules. |
| `../docs/site-architecture.md` | Page map, component list, tech stack, GitHub/deploy pipeline. |
| `../docs/copy-brief.md` | All headline, body, and CTA copy for every section. Do not invent copy — pull from here. |
| `../docs/ADR-stack-and-hosting.md`, `../docs/qa-checklist.md`, `../docs/LAUNCH_RUNBOOK.md` | Stack decision, QA, launch steps. |

---

## Non-Negotiable Rules

1. **Brand palette** — Heraldic Green `#143D28` (primary brand), Deep Forest `#0D2417` (dark hero/section backgrounds), Cardinal Red `#C41E3A` (accent/CTA, buttons, links; Chase 2026-11-09), Crest Red `#C01F2E` (logo artwork only), Ink Black `#141414` (card surfaces), Quantum Black `#0A0A0A` (base background). Neutrals: Sage Mist `#E7EDE9`, fog `#C8C8C8`. No other colors.
2. **Cinzel** (display/headings, weights 500–700) + **Inter** (body/UI, weights 400–700). Both loaded from Google Fonts CDN. No Space Grotesk or IBM Plex Sans.
3. **Never name the founders** on any public-facing page.
4. **Tier 1A services only** on v1, shown publicly as Website Build / App Build / Business Infrastructure. No AI service copy on the public site. No testimonials, no pricing, no analytics section.
5. **Sub-2s load target.** No heavy JS frameworks unless justified. Prefer vanilla HTML/CSS/JS or Astro.
6. **WCAG AA contrast** on all text. Check before shipping any color combination.
7. **Semantic HTML.** Use `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>` correctly. No div soup.
8. **Real meta tags.** Every page needs `<title>`, `<meta name="description">`, Open Graph tags.
9. **Mobile-first.** Design for 390px viewport first. Desktop is the enhancement, not the base.
10. **Motion whispers.** No AOS. Custom CSS transitions only. Duration 200–400ms. Ease-out. Nothing bounces.

---

## Tech Stack (locked for v1)

- **Framework:** hand-rolled static multipage site (plain HTML + CSS, no build step) — per `../docs/ADR-stack-and-hosting.md`, which overrides the original Astro plan. Revisit Astro only past ~6 pages or if a blog is added.
- **Styling:** Plain CSS with custom properties (CSS vars). No Tailwind on this project.
- **Hosting:** GitHub Pages or Vercel (static)
- **Repo:** Push to GitHub. Branch `main` = production. Feature branches for all work.
- **No CMS** in v1. Content is hardcoded from `../docs/copy-brief.md`.

---

## Development Workflow

```
1. Read ../docs/design-system.md and ../docs/copy-brief.md before touching any component.
2. Build pages in this folder; all CSS custom properties live in styles/tokens.css.
3. Test on 390px, 768px, 1280px before marking anything done.
4. Run Lighthouse. Score ≥ 90 on Performance, Accessibility, Best Practices, SEO.
5. Commit with a clear message. Push to GitHub.
```

---

## What NOT to build in v1

- No blog
- No pricing page
- No testimonials section
- No team/about page naming founders
- No analytics dashboard
- No Tier 2 (quantum R&D) or Tier 3 (consulting) content
- No AI Automation Agent content — removed from the public lineup 2026-06-10; it remains an internal sales offering only
- No cookie banners, pop-ups, or chat widgets
