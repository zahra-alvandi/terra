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
    href: "/shop/ceramic-mug",
    badge: "NEW",
  },
  {
    id: 2,
    title: "گلدان دست‌ساز",
    englishTitle: "Handmade Vase",
    image: vaseImage,
    price: 1250000,
    href: "/shop/handmade-vase",
    badge: "BEST SELLER",
  },
  {
    id: 3,
    title: "بشقاب سفالی",
    englishTitle: "Dinner Plate",
    image: plateImage,
    price: 760000,
    href: "/shop/dinner-plate",
  },
  {
    id: 4,
    title: "کاسه سرامیکی",
    englishTitle: "Ceramic Bowl",
    image: bowlImage,
    price: 540000,
    href: "/shop/ceramic-bowl",
    badge: "LIMITED",
  },
];
