import React from "react";

export function InlineNoWrap({ children }: { children: React.ReactNode }) {
    return <span className="whitespace-nowrap">{children}</span>;
}
