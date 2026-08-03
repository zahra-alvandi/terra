import { Request, Response } from "express";
import * as contactService from "../services/contact.service";

export async function createMessage(req: Request, res: Response) {
  try {
    const message = await contactService.createMessage(req.body);

    return res.status(201).json({
      success: true,
      data: message,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "خطا در ثبت پیام",
    });
  }
}

export async function getMessages(req: Request, res: Response) {
  try {
    const messages = await contactService.getMessages();

    return res.json({
      success: true,
      data: messages,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "خطا در دریافت پیام‌ها",
    });
  }
}

export async function markAsRead(req: Request, res: Response) {
  try {
    const id = String(req.params.id);

    const message = await contactService.markAsRead(id);

    return res.json({
      success: true,
      data: message,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "خطا در بروزرسانی پیام",
    });
  }
}

export async function deleteMessage(req: Request, res: Response) {
  try {
    const id = String(req.params.id);

    await contactService.deleteMessage(id);

    return res.json({
      success: true,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "خطا در حذف پیام",
    });
  }
}