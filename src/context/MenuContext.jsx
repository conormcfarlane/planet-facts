import { createContext, useContext, useState } from "react";
// Creates Context
export const MenuContext = createContext();
// Provider Componenet
export const MenuProvider = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle function
  const toggleMenu = () => setIsMenuOpen((prevMode) => !prevMode);

  return (
    <MenuContext.Provider value={{ isMenuOpen, setIsMenuOpen, toggleMenu }}>
      {children}
    </MenuContext.Provider>
  );
};
// Custom Hook
export const useMenu = () => useContext(MenuContext);
