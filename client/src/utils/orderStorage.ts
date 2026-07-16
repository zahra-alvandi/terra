import { ORDER_STORAGE_KEY } from "@/constants/storage";
import type { Order } from "@/types/order";

export function getOrders(): Order[] {
  const data = localStorage.getItem(ORDER_STORAGE_KEY);

  if (!data) return [];

  try {
    return JSON.parse(data);
  } catch {
    return [];
  }
}

export function saveOrder(order: Order) {
  const orders = getOrders();

  orders.unshift(order);

  localStorage.setItem(ORDER_STORAGE_KEY, JSON.stringify(orders));
}

export function saveOrders(orders: Order[]) {
  localStorage.setItem(ORDER_STORAGE_KEY, JSON.stringify(orders));
}

export function clearOrders() {
  localStorage.removeItem(ORDER_STORAGE_KEY);
}
