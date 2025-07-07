import React from "react";
import planets from "../data/data.json";
import iconHamburger from "../assets/images/icon-hamburger.svg";
import { useIsMenuOpen } from "../context/isMenuOpenContext";

import MobileMenu from "./MobileMenu";

export default function Header() {
  const { isMenuOpen, setIsMenuOpen } = useIsMenuOpen();
  return (
    <>
      <div className="flex justify-between items-center md:flex-col md:gap-8 lg:flex-row">
        <h1 className="text-4xl">The Planets</h1>
        <div className="">
          <button
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
              console.log(isMenuOpen);
            }}
          >
            <img
              src={iconHamburger}
              alt=""
              className={`md:hidden cursor-pointer ${
                isMenuOpen ? "opacity-30" : "opacity-100"
              }`}
            />
          </button>
        </div>
        <div className="w-full justify-around hidden md:flex lg:w-3/5">
          {planets.map((planet) => (
            <div key={planet.name}>
              <p className="text-2xl cursor-pointer">{planet.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div>{isMenuOpen && <MobileMenu />}</div>
    </>
  );
}
