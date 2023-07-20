import './App.css';
import Join from './components/user/Join';
import Login from './components/user/Login';
import SolarSystemModel from './components/solarsystem/js/SolarSystemModel';
import HeaderSolar from './components/solarsystem/js/HeaderSolar';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainScreen />} />
        <Route path="/SolarSystem" element={<SolarSystemModel />} />
        <Route path="/News" element={<CSMain />} />
      </Routes>
    </>
  );
}

export default App;
