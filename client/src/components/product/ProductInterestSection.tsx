import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Heart } from "lucide-react";

import {
  getMyProductInterests,
  type ProductInterest,
} from "@/services/productInterestService";

export default function ProductInterestSection() {
  const [interests, setInterests] = useState<ProductInterest[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadInterests() {
      try {
        const data = await getMyProductInterests();
        setInterests(data);
      } catch (error) {
        console.error("خطا در دریافت محصولات مورد علاقه:", error);
      } finally {
        setLoading(false);
      }
    }

    loadInterests();
  }, []);

  if (loading || interests.length === 0) {
    return null;
  }

  return (
    <div className="mb-8 rounded-3xl border border-border bg-white p-8 shadow-sm">
      <div className="mb-6 flex items-center gap-4">
        <div className="rounded-2xl bg-primary/10 p-3">
          <Heart className="text-primary" size={24} />
        </div>

        <div>
          <h2 className="text-xl font-semibold">محصولات مورد علاقه</h2>

          <p className="mt-1 text-sm text-text-secondary">
            محصولاتی که منتظر موجود شدنشان هستید
          </p>
        </div>
      </div>

      <div className="space-y-4">
        {interests.map((interest) => {
          const product = interest.product;
          const isAvailable = product.inventory > 0;

          return (
            <div
              key={interest.id}
              className="flex items-center gap-4 rounded-2xl border border-border p-4"
            >
              <img
                src={product.image}
                alt={product.title}
                className="h-20 w-20 rounded-xl object-cover"
              />

              <div className="min-w-0 flex-1">
                <h3 className="font-semibold">{product.title}</h3>

                <p className="mt-1 text-sm text-text-secondary">
                  {isAvailable
                    ? "این محصول دوباره موجود شده است."
                    : "فعلاً ناموجود"}
                </p>
              </div>

              <Link
                to={`/shop/${product.slug}`}
                className="shrink-0 rounded-xl bg-primary px-4 py-2 text-sm font-medium text-white transition hover:opacity-90"
              >
                {isAvailable ? "مشاهده و خرید" : "مشاهده محصول"}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
