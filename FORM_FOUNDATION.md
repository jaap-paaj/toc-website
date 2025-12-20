# FORM_FOUNDATION.md

## Purpose

Defines **hard contracts** for form-related components. These components enforce layout, spacing, and typography so pages remain thin.

## Components

### FormPanel

* Wrapper for full form column
* Enforces:

  * `stackXl`
  * `rounded-panel`
  * `shadow-panel`
* Pages must not add spacing or styling inside

### FormSection

* Semantic grouping of inputs
* Enforces:

  * Internal `stackMd`
  * Header layout (title + optional description)
* Typography handled internally

### FormField

* Wraps label, description, and control
* Enforces input spacing and accessibility

## Prohibitions

* No layout divs inside pages
* No spacing utilities in pages
* No manual headers inside form sections