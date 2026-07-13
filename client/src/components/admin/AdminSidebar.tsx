import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  ShoppingBag,
  Package,
  Users,
  Settings,
} from "lucide-react";

const links = [
  {
    title: "داشبورد",
    to: "/admin",
    icon: LayoutDashboard,
  },
  {
    title: "سفارش‌ها",
    to: "/admin/orders",
    icon: ShoppingBag,
  },
  {
    title: "محصولات",
    to: "/admin/products",
    icon: Package,
  },
  {
    title: "مشتریان",
    to: "/admin/customers",
    icon: Users,
  },
  {
    title: "تنظیمات",
    to: "/admin/settings",
    icon: Settings,
  },
];

export default function AdminSidebar() {
  return (
    <aside className="fixed right-0 top-0 h-screen w-72 border-l border-border bg-white p-8">
      <h2 className="mb-10 text-2xl font-bold">Terra Admin</h2>

      <nav className="space-y-2">
        {links.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/admin"}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-xl px-4 py-3 transition ${
                  isActive
                    ? "bg-primary text-white"
                    : "text-text-secondary hover:bg-stone-100"
                }`
              }
            >
              <Icon size={20} />
              {item.title}
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
}
