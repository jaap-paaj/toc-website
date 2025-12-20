# UI_FOUNDATIONS.md

## Purpose

Defines the **visual system**. This is the single source of truth for spacing, elevation, and radius. No component APIs or usage patterns are described here.

## Spacing System

### Single Paradigm: Gap-based Stacks

All vertical spacing is handled through flex + gap.

```ts
stackXs = "flex flex-col gap-2"
stackSm = "flex flex-col gap-3"
stackMd = "flex flex-col gap-4"
stackLg = "flex flex-col gap-6"
stackXl = "flex flex-col gap-8"
```

### Deprecated

* `space-y-*`
* `mt-*`, `mb-*` (except documented spacing exceptions)

---

## Elevation (Shadow Tiers)

| Tier   | Class            | Usage                  |
| ------ | ---------------- | ---------------------- |
| Tier 1 | `shadow-panel`   | Forms, controls        |
| Tier 2 | `shadow-surface` | Cards, previews, pages |

No ad-hoc shadows allowed.

---

## Radius Tiers

| Tier   | Class             | Usage               |
| ------ | ----------------- | ------------------- |
| Tier 1 | `rounded-panel`   | Standard components |
| Tier 2 | `rounded-surface` | Large containers    |