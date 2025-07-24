import React from "react";
import Layout from "./components/layout";
import { MenuProvider } from "./context/MenuContext";
import { ActiveTabProvider } from "./context/ActiveTabContext";
import { Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import PlanetPage from "./components/PlanetPage";
function App() {
  return (
    <div className="bg-gray-700 text-white">
      <MenuProvider>
        <ActiveTabProvider>
          <Layout>
            <Routes>
              <Route path="/" element={<Navigate to="/mercury" replace />} />
              <Route path="/:planetName" element={<PlanetPage />} />
            </Routes>
          </Layout>
        </ActiveTabProvider>
      </MenuProvider>
    </div>
  );
}

export default App;
