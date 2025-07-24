import React from "react";
import planets from "../data/data.json";
import iconChevron from "../assets/images/icon-chevron.svg";
import { Link } from "react-router-dom";
import { useMenu } from "../context/MenuContext";

export default function MobileMenu() {
  const {setIsMenuOpen} = useMenu();
  return (
    <div className="px-6 md:hidden">
      {planets.map((planet) => (
        <Link key={planet.name} to={`/${planet.name.toLowerCase()}`}
        onClick={() => setIsMenuOpen(false)}>
          <div className="flex justify-between py-4 gap-6 items-center border-b border-gray-500">
            <div
              className="w-4 h-4 rounded-full"
              style={{ backgroundColor: planet.color }}
            ></div>
            <p className="flex-1">{planet.name.toUpperCase()}</p>
            <img src={iconChevron} alt="arrow to planet" />
          </div>
        </Link>
      ))}
    </div>
  );
}
