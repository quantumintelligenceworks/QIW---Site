# QIW — Production Website (v1)

The public marketing site for **QIW — Quantum Intelligence Works** (legal entity: Quantum
Intelligence Works LLC). One job: turn a cold-email prospect into a 15-minute discovery call.

**Live goal:** sell custom websites, web apps, and business infrastructure to local businesses
across Chicago, West Palm Beach, and Northwest Indiana.

---

## What this is

A hand-built **static site** — plain HTML + CSS, **no build step, no JavaScript framework**.
Open any `.html` file in a browser and it works. This is intentional (see
`../docs/ADR-stack-and-hosting.md`): zero toolchain = the most reliable way to host on
GitHub Pages and the easiest for a non-developer to edit later.

## Pages

| File | URL | Purpose |
|---|---|---|
| `index.html` | `/` | Hero, problem, 3 services, how-it-works, CTA |
| `services.html` | `/services.html` | Three service deep-dives + CTA |
| `contact.html` | `/contact.html` | Intake form (Formspree) + direct email & phone |
| `404.html` | any missing page | On-brand error page |

## Services offered (rebranded 2026-06-10 — QIW, build-focused)

1. **Website Build** — Custom Websites
2. **App Build** — Web Apps & Internal Tools
3. **Business Infrastructure** — Infrastructure & Integrations

> These are the v1 offerings. Add or change services by editing the cards in `index.html`
> and the deep-dives in `services.html`. See `../docs/LAUNCH_RUNBOOK.md`.

## File layout

```
site/
├── index.html          # homepage
├── services.html       # services page
├── contact.html        # contact page (email + phone)
├── 404.html            # custom error page (styles inlined)
├── robots.txt          # allows all, points to sitemap
├── sitemap.xml         # 3 indexable URLs
├── assets/
│   ├── qiw-crest.png   # the heraldic crest (hero mark + OG fallback)
│   └── og-image.svg    # 1200×630 social card master (export to PNG — see runbook)
└── styles/
    ├── tokens.css      # all design tokens (colors, type, spacing, motion) — from docs/design-system.md
    ├── reset.css       # minimal reset
    ├── global.css      # base element styles
    └── components.css  # nav, hero, cards, footer, contact, etc.
```

## Brand rules (do not break)

- **Colors:** Quantum Black `#0A0A0A`, Cardinal Red `#A32638`, Hunter Green `#003A2B`,
  plus neutrals Paper `#F5F5F2` and Fog `#C8C8C8`. **No other colors.** Dark canvas only.
- **Fonts:** Space Grotesk (headings) + IBM Plex Sans (body). Never Inter or Roboto.
- **Never name the founders** on the public site.
- No pricing, testimonials, team/about page, blog, pop-ups, or chat widgets in v1.

## Contact details on the site

- Email: `quantumintelligenceworks@gmail.com`
- Sales phone: `(219) 323-5295`
- Business phone: `(219) 608-4623`
- Intake form: Formspree endpoint `https://formspree.io/f/xojznjqy` (plain HTML POST
  fallback + `@formspree/ajax` CDN enhancement on `contact.html`)

To change them, search-and-replace the values across the three HTML files. They appear in
the footer of every page, the contact page, and the JSON-LD block in `index.html`.

## Local preview

No tooling required — double-click `index.html`. For clean relative links you can also run
the included PowerShell server from the repo root:

```powershell
powershell -ExecutionPolicy Bypass -File serve-site.ps1   # serves http://localhost:4173
```

## Deploy

GitHub Pages. Full step-by-step (including DNS values for `quantumai.io`) is in
`../docs/LAUNCH_RUNBOOK.md`.
