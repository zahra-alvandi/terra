import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import { contactService } from "@/services/contactService";

export default function AdminMessageDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const message = id ? contactService.getMessageById(id) : undefined;

  useEffect(() => {
    if (id) {
      contactService.markAsRead(id);
    }
  }, [id]);

  if (!message) {
    return <p>پیام پیدا نشد.</p>;
  }

  return (
    <div className="space-y-6">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 rounded-2xl border border-border px-4 py-2 hover:bg-stone-100"
      >
        <ArrowRight size={18} />
        بازگشت
      </button>

      <div className="rounded-3xl border border-border bg-white p-8">
        <h1 className="mb-8 text-3xl font-bold">پیام {message.name}</h1>

        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <p className="text-sm text-text-secondary">نام</p>
            <p className="mt-2">{message.name}</p>
          </div>

          <div>
            <p className="text-sm text-text-secondary">موبایل</p>
            <p className="mt-2">{message.phone}</p>
          </div>

          <div>
            <p className="text-sm text-text-secondary">ایمیل</p>
            <p className="mt-2">{message.email || "-"}</p>
          </div>

          <div>
            <p className="text-sm text-text-secondary">تاریخ</p>
            <p className="mt-2">{message.createdAt}</p>
          </div>
        </div>

        <div className="mt-10">
          <p className="mb-3 text-sm text-text-secondary">متن پیام</p>

          <div className="rounded-2xl bg-stone-50 p-6 leading-8">
            {message.message}
          </div>
        </div>
      </div>
    </div>
  );
}
