import { Navigate } from "react-router-dom";

import { useAuth } from "@/context/AuthContext";

type Props = {
  children: React.ReactNode;
};

export default function AdminProtectedRoute({ children }: Props) {
  const { user } = useAuth();

  if (!user || user.role !== "admin") {
    return <Navigate to="/login" replace />;
  }

  return children;
}