import { CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

import Container from "@/components/layout/Container";

export default function OrderSuccessPage() {
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

          <div className="mt-10 flex flex-col gap-4 md:flex-row md:justify-center">
            <Link
              to="/shop"
              className="
                rounded-2xl
                bg-primary
                px-8
                py-4
                text-white
                transition
                hover:opacity-90
              "
            >
              ادامه خرید
            </Link>

            <Link
              to="/"
              className="
                rounded-2xl
                border
                border-border
                px-8
                py-4
                transition
                hover:border-primary
                hover:text-primary
              "
            >
              بازگشت به صفحه اصلی
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
