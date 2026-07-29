const API = import.meta.env.VITE_API_URL;

import { getToken } from "./authService";

export async function uploadImage(file: File) {
  const formData = new FormData();

  formData.append("image", file);

  const response = await fetch(`${API}/upload`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
    body: formData,
  });

  if (!response.ok) {
    throw new Error("Image upload failed");
  }

  const result = await response.json();

  return result.data.image as string;
}