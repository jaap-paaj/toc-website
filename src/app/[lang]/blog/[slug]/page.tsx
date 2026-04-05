import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getAllSlugs, getPostBySlug } from "@/lib/blog/loader";
import { BlogDetailPage } from "@/app/_components/blog/BlogDetailPage";
import { StructuredData } from "@/components/seo/StructuredData";
import type { Locale } from "@/lib/i18n/config";

const SITE_URL = "https://theonlyconstant.nl";

interface BlogPostPageProps {
    params: Promise<{ lang: string; slug: string }>;
}

export async function generateStaticParams() {
    const slugs = getAllSlugs();
    return slugs.map((slug) => ({ slug }));
}

export const dynamicParams = true;

export async function generateMetadata({
    params,
}: BlogPostPageProps): Promise<Metadata> {
    const { lang, slug } = await params;
    const post = getPostBySlug(slug, lang as Locale);
    if (!post) return { title: "Post Not Found" };

    const pageUrl = `${SITE_URL}/${lang}/blog/${slug}`;

    return {
        title: `${post.title} | Blog | The Only Constant`,
        description: post.intro,
        alternates: {
            canonical: pageUrl,
        },
        openGraph: {
            title: post.title,
            description: post.intro,
            type: "article",
            url: pageUrl,
            siteName: "The Only Constant",
        },
    };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
    const { lang, slug } = await params;
    const locale = lang as Locale;
    const allPosts = getAllPosts(locale);

    // Find active post
    const post = allPosts.find((p) => p.slug === slug);
    if (!post) notFound();

    // Fetch full post content
    const fullPost = getPostBySlug(slug, locale);
    if (!fullPost) notFound();

    // Get strictly 5 latest posts (excluding active)
    const latestPosts = allPosts
        .filter((p) => p.slug !== slug)
        .slice(0, 5);

    const pageUrl = `${SITE_URL}/${locale}/blog/${slug}`;

    return (
        <>
            {/* Article + Author schema */}
            <StructuredData
                data={{
                    "@context": "https://schema.org",
                    "@type": "Article",
                    headline: fullPost.title,
                    description: fullPost.intro,
                    datePublished: fullPost.date,
                    dateModified: fullPost.date,
                    author: {
                        "@type": "Person",
                        name: "Maarten Mantje",
                        jobTitle: "Founder & Strategist",
                        worksFor: {
                            "@type": "Organization",
                            name: "The Only Constant",
                        },
                    },
                    publisher: {
                        "@type": "Organization",
                        name: "The Only Constant",
                        url: SITE_URL,
                        logo: {
                            "@type": "ImageObject",
                            url: `${SITE_URL}/images/brand/toc/TOC_Logo_black.svg`,
                        },
                    },
                    mainEntityOfPage: pageUrl,
                    inLanguage: locale,
                }}
            />

            {/* Breadcrumb schema */}
            <StructuredData
                data={{
                    "@context": "https://schema.org",
                    "@type": "BreadcrumbList",
                    itemListElement: [
                        {
                            "@type": "ListItem",
                            position: 1,
                            name: "Home",
                            item: `${SITE_URL}/${locale}`,
                        },
                        {
                            "@type": "ListItem",
                            position: 2,
                            name: "Blog",
                            item: `${SITE_URL}/${locale}/blog`,
                        },
                        {
                            "@type": "ListItem",
                            position: 3,
                            name: fullPost.title,
                        },
                    ],
                }}
            />

            {/* FAQ schema (only if post has FAQ items) */}
            {fullPost.faq && fullPost.faq.length > 0 && (
                <StructuredData
                    data={{
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        mainEntity: fullPost.faq.map((item) => ({
                            "@type": "Question",
                            name: item.question,
                            acceptedAnswer: {
                                "@type": "Answer",
                                text: item.answer,
                            },
                        })),
                    }}
                />
            )}

            <BlogDetailPage post={fullPost} latestPosts={latestPosts} />
        </>
    );
}
