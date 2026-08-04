import type { Metadata } from "next";
import { ReadinessScanPage } from "@/app/_components/ai-readiness-scan/ReadinessScanPage";
import { readinessScanContent } from "@/app/_content/ai-readiness-scan";
import type { Locale } from "@/lib/i18n/config";
import { buildAlternates } from "@/lib/i18n/alternates";

const SITE_URL = "https://theonlyconstant.nl";

interface PageProps {
    params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { lang } = await params;
    const { meta } = readinessScanContent[lang as Locale];
    const url = `${SITE_URL}/${lang}/ai-readiness-scan`;

    return {
        title: meta.title,
        description: meta.description,
        alternates: buildAlternates(lang, "/ai-readiness-scan"),
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

export default function Page() {
    return <ReadinessScanPage />;
}
