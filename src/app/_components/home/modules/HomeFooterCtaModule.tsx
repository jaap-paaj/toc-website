import { HomeModule } from "../HomeModule";
import { FooterCtaSection } from "@/components/sections/FooterCtaSection";
import { homeContent } from "../home.content";

export function HomeFooterCtaModule() {
    return (
        <HomeModule id="cta" width="full" pad="m" padTop="none" gap="s">
            <FooterCtaSection
                title={homeContent.footerCta.title}
                cta={homeContent.footerCta.cta}
                copyright={homeContent.footerCta.copyright}
            />
        </HomeModule>
    );
}