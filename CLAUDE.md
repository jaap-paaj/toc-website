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

### Content structure

Content files export `Record<Locale, { ... }>` objects with sections. Modules import content and pass it to section components. Content primitives: `eyebrow`, `title`, `intro`, `description`, `items[]`, `cta { label, href }`.

### i18n pattern

- Default locale: `nl`
- All content in `src/app/_content/*.ts` as `{ nl: {...}, en: {...} }`
- Modules call `useLocale()` and index into content: `const { hero } = homeContent[lang]`
- Blog falls back to English if locale version missing

## Validation

Before any commit, run:

```bash
npm run validate
```

This runs: ESLint → TypeScript check → all 12 design system audits.

Individual audits: `npm run audit:typography`, `audit:surfaces`, `audit:spacing`, `audit:states`, `audit:color`, `audit:theme`, `audit:pages`, `audit:content-shape`, `audit:card-canon`, `audit:legacy-heights`, `audit:layout-rhythm`.

**If an audit fails: fix the violation. Never bypass with comments or allowlist hacks unless there's a genuine architectural exception.**

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
