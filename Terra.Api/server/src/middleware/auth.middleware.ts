import { Request, Response, NextFunction } from "express";
import { verifyToken } from "../utils/jwt";

export interface JwtPayload {
  id: string;
  phone: string;
  isAdmin: boolean;
}

declare global {
  namespace Express {
    interface Request {
      user?: JwtPayload;
    }
  }
}

export function authenticate(req : Request, res : Response, next: NextFunction) {
  console.log(req.headers);
  console.log("Authorization:", req.headers.authorization);

  const authHeader = req.headers.authorization;

  if (!authHeader?.startsWith("Bearer ")) {
    return res.status(401).json({
      success: false,
      message: "Unauthorized",
    });
  }

  const token = authHeader.split(" ")[1];

  try {
    console.log("VERIFY SECRET:", process.env.JWT_SECRET);
    const payload = verifyToken(token) as JwtPayload;

    req.user = payload;

    next();
  } catch {
    return res.status(401).json({
      success: false,
      message: "Invalid token",
    });
  }
}
