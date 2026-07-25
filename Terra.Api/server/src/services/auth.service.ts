import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export async function register(data: {
  firstName: string;
  lastName: string;
  phone: string;
  password: string;
}) {
  const existingUser = await prisma.user.findUnique({
    where: {
      phone: data.phone,
    },
  });

  if (existingUser) {
    throw new Error("PHONE_ALREADY_EXISTS");
  }

  const hashedPassword = await bcrypt.hash(data.password, 10);

  const user = await prisma.user.create({
    data: {
      firstName: data.firstName,
      lastName: data.lastName,
      phone: data.phone,
      password: hashedPassword,
    },
  });

  return user;
}

export async function login(data: { phone: string; password: string }) {
  const user = await prisma.user.findUnique({
    where: {
      phone: data.phone,
    },
  });

  if (!user) {
    throw new Error("INVALID_CREDENTIALS");
  }

  const validPassword = await bcrypt.compare(data.password, user.password);

  if (!validPassword) {
    throw new Error("INVALID_CREDENTIALS");
  }

  return user;
}
