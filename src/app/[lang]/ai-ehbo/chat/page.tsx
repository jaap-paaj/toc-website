import type { Metadata } from "next";
import { EhboChatModule } from "@/app/_components/ai-ehbo/modules/EhboChatModule";
import { ehboChatMetadata } from "@/app/_components/ai-ehbo/route";

/** The Dutch AI EHBO chat. English lives at /en/ai-first-aid/chat. */
const LANG = "nl";

export function generateStaticParams() {
    return [{ lang: LANG }];
}

export const dynamicParams = false;

export async function generateMetadata(): Promise<Metadata> {
    return ehboChatMetadata(LANG);
}

export default function Page() {
    return <EhboChatModule />;
}
