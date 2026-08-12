import type { Metadata } from "next";
import { PageLayout } from "@/design-system/components/Layout";
import { SiteFooterModule } from "@/app/_components/footer/SiteFooterModule";
import { EhboHeroModule } from "@/app/_components/ai-ehbo/modules/EhboHeroModule";
import { EhboHowItWorksModule } from "@/app/_components/ai-ehbo/modules/EhboHowItWorksModule";
import { EhboProblemsModule } from "@/app/_components/ai-ehbo/modules/EhboProblemsModule";
import { EhboAboutModule } from "@/app/_components/ai-ehbo/modules/EhboAboutModule";
import { ehboMetadata } from "@/app/_components/ai-ehbo/route";

/** The Dutch AI EHBO landing page. English lives at /en/ai-first-aid. */
const LANG = "nl";

export function generateStaticParams() {
    return [{ lang: LANG }];
}

export const dynamicParams = false;

export async function generateMetadata(): Promise<Metadata> {
    return ehboMetadata(LANG);
}

export default function Page() {
    return (
        <PageLayout variant="landing">
            <EhboHeroModule />
            <EhboHowItWorksModule />
            <EhboProblemsModule />
            <EhboAboutModule />
            <SiteFooterModule />
        </PageLayout>
    );
}
