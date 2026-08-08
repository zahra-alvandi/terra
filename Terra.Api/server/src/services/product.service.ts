import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

function slugify(text: string): string {
  return text
    .toString()
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w\-آ-ی]+/g, "")
    .replace(/\-\-+/g, "-")
    .replace(/^-+|-+$/g, "");
}

async function generateUniqueSlug(baseText: string): Promise<string> {
  const base = slugify(baseText) || "product";
  let slug = base;
  let counter = 2;

  while (await prisma.product.findUnique({ where: { slug } })) {
    slug = `${base}-${counter}`;
    counter++;
  }

  return slug;
}

export async function createProduct(data: {
  title: string;
  englishTitle: string;
  slug?: string; // now optional — will be auto-generated if missing or taken
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
  const slug = await generateUniqueSlug(
    data.slug || data.englishTitle || data.title,
  );

  return prisma.product.create({
    data: {
      title: data.title,
      englishTitle: data.englishTitle,
      slug,
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

export async function updateProduct(
  id: string,
  data: {
    title: string;
    englishTitle: string;
    slug?: string;
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
  },
) {
  const existing = await prisma.product.findUnique({ where: { id } });

  let slug = existing?.slug;

  // Only regenerate the slug if the admin actually changed it
  if (data.slug && data.slug !== existing?.slug) {
    slug = await generateUniqueSlug(data.slug);
  }

  return prisma.product.update({
    where: { id },
    data: { ...data, slug },
  });
}
