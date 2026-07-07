import { House, Search, ShoppingBag, User, ShoppingCart } from "lucide-react";
import { NavLink } from "react-router-dom";

import { useSearch } from "@/context/SearchContext";

export default function MobileBottomNav() {
  const { openSearch } = useSearch();
  const handleNavigate = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <nav
      className="
        fixed
        bottom-4
        left-1/2
        z-50
        flex
        w-[92%]
        max-w-md
        -translate-x-1/2
        items-center
        justify-between
        rounded-full
        border
        border-border
        bg-white/95
        px-6
        py-4
       shadow-2xl shadow-primary/20
        backdrop-blur
        md:hidden
      "
    >
      <NavLink
        to="/shop"
        onClick={handleNavigate}
        className={({ isActive }) =>
          `flex flex-col items-center gap-1 transition-colors duration-200 ${
            isActive ? "text-primary" : "text-text-secondary"
          }`
        }
      >
        <ShoppingBag size={22} />
        <span className="text-[10px]">فروشگاه</span>
      </NavLink>

      <button
        onClick={openSearch}
        className="flex flex-col items-center gap-1 text-text-secondary"
      >
        <Search size={22} />
        <span className="text-[10px]">جستجو</span>
      </button>

      <NavLink
        to="/"
        end
        onClick={handleNavigate}
        className={({ isActive }) =>
          `
      -mt-12
      flex
      h-[72px]
      w-[72px]
      items-center
      justify-center
      rounded-full
      shadow-2xl
      transition-all
      duration-200
      ${
        isActive
          ? "bg-primary text-white scale-105"
          : "bg-white text-primary border border-border"
      }
    `
        }
      >
        <House size={30} strokeWidth={2.4} />
      </NavLink>

      <NavLink
        to="/cart"
        className={({ isActive }) =>
          `flex flex-col items-center gap-1 transition-colors duration-200 ${
            isActive ? "text-primary" : "text-text-secondary"
          }`
        }
        onClick={handleNavigate}
      >
        <ShoppingCart size={22} />
        <span className="text-[10px]">سبد خرید</span>
      </NavLink>

      <button className="flex flex-col items-center gap-1 text-text-secondary">
        <User size={22} />
        <span className="text-[10px]">پروفایل</span>
      </button>
    </nav>
  );
}
