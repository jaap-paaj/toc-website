import type { Metadata } from "next";
import { InnovatePage } from "@/app/_components/innovate/InnovatePage";
import { StructuredData } from "@/components/seo/StructuredData";

const SITE_URL = "https://theonlyconstant.nl";

interface PageProps {
    params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { lang } = await params;
    const isNl = lang === "nl";
    return {
        title: isNl
            ? "AI Proof of Concept - The Only Constant"
            : "AI Proof of Concept - The Only Constant",
        description: isNl
            ? "In 2 weken van idee naar werkend prototype. Levert beslisdata op, geen slideware. Voor organisaties die AI willen testen."
            : "From idea to working prototype in 2 weeks. Delivers decision data, not slideware. For organizations looking to test AI.",
        alternates: { canonical: `${SITE_URL}/${lang}/innovate` },
        openGraph: {
            title: "AI Proof of Concept - The Only Constant",
            description: isNl
                ? "In 2 weken van idee naar werkend prototype. Levert beslisdata op, geen slideware."
                : "From idea to working prototype in 2 weeks. Delivers decision data, not slideware.",
            type: "website",
            url: `${SITE_URL}/${lang}/innovate`,
            siteName: "The Only Constant",
        },
    };
}

export default async function Page({ params }: PageProps) {
    const { lang } = await params;
    return (
        <>
            <StructuredData
                data={{
                    "@context": "https://schema.org",
                    "@type": "Service",
                    name: lang === "nl" ? "AI Proof of Concept / Innovation Sprint" : "AI Proof of Concept / Innovation Sprint",
                    provider: {
                        "@type": "Organization",
                        name: "The Only Constant",
                    },
                    description: lang === "nl"
                        ? "In 2 weken van idee naar werkend prototype. Vanaf 15.000 euro."
                        : "From idea to working prototype in 2 weeks. From 15,000 euros.",
                    areaServed: "NL",
                }}
            />
            <InnovatePage />
        </>
    );
}
