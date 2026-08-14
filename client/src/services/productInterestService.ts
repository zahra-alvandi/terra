import { authFetch } from "./authService";

const API = import.meta.env.VITE_API_URL;

export type ProductInterest = {
  id: string;
  productId: string;
  createdAt: string;
  product: {
    id: string;
    title: string;
    slug: string;
    image: string;
    inventory: number;
  };
};

export async function createProductInterest(productId: string) {
  const response = await authFetch(`${API}/product-interests`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      productId,
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to create product interest");
  }

  const result = await response.json();

  return result.data;
}

export async function getMyProductInterests() {
  const response = await authFetch(`${API}/product-interests/my`);

  if (!response.ok) {
    throw new Error("Failed to fetch product interests");
  }

  const result = await response.json();

  return result.data;
}

export async function deleteProductInterest(productId: string) {
  const response = await authFetch(`${API}/product-interests/${productId}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Failed to delete product interest");
  }

  const result = await response.json();

  return result.data;
}