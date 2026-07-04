import { NavLink } from "react-router-dom";

export default function Logo() {
  return (
    <NavLink
      to="/"
      className="flex items-center gap-3 select-none"
    >
      {/* <img src="/logo.png" className="w-8 h-8" alt="" /> */}

      <div className="h-15 w-15 rounded-full border border-border overflow-hidden">
        <img src="/logo.png" alt="" />
      </div>

      {/* Brand */}

      <span
        style={{ fontFamily: "Cormorant Garamond" }}
        className="hidden md:block text-[40px] font-semibold tracking-[0.08em] text-primary transition-colors duration-300 hover:text-primary-hover"
      >
        Terra
      </span>
    </NavLink>
  );
}