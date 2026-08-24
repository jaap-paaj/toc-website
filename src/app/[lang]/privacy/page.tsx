import type { Metadata } from "next";
import { PrivacyPage } from "@/app/_components/privacy/PrivacyPage";
import { privacyContent } from "@/app/_content/privacy";
import { buildAlternates } from "@/lib/i18n/alternates";
import { SITE_URL } from "@/lib/site";
import type { Locale } from "@/lib/i18n/config";

interface PageProps {
    params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { lang } = await params;
    const { meta } = privacyContent[lang as Locale];

    return {
        title: meta.title,
        description: meta.description,
        alternates: buildAlternates(lang, "/privacy"),
        openGraph: {
            title: meta.title,
            description: meta.description,
            type: "website",
            url: `${SITE_URL}/${lang}/privacy`,
            siteName: "The Only Constant",
        },
    };
}

export default async function Page({ params }: PageProps) {
    const { lang } = await params;
    return <PrivacyPage lang={lang as Locale} />;
}
