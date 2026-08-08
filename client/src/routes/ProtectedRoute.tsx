import { Navigate, useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";
import toast from "react-hot-toast";
import { useAuth } from "@/context/AuthContext";

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isAuthenticated, loading } = useAuth();
  const location = useLocation();
  const hasShownToast = useRef(false);

  useEffect(() => {
    if (!isAuthenticated && !hasShownToast.current) {
      toast.error("برای ادامه ابتدا وارد حساب کاربری خود شوید");
      hasShownToast.current = true;
    }
  }, [isAuthenticated]);

  if (loading) {
    return null;
  }
  
  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location.pathname }} replace />;
  }

  return children;
}
