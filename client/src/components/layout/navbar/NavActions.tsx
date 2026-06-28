import { Search, ShoppingBag } from "lucide-react";

type NavActionsProps = {
  onOpenSearch: () => void;
};

export default function NavActions({
  onOpenSearch,
}: NavActionsProps) {
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
      <button className="hidden cursor-pointer text-sm font-medium text-text-primary transition-colors duration-300 hover:text-primary md:block">
        ورود | ثبت نام
      </button>

      {/* Cart */}
      <button className="relative cursor-pointer rounded-full p-2 text-text-primary transition-all duration-300 hover:bg-stone-200 hover:text-primary">
        <ShoppingBag size={22} strokeWidth={1.75} />

        <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[12px] font-semibold text-white">
          0
        </span>
      </button>

    </div>
  );
}