import React, { useContext, useEffect, useState } from "react";
import HeaderSolar from "../../solarsystem/js/HeaderSolar";
import {
  Box,
  Container,
  Grid,
  Table,
  TableCell,
  Typography,
} from "@mui/material";
import HistoryItem from "./HistoryItem";
import { AuthContext } from "../../../util/AuthContext";
import { getLoginUserInfo } from "../../../util/login-utils";
import { API_BASE_URL as BASE, SHOP, USER } from "../../../config/host-config";
import { useNavigate } from "react-router-dom";
import "../scss/history.scss";

const History = () => {
  // 로그인 인증 토큰 얻어오기
  const { isLoggedIn } = useContext(AuthContext);
  const [token, setToken] = useState(getLoginUserInfo().token);
  const [list, setList] = useState([]);
  const redirection = useNavigate();

  // 요청 헤더 설정
  const requestHeader = {
    "content-type": "application/json",
    Authorization: "Bearer " + token,
  };

  // 서버에 할일 목록(json)을 요청(fetch)해서 받아와야 함.
  const API_SHOP_URL = BASE + SHOP;

  useEffect(() => {
    //로그아웃 상태면 로그인페이지로
    if (!isLoggedIn) {
      redirection("/");
    }
    // 페이지가 렌더링 됨과 동시에 할 일 목록을 요청해서 뿌려주기.
    fetch(API_SHOP_URL + "/historyList", {
      method: "GET",
      headers: requestHeader,
    })
      .then((response) => response.json()) // JSON 형식으로 변환
      .then((data) => {
        // fetch를 통해 받아온 데이터를 상태 변수에 할당
        if (data) setList(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      <div className="history-wrapper">
        <HeaderSolar />
        <Typography variant="h4" align="center" marginTop={5}>
          결제내역
        </Typography>

        <Container
          component="main"
          className="history-main-wrapper"
          sx={{ display: "flex" }}
          style={{ marginTop: "30px" }}
        >
          <Grid container>
            <Box
              className="list-box"
              sx={{
                width: "100%",
                margin: "auto",
                display: "flex",
                flexDirection: "column",
                overflow: "auto",
              }}
            >
              <Table
                sx={{ tableLayout: "fixed" }}
                style={{
                  border: "1px solid white",
                  background: "rgba(0,0,0,0.5)",
                }}
              >
                <TableCell align="center" style={{ width: "200px" }}>
                  상품명
                </TableCell>
                <TableCell align="center" style={{ width: "80px" }}>
                  개수
                </TableCell>
                <TableCell align="center" style={{ width: "150px" }}>
                  가격
                </TableCell>
                <TableCell align="center" style={{ width: "300px" }}>
                  주소
                </TableCell>
                <TableCell align="center">구입날짜</TableCell>
                <TableCell align="center">도착예정일</TableCell>
                <TableCell align="center"></TableCell>
                {list.map((product) => (
                  <HistoryItem key={product.id} item={product} />
                ))}
              </Table>
            </Box>
          </Grid>
        </Container>
      </div>
    </>
  );
};

export default History;
