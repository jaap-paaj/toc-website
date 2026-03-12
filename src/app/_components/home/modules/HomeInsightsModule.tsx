import { getAllPosts } from "@/lib/blog/loader";
import { HomeInsightsClient } from "./HomeInsightsClient";
import type { Locale } from "@/lib/i18n/config";

interface HomeInsightsModuleProps {
    lang: Locale;
}

export function HomeInsightsModule({ lang }: HomeInsightsModuleProps) {
    const posts = getAllPosts(lang).slice(0, 3);
    if (posts.length === 0) return null;

    return <HomeInsightsClient posts={posts} />;
}
