import ShopHeader from "@/components/shop/ShopHeader";
import ShopToolbar from "@/components/shop/ShopToolbar";
import ProductGrid from "@/components/shop/ProductGrid";
import Pagination from "@/components/shop/Pagination";

import { useState, useEffect, useMemo } from "react";
import { useProducts } from "@/context/ProductContext";

const PRODUCTS_PER_PAGE = 8;

export default function ShopPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("newest");
  const [page, setPage] = useState(1);
  const { products, loading } = useProducts();

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

  const totalPages = Math.max(
    1,
    Math.ceil(sortedProducts.length / PRODUCTS_PER_PAGE),
  );

  const paginatedProducts = useMemo(() => {
    const start = (page - 1) * PRODUCTS_PER_PAGE;
    return sortedProducts.slice(start, start + PRODUCTS_PER_PAGE);
  }, [sortedProducts, page]);

  // Reset to page 1 whenever the filters/sort change, so users don't
  // land on an empty page 4 after narrowing results down to 2 products.
  useEffect(() => {
    setPage(1);
  }, [search, category, sort]);

  // Clamp page if it's now out of range (e.g. products list shrank)
  useEffect(() => {
    if (page > totalPages) {
      setPage(totalPages);
    }
  }, [totalPages, page]);

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

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (loading) {
    return null;
  }

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

      <ProductGrid products={paginatedProducts} />

      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </>
  );
}
