import { productService } from "@/services/productService";
import { getOrders } from "@/utils/orderStorage";
import StatCard from "@/components/admin/dashboard/StatCard";

export default function AdminDashboardPage() {
  const products = productService.getAll();
  const orders = getOrders();

  const totalRevenue = orders.reduce((sum, order) => sum + order.totalPrice, 0);

  const totalCustomers = new Set(orders.map((order) => order.phone)).size;

  return (
    <>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard title="محصولات" value={products.length} />

        <StatCard title="سفارش‌ها" value={orders.length} />

        <StatCard
          title="درآمد"
          value={`${totalRevenue.toLocaleString()} تومان`}
        />

        <StatCard title="مشتریان" value={totalCustomers} />
      </div>
      {/* <div className="grid grid-cols-4 gap-6">
        <StatCard title="محصولات" value={products.length} />

        <StatCard title="سفارش‌ها" value={orders.length} />

        <StatCard
          title="درآمد"
          value={`${totalRevenue.toLocaleString()} تومان`}
        />

        <StatCard title="مشتریان" value={totalCustomers} />
      </div> */}

      <div className="mt-8 grid gap-6 xl:grid-cols-2">
        <div className="rounded-3xl border border-border bg-white p-6">
          <h2 className="mb-5 text-xl font-bold">آخرین سفارش‌ها</h2>

          <div className="space-y-4">
            {orders.slice(0, 5).map((order) => (
              <div
                key={order.id}
                className="flex items-center justify-between border-b border-border pb-3"
              >
                <div>
                  <p className="font-medium">
                    {order.firstName} {order.lastName}
                  </p>

                  <p className="text-sm text-text-secondary">
                    {order.orderNumber}
                  </p>
                </div>

                <span>{order.totalPrice.toLocaleString()} تومان</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-border bg-white p-6">
          <h2 className="mb-5 text-xl font-bold">آخرین محصولات</h2>

          <div className="space-y-4">
            {products.slice(0, 5).map((product) => (
              <div
                key={product.id}
                className="flex items-center justify-between border-b border-border pb-3"
              >
                <span>{product.title}</span>

                <span>{product.price.toLocaleString()} تومان</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
