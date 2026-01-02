import { z } from "zod";

export const contactSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Please enter a valid email address"),
    message: z.string()
        .min(10, "Message must be at least 10 characters")
        .max(2000, "Message must be under 2000 characters"),
    // Honeypot field - typically hidden. Should be empty.
    _gotcha: z.string().optional(),
});

export type ContactFormData = z.infer<typeof contactSchema>;

export type ContactFormState = {
    success: boolean;
    message?: string;
    errors?: {
        name?: string[];
        email?: string[];
        message?: string[];
        _form?: string[];
    };
};
