import { PageLayout } from "@/design-system/components/Layout";
import { HomeModule } from "@/app/_components/home/HomeModule";
import { HomeFooterCtaModule } from "../home/modules/HomeFooterCtaModule";
import { AutomateHeroModule } from "./modules/AutomateHeroModule";
import { AutomateReadyToRunModule } from "./modules/AutomateReadyToRunModule";
import { AutomateApproachModule } from "./modules/AutomateApproachModule";
import { AutomateWhyUsModule } from "./modules/AutomateWhyUsModule";
import { AutomateFaqModule } from "./modules/AutomateFaqModule";

export function AutomatePage() {
    return (
        <PageLayout variant="landing">
            <AutomateHeroModule />
            <AutomateReadyToRunModule />
            <AutomateApproachModule />
            <AutomateWhyUsModule />
            <AutomateFaqModule />
            <HomeModule
                id="automate-cta-seam"
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
