import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Figtree } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { SmoothScrollAnchor } from "@/components/utils/SmoothScrollAnchor";

const fontSans = Figtree({
  variable: "--font-sans", // lint:allowed
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Only Constant",
  description: "Bold, strategic, minimal agency showcase.",
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
  themeColor: "#CFFF4C",
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
        {process.env.NEXT_PUBLIC_GA_ID ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                  anonymize_ip: true
                });
              `}
            </Script>
          </>
        ) : null}
        {children}
        <SmoothScrollAnchor />
      </body>
    </html>
  );
}
