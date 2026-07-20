import { useState } from "react";
import { NavLink } from "react-router-dom";
import { ChevronDown } from "lucide-react";

import { useAuth } from "@/context/AuthContext";

export default function UserDropdown() {
  const { user, logout } = useAuth();

  const [open, setOpen] = useState(false);

  if (!user) {
    return (
      <NavLink
        to="/login"
        className="text-sm font-medium text-text-primary transition hover:text-primary"
      >
        ورود | ثبت نام
      </NavLink>
    );
  }

  return (
    <div className="relative">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center gap-2 text-sm font-medium hover:text-primary"
      >
        {user.firstName}

        <ChevronDown
          size={18}
          className={`transition ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div
          className="
          absolute
          left-0
          mt-3
          w-52
          rounded-2xl
          border
          border-border
          bg-white
          p-2
          shadow-xl
        "
        >
          <NavLink
            to="/profile"
            onClick={() => setOpen(false)}
            className="block rounded-xl px-4 py-3 hover:bg-stone-100"
          >
            پروفایل
          </NavLink>

          {user.role !== "admin" && (
            <NavLink
              to="/profile/orders"
              onClick={() => setOpen(false)}
              className="block rounded-xl px-4 py-3 hover:bg-stone-100"
            >
              سفارش‌های من
            </NavLink>
          )}

          {user.role === "admin" && (
            <NavLink
              to="/admin"
              onClick={() => setOpen(false)}
              className="block rounded-xl px-4 py-3 hover:bg-stone-100"
            >
              پنل مدیریت
            </NavLink>
          )}

          <button
            onClick={() => {
              setOpen(false);
              logout();
            }}
            className="w-full rounded-xl px-4 py-3 text-right text-red-500 hover:bg-red-50"
          >
            خروج
          </button>
        </div>
      )}
    </div>
  );
}
