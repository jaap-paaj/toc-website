import { ScanBookingModule } from "@/app/_components/ai-opportunity-scan/modules/ScanBookingModule";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Book Strategy Session | The Only Constant",
    description: "Schedule your AI Opportunity Scan.",
};

export default function Page() {
    return (
        <main className="min-h-screen">
            <ScanBookingModule />
        </main>
    );
}
