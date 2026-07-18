import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  X,
  House,
  ShoppingBag,
  CircleHelp,
  Mail,
  Search,
  User,
} from "lucide-react";

import MobileNavItem from "./MobileNavItem";

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
  onOpenSearch: () => void;
};

export default function MobileMenu({
  isOpen,
  onClose,
  onOpenSearch,
}: MobileMenuProps) {
  const location = useLocation();

  // Close the menu after changing the page
  useEffect(() => {
    onClose();
  }, [location.pathname, onClose]);

  // Close with ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
        />
      )}

      {/* Drawer */}
      <aside
        onClick={(e) => e.stopPropagation()}
        className={`fixed right-0 top-0 z-50 flex h-screen w-72 flex-col bg-white shadow-xl transition-transform duration-300 lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b p-5">
          <h2 className="text-lg font-semibold">Terra</h2>

          <button
            onClick={onClose}
            className="rounded-full p-2 hover:bg-stone-100"
          >
            <X size={22} />
          </button>
        </div>

        <nav className="flex-1 p-6">
          <div className="flex flex-col gap-2">
            <MobileNavItem to="/" icon={House} onClick={onClose}>
              خانه
            </MobileNavItem>

            <MobileNavItem to="/shop" icon={ShoppingBag} onClick={onClose}>
              فروشگاه
            </MobileNavItem>

            <MobileNavItem to="/about" icon={CircleHelp} onClick={onClose}>
              درباره Terra
            </MobileNavItem>

            <MobileNavItem to="/contact" icon={Mail} onClick={onClose}>
              تماس با ما
            </MobileNavItem>
            <MobileNavItem to="/login" icon={User} onClick={onClose}>
              ورود | ثبت نام
            </MobileNavItem>
          </div>
        </nav>

        <div className="border-t p-4">
          <button
            onClick={() => {
              onClose();

              setTimeout(() => {
                onOpenSearch();
              }, 250);
            }}
            className="flex w-full items-center gap-3 rounded-xl px-4 py-3 transition hover:bg-stone-100"
          >
            <Search size={20} />
            <span>جستجو</span>
          </button>

          
        </div>
      </aside>
    </>
  );
}
