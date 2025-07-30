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
      <div className="md:hidden">
        <Tabs planet={planet} />
      </div>

      <section className="flex flex-col items-center lg:flex-row">
        <div className="w-[10rem] py-20 lg:w-1/2 relative">
          {/* If tab isnt geology render all images as normal, else when geology render image at 40% height and width and use itr as overlay image */}
          {activeTab !== "geology" ? (
            <img src={planetImageUrl} alt={planet.name} className="w-full" />
          ) : (
            <img
              src={planetImageUrl}
              alt={planet.name}
              className="lg:absolute lg:bottom-0 lg:h-[40%] lg:w-[40%] lg:translate-x-[75%]"
            />
          )}

          {/* Render .planet/overview image for large screens... using geology image above to be placed on top of it. */}
          {activeTab === "geology" && (
            <img
              src={
                images[
                  `../Assets/Images/${planet.images.planet.split("/").pop()}`
                ]
              }
              alt={planet.name}
              className="hidden lg:block w-full"
            />
          )}
        </div>

        <div className="text-center flex flex-col gap-6 items-center md:flex-row lg:flex-col lg:w-1/2 lg:items-end">
          <div className="flex flex-col gap-4 md:gap-8 md:w-1/2 md:text-left lg:w-3/4 ">
            <h2 className="text-5xl font-[Antonio]">
              {planet.name.toUpperCase()}
            </h2>
            {/* dataKey will be overview,structure or geology */}
            <p className="text-[#838391]">{planet[dataKey].content}</p>
            <div className="flex gap-2 justify-center text-sm text-[#838391] md:justify-start">
              <p>Source :</p>
              {/* dataKey will be overview,structure or geology */}
              <a
                href={planet[dataKey].source}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer underline"
              >
                Wikipedia
              </a>
              <img src={iconSource} alt="" className="w-3 h-3" />
            </div>
          </div>
          <div className="hidden md:block md:flex-1 lg:w-3/4">
            <Tabs planet={planet} />
          </div>
        </div>
      </section>
      <GeologyStats planet={planet} />
    </div>
  );
}
