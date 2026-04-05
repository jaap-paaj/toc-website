import { PageLayout } from "@/design-system/components/Layout";
import { HomeModule } from "@/app/_components/home/HomeModule";
import { HomeFooterCtaModule } from "../home/modules/HomeFooterCtaModule";
import { EducateHeroModule } from "./modules/EducateHeroModule";
import { EducateTrainingCatalogModule } from "./modules/EducateTrainingCatalogModule";
import { EducateWhyUsImageDuoModule } from "./modules/EducateWhyUsImageDuoModule";
import { EducateWhyUsModule } from "./modules/EducateWhyUsModule";
import { EducateTestimonialsModule } from "./modules/EducateTestimonialsModule";
import { EducateFaqModule } from "./modules/EducateFaqModule";

export function EducatePage() {
    return (
        <PageLayout variant="landing">
            <EducateHeroModule />
            <EducateTrainingCatalogModule />
            <EducateWhyUsImageDuoModule />

            {/* Why Us Cards: Dark (Black) */}
            <EducateWhyUsModule />

            <EducateTestimonialsModule />
            <EducateFaqModule />
            <HomeModule
                id="educate-cta-seam"
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
