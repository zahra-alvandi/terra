import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import type { Product } from "@/types/product";
type Props = {
  product?: Product | null;

  onSubmit: (product: Product) => void;
};
export default function ProductForm({ product, onSubmit }: Props) {
  const { register, handleSubmit, reset } = useForm<Product>({
    defaultValues: {
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
      badge: undefined,
    },
  });
  const [preview, setPreview] = useState("");

  const [keywordsInput, setKeywordsInput] = useState("");
  useEffect(() => {
    if (!product) return;

    reset({
      title: product.title,
      englishTitle: product.englishTitle,
      slug: product.slug,
      description: product.description,
      price: product.price,
      category: product.category,
      featured: product.featured,
      badge: product.badge,
    });

    setPreview(product.image);

    setKeywordsInput(product.keywords.join(", "));
  }, [product, reset]);

  const submitForm = (data: any) => {
    console.log(data);
    const newProduct: Product = {
      id: product?.id ?? Date.now(),

      slug: data.slug,

      title: data.title,

      englishTitle: data.englishTitle,

      description: data.description,

      image: preview,

      gallery: preview ? [preview] : (product?.gallery ?? []),

      price: Number(data.price),

      category: data.category,

      featured: data.featured,

      createdAt: product?.createdAt ?? new Date().toISOString(),

      keywords: keywordsInput
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean),

      badge: data.badge || undefined,
    };

    onSubmit(newProduct);
    reset();

    setPreview("");

    setKeywordsInput("");
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
        {...register("price")}
        placeholder="قیمت"
        className="w-full rounded-xl border border-border p-4"
      />
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
      <label className="flex items-center gap-3 rounded-xl border border-border p-4">
        <input type="checkbox" {...register("featured")} />

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
        placeholder="کلمات کلیدی (با , جدا کنید)"
        className="w-full rounded-xl border border-border p-4"
      />
      <div className="space-y-4 rounded-2xl border border-dashed border-border p-5">
        <label className="font-medium">تصویر محصول</label>

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
          {product ? "ذخیره تغییرات" : "افزودن محصول"}
        </button>
      </div>
    </form>
  );
}
