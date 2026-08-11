import type { Metadata } from "next";
import { PillarPage } from "@/app/_components/pillar/PillarPage";
import { pillarMetadata, pillarPosts } from "@/app/_components/pillar/route";

/** The English theme page. The other language lives at /nl/ai-strategie. */
const PILLAR = "ai-strategie" as const;
const LANG = "en";

export function generateStaticParams() {
    return [{ lang: LANG }];
}

export const dynamicParams = false;

export async function generateMetadata(): Promise<Metadata> {
    return pillarMetadata(PILLAR, LANG);
}

export default async function Page() {
    return <PillarPage slug={PILLAR} posts={pillarPosts(PILLAR, LANG)} />;
}
