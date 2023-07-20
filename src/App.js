import "./App.css";
import SolarSystemModel from "./components/solarsystem/js/SolarSystemModel";
import HeaderSolar from "./components/solarsystem/js/HeaderSolar";
import { AuthContextProvider } from "./util/AuthContext";

function App() {
  return (
    <AuthContextProvider>
      <SolarSystemModel />
      <HeaderSolar />
    </AuthContextProvider>
  );
}

export default App;
