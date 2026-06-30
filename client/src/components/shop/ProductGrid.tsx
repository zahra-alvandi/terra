import Container from "@/components/layout/Container";
import ProductCard from "@/components/ui/ProductCard";
import { SearchIcon } from "lucide-react";

import type { Product } from "@/types/product";

type Props = {
  products: Product[];
};

export default function ProductGrid({ products }: Props) {
  return (
    <section className="py-20">
      <Container>
        {products.length === 0 ? (
          <div className="flex flex-col items-center justify-center rounded-3xl border border-dashed border-border py-24 text-center">
            <div className="text-5xl">
              <SearchIcon />
            </div>

            <h2 className="mt-6 text-2xl font-semibold text-text-primary">
              محصولی پیدا نشد
            </h2>

            <p className="mt-3 max-w-sm text-text-secondary leading-7">
              عبارت دیگری را جستجو کنید یا دسته‌بندی متفاوتی را انتخاب کنید.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
