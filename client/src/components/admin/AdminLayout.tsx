import { Outlet } from "react-router-dom";

import AdminSidebar from "./AdminSidebar";
import AdminHeader from "./AdminHeader";

export default function AdminLayout() {
  return (
    <div className="min-h-screen bg-stone-50">
      <AdminSidebar />

      <div className="mr-72">
        <AdminHeader />

        <main className="p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}