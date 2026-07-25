import { Router } from "express";

const router = Router();

router.post("/register", (_, res) => {
  res.json({
    message: "Register endpoint",
  });
});

router.post("/login", (_, res) => {
  res.json({
    message: "Login endpoint",
  });
});

export default router;
