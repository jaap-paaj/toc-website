import type { Metadata } from "next";
import { VragenIndexPage } from "@/app/_components/vragen/VragenIndexPage";
import { answersIndexMetadata } from "@/app/_components/vragen/route";

/** The Dutch answers index. English lives at /en/questions. */
const LANG = "nl";

export function generateStaticParams() {
    return [{ lang: LANG }];
}

export const dynamicParams = false;

export async function generateMetadata(): Promise<Metadata> {
    return answersIndexMetadata(LANG);
}

export default async function Page() {
    return <VragenIndexPage lang={LANG} />;
}
