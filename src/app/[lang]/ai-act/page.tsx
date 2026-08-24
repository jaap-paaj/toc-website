import type { Metadata } from "next";
import { PageLayout } from "@/design-system/components/Layout";
import { SiteFooterModule } from "@/app/_components/footer/SiteFooterModule";
import { AiActHeroModule } from "@/app/_components/ai-act/modules/AiActHeroModule";
import { AiActHowItWorksModule } from "@/app/_components/ai-act/modules/AiActHowItWorksModule";
import { AiActProblemsModule } from "@/app/_components/ai-act/modules/AiActProblemsModule";
import { AiActAboutModule } from "@/app/_components/ai-act/modules/AiActAboutModule";
import { aiActContent } from "@/app/_content/ai-act";
import type { Locale } from "@/lib/i18n/config";
import { buildAlternates } from "@/lib/i18n/alternates";
import { SITE_URL } from "@/lib/site";

interface PageProps {
    params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { lang } = await params;
    const { meta } = aiActContent[lang as Locale];
    return {
        title: meta.title,
        description: meta.description,
        alternates: buildAlternates(lang, "/ai-act"),
        openGraph: {
            title: meta.title,
            description: meta.description,
            type: "website",
            url: `${SITE_URL}/${lang}/ai-act`,
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

export default function Page() {
    return (
        <PageLayout variant="landing">
            <AiActHeroModule />
            <AiActHowItWorksModule />
            <AiActProblemsModule />
            <AiActAboutModule />
            <SiteFooterModule />
        </PageLayout>
    );
}
