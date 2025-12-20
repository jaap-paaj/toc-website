import { PageLayout } from "@/design-system/components/Layout";
import { HomeFooterCtaModule } from "../home/modules/HomeFooterCtaModule";
import { EducateHeroModule } from "./modules/EducateHeroModule";
import { EducateTrainingCatalogModule } from "./modules/EducateTrainingCatalogModule";
import { EducateWhyUsImageDuoModule } from "./modules/EducateWhyUsImageDuoModule";
import { EducateWhyUsModule } from "./modules/EducateWhyUsModule";
import { EducateTestimonialsModule } from "./modules/EducateTestimonialsModule";

export function EducatePage() {
    return (
        <PageLayout variant="landing">
            <EducateHeroModule />
            <EducateTrainingCatalogModule />
            <EducateWhyUsImageDuoModule />

            {/* Why Us Cards: Dark (Black) */}
            <EducateWhyUsModule />

            <EducateTestimonialsModule />
            <HomeFooterCtaModule />
        </PageLayout>
    );
}
