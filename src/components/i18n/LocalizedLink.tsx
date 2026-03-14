"use client";

import Link from "next/link";
import { useLocale, localizeHref } from "@/lib/i18n/useLocale";

/**
 * Drop-in replacement for next/link that auto-prefixes hrefs with the current locale.
 * Handles anchors, external URLs, and already-prefixed paths gracefully.
 */
export function LocalizedLink(props: React.ComponentProps<typeof Link>) {
  const lang = useLocale();
  const href =
    typeof props.href === "string" ? localizeHref(props.href, lang) : props.href;
  return <Link {...props} href={href} />;
}
