import { products } from "@/data/products";
import type { Product } from "@/types/product";

export function getRelatedProducts(currentProduct: Product, limit = 4) {
  return products
    .filter(
      (product) =>
        product.id !== currentProduct.id &&
        product.category === currentProduct.category,
    )
    .slice(0, limit);
}
