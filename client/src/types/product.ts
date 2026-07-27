export type ProductCategory = "mug" | "vase" | "plate" | "bowl" | string;

export interface Product {
  id: string;

  slug: string;

  title: string;
  englishTitle: string;

  description: string;

  image: string;
  gallery: string[];

  price: number;
  discount: number;

  inventory: number;

  category: ProductCategory;

  isFeatured: boolean;
  isHandmade: boolean;
  isPublished: boolean;

  createdAt: string;

  keywords: string[];

  badge?: string;
}
