"use client";

import { useState } from "react";
import { HomeModule } from "../../home/HomeModule";
import { FormPanel } from "@/components/form/FormPanel";
import { FormSection } from "@/components/form/FormSection";
import { FormField } from "@/components/ui/form-field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { Heading, Text } from "@/design-system/components/Typography";
import { spacing } from "@/design-system/tokens/spacing";

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
        await new Promise(resolve => setTimeout(resolve, 1000));

        setIsLoading(false);
        setIsSubmitted(true);
    };

    if (isSubmitted) {
        return (
            <HomeModule id="contact-form" width="container" tone="default" spacing="standard">
                <div className="max-w-2xl mx-auto w-full">
                    <FormPanel className="items-center text-center py-20 px-8">
                        <Heading level={3}>Thanks for your message!</Heading>
                        <Text className="text-muted-foreground my-4">
                            We have received your inquiry and will reply within 2 business days.
                        </Text>
                        <Button variant="outline" onClick={() => setIsSubmitted(false)} className="mt-4">
                            Send another message
                        </Button>
                    </FormPanel>
                </div>
            </HomeModule>
        );
    }

    return (
        <HomeModule id="contact-form" width="container" tone="default" spacing="standard" spacingEdge="bottom">
            <div className="w-full max-w-4xl">
                <div className={spacing.stackXl}>
                    <SectionHeader
                        eyebrow="GET IN TOUCH"
                        title="SEND US A MESSAGE"
                        description="Fill out the form below and we’ll get back to you shortly."
                        variant="stacked"
                        align="left"
                    />

                    <FormPanel>
                        <form onSubmit={handleSubmit} className={spacing.stackLg}>
                            {/* Inputs section - Title is handled by SectionHeader above, so FormSection is purely structural here */}
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
                                        className={errors.email ? "border-destructive focus-visible:ring-destructive" : ""}
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

                            <div className="flex justify-end pt-2">
                                <Button type="submit" size="lg" disabled={isLoading} className="w-full md:w-auto uppercase">
                                    {isLoading ? "SENDING..." : "SEND MESSAGE"}
                                </Button>
                            </div>
                        </form>
                    </FormPanel>
                </div>
            </div>
        </HomeModule>
    );
}
