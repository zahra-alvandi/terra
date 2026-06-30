import Container from "@/components/layout/Container";
import { Search } from "lucide-react";
import { categories } from "@/constants/categories";
import FilterPopover from "./FilterPopover";
import { sortOptions } from "@/constants/sortOptions";

type Props = {
  search: string;
  onSearchChange: (value: string) => void;

  category: string;
  onCategoryChange: (value: string) => void;

  sort: string;
  onSortChange: (value: string) => void;
};

export default function ShopToolbar({
  search,
  onSearchChange,

  category,
  onCategoryChange,

  sort,
  onSortChange,
}: Props) {
  return (
    <section className="border-b border-border bg-background py-5">
      <Container>
        <div className="flex flex-col gap-5">
          {/* Search */}

          <div className="relative w-full md:max-w-xl">
            <Search
              size={18}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-text-secondary"
            />

            <input
              value={search}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="جستجوی محصولات..."
              className="
        w-full
        rounded-full
        border
        border-border
        bg-background
        py-3
        pr-12
        pl-5
        outline-none
        transition
        focus:border-primary
      "
            />
          </div>

          {/* Filters */}

          <div className="flex flex-wrap items-center gap-3">
            <FilterPopover
              label="دسته‌بندی"
              value={category}
              options={categories}
              onChange={onCategoryChange}
            />

            <FilterPopover
              label="مرتب‌سازی"
              value={sort}
              options={sortOptions}
              onChange={onSortChange}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
