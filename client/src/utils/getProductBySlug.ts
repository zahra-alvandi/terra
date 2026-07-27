import type { Product } from "@/types/product";

export function getProductBySlug(products: Product[], slug: string) {
  return products.find((product) => product.slug === slug);
}
