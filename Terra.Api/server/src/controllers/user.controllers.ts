import { Request, Response } from "express";
import * as userService from "../services/user.service";

export async function getUsers(req: Request, res: Response) {
  try {
    const users = await userService.getUsers();

    const formattedUsers = users.map((user) => ({
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      phone: user.phone,
      createdAt: user.createdAt,

      ordersCount: user.orders.length,
      totalSpent: user.orders.reduce((sum, order) => sum + order.totalPrice, 0),

      orderNumbers: user.orders.map((order) => order.orderNumber), // new
    }));

    return res.json({
      success: true,
      data: formattedUsers,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "خطا در دریافت کاربران",
    });
  }
}
