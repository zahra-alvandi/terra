import { Router } from "express";

import { authenticate } from "../middleware/auth.middleware";
import * as productInterestController from "../controllers/productInterest.controller";

const router = Router();

router.post("/", authenticate, productInterestController.createInterest);

router.get("/my", authenticate, productInterestController.getMyInterests);

router.delete(
  "/:productId",
  authenticate,
  productInterestController.deleteInterest,
);

export default router;
