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

export async function getAdminProducts(req: Request, res: Response) {
  try {
    const products = await productService.getAllProductsAdmin();

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

export async function deleteProduct(req: Request, res: Response) {
  try {
    const id = String(req.params.id);

    await productService.deleteProduct(id);

    return res.json({
      success: true,
      message: "محصول حذف شد.",
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "خطا در حذف محصول",
    });
  }
}

export async function updateProduct(req: Request, res: Response) {
  try {
    const id = String(req.params.id);

    const product = await productService.updateProduct(id, req.body);

    return res.json({
      success: true,
      data: product,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "خطا در ویرایش محصول",
    });
  }
}
