import { Heart, ShoppingBag, ArrowRight } from "lucide-react";
import { NavLink } from "react-router-dom";

import type { Product } from "@/types/product";
import { formatPrice } from "@/utils/formatPrice";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-border bg-background transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Image */}

      <NavLink
        to={product.href}
        className="group/image relative block overflow-hidden"
      >
        <img
          src={product.image}
          alt={product.title}
          className="aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <div
          className="
    absolute bottom-5 left-5 right-5
    flex justify-between

    opacity-100
    translate-y-0

    md:opacity-0
    md:translate-y-3

    transition-all
    duration-300

    md:group-hover/image:translate-y-0
    md:group-hover/image:opacity-100
  "
        >
          <button
            className="
      flex h-9 w-9 md:h-11 md:w-11 items-center justify-center
      rounded-full
      bg-white/20 backdrop-blur-md border-white/30
      text-text-primary
      shadow-lg
      transition
      hover:bg-primary
      hover:text-white
    "
          >
            <Heart className="h-4 w-4 md:h-5 md:w-5" />
          </button>

          <button
            className="
      flex h-9 w-9 md:h-11 md:w-11 items-center justify-center
      rounded-full
      bg-primary/70 backdrop-blur-md border-white/30
      text-white
      shadow-lg
      transition
      hover:scale-105
    "
          >
            <ShoppingBag className="h-4 w-4 md:h-5 md:w-5" />
          </button>
        </div>

        {product.badge && (
          <span
            className="
              absolute left-5 top-5
              rounded-full
              border border-white/30
              bg-white/20
              px-4 py-2
              text-xs
              font-medium
              text-white
              backdrop-blur-md
            "
          >
            ✦ {product.badge}
          </span>
        )}
      </NavLink>

      {/* Content */}

      <div className="flex flex-col gap-3 p-4 md:p-6">
        {/* English */}

        <p className="[font-family:var(--font-display)] text-lg md:text-2xl leading-none text-text-primary">
          {product.englishTitle}
        </p>

        {/* Persian */}

        <h3 className="text-sm md:text-base text-text-secondary">
          {product.title}
        </h3>

        {/* Bottom */}

        <div className="mt-2 flex items-end justify-between">
          <div className="flex items-end gap-1">
            <span className="text-base font-semibold text-text-primary md:text-xl">
              {formatPrice(product.price)}
            </span>

            <span className="text-xs text-text-secondary md:text-sm">
              تومان
            </span>
          </div>

          <NavLink dir="ltr"
            to={product.href}
            className="
      hidden
      md:flex

      items-center
      gap-2

      text-xs
      uppercase
      tracking-[0.2em]

      text-primary

      transition-all
      duration-300

      group-hover:gap-3
    "
          >
            View
            <ArrowRight size={14} />
          </NavLink>
        </div>
      </div>
    </article>
  );
}
