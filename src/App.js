import './App.css';
import Join from './components/user/Join';
import Login from './components/user/Login';
import SolarSystemModel from './components/solarsystem/js/SolarSystemModel';
import HeaderSolar from './components/solarsystem/js/HeaderSolar';
import AuthContext, { AuthContextProvider } from './components/util/AuthContext';
import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <>
    <AuthContextProvider>
      {/* <SolarSystemModel /> */}
      {/* <HeaderSolar/> */}
      <Join />
      {/* <Routes>
        <Route path='/login' element={ <Login /> } />
      </Routes> */}
    </AuthContextProvider>
    </>
  );
}

export default App;
