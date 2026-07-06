import type { Order } from "@/types/order";

const STORAGE_KEY = "terra_orders";

export const orderService = {
  getAll(): Order[] {
    const data = localStorage.getItem(STORAGE_KEY);

    if (!data) return [];

    return JSON.parse(data);
  },

  save(order: Order) {
    const orders = this.getAll();

    orders.unshift(order);

    localStorage.setItem(STORAGE_KEY, JSON.stringify(orders));
  },

  clear() {
    localStorage.removeItem(STORAGE_KEY);
  },
};
