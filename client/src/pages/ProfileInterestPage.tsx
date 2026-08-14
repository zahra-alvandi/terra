import Container from "@/components/layout/Container";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  getMyProductInterests,
  deleteProductInterest,
  type ProductInterest,
} from "@/services/productInterestService";
import { Trash2 } from "lucide-react";

export default function ProfileInterestsPage() {
  const [interests, setInterests] = useState<ProductInterest[]>([]);
  const [loading, setLoading] = useState(true);
  const API = import.meta.env.VITE_API_URL.replace("/api", "");

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

  if (loading) {
    return (
      <section className="py-16">
        <Container>
          <p className="text-center text-text-secondary">
            در حال دریافت محصولات...
          </p>
        </Container>
      </section>
    );
  }

  return (
    <section className="py-16">
      <Container>
        <div className="mx-auto max-w-3xl">
          <div className="mb-8">
            <h1 className="text-3xl font-bold">محصولات مورد علاقه</h1>

            <p className="mt-2 text-text-secondary">
              محصولاتی که منتظر موجود شدنشان هستید
            </p>
          </div>

          {interests.length === 0 ? (
            <div className="rounded-3xl border border-border bg-white p-16 text-center">
              <p className="text-text-secondary">
                هنوز محصولی را برای موجود شدن ذخیره نکرده‌اید.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {interests.map((interest) => {
                const product = interest.product;
                const isAvailable = product.inventory > 0;

                const handleDelete = async () => {
                  try {
                    await deleteProductInterest(product.id);

                    setInterests((prev) =>
                      prev.filter((item) => item.id !== interest.id),
                    );
                  } catch (error) {
                    console.error("خطا در حذف محصول:", error);
                  }
                };

                return (
                  <div
                    key={interest.id}
                    className="
        flex
        items-center
        gap-5
        rounded-3xl
        border
        border-border
        bg-white
        p-5
        transition-all
        hover:border-primary
        hover:shadow-md
      "
                  >
                    <Link to={`/shop/${product.slug}`} className="shrink-0">
                      <img
                        src={`${API}${product.image}`}
                        alt={product.title}
                        className="h-24 w-24 rounded-2xl object-cover"
                      />
                    </Link>

                    <div className="min-w-0 flex-1">
                      <Link
                        to={`/shop/${product.slug}`}
                        className="font-semibold text-text-primary hover:text-primary"
                      >
                        {product.title}
                      </Link>

                      <div className="mt-2">
                        {isAvailable ? (
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="rounded-full bg-green-50 px-3 py-1 text-sm font-medium text-green-700">
                              موجود شد
                            </span>

                            <span className="text-sm text-text-secondary">
                              موجودی: {product.inventory} عدد
                            </span>
                          </div>
                        ) : (
                          <span className="rounded-full bg-stone-100 px-3 py-1 text-sm text-text-secondary">
                            فعلاً ناموجود
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="flex shrink-0 items-center gap-3">
                      <Link
                        to={`/shop/${product.slug}`}
                        className="rounded-xl bg-primary px-4 py-2 text-sm font-medium text-white transition hover:opacity-90"
                      >
                        {isAvailable ? "مشاهده و خرید" : "مشاهده محصول"}
                      </Link>

                      <button
                        type="button"
                        onClick={handleDelete}
                        className="
            rounded-xl
            p-2.5
            text-red-500
            transition
            hover:bg-red-50
          "
                        title="حذف از محصولات مورد علاقه"
                      >
                        <Trash2 size={19} />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
