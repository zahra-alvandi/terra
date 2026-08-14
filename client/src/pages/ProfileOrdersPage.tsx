import Container from "@/components/layout/Container";
import { useAuth } from "@/context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMyOrders } from "@/services/orderService";
import {
  getMyProductInterests,
  type ProductInterest,
} from "@/services/productInterestService";

export default function ProfileOrdersPage() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [orders, setOrders] = useState<any[]>([]);
  const [interests, setInterests] = useState<ProductInterest[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadOrders() {
      if (!user) {
        setLoading(false);
        return;
      }

      try {
        const [ordersData, interestsData] = await Promise.all([
          getMyOrders(),
          getMyProductInterests(),
        ]);

        setOrders(ordersData);
        setInterests(interestsData);
      } catch (error) {
        console.error("خطا در دریافت سفارش‌ها و درخواست‌های موجودی:", error);
      } finally {
        setLoading(false);
      }
    }

    loadOrders();
  }, [user]);

  const getStatusStyle = (status: string) => {
    switch (status) {
      case "Delivered":
      case "تحویل شده":
        return "bg-green-100 text-green-700";

      case "Shipped":
      case "ارسال شده":
        return "bg-blue-100 text-blue-700";

      case "Preparing":
      case "در حال آماده‌سازی":
        return "bg-amber-100 text-amber-700";

      case "Cancelled":
      case "لغو شده":
        return "bg-red-100 text-red-700";

      default:
        return "bg-stone-100 text-stone-700";
    }
  };

  if (loading) {
    return (
      <section className="py-16">
        <Container>
          <div className="text-center text-text-secondary">
            در حال دریافت سفارش‌ها...
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section className="py-16">
      <Container>
        <div className="space-y-8">
          <div>
            <h1 className="text-3xl font-bold">سفارش‌های من</h1>

            <p className="mt-2 text-text-secondary">
              تاریخچه سفارش‌های ثبت‌شده شما
            </p>
          </div>

          {orders.length === 0 ? (
            <div className="rounded-3xl border border-border bg-white p-16 text-center">
              <p className="text-text-secondary">هنوز سفارشی ثبت نکرده‌اید.</p>
            </div>
          ) : (
            <div className="space-y-5">
              {orders.map((order) => (
                <div
                  className="
                    cursor-pointer
                    rounded-3xl
                    border
                    border-border
                    bg-white
                    p-6
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-primary
                    hover:shadow-lg
                  "
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-text-secondary">شماره سفارش</p>

                      <p className="mt-1 text-lg font-semibold">
                        {order.orderNumber}
                      </p>
                    </div>

                    <span
                      className={`rounded-full px-4 py-2 text-sm font-medium ${getStatusStyle(
                        order.status,
                      )}`}
                    >
                      {order.status}
                    </span>
                  </div>

                  <div className="mt-6 grid grid-cols-3 gap-4">
                    <div>
                      <p className="text-xs text-text-secondary">تاریخ</p>

                      <p className="mt-1">
                        {new Date(order.createdAt).toLocaleDateString("fa-IR")}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs text-text-secondary">تعداد کالا</p>

                      <p className="mt-1">{order.items?.length ?? 0}</p>
                    </div>

                    <div>
                      <p className="text-xs text-text-secondary">مبلغ</p>

                      <p className="mt-1 font-semibold text-primary">
                        {order.totalPrice.toLocaleString()} تومان
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
