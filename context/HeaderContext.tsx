import React, { createContext, useContext, useState } from "react";

export type GlobalContent = {
  isSearchActive: boolean;
  setIsSearchActive: (value: boolean) => void;
};

const HeaderContext = createContext<GlobalContent>({
  isSearchActive: false,
  setIsSearchActive: () => {},
});

export const HeaderProvider = ({ children }: { children: React.ReactNode }) => {
  const [isSearchActive, setIsSearchActive] = useState(false);

  return (
    <HeaderContext.Provider value={{ isSearchActive, setIsSearchActive }}>
      {children}
    </HeaderContext.Provider>
  );
};

export const useHeader = () => useContext(HeaderContext);
