import type { Metadata } from "next";
import { ContactPage } from "@/app/_components/contact/ContactPage";

const SITE_URL = "https://theonlyconstant.nl";

interface PageProps {
    params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { lang } = await params;
    const isNl = lang === "nl";
    return {
        title: isNl
            ? "Contact - The Only Constant"
            : "Contact - The Only Constant",
        description: isNl
            ? "Neem contact op met The Only Constant. AI consultancy voor marketing en organisatie-innovatie."
            : "Get in touch with The Only Constant. AI consultancy for marketing and organization innovation.",
        alternates: { canonical: `${SITE_URL}/${lang}/contact` },
        openGraph: {
            title: "Contact - The Only Constant",
            description: isNl
                ? "Neem contact op met The Only Constant."
                : "Get in touch with The Only Constant.",
            type: "website",
            url: `${SITE_URL}/${lang}/contact`,
            siteName: "The Only Constant",
        },
    };
}

export default function Page() {
    return <ContactPage />;
}
