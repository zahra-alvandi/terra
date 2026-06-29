import { useEffect, useRef } from "react";
import { Search, X } from "lucide-react";

import Portal from "@/components/ui/Portal";
import SearchBackdrop from "./SearchBackdrop";
import { popularSearches } from "@/data/search";
import { NavLink } from "react-router-dom";
import SearchSuggestion from "./SearchSuggestion";

type SearchOverlayProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function SearchOverlay({
  isOpen,
  onClose,
}: SearchOverlayProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  // Focus input
  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  // ESC
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

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <Portal>
      <SearchBackdrop
        isOpen={isOpen}
        onClose={onClose}
      />

      <section
        className={`fixed left-0 right-0 top-20 z-50 origin-top bg-background shadow-xl transition-all duration-300 ${
          isOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-6 pointer-events-none opacity-0"
        }`}
      >
        <div className="mx-auto max-w-5xl px-6 py-8">

          <div className="flex items-center gap-4">

            <Search
              size={22}
              className="text-text-secondary"
            />

            <input
              ref={inputRef}
              type="text"
              placeholder="دنبال چه محصولی می‌گردید؟"
              className="flex-1 bg-transparent text-lg outline-none placeholder:text-text-secondary"
            />

            <button
              onClick={onClose}
              className="rounded-full p-2 transition hover:bg-stone-100"
            >
              <X size={22} />
            </button>

          </div>

          <div className="mt-8">

            <p className="mb-4 text-sm text-text-secondary">
              پیشنهادات محبوب
            </p>

            <div className="flex flex-wrap gap-3">

              <div className="flex flex-wrap gap-3">
  {popularSearches.map((item) => (
    <SearchSuggestion
      key={item.id}
      item={item}
      onClick={onClose}
    />
  ))}
</div>

            </div>

          </div>
        </div>
      </section>
    </Portal>
  );
}