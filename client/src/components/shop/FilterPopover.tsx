import { useState } from "react";
import { ChevronDown, Check } from "lucide-react";

type Option = {
  value: string;
  label: string;
};

type Props = {
  label: string;
  value: string;
  options: readonly Option[];
  onChange: (value: string) => void;
};

export default function FilterPopover({
  label,
  value,
  options,
  onChange,
}: Props) {
  const [open, setOpen] = useState(false);

  const selected =
    options.find((option) => option.value === value) ?? options[0];

  return (
    <div className="relative">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="
          flex
          items-center
          gap-3
          rounded-full
          border
          border-border
          bg-background
          px-5
          py-3
          transition
          hover:border-primary
        "
      >
        <span className="text-sm text-text-secondary">{label}</span>

        <span className="font-medium">{selected.label}</span>

        <ChevronDown
          size={16}
          className={`transition duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div
          className="
            absolute
            left-0
            top-full
            z-50
            mt-3
            w-56
            overflow-hidden
            rounded-2xl
            border
            border-border
            bg-background
            shadow-xl
        "
        >
          {options.map((option) => (
            <button
              key={option.value}
              onClick={() => {
                onChange(option.value);
                setOpen(false);
              }}
              className="
                flex
                w-full
                items-center
                justify-between
                px-5
                py-3
                transition
                hover:bg-primary/5
              "
            >
              <span>{option.label}</span>

              {option.value === value && (
                <Check size={16} className="text-primary" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
