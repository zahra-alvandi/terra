import { Router } from "express";
import * as productController from "../controllers/product.controllers";
import { authenticate } from "../middleware/auth.middleware";
import { requireAdmin } from "../middleware/admin.middleware";

const router = Router();

router.get(
  "/admin",
  authenticate,
  requireAdmin,
  productController.getAdminProducts,
);

router.get("/", productController.getProducts);

router.post("/", authenticate, requireAdmin, productController.createProduct);

router.delete(
  "/:id",
  authenticate,
  requireAdmin,
  productController.deleteProduct,
);

router.patch(
  "/:id",
  authenticate,
  requireAdmin,
  productController.updateProduct,
);

export default router;
