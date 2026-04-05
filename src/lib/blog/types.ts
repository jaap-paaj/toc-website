export interface FaqItem {
    question: string;
    answer: string;
}

export interface BlogPostMeta {
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
