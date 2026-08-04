import { PageLayout } from "@/design-system/components/Layout";
import { HomeModule } from "@/app/_components/home/HomeModule";
import { HomeFooterCtaModule } from "@/app/_components/home/modules/HomeFooterCtaModule";
import { VragenIndexHeroModule } from "@/app/_components/vragen/modules/VragenIndexHeroModule";
import { VragenIndexListModule } from "@/app/_components/vragen/modules/VragenIndexListModule";
import type { Locale } from "@/lib/i18n/config";

interface VragenIndexPageProps {
    lang: Locale;
}

export function VragenIndexPage({ lang }: VragenIndexPageProps) {
    return (
        <PageLayout variant="landing">
            <VragenIndexHeroModule lang={lang} />
            <VragenIndexListModule lang={lang} />
            <HomeModule
                id="vragen-cta-seam"
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
