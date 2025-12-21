
import { PageLayout } from "@/design-system/components/Layout";
import { HomeFooterCtaModule } from "../home/modules/HomeFooterCtaModule";
import { InnovateHeroModule } from "./modules/InnovateHeroModule";
import { InnovateImageDuoModule } from "./modules/InnovateImageDuoModule";
import { InnovatePropositionsModule } from "./modules/InnovatePropositionsModule";
import { InnovateSolutionsModule } from "./modules/InnovateSolutionsModule";
import { InnovateWhyUsModule } from "./modules/InnovateWhyUsModule";

export function InnovatePage() {
    return (
        <PageLayout variant="landing">
            <InnovateHeroModule />
            <InnovatePropositionsModule />
            <InnovateSolutionsModule />
            <InnovateImageDuoModule />
            <InnovateWhyUsModule />
            <HomeFooterCtaModule />
        </PageLayout>
    );
}
