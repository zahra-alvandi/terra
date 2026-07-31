import { Request, Response } from "express";
import * as orderService from "../services/order.service";

export async function createOrder(req: Request, res: Response) {
  try {
    const receipt = req.file;

    const order = await orderService.createOrder({
      ...req.body,

      totalPrice: Number(req.body.totalPrice),

      items: JSON.parse(req.body.items),

      receiptImage: receipt ? `/uploads/receipts/${receipt.filename}` : null,
    });

    return res.status(201).json({
      success: true,
      data: order,
    });
  } catch (error) {
    console.error(error);

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
