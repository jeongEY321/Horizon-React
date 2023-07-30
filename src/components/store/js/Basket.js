import React, { useEffect, useState } from "react";
import HeaderSolar from "../../solarsystem/js/HeaderSolar";
import BasketItem from "./BasketItem";
import BasketModal from "./BasketModal";

import { API_BASE_URL as BASE, SHOP, USER } from "../../../config/host-config";
import {
  Box,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { Button, Container } from "react-bootstrap";

const Basket = () => {
  // 요청 헤더 설정
  const requestHeader = {
    "content-type": "application/json",
    Authorization:
      "Bearer " +
      "eyJhbGciOiJIUzUxMiJ9.eyJlbWFpbCI6ImdhbmcxMjM0NUBuYXZlci5jb20iLCJpc3MiOiLrlLjquLDqsoXrk4AiLCJpYXQiOjE2OTA2OTIwNzgsImV4cCI6MTY5MDc3ODQ3OCwic3ViIjoiZ2FuZzEyMzQ1QG5hdmVyLmNvbSJ9.0ALRMhi5T7WWB3zWVp4hyN8LPKcXR-5yHBeaBfUTbO-gXpkIShjAALCbvFdalWLu4jNgTmsPpqyrQpDvPtkgYQ",
  };

  // 서버에 할일 목록(json)을 요청(fetch)해서 받아와야 함.
  const API_SHOP_URL = BASE + SHOP;
  const [basketList, setBasketList] = useState([]);
  const [selectedItem, setSelectedItem] = useState([]);

  useEffect(() => {
    // 페이지가 렌더링 됨과 동시에 할 일 목록을 요청해서 뿌려주기.
    fetch(API_SHOP_URL + "/products", {
      method: "GET",
      headers: requestHeader,
    })
      .then((response) => response.json()) // JSON 형식으로 변환
      .then((data) => {
        // fetch를 통해 받아온 데이터를 상태 변수에 할당
        console.log(data);
        if (Array.isArray(data.products)) {
          // data.products를 가공하여 필요한 속성만 추출하여 객체로 만듦
          const basketItems = data.products.map((product) => ({
            id: product.id,
            count: product.count,
            name: product.name.name,
            price: product.name.price,
          }));
          setBasketList(basketItems);
          console.log(basketItems);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const [open, setOpen] = useState(false); // 모달 상태를 관리하기 위한 상태변수

  const handleOpenModal = () => {
    setOpen(!open);
  };

  // 수량 증가 함수
  const increaseQuntity = (count, id) => {
    fetch(API_SHOP_URL, {
      method: "PUT",
      headers: requestHeader,
      body: JSON.stringify({
        count: count + 1,
        id: id,
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        if (Array.isArray(json.products)) {
          // data.products를 가공하여 필요한 속성만 추출하여 객체로 만듦
          const basketItems = json.products.map((product) => ({
            id: product.id,
            count: product.count,
            name: product.name.name,
            price: product.name.price,
          }));
          setBasketList(basketItems);
        }
      });
  };

  // 수량 감수 함수
  const decreaseQuantity = (count, id) => {
    fetch(API_SHOP_URL, {
      method: "PUT",
      headers: requestHeader,
      body: JSON.stringify({
        count: count - 1,
        id: id,
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        if (Array.isArray(json.products)) {
          // data.products를 가공하여 필요한 속성만 추출하여 객체로 만듦
          const basketItems = json.products.map((product) => ({
            id: product.id,
            count: product.count,
            name: product.name.name,
            price: product.name.price,
          }));
          setBasketList(basketItems);
        }
      });
  };

  // 삭제
  const deleteProduct = (id) => {
    fetch(API_SHOP_URL + "/products/" + id, {
      method: "DELETE",
      headers: requestHeader,
    })
      .then((res) => res.json())
      .then((json) => {
        // 서버가 업데이트된 장바구니 데이터를 응답으로 보낼 경우
        if (Array.isArray(json.products)) {
          // data.products를 가공하여 필요한 속성만 추출하여 객체로 만듦
          const basketItems = json.products.map((product) => ({
            id: product.id,
            count: product.count,
            name: product.name.name,
            price: product.name.price,
          }));
          setBasketList(basketItems);
        }
      })
      .catch((error) => {
        console.error("Error deleting product:", error);
      });
  };

  // 총 가격 계산 함수
  const totalPrice = () => {};

  return (
    <>
      <HeaderSolar />
      <Typography variant="h4" align="center" marginTop={5}>
        장바구니
      </Typography>
      <Container
        component="main"
        className="basket-main-wrapper"
        sx={{ padding: "50px", display: "flex" }}
      >
        <Grid container spacing={4}>
          <Box
            className="list-box"
            sx={{
              // border: "1px solid black",
              width: "70%",
              height: "65vh",
              margin: "auto",
              display: "flex",
              flexDirection: "column",
              overflow: "auto",
            }}
          >
            <Table sx={{ tableLayout: "fixed" }}>
              <TableHead>
                <TableRow sx={{ align: "center" }}>
                  <TableCell align="center" style={{ width: "40%" }}>
                    상품
                  </TableCell>
                  <TableCell align="center" style={{ width: "20%" }}>
                    가격
                  </TableCell>
                  <TableCell align="center" style={{ width: "20%" }}>
                    수량
                  </TableCell>
                  <TableCell
                    align="center"
                    style={{ width: "10%" }}
                  ></TableCell>
                </TableRow>
              </TableHead>
              <TableBody style={{ color: "white" }}>
                {basketList.map((products) => (
                  <BasketItem
                    open={handleOpenModal}
                    increase={increaseQuntity}
                    decrease={decreaseQuantity}
                    deleteProduct={deleteProduct}
                    key={products.id}
                    item={products}
                  />
                ))}
              </TableBody>
            </Table>

            <Box
              className="cal-pay-wrapper"
              sx={{
                marginTop: "auto",
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
              }}
            >
              <Box
                className="calculate-box"
                sx={{
                  padding: "10px",
                  // margin: "20px 20px",
                }}
              >
                <div>
                  <strong>총 가격: 1원</strong>
                </div>
              </Box>
              <Box
                className="payment-btn-box"
                sx={{
                  width: "100%",
                  height: "25%",
                }}
              >
                <Button
                  className="payment-btn"
                  variant="contained"
                  sx={{
                    width: 100,
                    height: 40,
                    margin: "50px",
                  }}
                >
                  결제하기
                </Button>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Container>

      {open && (
        <BasketModal
          open={open}
          setOpen={setOpen}
          handleOpen={handleOpenModal}
        />
      )}
    </>
  );
};

export default Basket;
