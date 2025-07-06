import React from "react";
import planets from "../data/data.json";
import iconHamburger from "../assets/images/icon-hamburger.svg";
import { useIsMenuOpen } from "../context/isMenuOpenContext";
import iconChevron from "../assets/images/icon-chevron.svg";

export default function Header() {
  const { isMenuOpen, setIsMenuOpen } = useIsMenuOpen();
  return (
    <div className="flex justify-between px-6 py-4 items-center text-white md:flex-col md:gap-10 lg:flex-row relative">
      <h1 className="text-4xl">The Planets</h1>
      <div className="">
        <button
          onClick={() => {
            setIsMenuOpen(!isMenuOpen);
          }}
        >
          <img src={iconHamburger} alt="" className="md:hidden" />
        </button>
        {/* Maybe differnt layout, try this mapping outside of header, even a new compoenet maybe  */}
        {isMenuOpen && (
          <div className="">
            {planets.map((planet) => (
              <div key={planet.name} className="bg-black">
                <img src="" alt="" />
                <p>{planet.name}</p>
                <img src={iconChevron} alt="" />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
