export interface BlogPostMeta {
    slug: string;
    title: string;
    date: string; // ISO date string
    intro: string;
    author?: string;
    tags?: string[];
}

export interface BlogPost extends BlogPostMeta {
    content: string; // raw markdown body (no frontmatter)
}
