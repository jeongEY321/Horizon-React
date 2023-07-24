import "./App.css";
import SolarSystemModel from "./components/solarsystem/js/SolarSystemModel";
import CSMain from "./components/constellation/js/CSMain";
import MainScreen from "./components/main/js/MainScreen";
import StoreMain from "./components/store/js/StoreMain";
import HsMain from "./components/horoscope/js/HsMain";
import { Route } from "react-router";
import { Routes } from "react-router";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainScreen />} />
        <Route path="/SolarSystem" element={<SolarSystemModel />} />
        <Route path="/News" element={<CSMain />} />
        <Route path="/Store" element={<StoreMain />} />
        <Route path="/horoscope" element={<HsMain />} />
      </Routes>
    </>
  );
}

export default App;
