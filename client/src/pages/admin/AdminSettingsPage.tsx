import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

type SettingsForm = {
  storeName: string;
  phone: string;
  email: string;
  address: string;
  instagram: string;
  telegram: string;
  whatsapp: string;
};

export default function AdminSettingsPage() {
  const { register, handleSubmit } = useForm<SettingsForm>();

  const onSubmit = () => {
    toast.success("تنظیمات با موفقیت ذخیره شد.");
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">تنظیمات</h1>

        <p className="mt-2 text-text-secondary">اطلاعات فروشگاه</p>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6 rounded-3xl border border-border bg-white p-8"
      >
        <input
          {...register("storeName")}
          placeholder="نام فروشگاه"
          className="w-full rounded-2xl border border-border p-4"
        />

        <input
          {...register("phone")}
          placeholder="شماره تماس"
          className="w-full rounded-2xl border border-border p-4"
        />

        <input
          {...register("email")}
          placeholder="ایمیل"
          className="w-full rounded-2xl border border-border p-4"
        />

        <textarea
          {...register("address")}
          rows={4}
          placeholder="آدرس"
          className="w-full rounded-2xl border border-border p-4"
        />

        <input
          {...register("instagram")}
          placeholder="Instagram"
          className="w-full rounded-2xl border border-border p-4"
        />

        <input
          {...register("telegram")}
          placeholder="Telegram"
          className="w-full rounded-2xl border border-border p-4"
        />

        <input
          {...register("whatsapp")}
          placeholder="WhatsApp"
          className="w-full rounded-2xl border border-border p-4"
        />

        <button
          type="submit"
          className="rounded-2xl bg-primary px-8 py-4 text-white"
        >
          ذخیره تنظیمات
        </button>
      </form>
    </div>
  );
}
