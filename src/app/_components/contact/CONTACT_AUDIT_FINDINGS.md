# CONTACT AUDIT — FINDINGS

## Canon references
- **Page header patterns**: `src/app/_components/contact/modules/ContactHeroModule.tsx:16-21` (Current implementation needing adjustment).
- **Card pattern reference for Details**: `src/components/sections/EditorialCardGridSection.tsx` (inferred from `EducateTrainingCatalogModule.tsx:38`).
- **Spacing / rhythm rules**: `src/app/_components/home/HomeModule.tsx` (Reference for `spacing="compact"` vs `spacing="standard"`).
- **Typography/uppercase rule**: New requirement to be enforced on all Contact page titles and CTAs.

## Problems

- **ID**: HEADER-01
- **What**: Header text is Center-Aligned, not Left-Aligned.
- **Evidence**: `ContactHeroModule.tsx:16` -> `className={cn("flex flex-col items-center", ...)}`
- **Why**: Violates new goal "left-aligned".

- **ID**: HEADER-02
- **What**: Header title "Contact" is not ALL CAPS.
- **Evidence**: `ContactHeroModule.tsx:19` -> `Contact`
- **Why**: Violates new rule "ALL titles... must be ALL CAPS".

- **ID**: FORM-01
- **What**: Form section uses center-aligned "floating" layout.
- **Evidence**: `ContactFormModule.tsx:62` -> Grid with spacers `grid lg:grid-cols-[1fr_minmax(auto,640px)_1fr]`. `SectionHeader` at line 73 has `align="center"`.
- **Why**: Violates goal "no center-aligned 'floating' feel". Should likely align left or use a standard grid column.

- **ID**: FORM-02
- **What**: Form section title "Send us a message" is not ALL CAPS.
- **Evidence**: `ContactFormModule.tsx:70` -> `title="Send us a message"`
- **Why**: Violates new rule "ALL titles... must be ALL CAPS".

- **ID**: DETAILS-01
- **What**: Details section uses generic `Surface variant="card"` instead of explicit AI Training pattern.
- **Evidence**: `ContactDetailsModule.tsx:25` -> `<Surface variant="card" ...>`
- **Why**: User specifically requested "preferably the AI TRAINING card pattern" (which is `EditorialCardGridSection`).

- **ID**: DETAILS-02
- **What**: Details section title "Details" is not ALL CAPS.
- **Evidence**: `ContactDetailsModule.tsx:16` -> `title="Details"`
- **Why**: Violates new rule "ALL titles... must be ALL CAPS".

## Proposed change map

### `ContactHeroModule`
- **Change**: Remove `items-center` and `text-center`. Align content to left.
- **Change**: Uppercase content: "CONTACT".
- **Reuse**: existing `HomeModule` configuration (`tone="dark"`, `spacing="compact"`).

### `ContactFormModule`
- **Change**: Remove spacer grid. Use standard `HomeModule` container or a simple 2-column grid if needed, or just a full-width container with a max-width constraint that is *left-aligned* (not `mx-auto`).
- **Change**: Switch `SectionHeader` to `align="left"`.
- **Change**: Uppercase title: "SEND US A MESSAGE".
- **Change**: Uppercase "GET IN TOUCH" eyebrow? (Verify if strict rule applies to eyebrow, but definitely title).

### `ContactDetailsModule`
- **Change**: Uppercase title: "DETAILS".
- **Change**: Refactor to use `EditorialCardGridSection` if possible, OR styling that mimics it (minimalist, possibly no white background card if that's the style, or specific border treatment). `EditorialCardGridSection` expects a list of items (`title`, `description`). The current content (Address, Legal) might not fit perfectly into that strict shape without hacking.
    - **Alternative**: Manually style the `Surface` to match the *visuals* of `EditorialCardGridSection` (likely less padding, specific typography) while keeping the flexibility of custom JSX content.
    - **Recommendation**: Manually align styling to key characteristics of AI Training cards (likely `border-border/40`, specific aspect ratio or typography) but keep the custom content structure which is required for multi-line address/legal data. Or, create a new `EditorialCard` primitive if one doesn't exist, but "Audit only" prevents creating new files. Best approach: Mimic the style using `Surface` classes.

### Shared
- **Check**: Ensure `HomeFooterCtaModule` is compatible (it's shared, so we shouldn't modify it just for this page unless it violates the ALL CAPS rule, in which case we might need a prop or just accept it as a shared module exception). *Correction*: "ALL titles and CTA labels must be ALL CAPS across Contact page". If `HomeFooterCtaModule` has a Title/Button, we might need to pass overrides if supported, or just flag it. `HomeFooterCtaModule` typically has hardcoded text.
