import { Check } from "lucide-react";

type Props = {
  title: string;
};

export default function TerraToast({ title }: Props) {
  return (
    <div
      className="
        flex items-center gap-3
        rounded-2xl
        border border-border
        bg-white/90
        px-5 py-4
        shadow-xl
        backdrop-blur-xl
      "
    >
      {/* icon */}
      <div
        className="
          flex h-10 w-10 items-center justify-center
          rounded-full bg-primary text-white
        "
      >
        <Check size={18} />
      </div>

      {/* text */}
      <div className="flex flex-col">
        <p className="text-sm font-semibold text-text-primary">{title}</p>

        <p className="text-xs text-text-secondary">به سبد خرید اضافه شد</p>
      </div>
    </div>
  );
}
