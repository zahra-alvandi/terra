import { products } from "@/data/products";
import type { Product } from "@/types/product";

export function getRelatedProducts(product: Product, limit = 4) {
  return products
    .filter((p) => {
      if (p.slug === product.slug) return false;

      const sameCategory = p.category === product.category;

      const keywordMatch =
        p.keywords?.some((k) => product.keywords?.includes(k)) ?? false;

      return sameCategory || keywordMatch;
    })
    .slice(0, limit);
}
