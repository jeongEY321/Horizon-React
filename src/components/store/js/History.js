import React, { useContext, useEffect, useState } from "react";
import HeaderSolar from "../../layout/js/PageHeader";
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
  const [token, setToken] = useState("");
  const [list, setList] = useState([]);
  const redirection = useNavigate();

  useEffect(() => {
    const userToken = getLoginUserInfo().token;
    setToken(userToken);
  }, []);

  // 요청 헤더 설정
  const requestHeader = {
    "content-type": "application/json",
    Authorization: "Bearer " + token,
  };

  // 서버에 할일 목록(json)을 요청(fetch)해서 받아와야 함.
  const API_SHOP_URL = BASE + SHOP;

  const [isRendered, setIsRendered] = useState(false);

  const handlePageChange = () => {
    redirection("/");
  };

  useEffect(() => {
    //로그아웃 상태면 로그인페이지로
    if (token === "") {
      handlePageChange();
    } else if (!isRendered) {
      // 삭제 시 랜더링시간때문에 날짜데이터가 이상하게 들어와서 추가
      setIsRendered(true);
    }
    fetch(API_SHOP_URL + "/historyList", {
      method: "GET",
      headers: requestHeader,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (Array.isArray(data)) {
          setList(data);
        } else {
          console.error("Data is not an array:", data);
        }
      });
  }, [isRendered, isLoggedIn]);

  // 삭제
  const deleteProduct = (id) => {
    fetch(API_SHOP_URL + "/history/" + id, {
      method: "DELETE",
      headers: requestHeader,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (Array.isArray(data.products)) {
          setList(data.products);
        } else {
          console.error("Data.products is not an array:", data.products);
        }
      })
      .catch((error) => {
        console.error("Error deleting product:", error);
      });
  };

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
                  <HistoryItem
                    key={product.id}
                    item={product}
                    deleteProduct={deleteProduct}
                  />
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
