import { productService } from "@/services/productService";

export function getProductBySlug(slug: string) {
  return productService
    .getAll()
    .find((product) => product.slug === slug);
}