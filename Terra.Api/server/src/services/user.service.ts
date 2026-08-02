import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getUsers() {
  return prisma.user.findMany({
    where: {
      isAdmin: false,
    },
    orderBy: {
      createdAt: "desc",
    },
    include: {
      orders: {
        select: {
          orderNumber: true,
          totalPrice: true,
        },
      },
    },
  });
}
