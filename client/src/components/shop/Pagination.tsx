import { ChevronLeft, ChevronRight } from "lucide-react";

type Props = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: Props) {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="mt-10 flex items-center justify-center gap-2">
      <button
        type="button"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className="rounded-xl border border-border p-2.5 transition hover:border-primary disabled:pointer-events-none disabled:opacity-40"
        aria-label="صفحه قبل"
      >
        <ChevronRight size={18} />
      </button>

      {pages.map((page) => (
        <button
          key={page}
          type="button"
          onClick={() => onPageChange(page)}
          className={`h-10 w-10 rounded-xl text-sm font-medium transition ${
            page === currentPage
              ? "bg-primary text-white"
              : "border border-border text-text-primary hover:border-primary"
          }`}
        >
          {page}
        </button>
      ))}

      <button
        type="button"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className="rounded-xl border border-border p-2.5 transition hover:border-primary disabled:pointer-events-none disabled:opacity-40"
        aria-label="صفحه بعد"
      >
        <ChevronLeft size={18} />
      </button>
    </div>
  );
}
