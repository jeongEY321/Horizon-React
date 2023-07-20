import React from "react";
import CSHeader from "../../constellation/js/CSHeader";
import "../scss/MainScreen.scss";
import { Link } from "react-router-dom";
import reasonGoToTheMoon_03 from "../assets/reasonGoToTheMoon_03.png";

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
                src={reasonGoToTheMoon_03}
                alt="News Image"
              ></img>
            </div>
          </Link>
          <Link to="/SolarSystem">
            <div className="soalrMenu">
              <button className="Solar-main-btn">SolarSystem</button>
              <img></img>
            </div>
          </Link>
        </div>
        <div className="SmallBtn">
          <div className="hsMenu">
            <button className="hs-main-btn">Horoscope</button>
            <img></img>
          </div>
          <div className="storeMenu">
            <button className="store-main-btn">Store</button>
            <img></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainScreen;
