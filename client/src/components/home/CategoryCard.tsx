import { ArrowLeft } from "lucide-react";
import { NavLink } from "react-router-dom";

import type { Category } from "@/types/category";

type CategoryCardProps = {
  category: Category;
};

export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <NavLink
      to={category.href}
      className="group relative block overflow-hidden rounded-3xl"
    >
      {/* Image */}
      <img
        src={category.image}
        alt={category.title}
        className="aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent transition-all duration-300 group-hover:from-black/95" />

      {/* Content */}
      <div className="absolute inset-x-0 bottom-0 p-6">
        <div className="flex items-end justify-between">
          <div>
            {/* Persian Title */}
            <h3 className="text-sm md:text-xl font-semibold text-white">
              {category.title}
            </h3>

            {/* Divider */}
            <div className="mt-1 ml-2 md:mt-4 md:mb-4 h-px w-20 bg-white/30" />

            {/* Collection */}
            <p className="md:hidden [font-family:var(--font-display)] text-sm line-clamp-1 md:text-md text-white/90">
              Explore
            </p>
            <p className="hidden md:block [font-family:var(--font-display)] text-xl text-white/90">
              Explore Collection
            </p>
          </div>

          {/* Button */}
          <div
            className="
              flex h-8 w-8 md:h-12 md:w-12 items-center justify-center
              rounded-full
              bg-primary
              shadow-lg
              transition-colors
              duration-300
              group-hover:bg-white
            "
          >
            <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5 text-white group-hover:text-primary" />
          </div>
        </div>
      </div>
    </NavLink>
  );
}
