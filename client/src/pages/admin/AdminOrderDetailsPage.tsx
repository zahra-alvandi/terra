import { Navigate, useParams } from "react-router-dom";

import { getOrders } from "@/utils/orderStorage";
import { orderStatusMap } from "@/utils/orderStatus";
import { useState } from "react";
import { orderService } from "@/services/orderService";
import { OrderStatus } from "@/types/order";
import toast from "react-hot-toast";

export default function AdminOrderDetailsPage() {
  const { id } = useParams();

  const initialOrder = orderService.getById(id ?? "");

  const [order, setOrder] = useState(initialOrder);

  if (!order) {
    return <Navigate to="/admin/orders" replace />;
  }

  if (!order) {
    return <Navigate to="/admin/orders" replace />;
  }
  const handleStatusChange = (status: OrderStatus) => {
    orderService.updateStatus(order.id, status);

    setOrder({
      ...order,
      status,
    });

    toast.success("وضعیت سفارش بروزرسانی شد.");
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">جزئیات سفارش</h1>

        <p className="mt-2 text-text-secondary">{order.orderNumber}</p>
      </div>

      <div className="rounded-3xl border border-border bg-white p-8">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-text-secondary">وضعیت سفارش</p>

            <select
              value={order.status}
              onChange={(e) =>
                handleStatusChange(e.target.value as OrderStatus)
              }
              className="
    mt-3
    rounded-xl
    border
    border-border
    px-4
    py-3
    outline-none
    focus:border-primary
  "
            >
              <option value={OrderStatus.PendingReview}>در انتظار بررسی</option>

              <option value={OrderStatus.Confirmed}>تأیید شده</option>

              <option value={OrderStatus.Preparing}>در حال آماده‌سازی</option>

              <option value={OrderStatus.Shipped}>ارسال شده</option>

              <option value={OrderStatus.Delivered}>تحویل داده شده</option>

              <option value={OrderStatus.Cancelled}>لغو شده</option>
            </select>
          </div>

          <div className="text-left">
            <p className="text-sm text-text-secondary">مبلغ کل</p>

            <p className="mt-2 text-2xl font-bold text-primary">
              {order.totalPrice.toLocaleString()} تومان
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <div>
            <p className="text-sm text-text-secondary">نام مشتری</p>

            <p className="mt-2 font-medium">
              {order.firstName} {order.lastName}
            </p>
          </div>

          <div>
            <p className="text-sm text-text-secondary">شماره تماس</p>

            <p className="mt-2">{order.phone}</p>
          </div>
        </div>

        <div className="mt-8">
          <p className="text-sm text-text-secondary">آدرس</p>

          <p className="mt-2 leading-8">{order.address}</p>
        </div>
      </div>

      <div className="rounded-3xl border border-border bg-white p-8">
        <h2 className="text-xl font-semibold">محصولات سفارش</h2>

        <div className="mt-8 space-y-5">
          {order.items.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border-b border-border pb-5 last:border-none"
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

              <p className="font-semibold">
                {item.price.toLocaleString()} تومان
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-3xl border border-border bg-white p-8">
        <h2 className="text-xl font-semibold">رسید پرداخت</h2>

        <img
          src={order.receiptImage}
          alt="Receipt"
          className="mt-8 w-full rounded-2xl border border-border"
        />
      </div>
    </div>
  );
}
