import ShopHeader from "@/components/shop/ShopHeader";
import ShopToolbar from "@/components/shop/ShopToolbar";
import ProductGrid from "@/components/shop/ProductGrid";

import { useState } from "react";
import { products } from "@/data/products";

export default function ShopPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("newest");
  const filteredProducts = products.filter((product) => {
    const query = search.toLowerCase().trim();

    const matchesSearch =
      !query ||
      product.title.toLowerCase().includes(query) ||
      product.englishTitle.toLowerCase().includes(query) ||
      product.category.toLowerCase().includes(query) ||
      product.badge?.toLowerCase().includes(query) ||
      product.keywords.some((keyword) => keyword.toLowerCase().includes(query));

    const matchesCategory = category === "all" || product.category === category;

    return matchesSearch && matchesCategory;
  });
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sort) {
      case "price-low":
        return a.price - b.price;

      case "price-high":
        return b.price - a.price;

      case "oldest":
        return (
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        );

      case "newest":
      default:
        return (
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
    }
  });
  return (
    <>
      <ShopHeader productCount={filteredProducts.length} />

      <ShopToolbar
        search={search}
        onSearchChange={setSearch}
        category={category}
        onCategoryChange={setCategory}
        sort={sort}
        onSortChange={setSort}
      />

      <ProductGrid products={sortedProducts} />
    </>
  );
}
