import { AUTH_STORAGE_KEY, USER_STORAGE_KEY } from "@/constants/storage";

export type AuthUser = Omit<User, "password">;

export type User = {
  id: string;
  firstName: string;
  lastName: string;
  phone: string;
  password: string;
  role: "customer" | "admin";
  createdAt: string;
};

export const authService = {
  getUsers(): User[] {
    const data = localStorage.getItem(USER_STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  },

  saveUsers(users: User[]) {
    localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(users));
  },

  register(user: User) {
    const users = this.getUsers();

    users.push(user);

    this.saveUsers(users);
  },

  login(phone: string, password: string) {
    console.log("Users:", this.getUsers());
    console.log("Input:", phone, password);

    const user = this.getUsers().find(
      (u) => u.phone === phone && u.password === password,
    );

    console.log("Found user:", user);

    if (!user) return null;

    const { password: _, ...authUser } = user;

    localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(authUser));

    return authUser;
  },

  logout() {
    localStorage.removeItem(AUTH_STORAGE_KEY);
  },

  getCurrentUser(): AuthUser | null {
    const data = localStorage.getItem(AUTH_STORAGE_KEY);

    return data ? JSON.parse(data) : null;
  },
  userExists(phone: string) {
    return this.getUsers().some((u) => u.phone === phone);
  },
};
