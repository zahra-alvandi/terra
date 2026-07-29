import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.routes";
import profileRoutes from "./routes/profile.routes";
import productRoutes from "./routes/product.routes";
import userRoutes from "./routes/user.routes";
import orderRoutes from "./routes/order.routes";
import path from "path";
import uploadRoutes from "./routes/upload.routes";

const app = express();

app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:5174"],

    credentials: true,
  }),
);

app.use(express.json());

app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));

app.use("/api/auth", authRoutes);
app.use(cors());
app.use("/api/profile", profileRoutes);
app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/upload", uploadRoutes);

app.get("/", (_, res) => {
  res.json({
    message: "Terra API is running 🚀",
  });
});

export default app;
