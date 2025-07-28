import React from "react";

const GeologyStatsMap = [
  { key: "rotation", label: "ROTATION TIME" },
  { key: "revolution", label: "REVOLUTION TIME" },
  { key: "radius", label: "RADIUS" },
  { key: "temperature", label: "AVERAGE TEMP." },
];

export default function GeologyStats({ planet }) {
  return (
    <div className="md:flex md:gap-4">
      {GeologyStatsMap.map((stat) => (
        <div
          key={stat.key}
          className="flex justify-between items-center border px-6 py-2.5 mt-7 border-[#838391] md:flex-col md:w-full md:items-start md:px-3 md:py-5"
        >
          <p className="text-[0.7rem] text-[#838391] font-bold">{stat.label}</p>
          <p className="text-2xl font-[Antonio]">
            {planet[stat.key].toUpperCase()}
          </p>
        </div>
      ))}
    </div>
  );
}
