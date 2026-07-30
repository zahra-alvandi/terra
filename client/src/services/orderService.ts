const API = import.meta.env.VITE_API_URL;

export async function createOrder(data: any, receipt: File) {
  const formData = new FormData();

  formData.append("receipt", receipt);

  formData.append("orderNumber", data.orderNumber);
  formData.append("firstName", data.firstName);
  formData.append("lastName", data.lastName);
  formData.append("phone", data.phone);
  formData.append("address", data.address);
  formData.append("totalPrice", String(data.totalPrice));

  formData.append("items", JSON.stringify(data.items));

  const response = await fetch(`${API}/orders`, {
    method: "POST",
    body: formData,
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
