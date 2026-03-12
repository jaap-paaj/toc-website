import { i18n } from "@/lib/i18n/config";

export function generateStaticParams() {
  return i18n.locales.map((lang) => ({ lang }));
}

export default function LangLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
