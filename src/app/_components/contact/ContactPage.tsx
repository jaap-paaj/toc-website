import { PageLayout } from "@/design-system/components/Layout";
import { ContactHeroModule } from "./modules/ContactHeroModule";
import { ContactFormModule } from "./modules/ContactFormModule";
import { ContactDetailsModule } from "./modules/ContactDetailsModule";
import { SiteFooterModule } from "@/app/_components/footer/SiteFooterModule";

export function ContactPage() {
    return (
        <PageLayout variant="landing">
            <ContactHeroModule />
            <ContactFormModule />
            <ContactDetailsModule />
            <SiteFooterModule />
        </PageLayout>
    );
}
