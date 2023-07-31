import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import DaumPostcode from "react-daum-postcode";
import { API_BASE_URL as BASE, USER } from "../../../config/host-config";
import { Color } from "three";
import { getLoginUserInfo } from "../../../util/login-utils";
import { useNavigate } from "react-router-dom";

const Mypage = () => {
  const API_USER_URL = BASE + USER;
  const [user, setUser] = useState([]);
  const [token, setToken] = useState(getLoginUserInfo().token);

  const redirection = useNavigate();

  // 요청 헤더 설정
  const requestHeader = {
    Authorization: "Bearer " + token,
  };

  const requestHeader2 = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + token,
  };

  useEffect(() => {
    fetch(API_USER_URL + "/user", {
      method: "GET",
      headers: requestHeader,
    })
      .then((response) => response.json()) // JSON 형식으로 변환
      .then((data) => {
        // fetch를 통해 받아온 데이터를 상태 변수에 할당
        if (data) setUser(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const [correct, setCorrect] = useState({
    userName: false,
    password: false,
    passwordCheck: false,
    email: false,
  });

  // 주소검색 클릭 이벤트 핸들러
  const searchAddrClickHandler = () => {
    let flag = true;
    new window.daum.Postcode({
      oncomplete: function (data) {
        const { zonecode, roadAddress } = data;
        let extraRoadAddr = "";
        console.log("zonecode: ", zonecode);

        if (zonecode) {
          // flag = true;
          setUser({
            ...user,
            postCode: zonecode,
            address1: roadAddress,
          });
          setCorrect({
            ...correct,
            postCode: !correct.postCode,
            address1: !correct.userAddress1,
          });
        }
      },
    }).open();
  };

  //상세주소 입력 변수
  const addrDetailHandler = (e) => {
    const inputValue = e.target.value;
    let flag = false;
    if (inputValue) {
      flag = true;
    }
    setUser({
      ...user,
      address2: inputValue,
    });
    setCorrect({ ...correct, address2: !correct.address2 });
  };

  const handlePostcodeComplete = (data) => {
    // 다음 주소 검색 완료 시 호출되는 콜백 함수
    const { zonecode, roadAddress } = data;

    setUser({
      ...user,
      address1: roadAddress,
    });

    setCorrect({
      ...correct,
      address1: true,
    });

    const element = document.getElementById("postcode");
    if (element) {
      element.style.display = "none";
    }
  };

  // 정보수정버튼 클릭 이벤트
  const modifyClickHandler = (e) => {
    e.preventDefault();

    const userData = {
      postCode: user.postCode,
      address1: user.address1,
      address2: user.address2,
    };

    fetch(API_USER_URL, {
      method: "PUT",
      headers: requestHeader2,
      body: JSON.stringify(userData),
    }).then((res) => {
      console.log(userData);
      if (res.status === 200) {
        alert("회원정보가 수정되었습니다!");
        redirection("/mypage");
      } else {
        alert("서버와의 통신이 원활하지 않습니다.");
      }
    });
  };

  return (
    <>
      <Container
        component="main"
        maxWidth="xs"
        style={{ margin: "200px auto" }}
      >
        <form noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography component="h1" variant="h5">
                마이페이지
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                disabled
                fullWidth
                id="email"
                label="이메일 주소(계정)"
                name="email"
                value={user.email}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                name="name"
                variant="outlined"
                disabled
                fullWidth
                id="name"
                label="유저 이름"
                value={user.userName}
              />
            </Grid>

            <Grid item xs={12} sm={8}>
              <TextField
                type="text"
                id="sample4_postcode"
                name="postCode"
                placeholder="우편번호"
                value={user.postCode}
                fullWidth
                disabled
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Button
                className="searchAddrBtn"
                variant="contained"
                fullWidth
                onClick={searchAddrClickHandler}
              >
                주소검색
              </Button>
            </Grid>
            <Grid item xs={12}>
              <TextField
                type="text"
                id="sample4_roadAddress"
                name="roadAddress"
                placeholder="도로명주소"
                value={user.address1}
                fullWidth
                disabled
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                name="address2"
                variant="outlined"
                fullWidth
                id="detail-address"
                label="상세주소"
                value={user.address2}
                onClick={addrDetailHandler}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                style={{ background: "#3159d1" }}
                onClick={modifyClickHandler}
              >
                정보수정
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
      <div id="postcode" style={{ display: "none" }}>
        <DaumPostcode onComplete={handlePostcodeComplete} />
      </div>
    </>
  );
};

export default Mypage;
