import type { Metadata } from "next";
import { AiActWizardModule } from "@/app/_components/ai-act/modules/AiActWizardModule";
import { aiActContent } from "@/app/_content/ai-act";
import type { Locale } from "@/lib/i18n/config";
import { buildAlternates } from "@/lib/i18n/alternates";


interface PageProps {
    params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { lang } = await params;
    const { meta } = aiActContent[lang as Locale];
    return {
        title: meta.title,
        description: meta.description,
        alternates: buildAlternates(lang, "/ai-act/check"),
    };
}

export default function Page() {
    return <AiActWizardModule />;
}
