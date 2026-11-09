# Hearth logo retrofit (v3 mark): ready list

**2026-11-09.** The v3 Hearth mark is drawn in the Hearth app repo (`C:\Users\chase\HearthApp`, branch `design/v3-logo`, not yet committed). `scripts/brand/brand.mjs` generates it into `assets/brand/hearth-{ember,light,qiw}-{mark,icon}.{svg,png}`. **Start this retrofit when Chase calls the mark final and that branch is merged.** Never hand-edit the mark: change it in `brand.mjs`.

## 1. The app
`design/v3-logo` already covers the app icons, favicon, `Logo` component and welcome screen (its `assets/brand/README.md` lists every spot). The steps are: commit, open a PR, and wait for Chase's "merge". Then rebuild app.hearthqiw.online (`npm run app:web`, then `npm run app:publish`), which also needs his OK.

## 2. hearthqiw.online (this folder)

| File here | Shown on | Replace with (from `HearthApp/assets/brand/`) |
|---|---|---|
| `hearth/mark-ember.svg` | dark-mode header on /hearth/, /privacy/, /terms/, /support/; the Hearth card on the QIW homepage (48 px) | `hearth-ember-mark.svg` |
| `hearth/mark-light.svg` | light-mode header, same four pages | `hearth-light-mark.svg` |
| `hearth/favicon.svg` | browser tab on the four Hearth pages | the icon SVG (check it reads at 16 px) |
| `hearth/apple-touch-icon.png` | iPhone home screen, 180 × 180 | `HearthApp/public/apple-touch-icon.png` (180) |
| `hearth/og-image.png` | link previews (today 1024 × 1024) | re-render with the new mark; 1200 × 630 is the usual preview size |

**Check before publishing:**
- The new SVGs keep the same `viewBox` proportions as the old ones (the header sizes them by height).
- Hearth's pages keep Hearth's warm look. The cross is gold, never red.
- Hearth's accent is now Crimson `#990000` (HearthApp brand README). The QIW pages stay Cardinal `#C41E3A`.
- Preview with `qiw-site` (port 4350) at 390 px and 1280 px, in light and dark.

**Publish:**
1. Run `node tools/sync-to-hearthqiw.mjs <clone of hearth-qiw/site>`.
2. Commit only the files that really changed. The clone shows line-ending-only diffs on a few CSS and SVG files; discard those.
3. Push `main` with Chase's OK. It's the live site.

## 3. Elsewhere
- **Base44 QIW Hub:** the Hearth section's logo, if it shows the old mark (`../base44/qiw-hub-retrofit.md`).
- **App Store:** the listing and screenshots (`HearthApp/docs/V3_STORE_LISTING.md`, `npm run store:shots`).
- **QIW brand kit** (`../brand/`): only if a Hearth lockup is added there.
