import { useFormContext } from "react-hook-form";
import TextField from "@/components/form/TextField";

type CheckoutFormData = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  address: string;
};

export default function CheckoutForm() {
  const {
    register,
    formState: { errors },
  } = useFormContext<CheckoutFormData>();

  return (
    <div className="rounded-3xl border border-border bg-white p-8">
      <h2 className="mb-8 text-2xl font-semibold">اطلاعات گیرنده</h2>

      <div className="grid gap-6 md:grid-cols-2">
        <TextField
          label="نام"
          name="firstName"
          register={register}
          placeholder="زهرا"
          rules={{
            required: "وارد کردن نام الزامی است",
          }}
          error={errors.firstName}
        />

        <TextField
          label="نام خانوادگی"
          name="lastName"
          register={register}
          placeholder="الوندی"
          rules={{
            required: "وارد کردن نام خانوادگی الزامی است",
          }}
          error={errors.lastName}
        />

        <TextField
          label="شماره موبایل"
          name="phone"
          register={register}
          placeholder="09xxxxxxxxx"
          rules={{
            required: "شماره موبایل الزامی است",
            pattern: {
              value: /^09\d{9}$/,
              message: "شماره موبایل معتبر نیست",
            },
          }}
          error={errors.phone}
        />

        <TextField
          label="ایمیل"
          name="email"
          register={register}
          type="email"
          placeholder="example@gmail.com"
        />
      </div>

      <div className="mt-8">
        <label className="mb-2 block text-sm text-text-secondary">آدرس</label>

        <textarea
          {...register("address", {
            required: "آدرس الزامی است",
          })}
          rows={5}
          className="
            w-full
            resize-none
            rounded-2xl
            border
            border-border
            px-4
            py-4
            outline-none
            transition
            focus:border-primary
          "
        />
        {errors.address && (
          <p className="mt-2 text-sm text-red-500">{errors.address.message}</p>
        )}
      </div>
    </div>
  );
}
