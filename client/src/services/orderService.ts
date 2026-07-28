const API = import.meta.env.VITE_API_URL;

export async function createOrder(data: any) {
  const response = await fetch(`${API}/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Failed to create order");
  }

  const result = await response.json();

  return result.data;
}

export async function getOrders(token: string) {
  const response = await fetch(`${API}/orders`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch orders");
  }

  const result = await response.json();

  return result.data;
}

import { authFetch } from "./authService";

export async function updateOrderStatus(id: string, status: string) {
  const response = await authFetch(`${API}/orders/${id}/status`, {
    method: "PATCH",
    body: JSON.stringify({ status }),
  });

  if (!response.ok) {
    throw new Error("Failed to update order status");
  }

  const result = await response.json();

  return result.data;
}
