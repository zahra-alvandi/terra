import Container from "@/components/layout/Container";
import { Search, SlidersHorizontal, ChevronDown } from "lucide-react";

export default function ShopToolbar(  ) {
  return (
    <section className="border-b border-border bg-background py-5">
      <Container>
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          {/* Search */}

          <button className="flex items-center gap-3 rounded-full border border-border px-5 py-3 transition hover:border-primary">
            <Search size={18} />

            <span className="text-text-secondary">جستجوی محصولات</span>
          </button>

          {/* Right */}

          <div className="flex gap-3">
            <button className="flex items-center gap-2 rounded-full border border-border px-5 py-3 transition hover:border-primary">
              دسته‌بندی
              <ChevronDown size={16} />
            </button>

            <button className="flex items-center gap-2 rounded-full border border-border px-5 py-3 transition hover:border-primary">
              مرتب‌سازی
              <SlidersHorizontal size={16} />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
