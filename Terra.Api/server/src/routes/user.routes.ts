import { Router } from "express";
import * as userController from "../controllers/user.controllers";
import { authenticate } from "../middleware/auth.middleware";
import { requireAdmin } from "../middleware/admin.middleware";

const router = Router();

router.get("/", authenticate, requireAdmin, userController.getUsers);

export default router;
