import React from "react";
import "../scss/startPage.scss";

const StartPage = () => {
  return (
    <>
      <img className="welcome-img" alt="welcome-img" />
      <div className="setBtn">
        <button className="start-btn">Start</button>
      </div>
    </>
  );
};

export default StartPage;
