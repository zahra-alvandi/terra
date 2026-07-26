import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "terra-super-secret-key";

export function generateToken(payload: {
  id: string;
  phone: string;
  isAdmin: boolean;
}) {
  return jwt.sign(payload, JWT_SECRET, {
    expiresIn: "7d",
  });
}

export function verifyToken(token: string) {
  return jwt.verify(token, JWT_SECRET);
}
