import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getUsers() {
  const users = await prisma.user.findMany({
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

  console.log(JSON.stringify(users, null, 2));

  return users;
}