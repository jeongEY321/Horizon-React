import "./App.css";
import SolarSystemModel from "./components/solarsystem/js/SolarSystemModel";
import CSMain from "./components/constellation/js/CSMain";
import MainScreen from "./components/main/js/MainScreen";
import StoreMain from "./components/store/js/StoreMain";
import { Route, Routes } from "react-router";
import Basket from "./components/store/js/Basket";
import History from "./components/store/js/History";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<MainScreen />} />
        <Route path='/SolarSystem' element={<SolarSystemModel />} />
        <Route path='/News' element={<CSMain />} />
        <Route path='/Store' element={<StoreMain />} />
        <Route path='/Basket' element={<Basket />} />
        <Route path='/history' element={<History />} />
        {/* <Route path='/horoscope' element={<HsMain />} /> */}
      </Routes>
    </>
  );
}

export default App;
