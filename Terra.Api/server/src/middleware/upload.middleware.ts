import multer from "multer";
import path from "path";
import fs from "fs";

const storage = multer.diskStorage({
  destination: (req, _, cb) => {
    const folder = req.baseUrl.includes("orders") ? "receipts" : "products";

    const uploadPath = path.join(process.cwd(), "uploads", folder);

    console.log("BASE URL:", req.baseUrl);

    console.log("FOLDER:", folder);

    fs.mkdirSync(uploadPath, { recursive: true });

    cb(null, uploadPath);
  },

  filename: (_, file, cb) => {
    const ext = path.extname(file.originalname);

    cb(null, `${Date.now()}-${Math.round(Math.random() * 1e9)}${ext}`);
  },
});

export const upload = multer({
  storage,
});
