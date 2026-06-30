import ShopHeader from "@/components/shop/ShopHeader";
import ShopToolbar from "@/components/shop/ShopToolbar";
import ProductGrid from "@/components/shop/ProductGrid";

import { useState } from "react";
import { products } from "@/data/products";

export default function ShopPage() {
  const [search, setSearch] = useState("");
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase()),
  );
  // const [category, setCategory] = useState("all");
  // const [sort, setSort] = useState("newest");
  return (
    <>
      <ShopHeader productCount={filteredProducts.length} />

      <ShopToolbar />

      <ProductGrid products={filteredProducts} />
    </>
  );
}
