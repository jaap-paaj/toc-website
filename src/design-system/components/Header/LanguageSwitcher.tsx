"use client";

import { Suspense } from "react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";
import { i18n, type Locale } from "@/lib/i18n/config";
import { useLocale } from "@/lib/i18n/useLocale";
import { useLocalePaths } from "@/lib/i18n/LocalePathsProvider";
import { typography } from "@/design-system/tokens/typography";

interface LanguageSwitcherProps {
  className?: string;
}

const labels: Record<Locale, string> = {
  nl: "NL",
  en: "EN",
};

function LanguageSwitcherInner({ className }: LanguageSwitcherProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentLocale = useLocale();
  const localePaths = useLocalePaths();

  function getLocalizedPath(locale: Locale): string {
    const segments = pathname.split("/");
    let path = pathname;

    if (i18n.locales.includes(segments[1] as Locale)) {
      const from = segments[1] as Locale;
      const rest = `/${segments.slice(2).join("/")}`;

      // Most pages share their path and only need the locale segment swapped.
      // Translated blog slugs and the answers section do not: the same page
      // sits at a different path per language, and swapping only the first
      // segment lands on a 404 — on the one button whose whole job is not to
      // lose the reader.
      const pair = localePaths.find((p) => p[from] === rest);

      segments[1] = locale;
      if (pair) segments.splice(2, segments.length - 2, ...pair[locale].split("/").slice(1));

      path = segments.join("/");
    }

    const qs = searchParams.toString();
    return qs ? `${path || `/${locale}`}?${qs}` : path || `/${locale}`;
  }

  return (
    <div className={cn("flex items-center gap-1", className)}>
      {i18n.locales.map((locale, i) => (
        <span key={locale} className="flex items-center">
          {i > 0 && (
            <span className="text-foreground/30 mx-1">/</span>
          )}
          {locale === currentLocale ? (
            <span
              className={cn(
                typography.variants.ui.nav.link,
                "text-foreground"
              )}
            >
              {labels[locale]}
            </span>
          ) : (
            <Link
              href={getLocalizedPath(locale)}
              className={cn(
                typography.variants.ui.nav.link,
                "text-foreground/50 hover:text-foreground transition-colors"
              )}
              onClick={() => {
                // Set cookie so middleware remembers the preference
                document.cookie = `NEXT_LOCALE=${locale};path=/;max-age=31536000`;
              }}
            >
              {labels[locale]}
            </Link>
          )}
        </span>
      ))}
    </div>
  );
}

export function LanguageSwitcher({ className }: LanguageSwitcherProps) {
  return (
    <Suspense>
      <LanguageSwitcherInner className={className} />
    </Suspense>
  );
}
