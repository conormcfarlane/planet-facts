import { createContext, useContext, useState } from "react";
// 1. Creates the context
const IsMenuOpenContext = createContext();
// 2. Create provider component
export function IsMenuOpenProvider({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <IsMenuOpenContext.Provider value={{ isMenuOpen, setIsMenuOpen }}>
      {children}
    </IsMenuOpenContext.Provider>
  );
}

// 3. Custom hook for easy usage
export function useIsMenuOpen() {
  return useContext(IsMenuOpenContext);
}
