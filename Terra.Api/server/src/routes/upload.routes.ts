import { Router } from "express";
import { upload } from "../middleware/upload.middleware";
import { authenticate } from "../middleware/auth.middleware";
import { requireAdmin } from "../middleware/admin.middleware";

const router = Router();

router.post(
  "/",
  authenticate,
  requireAdmin,
  upload.single("image"),
  (req, res) => {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "No file uploaded",
      });
    }

    return res.json({
      success: true,
      data: {
        image: `/uploads/products/${req.file.filename}`,
      },
    });
  },
);

export default router;
