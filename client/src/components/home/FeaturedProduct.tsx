import Container from "@/components/layout/Container";
import { ArrowLeft } from "lucide-react";
import { NavLink } from "react-router-dom";

import { products } from "@/data/products";

import ProductCard from "./ProductCard";

export default function FeaturedProducts() {
  return (
    <section className="py-24">
      <Container>
        <div className="mb-14 flex items-end justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-primary">
              Featured
            </p>

            <h2 className="mt-3 text-4xl font-semibold text-text-primary">
              محصولات منتخب
            </h2>
          </div>

          <NavLink
            to="/shop"
            className="
      group
      hidden
      items-center
      gap-2
      text-sm
      font-medium
      text-text-secondary
      transition
      hover:text-primary
      md:flex
    "
          >
            مشاهده همه
            <ArrowLeft
              className="transition-transform duration-300 group-hover:-translate-x-1"
              size={18}
            />
          </NavLink>
        </div>
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <NavLink
          to="/shop"
          className="
    mx-auto
    mt-14
    flex
    w-fit
    items-center
    justify-center
    rounded-full
    border
    border-border
    px-8
    py-4
    text-base
    font-medium
    text-text-primary
    transition-all
    duration-300
    hover:border-primary/15
    hover:bg-primary/10
    hover:text-primary
    shadow-md
    hover:shadow-lg
  "
        >
          مشاهده فروشگاه
        </NavLink>
      </Container>
    </section>
  );
}
