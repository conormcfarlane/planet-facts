import React from "react";
import Layout from "./components/layout";
import { MenuProvider } from "./context/MenuContext";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="bg-gray-700 text-white">
      <MenuProvider>
        <Layout>
          <Routes>
            <Route path="/" element />
          </Routes>
        </Layout>
      </MenuProvider>
    </div>
  );
}

export default App;
