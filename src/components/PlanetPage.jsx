import React from "react";
import Tabs from "./Tabs";
import iconSource from "../Assets/Images/icon-source.svg";
import { useParams } from "react-router-dom";
import planets from "../Data/data.json";
import { useTab } from "../Context/TabContext";
import GeologyStats from "./GeologyStats";

const images = import.meta.glob(`../Assets/Images/*.{svg,png}`, {
  eager: true,
  import: "default",
});

export default function PlanetPage() {
  const { planetName } = useParams(); //Planet name from URL translate
  const { activeTab } = useTab();
  // dataKey used for dynamically rendering Json data
  const dataKey = activeTab;

  // Assigns new values as original tab keys are differnt to values in JSON file
  const imageKeyMap = {
    overview: "planet",
    structure: "internal",
    geology: "geology",
  };
  // Uses activeTab to decide what key to choose from imageKeyMap
  const imageKey = imageKeyMap[activeTab];

  // Finds the planet by name
  const planet = planets.find(
    (p) => p.name.toLowerCase() === planetName.toLowerCase()
  );
  // Error handle
  if (!planet) return <p>PLANET NOT FOUND !</p>;

  // Get filename from JSON and match imported Images... Splits by character / pop selects last part.
  const planetFileName = planet.images[imageKey].split("/").pop();

  // Url that uses planetFileNam to get correct image from images folder defined at top
  const planetImageUrl = images[`../Assets/Images/${planetFileName}`];

  return (
    <div>
      <Tabs planet={planet} />
      <section className="flex flex-col items-center">
        <img
          src={planetImageUrl}
          alt={planet.name}
          className="w-[10rem] py-20"
        />
        <div className="text-center flex flex-col gap-6 items-center">
          <h2 className="text-5xl font-[Antonio]">
            {planet.name.toUpperCase()}
          </h2>
          <p className="text-[#838391]">{planet[dataKey].content}</p>
          <div className="flex gap-2 items-center text-sm text-[#838391]">
            <p>Source :</p>
            <a
              href={planet[dataKey].source}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer underline "
            >
              Wikipedia
            </a>
            <img src={iconSource} alt="" className="w-3 h-3" />
          </div>
        </div>
      </section>
      <GeologyStats planet={planet} />
    </div>
  );
}
