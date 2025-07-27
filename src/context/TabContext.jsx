import { createContext, useContext, useState } from "react";

const TabContext = createContext();

export const TabContextProvider = ({ children }) => {
  const [activeTab, setActiveTab] = useState("overview");
  return (
    <TabContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </TabContext.Provider>
  );
};

export const useTab = () => useContext(TabContext);
