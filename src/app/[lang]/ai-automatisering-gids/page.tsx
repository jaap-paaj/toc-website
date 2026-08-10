import type { Metadata } from "next";
import { PillarPage } from "@/app/_components/pillar/PillarPage";
import { pillarContent } from "@/app/_content/pillar";
import { getPostByKey } from "@/lib/blog/loader";
import type { Locale } from "@/lib/i18n/config";
import { buildAlternates } from "@/lib/i18n/alternates";

const SITE_URL = "https://theonlyconstant.nl";
const PILLAR_SLUG = "ai-automatisering-gids" as const;

interface PageProps {
    params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { lang } = await params;
    const { meta } = pillarContent[PILLAR_SLUG][lang as Locale];
    return {
        title: meta.title,
        description: meta.description,
        alternates: buildAlternates(lang, `/${PILLAR_SLUG}`),
        openGraph: {
            title: meta.title,
            description: meta.description,
            type: "website",
            url: `${SITE_URL}/${lang}/${PILLAR_SLUG}`,
            siteName: "The Only Constant",
        },
    };
}

export default async function Page({ params }: PageProps) {
    const { lang } = await params;
    const locale = lang as Locale;
    const keys = pillarContent[PILLAR_SLUG][locale].blogLinks.map((l) => l.key);
    const posts = keys
        .map((k) => getPostByKey(k, locale))
        .filter((p) => p !== null);

    return <PillarPage slug={PILLAR_SLUG} posts={posts} />;
}
