import { NavLink } from "react-router-dom";
import type { SearchItem } from "@/types/search";

type Props = {
  item: SearchItem;
  onClick: () => void;
};

export default function SearchSuggestion({
  item,
  onClick,
}: Props) {
  return (
    <NavLink
      to={item.href}
      onClick={onClick}
      className="rounded-full border border-border px-4 py-2 text-sm transition hover:border-primary hover:text-primary"
    >
      {item.title}
    </NavLink>
  );
}