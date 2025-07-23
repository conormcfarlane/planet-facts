import React from "react";
import planets from "../data/data.json";
import { useParams } from "react-router-dom";

// Import all SVG's
const images = import.meta.glob("../assets/images/*.svg", {
  eager: true,
  query: "?url",
  import: "default",
});

export default function PlanetPage() {
  const { planetName } = useParams();
  const planet = planets.find(
    (p) => p.name.toLowerCase() === planetName.toLowerCase()
  );

  if (!planet) return <div>Planet not found.</div>;

  // filename for JSON
  const filename = planet.images.planet.split("/").pop();
  // Get the image URL for imported images
  const imageUrl = images[`../assets/images/${filename}`];

  return (
    <section className="flex flex-col gap-20">
      <div className="bg-amber-800 flex justify-center items-center h-[230px]">
        <img src={imageUrl} alt={planet.name} className="w-[100px] h-[100px]" />
      </div>
      <div>
        <div className="text-center flex flex-col gap-7">
          <h1>{planet.name}</h1>
          <p>{planet.overview.content}</p>
          <p>
            Source :{" "}
            <span className="underline cursor-pointer">
              <a
                href={planet.overview.source}
                target="_blank"
                rel="noopener norefferer"
              >
                Wikipedia
              </a>
            </span>
          </p>
        </div>
        <div className="hidden">{/* tabs */}</div>
      </div>
    </section>
  );
}
