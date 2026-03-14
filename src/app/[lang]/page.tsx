import { HomePage } from "@/app/_components/home/HomePage";
import type { Locale } from "@/lib/i18n/config";

interface HomePageProps {
  params: Promise<{ lang: string }>;
}

export default async function Home({ params }: HomePageProps) {
  const { lang } = await params;
  return <HomePage lang={lang as Locale} />;
}
