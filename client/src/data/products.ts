import type { Product } from "@/types/product";

import mugImage from "@/app/assets/images/products/mug.jpg";
import vaseImage from "@/app/assets/images/products/vase.jpg";
import plateImage from "@/app/assets/images/products/plate.jpg";
import bowlImage from "@/app/assets/images/products/bowl.jpg";

export const products: Product[] = [
  {
    id: 1,
    title: "ماگ سرامیکی",
    englishTitle: "Ceramic Mug",

    image: mugImage,

    price: 890000,

    category: "mug",

    featured: true,

    createdAt: "2026-06-10",

    keywords: ["ماگ", "لیوان", "فنجان", "سرامیک", "mug", "cup", "ceramic"],

    href: "/shop/ceramic-mug",

    badge: "NEW",
  },
  {
    id: 2,
    title: "گلدان دست‌ساز",
    englishTitle: "Handmade Vase",
    image: vaseImage,
    price: 1250000,
    category: "mug",
    featured: true,
    createdAt: "2026-06-10",
    keywords: ["گلدان", "گلدون", "دکوری", "گل", "vase", "flower"],

    href: "/shop/ceramic-mug",
    badge: "NEW",
  },
  {
    id: 3,
    title: "بشقاب سفالی",
    englishTitle: "Dinner Plate",
    image: plateImage,
    price: 760000,
    category: "mug",
    featured: true,
    createdAt: "2026-06-10",
    keywords: ["بشقاب", "سینی", "plate", "dinner"],

    href: "/shop/ceramic-mug",
    badge: "NEW",
  },
  {
    id: 4,
    title: "کاسه سرامیکی",
    englishTitle: "Ceramic Bowl",
    image: bowlImage,
    price: 540000,
    category: "mug",
    featured: true,
    createdAt: "2026-06-10",
    keywords: ["کاسه", "ظرف", "bowl", "ceramic"],

    href: "/shop/ceramic-mug",
    badge: "NEW",
  },
];
