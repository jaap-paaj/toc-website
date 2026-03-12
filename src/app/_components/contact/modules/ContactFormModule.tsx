"use client";

import { useState } from "react";
import { HomeModule } from "../../home/HomeModule";
import { FormPanel } from "@/components/form/FormPanel";
import { FormField } from "@/components/ui/form-field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { Heading, Text } from "@/design-system/components/Typography";
import { spacing } from "@/design-system/tokens/spacing";
import { typography } from "@/design-system/tokens/typography";
import { cn } from "@/lib/utils";
import { submitContactForm } from "@/actions/contact";
import { contactSchema } from "@/lib/validation/contact";
import { trackEvent } from "@/lib/analytics/ga";
import { contactContent } from "@/app/_content/contact";
import { useLocale } from "@/lib/i18n/useLocale";

export function ContactFormModule() {
    const lang = useLocale();
    const content = contactContent[lang].form;
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [fieldErrors, setFieldErrors] = useState<{ [key: string]: string[] | undefined }>({});
    const [formError, setFormError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        setFieldErrors({});
        setFormError(null);

        const formData = new FormData(e.currentTarget);
        const rawData = {
            name: formData.get("name") as string,
            email: formData.get("email") as string,
            message: formData.get("message") as string,
            _gotcha: formData.get("_gotcha") as string,
        };

        // 1. Client-Side Pre-Validation (UX Only - Server is Authoritative)
        const validated = contactSchema.safeParse(rawData);
        if (!validated.success) {
            setFieldErrors(validated.error.flatten().fieldErrors);
            setIsLoading(false);
            return;
        }

        // 2. Server Action
        try {
            const result = await submitContactForm({ success: false }, formData);

            if (result.success) {
                setIsSubmitted(true);
                trackEvent("contact_submit", {
                    source: "contact_form",
                });
            } else {
                if (result.errors) {
                    setFieldErrors(result.errors);
                }
                if (result.message) {
                    setFormError(result.message);
                }
            }
        } catch {
            setFormError("Something went wrong. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <HomeModule
            id="contact-form"
            width="full"
            tone="light"
            pad="m"
            padBottom="none" // Flush for Seam Ownership (Next module has divider)
            gap="none"
        >
            {isSubmitted ? (
                <div className="max-w-2xl mx-auto w-full">
                    <FormPanel className={cn("items-center text-center", spacing.component.formSuccessPanel)}>
                        <Heading level={3}>{content.success.title}</Heading>
                        <Text className="text-muted-foreground my-4"> {/* lint:allowed */}
                            {content.success.message}
                        </Text>
                        <Button
                            variant="outline"
                            onClick={() => setIsSubmitted(false)}
                            className={spacing.component.formSuccessCta}
                        >
                            {content.success.resetLabel}
                        </Button>
                    </FormPanel>
                </div>
            ) : (
                <div className="container mx-auto w-full">
                    <div className={spacing.stackXl}>
                        <SectionHeader
                            eyebrow={content.eyebrow}
                            description={content.description}
                            variant="split"
                            divider
                        />

                        <FormPanel>
                            {formError && (
                                <div className={cn("bg-destructive/10 text-destructive p-4 rounded-panel", typography.variants.body.sm)}>
                                    {formError}
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className={spacing.stackLg}>
                                {/* Honeypot - Hidden from users */}
                                <input
                                    type="text"
                                    name="_gotcha"
                                    tabIndex={-1}
                                    className="hidden"
                                    autoComplete="off"
                                />

                                <div className="grid md:grid-cols-2 gap-6">
                                    <FormField
                                        label={content.fields.name.label}
                                        error={fieldErrors.name?.[0]}
                                    >
                                        <Input
                                            name="name"
                                            placeholder={content.fields.name.placeholder}
                                            required
                                            disabled={isLoading}
                                            aria-invalid={!!fieldErrors.name}
                                        />
                                    </FormField>

                                    <FormField
                                        label={content.fields.email.label}
                                        error={fieldErrors.email?.[0]}
                                    >
                                        <Input
                                            name="email"
                                            type="email"
                                            placeholder={content.fields.email.placeholder}
                                            required
                                            disabled={isLoading}
                                            aria-invalid={!!fieldErrors.email}
                                        />
                                    </FormField>
                                </div>

                                <FormField
                                    label={content.fields.message.label}
                                    error={fieldErrors.message?.[0]}
                                >
                                    <Textarea
                                        name="message"
                                        placeholder={content.fields.message.placeholder}
                                        required
                                        disabled={isLoading}
                                        className="min-h-[160px]"
                                        aria-invalid={!!fieldErrors.message}
                                    />
                                </FormField>

                                <div className={cn("flex justify-end", spacing.component.formActions)}>
                                    <Button
                                        type="submit"
                                        size="lg"
                                        disabled={isLoading}
                                        className={cn("w-full md:w-auto", typography.variants.ui.button.lg)}
                                    >
                                        {isLoading ? content.submit.loading : content.submit.label}
                                    </Button>
                                </div>
                            </form>
                        </FormPanel>
                    </div>
                </div>
            )}
        </HomeModule>
    );
}
