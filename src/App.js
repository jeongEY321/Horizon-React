import "./App.css";
import SolarSystemModel from "./components/solarsystem/js/SolarSystemModel";
import HeaderSolar from "./components/solarsystem/js/HeaderSolar";
import CSMain from "./components/constellation/js/CSMain";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import MainScreen from "./components/main/js/MainScreen";

function App() {
  return (
    <>
      <Routes>
        <Route path="/SolarSystem" element={<SolarSystemModel />} />
        <Route path="/Constellaion" element={<CSMain />} />
        <Route path="/Main" element={<MainScreen />} />
      </Routes>
    </>
  );
}

export default App;
