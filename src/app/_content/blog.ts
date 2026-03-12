import type { Locale } from "@/lib/i18n/config";

const en = {
    hero: {
        title: "BLOG",
    },
    sidebar: {
        latestPosts: "Latest Posts",
        viewAll: "View all blogs",
    },
    detail: {
        moreFrom: "More from The Only Constant",
        viewAll: "View all blogs",
        newBadge: "New",
    },
};

const nl: typeof en = {
    hero: {
        title: "BLOG",
    },
    sidebar: {
        latestPosts: "Laatste Blogs",
        viewAll: "Bekijk alle blogs",
    },
    detail: {
        moreFrom: "Meer van The Only Constant",
        viewAll: "Bekijk alle blogs",
        newBadge: "Nieuw",
    },
};

export const blogContent: Record<Locale, typeof en> = { en, nl };
