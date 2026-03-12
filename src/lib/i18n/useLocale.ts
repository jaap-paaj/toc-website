"use client";

import { usePathname } from "next/navigation";
import { i18n, type Locale } from "./config";

/**
 * Extracts the current locale from the URL pathname.
 * Returns the default locale if none is found.
 */
export function useLocale(): Locale {
  const pathname = usePathname();
  const segment = pathname.split("/")[1];
  if (i18n.locales.includes(segment as Locale)) {
    return segment as Locale;
  }
  return i18n.defaultLocale;
}

/**
 * Prefixes a path with the current locale.
 * Handles paths that already have a locale prefix.
 */
export function localizeHref(href: string, lang: Locale): string {
  // Don't prefix anchors, external URLs, or already-prefixed paths
  if (href.startsWith("#") || href.startsWith("http") || href.startsWith("mailto:")) {
    return href;
  }

  // Strip existing locale prefix if present
  for (const locale of i18n.locales) {
    if (href.startsWith(`/${locale}/`) || href === `/${locale}`) {
      href = href.slice(locale.length + 1) || "/";
      break;
    }
  }

  // Prefix with current locale
  if (href === "/") return `/${lang}`;
  return `/${lang}${href}`;
}
