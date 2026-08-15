export enum OrderStatus {
  PendingReview = "درانتظار بررسی",
  Confirmed = "تائید شده",
  Preparing = "درحال آماده سازی",
  Shipped = "ارسال شده",
  Delivered = "تحویل داده شد",
  Cancelled = "لغو شد",
}

export interface Order {
  id: string;

  orderNumber: string;

  firstName: string;
  lastName: string;

  phone: string;
  email?: string;

  address: string;

  totalPrice: number;

  items: {
    id: number;
    name: string;
    price: number;
    quantity: number;
    image: string;
  }[];

  receiptImage: string;

  status: OrderStatus;

  createdAt: string;
}
