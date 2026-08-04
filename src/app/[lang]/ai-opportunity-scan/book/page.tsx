import { ScanBookingModule } from "@/app/_components/ai-opportunity-scan/modules/ScanBookingModule";
import { buildAlternates } from "@/lib/i18n/alternates";
import { Metadata } from "next";

interface PageProps {
    params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { lang } = await params;
    return {
        title: "Book Strategy Session | The Only Constant",
        description: "Schedule your AI Opportunity Scan.",
        alternates: buildAlternates(lang, "/ai-opportunity-scan/book"),
    };
}

export default function Page() {
    return (
        <main className="min-h-screen">
            <ScanBookingModule />
        </main>
    );
}
