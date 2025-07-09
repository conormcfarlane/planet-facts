import React from "react";
import { useParams } from "react-router-dom";
import planets from "../data/data.json";
import iconSource from "../assets/images/icon-source.svg";
import { useIsMenuOpen } from "../context/isMenuOpenContext";
import { useActiveTab } from "../context/ActiveTabContext";
import GeologyStats from "./GeologyStats";

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
      className={`px-6 py-4 flex flex-col items-center gap-7 ${
        isMenuOpen && "hidden"
      }`}
    >
      <div className="flex flex-col items-center">
        <div className="py-20">
          <img
            src={
              ActiveTab === "Overview"
                ? imageUrl
                : ActiveTab === "Structure"
                ? imageURLInternal
                : imageURLSurface
            }
            alt={planet.name}
            className="w-43"
          />
        </div>
        <h2 className="text-5xl mb-4">{planet.name}</h2>
        <p className="text-center">
          {ActiveTab === "Overview"
            ? planet.overview.content
            : ActiveTab === "Structure"
            ? planet.structure.content
            : planet.geology.content}
        </p>
        <div className="flex gap-2 items-center mt-8">
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

      <GeologyStats planet={planet} />
    </div>
  );
}
