import { useFormContext, useWatch } from "react-hook-form";
import TextField from "@/components/form/TextField";

type CheckoutFormData = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  city: string;
  address: string;
  shippingMethod: "courier" | "tipax" | "";
};

export default function CheckoutForm() {
  const {
    register,
    formState: { errors },
  } = useFormContext<CheckoutFormData>();

  const city = useWatch({
    name: "city",
  });

  const isTehran = city === "تهران";

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

        <div>
          <label className="mb-2 block text-sm text-text-secondary">شهر</label>

          <select
            {...register("city", {
              required: "انتخاب شهر الزامی است",
            })}
            className="
              w-full
              rounded-2xl
              border
              border-border
              bg-white
              px-4
              py-4
              outline-none
              transition
              focus:border-primary
            "
          >
            <option value="">انتخاب شهر</option>
            <option value="تهران">تهران</option>
            <option value="سایر">سایر</option>
          </select>

          {errors.city && (
            <p className="mt-2 text-sm text-red-500">{errors.city.message}</p>
          )}
        </div>
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

      {isTehran && (
        <div className="mt-8">
          <label className="mb-3 block text-sm text-text-secondary">
            روش ارسال
          </label>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="cursor-pointer">
              <input
                type="radio"
                value="courier"
                {...register("shippingMethod", {
                  required: "انتخاب روش ارسال الزامی است",
                })}
                className="peer sr-only"
              />

              <div className="rounded-2xl border border-border p-5 transition peer-checked:border-primary peer-checked:bg-primary/5">
                <p className="font-semibold">ارسال با پیک</p>
              </div>
            </label>

            <label className="cursor-pointer">
              <input
                type="radio"
                value="tipax"
                {...register("shippingMethod", {
                  required: "انتخاب روش ارسال الزامی است",
                })}
                className="peer sr-only"
              />

              <div className="rounded-2xl border border-border p-5 transition peer-checked:border-primary peer-checked:bg-primary/5">
                <p className="font-semibold">ارسال با تیپاکس</p>
              </div>
            </label>
          </div>

          {errors.shippingMethod && (
            <p className="mt-2 text-sm text-red-500">
              {errors.shippingMethod.message}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
