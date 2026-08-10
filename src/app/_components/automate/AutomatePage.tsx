import { PageLayout } from "@/design-system/components/Layout";
import { SiteFooterModule } from "@/app/_components/footer/SiteFooterModule";
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
            <SiteFooterModule />
        </PageLayout>
    );
}
