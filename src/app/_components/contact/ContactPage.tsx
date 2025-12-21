import { PageLayout } from "@/design-system/components/Layout";
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
            <HomeFooterCtaModule />
        </PageLayout>
    );
}
