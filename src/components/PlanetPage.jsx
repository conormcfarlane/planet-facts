import React from "react";
import { useParams } from "react-router-dom";
import planets from "../data/data.json";

export default function PlanetPage() {
  const { planetName } = useParams();
  const planet = planets.find(
    (planet) => planet.name.toLowerCase() === planetName.toLowerCase()
  );

  if (!planet) return <div>Planet not found.</div>;

  return (
    <div>
      <h2>{planet.name}</h2>
      <p>{planet.overview.content}</p>
      {/* Add more planet details here */}
    </div>
  );
}
