import { ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";

export default function EmptyCart() {
  return (
    <div className="flex flex-col items-center justify-center py-24 text-center">
      <div className="flex h-24 w-24 items-center justify-center rounded-full bg-primary/10 text-primary">
        <ShoppingBag size={42} />
      </div>

      <h2 className="mt-8 text-3xl font-semibold text-text-primary">
        سبد خرید شما خالی است
      </h2>

      <p className="mt-4 max-w-md leading-8 text-text-secondary">
        هنوز محصولی به سبد خرید اضافه نکرده‌اید. از فروشگاه دیدن کنید و محصول
        مورد علاقه‌تان را انتخاب کنید.
      </p>

      <Link
        to="/shop"
        className="
          mt-10
          rounded-2xl
          bg-primary
          px-8
          py-4
          text-white
          transition
          hover:opacity-90
        "
      >
        مشاهده محصولات
      </Link>
    </div>
  );
}
