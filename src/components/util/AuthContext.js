import React, { useEffect, useState } from "react";

// 전역 Context를 생성
const AuthContext = React.createContext({
  isLoggedIn: false, // 로그인 했는지 여부 기본값 false
  userName: "",
  // onLogout : () = {},
  onLogin: (email, password) => {},
  setUserInfo: () => {},
});

//Context를 자식 컴포넌트들에게 제공할 수 있는 provider

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");

  // 컴포넌트가 렌더링 될 때 sessionStorage에서 로그인 정보 가지고 상태 설정
  useEffect(() => {
    if (sessionStorage.getItem("isLoggedIn") === "1") {
      setIsLoggedIn(true);
      // ''에 로컬 스토리지에서 가져온 이름의 enum 값 넣어야함
      setUserName(sessionStorage.getItem(""));
    }
  }, []);

  // 로그아웃 핸들러
  const logoutHandler = () => {
    localStorage.clear();
    setIsLoggedIn(false);
  };

  // 로그인 핸들러
  const loginHandler = (token, userName, role) => {
    sessionStorage.setItem("isLoggedIn", "1");
    sessionStorage.setItem("ACCESS_TOKEN", token);
    sessionStorage.setItem("LOGIN_USERNAME", userName);
    sessionStorage.setItem("USER_ROLE", role);
  };

  // 토큰 및 로그인 유저 데이터 브라우저 세션스토리지에 저장
  const setLoginUserInfo = ({ token, userName, role }) => {
    sessionStorage.setItem("ACCESS_TOKEN", token);
    sessionStorage.setItem("LOGIN_USERNAME", userName);
    sessionStorage.setItem("USER_ROLE", role);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
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

export default AuthContext;
