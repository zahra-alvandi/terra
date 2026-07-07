import { createContext, useContext, useState, type ReactNode } from "react";

type SearchContextType = {
  isSearchOpen: boolean;
  openSearch: () => void;
  closeSearch: () => void;
};

const SearchContext = createContext<SearchContextType | null>(null);

type Props = {
  children: ReactNode;
};

export function SearchProvider({ children }: Props) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const openSearch = () => setIsSearchOpen(true);

  const closeSearch = () => setIsSearchOpen(false);

  return (
    <SearchContext.Provider
      value={{
        isSearchOpen,
        openSearch,
        closeSearch,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}

export function useSearch() {
  const context = useContext(SearchContext);

  if (!context) {
    throw new Error("useSearch must be used inside SearchProvider");
  }

  return context;
}
