import type { Metadata, Viewport } from "next";
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";
import { CookieBanner } from "@/components/consent/CookieBanner";
import { Figtree } from "next/font/google";
import "../globals.css";
import { cn } from "@/lib/utils";
import { SmoothScrollAnchor } from "@/components/utils/SmoothScrollAnchor";
import { colors } from "@/design-system/tokens/colors";
import { StructuredData } from "@/components/seo/StructuredData";
import { i18n } from "@/lib/i18n/config";
import { getLocalePathPairs } from "@/lib/i18n/localePaths";
import { LocalePathsProvider } from "@/lib/i18n/LocalePathsProvider";
import { SITE_URL } from "@/lib/site";

const fontSans = Figtree({
  variable: "--font-sans", // lint:allowed
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // Anything a page expresses as a relative URL — a canonical, an og:image —
  // is resolved against this. Without it Next resolves against localhost, so a
  // page that forgets an absolute URL ships one silently.
  metadataBase: new URL(SITE_URL),
  title: "TOC | The Only Constant",
  description: "AI that helps you understand, not just generate.",
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  themeColor: colors.brand.primary,
};

export function generateStaticParams() {
  return i18n.locales.map((lang) => ({ lang }));
}

/**
 * Root layout for the localised site.
 *
 * It owns <html> so that `lang` can follow the route. Setting it from a client
 * effect looked right in the browser but served lang="nl" on every English
 * page, and that is what a crawler reads.
 */
export default async function LangLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;

  return (
    <html lang={lang} suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={cn(
          fontSans.variable,
          "antialiased min-h-screen bg-background font-sans" /* lint:allowed */
        )}
      >
        <StructuredData
          data={{
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "The Only Constant",
            url: SITE_URL,
            logo: `${SITE_URL}/images/brand/toc/TOC_Logo_black.svg`,
            description:
              "AI consultancy voor marketing en organisatie-innovatie",
            areaServed: "NL",
            serviceType: [
              "AI Consultancy",
              "AI Workshop",
              "AI Automatisering",
              "AI Proof of Concept",
            ],
          }}
        />
        <StructuredData
          data={{
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "The Only Constant",
            url: SITE_URL,
            inLanguage: ["nl", "en"],
          }}
        />
        <GoogleAnalytics />
        <LocalePathsProvider pairs={getLocalePathPairs()}>
          {children}
          {/* Inside the provider: the banner links to the privacy statement
              through LocalizedLink. */}
          <CookieBanner />
        </LocalePathsProvider>
        <SmoothScrollAnchor />
      </body>
    </html>
  );
}
