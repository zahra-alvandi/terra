import { LogOut, Menu } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { useAdminAuth } from "@/context/AdminAuthContext";

type Props = {
  onMenuClick: () => void;
};

export default function AdminHeader({ onMenuClick }: Props) {
  const { logout } = useAdminAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/admin/login", { replace: true });
  };

  return (
    <header className="flex h-20 items-center justify-between border-b border-border bg-white px-4 sm:px-6 lg:px-8">
      <div className="flex items-center gap-3">
        <button
          onClick={onMenuClick}
          className="rounded-xl border border-border p-2 lg:hidden"
        >
          <Menu size={20} />
        </button>

        <h1 className="text-lg font-semibold sm:text-xl">پنل مدیریت</h1>
      </div>

      <button
        onClick={handleLogout}
        className="
          flex
          items-center
          gap-2
          rounded-xl
          border
          border-border
          px-4
          py-2
          text-sm
          transition
          hover:border-red-500
          hover:text-red-500
        "
      >
        <LogOut size={18} />
        خروج
      </button>
    </header>
  );
}
