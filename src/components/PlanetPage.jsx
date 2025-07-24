import React from "react";
import planets from "../data/data.json";
import { useParams } from "react-router-dom";
import iconSource from "../assets/images/icon-source.svg";
import GeologyStats from "./GeologyStats";
import Tabs from "./Tabs";

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
    <section className="">
      <div className="md:hidden">
        <Tabs />
      </div>
      <div className="flex flex-col">
        <div className="flex justify-center items-center h-[230px]">
          <img
            src={imageUrl}
            alt={planet.name}
            className="w-[100px] h-[100px]"
          />
        </div>
        <div className="md:flex">
          <div className="flex flex-col gap-7 items-center px-6 md:items-start md:px-6">
            <h1 className="text-6xl">{planet.name}</h1>
            <p className="text-sm">{planet.overview.content}</p>
            <div className="flex gap-2">
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
              <img src={iconSource} alt="" className="h-3 self-center" />
            </div>
          </div>
          <div className="hidden md:block">
            <Tabs />
          </div>
        </div>
        <div className="mt-6">
          <GeologyStats planet={planet} />
        </div>
      </div>
    </section>
  );
}
