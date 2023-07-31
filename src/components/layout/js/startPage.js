import React from "react";
import "../scss/startPage.scss";
import welcome from "../img/welcome.png";
import { Link } from "react-router-dom";
import MainScreen from "../../main/js/MainScreen";
import galaxy from "../img/galaxy.gif";

const StartPage = () => {
  return (
    <>
      <img className="welcome-img" src={welcome} alt="welcome-img" />
      <div className="setBtn">
        <Link to="/Main">
          <button className="start-btn">Start</button>
          <button className="join-btn">Join</button>
        </Link>
      </div>
      <div className="main-start-img">
        <img className="start-page-body" src={galaxy} alt="universegif" />
      </div>
    </>
  );
};

export default StartPage;
