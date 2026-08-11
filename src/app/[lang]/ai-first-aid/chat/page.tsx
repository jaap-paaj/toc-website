import type { Metadata } from "next";
import { EhboChatModule } from "@/app/_components/ai-ehbo/modules/EhboChatModule";
import { ehboChatMetadata } from "@/app/_components/ai-ehbo/route";

/** The English AI First Aid chat. Dutch lives at /nl/ai-ehbo/chat. */
const LANG = "en";

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
