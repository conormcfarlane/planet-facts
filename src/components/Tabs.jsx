import React from "react";
import { useActiveTab} from "../context/ActiveTabContext";

export default function () {
  const tabs = ["Overview", "Structure", "Surface"];
  const { ActiveTab, setActiveTab} = useActiveTab();
  return (
    <div className="flex w-full justify-between border-b border-gray-800 px-6 py-4">
      {tabs.map((tab) => (
        <div key={tab}>
          <p className={`cursor-pointer ${ActiveTab === tab ? "text-blue-500" : "text-white"}`} onClick={() => {console.log("clicked",tab)
          console.log("cureent active :",ActiveTab)
            setActiveTab(tab)
          }}
           >{tab}</p>
            
        </div>
      ))}
    </div>
  );
}
