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

    window.dispatchEvent(new Event("products-updated"));
  },

  add(product: Product) {
    const products = loadProducts();

    products.unshift(product);

    this.save(products);
  },

  update(product: Product) {
    const products = loadProducts().map((item) =>
      item.id === product.id ? product : item,
    );

    this.save(products);
  },

  delete(id: number) {
    const products = loadProducts().filter((item) => item.id !== id);

    this.save(products);
  },
};
