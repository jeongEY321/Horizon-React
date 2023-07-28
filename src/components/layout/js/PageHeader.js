import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../scss/PageHeader.scss";

const PageHeader = () => {
  return (
    <div className="MainHeader">
      <header className="menu">
        <div className="menuBtn">
          <Link to="/" className="mainBtn">
            <button>Main</button>
          </Link>
          <Link to="/News" className="newsBtn">
            <button>News</button>
          </Link>
          <Link to="/SolarSystem" className="solarBtn">
            <button>SolarSystem</button>
          </Link>
          <Link to="/Store" className="storeBtn">
            <button>Store</button>
          </Link>
          <div className="logBtn">
            <button className="logInBtn"></button>
            <button className="logOutBtn"></button>
            <button className="JoinBtn"></button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default PageHeader;
