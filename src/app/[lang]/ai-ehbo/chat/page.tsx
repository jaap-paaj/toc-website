import type { Metadata } from "next";
import { EhboChatModule } from "@/app/_components/ai-ehbo/modules/EhboChatModule";
import { ehboContent } from "@/app/_content/ai-ehbo";
import type { Locale } from "@/lib/i18n/config";
import { buildAlternates } from "@/lib/i18n/alternates";


interface PageProps {
    params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { lang } = await params;
    const { meta } = ehboContent[lang as Locale];
    return {
        title: meta.title,
        description: meta.description,
        alternates: buildAlternates(lang, "/ai-ehbo/chat"),
    };
}

export default function Page() {
    return <EhboChatModule />;
}
