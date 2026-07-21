export type ContactMessage = {
  id: string;
  name: string;
  phone: string;
  email: string;
  message: string;
  createdAt: string;
  isRead: boolean;
};

const STORAGE_KEY = "terra_contact_messages";

export const contactService = {
  getMessages(): ContactMessage[] {
    const data = localStorage.getItem(STORAGE_KEY);

    return data ? JSON.parse(data) : [];
  },

  saveMessages(messages: ContactMessage[]) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
  },

  createMessage(data: Omit<ContactMessage, "id" | "createdAt" | "isRead">) {
    const messages = this.getMessages();

    const newMessage: ContactMessage = {
      id: crypto.randomUUID(),
      createdAt: new Date().toLocaleDateString("fa-IR"),
      isRead: false,
      ...data,
    };

    messages.unshift(newMessage);

    this.saveMessages(messages);

    window.dispatchEvent(new Event("messages-updated"));

    return newMessage;
  },

  getMessageById(id: string) {
    return this.getMessages().find((m) => m.id === id);
  },

  markAsRead(id: string) {
    const messages = this.getMessages();

    const message = messages.find((m) => m.id === id);

    if (!message) return;

    message.isRead = true;

    this.saveMessages(messages);

    window.dispatchEvent(new Event("messages-updated"));
  },

  deleteMessage(id: string) {
    const messages = this.getMessages().filter((m) => m.id !== id);

    this.saveMessages(messages);

    window.dispatchEvent(new Event("messages-updated"));
  },
};
