import Layout from "./components/Layout";
import { IsMenuOpenProvider } from "./context/isMenuOpenContext";
function App() {
  return (
    <>
      <IsMenuOpenProvider>
        <Layout />
      </IsMenuOpenProvider>

      {/* When defining routes wrap content in Routes tag and use Route path tag for each....home page will be path "/"  */}
    </>
  );
}

export default App;
