import Container from "@/components/layout/Container";

import { products } from "@/data/products";

import ProductCard from "./ProductCard";

export default function FeaturedProducts() {
  return (
    <section className="py-24">
      <Container>
        <div className="mb-14 flex items-end justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-primary">
              Featured
            </p>

            <h2 className="mt-3 text-4xl font-semibold text-text-primary">
              محصولات منتخب
            </h2>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </section>
  );
}
