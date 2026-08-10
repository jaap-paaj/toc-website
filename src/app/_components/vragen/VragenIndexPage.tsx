import { PageLayout } from "@/design-system/components/Layout";
import { SiteFooterModule } from "@/app/_components/footer/SiteFooterModule";
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
            <SiteFooterModule />
        </PageLayout>
    );
}
