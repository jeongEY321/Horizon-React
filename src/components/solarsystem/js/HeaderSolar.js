import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../util/AuthContext";
import Icon from "@mdi/react";
import { mdiAccount, mdiBasket, mdiLock, mdiLockOpen } from "@mdi/js";

const HeaderSolar = () => {
  const { isLoggedIn, onLogout, name } = React.useContext(AuthContext);
  const redirection = useNavigate();

  //로그아웃 핸들러
  const logoutHandler = () => {
    onLogout();
    alert("로그아웃 되었습니다.");
    redirection("/");
  };

  return (
    <div className='MainHeader'>
      <header className='menu'>
        <div className='menuBtn'>
          <Link to='/'>
            <img
              src={require("../../../final-logo-removebg.png")}
              alt='logo'
              style={{ width: "80px", height: "80px" }}
            />
          </Link>
          <Link to='/' className='mainBtn'>
            <button>Main</button>
          </Link>
          <Link to='/News' className='newsBtn'>
            <button>News</button>
          </Link>
          <Link to='/SolarSystem' className='hsBtn'>
            <button>Solar System</button>
          </Link>
          <Link to='/Store' className='storeBtn'>
            <button>Store</button>
          </Link>
          {!isLoggedIn && (
            <Link to='/login'>
              <Icon
                className='locked'
                path={mdiLock}
                title='LOGIN'
                size={2}
                horizontal
                vertical
                rotate={180}
              />
            </Link>
          )}

          {isLoggedIn && (
            <>
              <Link to='/mypage'>
                <Icon
                  className='profile-icon'
                  path={mdiAccount}
                  title='MYPAGE'
                  size={2}
                  horizontal
                  vertical
                  rotate={180}
                />
              </Link>
              <Link to='/basket'>
                <Icon
                  className='shop-basket'
                  path={mdiBasket}
                  title='BASKET'
                  size={2}
                  horizontal
                  vertical
                  rotate={180}
                />
              </Link>
              <div onClick={logoutHandler}>
                <Icon
                  className='lock-open'
                  path={mdiLockOpen}
                  title='LOGOUT'
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

export default HeaderSolar;
