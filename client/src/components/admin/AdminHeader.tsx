import { LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { useAdminAuth } from "@/context/AdminAuthContext";

export default function AdminHeader() {
  const { logout } = useAdminAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/admin/login", { replace: true });
  };

  return (
    <header className="flex h-20 items-center justify-between border-b border-border bg-white px-8">
      <h1 className="text-xl font-semibold">پنل مدیریت</h1>

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
