import Link from "next/link";
import { Button } from "@/components/ui/Button";

interface HeaderCtaProps {
    cta: { label: string; href: string };
    className?: string;
}

export function HeaderCta({ cta, className }: HeaderCtaProps) {
    return (
        <div className={className}>
            <Button
                asChild
                // "Solid black background, white text"
                // Using bg-black text-white utility for strict compliance with "Solid black" request
                // instead of semantic tokens if tokens don't map to pure black/white in this context.
                // However, --background is #0A0A0A (Deep Black) and --foreground is #EDEDED (Off-white).
                // A black button on the green header:
                className="rounded-full px-6 py-5 bg-black text-white hover:bg-black/80 font-bold tracking-wide uppercase text-sm border-0"
            >
                <Link href={cta.href}>{cta.label}</Link>
            </Button>
        </div>
    );
}
