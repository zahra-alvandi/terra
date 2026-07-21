import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(3, "نام باید حداقل ۳ کاراکتر باشد."),

  phone: z.string().regex(/^09\d{9}$/, "شماره موبایل معتبر نیست."),

  email: z.string().email("ایمیل معتبر نیست.").or(z.literal("")),

  message: z
    .string()
    .min(10, "پیام باید حداقل ۱۰ کاراکتر باشد.")
    .max(1000, "پیام بیش از حد طولانی است."),
});

export type ContactFormData = z.infer<typeof contactSchema>;
