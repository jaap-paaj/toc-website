import { PageLayout } from "@/design-system/components/Layout";
import type { Locale } from "@/lib/i18n/config";

import { HomeHeroModule } from "./modules/HomeHeroModule";
import { HomeServicesModule } from "./modules/HomeServicesModule";
import { HomeClientsModule } from "./modules/HomeClientsModule";
import { HomeAboutModule } from "./modules/HomeAboutModule";
import { HomeInsightsModule } from "./modules/HomeInsightsModule";
import { SiteFooterModule } from "@/app/_components/footer/SiteFooterModule";

interface HomePageProps {
    lang: Locale;
}

export function HomePage({ lang }: HomePageProps) {
    return (
        <PageLayout variant="landing">
            <HomeHeroModule />
            <HomeServicesModule />
            <HomeClientsModule />
            <HomeInsightsModule lang={lang} />
            <HomeAboutModule />
            <SiteFooterModule />
        </PageLayout>
    );
}
