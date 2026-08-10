"use client";

import { Suspense } from "react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";
import { i18n, type Locale } from "@/lib/i18n/config";
import { useLocale } from "@/lib/i18n/useLocale";
import { useBlogSlugPairs } from "@/lib/i18n/BlogSlugPairs";
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
  const blogSlugPairs = useBlogSlugPairs();

  function getLocalizedPath(locale: Locale): string {
    // Replace the current locale segment with the new one
    const segments = pathname.split("/");
    if (i18n.locales.includes(segments[1] as Locale)) {
      const from = segments[1] as Locale;

      // A blog post's slug is translated, so the same post sits at a different
      // path per language. Swapping only the locale segment would send the
      // visitor to a slug that does not exist in the target language — a 404
      // on the one button whose whole job is not to lose the reader.
      if (segments[2] === "blog" && segments[3]) {
        const pair = blogSlugPairs.find((p) => p[from] === segments[3]);
        if (pair) segments[3] = pair[locale];
      }

      segments[1] = locale;
    }
    const path = segments.join("/") || `/${locale}`;
    const qs = searchParams.toString();
    return qs ? `${path}?${qs}` : path;
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
