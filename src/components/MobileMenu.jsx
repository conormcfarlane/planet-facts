import React from "react";
import planets from "../Data/data.json";
import iconChevron from "../Assets/Images/icon-chevron.svg";
import { Link } from "react-router-dom";
import { useMenu } from "../Context/MenuContext";

export default function MobileMenu() {
  const { handleMenuClick } = useMenu();
  return (
    <div className="">
      {planets.map((planet, index) => (
        <Link
          key={planet}
          className={`flex items-center gap-6 py-5 border-b border-gray-700 ${
            index === planets.length - 1 ? "border-none" : null
          }`}
          //   If Index = planetsLength(8) -1 ie.7/Neptune, remove Border
          to={`/${planet.name.toLowerCase()}`}
          onClick={handleMenuClick}
        >
          <div
            className="h-5 w-5 rounded-full"
            style={{ backgroundColor: planet.color }}
          ></div>
          <p className="flex-1 text-lg font-bold tracking-[1.36px]">
            {planet.name.toUpperCase()}
          </p>
          <img src={iconChevron} alt="" />
        </Link>
      ))}
    </div>
  );
}
