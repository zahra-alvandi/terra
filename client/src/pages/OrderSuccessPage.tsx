import { CheckCircle2, Copy } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import toast from "react-hot-toast";

import Container from "@/components/layout/Container";
import { orderService } from "@/services/orderService";

export default function OrderSuccessPage() {
  const { state } = useLocation();

  const orderNumber = state?.orderNumber ?? orderService.getLastOrderNumber();

  const copyOrderNumber = async () => {
    if (!orderNumber) return;

    await navigator.clipboard.writeText(orderNumber);

    toast.success("شماره پیگیری کپی شد");
  };

  return (
    <section className="py-24">
      <Container>
        <div className="mx-auto max-w-2xl rounded-3xl border border-border bg-white p-10 text-center shadow-sm">
          <CheckCircle2 size={90} className="mx-auto text-green-600" />

          <h1 className="mt-8 text-3xl font-bold text-text-primary">
            سفارش شما با موفقیت ثبت شد
          </h1>

          <p className="mt-5 leading-8 text-text-secondary">
            رسید پرداخت شما ثبت شد. سفارش پس از بررسی توسط تیم Terra تأیید و
            آماده ارسال خواهد شد.
          </p>

          {orderNumber && (
            <div className="mt-8 rounded-2xl bg-stone-50 p-6">
              <p className="text-sm text-text-secondary">شماره پیگیری سفارش</p>

              <div className="mt-4 flex items-center justify-center gap-3">
                <span className="font-mono text-2xl font-bold tracking-wider text-primary">
                  {orderNumber}
                </span>

                <button
                  type="button"
                  onClick={copyOrderNumber}
                  className="rounded-xl border border-border p-2 transition hover:border-primary"
                >
                  <Copy size={18} />
                </button>
              </div>

              <p className="mt-4 text-sm text-text-secondary">
                این شماره را نگه دارید تا بتوانید وضعیت سفارش خود را پیگیری
                کنید.
              </p>

              <Link
                to="/track-order"
                className="mt-6 inline-block rounded-xl bg-primary px-6 py-3 text-white transition hover:opacity-90"
              >
                پیگیری سفارش
              </Link>
            </div>
          )}

          <div className="mt-10 flex flex-col gap-4 md:flex-row md:justify-center">
            <Link
              to="/shop"
              className="rounded-2xl bg-primary px-8 py-4 text-white transition hover:opacity-90"
            >
              ادامه خرید
            </Link>

            <Link
              to="/"
              className="rounded-2xl border border-border px-8 py-4 transition hover:border-primary hover:text-primary"
            >
              بازگشت به صفحه اصلی
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
