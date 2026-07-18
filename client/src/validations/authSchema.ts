import { z } from "zod";

export const loginSchema = z.object({
  phone: z.string().regex(/^09\d{9}$/, "شماره موبایل معتبر نیست."),

  password: z.string().min(8, "رمز عبور باید حداقل ۸ کاراکتر باشد."),
});

export type LoginFormData = z.infer<typeof loginSchema>;
export const registerSchema = z
  .object({
    firstName: z.string().min(2, "نام را وارد کنید."),

    lastName: z.string().min(2, "نام خانوادگی را وارد کنید."),

    phone: z.string().regex(/^09\d{9}$/, "شماره موبایل معتبر نیست."),

    password: z.string().min(8, "رمز عبور حداقل ۸ کاراکتر باشد."),

    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "رمز عبورها یکسان نیستند.",
  });

export type RegisterFormData = z.infer<typeof registerSchema>;
