import type { Metadata, Viewport } from "next";
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";
import { Figtree } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { SmoothScrollAnchor } from "@/components/utils/SmoothScrollAnchor";
import { HtmlLangSync } from "@/components/i18n/HtmlLangSync";
import { colors } from "@/design-system/tokens/colors";
import { StructuredData } from "@/components/seo/StructuredData";

const SITE_URL = "https://theonlyconstant.nl";

const fontSans = Figtree({
  variable: "--font-sans", // lint:allowed
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TOC | The Only Constant",
  description: "AI that helps you understand, not just generate.",
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  themeColor: colors.brand.primary,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" suppressHydrationWarning>
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
              "Strategy and design partner for AI, automation and innovation.",
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
        <HtmlLangSync />
        <GoogleAnalytics />
        {children}
        <SmoothScrollAnchor />
      </body>
    </html>
  );
}
