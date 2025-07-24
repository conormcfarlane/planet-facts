import React from "react";
import planets from "../data/data.json";

export default function GeologyStats({ planet }) {
  const stats = [
    {
      label: "Rotation Time",
      key: "rotation",
    },
    { label: "Revolution Time", key: "revolution" },
    { label: "Radius", key: "radius" },
    { label: "Average Temp.", key: "temperature" },
  ];
  return (
    <div>
      {stats.map((stat) => (
        <div
          key={stat.key}
          className="flex mx-6 justify-between border px-6 py-2"
        >
          <p>{stat.label}</p>
          <p>{planet[stat.key]}</p>
        </div>
      ))}
    </div>
  );
}
