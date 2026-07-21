import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { contactService } from "@/services/contactService";
import { useAuth } from "@/context/AuthContext";
import { useNavigate } from "react-router-dom";

import {
  contactSchema,
  type ContactFormData,
} from "@/validations/contactSchema";

export default function ContactForm() {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    if (!isAuthenticated) {
      toast.error("ابتدا وارد حساب کاربری خود شوید.");

      navigate("/login", {
        state: {
          from: "/contact",
        },
      });

      return;
    }
    contactService.createMessage(data);

    toast.success("پیام شما با موفقیت ثبت شد.");

    reset();
  };

  return (
    <>
      <h2 className="mb-8 text-2xl font-semibold">ارسال پیام</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div>
          <input
            {...register("name")}
            placeholder="نام و نام خانوادگی"
            className="w-full rounded-2xl border border-border p-4 outline-none transition focus:border-primary"
          />

          {errors.name && (
            <p className="mt-2 text-sm text-red-500">{errors.name.message}</p>
          )}
        </div>

        <div>
          <input
            {...register("phone")}
            placeholder="شماره موبایل"
            className="w-full rounded-2xl border border-border p-4 outline-none transition focus:border-primary"
          />

          {errors.phone && (
            <p className="mt-2 text-sm text-red-500">{errors.phone.message}</p>
          )}
        </div>

        <div>
          <input
            {...register("email")}
            placeholder="ایمیل (اختیاری)"
            className="w-full rounded-2xl border border-border p-4 outline-none transition focus:border-primary"
          />

          {errors.email && (
            <p className="mt-2 text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>

        <div>
          <textarea
            rows={6}
            {...register("message")}
            placeholder="پیام شما..."
            className="w-full resize-none rounded-2xl border border-border p-4 outline-none transition focus:border-primary"
          />

          {errors.message && (
            <p className="mt-2 text-sm text-red-500">
              {errors.message.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-2xl bg-primary py-4 font-medium text-white transition hover:opacity-90 disabled:opacity-60"
        >
          ارسال پیام
        </button>
      </form>
    </>
  );
}
