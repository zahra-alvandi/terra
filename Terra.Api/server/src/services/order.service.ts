import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function createOrder(data: {
  userId: string;
  orderNumber: string;

  firstName: string;
  lastName: string;
  phone: string;
  address: string;

  totalPrice: number;

  receiptImage?: string;

  items: {
    productId: string;
    title: string;
    image: string;
    price: number;
    quantity: number;
  }[];
}) {
  return prisma.order.create({
    data: {
      userId: data.userId,
      orderNumber: data.orderNumber,

      firstName: data.firstName,
      lastName: data.lastName,
      phone: data.phone,
      address: data.address,

      totalPrice: data.totalPrice,

      receiptImage: data.receiptImage,

      items: {
        create: data.items,
      },
    },

    include: {
      items: true,
    },
  });
}

export async function getOrders() {
  return prisma.order.findMany({
    include: {
      items: true,
    },

    orderBy: {
      createdAt: "desc",
    },
  });
}

export async function updateOrderStatus(id: string, status: string) {
  return prisma.order.update({
    where: {
      id,
    },
    data: {
      status,
    },
  });
}

export async function getOrderByNumber(orderNumber: string) {
  return prisma.order.findUnique({
    where: { orderNumber },
    include: { items: true },
  });
}
