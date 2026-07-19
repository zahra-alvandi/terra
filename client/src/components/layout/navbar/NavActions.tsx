import { Search, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import UserDropdown from "./UserDropdown";

type NavActionsProps = {
  onOpenSearch: () => void;
};

export default function NavActions({ onOpenSearch }: NavActionsProps) {
  const { cartCount } = useCart();
  const navigate = useNavigate();

  return (
    <div className="flex items-center gap-6">
      {/* Search */}
      <button
        onClick={onOpenSearch}
        className="hidden md:block cursor-pointer rounded-full p-2 text-text-primary transition-all duration-300 hover:bg-stone-200 hover:text-primary"
      >
        <Search size={20} strokeWidth={1.75} />
      </button>

      {/* User */}
      <div className="hidden md:block">
        <UserDropdown />
      </div>

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
