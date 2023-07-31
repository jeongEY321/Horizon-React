import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../scss/PageHeader.scss";
import Icon from "@mdi/react";
import { mdiAccount, mdiLock, mdiLockOpen } from "@mdi/js";

const PageHeader = () => {
  return (
    <div className="MainHeader">
      <header className="menu">
        <div className="menuBtn">
          <Link to="/Main" className="mainBtn">
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
            <Icon
              className="profile-icon"
              path={mdiAccount}
              title="User Profile"
              size={2}
              horizontal
              vertical
              rotate={180}
            />
            <Icon
              className="locked"
              path={mdiLock}
              title="lock"
              size={2}
              horizontal
              vertical
              rotate={180}
            />
            <Icon
              className="lock-open"
              path={mdiLockOpen}
              title="lockOpen"
              size={2}
              horizontal
              vertical
              rotate={180}
            />
          </div>
        </div>
      </header>
    </div>
  );
};

export default PageHeader;
