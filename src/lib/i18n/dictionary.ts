import type { Locale } from "./config";

/**
 * Picks the right locale branch from a `{ en: ..., nl: ... }` content object.
 */
export function t<T>(dict: Record<Locale, T>, locale: Locale): T {
  return dict[locale];
}
