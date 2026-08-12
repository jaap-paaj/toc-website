export interface FaqItem {
    question: string;
    answer: string;
}

export interface BlogPostMeta {
    /**
     * Stable identity: the folder name under content/blog/<locale>/. The same
     * key in both locales is the same post. Never appears in a URL — that is
     * what `slug` is for.
     */
    key: string;
    /**
     * URL segment for this locale, from the `slug:` frontmatter field. Falls
     * back to the key when the field is absent, so a post that has never been
     * given a localised slug keeps the URL it always had.
     */
    slug: string;
    title: string;
    date: string; // ISO date string
    intro: string;
    author?: string;
    tags?: string[];
}

export interface BlogPost extends BlogPostMeta {
    content: string; // raw markdown body (no frontmatter, CTA, or FAQ)
    ctaContent?: string; // CTA section markdown (between last two --- before FAQ)
    faq?: FaqItem[]; // parsed FAQ items
}
