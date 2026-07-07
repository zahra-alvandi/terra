import { useState } from "react";
import { Search, Hourglass } from "lucide-react";

import Container from "@/components/layout/Container";
import { getOrders } from "@/utils/orderStorage";
import { OrderStatus, type Order } from "@/types/order";
import { orderService } from "@/services/orderService";
import OrderTimeline from "@/components/order/OrderTimeline";

export default function OrderTrackingPage() {
  const [orderNumber, setOrderNumber] = useState(
    orderService.getLastOrderNumber(),
  );

  const [order, setOrder] = useState<Order | null>(null);

  const [searched, setSearched] = useState(false);

  const searchOrder = () => {
    const foundOrder = orderService.findByOrderNumber(orderNumber);

    setSearched(true);

    if (!foundOrder) {
      setOrder(null);
      return;
    }

    setOrder(foundOrder);
  };

  const statusMap = {
    [OrderStatus.PendingReview]: {
      text: "در انتظار بررسی",
      color: "bg-yellow-100 text-yellow-700",
    },

    [OrderStatus.Confirmed]: {
      text: "تأیید شده",
      color: "bg-blue-100 text-blue-700",
    },

    [OrderStatus.Preparing]: {
      text: "در حال آماده‌سازی",
      color: "bg-indigo-100 text-indigo-700",
    },

    [OrderStatus.Shipped]: {
      text: "ارسال شده",
      color: "bg-purple-100 text-purple-700",
    },

    [OrderStatus.Delivered]: {
      text: "تحویل داده شده",
      color: "bg-green-100 text-green-700",
    },

    [OrderStatus.Cancelled]: {
      text: "لغو شده",
      color: "bg-red-100 text-red-700",
    },
  };

  return (
    <section className="py-20">
      <Container>
        <div className="mx-auto max-w-3xl rounded-3xl border border-border bg-white p-8">
          <h1 className="text-center text-3xl font-semibold">پیگیری سفارش</h1>

          <p className="mt-3 text-center text-text-secondary">
            کد سفارش خود را وارد کنید.
          </p>

          <div className="mt-8 flex gap-3">
            <input
              value={orderNumber}
              onChange={(e) => setOrderNumber(e.target.value)}
              placeholder="TR-123456"
              className="
                flex-1
                rounded-2xl
                border
                border-border
                px-4
                py-4
                outline-none
                focus:border-primary
              "
            />

            <button
              type="button"
              onClick={searchOrder}
              className="
                flex
                items-center
                gap-2
                rounded-2xl
                bg-primary
                px-4
                md:px-6
                text-white
              "
            >
              <Search size={18} />
              جستجو
            </button>
          </div>

          {searched && !order && (
            <div className="mt-8 rounded-2xl bg-red-50 p-5 text-center text-red-600">
              سفارشی با این کد پیدا نشد.
            </div>
          )}

          {order && (
            <div className="mt-8 space-y-6">
              <div className="rounded-2xl border border-border p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-text-secondary">کد سفارش</p>

                    <p className="mt-2 font-mono text-lg font-semibold">
                      {order.orderNumber}
                    </p>
                  </div>

                  <span
                    className={`rounded-full px-4 py-2 text-sm font-medium ${statusMap[order.status].color}`}
                  >
                    {statusMap[order.status].text}
                  </span>
                </div>

                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  <div>
                    <p className="text-sm text-text-secondary">گیرنده</p>

                    <p>
                      {order.firstName} {order.lastName}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-text-secondary">شماره تماس</p>

                    <p>{order.phone}</p>
                  </div>
                </div>

                <div className="mt-6">
                  <p className="text-sm text-text-secondary">آدرس</p>

                  <p className="mt-2">{order.address}</p>
                </div>
              </div>

              <div className="rounded-2xl border border-border p-6">
                <h2 className="text-xl font-semibold">محصولات</h2>

                <div className="mt-5 space-y-4">
                  {order.items.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between border-b border-border pb-4 last:border-none"
                    >
                      <div className="flex items-center gap-4">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-16 w-16 rounded-xl object-cover"
                        />

                        <div>
                          <p className="font-medium">{item.name}</p>

                          <p className="text-sm text-text-secondary">
                            تعداد: {item.quantity}
                          </p>
                        </div>
                      </div>

                      <p className="font-semibold pr-2">
                        {item.price.toLocaleString()} تومان
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex justify-between border-t border-border pt-6">
                  <span className="font-medium">مبلغ کل</span>

                  <span className="text-xl font-bold text-primary">
                    {order.totalPrice.toLocaleString()} تومان
                  </span>
                </div>
              </div>
              <OrderTimeline status={order.status} />
              {order && (
                <div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-6">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl text-primary">
                      <Hourglass />
                    </span>

                    <h3 className="text-lg font-semibold text-amber-800">
                      زمان تقریبی تحویل
                    </h3>
                  </div>

                  <div className="mt-5 space-y-3 text-sm leading-7 text-amber-700">
                    <div className="flex items-center justify-between rounded-xl bg-white/70 px-4 py-3">
                      <span>تهران</span>

                      <span className="font-semibold">۱ تا ۷ روز کاری</span>
                    </div>

                    <div className="flex items-center justify-between rounded-xl bg-white/70 px-4 py-3">
                      <span>سایر شهرها</span>

                      <span className="font-semibold">۳ تا ۱۰ روز کاری</span>
                    </div>

                    <p className="pt-2 text-xs leading-6 text-amber-600">
                      زمان‌های فوق تقریبی هستند و پس از تأیید سفارش محاسبه
                      می‌شوند.
                    </p>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
