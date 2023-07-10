import './App.css';
import Join from './components/user/Join';
import Login from './components/user/Login';
import SolarSystemModel from './solarsystem/js/SolarSystemModel';
import HeaderSolar from './solarsystem/js/HeaderSolar';

function App() {

  return (
    <>
      <SolarSystemModel />
      <HeaderSolar/>

    </>
  );
}

export default App;
