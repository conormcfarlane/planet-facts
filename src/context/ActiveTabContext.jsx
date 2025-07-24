import { createContext, useContext, useState } from "react";
// Create Conetxt
const ActiveTabContext = createContext();
// Provider Component
export const ActiveTabProvider = ({ children }) => {
  const [selectedTab, setSelectedTab] = useState("Overview");
  return (
    <ActiveTabContext.Provider value={{ selectedTab, setSelectedTab }}>
      {children}
    </ActiveTabContext.Provider>
  );
};
// Custom hook
export const useActiveTab = () => useContext(ActiveTabContext);
