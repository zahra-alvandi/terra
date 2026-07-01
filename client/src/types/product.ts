export type ProductCategory = "mug" | "vase" | "plate" | "bowl";

export interface Product {
  id: number;

  slug: string;

  title: string;
  englishTitle: string;

  description: string;

  image: string;
  gallery: string[];

  price: number;

  category: ProductCategory;

  featured: boolean;

  createdAt: string;

  keywords: string[];

  badge?: "NEW" | "BEST SELLER" | "LIMITED";
}
