import { Trash2, Plus, Minus } from "lucide-react";

import { formatPrice } from "@/utils/formatPrice";

import type { CartItem as CartItemType } from "@/types/cart";

import { useCart } from "@/context/CartContext";

type Props = {
  item: CartItemType;
};

export default function CartItem({ item }: Props) {
  const { increaseQuantity, decreaseQuantity, removeFromCart } = useCart();

  return (
    <div className="flex gap-4 border-b border-border py-5">
      {/* image */}

      <img
        src={item.product.image}
        alt={item.product.title}
        className="h-24 w-24 rounded-2xl object-cover"
      />

      {/* content */}

      <div className="flex flex-1 flex-col justify-between">
        <div>
          <p className="[font-family:var(--font-display)] text-lg">
            {item.product.englishTitle}
          </p>

          <h3 className="mt-1 font-medium">{item.product.title}</h3>

          <p className="mt-2 text-primary font-semibold">
            {formatPrice(item.product.price)} تومان
          </p>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-2 rounded-xl border border-border px-2 py-1">
            <button onClick={() => decreaseQuantity(item.product.id)}>
              <Minus size={16} />
            </button>

            <span className="w-6 text-center">{item.quantity}</span>

            <button onClick={() => increaseQuantity(item.product.id)}>
              <Plus size={16} />
            </button>
          </div>

          <button
            onClick={() => removeFromCart(item.product.id)}
            className="text-red-500 transition hover:scale-110"
          >
            <Trash2 size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
