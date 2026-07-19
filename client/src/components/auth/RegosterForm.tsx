import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { NavLink, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import AuthCard from "./AuthCard";
import {
  registerSchema,
  type RegisterFormData,
} from "@/validations/authSchema";
import { authService } from "@/services/authService";
import { useAuth } from "@/context/AuthContext";

export default function RegisterForm() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = (data: RegisterFormData) => {
    if (authService.userExists(data.phone)) {
      toast.error("این شماره قبلاً ثبت شده است.");
      return;
    }

    authService.register({
      id: crypto.randomUUID(),
      firstName: data.firstName,
      lastName: data.lastName,
      phone: data.phone,
      password: data.password,
      createdAt: new Date().toISOString(),
      role: "customer",
    });

    login(data.phone, data.password);

    toast.success("ثبت نام با موفقیت انجام شد.");

    navigate("/");
  };

  return (
    <AuthCard
      title="ثبت نام"
      subtitle="برای ایجاد حساب کاربری اطلاعات خود را وارد کنید."
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <input
          {...register("firstName")}
          placeholder="نام"
          className="w-full rounded-2xl border border-border p-4"
        />
        {errors.firstName && (
          <p className="text-sm text-red-500">{errors.firstName.message}</p>
        )}

        <input
          {...register("lastName")}
          placeholder="نام خانوادگی"
          className="w-full rounded-2xl border border-border p-4"
        />
        {errors.lastName && (
          <p className="text-sm text-red-500">{errors.lastName.message}</p>
        )}

        <input
          {...register("phone")}
          placeholder="شماره موبایل"
          className="w-full rounded-2xl border border-border p-4"
        />
        {errors.phone && (
          <p className="text-sm text-red-500">{errors.phone.message}</p>
        )}

        <input
          {...register("password")}
          type="password"
          placeholder="رمز عبور"
          className="w-full rounded-2xl border border-border p-4"
        />
        {errors.password && (
          <p className="text-sm text-red-500">{errors.password.message}</p>
        )}

        <input
          {...register("confirmPassword")}
          type="password"
          placeholder="تکرار رمز عبور"
          className="w-full rounded-2xl border border-border p-4"
        />
        {errors.confirmPassword && (
          <p className="text-sm text-red-500">
            {errors.confirmPassword.message}
          </p>
        )}

        <button
          disabled={isSubmitting}
          className="w-full rounded-2xl bg-primary py-4 text-white"
        >
          ثبت نام
        </button>

        <p className="text-center text-sm">
          حساب کاربری دارید؟{" "}
          <NavLink to="/login" className="text-primary">
            ورود
          </NavLink>
        </p>
      </form>
    </AuthCard>
  );
}
