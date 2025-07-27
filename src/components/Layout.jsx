import React from "react";
import Header from "./Header";
import { useMenu } from "../Context/MenuContext";
import MobileMenu from "./MobileMenu";
export default function layout({ children }) {
  const { isMenuOpen } = useMenu();
  return (
    <div className="text-white px-6 py-4">
      <Header />
      {isMenuOpen ? <MobileMenu /> : children}
    </div>
  );
}
