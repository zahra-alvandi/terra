import { OrderStatus } from "@/types/order";

export const orderStatusMap = {
  [OrderStatus.PendingReview]: {
    text: "در انتظار بررسی",
    color: "bg-yellow-100 text-yellow-700",
  },

  [OrderStatus.Confirmed]: {
    text: "تأیید شده",
    color: "bg-blue-100 text-blue-700",
  },

  [OrderStatus.Preparing]: {
    text: "در حال آماده‌سازی",
    color: "bg-indigo-100 text-indigo-700",
  },

  [OrderStatus.Shipped]: {
    text: "ارسال شده",
    color: "bg-purple-100 text-purple-700",
  },

  [OrderStatus.Delivered]: {
    text: "تحویل داده شده",
    color: "bg-green-100 text-green-700",
  },

  [OrderStatus.Cancelled]: {
    text: "لغو شده",
    color: "bg-red-100 text-red-700",
  },
};
