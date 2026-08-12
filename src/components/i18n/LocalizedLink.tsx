"use client";

import Link from "next/link";
import { useLocale } from "@/lib/i18n/useLocale";
import { useLocalizedHref } from "@/lib/i18n/LocalePathsProvider";

/**
 * Drop-in replacement for next/link that resolves an unprefixed content href
 * into a real path for the current locale — translating it first where the
 * page lives at a different path per language, then prefixing.
 */
export function LocalizedLink(props: React.ComponentProps<typeof Link>) {
  const lang = useLocale();
  const localize = useLocalizedHref();
  const href =
    typeof props.href === "string" ? localize(props.href, lang) : props.href;
  return <Link {...props} href={href} />;
}
