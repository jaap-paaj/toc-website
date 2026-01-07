import { PageLayout } from "@/design-system/components/Layout";
import { ScanLandingHeroModule } from "@/app/_components/ai-opportunity-scan/modules/ScanLandingHeroModule";
import { ScanStatementModule } from "@/app/_components/ai-opportunity-scan/modules/ScanStatementModule";
import { ScanHowItWorksModule } from "@/app/_components/ai-opportunity-scan/modules/ScanHowItWorksModule";
import { ScanFeaturesModule } from "@/app/_components/ai-opportunity-scan/modules/ScanFeaturesModule";
import { ScanFooterCtaModule } from "@/app/_components/ai-opportunity-scan/modules/ScanFooterCtaModule";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "AI Opportunity Scan | The Only Constant",
    description: "Identify high-value AI opportunities in your business with a focused 45-minute strategy session.",
};

export default function Page() {
    return (
        <PageLayout variant="landing">
            <ScanLandingHeroModule />
            <ScanStatementModule />
            <ScanHowItWorksModule />
            <ScanFeaturesModule />
            <ScanFooterCtaModule />
        </PageLayout>
    );
}
