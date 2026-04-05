import type { Metadata } from "next";
import { PageLayout } from "@/design-system/components/Layout";
import { HomeModule } from "@/app/_components/home/HomeModule";
import { HomeFooterCtaModule } from "@/app/_components/home/modules/HomeFooterCtaModule";
import { AboutHeroModule } from "@/app/_components/about/modules/AboutHeroModule";
import { AboutApproachModule } from "@/app/_components/about/modules/AboutApproachModule";
import { AboutTeamModule } from "@/app/_components/about/modules/AboutTeamModule";

const SITE_URL = "https://theonlyconstant.nl";

interface AboutPageProps {
    params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: AboutPageProps): Promise<Metadata> {
    const { lang } = await params;
    const isNl = lang === "nl";
    return {
        title: isNl
            ? "Over The Only Constant - AI Consultancy"
            : "About The Only Constant - AI Consultancy",
        description: isNl
            ? "Marketing en organisatie-innovatie studio. Strategie door te doen, niet door te praten."
            : "Marketing and organization innovation studio. Strategy by doing, not by talking.",
        alternates: { canonical: `${SITE_URL}/${lang}/about` },
        openGraph: {
            title: isNl ? "Over The Only Constant - AI Consultancy" : "About The Only Constant - AI Consultancy",
            description: isNl
                ? "Marketing en organisatie-innovatie studio. Strategie door te doen, niet door te praten."
                : "Marketing and organization innovation studio. Strategy by doing, not by talking.",
            type: "website",
            url: `${SITE_URL}/${lang}/about`,
            siteName: "The Only Constant",
        },
    };
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
