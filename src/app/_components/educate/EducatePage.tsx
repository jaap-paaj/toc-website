import { PageLayout } from "@/design-system/components/Layout";
import { SiteFooterModule } from "@/app/_components/footer/SiteFooterModule";
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
            <SiteFooterModule />
        </PageLayout>
    );
}
