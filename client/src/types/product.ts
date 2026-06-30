import type { ProductCategory } from "./product-category";

export interface Product {
  id: number;

  title: string;
  englishTitle: string;
  keywords: string[];

  image: string;

  price: number;

  category: ProductCategory;

  featured: boolean;

  createdAt: string;

  badge?: "NEW" | "BEST SELLER" | "LIMITED";

  href: string;
}
