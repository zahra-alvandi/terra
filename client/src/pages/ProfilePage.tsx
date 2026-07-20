import Container from "@/components/layout/Container";
import { useAuth } from "@/context/AuthContext";
import { useNavigate } from "react-router-dom";
import { User, Package, LogOut, ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Truck } from "lucide-react";

export default function ProfilePage() {
  const { user, logout } = useAuth();

  const navigate = useNavigate();

  return (
    <section className="py-24">
      <Container>
        <div className="mx-auto max-w-3xl">
          <div className="mb-8 rounded-3xl border border-border bg-white p-8 shadow-sm">
            <div className="flex items-center gap-5">
              <div className="flex h-18 w-18 items-center justify-center rounded-full bg-primary/10">
                <User className="text-primary" size={34} />
              </div>

              <div>
                <h1 className="text-2xl font-bold">
                  {user?.firstName} {user?.lastName}
                </h1>

                <p className="mt-1 text-text-secondary">{user?.phone}</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <Link
              to="/profile/orders"
              className="
        flex
        items-center
        justify-between
        rounded-3xl
        border
        border-border
        bg-white
        p-6
        transition
        hover:border-primary
        hover:shadow-md
      "
            >
              <div className="flex items-center gap-4">
                <div className="rounded-2xl bg-primary/10 p-3">
                  <Package className="text-primary" size={24} />
                </div>

                <div>
                  <p className="font-semibold">سفارش‌های من</p>

                  <p className="text-sm text-text-secondary">
                    مشاهده تاریخچه سفارش‌ها
                  </p>
                </div>
              </div>

              <ChevronLeft />
            </Link>

            <Link
              to="/track-order"
              className="
    flex
    items-center
    justify-between
    rounded-3xl
    border
    border-border
    bg-white
    p-6
    transition
    hover:border-primary
    hover:shadow-md
  "
            >
              <div className="flex items-center gap-4">
                <div className="rounded-2xl bg-primary/10 p-3">
                  <Truck className="text-primary" size={24} />
                </div>

                <div>
                  <p className="font-semibold">پیگیری سفارش</p>

                  <p className="text-sm text-text-secondary">
                    پیگیری سفارش با کد سفارش
                  </p>
                </div>
              </div>

              <ChevronLeft />
            </Link>

            <button
              onClick={logout}
              className="
        flex
        w-full
        items-center
        justify-between
        rounded-3xl
        border
        border-red-200
        bg-white
        p-6
        transition
        hover:bg-red-50
      "
            >
              <div className="flex items-center gap-4">
                <div className="rounded-2xl bg-red-100 p-3">
                  <LogOut className="text-red-500" size={22} />
                </div>

                <span className="font-medium text-red-500">خروج از حساب</span>
              </div>

              <ChevronLeft className="text-red-500" />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
