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
