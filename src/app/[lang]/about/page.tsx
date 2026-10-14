import type { Metadata } from "next";
import { PageLayout } from "@/design-system/components/Layout";
import { SiteFooterModule } from "@/app/_components/footer/SiteFooterModule";
import { AboutHeroModule } from "@/app/_components/about/modules/AboutHeroModule";
import { AboutApproachModule } from "@/app/_components/about/modules/AboutApproachModule";
import { AboutTeamModule } from "@/app/_components/about/modules/AboutTeamModule";
import { StructuredData } from "@/components/seo/StructuredData";
import { aboutContent } from "@/app/_content/about";
import type { Locale } from "@/lib/i18n/config";
import { buildAlternates } from "@/lib/i18n/alternates";
import { ORGANIZATION_ID, SITE_URL, siteUrl } from "@/lib/site";

interface AboutPageProps {
    params: Promise<{ lang: string }>;
}

/**
 * "Maarten Mantje, Julien Amoureus en Jaap Beärda". A search for one of the
 * founders by name has to find it in the title and description, not only in a
 * card heading further down the page.
 */
function founderNames(lang: Locale): string {
    const names = aboutContent[lang].team.members.map((member) => member.name);
    const and = lang === "nl" ? "en" : "and";
    return `${names.slice(0, -1).join(", ")} ${and} ${names[names.length - 1]}`;
}

export async function generateMetadata({ params }: AboutPageProps): Promise<Metadata> {
    const { lang } = await params;
    const isNl = lang === "nl";
    const names = founderNames(lang as Locale);
    const title = isNl
        ? `Over ons: ${names} - The Only Constant`
        : `About us: ${names} - The Only Constant`;
    const description = isNl
        ? `The Only Constant is opgericht door ${names}. Strategie door te doen, niet door te praten.`
        : `The Only Constant was founded by ${names}. Strategy by doing, not by talking.`;
    return {
        title,
        description,
        alternates: buildAlternates(lang, "/about"),
        openGraph: {
            title,
            description,
            type: "website",
            url: `${SITE_URL}/${lang}/about`,
            siteName: "The Only Constant",
        },
    };
}

export default async function AboutPage({ params }: AboutPageProps) {
    const { lang } = await params;
    const { team } = aboutContent[lang as Locale];

    return (
        <>
            {/* Ties each founder's name to their photo and LinkedIn profile, so
                a search for the name can show the photo from this page. */}
            <StructuredData
                data={{
                    "@context": "https://schema.org",
                    "@type": "AboutPage",
                    url: `${SITE_URL}/${lang}/about`,
                    inLanguage: lang,
                    mainEntity: {
                        "@type": "Organization",
                        "@id": ORGANIZATION_ID,
                        name: "The Only Constant",
                        url: SITE_URL,
                        founder: team.members.map((member) => {
                            // "Beärda" is usually typed as "Bearda".
                            const plain = member.name.normalize("NFD").replace(/\p{Diacritic}/gu, "");
                            return {
                                "@type": "Person",
                                name: member.name,
                                ...(plain !== member.name && { alternateName: plain }),
                                jobTitle: team.jobTitle,
                                image: siteUrl(member.imageSrc),
                                email: `mailto:${member.email}`,
                                sameAs: [member.linkedinUrl],
                                worksFor: { "@id": ORGANIZATION_ID },
                            };
                        }),
                    },
                }}
            />
            <PageLayout variant="landing">
                <AboutHeroModule />
                <AboutApproachModule />
                <AboutTeamModule />

                <SiteFooterModule />
            </PageLayout>
        </>
    );
}
