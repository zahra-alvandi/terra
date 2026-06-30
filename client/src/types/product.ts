export interface Product {
  id: number;
  title: string;
  englishTitle: string;
  image: string;
  price: number;
  badge?: "NEW" | "BEST SELLER" | "LIMITED";
  href: string;
}
