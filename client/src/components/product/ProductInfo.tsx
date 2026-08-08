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
  const isOutOfStock = product.inventory <= 0;

  return (
    <div className="flex flex-col justify-center">
      <p className="[font-family:var(--font-display)] text-4xl text-text-primary">
        {product.englishTitle}
      </p>

      <div className="mt-3 flex items-center justify-between md:mt-5 md:flex-col md:items-start md:gap-4">
        <h1 className="text-2xl font-semibold text-text-primary">
          {product.title}
        </h1>

        <div className="flex items-center gap-2">
          <div className="flex text-primary">
            {[...Array(5)].map((_, index) => (
              <Star key={index} size={18} fill="currentColor" />
            ))}
          </div>
          <span className="text-sm text-text-secondary">4.8 (26 نظر)</span>
        </div>
      </div>

      <div className="my-8 h-px bg-border" />

      {/* Price / stock */}
      {isOutOfStock ? (
        <div className="flex items-center gap-2">
          <span className="rounded-xl bg-red-50 px-4 py-2 text-lg font-medium text-red-600">
            ناموجود
          </span>
        </div>
      ) : (
        <>
          <div className="flex items-end gap-2">
            <span className="text-4xl font-semibold text-primary">
              {formatPrice(product.price)}
            </span>
            <span className="text-text-secondary text-base">تومان</span>
          </div>
          <p className="mt-2 text-sm text-text-secondary">
            موجودی: {product.inventory} عدد
          </p>
        </>
      )}

      <p className="mt-8 leading-8 text-text-secondary">
        {product.description}
      </p>

      <div className="mt-10">
        <QuantitySelector
          quantity={quantity}
          onIncrease={onIncrease}
          onDecrease={onDecrease}
        />

        <button
          disabled={isOutOfStock}
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
            disabled:cursor-not-allowed
            disabled:bg-stone-300
            disabled:opacity-70
            disabled:hover:opacity-70
            disabled:active:scale-100
          "
        >
          <ShoppingBag size={20} />
          {isOutOfStock ? "ناموجود" : "افزودن به سبد خرید"}
        </button>
      </div>
    </div>
  );
}
