import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { NavLink } from "react-router-dom";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";

import AuthCard from "./AuthCard";
import { loginSchema, type LoginFormData } from "@/validations/authSchema";

export default function LoginForm() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    const success = login(data.phone, data.password);

    if (!success) {
      toast.error("شماره موبایل یا رمز عبور اشتباه است.");
      return;
    }

    toast.success("ورود موفق بود.");
    navigate("/");
  };

  return (
    <AuthCard title="ورود" subtitle="برای ادامه وارد حساب کاربری خود شوید.">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div>
          <input
            {...register("phone")}
            type="tel"
            dir="rtl"
            placeholder="شماره موبایل"
            className="w-full rounded-2xl border border-border p-4 outline-none transition focus:border-primary"
          />

          {errors.phone && (
            <p className="mt-2 text-sm text-red-500">{errors.phone.message}</p>
          )}
        </div>

        <div>
          <input
            {...register("password")}
            type="password"
            placeholder="رمز عبور"
            className="w-full rounded-2xl border border-border p-4 outline-none transition focus:border-primary"
          />

          {errors.password && (
            <p className="mt-2 text-sm text-red-500">
              {errors.password.message}
            </p>
          )}
        </div>

        <div className="flex justify-end">
          <button
            type="button"
            className="text-sm text-primary hover:underline"
          >
            رمز عبور را فراموش کرده‌ام
          </button>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-2xl bg-primary py-4 font-medium text-white transition hover:opacity-90 disabled:opacity-60"
        >
          ورود
        </button>

        <p className="text-center text-sm text-text-secondary">
          حساب کاربری ندارید؟{" "}
          <NavLink
            to="/register"
            className="font-medium text-primary hover:underline"
          >
            ثبت نام
          </NavLink>
        </p>
      </form>
    </AuthCard>
  );
}
