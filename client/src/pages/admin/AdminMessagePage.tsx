import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { contactService, type ContactMessage } from "@/services/contactService";

export default function AdminMessagesPage() {
  const navigate = useNavigate();

  const [messages, setMessages] = useState<ContactMessage[]>(
    contactService.getMessages(),
  );

  useEffect(() => {
    const syncMessages = () => {
      setMessages(contactService.getMessages());
    };

    window.addEventListener("messages-updated", syncMessages);

    return () => {
      window.removeEventListener("messages-updated", syncMessages);
    };
  }, []);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">پیام‌های تماس</h1>

        <p className="mt-2 text-text-secondary">
          پیام‌های ارسال شده توسط کاربران
        </p>
      </div>

      <div className="overflow-hidden rounded-3xl border border-border bg-white">
        <table className="w-full">
          <thead className="bg-stone-50">
            <tr>
              <th className="p-5 text-right">نام</th>
              <th className="p-5 text-right">موبایل</th>
              <th className="p-5 text-right">تاریخ</th>
              <th className="p-5 text-right">وضعیت</th>
            </tr>
          </thead>

          <tbody>
            {messages.map((message) => (
              <tr
                key={message.id}
                onClick={() => navigate(`/admin/messages/${message.id}`)}
                className="cursor-pointer border-t transition hover:bg-stone-50"
              >
                <td className="p-5 font-medium">{message.name}</td>

                <td className="p-5">{message.phone}</td>

                <td className="p-5">{message.createdAt}</td>

                <td className="p-5">
                  {message.isRead ? (
                    <span className="rounded-full bg-stone-100 px-3 py-1 text-sm">
                      خوانده شده
                    </span>
                  ) : (
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">
                      جدید
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {messages.length === 0 && (
          <div className="p-16 text-center text-text-secondary">
            هنوز پیامی ثبت نشده است.
          </div>
        )}
      </div>
    </div>
  );
}
