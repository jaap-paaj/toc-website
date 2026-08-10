import type { Metadata, Viewport } from "next";
import { Figtree } from "next/font/google";
import "../globals.css";
import { cn } from "@/lib/utils";
import { colors } from "@/design-system/tokens/colors";

const fontSans = Figtree({
  variable: "--font-sans", // lint:allowed
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Intern | The Only Constant",
  robots: { index: false, follow: false },
};

export const viewport: Viewport = {
  themeColor: colors.brand.primary,
};

/**
 * Root layout for internal tooling.
 *
 * Separate from the localised site because /intern sits outside [lang] and so
 * cannot inherit a layout that needs a locale. No analytics and no structured
 * data: nothing here is public.
 */
export default function InternLayout({
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
        {children}
      </body>
    </html>
  );
}
