import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
<<<<<<< HEAD:src/component/layout/js/HeaderSolar.js
import '../../../components/layout/scss/headerSolar.scss';
=======
import '../../solarsystem/scss/headerSolar.scss';
>>>>>>> cf0db48fcbb66e0640867b54a3c4e10b9f4181c8:src/solarsystem/js/HeaderSolar.js

const HeaderSolar = () => {


  return (
    <div className='MainHeader'>
      <header className='menu'>
        <div className="menuBtn">
          <button className='solarBtn'>Solar System</button>
          <button className='conBtn'>Constellation</button>
          <button className='horoscope'>Horoscope</button>
          <button className='storeBtn'>Store</button>
        </div>
      </header>
    </div>
  );
}

export default HeaderSolar; 