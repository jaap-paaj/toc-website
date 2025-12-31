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
import { contactContent } from "../contact.content";

export function ContactFormModule() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState<{ email?: string }>({});

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        setErrors({});

        const formData = new FormData(e.currentTarget);
        const email = formData.get("email") as string;

        // Basic validation
        if (!email || !email.includes("@")) {
            setErrors({ email: contactContent.form.fields.email.error });
            setIsLoading(false);
            return;
        }

        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000));

        setIsLoading(false);
        setIsSubmitted(true);
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
                        <Heading level={3}>{contactContent.form.success.title}</Heading>
                        <Text className="text-muted-foreground my-4"> {/* lint:allowed */}
                            {contactContent.form.success.message}
                        </Text>
                        <Button
                            variant="outline"
                            onClick={() => setIsSubmitted(false)}
                            className={spacing.component.formSuccessCta}
                        >
                            {contactContent.form.success.resetLabel}
                        </Button>
                    </FormPanel>
                </div>
            ) : (
                <div className="container mx-auto w-full">
                    <div className={spacing.stackXl}>
                        <SectionHeader
                            eyebrow={contactContent.form.eyebrow}
                            description={contactContent.form.description}
                            variant="split"
                            divider
                        />

                        <FormPanel>
                            <form onSubmit={handleSubmit} className={spacing.stackLg}>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <FormField label={contactContent.form.fields.name.label}>
                                        <Input name="name" placeholder={contactContent.form.fields.name.placeholder} required />
                                    </FormField>

                                    <FormField label={contactContent.form.fields.email.label} error={errors.email}>
                                        <Input
                                            name="email"
                                            type="email"
                                            placeholder={contactContent.form.fields.email.placeholder}
                                            required
                                        />
                                    </FormField>
                                </div>

                                <FormField label={contactContent.form.fields.message.label}>
                                    <Textarea
                                        name="message"
                                        placeholder={contactContent.form.fields.message.placeholder}
                                        required
                                        className="min-h-[160px]"
                                    />
                                </FormField>

                                <div className={cn("flex justify-end", spacing.component.formActions)}>
                                    <Button
                                        type="submit"
                                        size="lg"
                                        disabled={isLoading}
                                        className={cn("w-full md:w-auto", typography.variants.ui.button.lg)}
                                    >
                                        {isLoading ? contactContent.form.submit.loading : contactContent.form.submit.label}
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