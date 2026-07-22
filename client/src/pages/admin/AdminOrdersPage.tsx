import { Link } from "react-router-dom";
import { useState } from "react";

import { getOrders } from "@/utils/orderStorage";
import { OrderStatus } from "@/types/order";
import { orderService } from "@/services/orderService";
import toast from "react-hot-toast";
import type { Order } from "@/types/order";

export default function AdminOrdersPage() {
  const [orders, setOrders] = useState(getOrders());
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("all");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  const filteredOrders = orders.filter((order) => {
    const query = search.toLowerCase();

    const matchesSearch =
      (order.orderNumber ?? "").toLowerCase().includes(query) ||
      `${order.firstName ?? ""} ${order.lastName ?? ""}`
        .toLowerCase()
        .includes(query) ||
      (order.phone ?? "").includes(search);

    const matchesStatus = status === "all" || order.status === status;

    return matchesSearch && matchesStatus;
  });

  const handleStatusChange = (orderId: string, status: string) => {
    const updatedOrders = orders.map((order) => {
      if (order.id !== orderId) return order;

      const updatedOrder = {
        ...order,
        status: status as typeof order.status,
      };

      orderService.update(updatedOrder);

      return updatedOrder;
    });

    setOrders(updatedOrders);

    toast.success("وضعیت سفارش بروزرسانی شد.");
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">سفارش‌ها</h1>

        <p className="mt-2 text-text-secondary">مدیریت سفارش‌های ثبت شده</p>
      </div>

      <div className="flex flex-col gap-4 md:flex-row">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="جستجو بر اساس شماره سفارش، نام یا تلفن..."
          className="flex-1 rounded-2xl border border-border bg-white p-4 outline-none transition focus:border-primary"
        />

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="rounded-2xl border border-border bg-white px-5 py-4"
        >
          <option value="all">همه وضعیت‌ها</option>
          <option value={OrderStatus.PendingReview}>در انتظار بررسی</option>
          <option value={OrderStatus.Confirmed}>تأیید شده</option>
          <option value={OrderStatus.Preparing}>در حال آماده‌سازی</option>
          <option value={OrderStatus.Shipped}>ارسال شده</option>
          <option value={OrderStatus.Delivered}>تحویل شده</option>
          <option value={OrderStatus.Cancelled}>لغو شده</option>
        </select>
      </div>

      <div className="overflow-x-auto rounded-3xl border border-border bg-white">
        <table className="min-w-[900px] w-full">
          <thead className="bg-stone-50">
            <tr>
              <th className="px-6 py-4 text-right">شماره سفارش</th>
              <th className="px-6 py-4 text-right">مشتری</th>
              <th className="px-6 py-4 text-right">تلفن</th>
              <th className="px-6 py-4 text-right">مبلغ</th>
              <th className="px-6 py-4 text-right">وضعیت</th>
              <th className="px-6 py-4 text-right">عملیات</th>
            </tr>
          </thead>

          <tbody>
            {filteredOrders.map((order) => (
              <tr key={order.id} className="border-t border-border">
                <td className="px-6 py-5 font-mono">{order.orderNumber}</td>

                <td className="px-6 py-5">
                  {order.firstName} {order.lastName}
                </td>

                <td className="px-6 py-5">{order.phone}</td>

                <td className="px-6 py-5">
                  {order.totalPrice.toLocaleString()} تومان
                </td>

                <td className="px-6 py-5">
                  <select
                    value={order.status}
                    onChange={(e) =>
                      handleStatusChange(order.id, e.target.value)
                    }
                    className="
    rounded-xl
    border
    border-border
    bg-stone-50
    px-4
    py-2.5
    text-sm
    font-medium
    text-text-primary
    outline-none
    transition
    hover:border-primary
    focus:border-primary
    focus:bg-white
  "
                  >
                    <option value="PendingReview">در انتظار بررسی</option>
                    <option value="Confirmed">تأیید شده</option>
                    <option value="Preparing">در حال آماده‌سازی</option>
                    <option value="Shipped">ارسال شده</option>
                    <option value="Delivered">تحویل شده</option>
                    <option value="Cancelled">لغو شده</option>
                  </select>
                </td>

                <td className="px-6 py-5">
                  <Link
                    to={`/admin/orders/${order.id}`}
                    className="text-primary hover:underline"
                  >
                    مشاهده
                  </Link>
                </td>
              </tr>
            ))}

            {filteredOrders.length === 0 && (
              <tr>
                <td
                  colSpan={6}
                  className="py-12 text-center text-text-secondary"
                >
                  هنوز سفارشی ثبت نشده است.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
