import { Request, Response } from "express";
import * as productInterestService from "../services/productInterest.service";

export async function createInterest(req: Request, res: Response) {
  try {
    if (!req.user?.id) {
      return res.status(401).json({
        success: false,
        message: "ابتدا وارد حساب کاربری خود شوید",
      });
    }

    const { productId } = req.body;

    if (!productId) {
      return res.status(400).json({
        success: false,
        message: "شناسه محصول الزامی است",
      });
    }

    const interest = await productInterestService.createInterest(
      req.user.id,
      productId,
    );

    return res.status(201).json({
      success: true,
      data: interest,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "خطا در ثبت درخواست موجودی",
    });
  }
}

export async function deleteInterest(req: Request, res: Response) {
  try {
    if (!req.user?.id) {
      return res.status(401).json({
        success: false,
        message: "ابتدا وارد حساب کاربری خود شوید",
      });
    }

    const productId = String(req.params.productId);

    await productInterestService.deleteInterest(req.user.id, productId);

    return res.json({
      success: true,
      message: "محصول از محصولات مورد علاقه حذف شد",
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "خطا در حذف محصول",
    });
  }
}

export async function getMyInterests(req: Request, res: Response) {
  try {
    if (!req.user?.id) {
      return res.status(401).json({
        success: false,
        message: "ابتدا وارد حساب کاربری خود شوید",
      });
    }

    const interests = await productInterestService.getMyInterests(req.user.id);

    return res.json({
      success: true,
      data: interests,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "خطا در دریافت درخواست‌های موجودی",
    });
  }
}
