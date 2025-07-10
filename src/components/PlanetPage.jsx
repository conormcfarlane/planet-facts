import React from "react";
import { useParams } from "react-router-dom";
import planets from "../data/data.json";
import iconSource from "../assets/images/icon-source.svg";
import { useIsMenuOpen } from "../context/isMenuOpenContext";
import { useActiveTab } from "../context/ActiveTabContext";
import GeologyStats from "./GeologyStats";
import Tabs from "../components/Tabs";

export default function PlanetPage() {
  const { planetName } = useParams();
  const planet = planets.find(
    (planet) => planet.name.toLowerCase() === planetName.toLowerCase()
  );
  const images = {
    ...import.meta.glob("../assets/images/*.svg", {
      eager: true,
      query: "?url",
      import: "default",
    }),
    ...import.meta.glob("../assets/images/*png", {
      eager: true,
      query: "?url",
      import: "default",
    }),
  };
  const planetFilename = planet.images.planet.split("/").pop();
  const internalFilename = planet.images.internal.split("/").pop();
  const surfaceFilename = planet.images.geology.split("/").pop();
  const imageUrl = images[`../assets/images/${planetFilename}`];
  const imageURLInternal = images[`../assets/images/${internalFilename}`];
  const imageURLSurface = images[`../assets/images/${surfaceFilename}`];

  const { isMenuOpen } = useIsMenuOpen();
  const { ActiveTab } = useActiveTab();

  if (!planet) return <div>Planet not found.</div>;

  return (
    <div
      className={`flex flex-col items-center gap-7 ${
        isMenuOpen && "hidden"
      }`}
    >
      <div className="flex flex-col items-center md:grid md:grid-cols-4 md:grid-rows-4 gap-6 pb-20">
        <div className="md:row-start-3 md:col-end-5 md:col-span-2 md:w-9/10 md:place-self-end w-full">
          <Tabs />
        </div>

        <div className="relative w-[175px] h-[175px] md:w-[380px] md:h-[380px]  flex items-center justify-center md:row-start-1 md:row-span-2 md:col-start-2 col-span-2">
          <img
            src={
              ActiveTab === "Overview"
                ? imageUrl
                : ActiveTab === "Structure"
                ? imageURLInternal
                : imageURLSurface
            }
            alt={planet.name}
            className="w-full h-full object-contain absolute inset-0 "
          />
        </div>
        <div className="row-start-3 col-span-2 text-center md:text-left px-6 md:pr-0">
          <h2 className="text-5xl mb-4">{planet.name}</h2>
          <p className="">
            {ActiveTab === "Overview"
              ? planet.overview.content
              : ActiveTab === "Structure"
              ? planet.structure.content
              : planet.geology.content}
          </p>
          <div className="flex gap-2 items-center mt-3 justify-center md:justify-start">
            <p>Source: </p>
            <a
              href={planet.overview.source}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer border-b"
            >
              Wikipedia
            </a>
            <img src={iconSource} alt="" className="" />
          </div>
        </div>
        <div className="w-full px-6 md:row-start-4 md:col-span-4">
        <GeologyStats planet={planet} />
      </div>
      </div>
      
    </div>
  );
}
