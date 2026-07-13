import { Link } from "react-router-dom";

import { getOrders } from "@/utils/orderStorage";
import { orderStatusMap } from "@/utils/orderStatus";

export default function AdminOrdersPage() {
  const orders = getOrders();

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">سفارش‌ها</h1>

        <p className="mt-2 text-text-secondary">مدیریت سفارش‌های ثبت شده</p>
      </div>

      <div className="overflow-hidden rounded-3xl border border-border bg-white">
        <table className="w-full">
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
            {orders.map((order) => (
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
                  <span
                    className={`rounded-full px-3 py-2 text-xs font-medium ${orderStatusMap[order.status].color}`}
                  >
                    {orderStatusMap[order.status].text}
                  </span>
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

            {orders.length === 0 && (
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
