import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/utils/formatPrice";

export default function CartSummary() {
  const { cartTotal, cartCount } = useCart();

  return (
    <div className="sticky top-28 rounded-3xl border border-border bg-white p-8 shadow-sm">
      <h2 className="text-2xl font-semibold text-text-primary">خلاصه سفارش</h2>

      <div className="my-8 space-y-5">
        <div className="flex items-center justify-between">
          <span className="text-text-secondary">تعداد محصولات</span>

          <span className="font-medium">{cartCount}</span>
        </div>

        <div className="h-px bg-border" />

        <div className="flex items-center justify-between">
          <span className="text-text-secondary">جمع کل</span>

          <span className="text-2xl font-semibold text-primary">
            {formatPrice(cartTotal)} تومان
          </span>
        </div>
      </div>

      <button
        className="
          w-full
          rounded-2xl
          bg-primary
          py-4
          text-lg
          font-medium
          text-white
          transition
          hover:opacity-90
        "
      >
        ادامه فرایند خرید
      </button>

     
    </div>
  );
}
