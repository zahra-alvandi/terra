type SearchBackdropProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function SearchBackdrop({
  isOpen,
  onClose,
}: SearchBackdropProps) {
  return (
    <div
      onClick={onClose}
      className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 ${
        isOpen
          ? "opacity-100"
          : "pointer-events-none opacity-0"
      }`}
    />
  );
}