import vaseImage from "@/app/assets/images/categories/vase.jpg";
import mugImage from "@/app/assets/images/categories/mug.jpg";
import dinnerwareImage from "@/app/assets/images/categories/dinnerware.jpg";
import decoreImage from "@/app/assets/images/categories/decor.jpg";

export const categories = [
  {
    id: 1,
    title: "گلدان",
    image: vaseImage,
    href: "/shop?category=vase",
  },
  {
    id: 2,
    title: "ماگ",
    image: mugImage,
    href: "/shop?category=mug",
  },
  {
    id: 3,
    title: "ظروف پذیرایی",
    image: dinnerwareImage,
    href: "/shop?category=dinnerware",
  },
  {
    id: 4,
    title: "دکور",
    image: decoreImage,
    href: "/shop?category=decor",
  },
];
