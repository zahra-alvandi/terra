import { NavLink } from "react-router-dom";

export default function Logo() {
  return (
    <NavLink
      to="/"
      className="select-none text-[42px] font-semibold tracking-[0.08em] text-primary transition-colors duration-300 hover:text-primary-hover"
      style={{ fontFamily: "Cormorant Garamond" }}
    >
      Terra
    </NavLink>
  );
}