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

export async function createProduct(data: any) {
  const token = localStorage.getItem("terra_token");

  const response = await fetch(`${API}/products`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Failed to create product");
  }

  return response.json();
}

export async function updateProduct(id: string, data: any) {
  const token = localStorage.getItem("terra_token");

  const response = await fetch(`${API}/products/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Failed to update product");
  }

  return response.json();
}

export async function deleteProduct(id: string) {
  const token = localStorage.getItem("terra_token");

  const response = await fetch(`${API}/products/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to delete product");
  }

  return response.json();
}
