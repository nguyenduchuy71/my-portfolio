# Portfolio — Huy Nguyen Duc

Personal portfolio for a backend engineer, built with Next.js. Static-rendered,
zero client-side JavaScript beyond React hydration, and themed after the
coconut countryside of Bến Tre in the Mekong Delta.

## Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS 3 |
| Rendering | Fully static — every route prerendered |
| Deploy | Vercel, gated by GitHub Actions |

## Running locally

```bash
npm install
npm run dev      # http://localhost:3000
```

Other scripts:

```bash
npm run build      # production build
npm run start      # serve the production build
npm run typecheck  # tsc --noEmit
npm run lint       # next lint
```

## Project structure

```
app/
├── layout.tsx            # metadata, JSON-LD mount
├── page.tsx              # section composition
├── globals.css           # Tailwind layers + blueprint grid
├── icon.tsx              # favicon (generated)
├── apple-icon.tsx        # home-screen icon (generated)
├── opengraph-image.tsx   # 1200x630 share card (generated)
├── sitemap.ts robots.ts manifest.ts
components/
├── brand/
│   ├── monogram-mark.tsx    # coconut palm logo
│   ├── project-glyph.tsx    # 10 architecture diagrams
│   └── glyph-registry.ts    # glyph key -> component
├── sections/                # one component per page section
├── person-json-ld.tsx       # schema.org Person
├── site-nav.tsx site-footer.tsx section-heading.tsx
lib/
└── portfolio-content.ts     # ALL copy and data
```

## Editing content

Everything the site says lives in `lib/portfolio-content.ts` — profile, work
history, projects, skills, certificates, education, SEO keywords. Edit that one
file; no component changes needed.

Before deploying to a custom domain, update `siteUrl` at the top of that file.
Canonical URLs, Open Graph tags and the sitemap all derive from it.

## Design system

Palette drawn from the Mekong Delta and checked against WCAG AA — every text
colour clears 4.5:1 on the cream ground.

| Token | Hex | Role | Contrast |
|---|---|---|---|
| `ink` | `#33251a` | coconut husk — body text | 13.7:1 |
| `muted` | `#7a6a58` | palm fibre — secondary text | 4.8:1 |
| `paper` | `#faf6ef` | coconut flesh — page ground | — |
| `accent` | `#537b44` | rice paddy green | 4.6:1 |
| `river` | `#387b70` | jade river | 4.6:1 |
| `line` | `#cab79a` | woven rattan — hairlines | — |

The logo is a coconut palm; each project card carries a hand-drawn SVG
schematic of how that system actually moves data, rather than stock imagery.

## SEO

- Full metadata with title template, canonical URL and keywords
- Open Graph + Twitter card, with a generated 1200x630 image
- `schema.org/Person` JSON-LD: job title, skills, credentials, employment
  history, education, linked repositories
- Generated `sitemap.xml`, `robots.txt` and web manifest
- Screen-reader `h1` naming role, seniority and location

## Deployment

Pushes to `main` run typecheck, lint and production build via GitHub Actions
(`.github/workflows/ci.yml`). Vercel deploys from `main` once CI is green.

## License

MIT
