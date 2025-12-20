import { PageLayout } from "@/design-system/components/Layout";

import { HomeHeroModule } from "./modules/HomeHeroModule";
import { HomeServicesModule } from "./modules/HomeServicesModule";
import { HomeClientsModule } from "./modules/HomeClientsModule";
import { HomeAboutModule } from "./modules/HomeAboutModule";
import { HomeFooterCtaModule } from "./modules/HomeFooterCtaModule";

export function HomePage() {
    return (
        <PageLayout variant="landing">
            <HomeHeroModule />
            <HomeServicesModule />
            <HomeClientsModule />
            <HomeAboutModule />
            <HomeFooterCtaModule />
        </PageLayout>
    );
}