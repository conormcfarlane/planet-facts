import React from "react";

const GeologyStatsMap = [
  { key: "rotation", label: "ROTATION TIME" },
  { key: "revolution", label: "REVOLUTION TIME" },
  { key: "radius", label: "RADIUS" },
  { key: "temperature", label: "AVERAGE TEMP." },
];

export default function GeologyStats({ planet }) {
  return (
    <div>
      {GeologyStatsMap.map((stat) => (
        <div
          key={stat.key}
          className="flex justify-between items-center border px-6 py-2.5 mt-7 border-[#838391]"
        >
          <p className="text-[0.5rem] text-[#838391] font-bold">{stat.label}</p>
          <p className="text-2xl font-[Antonio]">
            {planet[stat.key].toUpperCase()}
          </p>
        </div>
      ))}
    </div>
  );
}
