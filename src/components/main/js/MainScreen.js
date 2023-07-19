import React from "react";
import CSHeader from "../../constellation/js/CSHeader";
import "../scss/MainScreen.scss";

const MainScreen = () => {
  return (
    <>
      <CSHeader />
      <div className="MainMenu">
        <div className="BigBtn">
          <div className="NewsMenu">
            <button className="News-main-btn">News</button>
          </div>
          <div className="soalrMenu">
            <button className="Solar-main-btn">SolarSystem</button>
            <img></img>
          </div>
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
