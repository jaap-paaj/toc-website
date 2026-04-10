import type { Metadata } from "next";
import { PageLayout } from "@/design-system/components/Layout";
import { HomeModule } from "@/app/_components/home/HomeModule";
import { HomeFooterCtaModule } from "@/app/_components/home/modules/HomeFooterCtaModule";
import { EhboHeroModule } from "@/app/_components/ai-ehbo/modules/EhboHeroModule";
import { EhboHowItWorksModule } from "@/app/_components/ai-ehbo/modules/EhboHowItWorksModule";
import { EhboProblemsModule } from "@/app/_components/ai-ehbo/modules/EhboProblemsModule";
import { EhboAboutModule } from "@/app/_components/ai-ehbo/modules/EhboAboutModule";
import { ehboContent } from "@/app/_content/ai-ehbo";
import type { Locale } from "@/lib/i18n/config";

const SITE_URL = "https://theonlyconstant.nl";

interface PageProps {
    params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { lang } = await params;
    const { meta } = ehboContent[lang as Locale];
    return {
        title: meta.title,
        description: meta.description,
        alternates: { canonical: `${SITE_URL}/${lang}/ai-ehbo` },
        openGraph: {
            title: meta.title,
            description: meta.description,
            type: "website",
            url: `${SITE_URL}/${lang}/ai-ehbo`,
            siteName: "The Only Constant",
            locale: lang === "nl" ? "nl_NL" : "en_GB",
            images: [
                {
                    url: `${SITE_URL}/images/brand/toc/og-ai-ehbo.png`,
                    width: 1200,
                    height: 630,
                    alt: meta.title,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: meta.title,
            description: meta.description,
            images: [`${SITE_URL}/images/brand/toc/og-ai-ehbo.png`],
        },
    };
}

export default function Page() {
    return (
        <PageLayout variant="landing">
            <EhboHeroModule />
            <EhboHowItWorksModule />
            <EhboProblemsModule />
            <EhboAboutModule />
            <HomeModule
                id="ehbo-cta-seam"
                width="full"
                tone="dark"
                pad="none"
                padTop="m"
                gap="none"
            >
                <HomeFooterCtaModule />
            </HomeModule>
        </PageLayout>
    );
}
