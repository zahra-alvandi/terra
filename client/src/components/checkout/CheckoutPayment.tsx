import { Copy, CreditCard, Upload, Wallet } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";

import { useEffect } from "react";
import { PAYMENT_CONFIG } from "@/config/payment";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/utils/formatPrice";
import { Loader2 } from "lucide-react";
import { CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function CheckoutPayment() {
  const { cartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [receipt, setReceipt] = useState<File | null>(null);
  const [preview, setPreview] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const copyCardNumber = async () => {
    await navigator.clipboard.writeText(PAYMENT_CONFIG.cardNumber);

    toast.success("شماره کارت کپی شد");
  };
  const submitOrder = async () => {
    if (!receipt) {
      toast.error("لطفاً رسید پرداخت را بارگذاری کنید.");
      return;
    }

    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 2000));

    toast.success("سفارش شما با موفقیت ثبت شد.");

    clearCart();

    setReceipt(null);
    setPreview("");

    setIsSubmitting(false);

    navigate("/order-success");
  };
  useEffect(() => {
    return () => {
      if (preview) {
        URL.revokeObjectURL(preview);
      }
    };
  }, [preview]);

  return (
    <div className="mt-8 rounded-3xl border border-border bg-white p-8">
      <h2 className="mb-8 text-2xl font-semibold">روش پرداخت</h2>

      {/* Payment Methods */}

      <div className="grid gap-4 md:grid-cols-2">
        <button
          className="
            flex items-center gap-4
            rounded-2xl
            border-2 border-primary
            bg-primary/5
            p-5
            text-right
          "
        >
          <CreditCard className="text-primary" />

          <div>
            <p className="font-semibold">کارت به کارت</p>

            <p className="text-sm text-text-secondary">پرداخت و ارسال رسید</p>
          </div>
        </button>

        {/* online payment */}
        {/* <button
          disabled
          className="
            flex items-center gap-4
            rounded-2xl
            border
            border-border
            p-5
            text-right
            opacity-50
          "
        >
          <Wallet />

          <div>
            <p className="font-semibold">پرداخت آنلاین</p>

            <p className="text-sm text-text-secondary">به زودی</p>
          </div>
        </button> */}
      </div>

      {/* Card */}

      <div className="mt-10 rounded-2xl bg-stone-50 p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-text-secondary">شماره کارت</p>

            <p className="mt-2 text-xl font-semibold tracking-widest">
              {PAYMENT_CONFIG.cardNumber}
            </p>
          </div>

          <button
            type="button"
            onClick={copyCardNumber}
            className="
              rounded-xl
              border
              border-border
              p-3
              transition
              hover:border-primary
            "
          >
            <Copy size={18} />
          </button>
        </div>

        <div className="mt-8 flex justify-between">
          <div>
            <p className="text-sm text-text-secondary">صاحب حساب</p>

            <p className="mt-2 font-medium">{PAYMENT_CONFIG.accountHolder}</p>
          </div>

          <div className="text-left">
            <p className="text-sm text-text-secondary">مبلغ قابل پرداخت</p>

            <p className="mt-2 text-xl font-semibold text-primary">
              {formatPrice(cartTotal)} تومان
            </p>
          </div>
        </div>
      </div>

      {/* Upload */}

      <div className="mt-10">
        <label className="mb-3 block font-medium">رسید پرداخت</label>

        <label
          className="
            flex
            cursor-pointer
            flex-col
            items-center
            justify-center
            gap-3
            rounded-2xl
            border-2
            border-dashed
            border-border
            py-10
            transition
            hover:border-primary
          "
        >
          <Upload size={28} />

          <span className="text-text-secondary">انتخاب تصویر رسید</span>

          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => {
              const file = e.target.files?.[0];

              if (file) {
                setReceipt(file);
                setPreview(URL.createObjectURL(file));
              }
            }}
          />
        </label>
        {receipt && (
          <div className="mt-6 rounded-2xl border border-border p-4">
            <p className="mb-4 text-sm text-primary">{receipt.name}</p>

            <img
              src={preview}
              alt="Receipt"
              className="
        h-72
        w-full
        rounded-xl
        object-contain
        bg-stone-50
      "
            />
          </div>
        )}
        {receipt && (
          <div className="mt-4 flex items-center gap-2 text-green-600">
            <CheckCircle2 size={20} />
            <span className="text-sm font-medium">
              رسید با موفقیت انتخاب شد.
            </span>
          </div>
        )}
      </div>
      <div className="mt-10">
        <button
          type="button"
          onClick={submitOrder}
          disabled={isSubmitting}
          className="
      flex
      w-full
      items-center
      justify-center
      rounded-2xl
      bg-primary
      py-4
      text-lg
      font-medium
      text-white
      transition
      disabled:cursor-not-allowed
      disabled:opacity-60
    "
        >
          {isSubmitting ? (
            <div className="flex items-center gap-2">
              <Loader2 className="h-5 w-5 animate-spin" />
              <span>در حال ثبت سفارش...</span>
            </div>
          ) : (
            "ثبت سفارش"
          )}
        </button>
      </div>
    </div>
  );
}
