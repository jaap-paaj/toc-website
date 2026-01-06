import type { Metadata, Viewport } from "next";
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";
import { Figtree } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { SmoothScrollAnchor } from "@/components/utils/SmoothScrollAnchor";

const fontSans = Figtree({
  variable: "--font-sans", // lint:allowed
  subsets: ["latin"],
});

import { colors } from "@/design-system/tokens/colors";

export const metadata: Metadata = {
  title: "TOC | The Only Constant",
  description: "AI that helps you understand, not just generate.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    other: [
      {
        rel: "icon",
        type: "image/png",
        sizes: "96x96",
        url: "/favicon-96x96.png",
      },
      {
        rel: "icon",
        type: "image/svg+xml",
        url: "/favicon.svg",
      },
    ],
  },
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
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={cn(
          fontSans.variable,
          "antialiased min-h-screen bg-background font-sans" /* lint:allowed */
        )}
      >
        <GoogleAnalytics />
        {children}
        <SmoothScrollAnchor />
      </body>
    </html>
  );
}
