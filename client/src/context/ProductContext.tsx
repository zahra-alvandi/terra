import { createContext, useContext, useEffect, useState } from "react";

import { getProducts } from "@/services/productService";
import type { Product } from "@/types/product";

type ProductContextType = {
  products: Product[];
  loading: boolean;
  refreshProducts: () => Promise<void>;
};

const ProductContext = createContext<ProductContextType | null>(null);

export function ProductProvider({ children }: { children: React.ReactNode }) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  async function refreshProducts() {
    try {
      setLoading(true);

      const data = await getProducts();

      setProducts(data);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    refreshProducts();
  }, []);

  return (
    <ProductContext.Provider
      value={{
        products,
        loading,
        refreshProducts,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export function useProducts() {
  const context = useContext(ProductContext);

  if (!context) {
    throw new Error("useProducts must be used inside ProductProvider");
  }

  return context;
}
