import { PageLayout } from "@/design-system/components/Layout";
import { HomeModule } from "../home/HomeModule";
import { ContactHeroModule } from "./modules/ContactHeroModule";
import { ContactFormModule } from "./modules/ContactFormModule";
import { ContactDetailsModule } from "./modules/ContactDetailsModule";
import { HomeFooterCtaModule } from "../home/modules/HomeFooterCtaModule";

export function ContactPage() {
    return (
        <PageLayout variant="landing">
            <ContactHeroModule />
            <ContactFormModule />
            <ContactDetailsModule />
            <HomeModule
                id="contact-cta-seam"
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
