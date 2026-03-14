import type { Locale } from "@/lib/i18n/config";

const en = {
    hero: {
        title: "BLOG",
    },
    overview: {
        latestTitle: "Latest Thinking",
        moreTitle: "More Thinking",
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
    overview: {
        latestTitle: "Laatste inzichten",
        moreTitle: "Meer inzichten",
    },
    sidebar: {
        latestPosts: "Laatste inzichten",
        viewAll: "Bekijk alle blogs",
    },
    detail: {
        moreFrom: "Meer inzichten van The Only Constant",
        viewAll: "Bekijk alle blogs",
        newBadge: "Nieuw",
    },
};

export const blogContent: Record<Locale, typeof en> = { en, nl };
