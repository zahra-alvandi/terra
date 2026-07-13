import { createContext, useContext, useState, type ReactNode } from "react";

type AdminAuthContextType = {
  isAuthenticated: boolean;
  login: (username: string, password: string) => boolean;
  logout: () => void;
};

const AdminAuthContext = createContext<AdminAuthContextType | null>(null);

type Props = {
  children: ReactNode;
};

export function AdminAuthProvider({ children }: Props) {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("terra-admin") === "true",
  );

  const login = (username: string, password: string) => {
    if (username === "admin" && password === "123456") {
      localStorage.setItem("terra-admin", "true");
      setIsAuthenticated(true);
      return true;
    }

    return false;
  };

  const logout = () => {
    localStorage.removeItem("terra-admin");
    setIsAuthenticated(false);
  };

  return (
    <AdminAuthContext.Provider
      value={{
        isAuthenticated,
        login,
        logout,
      }}
    >
      {children}
    </AdminAuthContext.Provider>
  );
}

export function useAdminAuth() {
  const context = useContext(AdminAuthContext);

  if (!context) {
    throw new Error("useAdminAuth must be used inside AdminAuthProvider");
  }

  return context;
}
