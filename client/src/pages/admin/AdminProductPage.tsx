import { productService } from "@/services/productService";
import { useState } from "react";

import ProductDrawer from "@/components/admin/products/ProductDrawer";
import ProductForm from "@/components/admin/products/ProductForm";
import type { Product } from "@/types/product";
import toast from "react-hot-toast";

export default function AdminProductPage() {
  const [products, setProducts] = useState(productService.getAll());
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const refreshProducts = () => {
    setProducts(productService.getAll());

    setDrawerOpen(false);
  };
  const handleCreateProduct = (product: Product) => {
    productService.add(product);

    refreshProducts();

    toast.success("محصول با موفقیت اضافه شد.");
  };
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">محصولات</h1>

          <p className="mt-2 text-text-secondary">مدیریت محصولات فروشگاه</p>
        </div>

        <button
          type="button"
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
                  <button
                    type="button"
                    onClick={() => {
                      setEditingProduct(product);
                      setDrawerOpen(true);
                    }}
                    className="text-blue-600 hover:underline"
                  >
                    ویرایش
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      if (!confirm("این محصول حذف شود؟")) return;

                      productService.delete(product.id);

                      refreshProducts();

                      toast.success("محصول حذف شد.");
                    }}
                    className="mr-4 text-red-600 hover:underline"
                  >
                    حذف
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ProductDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <ProductForm product={editingProduct} onSubmit={handleCreateProduct} />
      </ProductDrawer>
    </div>
  );
}
