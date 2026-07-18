import { Search, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";

type NavActionsProps = {
  onOpenSearch: () => void;
};

export default function NavActions({ onOpenSearch }: NavActionsProps) {
  const { cartCount } = useCart();
  const navigate = useNavigate();
  const { user, isAuthenticated } = useAuth();

  return (
    <div className="flex items-center gap-6">
      {/* Search */}
      <button
        onClick={onOpenSearch}
        className="hidden md:block cursor-pointer rounded-full p-2 text-text-primary transition-all duration-300 hover:bg-stone-200 hover:text-primary"
      >
        <Search size={20} strokeWidth={1.75} />
      </button>

      {/* Login */}
      {isAuthenticated ? (
        <NavLink
          to="/profile"
          className="hidden text-sm font-medium transition hover:text-primary md:block"
        >
          {user?.firstName}
        </NavLink>
      ) : (
        <NavLink
          to="/login"
          className="hidden md:block text-sm font-medium hover:text-primary"
        >
          ورود | ثبت نام
        </NavLink>
      )}

      {/* Cart */}
      <button
        onClick={() => navigate("/cart")}
        className="relative cursor-pointer rounded-full p-2 text-text-primary transition-all duration-300 hover:bg-stone-200 hover:text-primary"
      >
        <ShoppingBag size={22} strokeWidth={1.75} />

        {cartCount > 0 && (
          <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[12px] font-semibold text-white">
            {cartCount}
          </span>
        )}
      </button>
    </div>
  );
}
