import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import DaumPostcode from "react-daum-postcode";
import { API_BASE_URL } from "../../../config/host-config";

const Mypage = () => {
  // 상태변수로 회원정보 관리
  const [userValue, setUserValue] = useState({
    userName: "",
    password: "",
    email: "",
    addr: "",
    detailAddr: "",
  });

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
          setUserValue({
            ...userValue,
            userPostcode: zonecode,
            userAddrBasic: roadAddress,
          });
          setCorrect({
            ...correct,
            userPostcode: !correct.userPostcode,
            userAddrBasic: !correct.userAddrBasic,
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
    setUserValue({
      ...userValue,
      userAddrDetail: inputValue,
    });
    setCorrect({ ...correct, userAddrDetail: !correct.userAddrDetail });
  };

  const handlePostcodeComplete = (data) => {
    // 다음 주소 검색 완료 시 호출되는 콜백 함수
    const { zonecode, roadAddress } = data;

    setUserValue({
      ...userValue,
      address: roadAddress,
    });

    setCorrect({
      ...correct,
      address: true,
    });

    const element = document.getElementById("postcode");
    if (element) {
      element.style.display = "none";
    }
  };

  // 정보수정버튼 클릭 이벤트
  const modifyClickHandler = (e) => {
    e.preventDefault();

    fetch(API_BASE_URL, {
      method: "PUT",
      body: JSON.stringify(userValue),
    }).then((res) => {
      if (res.status === 200) {
        alert("회원정보가 수정되었습니다!");
        // redirection("/mypage");
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
                // value={}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                name="username"
                variant="outlined"
                disabled
                fullWidth
                id="username"
                label="유저 이름"
                // value={}
              />
            </Grid>

            <Grid item xs={12} sm={8}>
              <TextField
                type="text"
                id="sample4_postcode"
                name="Postcode"
                placeholder="우편번호"
                value={userValue.userPostcode}
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
                value={userValue.userAddrBasic}
                fullWidth
                disabled
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                name="detail-address"
                variant="outlined"
                fullWidth
                id="detail-address"
                label="상세주소"
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
