const API = import.meta.env.VITE_API_URL;

export const IMAGE_BASE = API.replace("/api", "");

export function getImageUrl(path?: string | null) {
  if (!path) return "";

  if (path.startsWith("http")) return path;

  return `${IMAGE_BASE}${path}`;
}
