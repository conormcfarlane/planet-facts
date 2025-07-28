import React from "react";
import { useTab } from "../Context/TabContext";

const mobileTabs = [
  { key: "overview", label: "OVERVIEW" },
  { key: "structure", label: "STRUCTURE" },
  { key: "geology", label: "SURFACE" },
];
const desktopTabs = [
  { key: "overview", number: "01", label: "OVERVIEW" },
  { key: "structure", number: "02", label: "INTERNAL STRUCTURE" },
  { key: "geology", number: "03", label: "SURFACE GEOLOGY" },
];

export default function Tabs({ planet }) {
  const { activeTab, setActiveTab } = useTab("");

  return (
    <>
      {/* Mobile Tabs */}
      <div className="flex md:hidden justify-between pt-4 border-t border-b -mx-6 px-6">
        {mobileTabs.map((tab) => (
          <p
            key={tab.key}
            // PASSed PLANET IN AS PROP TO RECIEVE BORDER-B COLOR TO MATCH PLANET DISPLAYED
            style={{ borderColor: planet.color }}
            className={`text-sm pb-3 cursor-pointer ${
              activeTab === tab.key ? "border-b-4" : "border-none"
            }`}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.label}
          </p>
        ))}
      </div>
      {/* Tablet/Desktop Tabs */}
      <div className="hidden md:flex md:flex-col md:gap-4">
        {desktopTabs.map((tab) => (
          <div
            key={tab.key}
            className={`flex gap-4 px-5 py-3  border border-[#838391] text-[#838391] font-[Spartan] font-bold cursor-pointer ${activeTab === tab.key ? "text-black" : "text-gray-300"}`}
            style={{backgroundColor: activeTab === tab.key ? planet.color : null}}
            onClick={() => setActiveTab(tab.key)}
          >
            <p>{tab.number}</p>
            <p className="">{tab.label}</p>
          </div>
        ))}
      </div>
    </>
  );
}
