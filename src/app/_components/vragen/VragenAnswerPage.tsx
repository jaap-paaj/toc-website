import { PageLayout } from "@/design-system/components/Layout";
import { SiteFooterModule } from "@/app/_components/footer/SiteFooterModule";
import { AnswerHeroModule } from "@/app/_components/vragen/modules/AnswerHeroModule";
import { AnswerBodyModule } from "@/app/_components/vragen/modules/AnswerBodyModule";
import { AnswerCtaModule } from "@/app/_components/vragen/modules/AnswerCtaModule";
import type { AnswerPage } from "@/app/_content/vragen";
import type { Locale } from "@/lib/i18n/config";

interface VragenAnswerPageProps {
    lang: Locale;
    page: AnswerPage;
}

export function VragenAnswerPage({ lang, page }: VragenAnswerPageProps) {
    return (
        <PageLayout variant="landing">
            <AnswerHeroModule lang={lang} page={page} />
            <AnswerBodyModule page={page} />
            <AnswerCtaModule page={page} />
            <SiteFooterModule />
        </PageLayout>
    );
}
