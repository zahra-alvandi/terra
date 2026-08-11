import Container from "@/components/layout/Container";
import ProductCard from "@/components/ui/ProductCard";
import type { Product } from "@/types/product";

type Props = {
  products: Product[];
};

export default function RelatedProducts({ products }: Props) {
  if (!products.length) return null;

  return (
    <section className="py-20">
      <Container>
        <h2 className="mb-8 text-2xl font-semibold text-text-primary">
          محصولات مشابه
        </h2>

        <div className="flex gap-4 overflow-x-auto pb-4">
          {products.map((product) => (
            <div key={product.id} className="w-[260px] flex-shrink-0">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}