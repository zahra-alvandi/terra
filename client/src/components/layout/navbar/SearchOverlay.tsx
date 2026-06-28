import { Search, X } from "lucide-react";

type SearchOverlayProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function SearchOverlay({
  isOpen,
  onClose,
}: SearchOverlayProps) {
  return (
    <div
      className={`absolute left-0 top-full w-full overflow-hidden border-b border-border bg-background transition-all duration-300 ${
        isOpen
          ? "max-h-[500px] opacity-100"
          : "pointer-events-none max-h-0 opacity-0"
      }`}
    >
      <div className="mx-auto flex max-w-5xl items-center gap-4 px-6 py-6">
        <Search className="text-text-secondary" size={22} />

        <input
          autoFocus={isOpen}
          type="text"
          placeholder="دنبال چه محصولی می‌گردید؟"
          className="flex-1 bg-transparent text-lg outline-none placeholder:text-text-secondary"
        />

        <button
          onClick={onClose}
          className="rounded-full p-2 transition hover:bg-stone-200"
        >
          <X size={20} />
        </button>
      </div>

      <div className="mx-auto max-w-5xl px-6 pb-8">
        <p className="mb-4 text-sm text-text-secondary">
          پیشنهادات محبوب
        </p>

        <div className="flex flex-wrap gap-3">
          {[
            "گلدان سرامیکی",
            "ماگ دست‌ساز",
            "بشقاب سفالی",
            "ظرف دکوری",
          ].map((item) => (
            <button
              key={item}
              className="rounded-full border border-border px-4 py-2 text-sm transition hover:border-primary hover:text-primary"
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}