import type { Metadata } from 'next';
import { PageLayout } from "@/design-system/components/Layout";
import { HomeModule } from "@/app/_components/home/HomeModule";
import { HomeFooterCtaModule } from "@/app/_components/home/modules/HomeFooterCtaModule";
import { AboutHeroModule } from "@/app/_components/about/modules/AboutHeroModule";

export const metadata: Metadata = {
    title: 'About Us | The Only Constant',
};

export default function AboutPage() {
    return (
        <PageLayout variant="landing">
            <AboutHeroModule />

            {/* Scaffold Area: Minimal placeholder matching instruction */}
            <div className="min-h-[50vh] flex items-center justify-center">
                {/* Intentionally empty for now, or minimal loader if required later */}
            </div>

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
