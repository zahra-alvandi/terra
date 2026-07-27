import { Request, Response } from "express";
import * as productService from "../services/product.service";

export async function createProduct(req: Request, res: Response) {
  try {
    const product = await productService.createProduct(req.body);

    return res.status(201).json({
      success: true,
      data: product,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "خطای ایجاد محصول",
    });
  }
}

export async function getProducts(req: Request, res: Response) {
  try {
    const products = await productService.getProducts();

    return res.json({
      success: true,
      data: products,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "خطا در دریافت محصولات",
    });
  }
}
