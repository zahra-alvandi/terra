import { products } from "@/data/products";
import type { Product } from "@/types/product";

const PRODUCT_KEY = "terra-products";

function loadProducts(): Product[] {
  const data = localStorage.getItem(PRODUCT_KEY);

  if (data) {
    return JSON.parse(data);
  }

  localStorage.setItem(PRODUCT_KEY, JSON.stringify(products));

  return products;
}

export const productService = {
  getAll() {
    return loadProducts();
  },

  getById(id: number) {
    return loadProducts().find((item) => item.id === id) ?? null;
  },

  save(products: Product[]) {
    localStorage.setItem(PRODUCT_KEY, JSON.stringify(products));
  },
};
