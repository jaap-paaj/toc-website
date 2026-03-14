/**
 * Renders a JSON-LD <script> tag for structured data.
 * Accepts any schema.org-compliant object.
 */
export function StructuredData({ data }: { data: Record<string, unknown> }) {
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
    );
}
