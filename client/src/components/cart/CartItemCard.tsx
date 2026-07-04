import type { CartItem } from "@/types/cart";

import { Trash2 } from "lucide-react";

import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/utils/formatPrice";

type Props = {
  item: CartItem;
};

export default function CartItemCard({ item }: Props) {
  const { increaseQuantity, decreaseQuantity, removeFromCart } = useCart();

  return (
    <div className="rounded-3xl border border-border bg-white p-6 shadow-sm transition hover:shadow-md">
      <div className="flex gap-5">
        {/* Image */}

        <div className="h-28 w-28 flex-shrink-0 overflow-hidden rounded-2xl bg-stone-100">
          <img
            src={item.product.image}
            alt={item.product.title}
            className="h-full w-full object-cover"
          />
        </div>

        {/* Info */}

        <div className="flex flex-1 flex-col justify-between">
          <div>
            <p className="[font-family:var(--font-display)] text-lg">
              {item.product.englishTitle}
            </p>

            <h3 className="mt-1 text-xl font-semibold">{item.product.title}</h3>

            <p className="mt-4 text-xl font-semibold text-primary">
              {formatPrice(item.product.price)} تومان
            </p>
          </div>

          <div className="mt-6 flex items-center justify-between">
            {/* Quantity */}

            <div className="flex items-center overflow-hidden rounded-full border border-border">
              <button
                onClick={() => decreaseQuantity(item.product.id)}
                className="px-4 py-2 transition hover:bg-stone-100"
              >
                −
              </button>

              <span className="min-w-10 text-center">{item.quantity}</span>

              <button
                onClick={() => increaseQuantity(item.product.id)}
                className="px-4 py-2 transition hover:bg-stone-100"
              >
                +
              </button>
            </div>

            {/* Delete */}

            <button
              onClick={() => removeFromCart(item.product.id)}
              className="text-red-500 transition hover:scale-110"
            >
              <Trash2 size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
