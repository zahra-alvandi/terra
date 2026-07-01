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

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </section>
  );
}
