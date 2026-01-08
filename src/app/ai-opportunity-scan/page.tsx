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

export const metadata: Metadata = {
    title: "AI Opportunity Scan | The Only Constant",
    description: "Get clarity on where AI creates value. A half-day AI Opportunity Scan delivering priorities, a roadmap, and one PoC-ready process.",
};

export default function Page() {
    return (
        <PageLayout variant="landing">
            <ScanLandingHeroModule />
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
