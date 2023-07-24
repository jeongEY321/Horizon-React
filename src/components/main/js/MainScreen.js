import React from "react";
import CSHeader from "../../constellation/js/CSHeader";
import "../scss/MainScreen.scss";
import { Link } from "react-router-dom";
import kindpng_5401205 from "../assets/kindpng_5401205.png";
import blackHole from "../assets/blackHole.png";
import Cosmos from "../assets/Cosmos.png";

const MainScreen = () => {
  return (
    <>
      <CSHeader />
      <div className="MainMenu">
        <div className="BigBtn">
          <Link to="/News">
            <div className="NewsMenu">
              <button className="News-main-btn">News</button>
              <img
                className="News-image"
                src={kindpng_5401205}
                alt="News Image"
              ></img>
            </div>
          </Link>
          <Link to="/SolarSystem">
            <div className="solarMenu">
              <button className="Solar-main-btn">SolarSystem</button>
              <img
                className="Cosmos"
                src={Cosmos}
                alt="solarSystem Menu image"
              />
            </div>
          </Link>
        </div>
        <div className="SmallBtn">
          <Link to="/horoscope">
            <div className="hsMenu">
              <button className="hs-main-btn">Horoscope</button>
              <img></img>
            </div>
          </Link>

          <Link to="/Store">
            <div className="storeMenu">
              <button className="store-main-btn">Store</button>
              <img
                className="storeImage"
                src={blackHole}
                alt="Store Menu image"
              />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default MainScreen;
