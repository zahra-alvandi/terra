import { Router } from "express";
import * as orderController from "../controllers/order.contorollers";
import { authenticate } from "../middleware/auth.middleware";
import { requireAdmin } from "../middleware/admin.middleware";
import { upload } from "../middleware/upload.middleware";

const router = Router();

router.post(
  "/",
  authenticate,
  upload.single("receipt"),
  orderController.createOrder,
);

router.get("/", authenticate, requireAdmin, orderController.getOrders);

router.patch(
  "/:id/status",
  authenticate,
  requireAdmin,
  orderController.updateOrderStatus,
);

export default router;
