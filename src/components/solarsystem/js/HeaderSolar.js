import React, { useState } from "react";
import "../../solarsystem/scss/headerSolar.scss";

const HeaderSolar = () => {
  return (
    <div className="MainHeader">
      <header className="menu">
        <div className="menuBtn">
          <button className="solarBtn">Solar System</button>
          <button className="conBtn" Link to="/">
            Constellation
          </button>
          <button className="horoscope">Horoscope</button>
          <button className="storeBtn">Store</button>
        </div>
        <div className="logBtn">
          <input className="logInBtn"></input>
          <input className="logOutBtn"></input>
          <input className="JoinBtn"></input>
        </div>
      </header>
    </div>
  );
};

export default HeaderSolar;
