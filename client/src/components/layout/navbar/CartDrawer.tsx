import { X } from "lucide-react";

import { formatPrice } from "@/utils/formatPrice";
import { useCart } from "@/context/CartContext";

import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export default function CartDrawer({ isOpen, onClose }: Props) {
  const { cartItems, cartTotal } = useCart();

  return (
    <>
      {/* Backdrop */}

      <div
        onClick={onClose}
        className={`
          fixed inset-0 z-40 bg-black/40 transition-opacity duration-300
          ${isOpen ? "opacity-100" : "pointer-events-none opacity-0"}
        `}
      />

      {/* Drawer */}

      <aside
        className={`
          fixed left-0 top-0 z-50
          flex h-screen w-full max-w-md flex-col
          bg-background shadow-2xl
          transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* Header */}

        <div className="flex items-center justify-between border-b border-border p-6">
          <h2 className="text-xl font-semibold">سبد خرید</h2>

          <button
            onClick={onClose}
            className="rounded-lg p-2 transition hover:bg-stone-100"
          >
            <X size={22} />
          </button>
        </div>

        {/* Content */}

        <div className="flex-1 overflow-y-auto">
          {cartItems.length === 0 ? (
            <EmptyCart />
          ) : (
            <div className="px-6">
              {cartItems.map((item) => (
                <CartItem key={item.product.id} item={item} />
              ))}
            </div>
          )}
        </div>

        {/* Footer */}

        {cartItems.length > 0 && (
          <div className="border-t border-border p-6">
            <div className="mb-6 flex items-center justify-between">
              <span className="text-text-secondary">جمع کل</span>

              <span className="text-xl font-semibold text-primary">
                {formatPrice(cartTotal)} تومان
              </span>
            </div>

            <div className="flex flex-col gap-3">
              <button
                className="
          w-full
          rounded-2xl
          bg-primary
          py-4
          text-white
          transition
          hover:opacity-90
        "
              >
                مشاهده سبد خرید
              </button>

              <button
                onClick={onClose}
                className="
          w-full
          rounded-2xl
          border
          border-border
          py-4
          text-text-primary
          transition
          hover:border-primary
          hover:text-primary
        "
              >
                ادامه خرید
              </button>
            </div>
          </div>
        )}
      </aside>
    </>
  );
}
