import type { Metadata } from "next";
import { ReadinessChatModule } from "@/app/_components/ai-readiness-scan/modules/ReadinessChatModule";
import { readinessScanContent } from "@/app/_content/ai-readiness-scan";
import type { Locale } from "@/lib/i18n/config";

const SITE_URL = "https://theonlyconstant.nl";

interface PageProps {
    params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { lang } = await params;
    const { meta } = readinessScanContent[lang as Locale];
    return {
        title: meta.title,
        description: meta.description,
        alternates: { canonical: `${SITE_URL}/${lang}/ai-readiness-scan/chat` },
    };
}

export default function Page() {
    return <ReadinessChatModule />;
}
