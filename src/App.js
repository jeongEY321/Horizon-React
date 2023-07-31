import "./App.css";
import SolarSystemModel from "./components/solarsystem/js/SolarSystemModel";
import CSMain from "./components/constellation/js/CSMain";
import MainScreen from "./components/main/js/MainScreen";
import StoreMain from "./components/store/js/StoreMain";
import Basket from "./components/store/js/Basket";
import History from "./components/store/js/History";
import { Route, Routes } from "react-router-dom";
import StartPage from "./components/layout/js/StartPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/Main" element={<MainScreen />} />
        <Route path="/SolarSystem" element={<SolarSystemModel />} />
        <Route path="/News" element={<CSMain />} />
        <Route path="/Store" element={<StoreMain />} />
        <Route path="/Basket" element={<Basket />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </>
  );
}

export default App;
