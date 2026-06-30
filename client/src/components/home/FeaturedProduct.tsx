import Container from "@/components/layout/Container";
import { ArrowLeft } from "lucide-react";
import { NavLink } from "react-router-dom";

import { products } from "@/data/products";

import ProductCard from "../ui/ProductCard";

export default function FeaturedProducts() {
  return (
    <section className="py-24">
      <Container>
        {/* Header */}

        <div className="mb-16 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="[font-family:var(--font-display)] text-3xl text-text-primary md:text-5xl">
              Featured Collection
            </p>

            <h2 className="mt-3 text-2xl font-semibold text-text-primary md:text-4xl">
              محصولات منتخب
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-text-secondary md:text-base">
              مجموعه‌ای از محبوب‌ترین محصولات Terra که با دقت انتخاب شده‌اند تا
              زیبایی، کیفیت و حس اصالت را به فضای زندگی شما بیاورند.
            </p>
          </div>

          <NavLink
            to="/shop"
            className="
              hidden
              md:flex
              items-center
              gap-3
              rounded-full
              border
              border-border
              px-6
              py-3
              text-sm
              font-medium
              text-text-primary
              transition-all
              duration-300
              hover:border-primary
              hover:bg-primary/5
              hover:text-primary
            "
          >
            مشاهده همه محصولات
            <ArrowLeft
              size={18}
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />
          </NavLink>
        </div>

        {/* Divider */}

        <div className="mb-12 h-px w-full bg-border" />

        {/* Products */}

        <div className="grid grid-cols-2 gap-5 lg:grid-cols-2 xl:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Mobile CTA */}

        <div className="mt-10 flex justify-center md:hidden">
          <NavLink
            to="/shop"
            className="
              flex
              items-center
              gap-2
              rounded-full
              border
              border-border
              px-6
              py-3
              text-sm
              font-medium
              transition-all
              duration-300
              hover:border-primary
              hover:bg-primary/5
              hover:text-primary
            "
          >
            مشاهده همه محصولات
            <ArrowLeft size={18} />
          </NavLink>
        </div>
      </Container>
    </section>
  );
}
