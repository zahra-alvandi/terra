import { X } from "lucide-react";

type Props = {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

export default function ProductDrawer({ open, onClose, children }: Props) {
  return (
    <>
      <div
        onClick={onClose}
        className={`fixed inset-0 z-40 bg-black/30 transition ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      <aside
        className={`fixed left-0 top-0 z-50 h-screen w-full max-w-xl bg-white shadow-2xl transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-border p-6">
          <h2 className="text-xl font-semibold">محصول</h2>

          <button
            onClick={onClose}
            className="rounded-lg p-2 hover:bg-stone-100"
          >
            <X size={20} />
          </button>
        </div>

        <div className="h-[calc(100%-80px)] overflow-y-auto p-6">
          {children}
        </div>
      </aside>
    </>
  );
}
