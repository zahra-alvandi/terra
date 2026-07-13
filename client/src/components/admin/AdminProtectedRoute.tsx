import { Navigate } from "react-router-dom";

import { useAdminAuth } from "@/context/AdminAuthContext";

type Props = {
  children: React.ReactNode;
};

export default function AdminProtectedRoute({ children }: Props) {
  const { isAuthenticated } = useAdminAuth();

  if (!isAuthenticated) {
    return <Navigate to="/admin/login" replace />;
  }

  return children;
}
