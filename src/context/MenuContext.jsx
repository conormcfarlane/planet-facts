import { Children, createContext, useContext, useState } from "react";

const MenuContext = createContext();

export const MenuContextProvider = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuClick = () => {
    setIsMenuOpen((prevMode) => !prevMode);
  };
  return (
    <MenuContext.Provider
      value={{ isMenuOpen, setIsMenuOpen, handleMenuClick }}
    >
      {children}
    </MenuContext.Provider>
  );
};

export const useMenu = () => useContext(MenuContext);
