import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../../solarsystem/scss/headerSolar.scss';


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