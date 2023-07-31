import React from "react";
import "../scss/startPage.scss";
import welcome from "../img/welcome.png";

const StartPage = () => {
  return (
    <>
      <img className="welcome-img" src={welcome} alt="welcome-img" />
      <div className="setBtn">
        <button className="start-btn">Start</button>
        <button className="join-btn">Join</button>
      </div>
    </>
  );
};

export default StartPage;
