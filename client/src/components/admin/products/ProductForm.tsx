import { useForm } from "react-hook-form";
import type { Product } from "@/types/product";
import { useState } from "react";

export default function ProductForm() {
  const { register } = useForm<Product>();
  const [preview, setPreview] = useState("");
  return (
    <div className="space-y-6">
      <input
        placeholder="عنوان فارسی"
        className="w-full rounded-xl border border-border p-4"
      />

      <input
        placeholder="عنوان انگلیسی"
        className="w-full rounded-xl border border-border p-4"
      />

      <input
        placeholder="Slug"
        className="w-full rounded-xl border border-border p-4"
      />

      <input
        placeholder="قیمت"
        className="w-full rounded-xl border border-border p-4"
      />

      <button className="w-full rounded-xl bg-primary py-4 text-white">
        ذخیره
      </button>
      <select
        {...register("category")}
        className="w-full rounded-xl border border-border p-4"
      >
        <option value="mug">ماگ</option>
        <option value="vase">گلدان</option>
        <option value="plate">بشقاب</option>
        <option value="bowl">کاسه</option>
      </select>
      <select
        {...register("badge")}
        className="w-full rounded-xl border border-border p-4"
      >
        <option value="">بدون برچسب</option>
        <option value="NEW">جدید</option>
        <option value="BEST SELLER">پرفروش</option>
        <option value="LIMITED">محدود</option>
      </select>
      <label className="flex items-center gap-3">
        <input type="checkbox" {...register("featured")} />
        محصول ویژه
      </label>
      <textarea
        rows={5}
        {...register("description")}
        className="w-full rounded-xl border border-border p-4"
      />
      <div className="space-y-4">
        <label className="block font-medium">تصویر محصول</label>

        <input
          type="file"
          accept="image/*"
          onChange={(e) => {
            const file = e.target.files?.[0];

            if (!file) return;

            setPreview(URL.createObjectURL(file));
          }}
        />

        {preview && (
          <img
            src={preview}
            alt="preview"
            className="h-48 w-full rounded-2xl object-cover"
          />
        )}
      </div>
    </div>
  );
}
