import multer from "multer";
import path from "path";
import fs from "fs";

const uploadPath = path.join(process.cwd(), "uploads", "products");

fs.mkdirSync(uploadPath, { recursive: true });

const storage = multer.diskStorage({
  destination: (_, __, cb) => {
    cb(null, uploadPath);
  },

  filename: (_, file, cb) => {
    const ext = path.extname(file.originalname);

    const fileName = Date.now() + "-" + Math.round(Math.random() * 1e9) + ext;

    cb(null, fileName);
  },
});

export const upload = multer({
  storage,
});
