import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function createProduct(data: {
  title: string;
  englishTitle: string;
  slug: string;
  description: string;
  image: string;
  gallery: string[];
  price: number;
  discount?: number;
  inventory: number;
  category: string;
  keywords: string[];
  badge?: string;
  isFeatured?: boolean;
  isHandmade?: boolean;
}) {
  return prisma.product.create({
    data: {
      title: data.title,
      englishTitle: data.englishTitle,
      slug: data.slug,
      description: data.description,

      image: data.image,
      gallery: data.gallery,

      price: data.price,
      discount: data.discount ?? 0,

      inventory: data.inventory,

      category: data.category,

      keywords: data.keywords,

      badge: data.badge,

      isFeatured: data.isFeatured ?? false,
      isHandmade: data.isHandmade ?? true,
    },
  });
}

export async function getProducts() {
  return prisma.product.findMany({
    where: {
      isPublished: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
}

export async function getAllProductsAdmin() {
  return prisma.product.findMany({
    orderBy: { createdAt: "desc" },
  });
}

export async function deleteProduct(id: string) {
  return prisma.product.delete({
    where: {
      id,
    },
  });
}

// export async function updateProduct(
//   id: string,
//   data: {
//     title: string;
//     englishTitle: string;
//     slug: string;
//     description: string;
//     image: string;
//     gallery: string[];
//     price: number;
//     discount?: number;
//     inventory: number;
//     category: string;
//     keywords: string[];
//     badge?: string;
//     isFeatured?: boolean;
//     isHandmade?: boolean;
//   },
// ) 
// {
//   return prisma.product.update({
//     where: { id },
//     data,
//   });
// }

export async function updateProduct(id: string, data: any) {
  console.log("UPDATING", id, data);   // <-- add this line
  return prisma.product.update({
    where: { id },
    data,
  });
}