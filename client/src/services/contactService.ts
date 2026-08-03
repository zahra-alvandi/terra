import { getToken } from "./authService";

const API = import.meta.env.VITE_API_URL;

export interface ContactMessage {
  id: string;
  name: string;
  phone: string;
  email?: string | null;
  message: string;
  isRead: boolean;
  createdAt: string;
}

export interface ContactFormPayload {
  name: string;
  phone: string;
  email?: string;
  message: string;
}

export async function createMessage(data: ContactFormPayload) {
  const response = await fetch(`${API}/contact`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store",
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Failed to send message");
  }

  const result = await response.json();
  return result.data as ContactMessage;
}

export async function getMessages(): Promise<ContactMessage[]> {
  const token = getToken();

  const response = await fetch(`${API}/contact`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch messages");
  }

  const result = await response.json();
  return result.data as ContactMessage[];
}

export async function getMessageById(
  id: string,
): Promise<ContactMessage | undefined> {
  const messages = await getMessages();
  return messages.find((m) => m.id === id);
}

export async function markAsRead(id: string) {
  const token = getToken();

  const response = await fetch(`${API}/contact/${id}/read`, {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to mark message as read");
  }

  const result = await response.json();
  return result.data as ContactMessage;
}

export async function deleteMessage(id: string) {
  const token = getToken();

  const response = await fetch(`${API}/contact/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to delete message");
  }
}
