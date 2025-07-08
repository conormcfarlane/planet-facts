import React from "react";
import { useParams } from "react-router-dom";
import planets from "../data/data.json";
import iconSource from "../assets/images/icon-source.svg"

export default function PlanetPage() {
  const { planetName } = useParams();
  const planet = planets.find(
    (planet) => planet.name.toLowerCase() === planetName.toLowerCase()
  );
  const images = import.meta.glob("../assets/images/*.svg", {
    eager: true,
    as: "url",
  });
  const filename = planet.images.planet.split("/").pop();
  const imageUrl = images[`../assets/images/${filename}`];

  if (!planet) return <div>Planet not found.</div>;

  return (
    <div className="px-6 py-4 flex flex-col items-center">
      <div className="py-20">
        <img src={imageUrl} alt={planet.name} className="w-25" />
      </div>
      <h2 className="text-5xl mb-4">{planet.name}</h2>
      <p className="text-center">{planet.overview.content}</p>
      <div className="flex gap-2 items-center mt-8">
        <p>Source: </p>
        <a
          href={planet.overview.source}
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer underline"
        >
          Wikipedia
        </a>
        <img src={iconSource} alt="" className=""/>
      </div>
      {/* Add more planet details here */}
    </div>
  );
}
