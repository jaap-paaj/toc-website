import { HomeModule } from "../../home/HomeModule";
import { EditorialCardGridSection, EditorialItem } from "@/components/sections/EditorialCardGridSection";
import React from "react";

export function ContactDetailsModule() {
    const items: EditorialItem[] = [
        {
            title: "VISIT US",
            description: (
                <div className="flex flex-col gap-1">
                    <span>The Only Constant B.V.</span>
                    <span className="text-primary-foreground/60">Surinameplein 1 HS</span>
                    <span className="text-primary-foreground/60">1058 GL Amsterdam</span>
                    <span className="text-primary-foreground/60">The Netherlands</span>
                </div>
            )
        },
        {
            title: "LEGAL & FINANCE",
            description: (
                <dl className="grid grid-cols-[min-content_1fr] gap-x-8 gap-y-2">
                    <dt className="text-primary-foreground/60 font-medium uppercase text-xs tracking-wider pt-1">KVK</dt>
                    <dd className="font-mono tabular-nums">....</dd>

                    <dt className="text-primary-foreground/60 font-medium uppercase text-xs tracking-wider pt-1">BTW</dt>
                    <dd className="font-mono tabular-nums">....</dd>

                    <dt className="text-primary-foreground/60 font-medium uppercase text-xs tracking-wider pt-1">BANK</dt>
                    <dd className="font-mono tabular-nums">....</dd>
                </dl>
            )
        }
    ];

    return (
        <HomeModule id="contact-details" width="full" tone="light" spacing="standard" stacking="shared">
            {/* EditorialCardGridSection provides internal top inset (pt-16+) for the divider */}
            <EditorialCardGridSection
                categoryLabel="COMPANY INFORMATION"
                intro="Here you can find our visiting address and administrative details."
                items={items}
                // Ensure grid items align start to match content height differences
                className="[&_.grid]:items-start"
            />
        </HomeModule>
    );
}
