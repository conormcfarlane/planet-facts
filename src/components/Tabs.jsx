import React from "react";
import { useActiveTab} from "../context/ActiveTabContext";
import { useIsMenuOpen } from "../context/isMenuOpenContext";
export default function () {
  const tabs = ["Overview", "Structure", "Surface"];
  const { ActiveTab, setActiveTab} = useActiveTab();
  const {isMenuOpen} = useIsMenuOpen();
  
  return (
    <div className={`flex w-full justify-between border-b border-gray-800 px-6 py-4 ${isMenuOpen && "hidden"}`}>
      {tabs.map((tab) => (
        <div key={tab}>
          <p className={`cursor-pointer text-gray-500 ${ActiveTab === tab ? " text-white border-b" : ""}`} onClick={() => {console.log("clicked",tab)
          console.log("cureent active :",ActiveTab)
            setActiveTab(tab)
          }}
           >{tab}</p>
            
        </div>
      ))}
    </div>
  );
}
