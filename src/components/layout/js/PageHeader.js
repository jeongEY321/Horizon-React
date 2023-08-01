import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../util/AuthContext";
import "../scss/PageHeader.scss";
import Icon from "@mdi/react";
import { mdiAccount, mdiLock, mdiLockOpen } from "@mdi/js";

const PageHeader = () => {
  const { isLoggedIn, onLogout, name } = React.useContext(AuthContext);
  const redirection = useNavigate();

  //로그아웃 핸들러
  const logoutHandler = () => {
    onLogout();
    alert("로그아웃 되었습니다.");
    redirection("/");
  };
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
          {!isLoggedIn && (
            <Link to="/login">
              <Icon
                className="locked"
                path={mdiLock}
                title="lock"
                size={2}
                horizontal
                vertical
                rotate={180}
              />
            </Link>
          )}

          {isLoggedIn && (
            <>
              <Link to="/mypage">
                <Icon
                  className="profile-icon"
                  path={mdiAccount}
                  title="User Profile"
                  size={2}
                  horizontal
                  vertical
                  rotate={180}
                />
              </Link>
              <div onClick={logoutHandler}>
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
            </>
          )}
        </div>
      </header>
    </div>
  );
};

export default PageHeader;
