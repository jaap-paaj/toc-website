import type { Metadata, Viewport } from "next";
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";
import { Figtree } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { SmoothScrollAnchor } from "@/components/utils/SmoothScrollAnchor";
import { HtmlLangSync } from "@/components/i18n/HtmlLangSync";
import { colors } from "@/design-system/tokens/colors";

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
        <HtmlLangSync />
        <GoogleAnalytics />
        {children}
        <SmoothScrollAnchor />
      </body>
    </html>
  );
}
