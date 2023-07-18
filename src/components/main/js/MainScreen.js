import React from "react";
import "../scss/MainScreen.scss";

const MainScreen = () => {
  return (
    <div className="MainMenu">
      <div className="BigBtn">
        <div className="NewsMenu"></div>
        <div className="soalrMenu"></div>
      </div>
      <div className="SmallBtn">
        <div className="hsMenu"></div>
        <div className="storeMenu"></div>
      </div>
    </div>
  );
};

export default MainScreen;
