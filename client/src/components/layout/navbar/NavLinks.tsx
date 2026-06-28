import { NavLink } from "react-router-dom";

const links = [
    {title: 'فروشگاه', href: '/shop'},
    {title: 'درباره Terra', href: '/about'},
    {title: 'تماس با ما', href: '/contact'},
]

export default function NavLinks() {
    return(
        <ul className="hidden items-center gap-12 md:flex">
            {links.map((link) => (
                <li key={link.href}>
<NavLink
  to={link.href}
  className="group relative py-2 text-[15px] font-medium text-text-primary transition-colors duration-300 hover:text-primary"
>
  {link.title}

  <span className="absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-primary transition-all duration-300 group-hover:w-full"></span>
</NavLink>
                </li>
            ))}
        </ul>
    )
}