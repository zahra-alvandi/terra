import { ChevronLeft } from "lucide-react";
import { NavLink } from "react-router-dom";

type Props = {
  title: string;
};

export default function ProductBreadcrumb({ title }: Props) {
  return (
    <nav className="mb-10 flex items-center gap-2 text-sm text-text-secondary">
      <NavLink to="/" className="transition hover:text-primary">
        خانه
      </NavLink>

      <ChevronLeft size={16} />

      <NavLink to="/shop" className="transition hover:text-primary">
        فروشگاه
      </NavLink>

      <ChevronLeft size={16} />

      <span className="text-text-primary">{title}</span>
    </nav>
  );
}
