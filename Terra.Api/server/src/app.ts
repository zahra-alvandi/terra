import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.routes";
import profileRoutes from "./routes/profile.routes";
import productRoutes from "./routes/product.routes";

const app = express();

app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:5174"],

    credentials: true,
  }),
);

app.use(express.json());
app.use("/api/auth", authRoutes);
app.use(cors());
app.use("/api/profile", profileRoutes);
app.use("/api/products", productRoutes);

app.get("/", (_, res) => {
  res.json({
    message: "Terra API is running 🚀",
  });
});

export default app;
