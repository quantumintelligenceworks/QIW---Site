# Handoff: QIW company site on hearthqiw.online, with Hearth as the first product

**2026-11-08. Start here in a fresh session, then say "build the site".** Read `site/CLAUDE.md` first (website rules), then this file. Work lean: read only what each step needs.

## Decided (Chase, 2026-11-08)

1. **hearthqiw.online becomes the QIW company site.** Hearth moves to a product page at **/hearth/**.
2. **The homepage shows products and services:** a QIW intro, then **Products** (Hearth first, with room for more apps later), then the three build lanes (Website Build, App Build, Business Infrastructure), then Contact.
3. **Build in this folder (`QuantumAI/site`)** and make it fit future apps and the company's presence: one shared header and footer, and a products section that new apps can join with one card and one page each.

## Must not break

- **/privacy/, /terms/ and /support/** stay at exactly these addresses: the App Store listing, the Hearth app and the V3 store drafts point to them. They remain Hearth's pages (Hearth's Privacy Policy, Terms and Support), reachable from /hearth/ and the footer.
- **app.hearthqiw.online** (the Hearth web app) is a separate repo (`hearth-qiw/hearth-web`). Don't touch it.
- The **CNAME** file (hearthqiw.online) and **.nojekyll** in the live repo.
- The contact address is **hello@hearthqiw.online**.

## Where things are

| What | Where |
|---|---|
| Live hearthqiw.online | GitHub Pages from **`hearth-qiw/site`**, branch `main` (last push 2026-10-19). Files: `index.html` (Hearth landing), `privacy/`, `terms/`, `support/`, `404.html`, `style.css`, `og-image.png`, `favicon.svg`, `apple-touch-icon.png`, `mark-ember.svg`, `mark-light.svg`, `robots.txt`, `sitemap.xml`, `CNAME`, `.nojekyll`. Footer: "© 2026 Hearth · made by Quantum Intelligence Works LLC". |
| QIW website source | **this folder**: `index.html`, `services.html`, `contact.html`, `404.html`, `styles/` (tokens in `styles/tokens.css`), `assets/`, `robots.txt`, `sitemap.xml`; deploy notes in `README.md` ("Deploy") |
| Copy and design rules | `../docs/copy-brief.md` (don't invent company copy), `../docs/design-system.md`, `../docs/site-architecture.md`, `../docs/qa-checklist.md` |
| Final QIW logos | `../brand/qiw-brand-assets/` (final crest 2026-10-22, lockups, emblem, wordmark, favicons, og-image; README says which file goes where) |
| Hearth words for /hearth/ | the live `index.html` of `hearth-qiw/site`, and `C:\Users\chase\HearthApp\docs\V3_STORE_LISTING.md` (name, subtitle, description) |

## Rules to keep

- **Never name the founders.** No pricing, testimonials or AI-service copy. Keep the public offer to websites, apps and business infrastructure, plus products (Hearth).
- **Hearth's words:** "Lift" (never "pray" or "prayer"), "Reflection" and "Companion" (never "therapy"), the cross is gold (never red). Its launch is the App Store, January 1, 2027 (say "coming to the App Store", without a date, unless Chase approves the date).
- Cinzel and Inter, mobile-first (390, 768, 1280), WCAG AA, real meta tags and Open Graph on every page, semantic HTML, motion 200 to 400 ms ease-out, sub-2-second load.
- **Two colour questions to settle with Chase before styling** (don't guess):
  - `site/CLAUDE.md` says Crest Red `#C01F2E` is the CTA colour, but the final brand kit (`../brand/qiw-brand-assets/README.md`) reserves Crest Red for artwork and uses Cardinal Red `#C41E3A` for buttons and links.
  - Should the /hearth/ page keep Hearth's own look (ember mark, warm colours) inside the QIW frame, or use the QIW palette?
- `site/CLAUDE.md` rule 4 ("Tier 1A services only") predates this decision: the Products section is approved as of 2026-11-08.

## Steps

1. Pull a copy of the live `hearth-qiw/site` into a working branch (keep it as the fallback).
2. Settle the two colour questions with Chase.
3. Build: `/` (QIW home: intro, Products with the Hearth card, the three build lanes, Contact), `/hearth/` (from the current Hearth homepage), `/services/` and `/contact/` (from this folder), and keep `/privacy/`, `/terms/`, `/support/` and `404`. One shared header (QIW lockup) and footer, with Hearth's legal links in the footer.
4. Update `sitemap.xml`, `robots.txt`, Open Graph images (QIW og-image for the company pages, Hearth's for /hearth/), favicons from the brand kit.
5. QA at 390, 768 and 1280 px, and Lighthouse 90+ on every page. Check /privacy/, /terms/ and /support/ still load.
6. **Show Chase a preview. Publish to `hearth-qiw/site` only with his OK** (it's the live public site); then check hearthqiw.online and those three Hearth addresses after GitHub Pages updates (about 10 minutes).
