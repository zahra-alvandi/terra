import { Request, Response } from "express";
import * as userService from "../services/user.service";

export async function getUsers(req: Request, res: Response) {
  try {
    const users = await userService.getUsers();

    return res.json({
      success: true,
      data: users,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "خطا در دریافت کاربران",
    });
  }
}
