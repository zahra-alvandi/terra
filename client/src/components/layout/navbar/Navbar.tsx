import { Menu } from "lucide-react";
import { useState } from "react";

import Container from "../Container";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import NavActions from "./NavActions";
import MobileMenu from "./MobileMenu";
import SearchOverlay from "./SearchOverlay";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <>
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
      <Container>

        {/* Desktop */}
        <div className="hidden h-20 items-center justify-between md:flex">

          <div className="flex items-center gap-16">
            <Logo />
            <NavLinks />
          </div>

          <NavActions
            onOpenSearch={() => setIsSearchOpen(true)}
          />

        </div>

        {/* Mobile */}
        <div className="flex h-20 items-center justify-between md:hidden">

          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="rounded-lg p-2 hover:bg-stone-100"
          >
            <Menu size={24} />
          </button>

          <Logo />

          <NavActions
            onOpenSearch={() => setIsSearchOpen(true)}
          />

        </div>

      </Container>
    </header>
        <MobileMenu
  isOpen={isMobileMenuOpen}
  onClose={() => setIsMobileMenuOpen(false)}
  onOpenSearch={() => setIsSearchOpen(true)}
/>

<SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
</>
  );
}