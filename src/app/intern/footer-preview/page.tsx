import type { Metadata } from "next";
import { HomeModule } from "@/app/_components/home/HomeModule";
import { SiteFooterModule } from "@/app/_components/footer/SiteFooterModule";
import { Heading, Text } from "@/design-system/components/Typography";
import { spacing } from "@/design-system/tokens/spacing";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
    title: "Footer-opzet — intern",
    robots: { index: false, follow: false },
};

/**
 * Preview only. Renders the real SiteFooterModule rather than a copy of it, so
 * this page cannot drift away from what the site actually ships.
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
                        De echte footer, zoals hij nu onder elke pagina staat:
                        de CTA-band met daaronder de navigatiestrook.
                    </Text>
                </div>
            </HomeModule>

            <SiteFooterModule />
        </main>
    );
}
