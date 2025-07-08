import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import PlanetPage from "./components/PlanetPage";
import { IsMenuOpenProvider } from "./context/isMenuOpenContext";
import { ActiveTabProvider } from "./context/ActiveTabContext";
function App() {
  return (
    <div style={{ backgroundColor: "#070724" }} className="h-screen">
      <IsMenuOpenProvider>
        <ActiveTabProvider>
          <Layout>
            <Routes>
              <Route path="/" element={<Navigate to="/mercury" />} />
              <Route path="/:planetName" element={<PlanetPage />} />
            </Routes>
          </Layout>
        </ActiveTabProvider>
      </IsMenuOpenProvider>

      {/* When defining routes wrap content in Routes tag and use Route path tag for each....home page will be path "/"  */}
    </div>
  );
}

export default App;
