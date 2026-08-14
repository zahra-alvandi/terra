import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function createInterest(userId: string, productId: string) {
  return prisma.productInterest.upsert({
    where: {
      userId_productId: {
        userId,
        productId,
      },
    },
    update: {},
    create: {
      userId,
      productId,
    },
  });
}

export async function getMyInterests(userId: string) {
  return prisma.productInterest.findMany({
    where: {
      userId,
    },
    include: {
      product: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
}

export async function deleteInterest(userId: string, productId: string) {
  return prisma.productInterest.delete({
    where: {
      userId_productId: {
        userId,
        productId,
      },
    },
  });
}
