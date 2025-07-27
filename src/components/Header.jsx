import React from "react";
import iconHamburger from "../Assets/Images/icon-hamburger.svg";
import { useMenu } from "../Context/MenuContext";
export default function Header() {
  const { handleMenuClick, isMenuOpen } = useMenu();
  return (
    <>
      <div className="flex justify-between items-center pb-4">
        <h1 className="text-[1.8rem] tracking-[-1.05px] font-[Antonio] ">
          THE PLANETS
        </h1>
        <img
          src={iconHamburger}
          alt=""
          className="w-6 h-4 cursor-pointer"
          onClick={handleMenuClick}
        />
      </div>
    </>
  );
}
