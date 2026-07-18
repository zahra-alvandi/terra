import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

type Props = {
  title: string;
  subtitle: string;
  children: React.ReactNode;
};

export default function AuthCard({ title, subtitle, children }: Props) {
  const navigate = useNavigate();
  return (
    <>
      <div className="mx-auto max-w-md rounded-3xl border border-border bg-white p-8 shadow-sm">
        <button
          onClick={() => {
            if (window.history.length > 1) {
              navigate(-1);
            } else {
              navigate("/");
            }
          }}
          className="mb-6 flex items-center gap-2 text-sm text-text-secondary transition hover:cursor-pointer "
        >
          بازگشت به صفحه اصلی
          <ArrowRight size={18} />
        </button>
        <h1 className="text-3xl font-bold text-center">{title}</h1>

        <p className="mt-3 text-center text-text-secondary">{subtitle}</p>

        <div className="mt-8">{children}</div>
      </div>
    </>
  );
}
