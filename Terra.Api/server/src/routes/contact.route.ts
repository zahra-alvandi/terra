import { Router } from "express";
import * as contactController from "../controllers/contact.controller";
import { authenticate } from "../middleware/auth.middleware";
import { requireAdmin } from "../middleware/admin.middleware";

const router = Router();

router.post("/", contactController.createMessage);

router.get("/", authenticate, requireAdmin, contactController.getMessages);

router.patch(
  "/:id/read",
  authenticate,
  requireAdmin,
  contactController.markAsRead,
);

router.delete(
  "/:id",
  authenticate,
  requireAdmin,
  contactController.deleteMessage,
);

export default router;