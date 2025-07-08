import React from "react";
import planets from "../data/data.json";
import iconChevron from "../assets/images/icon-chevron.svg";
import { Link } from "react-router-dom";
import { useIsMenuOpen } from "../context/isMenuOpenContext";

export default function MobileMenu() {
  const { isMenuOpen, setIsMenuOpen } = useIsMenuOpen();
  return (
    <div className="mt-10 flex flex-col">
      {planets.map((planet, index) => (
        <Link key={planet.name} to={`/${planet.name.toLowerCase()}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <div
            className={`flex justify-between gap-6 items-center py-5 ${
              index !== planets.length - 1 ? "border-b border-gray-800" : ""
            } `}
          >
            {/* ^^ Conditional rendering buttom border so Neptunes is hidden  */}
            <div
              className="w-5 h-5 rounded-full "
              style={{ backgroundColor: planet.color }}
            ></div>
            <p className="flex-1 text-2xl cursor-pointer">{planet.name}</p>
            <img src={iconChevron} alt="" className="h-2 cursor-pointer" />
          </div>
        </Link>
      ))}
    </div>
  );
}
