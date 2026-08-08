import { Request, Response } from "express";
import * as orderService from "../services/order.service";

export async function createOrder(req: Request, res: Response) {
  try {
    if (!req.user?.id) {
      return res.status(401).json({
        success: false,
        message: "برای ثبت سفارش ابتدا وارد حساب کاربری خود شوید",
      });
    }

    const receipt = req.file;

    const order = await orderService.createOrder({
      ...req.body,
      userId: req.user.id,
      totalPrice: Number(req.body.totalPrice),
      items: JSON.parse(req.body.items),
      receiptImage: receipt ? `/uploads/receipts/${receipt.filename}` : null,
    });

    return res.status(201).json({
      success: true,
      data: order,
    });
  } catch (error: any) {
    console.error(error);

    if (error.message?.includes("موجودی محصول کافی نیست")) {
      return res.status(400).json({
        success: false,
        message: error.message,
      });
    }

    if (error.message?.includes("یافت نشد")) {
      return res.status(404).json({
        success: false,
        message: error.message,
      });
    }

    return res.status(500).json({
      success: false,
      message: "خطا در ایجاد سفارش",
    });
  }
}

export async function getOrders(req: Request, res: Response) {
  try {
    const orders = await orderService.getOrders();

    return res.json({
      success: true,
      data: orders,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "خطا در دریافت سفارش‌ها",
    });
  }
}

export async function getMyOrders(req: Request, res: Response) {
  try {
    if (!req.user?.id) {
      return res.status(401).json({
        success: false,
        message: "ابتدا وارد حساب کاربری خود شوید",
      });
    }

    const orders = await orderService.getOrdersByUserId(req.user.id);

    return res.json({
      success: true,
      data: orders,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "خطا در دریافت سفارش‌های شما",
    });
  }
}

export async function updateOrderStatus(req: Request, res: Response) {
  try {
    const id = req.params.id as string;
    const { status } = req.body;

    const order = await orderService.updateOrderStatus(id, status);

    return res.json({
      success: true,
      data: order,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "خطا در بروزرسانی وضعیت سفارش",
    });
  }
}

export async function getOrderByNumber(req: Request, res: Response) {
  try {
    const orderNumber = String(req.params.orderNumber);

    const order = await orderService.getOrderByNumber(orderNumber);

    if (!order) {
      return res.status(404).json({
        success: false,
        message: "سفارشی با این کد پیدا نشد.",
      });
    }

    return res.json({
      success: true,
      data: order,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "خطا در دریافت سفارش",
    });
  }
}
