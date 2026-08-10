import { PageLayout } from "@/design-system/components/Layout";
import { SiteFooterModule } from "@/app/_components/footer/SiteFooterModule";
import { ReadinessHeroModule } from "@/app/_components/ai-readiness-scan/modules/ReadinessHeroModule";
import { ReadinessHowItWorksModule } from "@/app/_components/ai-readiness-scan/modules/ReadinessHowItWorksModule";
import { ReadinessChecksModule } from "@/app/_components/ai-readiness-scan/modules/ReadinessChecksModule";
import { ReadinessAboutModule } from "@/app/_components/ai-readiness-scan/modules/ReadinessAboutModule";

export function ReadinessScanPage() {
    return (
        <PageLayout variant="landing">
            <ReadinessHeroModule />
            <ReadinessHowItWorksModule />
            <ReadinessChecksModule />
            <ReadinessAboutModule />
            <SiteFooterModule />
        </PageLayout>
    );
}
