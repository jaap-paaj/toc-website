import { getAllPosts } from "@/lib/blog/loader";
import { getPillarForBlog } from "@/app/_content/pillar";
import { vragenContent, ANSWERS_BASE_PATH } from "@/app/_content/vragen";

/**
 * The items behind the dynamic routes, so the collapsed rows in the route
 * table can be opened up. Pages ask "is it live"; content asks "is it still
 * any good", which needs different columns.
 */

export interface ContentItem {
    slug: string;
    title: string;
    /** Secondary line: date, theme, cluster. */
    meta: string;
    /** Things worth acting on for this specific item. */
    flags: string[];
}

export interface ContentGroup {
    key: string;
    label: string;
    routePattern: string;
    items: ContentItem[];
}

const YEAR_IN_MS = 365 * 24 * 60 * 60 * 1000;

function formatDate(iso: string): string {
    return new Date(iso).toLocaleDateString("nl-NL", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
}

function blogGroup(now: number): ContentGroup {
    const posts = getAllPosts("nl")
        .slice()
        .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

    const items = posts.map((post) => {
        const pillar = getPillarForBlog(post.key, "nl");
        const age = now - new Date(post.date).getTime();

        const flags: string[] = [];
        if (age > YEAR_IN_MS) flags.push("ouder dan een jaar");
        if (!pillar) flags.push("geen thema");

        return {
            slug: post.slug,
            title: post.title,
            meta: [formatDate(post.date), pillar?.tagLabel ?? "—"].join(" · "),
            flags,
        };
    });

    return {
        key: "blog",
        label: "Blogposts",
        routePattern: "/blog/[slug]",
        items,
    };
}

function answersGroup(): ContentGroup {
    const items = vragenContent.nl.pages.map((page) => ({
        slug: page.slug,
        title: page.question,
        meta: page.cluster,
        flags: [],
    }));

    return {
        key: "vragen",
        label: "Antwoordpagina's",
        routePattern: `${ANSWERS_BASE_PATH.nl}/[slug]`,
        items,
    };
}

export function getContentGroups(now = Date.now()): ContentGroup[] {
    return [blogGroup(now), answersGroup()];
}
