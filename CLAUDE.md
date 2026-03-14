# TOC Website — The Only Constant

## Who You're Working With

Jaap is a design system architect who builds production websites using Claude Code. He thinks in systems, not pages. Communication in Dutch is preferred. He ships fast and expects design system compliance on every change.

## Stack

- **Next.js 16** (App Router, Turbopack, `[lang]` dynamic routing)
- **TypeScript 5** (strict mode)
- **Tailwind CSS v4** with design tokens — no raw utilities in components
- **React 19** with Radix UI primitives
- **i18n**: Dutch (default) + English, content in `src/app/_content/*.ts`

## The #1 Rule

**Never use raw Tailwind utilities for typography, spacing, surfaces, or colors in components.** Always use design system tokens. The audit pipeline will catch violations and block commits.

## Design System Tokens

All tokens live in `src/design-system/tokens/`. Import and use these — never inline equivalents.

| Concern | Token file | Example usage |
|---------|-----------|---------------|
| Typography | `typography.ts` | `typography.variants.body.md`, `typography.variants.heading.card` |
| Spacing | `spacing.ts` | `spacing.modulePad.m`, `spacing.stackLg`, `spacing.component.cardTitle` |
| Surfaces | `surfaces.ts` | `<Surface variant="card" cardHeight="standard">` |
| Colors | `colors.ts` + `globals.css` | Semantic only: `text-foreground`, `bg-muted`, `text-muted-foreground` |
| Layout | `layout.ts` | `layout.splitHero`, `layout.splitBalanced` |

### What's banned (audits enforce this)

- Raw `text-sm`, `font-bold`, `leading-tight`, `tracking-wide`, `uppercase` → use `typography.variants.*`
- Raw `py-12`, `mt-8`, `gap-6` in modules → use `spacing.modulePad.*` or `spacing.stack*`
- Raw `rounded-lg`, `shadow-md` → use `<Surface variant="...">` or `rounded-surface`, `shadow-surface`
- Raw hex colors `#fff`, `rgb()`, Tailwind palette `text-gray-500` → use semantic tokens
- `dark:` prefix → use tone system (`.tone-light`, `.tone-dark`, `.tone-brand`)
- Grid utilities in `page.tsx` files → pages are thin wrappers, no layout

## Architecture

### Page composition pattern

```
page.tsx (thin, no styling)
  → {Feature}Page.tsx (composes modules)
    → {Feature}{X}Module.tsx (owns content + internal rhythm)
      → Section components (owns grid/layout)
        → Design system components (owns styling)
```

### File locations

| What | Where |
|------|-------|
| Pages | `src/app/[lang]/{feature}/page.tsx` |
| Page components | `src/app/_components/{feature}/{Feature}Page.tsx` |
| Modules | `src/app/_components/{feature}/modules/` |
| Content (i18n) | `src/app/_content/{feature}.ts` |
| Section components | `src/components/sections/` |
| Card components | `src/components/cards/` |
| Design system | `src/design-system/{tokens,components}/` |
| Blog posts | `content/blog/{en,nl}/{slug}/post.md` |
| i18n utilities | `src/lib/i18n/` |
| Audit scripts | `scripts/` |
| Visual tests | `e2e/visual.spec.ts`, `playwright.config.ts` |
| Visual baselines | `e2e/__screenshots__/{desktop,mobile}/` |

### Content structure

Content files export `Record<Locale, { ... }>` objects with sections. Modules import content and pass it to section components. Content primitives: `eyebrow`, `title`, `intro`, `description`, `items[]`, `cta { label, href }`.

### i18n pattern

- Default locale: `nl`
- All content in `src/app/_content/*.ts` as `Record<Locale, { ... }>` with `en` and `nl` branches
- Blog posts in `content/blog/{en,nl}/{slug}/post.md` — both locales have full translations; falls back to English if NL version missing
- **Server components** receive `lang` as prop from the page (`params.lang`) and index into content: `featureContent[lang].section`
- **Client components** use `useLocale()` hook — **never use `useLocale()` in server components**
- Page metadata: use `generateMetadata()` with `params.lang` for localized `<title>` (see `about/page.tsx`)
- `LocalizedLink` auto-prefixes hrefs with current locale
- Date formatting: `toLocaleDateString()` with `nl-NL` or `en-GB` based on locale

## Validation

Before any commit, run:

```bash
npm run validate
```

This runs: ESLint → TypeScript check → all 12 design system audits.

Individual audits: `npm run audit:typography`, `audit:surfaces`, `audit:spacing`, `audit:states`, `audit:color`, `audit:theme`, `audit:pages`, `audit:content-shape`, `audit:card-canon`, `audit:legacy-heights`, `audit:layout-rhythm`.

**If an audit fails: fix the violation. Never bypass with comments or allowlist hacks unless there's a genuine architectural exception.**

## Visual Regression Tests

Playwright screenshot tests compare every page (both locales, desktop + mobile) against committed baselines.

```bash
npm run test:visual          # Compare against baselines (fails on diff)
npm run test:visual:update   # Regenerate baselines after intentional changes
npm run test:visual:report   # Open HTML report with side-by-side diffs
```

- Tests run against a production build (`next build && next start`), not dev server
- 60 screenshots: all pages × 2 locales × 2 viewports (1440px desktop, 375px mobile)
- Includes all 4 AI Opportunity Scan hero variants per locale
- Booking page iframe is masked (Google Calendar content changes daily)
- Baselines live in `e2e/__screenshots__/` and are committed to git
- **Not part of `npm run validate`** — separate concern, run when making visual changes
- After updating baselines, commit the new screenshots alongside the code change

## Canonical Documentation

These canons in the project root define the system contracts. Read them when working in their domain:

- `ARCHITECTURE.md` — Ownership boundaries, module rules, seam ownership
- `SCALES_CANON.md` — Typography, spacing, elevation contracts (LOCKED)
- `CONTENT_STRUCTURE_CANON.md` — Content primitives, ownership model (LOCKED)
- `CARD_CANON.md` — Card height governance, Surface ownership
- `COMPONENT_STRUCTURE_CANON.md` — Component organization patterns
- `BRAND_PROFILE.md` — Brand definitions

## Git Workflow

- Feature branches → merge to `preview` → merge to `main` (production)
- Conventional commits: `feat:`, `fix:`, `chore:`, `refactor:`, `content:`
- Always validate before committing
- Never force push

## Skills

- `/audit` — Run all audits, fix violations automatically
- `/ship-preview` — Validate → commit → merge to preview
- `/ship-main` — Merge preview to main (production, requires approval)
