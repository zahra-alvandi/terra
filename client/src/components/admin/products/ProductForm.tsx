import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import type { Product } from "@/types/product";
import { uploadImage } from "@/services/uploadService";
import { getImageUrl } from "@/utils/image";

type Props = {
  product?: Product | null;

  onSubmit: (data: any) => Promise<void>;
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
      discount: 0,
      inventory: 0,
      category: "mug",
      isFeatured: false,
      isHandmade: true,
      isPublished: true,
      createdAt: "",
      keywords: [],
      badge: undefined,
    },
  });

  const [preview, setPreview] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const [keywordsInput, setKeywordsInput] = useState("");
  useEffect(() => {
    if (!product) return;

    reset({
      title: product.title,
      englishTitle: product.englishTitle,
      slug: product.slug,
      description: product.description,
      price: product.price,
      discount: product.discount,
      inventory: product.inventory,
      category: product.category,
      isFeatured: product.isFeatured,
      isHandmade: product.isHandmade,
      isPublished: product.isPublished,
      badge: product.badge ?? "",
    });

    setPreview(product.image);

    setKeywordsInput(product.keywords.join(", "));
  }, [product, reset]);

  const submitForm = async (data: any) => {
    let imagePath = product?.image || "";

    if (selectedFile) {
      imagePath = await uploadImage(selectedFile);
    }

    await onSubmit({
      ...data,

      image: imagePath,
      gallery: imagePath ? [imagePath] : [],

      keywords: keywordsInput
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean),
    });

    reset();

    setPreview("");
    setSelectedFile(null);
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
        {...register("price", { valueAsNumber: true })}
        placeholder="قیمت"
        className="w-full rounded-xl border border-border p-4"
      />
      <input
        type="number"
        {...register("discount", { valueAsNumber: true })}
        placeholder="درصد تخفیف"
        className="w-full rounded-xl border border-border p-4"
      />

      <input
        type="number"
        {...register("inventory", { valueAsNumber: true })}
        placeholder="موجودی"
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
        <input type="checkbox" {...register("isFeatured")} />

        <span>نمایش در محصولات ویژه</span>
      </label>
      <label className="flex items-center gap-3 rounded-xl border border-border p-4">
        <input type="checkbox" {...register("isHandmade")} />
        <span>محصول دست‌ساز</span>
      </label>

      <label className="flex items-center gap-3 rounded-xl border border-border p-4">
        <input type="checkbox" {...register("isPublished")} />
        <span>نمایش در سایت</span>
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

            setSelectedFile(file);
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
