import React from 'react';
import { cn } from '@/lib/utils';
import { spacing } from '@/design-system/tokens/spacing';
import { SectionTitle, Text } from '@/design-system/components/Typography';

export interface FormSectionProps {
    /** The title of the section. Can be a string or a custom ReactNode. */
    title: string | React.ReactNode;
    /** Optional description text or node. */
    description?: string | React.ReactNode;
    /** The form fields or content within this section. */
    children: React.ReactNode;
    /** Optional class name for style overrides. */
    className?: string;
}

/**
 * Semantic section for a group of form fields.
 * Handles the layout of Title/Description and the content using standard spacing (stackMd).
 */
export function FormSection({ title, description, children, className }: FormSectionProps) {
    // Helper to determine if we need a wrapper around title+description
    // Default stackMd handles gap-4. If we want tighter title/desc, we can wrap them.
    // design choice: Title and Description usually sit tight (gap-1 or gap-2).
    // Current Antigravity pattern often uses 'gap-1' or similar for headers.
    // We will wrap them in a stackXs (gap-2) if description is present, otherwise just title.

    const renderHeader = () => {
        // If both are nodes, the caller controls layout? Or we enforce stack?
        // Let's treat them as content.

        // If title is string, wrap in SectionTitle.
        const titleNode = typeof title === 'string' ? <SectionTitle>{title}</SectionTitle> : title;

        // If description is string, wrap in Text(sm, muted).
        const descNode = typeof description === 'string' ? (
            <Text size="sm" className="text-muted-foreground">{description}</Text>
        ) : description;

        if (!description) {
            return titleNode;
        }

        return (
            <div className={spacing.stackXs}>
                {titleNode}
                {descNode}
            </div>
        );
    };

    return (
        <section className={cn(spacing.stackLg, className)}>
            {renderHeader()}
            <div className={spacing.stackMd}>
                {children}
            </div>
        </section>
    );
}
