import type { Order } from "@/types/order";
import { getOrders } from "@/utils/orderStorage";

const LAST_ORDER_KEY = "terra-last-order-number";

export const orderService = {
  generateOrderNumber() {
    return `TR-${Date.now().toString().slice(-6)}`;
  },

  setLastOrderNumber(orderNumber: string) {
    localStorage.setItem(LAST_ORDER_KEY, orderNumber);
  },

  getLastOrderNumber() {
    return localStorage.getItem(LAST_ORDER_KEY) ?? "";
  },

  findByOrderNumber(orderNumber: string): Order | null {
    const orders = getOrders();

    return (
      orders.find(
        (order) =>
          order.orderNumber.toLowerCase() === orderNumber.trim().toLowerCase(),
      ) ?? null
    );
  },
};
