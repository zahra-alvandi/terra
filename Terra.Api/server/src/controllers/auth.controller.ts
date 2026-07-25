import { Request, Response } from "express";
import * as authService from "../services/auth.service";

export async function register(req: Request, res: Response) {
  try {
    const user = await authService.register(req.body);

    res.status(201).json({
      success: true,
      message: "ثبت‌نام با موفقیت انجام شد.",
      data: {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        phone: user.phone,
      },
    });
  } catch (error) {
    if (error instanceof Error && error.message === "PHONE_ALREADY_EXISTS") {
      return res.status(409).json({
        success: false,
        message: "این شماره موبایل قبلاً ثبت شده است.",
      });
    }

    console.error(error);

    return res.status(500).json({
      success: false,
      message: "خطای داخلی سرور",
    });
  }
}

export async function login(req: Request, res: Response) {
  try {
    const user = await authService.login(req.body);

    res.status(200).json({
      success: true,
      message: "ورود با موفقیت انجام شد.",
      data: {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        phone: user.phone,
        isAdmin: user.isAdmin,
      },
    });
  } catch (error) {
    if (error instanceof Error && error.message === "INVALID_CREDENTIALS") {
      return res.status(401).json({
        success: false,
        message: "شماره موبایل یا رمز عبور اشتباه است.",
      });
    }

    console.error(error);

    return res.status(500).json({
      success: false,
      message: "خطای داخلی سرور",
    });
  }
}
