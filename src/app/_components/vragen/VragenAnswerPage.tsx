import { PageLayout } from "@/design-system/components/Layout";
import { HomeModule } from "@/app/_components/home/HomeModule";
import { HomeFooterCtaModule } from "@/app/_components/home/modules/HomeFooterCtaModule";
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
            <HomeModule
                id="answer-cta-seam"
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
