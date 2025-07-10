import React from "react";
import { useActiveTab} from "../context/ActiveTabContext";
import { useIsMenuOpen } from "../context/isMenuOpenContext";
export default function () {
  const tabs = ["Overview", "Structure", "Surface"];
  const { ActiveTab, setActiveTab} = useActiveTab();
  const {isMenuOpen} = useIsMenuOpen();
  
  return (
    <div className={`flex w-full justify-between border-b border-gray-800 md:border-none md:flex-col md:gap-4 px-6 ${isMenuOpen && "hidden"}`}>
      {tabs.map((tab) => (
        <div key={tab}>
          <p className={`py-3 cursor-pointer text-gray-500 ${ActiveTab === tab ? " text-white border-b md:bg-red-400" : ""} md:border md:border-gray-700 md:px-4 md:py-4`} onClick={() => {console.log("clicked",tab)
          console.log("cureent active :",ActiveTab)
            setActiveTab(tab)
          }}
           >{tab}</p>
            
        </div>
      ))}
    </div>
  );
}
