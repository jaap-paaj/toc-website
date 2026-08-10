import type { Metadata } from "next";
import { VragenIndexPage } from "@/app/_components/vragen/VragenIndexPage";
import { vragenContent, VRAGEN_BASE_PATH } from "@/app/_content/vragen";
import type { Locale } from "@/lib/i18n/config";
import { buildAlternates } from "@/lib/i18n/alternates";

const SITE_URL = "https://theonlyconstant.nl";

interface PageProps {
    params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { lang } = await params;
    const { meta } = vragenContent[lang as Locale].index;
    const url = `${SITE_URL}/${lang}${VRAGEN_BASE_PATH}`;

    return {
        title: meta.title,
        description: meta.description,
        alternates: buildAlternates(lang, VRAGEN_BASE_PATH),
        openGraph: {
            title: meta.title,
            description: meta.description,
            type: "website",
            url,
            siteName: "The Only Constant",
            locale: lang === "nl" ? "nl_NL" : "en_GB",
        },
    };
}

export default async function Page({ params }: PageProps) {
    const { lang } = await params;
    return <VragenIndexPage lang={lang as Locale} />;
}
