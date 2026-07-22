import type { Product } from "@/types/product";

import { formatPrice } from "@/utils/formatPrice";
import { Star } from "lucide-react";
import QuantitySelector from "./QuantitySelector";
import { ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { showAddToCartToast } from "@/lib/terraToast";

type Props = {
  product: Product;

  quantity: number;

  onIncrease: () => void;

  onDecrease: () => void;
};

export default function ProductInfo({
  product,
  quantity,
  onIncrease,
  onDecrease,
}: Props) {
  const { addToCart } = useCart();

  return (
    <div className="flex flex-col justify-center">
      {/* English */}

      <p className="[font-family:var(--font-display)] text-4xl text-text-primary">
        {product.englishTitle}
      </p>

      <div className="mt-3 flex items-center justify-between md:mt-5 md:flex-col md:items-start md:gap-4">
        {/* Persian */}

        <h1 className="text-2xl font-semibold text-text-primary">
          {product.title}
        </h1>

        {/* Rating */}

        <div className="flex items-center gap-2">
          <div className="flex text-primary">
            {[...Array(5)].map((_, index) => (
              <Star key={index} size={18} fill="currentColor" />
            ))}
          </div>

          <span className="text-sm text-text-secondary">4.8 (26 نظر)</span>
        </div>
      </div>

      {/* Divider */}

      <div className="my-8 h-px bg-border" />

      {/* Price */}

      <div className="flex items-end gap-2">
        <span className="text-4xl font-semibold text-primary">
          {formatPrice(product.price)}
        </span>

        <span className="text-text-secondary text-base">تومان</span>
      </div>

      {/* Description */}

      <p className="mt-8 leading-8 text-text-secondary">
        {product.description}
      </p>
      <div className="mt-10" />
      <div className="mt-10">
        <QuantitySelector
          quantity={quantity}
          onIncrease={onIncrease}
          onDecrease={onDecrease}
        />
        <button
          onClick={() => {
            addToCart(product, quantity);

            showAddToCartToast(product.title);
          }}
          className="
    mt-6
    flex
    w-full
    items-center
    justify-center
    gap-3
    rounded-2xl
    bg-primary
    px-6
    py-4
    text-lg
    font-medium
    text-white
    transition
    hover:opacity-90
    active:scale-[0.98]
  "
        >
          <ShoppingBag size={20} />
          افزودن به سبد خرید
        </button>
      </div>
    </div>
  );
}
