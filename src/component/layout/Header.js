import * as React from 'react';
import '../layout/header.scss';

export default function Header() {
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