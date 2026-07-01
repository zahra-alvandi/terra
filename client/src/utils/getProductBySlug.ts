import { products } from "@/data/products";

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}
