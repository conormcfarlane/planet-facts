import React from "react";
import { useTab } from "../Context/TabContext";

const mobileTabs = [
  { key: "overview", label: "OVERVIEW" },
  { key: "structure", label: "STRUCTURE" },
  { key: "geology", label: "SURFACE" },
];
const desktopTabs = [
  { key: "overview", label: "01 OVERVIEW" },
  { key: "structure", label: "02 INTERNAL STRUCTURE" },
  { key: "geology", label: "03 SURFACE GEOLOGY" },
];

export default function Tabs({ planet }) {
  const { activeTab, setActiveTab } = useTab("");

  return (
    <>
      {/* Mobile Tabs */}
      <div className="flex justify-between pt-4 border-t border-b -mx-6 px-6">
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
    </>
  );
}
