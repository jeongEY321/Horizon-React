import React, { useEffect, useState } from "react";

//새로운 전역 Context를 생성
export const AuthContext = React.createContext({
  isLoggedIn: false,
  userName: "",
  onLogout: () => {}, //더미 함수를 넣으면 자동완성 시 편함
  onLogin: (email, password) => {},
  setUserInfo: () => {},
});

// 위에서 생성한 Context를 제공할 수 있는 provider
export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");

  //컴포넌트가 랜더링 될 때 localStorage에서 로그인 정보를 가지고 와서 상태를 설정.
  useEffect(() => {
    if (localStorage.getItem("isLoggedIn") === "1") {
      setIsLoggedIn(true);
      setUserName(localStorage.getItem("LOGIN_USERNAME"));
    }
  }, []);

  //로그아웃 핸들러
  const logoutHandler = () => {
    localStorage.clear();
    setIsLoggedIn(false);
  };

  //로그인 핸들러
  const loginHandler = (token, userName) => {
    localStorage.setItem("isLoggedIn", "1");
    localStorage.setItem("ACCESS_TOKEN", token);
    localStorage.setItem("LOGIN_USERNAME", userName);
    setIsLoggedIn(true);
    setUserName(userName);
  };

  // 토큰 및 로그인 유저 데이터를 브라우저에 저장하는 함수
  const setLoginUserInfo = ({ token, userName }) => {
    localStorage.setItem("ACCESS_TOKEN", token);
    localStorage.setItem("LOGIN_USERNAME", userName);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        userName,
        onLogout: logoutHandler,
        onLogin: loginHandler,
        setUserInfo: setLoginUserInfo,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
