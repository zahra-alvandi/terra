import ProductDrawer from "@/components/ui/ProductDrawer";
import type { Order } from "@/types/order";

type Props = {
  open: boolean;
  onClose: () => void;
  order: Order | null;
};

export default function OrderDrawer({ open, onClose, order }: Props) {
  if (!order) return null;

  return (
    <ProductDrawer open={open} onClose={onClose}>
      <div className="space-y-6">
        <h2 className="text-2xl font-bold">جزئیات سفارش</h2>

        <div>
          <p>
            <strong>شماره سفارش:</strong> {order.orderNumber}
          </p>

          <p>
            <strong>نام:</strong> {order.firstName} {order.lastName}
          </p>

          <p>
            <strong>تلفن:</strong> {order.phone}
          </p>

          <p>
            <strong>آدرس:</strong> {order.address}
          </p>
        </div>

        <hr />

        <div className="space-y-3">
          {order.items.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border-b border-border py-3"
            >
              <div className="flex items-center gap-3">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-14 w-14 rounded-xl object-cover"
                />

                <div>
                  <p className="font-medium">{item.name}</p>

                  <p className="text-sm text-text-secondary">
                    تعداد: {item.quantity}
                  </p>
                </div>
              </div>

              <span className="font-medium">
                {(item.price * item.quantity).toLocaleString()} تومان
              </span>
            </div>
          ))}
        </div>

        <hr />

        <div className="flex justify-between text-lg font-bold">
          <span>مبلغ کل</span>

          <span>{order.totalPrice.toLocaleString()} تومان</span>
        </div>
      </div>
    </ProductDrawer>
  );
}
