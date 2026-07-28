import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.user.update({
    where: {
      phone: "09387041259",
    },
    data: {
      isAdmin: true,
    },
  });

  console.log("Admin created");
}

main();