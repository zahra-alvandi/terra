import { NavLink } from "react-router-dom";

export default function Logo() {
  return (
    <NavLink
      to="/"
      className="flex items-center gap-3 select-none"
    >
      {/* Logo Image */}

      <div className="h-8 w-8 rounded-full border border-border"></div>

      {/* Brand */}

      <span
        style={{ fontFamily: "Cormorant Garamond" }}
        className="text-[40px] font-semibold tracking-[0.08em] text-primary transition-colors duration-300 hover:text-primary-hover"
      >
        Terra
      </span>
    </NavLink>
  );
}