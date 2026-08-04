import type { Metadata } from "next";
import { HomeModule } from "@/app/_components/home/HomeModule";
import { HomeFooterCtaModule } from "@/app/_components/home/modules/HomeFooterCtaModule";
import { SiteFooterNav } from "@/components/sections/SiteFooterNav";
import { Heading, Text } from "@/design-system/components/Typography";
import { spacing } from "@/design-system/tokens/spacing";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
    title: "Footer-opzet — intern",
    robots: { index: false, follow: false },
};

/**
 * Preview only. Shows the proposed navigation strip underneath the real CTA
 * band, because that is the thing it has to sit with. Judging it on its own
 * tells you nothing.
 */
export default function Page() {
    return (
        <main className="w-full min-h-screen bg-background">
            <HomeModule
                id="footer-preview-intro"
                width="full"
                tone="light"
                pad="m"
                padTop="xl"
                padBottom="s"
                gap="none"
                containsContent
            >
                <div className={cn(spacing.stackSm, "w-full")}>
                    <Heading level={1} size="prompt">
                        Footer-opzet
                    </Heading>
                    <Text size="md" className="text-muted-foreground">
                        Hieronder de echte CTA-band zoals hij nu op elke pagina
                        staat, met daaronder de voorgestelde navigatiestrook.
                        Nog nergens ingehangen.
                    </Text>
                </div>
            </HomeModule>

            {/* Exactly the seam every page uses today */}
            <HomeModule
                id="footer-preview-cta-seam"
                width="full"
                tone="dark"
                pad="none"
                padTop="m"
                gap="none"
            >
                <HomeFooterCtaModule />
            </HomeModule>

            {/* The proposed addition */}
            <HomeModule
                id="footer-preview-nav"
                width="full"
                tone="dark"
                pad="m"
                padTop="m"
                padBottom="m"
                gap="none"
            >
                <SiteFooterNav />
            </HomeModule>
        </main>
    );
}
