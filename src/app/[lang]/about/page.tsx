import type { Metadata } from 'next';
import { PageLayout } from "@/design-system/components/Layout";
import { HomeModule } from "@/app/_components/home/HomeModule";
import { HomeFooterCtaModule } from "@/app/_components/home/modules/HomeFooterCtaModule";
import { AboutHeroModule } from "@/app/_components/about/modules/AboutHeroModule";
import { AboutApproachModule } from "@/app/_components/about/modules/AboutApproachModule";
import { AboutTeamModule } from "@/app/_components/about/modules/AboutTeamModule";
import { aboutContent } from "@/app/_content/about";
import type { Locale } from "@/lib/i18n/config";

interface AboutPageProps {
    params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: AboutPageProps): Promise<Metadata> {
    const { lang } = await params;
    const { meta } = aboutContent[lang as Locale];
    return { title: meta.title };
}

export default function AboutPage() {
    return (
        <PageLayout variant="landing">
            <AboutHeroModule />
            <AboutApproachModule />
            <AboutTeamModule />

            <HomeModule
                id="about-cta-seam"
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
