import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/utils/formatPrice";

export default function CheckoutSummary() {
  const { cartItems, cartTotal } = useCart();

  const shippingCost = cartTotal > 2_000_000 ? 0 : 120000;

  const finalPrice = cartTotal + shippingCost;

  return (
    <div className="sticky top-28 rounded-3xl border border-border bg-white p-6">
      <h2 className="mb-6 text-xl font-semibold">خلاصه سفارش</h2>

      <div className="space-y-4">
        <div className="flex justify-between">
          <span className="text-text-secondary">تعداد کالا</span>

          <span>{cartItems.length}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-text-secondary">مبلغ کالاها</span>

          <span>{formatPrice(cartTotal)} تومان</span>
        </div>

        <div className="flex justify-between">
          <span className="text-text-secondary">هزینه ارسال</span>

          <span>
            {shippingCost === 0
              ? "رایگان"
              : `${formatPrice(shippingCost)} تومان`}
          </span>
        </div>

        <hr className="border-border" />

        <div className="flex justify-between text-lg font-semibold">
          <span>مبلغ قابل پرداخت</span>

          <span className="text-primary">{formatPrice(finalPrice)} تومان</span>
        </div>
      </div>
    </div>
  );
}
