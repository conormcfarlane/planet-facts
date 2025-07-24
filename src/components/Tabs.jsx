import React from "react";
import { useActiveTab } from "../context/ActiveTabContext";

export default function Tabs() {
  const tabs = ["Overview", "Structure", "Surface"];
  const { selectedTab, setSelectedTab } = useActiveTab();
  return (
    <div>
      <div className="flex justify-between px-6 mt-3">
        {tabs.map((tab) => (
          <div key={tab} className={`border-b-2 pb-3 cursor-pointer ${tab === selectedTab ? "border-red-500" : ""}`}
           onClick={() => setSelectedTab(tab)}>
            {tab}
          </div>
        ))}
      </div>
      <hr className="border-t-1 border-gray-500" />
    </div>
  );
}
