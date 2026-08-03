import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function createMessage(data: {
  name: string;
  phone: string;
  email?: string;
  message: string;
}) {
  return prisma.contactMessage.create({
    data,
  });
}

export async function getMessages() {
  return prisma.contactMessage.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
}

export async function markAsRead(id: string) {
  return prisma.contactMessage.update({
    where: { id },
    data: {
      isRead: true,
    },
  });
}

export async function deleteMessage(id: string) {
  return prisma.contactMessage.delete({
    where: { id },
  });
}
