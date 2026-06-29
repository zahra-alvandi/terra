import { ArrowRight } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function HeroContent() {
  return (
    <div dir="ltr" className="order-2 text-center lg:order-1 lg:text-left">
      <p className="mb-4 text-sm uppercase tracking-[0.35em] text-primary animate-fade-up">
        Handmade Ceramics
      </p>

      <h1 className="animate-fade-up animation-delay-150 [font-family:var(--font-display)] text-4xl text-text-primary md:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-[1] tracking-tight">
        Crafted with Earth.
        <br />
        Made for Home.
      </h1>

      {/* Badge */}
      <div className="md:mb-6 mt-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-[10px] md:text-xs font-medium uppercase tracking-[0.25em] text-primary">
        <span>✦</span>
        <span>Handmade in Small Batches</span>
      </div>

      <p className="animation-delay-300 mt-8 mx-auto lg:mx-0 max-w-lg animate-fade-up md:text-lg leading-8 text-text-secondary">
        Discover timeless ceramic pieces designed to bring warmth, simplicity
        and natural beauty into everyday living.
      </p>

      <NavLink
        to="/shop"
        className="animation-delay-500 group mt-10 inline-flex animate-fade-up items-center gap-3 rounded-full bg-primary px-8 py-4 text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
      >
        Shop Collection
        <ArrowRight
          size={18}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </NavLink>
    </div>
  );
}
