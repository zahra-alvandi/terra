import type { Order, OrderStatus } from "@/types/order";
import { getOrders, saveOrders } from "@/utils/orderStorage";

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
  updateStatus(orderId: string, status: OrderStatus) {
    const orders = getOrders();

    const updatedOrders = orders.map((order) =>
      order.id === orderId
        ? {
            ...order,
            status,
          }
        : order,
    );

    localStorage.setItem("terra_orders", JSON.stringify(updatedOrders));
  },

  getById(orderId: string): Order | null {
    const orders = getOrders();

    return orders.find((order) => order.id === orderId) ?? null;
  },
  update(order: Order) {
    const orders = getOrders().map((item) =>
      item.id === order.id ? order : item,
    );

    saveOrders(orders);
  },
};
