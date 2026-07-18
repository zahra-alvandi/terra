import { createContext, useContext, useEffect, useState } from "react";

import { authService, type AuthUser } from "@/services/authService";

type AuthContextType = {
  user: AuthUser | null;
  isAuthenticated: boolean;

  login: (phone: string, password: string) => boolean;

  logout: () => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);

  useEffect(() => {
    setUser(authService.getCurrentUser());
  }, []);

  const login = (phone: string, password: string) => {
    const loggedUser = authService.login(phone, password);

    if (!loggedUser) return false;

    setUser(loggedUser);

    return true;
  };

  const logout = () => {
    authService.logout();

    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }

  return context;
}
