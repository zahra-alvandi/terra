import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";

type LoginForm = {
  email: string;
  password: string;
};

export default function LoginPage() {
  const { register, handleSubmit } = useForm<LoginForm>();

  const onSubmit = () => {
    // بعداً به بک‌اند وصل می‌شود
  };

  return (
    <section className="py-20">
      <div className="mx-auto w-full max-w-md rounded-3xl border border-border bg-white p-8 shadow-sm">
        <h1 className="text-center text-3xl font-bold text-text-primary">
          ورود
        </h1>

        <p className="mt-3 text-center text-text-secondary">
          برای ادامه وارد حساب کاربری خود شوید.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-5">
          <input
            {...register("email")}
            type="email"
            placeholder="ایمیل"
            className="w-full rounded-2xl border border-border p-4 outline-none transition focus:border-primary"
          />

          <input
            {...register("password")}
            type="password"
            placeholder="رمز عبور"
            className="w-full rounded-2xl border border-border p-4 outline-none transition focus:border-primary"
          />

          <button
            type="submit"
            className="w-full rounded-2xl bg-primary py-4 font-medium text-white transition hover:opacity-90"
          >
            ورود
          </button>
        </form>

        <div className="mt-6 flex justify-between text-sm">
          <NavLink
            to="/forgot-password"
            className="text-primary hover:underline"
          >
            رمز عبور را فراموش کرده‌ام
          </NavLink>

          <NavLink to="/register" className="text-primary hover:underline">
            ایجاد حساب
          </NavLink>
        </div>
      </div>
    </section>
  );
}
