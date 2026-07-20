import Container from "@/components/layout/Container";
import { getOrders } from "@/utils/orderStorage";
import { useAuth } from "@/context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function ProfileOrdersPage() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const orders = getOrders().filter((order) => order.phone === user?.phone);
  const getStatusStyle = (status: string) => {
    switch (status) {
      case "تحویل شده":
        return "bg-green-100 text-green-700";

      case "ارسال شده":
        return "bg-blue-100 text-blue-700";

      case "در حال آماده‌سازی":
        return "bg-amber-100 text-amber-700";

      case "لغو شده":
        return "bg-red-100 text-red-700";

      default:
        return "bg-stone-100 text-stone-700";
    }
  };

  return (
    <section className="py-24">
      <Container>
        <div className="mx-auto max-w-4xl space-y-5">
          {orders.length === 0 ? (
            <div className="rounded-3xl border border-border bg-white p-10 text-center">
              <p className="text-lg font-medium">هنوز سفارشی ثبت نکرده‌اید.</p>
            </div>
          ) : (
            orders.map((order) => (
              <div
                key={order.id}
                onClick={() => navigate(`/profile/orders/${order.id}`)}
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
                <div className="flex items-start justify-between">
                  {/* <div>
                    <p className="text-sm text-text-secondary">شماره سفارش</p>

                    <p className="mt-1 text-lg font-semibold">{order.id}</p>
                  </div> */}

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

                    <p className="mt-1">{order.createdAt}</p>
                  </div>

                  <div>
                    <p className="text-xs text-text-secondary">تعداد کالا</p>

                    <p className="mt-1">{order.items.length}</p>
                  </div>

                  <div>
                    <p className="text-xs text-text-secondary">مبلغ</p>

                    <p className="mt-1 font-semibold text-primary">
                      {order.totalPrice.toLocaleString()} تومان
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex justify-end">
                  <span className="text-sm font-medium text-primary">
                    مشاهده جزئیات ←
                  </span>
                </div>
              </div>
            ))
          )}
        </div>
      </Container>
    </section>
  );
}
