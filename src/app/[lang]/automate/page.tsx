import type { Metadata } from "next";
import { AutomatePage } from "@/app/_components/automate/AutomatePage";
import { StructuredData } from "@/components/seo/StructuredData";
import { automateFaq } from "@/app/_content/automate";
import type { Locale } from "@/lib/i18n/config";
import { buildAlternates } from "@/lib/i18n/alternates";
import { SITE_URL } from "@/lib/site";

interface PageProps {
    params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { lang } = await params;
    const isNl = lang === "nl";
    return {
        title: isNl
            ? "AI Automatisering voor Bedrijven - The Only Constant"
            : "AI Automation for Business - The Only Constant",
        description: isNl
            ? "Workflow automatisering met generatieve AI en tools als n8n en Make. Van intake tot eerste werkende automation in 2-3 weken."
            : "Workflow automation with generative AI and tools like n8n and Make. From intake to first working automation in 2-3 weeks.",
        alternates: buildAlternates(lang, "/automate"),
        openGraph: {
            title: isNl ? "AI Automatisering voor Bedrijven - The Only Constant" : "AI Automation for Business - The Only Constant",
            description: isNl
                ? "Workflow automatisering met generatieve AI. Van intake tot eerste werkende automation in 2-3 weken."
                : "Workflow automation with generative AI. From intake to first working automation in 2-3 weeks.",
            type: "website",
            url: `${SITE_URL}/${lang}/automate`,
            siteName: "The Only Constant",
        },
    };
}

export default async function Page({ params }: PageProps) {
    const { lang } = await params;
    const faq = automateFaq[lang as Locale];
    return (
        <>
            <StructuredData
                data={{
                    "@context": "https://schema.org",
                    "@type": "Service",
                    name: lang === "nl" ? "AI Automatisering" : "AI Automation",
                    provider: {
                        "@type": "Organization",
                        name: "The Only Constant",
                    },
                    description: lang === "nl"
                        ? "Workflow automatisering met generatieve AI. Intake + eerste build vanaf 5.000 euro."
                        : "Workflow automation with generative AI. Intake + first build from 5,000 euros.",
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
            <AutomatePage />
        </>
    );
}
