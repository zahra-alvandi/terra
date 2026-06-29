import { NavLink } from "react-router-dom";
import type { LucideIcon } from "lucide-react";

type MobileNavItemProps = {
  to: string;
  icon: LucideIcon;
  children: React.ReactNode;
  onClick?: () => void;
};

export default function MobileNavItem({
  to,
  icon: Icon,
  children,
  onClick,
}: MobileNavItemProps) {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        `group flex items-center gap-3 rounded-xl px-4 py-3 transition-all duration-300 ${
          isActive
            ? "bg-primary/10 text-primary font-semibold shadow-sm ring-1 ring-primary/15"
            : "text-text-primary hover:bg-stone-100 hover:translate-x-1"
        }`
      }
    >
      <Icon
        size={20}
        className="transition-transform duration-300 group-hover:scale-110"
      />

      <span>{children}</span>
    </NavLink>
  );
}