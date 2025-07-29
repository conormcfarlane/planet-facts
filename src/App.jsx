import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./Components/Layout";
import PlanetPage from "./components/PlanetPage";
import backgroundStars from "./Assets/Images/background-stars.svg";
import { TabContextProvider } from "./Context/TabContext";
import { MenuContextProvider } from "./Context/MenuContext";
function App() {
  return (
    <div
      className="bg-[#070724] min-h-screen"
      style={{ backgroundImage: `url(${backgroundStars})` }}
    >
      <TabContextProvider>
        <MenuContextProvider>
          <Routes>
            <Route
              path="/"
              element={<Navigate to="/mercury" replace />}
            ></Route>
            <Route path="/" element={<Layout />}>
              <Route path=":planetName" element={<PlanetPage />} />
            </Route>
          </Routes>
        </MenuContextProvider>
      </TabContextProvider>
    </div>
  );
}

export default App;
