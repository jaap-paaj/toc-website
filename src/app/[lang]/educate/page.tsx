import type { Metadata } from "next";
import { EducatePage } from "@/app/_components/educate/EducatePage";
import { StructuredData } from "@/components/seo/StructuredData";
import { educateFaq } from "@/app/_content/educate";
import type { Locale } from "@/lib/i18n/config";

const SITE_URL = "https://theonlyconstant.nl";

interface PageProps {
    params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { lang } = await params;
    const isNl = lang === "nl";
    return {
        title: isNl
            ? "AI Workshop voor Bedrijven - The Only Constant"
            : "AI Workshop for Business - The Only Constant",
        description: isNl
            ? "AI workshop op locatie voor teams. Van AI-basiskennis tot hands-on werken met AI tools. Voor organisaties met 50+ medewerkers."
            : "On-site AI workshop for teams. From AI fundamentals to hands-on work with AI tools. For organizations with 50+ employees.",
        alternates: { canonical: `${SITE_URL}/${lang}/educate` },
        openGraph: {
            title: isNl ? "AI Workshop voor Bedrijven - The Only Constant" : "AI Workshop for Business - The Only Constant",
            description: isNl
                ? "AI workshop op locatie voor teams. Van AI-basiskennis tot hands-on werken met AI tools."
                : "On-site AI workshop for teams. From AI fundamentals to hands-on work with AI tools.",
            type: "website",
            url: `${SITE_URL}/${lang}/educate`,
            siteName: "The Only Constant",
        },
    };
}

export default async function Page({ params }: PageProps) {
    const { lang } = await params;
    const faq = educateFaq[lang as Locale];
    return (
        <>
            <StructuredData
                data={{
                    "@context": "https://schema.org",
                    "@type": "Service",
                    name: lang === "nl" ? "AI Workshop voor Bedrijven" : "AI Workshop for Business",
                    provider: {
                        "@type": "Organization",
                        name: "The Only Constant",
                    },
                    description: lang === "nl"
                        ? "AI workshops op locatie voor teams. Prijsrange 1.500-3.500 euro."
                        : "On-site AI workshops for teams. Price range 1,500-3,500 euros.",
                    areaServed: "NL",
                }}
            />
            <StructuredData
                data={{
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    mainEntity: faq.items.map((item) => ({
                        "@type": "Question",
                        name: item.question,
                        acceptedAnswer: {
                            "@type": "Answer",
                            text: item.answer,
                        },
                    })),
                }}
            />
            <EducatePage />
        </>
    );
}
