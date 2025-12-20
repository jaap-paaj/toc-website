import type { Metadata } from "next";
import { PageLayout } from "@/design-system/components/Layout";
import { ContactPage } from "@/app/_components/contact/ContactPage";

export const metadata: Metadata = {
    title: "Contact | The Only Constant",
    description: "Get in touch with us to discuss your digital transformation needs.",
};

export default function Page() {
    return (
        <PageLayout variant="landing">
            <ContactPage />
        </PageLayout>
    );
}
