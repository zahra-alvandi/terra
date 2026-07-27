import type { Product } from "@/types/product";

const API = import.meta.env.VITE_API_URL;

export async function getProducts(): Promise<Product[]> {
  const response = await fetch(`${API}/products`);

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  const result = await response.json();

  return result.data;
}
