import type { Product } from "@/types/product";

import mugImage from "@/app/assets/images/products/mug.jpg";
import vaseImage from "@/app/assets/images/products/vase.jpg";
import plateImage from "@/app/assets/images/products/plate.jpg";
import bowlImage from "@/app/assets/images/products/bowl.jpg";

export const products: Product[] = [
  {
    id: 1,
    slug: "ceramic-mug",

    title: "ماگ سرامیکی",
    englishTitle: "Ceramic Mug",

    description:
      "ماگ سرامیکی دست‌ساز با لعاب مات، مناسب برای نوشیدنی‌های گرم و سرد.",

    image: mugImage,
    gallery: [mugImage, mugImage, mugImage],

    price: 890000,

    category: "mug",

    featured: true,

    createdAt: "2026-07-01",

    keywords: ["ماگ", "لیوان", "سرامیکی", "ceramic", "mug"],

    badge: "NEW",
  },

  {
    id: 2,
    slug: "handmade-vase",

    title: "گلدان دست‌ساز",
    englishTitle: "Handmade Vase",

    description:
      "گلدان سرامیکی دست‌ساز با طراحی مینیمال، مناسب برای دکوراسیون مدرن.",

    image: vaseImage,
    gallery: [vaseImage, vaseImage, vaseImage],

    price: 1250000,

    category: "vase",

    featured: true,

    createdAt: "2026-06-24",

    keywords: ["گلدان", "گلدون", "دکوری", "گل", "vase", "flower"],

    badge: "BEST SELLER",
  },

  {
    id: 3,
    slug: "dinner-plate",

    title: "بشقاب سفالی",
    englishTitle: "Dinner Plate",

    description:
      "بشقاب سفالی دست‌ساز با لعاب طبیعی، مناسب سرو غذا و استفاده روزمره.",

    image: plateImage,
    gallery: [plateImage, plateImage, plateImage],

    price: 760000,

    category: "plate",

    featured: false,

    createdAt: "2026-05-19",

    keywords: ["بشقاب", "plate", "سرو", "dinner"],
  },

  {
    id: 4,
    slug: "ceramic-bowl",

    title: "کاسه سرامیکی",
    englishTitle: "Ceramic Bowl",

    description: "کاسه سرامیکی مینیمال مناسب صبحانه، سالاد و سرو انواع خوراک.",

    image: bowlImage,
    gallery: [bowlImage, bowlImage, bowlImage],

    price: 540000,

    category: "bowl",

    featured: true,

    createdAt: "2026-04-11",

    keywords: ["کاسه", "bowl", "ceramic", "ظرف", "سالاد"],

    badge: "LIMITED",
  },
];
