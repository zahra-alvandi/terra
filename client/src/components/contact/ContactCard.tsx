import { Instagram, Phone, Send } from "lucide-react";

type Props = {
  children: React.ReactNode;
};

export default function ContactCard({ children }: Props) {
  return (
    <div className="mx-auto max-w-6xl">
      <div className="mb-14 text-center">
        <h1 className="text-4xl font-bold">تماس با Terra</h1>

        <p className="mt-4 text-text-secondary leading-8">
          اگر سوالی درباره محصولات دارید یا می‌خواهید سفارشی ثبت کنید، خوشحال
          می‌شویم با شما در ارتباط باشیم.
        </p>
      </div>

      <div className="grid gap-10 lg:grid-cols-[360px_1fr]">
        {/* اطلاعات تماس */}
        <div className="flex items-start gap-4">
          <div className="rounded-2xl bg-primary/10 p-3">
            <Phone className="text-primary" size={22} />
          </div>

          <div>
            <p className="text-sm text-text-secondary">شماره تماس</p>

            <p className="mt-1 font-semibold">0912 123 4567</p>
          </div>
        </div>

        {/* فرم */}
        <div
          className="
rounded-3xl
border
border-border
bg-white
p-8
shadow-sm
"
        >
          {children}
        </div>

        <div className="border-t border-border pt-6">
          <p className="mb-4 text-sm text-text-secondary">شبکه‌های اجتماعی</p>

          <div className="flex gap-3">
            <button className="rounded-2xl border border-border p-3 transition hover:border-primary hover:text-primary">
              <Instagram size={20} />
            </button>

            <button className="rounded-2xl border border-border p-3 transition hover:border-primary hover:text-primary">
              <Send size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
