import './App.css';
import Join from './components/user/js/Join';
import SolarSystemModel from './components/solarsystem/js/SolarSystemModel';
import HeaderSolar from './components/solarsystem/js/HeaderSolar';
import AuthContext, { AuthContextProvider } from './components/util/AuthContext';
import { Route, Routes } from 'react-router-dom';
import Login from './components/user/js/Login';
import StoreMain from './components/store/js/StoreMain';

function App() {

  return (
    <>
    <AuthContextProvider>
      {/* <SolarSystemModel /> */}
      {/* <HeaderSolar/> */}
      {/* <Join /> */}
      {/* <Login /> */}
      {/* <Routes>
        <Route path='/login' element={ <Login /> } />
      </Routes> */}
      <StoreMain />
    </AuthContextProvider>
    </>
  );
}

export default App;
