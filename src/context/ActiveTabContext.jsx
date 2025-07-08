import { createContext, useContext, useState } from "react";
// 1.Create Context
const ActiveTabContext = createContext();
// 2. Create Provider
export function ActiveTabProvider({ children }) {
  const [ActiveTab, setActiveTab] = useState("Overview");

  return (
    <ActiveTabContext.Provider value={{ ActiveTab, setActiveTab}}>
      {children}
    </ActiveTabContext.Provider>
  );
}
// Create hook
export function useActiveTab() {

   return useContext(ActiveTabContext);
}
