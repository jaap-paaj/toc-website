import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { VragenAnswerPage } from "@/app/_components/vragen/VragenAnswerPage";
import { answerMetadata, answerParamsFor } from "@/app/_components/vragen/route";
import { getAnswerPage } from "@/app/_content/vragen";

/** The Dutch answer pages. English lives at /en/questions/[slug]. */
const LANG = "nl";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
    return answerParamsFor(LANG);
}

export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    return answerMetadata(LANG, slug);
}

export default async function Page({ params }: PageProps) {
    const { slug } = await params;
    const page = getAnswerPage(LANG, slug);
    if (!page) notFound();

    return <VragenAnswerPage lang={LANG} page={page} />;
}
