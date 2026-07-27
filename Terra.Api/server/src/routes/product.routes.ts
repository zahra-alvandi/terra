import { Router } from "express";
import * as productController from "../controllers/product.controllers";
import { authenticate } from "../middleware/auth.middleware";
import { requireAdmin } from "../middleware/admin.middleware";

const router = Router();

// نمایش همه محصولات
router.get("/", productController.getProducts);

// ساخت محصول (فقط کاربر لاگین‌شده)
router.post("/", authenticate, requireAdmin, productController.createProduct);

export default router;
