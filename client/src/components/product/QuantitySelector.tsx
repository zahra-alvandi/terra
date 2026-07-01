import { Minus, Plus } from "lucide-react";

type Props = {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
};

export default function QuantitySelector({
  quantity,
  onIncrease,
  onDecrease,
}: Props) {
  return (
    <div className="flex w-fit items-center rounded-full border border-border">
      <button
        onClick={onDecrease}
        className="flex h-12 w-12 items-center justify-center transition hover:bg-secondary"
      >
        <Minus size={18} />
      </button>

      <span className="min-w-12 text-center text-lg font-medium">
        {quantity}
      </span>

      <button
        onClick={onIncrease}
        className="flex h-12 w-12 items-center justify-center transition hover:bg-secondary"
      >
        <Plus size={18} />
      </button>
    </div>
  );
}
