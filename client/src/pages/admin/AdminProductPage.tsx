import { productService } from "@/services/productService";
import { useState } from "react";

import ProductDrawer from "@/components/admin/products/ProductDrawer";
import ProductForm from "@/components/admin/products/ProductForm";

export default function AdminProductPage() {
  const products = productService.getAll();
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">محصولات</h1>

          <p className="mt-2 text-text-secondary">مدیریت محصولات فروشگاه</p>
        </div>

        <button
          onClick={() => setDrawerOpen(true)}
          className="rounded-2xl bg-primary px-6 py-3 text-white"
        >
          افزودن محصول
        </button>
      </div>

      <div className="rounded-3xl border border-border bg-white">
        <table className="w-full">
          <thead className="bg-stone-50">
            <tr>
              <th className="px-6 py-4 text-right">تصویر</th>
              <th className="px-6 py-4 text-right">نام</th>
              <th className="px-6 py-4 text-right">قیمت</th>
              <th className="px-6 py-4 text-right">عملیات</th>
            </tr>
          </thead>

          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="border-t border-border">
                <td className="px-6 py-5">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-16 w-16 rounded-xl object-cover"
                  />
                </td>

                <td className="px-6 py-5">{product.title}</td>

                <td className="px-6 py-5">
                  {product.price.toLocaleString()} تومان
                </td>

                <td className="space-x-3 px-6 py-5">
                  <button className="text-blue-600">ویرایش</button>

                  <button className="mr-4 text-red-600">حذف</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ProductDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <ProductForm />
      </ProductDrawer>
    </div>
  );
}
