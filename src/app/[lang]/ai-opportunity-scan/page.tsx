import { PageLayout } from "@/design-system/components/Layout";
import { ScanLandingHeroModule } from "@/app/_components/ai-opportunity-scan/modules/ScanLandingHeroModule";
import { ScanStatementModule } from "@/app/_components/ai-opportunity-scan/modules/ScanStatementModule";
import { ScanHowItWorksModule } from "@/app/_components/ai-opportunity-scan/modules/ScanHowItWorksModule";
import { ScanWhatYouGetModule } from "@/app/_components/ai-opportunity-scan/modules/ScanWhatYouGetModule";
import { ScanWhoThisIsForModule } from "@/app/_components/ai-opportunity-scan/modules/ScanWhoThisIsForModule";
import { ScanPricingModule } from "@/app/_components/ai-opportunity-scan/modules/ScanPricingModule";
import { ScanIntroCallModule } from "@/app/_components/ai-opportunity-scan/modules/ScanIntroCallModule";
import { ScanFaqModule } from "@/app/_components/ai-opportunity-scan/modules/ScanFaqModule";
import { SiteFooterModule } from "@/app/_components/footer/SiteFooterModule";
import { Metadata } from "next";
import { scanHeroVariants, scanContent } from "@/app/_content/ai-opportunity-scan";
import type { Locale } from "@/lib/i18n/config";
import { buildAlternates } from "@/lib/i18n/alternates";

interface PageProps {
    params: Promise<{ lang: string }>;
    searchParams: Promise<{ v?: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { lang } = await params;
    const { meta } = scanContent[lang as Locale];
    return {
        alternates: buildAlternates(lang, "/ai-opportunity-scan"),
        title: meta.title,
        description: meta.description,
    };
}

export default async function Page({ params, searchParams }: PageProps) {
    const { lang } = await params;
    const { v } = await searchParams;
    const localeVariants = scanHeroVariants[lang as Locale];
    const variant = v && v in localeVariants ? localeVariants[v] : undefined;

    return (
        <PageLayout variant="landing">
            <ScanLandingHeroModule
                title={variant?.title}
                subtitle={variant?.subtitle}
            />
            <ScanStatementModule />
            <ScanHowItWorksModule />
            <ScanWhatYouGetModule />
            <ScanWhoThisIsForModule />
            <ScanPricingModule />
            <ScanIntroCallModule />
            <ScanFaqModule />
            <SiteFooterModule cta={scanContent[lang as Locale].footerCta} />
        </PageLayout>
    );
}
