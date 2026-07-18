import Container from "@/components/layout/Container";
import { useAuth } from "@/context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function ProfilePage() {
  const { user, logout } = useAuth();

  const navigate = useNavigate();

  return (
    <section className="py-24">
      <Container>
        <div className="mx-auto max-w-2xl rounded-3xl border border-border bg-white p-8">
          <h1 className="mb-8 text-3xl font-bold">پروفایل</h1>

          <div className="space-y-5">
            <div>
              <p className="text-sm text-text-secondary">نام</p>
              <p className="mt-1 font-medium">{user?.firstName}</p>
            </div>

            <div>
              <p className="text-sm text-text-secondary">نام خانوادگی</p>
              <p className="mt-1 font-medium">{user?.lastName}</p>
            </div>

            <div>
              <p className="text-sm text-text-secondary">شماره موبایل</p>
              <p className="mt-1 font-medium">{user?.phone}</p>
            </div>
          </div>

          <button
            onClick={() => {
              logout();
              navigate("/");
            }}
            className="mt-10 rounded-2xl bg-red-500 px-6 py-3 text-white"
          >
            خروج از حساب
          </button>
        </div>
      </Container>
    </section>
  );
}
