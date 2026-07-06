export enum OrderStatus {
  PendingReview = "PendingReview",
  Confirmed = "Confirmed",
  Preparing = "Preparing",
  Shipped = "Shipped",
  Delivered = "Delivered",
  Cancelled = "Cancelled",
}

export interface Order {
  id: string;

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
