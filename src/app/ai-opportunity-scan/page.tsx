import { PageLayout } from "@/design-system/components/Layout";
import { ScanLandingHeroModule } from "@/app/_components/ai-opportunity-scan/modules/ScanLandingHeroModule";
import { ScanStatementModule } from "@/app/_components/ai-opportunity-scan/modules/ScanStatementModule";
import { ScanHowItWorksModule } from "@/app/_components/ai-opportunity-scan/modules/ScanHowItWorksModule";
import { ScanWhatYouGetModule } from "@/app/_components/ai-opportunity-scan/modules/ScanWhatYouGetModule";
import { ScanWhoThisIsForModule } from "@/app/_components/ai-opportunity-scan/modules/ScanWhoThisIsForModule";
import { ScanPricingModule } from "@/app/_components/ai-opportunity-scan/modules/ScanPricingModule";
import { ScanIntroCallModule } from "@/app/_components/ai-opportunity-scan/modules/ScanIntroCallModule";
import { ScanFaqModule } from "@/app/_components/ai-opportunity-scan/modules/ScanFaqModule";
import { ScanFooterCtaModule } from "@/app/_components/ai-opportunity-scan/modules/ScanFooterCtaModule";
import { Metadata } from "next";
import { scanHeroVariants } from "@/app/_content/ai-opportunity-scan";

export const metadata: Metadata = {
    title: "AI Opportunity Scan | The Only Constant",
    description: "Get clarity on where AI creates value. A half-day AI Opportunity Scan delivering priorities, a roadmap, and one PoC-ready process.",
};

interface PageProps {
    searchParams: Promise<{ v?: string }>;
}

export default async function Page({ searchParams }: PageProps) {
    const { v } = await searchParams;
    const variant = v && v in scanHeroVariants ? scanHeroVariants[v as keyof typeof scanHeroVariants] : undefined;

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
            <ScanFooterCtaModule />
        </PageLayout>
    );
}
