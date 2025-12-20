import { PageLayout } from "@/design-system/components/Layout";
import { HomeFooterCtaModule } from "../home/modules/HomeFooterCtaModule";
import { AutomateHeroModule } from "./modules/AutomateHeroModule";
import { AutomateReadyToRunModule } from "./modules/AutomateReadyToRunModule";
import { AutomateApproachModule } from "./modules/AutomateApproachModule";
import { AutomateWhyUsModule } from "./modules/AutomateWhyUsModule";

export function AutomatePage() {
    return (
        <PageLayout variant="landing">
            <AutomateHeroModule />
            <AutomateReadyToRunModule />
            <AutomateApproachModule />
            <AutomateWhyUsModule />
            <HomeFooterCtaModule />
        </PageLayout>
    );
}
