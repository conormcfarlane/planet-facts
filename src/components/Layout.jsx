import React from "react";
import Header from "./Header";
import { useMenu } from "../Context/MenuContext";
import MobileMenu from "./MobileMenu";
import { Outlet } from "react-router-dom";
export default function layout({ children }) {
  const { isMenuOpen } = useMenu();
  return (
    <div className="text-white px-6 py-4 lg:py-0 lg:px-[10rem]">
      <Header />
      {isMenuOpen ? <MobileMenu /> : children}
      <Outlet />
    </div>
  );
}
