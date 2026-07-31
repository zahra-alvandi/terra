const API = import.meta.env.VITE_API_URL;

export type AuthUser = {
  id: string;
  firstName: string;
  lastName: string;
  phone: string;
  isAdmin: boolean;
};

const TOKEN_KEY = "terra_token";
const USER_KEY = "terra_user";

export async function register(data: {
  firstName: string;
  lastName: string;
  phone: string;
  password: string;
}) {
  const response = await fetch(`${API}/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message || "Register failed");
  } 

  return result;
}

export async function login(data: { phone: string; password: string }) {
  const response = await fetch(`${API}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Login failed");
  }

  const result = await response.json();

  localStorage.setItem(TOKEN_KEY, result.token);
  localStorage.setItem(USER_KEY, JSON.stringify(result.data));

  return result.data as AuthUser;
}

export function logout() {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(USER_KEY);
}

export function getCurrentUser(): AuthUser | null {
  const user = localStorage.getItem(USER_KEY);

  if (!user) return null;

  return JSON.parse(user);
}

export function getToken() {
  return localStorage.getItem(TOKEN_KEY);
}

export async function authFetch(url: string, options: RequestInit = {}) {
  const token = getToken();

  return fetch(url, {
    ...options,
    headers: {
      ...(options.headers ?? {}),
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
}
