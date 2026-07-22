import { NavLink } from "react-router-dom";

const links = [
  { title: "فروشگاه", href: "/shop" },
  // { title: "درباره Terra", href: "/about" },
  { title: "تماس با ما", href: "/contact" },
];

export default function NavLinks() {
  return (
    <ul className="hidden items-center gap-12 lg:flex">
      {links.map((link) => (
        <li key={link.href}>
          <NavLink
            to={link.href}
            className={({ isActive }) =>
              `group relative py-2 text-[15px] font-medium transition-all duration-300 ${
                isActive
                  ? "text-primary"
                  : "text-text-primary hover:text-primary"
              }`
            }
          >
            {({ isActive }) => (
              <>
                {link.title}

                <span
                  className={`absolute bottom-0 left-1/2 h-[2px] -translate-x-1/2 rounded-full bg-primary transition-all duration-300 ${
                    isActive
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </>
            )}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}