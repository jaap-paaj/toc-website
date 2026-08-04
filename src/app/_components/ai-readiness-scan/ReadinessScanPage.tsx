import { PageLayout } from "@/design-system/components/Layout";
import { HomeModule } from "@/app/_components/home/HomeModule";
import { HomeFooterCtaModule } from "@/app/_components/home/modules/HomeFooterCtaModule";
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
            <HomeModule
                id="readiness-cta-seam"
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
