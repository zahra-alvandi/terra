import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import { useAdminAuth } from "@/context/AdminAuthContext";

type LoginForm = {
  username: string;
  password: string;
};

export default function AdminLoginPage() {
  const { login } = useAdminAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginForm>();

  const onSubmit = async (data: LoginForm) => {
    const success = login(data.username, data.password);

    if (!success) {
      toast.error("نام کاربری یا رمز عبور اشتباه است.");
      return;
    }

    toast.success("خوش آمدید");

    navigate("/admin");
  };

  return (
    <section className="flex min-h-screen items-center justify-center bg-stone-100 p-6">
      <div className="w-full max-w-md rounded-3xl bg-white p-10 shadow-lg">
        <h1 className="text-center text-3xl font-bold">ورود مدیر</h1>

        <p className="mt-3 text-center text-text-secondary">پنل مدیریت Terra</p>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-10 space-y-6">
          <div>
            <input
              {...register("username", {
                required: "نام کاربری الزامی است",
              })}
              placeholder="نام کاربری"
              className="w-full rounded-2xl border border-border px-5 py-4 outline-none focus:border-primary"
            />

            {errors.username && (
              <p className="mt-2 text-sm text-red-500">
                {errors.username.message}
              </p>
            )}
          </div>

          <div>
            <input
              type="password"
              {...register("password", {
                required: "رمز عبور الزامی است",
              })}
              placeholder="رمز عبور"
              className="w-full rounded-2xl border border-border px-5 py-4 outline-none focus:border-primary"
            />

            {errors.password && (
              <p className="mt-2 text-sm text-red-500">
                {errors.password.message}
              </p>
            )}
          </div>

          <button
            disabled={isSubmitting}
            className="w-full rounded-2xl bg-primary py-4 text-white transition hover:opacity-90 disabled:opacity-60"
          >
            ورود
          </button>
        </form>
      </div>
    </section>
  );
}
