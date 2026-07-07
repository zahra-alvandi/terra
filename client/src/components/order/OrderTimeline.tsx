import { CheckCircle2, Circle } from "lucide-react";
import { OrderStatus } from "@/types/order";

type Props = {
  status: OrderStatus;
};

const steps = [
  {
    status: OrderStatus.PendingReview,
    title: "ثبت سفارش",
  },
  {
    status: OrderStatus.Confirmed,
    title: "تأیید سفارش",
  },
  {
    status: OrderStatus.Preparing,
    title: "آماده‌سازی",
  },
  {
    status: OrderStatus.Shipped,
    title: "ارسال",
  },
  {
    status: OrderStatus.Delivered,
    title: "تحویل",
  },
];

export default function OrderTimeline({ status }: Props) {
  const currentIndex = steps.findIndex((s) => s.status === status);

  return (
    <div className="mt-8">
      <h2 className="mb-6 text-xl font-semibold">وضعیت سفارش</h2>

      <div className="flex items-center justify-between">
        {steps.map((step, index) => {
          const completed = index <= currentIndex;

          return (
            <div key={step.status} className="flex flex-1 items-center">
              <div className="flex flex-col items-center">
                {completed ? (
                  <CheckCircle2 size={28} className="text-green-600" />
                ) : (
                  <Circle size={28} className="text-gray-300" />
                )}

                <span
                  className={`mt-2 text-sm ${
                    completed
                      ? "font-medium text-text-primary"
                      : "text-text-secondary"
                  }`}
                >
                  {step.title}
                </span>
              </div>

              {index !== steps.length - 1 && (
                <div
                  className={`mx-3 h-1 flex-1 rounded-full ${
                    index < currentIndex ? "bg-green-600" : "bg-border"
                  }`}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
