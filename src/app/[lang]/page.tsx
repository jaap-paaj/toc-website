import type { Metadata } from "next";
import { HomePage } from "@/app/_components/home/HomePage";
import { StructuredData } from "@/components/seo/StructuredData";
import type { Locale } from "@/lib/i18n/config";

const SITE_URL = "https://theonlyconstant.nl";

interface HomePageProps {
    params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: HomePageProps): Promise<Metadata> {
    const { lang } = await params;
    const isNl = lang === "nl";
    return {
        title: isNl
            ? "AI Consultancy Nederland - The Only Constant"
            : "AI Consultancy Netherlands - The Only Constant",
        description: isNl
            ? "AI consultancy voor retail, manufacturing en high-tech. Workshops, automatisering en proof of concepts die beslisdata opleveren."
            : "AI consultancy for retail, manufacturing and high-tech. Workshops, automation and proof of concepts that deliver decision data.",
        alternates: { canonical: `${SITE_URL}/${lang}` },
        openGraph: {
            title: isNl ? "AI Consultancy Nederland - The Only Constant" : "AI Consultancy Netherlands - The Only Constant",
            description: isNl
                ? "AI consultancy voor retail, manufacturing en high-tech. Workshops, automatisering en proof of concepts die beslisdata opleveren."
                : "AI consultancy for retail, manufacturing and high-tech. Workshops, automation and proof of concepts that deliver decision data.",
            type: "website",
            url: `${SITE_URL}/${lang}`,
            siteName: "The Only Constant",
        },
    };
}

export default async function Home({ params }: HomePageProps) {
    const { lang } = await params;
    return (
        <>
            <StructuredData
                data={{
                    "@context": "https://schema.org",
                    "@type": "Organization",
                    name: "The Only Constant",
                    url: SITE_URL,
                    description: "AI consultancy voor marketing en organisatie-innovatie",
                    areaServed: "NL",
                    serviceType: [
                        "AI Consultancy",
                        "AI Workshop",
                        "AI Automatisering",
                        "AI Proof of Concept",
                    ],
                }}
            />
            <HomePage lang={lang as Locale} />
        </>
    );
}
