import ShopHeader from "@/components/shop/ShopHeader";
import ShopToolbar from "@/components/shop/ShopToolbar";
import ProductGrid from "@/components/shop/ProductGrid";

import { useState } from "react";
import { productService } from "@/services/productService";
import { useEffect } from "react";

export default function ShopPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("newest");
  const [products, setProducts] = useState(productService.getAll());

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

  useEffect(() => {
    const syncProducts = () => {
      setProducts(productService.getAll());
    };

    window.addEventListener("storage", syncProducts);

    window.addEventListener("products-updated", syncProducts);

    return () => {
      window.removeEventListener("storage", syncProducts);
      window.removeEventListener("products-updated", syncProducts);
    };
  }, []);

  useEffect(() => {
    const saved = sessionStorage.getItem("shop-scroll");

    if (saved) {
      setTimeout(() => {
        window.scrollTo({
          top: Number(saved),
          behavior: "instant" as ScrollBehavior,
        });

        sessionStorage.removeItem("shop-scroll");
      }, 50);
    }
  }, []);
  
  useEffect(() => {
    const savedScroll = sessionStorage.getItem("shop-scroll");

    if (savedScroll) {
      requestAnimationFrame(() => {
        window.scrollTo({
          top: Number(savedScroll),
          behavior: "instant" as ScrollBehavior,
        });

        sessionStorage.removeItem("shop-scroll");
      });
    }
  }, []);
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
