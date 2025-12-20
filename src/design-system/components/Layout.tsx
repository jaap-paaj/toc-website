import React from "react";
import { cn } from "@/lib/utils";
import { layoutTokens } from "../tokens/layout";
import { spacing } from "../tokens/spacing";

import { Header } from "./Header";

/* ------------------------------------------------------------------------- */
/* PageLayout: Outer shell for any page                                      */
/* ------------------------------------------------------------------------- */

type PageLayoutProps = {
    children: React.ReactNode;
    variant?: "home" | "default" | "landing";
};



export function PageLayout({ children, variant = "default" }: PageLayoutProps) {
    const isHome = variant === "home";
    const isLanding = variant === "landing";
    const showBackButton = !isHome && !isLanding;

    return (
        <>
            <Header showBackButton={showBackButton} />
            {/* Main is always full-width, no horizontal constraints here */}
            <main className="w-full min-h-screen bg-background">
                {isLanding ? (
                    children
                ) : (
                    /* The single centralized container */
                    <div className="container stack-page py-12">
                        {isHome ? (
                            children
                        ) : (
                            // Default: one central card around content
                            <div className="bg-card text-card-foreground rounded-surface border border-border/60 shadow-surface p-6 md:p-8 lg:p-10 w-full">
                                {children}
                            </div>
                        )}
                    </div>
                )}
            </main>
        </>
    );
}

/* ------------------------------------------------------------------------- */
/* WorkflowShell: Shell for /adjust, /generate, /compositor                  */
/* ------------------------------------------------------------------------- */

type WorkflowShellProps = {
    title: React.ReactNode;
    description?: React.ReactNode;
    rightColumn?: React.ReactNode; // preview / output
    children: React.ReactNode; // left column: form
};

import { Surface } from "@/design-system/components/Surfaces";

export function WorkflowShell({
    title,
    description,
    rightColumn,
    children,
}: WorkflowShellProps) {
    return (
        // Utilize "home" variant to bypass the "default" outer card, 
        // allowing us to render our own layout structure.
        <PageLayout variant="home">
            <div className={cn("flex flex-col", spacing.stackXl)}>
                {/* Header (Title + Description) */}
                <section
                    className={cn(
                        "flex flex-col items-start text-left",
                        spacing.stackSm
                    )}
                >
                    {title}
                    {description}
                </section>

                {/* Two seperate cards for Controls & Preview */}
                <div className={layoutTokens.splitGolden}>
                    {/* Left Column (Controls) */}
                    {children}

                    {/* Right Column (Preview) */}
                    <Surface variant="card" className="flex flex-col p-6 md:p-8">
                        {rightColumn}
                    </Surface>
                </div>
            </div>
        </PageLayout>
    );
}