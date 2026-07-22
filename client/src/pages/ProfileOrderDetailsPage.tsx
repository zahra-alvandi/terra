import { useParams } from "react-router-dom";

import Container from "@/components/layout/Container";
import { getOrders } from "@/utils/orderStorage";
import { ArrowRight, Package, Receipt } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ProfileOrderDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const order = getOrders().find((o) => o.id === id);
  const getStatusStyle = (status: string) => {
    switch (status) {
      case "تحویل شده":
        return "bg-green-100 text-green-700";

      case "ارسال شده":
        return "bg-blue-100 text-blue-700";

      case "در حال آماده‌سازی":
        return "bg-amber-100 text-amber-700";

      default:
        return "bg-stone-100 text-stone-700";
    }
  };

  if (!order) {
    return (
      <section className="py-24">
        <Container>
          <p>سفارش پیدا نشد.</p>
        </Container>
      </section>
    );
  }

  return (
    <section className="py-24">
      <Container>
        <div className="mb-8 flex items-center justify-between">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 rounded-2xl border border-border px-4 py-2 transition hover:bg-stone-100"
          >
            <ArrowRight size={18} />
            بازگشت
          </button>

          <div className="text-left">
            {/* <p className="text-sm text-text-secondary">شماره سفارش</p>

            <p className="font-semibold text-primary">{order.id}</p> */}
          </div>
        </div>

        <div className="mx-auto max-w-4xl space-y-6">
          <div className="rounded-3xl border border-border bg-white p-8">
            <div className="mb-8 flex items-center gap-4">
              <div className="rounded-2xl bg-primary/10 p-4">
                <Receipt className="text-primary" size={28} />
              </div>

              <div>
                <h1 className="text-2xl font-bold">جزئیات سفارش</h1>

                <p className="text-text-secondary">اطلاعات کامل سفارش شما</p>
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {/* <div>
                <p className="text-sm text-text-secondary">تاریخ ثبت</p>

                <p className="mt-1">{order.createdAt}</p>
              </div> */}

              <div>
                <p className="text-sm text-text-secondary">وضعیت</p>

                <span
                  className={`mt-2 inline-flex rounded-full px-4 py-2 text-sm font-medium ${getStatusStyle(
                    order.status,
                  )}`}
                >
                  {order.status}
                </span>
              </div>

              <div>
                <p className="text-sm text-text-secondary">شماره تماس</p>

                <p className="mt-1">{order.phone}</p>
              </div>

              <div>
                <p className="text-sm text-text-secondary">آدرس</p>

                <p className="mt-1">{order.address}</p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-border bg-white p-8">
            <div className="mb-8 flex items-center gap-4">
              <div className="rounded-2xl bg-primary/10 p-3">
                <Package className="text-primary" size={24} />
              </div>

              <h2 className="text-xl font-semibold">محصولات سفارش</h2>
            </div>

            <div className="mt-8 rounded-2xl bg-stone-50 p-6">
              <div className="mb-3 flex justify-between">
                <span>جمع سفارش</span>

                <span>{order.totalPrice.toLocaleString()} تومان</span>
              </div>

              <div className="mb-3 flex justify-between">
                <span>هزینه ارسال</span>

                <span>رایگان</span>
              </div>

              <div className="mt-5 flex justify-between border-t pt-5 text-lg font-bold">
                <span>مبلغ نهایی</span>

                <span className="text-primary">
                  {order.totalPrice.toLocaleString()} تومان
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
