const API = import.meta.env.VITE_API_URL;

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

  if (!response.ok) {
    throw new Error("Register failed");
  }

  return response.json();
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

  return response.json();
}
