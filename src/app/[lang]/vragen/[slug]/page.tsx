import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { VragenAnswerPage } from "@/app/_components/vragen/VragenAnswerPage";
import { getAnswerPage, getAnswerSlugs, VRAGEN_BASE_PATH } from "@/app/_content/vragen";
import { i18n, type Locale } from "@/lib/i18n/config";
import { buildAlternates } from "@/lib/i18n/alternates";

const SITE_URL = "https://theonlyconstant.nl";

interface PageProps {
    params: Promise<{ lang: string; slug: string }>;
}

export function generateStaticParams() {
    return i18n.locales.flatMap((lang) =>
        getAnswerSlugs().map((slug) => ({ lang, slug })),
    );
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { lang, slug } = await params;
    const page = getAnswerPage(lang as Locale, slug);
    if (!page) return {};

    const url = `${SITE_URL}/${lang}${VRAGEN_BASE_PATH}/${slug}`;

    return {
        title: page.meta.title,
        description: page.meta.description,
        alternates: buildAlternates(lang, `${VRAGEN_BASE_PATH}/${slug}`),
        openGraph: {
            title: page.meta.title,
            description: page.meta.description,
            type: "article",
            url,
            siteName: "The Only Constant",
            locale: lang === "nl" ? "nl_NL" : "en_GB",
        },
    };
}

export default async function Page({ params }: PageProps) {
    const { lang, slug } = await params;
    const page = getAnswerPage(lang as Locale, slug);
    if (!page) notFound();

    return <VragenAnswerPage lang={lang as Locale} page={page} />;
}
