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
  return prisma.$transaction(async (tx) => {
    // 1. Validate every item BEFORE creating anything
    for (const item of data.items) {
      const product = await tx.product.findUnique({
        where: { id: item.productId },
      });

      if (!product) {
        throw new Error(`محصول با شناسه ${item.productId} یافت نشد`);
      }

      if (product.inventory < item.quantity) {
        throw new Error(`موجودی محصول کافی نیست: ${product.title}`);
      }
    }

    // 2. Create the order
    const order = await tx.order.create({
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

    // 3. Decrement inventory for each item
    for (const item of data.items) {
      await tx.product.update({
        where: { id: item.productId },
        data: {
          inventory: {
            decrement: item.quantity,
          },
        },
      });
    }

    return order;
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

export async function getOrdersByUserId(userId: string) {
  return prisma.order.findMany({
    where: {
      userId,
    },
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

export async function getMyOrders(userId: string) {
  return prisma.order.findMany({
    where: {
      userId,
    },
    include: {
      items: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
}
