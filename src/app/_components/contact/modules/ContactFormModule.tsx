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
import { cn } from "@/lib/utils";

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
            setErrors({ email: "Please enter a valid email address." });
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
            tone="default"
            pad="m"
            padTop="none"
            gap="none"
        >
            {isSubmitted ? (
                <div className="max-w-2xl mx-auto w-full">
                    <FormPanel className={cn("items-center text-center", spacing.component.formSuccessPanel)}>
                        <Heading level={3}>Thanks for your message!</Heading>
                        <Text className="text-muted-foreground my-4">
                            We have received your inquiry and will reply within 2 business days.
                        </Text>
                        <Button
                            variant="outline"
                            onClick={() => setIsSubmitted(false)}
                            className={spacing.component.formSuccessCta}
                        >
                            Send another message
                        </Button>
                    </FormPanel>
                </div>
            ) : (
                <div className="container mx-auto w-full">
                    <div className={spacing.stackXl}>
                        <SectionHeader
                            eyebrow="GET IN TOUCH"
                            description="Fill out the form below and we’ll get back to you shortly."
                            variant="split"
                            divider
                            className="border-foreground/20"
                        />

                        <FormPanel>
                            <form onSubmit={handleSubmit} className={spacing.stackLg}>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <FormField label="Name">
                                        <Input name="name" placeholder="Jane Doe" required />
                                    </FormField>

                                    <FormField label="Email" error={errors.email}>
                                        <Input
                                            name="email"
                                            type="email"
                                            placeholder="jane@example.com"
                                            required
                                            className={
                                                errors.email
                                                    ? "border-destructive focus-visible:ring-destructive"
                                                    : ""
                                            }
                                        />
                                    </FormField>
                                </div>

                                <FormField label="Message">
                                    <Textarea
                                        name="message"
                                        placeholder="Tell us about your project..."
                                        required
                                        className="min-h-[160px]"
                                    />
                                </FormField>

                                <div className={cn("flex justify-end", spacing.component.formActions)}>
                                    <Button
                                        type="submit"
                                        size="lg"
                                        disabled={isLoading}
                                        className="w-full md:w-auto uppercase"
                                    >
                                        {isLoading ? "SENDING..." : "SEND MESSAGE"}
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