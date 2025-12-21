import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { SmoothScrollAnchor } from "@/components/utils/SmoothScrollAnchor";

const fontSans = Figtree({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Only Constant",
  description: "Bold, strategic, minimal agency showcase.",
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
          "antialiased min-h-screen bg-background font-sans text-foreground"
        )}
      >
        {children}
        <SmoothScrollAnchor />
      </body>
    </html>
  );
}
