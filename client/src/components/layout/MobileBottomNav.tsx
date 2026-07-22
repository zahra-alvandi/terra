import { House, Search, ShoppingBag, ShoppingCart, User } from "lucide-react";
import * as reactRouterDom from "react-router-dom";

import { useAuth } from "@/context/AuthContext";
import { useSearch } from "@/context/SearchContext";

type MobileBottomNavProps = {
  hidden?: boolean;
};

export default function MobileBottomNav({
  hidden = false,
}: MobileBottomNavProps) {
  const { openSearch } = useSearch();
  const handleNavigate = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const { isAuthenticated, isAdmin } = useAuth();

  return (
    <nav
      className={`
    fixed
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
    px-4
    py-3
    shadow-2xl
    shadow-primary/20
    backdrop-blur
    transition-all
    duration-300
    md:hidden
    ${
      hidden
        ? "-bottom-32 opacity-0 pointer-events-none"
        : "bottom-2 opacity-100"
    }
  `}
    >
      <reactRouterDom.NavLink
        to="/shop"
        onClick={handleNavigate}
        className={({ isActive }) =>
          `flex flex-col items-center gap-1 transition-colors duration-200 ${
            isActive ? "text-primary" : "text-text-secondary"
          }`
        }
      >
        <ShoppingBag size={20} />
        <span className="text-[10px]">فروشگاه</span>
      </reactRouterDom.NavLink>

      <button
        onClick={openSearch}
        className="flex flex-col items-center gap-1 text-text-secondary"
      >
        <Search size={20} />
        <span className="text-[10px]">جستجو</span>
      </button>

      <reactRouterDom.NavLink
        to="/"
        end
        onClick={handleNavigate}
        className={({ isActive }) =>
          `
      -mt-12
      flex
      h-[60px]
      w-[60px]
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
        <House size={24} strokeWidth={2.4} />
      </reactRouterDom.NavLink>

      <reactRouterDom.NavLink
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
      </reactRouterDom.NavLink>

      <reactRouterDom.NavLink
        to={isAdmin ? "/admin" : isAuthenticated ? "/profile" : "/login"}
        onClick={handleNavigate}
        className={({ isActive }) =>
          `flex flex-col items-center gap-1 transition-colors duration-200 ${
            isActive ? "text-primary" : "text-text-secondary"
          }`
        }
      >
        <User size={20} />

        <span className="text-[10px]">
          {isAdmin ? "پنل" : isAuthenticated ? "پروفایل" : "ورود"}
        </span>
      </reactRouterDom.NavLink>
    </nav>
  );
}
