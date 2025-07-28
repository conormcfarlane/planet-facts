import React from "react";
import iconHamburger from "../Assets/Images/icon-hamburger.svg";
import { useMenu } from "../Context/MenuContext";
import planets from "../Data/data.json";
import { Link } from "react-router-dom";
export default function Header() {
  const { handleMenuClick, isMenuOpen } = useMenu();
  return (
    <>
      <div className="flex justify-between items-center pb-4 md:justify-center md:flex-col md:gap-10 md:-mx-6 lg:flex-row lg:-mx-[10rem] lg:px-8 lg:justify-between lg:border-b lg:border-gray-700">
        <h1 className="text-[1.8rem] tracking-[-1.05px] font-[Antonio] ">
          THE PLANETS
        </h1>
        <img
          src={iconHamburger}
          alt=""
          className="w-6 h-4 cursor-pointer md:hidden"
          onClick={handleMenuClick}
        />
        {/* Tablet/Desktop Navigation */}
        <div className="hidden md:flex justify-between w-full border-b px-6 pb-6 lg:w-1/2 lg:pb-0 lg:border-none">
          {planets.map((planet) => (
            <Link key={planet} to={`/${planet.name.toLowerCase()}`}>
              <p className="text-gray-400">{planet.name.toUpperCase()}</p>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
