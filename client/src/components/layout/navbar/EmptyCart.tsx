import { ShoppingBag } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function EmptyCart() {
  return (
    <div className="flex h-full flex-col items-center justify-center px-8 text-center">
      <div className="mb-6 rounded-full bg-stone-100 p-6">
        <ShoppingBag size={40} className="text-primary" />
      </div>

      <h3 className="text-xl font-semibold text-text-primary">
        سبد خرید شما خالی است
      </h3>

      <p className="mt-3 text-sm leading-7 text-text-secondary">
        هنوز محصولی به سبد خرید اضافه نکرده‌اید.
      </p>

      <NavLink
        to="/shop"
        className="
          mt-8
          rounded-xl
          bg-primary
          px-6
          py-3
          text-white
          transition
          hover:opacity-90
        "
      >
        برو به فروشگاه
      </NavLink>
    </div>
  );
}
