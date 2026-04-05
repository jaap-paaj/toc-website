import type { Metadata } from "next";
import { getAllPosts } from "@/lib/blog/loader";
import { BlogOverviewPage } from "@/app/_components/blog/BlogOverviewPage";
import type { Locale } from "@/lib/i18n/config";

const SITE_URL = "https://theonlyconstant.nl";

interface BlogPageProps {
    params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
    const { lang } = await params;
    const isNl = lang === "nl";
    return {
        title: isNl
            ? "Blog - The Only Constant"
            : "Blog - The Only Constant",
        description: isNl
            ? "Inzichten over AI-adoptie, marketing innovatie en organisatieverandering."
            : "Insights on AI adoption, marketing innovation and organizational change.",
        alternates: { canonical: `${SITE_URL}/${lang}/blog` },
        openGraph: {
            title: "Blog - The Only Constant",
            description: isNl
                ? "Inzichten over AI-adoptie, marketing innovatie en organisatieverandering."
                : "Insights on AI adoption, marketing innovation and organizational change.",
            type: "website",
            url: `${SITE_URL}/${lang}/blog`,
            siteName: "The Only Constant",
        },
    };
}

export default async function BlogPage({ params }: BlogPageProps) {
    const { lang } = await params;
    const posts = getAllPosts(lang as Locale);
    return <BlogOverviewPage posts={posts} lang={lang as Locale} />;
}
