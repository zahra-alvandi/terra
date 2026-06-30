import Container from "@/components/layout/Container";
import ProductCard from "@/components/home/ProductCard";

import type { Product } from "@/types/product";

type Props = {
  products: Product[];
};

export default function ProductGrid({ products }: Props) {
  return (
    <section className="py-20">
      <Container>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </section>
  );
}
