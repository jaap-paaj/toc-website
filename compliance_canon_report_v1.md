# Canon Compliance Report (v1)

## Summary
- Total Modules: 25
  - ✅ Compliant: 15
  - ⚠️ Partial: 4
  - ❌ Legacy: 6
- Total Sections: 6 (Active)
  - ✅ Compliant: 1
  - ⚠️ Partial: 3
  - ❌ Legacy: 2

---

## Modules (by page)

### Home
- ✅ `HomeHeroModule` — `src/app/_components/home/modules/HomeHeroModule.tsx`
  - Evidence: Owns layout tokens (`splitHero`), owns content, uses `HomeModule` wrapper.
- ✅ `HomeServicesModule` — `src/app/_components/home/modules/HomeServicesModule.tsx`
  - Evidence: Owns content `SERVICES_DATA`, pure composition of `ServicesSection`.
- ✅ `HomeClientsModule` — `src/app/_components/home/modules/HomeClientsModule.tsx`
  - Evidence: Owns content `CLIENT_LOGOS`, pure composition of `ClientsSection`.
- ⚠️ `HomeAboutModule` — `src/app/_components/home/modules/HomeAboutModule.tsx`
  - Evidence: 
    - Defines `grid grid-cols...` (Layout logic leak).
    - Defines `pt-2` (Spacing leak).
  - Canon Break: Module should not define reusable layout patterns (CONTENT_STRUCTURE_CANON).
- ❌ `HomeFooterCtaModule` — `src/app/_components/home/modules/HomeFooterCtaModule.tsx`
  - Evidence: 
    - Full section implementation inside module file (`rounded-surface`, `bg-hero`, `grid`).
  - Canon Break: Reusable UI layouts belong in Sections (COMPONENT_STRUCTURE_CANON 2.2).

### Educate
- ✅ `EducateHeroModule` — `src/app/_components/educate/modules/EducateHeroModule.tsx`
  - Evidence: Canon compliant hero composition.
- ❌ `EducateTrainingCatalogModule` — `src/app/_components/educate/modules/EducateTrainingCatalogModule.tsx`
  - Evidence: 
    - Defines local `TrainingGrid` component (Section logic).
    - Hardcoded grid/border logic in module.
  - Canon Break: Reusable UI layouts belong in Sections.
- ⚠️ `EducateWhyUsImageDuoModule` — `src/app/_components/educate/modules/EducateWhyUsImageDuoModule.tsx`
  - Evidence: 
    - Defines strict `grid` layout for images. 
    - Acceptable edge case for specific art direction, but borders on Section logic.
  - Canon Break: Modules should delegate layout to Sections.
- ✅ `EducateWhyUsModule` — `src/app/_components/educate/modules/EducateWhyUsModule.tsx`
  - Evidence: Composes `SectionHeader` and `FeatureGridSection`.
- ✅ `EducateTestimonialsModule` — `src/app/_components/educate/modules/EducateTestimonialsModule.tsx`
  - Evidence: Composes `TestimonialsSection`.

### Automate
- ✅ `AutomateHeroModule` — `src/app/_components/automate/modules/AutomateHeroModule.tsx`
  - Evidence: Canon compliant.
- ❌ `AutomateReadyToRunModule` — `src/app/_components/automate/modules/AutomateReadyToRunModule.tsx`
  - Evidence: 
    - Manually implements divider, `SectionHeader`, and `grid` of `Surface`s.
    - Code duplication of "Catalog/Grid" pattern.
  - Canon Break: Reusable UI layouts belong in Sections.
- ✅ `AutomateApproachModule` — `src/app/_components/automate/modules/AutomateApproachModule.tsx`
  - Evidence: Composes `FeatureGridSection`.
- ✅ `AutomateWhyUsModule` — `src/app/_components/automate/modules/AutomateWhyUsModule.tsx`
  - Evidence: Composes `FeatureGridSection`.

### Innovate
- ✅ `InnovateHeroModule` — `src/app/_components/innovate/modules/InnovateHeroModule.tsx`
  - Evidence: Canon compliant.
- ❌ `InnovatePropositionsModule` — `src/app/_components/innovate/modules/InnovatePropositionsModule.tsx`
  - Evidence: 
    - Manual implementation of Grid/Catalog pattern.
  - Canon Break: Reusable UI layouts belong in Sections.
- ❌ `InnovateSolutionsModule` — `src/app/_components/innovate/modules/InnovateSolutionsModule.tsx`
  - Evidence: 
    - Manual implementation of Grid/Catalog pattern.
  - Canon Break: Reusable UI layouts belong in Sections.
- ⚠️ `InnovateImageDuoModule` — `src/app/_components/innovate/modules/InnovateImageDuoModule.tsx`
  - Evidence: Same as `EducateWhyUsImageDuoModule`.
- ✅ `InnovateWhyUsModule` — `src/app/_components/innovate/modules/InnovateWhyUsModule.tsx`
  - Evidence: Composes `FeatureGridSection`.

### Contact
- ✅ `ContactHeroModule` — `src/app/_components/contact/modules/ContactHeroModule.tsx`
  - Evidence: Canon compliant.
- ✅ `ContactFormModule` — `src/app/_components/contact/modules/ContactFormModule.tsx`
  - Evidence: Unique composition of Form primitives. Accepted as Module responsibility.
- ⚠️ `ContactDetailsModule` — `src/app/_components/contact/modules/ContactDetailsModule.tsx`
  - Evidence: 
    - Manual grid implementation. Could be a generic `InfoGridSection`.
  - Canon Break: Reusable UI layouts belong in Sections.

---

## Sections (global list)

- ❌ `ServicesSection` — `src/components/sections/ServicesSection.tsx`
  - Evidence: 
    - Accepts `spacingPreset` (Layout ownership leak).
    - Owns `spacing.section.heroFollower` (Layout ownership leak).
  - Canon Break: Sections must not accept arbitrary spacing overrides (COMPONENT_STRUCTURE_CANON 4.3).

- ❌ `ClientsSection` — `src/components/sections/ClientsSection.tsx`
  - Evidence: 
    - `headingLabel` defaults to "Clients" (Hardcoded copy).
  - Canon Break: Sections must be copy-agnostic (CONTENT_STRUCTURE_CANON 2).

- ✅ `SectionHeader` — `src/components/sections/SectionHeader.tsx`
  - Evidence: Pure UI, accepts content props, no layout leaks.

- ⚠️ `FeatureGridSection` — `src/components/sections/FeatureGridSection.tsx`
  - Evidence: 
    - Contains `pt-3`, `pt-6` (Minor internal spacing leaks).
    - `group-hover` logic is bordering on too smart, but acceptable.
  - Canon Break: Layout ownership checks (minor).

- ⚠️ `TestimonialsSection` — `src/components/sections/TestimonialsSection.tsx`
  - Evidence: 
    - Accepts `pad` prop (Layout ownership leak).
  - Canon Break: Sections must not own external padding (COMPONENT_STRUCTURE_CANON 3).

- ⚠️ `TrainingCategorySection` — `src/components/sections/TrainingCategorySection.tsx`
  - Evidence: 
    - Hardcoded string "View Details" (Content leak).
    - Use of `mb-6` (Layout leak).
  - Canon Break: Hardcoded marketing copy (CONTENT_STRUCTURE_CANON 6).

---

## Refactor Queue (ordered)

### P0 — Must Fix (Canon Breaking)
1.  `HomeFooterCtaModule.tsx` — **Extract Section**. Only module defining a reused generic layout.
2.  `ServicesSection.tsx` — **Remove Spacing Logic**. `heroFollower` logic belongs in Module wrapper (`paddingTop="none"` on module).
3.  `ClientsSection.tsx` — **Remove Hardcoded Copy**. Default prop "Clients" must be removed.
4.  `EducateTrainingCatalogModule.tsx` — **Extract Section**. Defines `TrainingGrid` locally; duplicates `InnovatePropositionsModule`.
5.  `TrainingCategorySection.tsx` — **Remove Hardcoded copy**. "View Details" should be a prop or at least a constant.

### P1 — Should Fix (Drift Reduction)
1.  `InnovatePropositionsModule.tsx` — **Consolidate**. Duplicate of Catalog/Grid pattern.
2.  `InnovateSolutionsModule.tsx` — **Consolidate**. Duplicate of Catalog/Grid pattern.
3.  `AutomateReadyToRunModule.tsx` — **Consolidate**. Duplicate of Catalog/Grid pattern.
4.  `TestimonialsSection.tsx` — **Remove Pad Prop**. Control padding via `HomeModule`.

### P2 — Optional (Cleanup)
1.  `ContactDetailsModule.tsx` — Convert to generic `InfoGridSection`.
2.  `HomeAboutModule.tsx` — Convert nested grid to `SplitSection`.
