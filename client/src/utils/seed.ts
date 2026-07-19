import { USER_STORAGE_KEY } from "@/constants/storage";

export function seedUsers() {
  const users = JSON.parse(localStorage.getItem(USER_STORAGE_KEY) ?? "[]");

  const adminExists = users.some((user: any) => user.role === "admin");

  if (adminExists) return;

  users.push({
    id: crypto.randomUUID(),
    firstName: "Admin",
    lastName: "Terra",
    phone: "09387041259",
    password: "12345678",
    role: "admin",
    createdAt: new Date().toISOString(),
  });

  localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(users));
}
