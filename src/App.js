import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './component/layout/js/HeaderSolar.js';
import HeaderConstellation from './component/layout/js/HeaderConstellation';

function App() {
  return (
    <div className="App">
      <Header />

      <div className='WrapperContent'>
      <Routes>
          <Route path='/' element={ <HeaderConstellation /> } />
      </Routes>
      </div>
    </div>
    
  );
}

export default App;
