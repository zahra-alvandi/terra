import { createContext, useContext, useState, type ReactNode } from "react";

import type { Product } from "@/types/product";
import type { CartItem } from "@/types/cart";

type CartContextType = {
  cartItems: CartItem[];

  cartCount: number;

  cartTotal: number;

  addToCart: (product: Product, quantity: number) => void;

  removeFromCart: (productId: number) => void;

  increaseQuantity: (productId: number) => void;

  decreaseQuantity: (productId: number) => void;

  clearCart: () => void;
};

const CartContext = createContext<CartContextType | null>(null);

type Props = {
  children: ReactNode;
};

export function CartProvider({ children }: Props) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (product: Product, quantity: number) => {
    setCartItems((prev) => {
      const existingItem = prev.find((item) => item.product.id === product.id);

      if (existingItem) {
        return prev.map((item) =>
          item.product.id === product.id
            ? {
                ...item,
                quantity: item.quantity + quantity,
              }
            : item,
        );
      }

      return [
        ...prev,
        {
          product,
          quantity,
        },
      ];
    });
  };

  const removeFromCart = (productId: number) => {
    setCartItems((prev) =>
      prev.filter((item) => item.product.id !== productId),
    );
  };

  const increaseQuantity = (productId: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.product.id === productId
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item,
      ),
    );
  };

  const decreaseQuantity = (productId: number) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.product.id === productId
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const cartTotal = cartItems.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0,
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartCount,
        cartTotal,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }

  return context;
}
