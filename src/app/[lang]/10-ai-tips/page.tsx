import type { Metadata } from "next";
import { TenAiTipsPage } from "@/app/_components/ten-ai-tips/TenAiTipsPage";
import { tenAiTipsContent } from "@/app/_content/ten-ai-tips";
import type { Locale } from "@/lib/i18n/config";
import { buildAlternates } from "@/lib/i18n/alternates";

const SITE_URL = "https://theonlyconstant.nl";

interface PageProps {
    params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { lang } = await params;
    const { meta } = tenAiTipsContent[lang as Locale];
    return {
        title: meta.title,
        description: meta.description,
        alternates: buildAlternates(lang, "/10-ai-tips"),
        openGraph: {
            title: meta.title,
            description: meta.description,
            type: "website",
            url: `${SITE_URL}/${lang}/10-ai-tips`,
            siteName: "The Only Constant",
            locale: lang === "nl" ? "nl_NL" : "en_GB",
        },
        twitter: {
            card: "summary_large_image",
            title: meta.title,
            description: meta.description,
        },
    };
}

export default async function Page({ params }: PageProps) {
    const { lang } = await params;
    return <TenAiTipsPage lang={lang as Locale} />;
}
