import { authFetch } from "./authService";

const API = import.meta.env.VITE_API_URL;

export async function getUsers() {
  const response = await authFetch(`${API}/users`);

  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }

  const result = await response.json();

  return result.data;
}
