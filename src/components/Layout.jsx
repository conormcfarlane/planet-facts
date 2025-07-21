import React from "react";
import Header from "../components/Header";
import MobileMenu from "./MobileMenu";
import { useMenu } from "../context/MenuContext";
export default function Layout() {
  const {isMenuOpen} = useMenu();
  return (
    <div>
      <Header />
      {isMenuOpen && <MobileMenu/>}
      
    </div>
  );
}
