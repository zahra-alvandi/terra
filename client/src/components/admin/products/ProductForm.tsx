import { useState } from "react";
import { useForm } from "react-hook-form";
import type { Product } from "@/types/product";

type Props = {
  onSubmit: (product: Product) => void;
};

export default function ProductForm({ product, onSubmit }: Props) {
  const { register, handleSubmit } = useForm<Product>({
  values:
    product ??
    ({
      title: "",
      englishTitle: "",
      slug: "",
      description: "",
      image: "",
      gallery: [],
      price: 0,
      category: "mug",
      featured: false,
      createdAt: "",
      keywords: [],
    } as Product),
});

  const [preview, setPreview] = useState("");

  const [keywordsInput, setKeywordsInput] = useState("");

  const submitForm = (data: Product) => {
    onSubmit({
      ...data,

      id: Date.now(),

      image: preview,

      gallery: preview ? [preview] : [],

      createdAt: new Date().toISOString(),

      featured: data.featured ?? false,

      keywords: keywordsInput
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean),
    });
  };

  return (
    <form onSubmit={handleSubmit(submitForm)} className="space-y-6">
      <input
        {...register("title")}
        placeholder="عنوان فارسی"
        className="w-full rounded-xl border border-border p-4"
      />

      <input
        {...register("englishTitle")}
        placeholder="عنوان انگلیسی"
        className="w-full rounded-xl border border-border p-4"
      />

      <input
        {...register("slug")}
        placeholder="Slug"
        className="w-full rounded-xl border border-border p-4"
      />

      <input
        type="number"
        {...register("price", {
          valueAsNumber: true,
        })}
        placeholder="قیمت"
        className="w-full rounded-xl border border-border p-4"
      />
      <select
        {...register("category")}
        className="w-full rounded-xl border border-border p-4"
      >
        <option value="">انتخاب دسته‌بندی</option>
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

      <label className="flex items-center gap-3 rounded-xl border border-border p-4">
        <input type="checkbox" {...register("featured")} className="h-5 w-5" />

        <span>نمایش در محصولات ویژه</span>
      </label>

      <textarea
        rows={5}
        {...register("description")}
        placeholder="توضیحات محصول..."
        className="w-full resize-none rounded-xl border border-border p-4"
      />

      <input
        value={keywordsInput}
        onChange={(e) => setKeywordsInput(e.target.value)}
        placeholder="کلمات کلیدی (مثال: ماگ،سرامیک،قهوه)"
        className="w-full rounded-xl border border-border p-4"
      />
      <div className="space-y-4 rounded-2xl border border-dashed border-border p-5">
        <label className="block font-medium">تصویر اصلی</label>

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
            className="h-56 w-full rounded-2xl object-cover"
          />
        )}
      </div>
      <div className="flex justify-end">
        <button
          type="submit"
          className="rounded-2xl bg-primary px-8 py-4 text-white transition hover:opacity-90"
        >
          ذخیره محصول
        </button>
      </div>
    </form>
  );
}
