import { ChevronDown } from "lucide-react";

export default function ScrollIndicator() {
  return (
    <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 lg:flex flex-col items-center text-text-secondary">
      <span className="mb-2 text-xs uppercase tracking-[0.3em]">Scroll</span>

      <ChevronDown size={18} className="animate-bounce" />
    </div>
  );
}
