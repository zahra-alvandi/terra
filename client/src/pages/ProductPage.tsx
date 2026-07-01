import { useParams } from "react-router-dom";

import { getProductBySlug } from "@/utils/getProductBySlug";
import Container from "@/components/layout/Container";

import ProductGallery from "@/components/product/ProductGallery";
import ProductInfo from "@/components/product/ProductInfo";
import ProductBreadcrumb from "@/components/product/ProductBreadcrumb";
import { useState } from "react";
import { getRelatedProducts } from "@/utils/getRelatedProducts";
import RelatedProducts from "@/components/product/RelatedProducts";

export default function ProductPage() {
  const { slug } = useParams();
  const [quantity, setQuantity] = useState(1);
  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };
  const product = slug ? getProductBySlug(slug) : undefined;
  const relatedProducts = product ? getRelatedProducts(product) : [];

  if (!product) {
    return (
      <div className="py-40 text-center">
        <h1 className="text-3xl font-semibold">محصول پیدا نشد</h1>

        <p className="mt-4 text-text-secondary">این محصول وجود ندارد.</p>
      </div>
    );
  }

  return (
    <section className="py-20">
      <Container>
        <ProductBreadcrumb title={product.title} />
        <div className="grid gap-16 lg:grid-cols-2">
          <ProductGallery product={product} />

          <ProductInfo
            product={product}
            quantity={quantity}
            onIncrease={increaseQuantity}
            onDecrease={decreaseQuantity}
          />
        </div>
      </Container>
      <RelatedProducts products={relatedProducts} />
    </section>
  );
}
