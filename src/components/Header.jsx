import React from "react";
import iconHamburger from "../assets/images/icon-hamburger.svg";
import { useMenu } from "../context/MenuContext";
import planets from "../data/data.json";
export default function Header() {
  const { isMenuOpen, toggleMenu } = useMenu();
  return (
    <section className="border-b border-gray-500">
      <div className="flex justify-between px-6 py-4 md:flex-col md:items-center md:gap-10 md: md:px-12 md:py-8 lg:flex-row lg:px-10 lg:py-6">
        <h1 className="text-3xl font-semibold tracking-tighter ">
          THE PLANETS
        </h1>
        <button className="w-6 md:hidden" onClick={toggleMenu}>
          <img src={iconHamburger} alt="Menu open button" />
        </button>
        <div className="hidden md:flex md:w-full md:justify-around lg:w-6/10">
          {planets.map((planet) => (
            <div key={planet.name}>{planet.name}</div>
          ))}
        </div>
      </div>
    </section>
  );
}
