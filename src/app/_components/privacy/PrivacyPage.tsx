import { PageLayout } from "@/design-system/components/Layout";
import { SiteFooterModule } from "@/app/_components/footer/SiteFooterModule";
import { PrivacyHeroModule } from "@/app/_components/privacy/modules/PrivacyHeroModule";
import { PrivacyBodyModule } from "@/app/_components/privacy/modules/PrivacyBodyModule";
import type { Locale } from "@/lib/i18n/config";

interface PrivacyPageProps {
    lang: Locale;
}

export function PrivacyPage({ lang }: PrivacyPageProps) {
    return (
        <PageLayout variant="landing">
            <PrivacyHeroModule lang={lang} />
            <PrivacyBodyModule lang={lang} />

            <SiteFooterModule />
        </PageLayout>
    );
}
