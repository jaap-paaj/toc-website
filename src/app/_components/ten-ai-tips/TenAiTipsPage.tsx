import { PageLayout } from "@/design-system/components/Layout";
import { TipsHeroModule } from "@/app/_components/ten-ai-tips/modules/TipsHeroModule";
import { TipsListModule } from "@/app/_components/ten-ai-tips/modules/TipsListModule";
import { TipsCtaModule } from "@/app/_components/ten-ai-tips/modules/TipsCtaModule";
import type { Locale } from "@/lib/i18n/config";

interface TenAiTipsPageProps {
    lang: Locale;
}

export function TenAiTipsPage({ lang }: TenAiTipsPageProps) {
    return (
        <PageLayout variant="landing">
            <TipsHeroModule lang={lang} />
            <TipsListModule lang={lang} />
            <TipsCtaModule lang={lang} />
        </PageLayout>
    );
}
