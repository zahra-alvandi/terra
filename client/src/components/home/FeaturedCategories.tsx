import Container from "@/components/layout/Container";
import { categories } from "@/data/categories";

import CategoryCard from "./CategoryCard";

export default function FeaturedCategories() {
  return (
    <section className="py-20">
      <Container>
        {/* Heading */}
        <div className="mb-14 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-[10px] md:text-xs font-medium uppercase tracking-[0.25em] text-primary">
            Categories
          </span>

          <h2 className="mt-4 text-4xl font-semibold text-text-primary">
            دسته‌بندی محصولات
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-text-secondary">
            مجموعه‌ای از محصولات سفالی دست‌ساز که با دقت و ظرافت برای استفاده
            روزمره و زیبایی خانه طراحی شده‌اند.
          </p>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-4">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </Container>
    </section>
  );
}
