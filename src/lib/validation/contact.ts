import { z } from "zod";

export const contactSchema = z.object({
    name: z.string().min(2, "Please add your name"),
    email: z.string().email("We need a working email to reply"),
    message: z.string()
        .min(2, "Please add a message")
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
