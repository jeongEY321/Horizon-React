import React, { useState } from "react";
import SecondFooter from "../../layout/js/SecondFooter";
import HeaderSolar from "../../solarsystem/js/HeaderSolar";
import {
  Box,
  Button,
  Container,
  Grid,
  Modal,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

const Basket = () => {
  const [open, setOpen] = useState(false); // 모달 상태를 관리하기 위한 상태변수
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleOpenModal = (product) => {
    setSelectedProduct(product);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // 장바구니 리스트 상태 관리 변수
  const [productList, setPorductList] = useState([
    // 더미데이터, 나중에 DB에서 불러와야함
    { id: 1, name: "상품1", quantity: 1, price: 20000 },
    { id: 2, name: "상품2", quantity: 3, price: 30000 },
    { id: 3, name: "상품3", quantity: 2, price: 20000 },
    { id: 4, name: "상품4", quantity: 1, price: 10000 },
    { id: 5, name: "상품5", quantity: 1, price: 10000 },
    { id: 5, name: "상품5", quantity: 1, price: 10000 },
    { id: 5, name: "상품5", quantity: 1, price: 10000 },
    { id: 5, name: "상품5", quantity: 1, price: 10000 },
    { id: 5, name: "상품5", quantity: 1, price: 10000 },
    { id: 5, name: "상품5", quantity: 1, price: 10000 },
    { id: 5, name: "상품5", quantity: 1, price: 10000 },
    { id: 5, name: "상품5", quantity: 1, price: 10000 },
    { id: 5, name: "상품5", quantity: 1, price: 10000 },
  ]);

  // 수량 증가 함수
  const increaseQuntity = (productId) => {
    setPorductList((prevList) =>
      prevList.map((product) =>
        product.id === productId
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
    );
  };

  // 수량 감수 함수
  const decreaseQuantity = (productId) => {
    setPorductList((prevList) =>
      prevList.map((product) =>
        product.id === productId
          ? { ...product, quantity: Math.max(product.quantity - 1, 0) }
          : product
      )
    );
  };

  // 가격 계산 함수
  const calculatePrice = (quantity, price) => {
    return quantity * price;
  };

  // 총 가격 계산 함수
  const totalPrice = () => {
    return productList.reduce(
      (total, product) =>
        total + calculatePrice(product.quantity, product.price),
      0
    );
  };

  return (
    <>
      <HeaderSolar />
      <Typography variant="h4" align="center" marginTop={5}>
        장바구니
      </Typography>
      <Container
        component="main"
        className="basket-main-wrapper"
        maxWidth="xl"
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
              <TableBody>
                {productList.map((product) => (
                  <TableRow key={product.id}>
                    <TableCell
                      align="center"
                      style={{ cursor: "pointer" }}
                      onClick={() => handleOpenModal(product)}
                    >
                      {product.name}
                    </TableCell>
                    <TableCell align="center">
                      {calculatePrice(product.quantity, product.price)}원
                    </TableCell>
                    <TableCell align="center">
                      {/* 수량 감소 버튼 */}
                      <Button onClick={() => decreaseQuantity(product.id)}>
                        -
                      </Button>
                      {product.quantity}

                      {/* 수량 증가 버튼 */}
                      <Button onClick={() => increaseQuntity(product.id)}>
                        +
                      </Button>
                    </TableCell>
                    <TableCell align="center">
                      <Button>X</Button>
                    </TableCell>
                  </TableRow>
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
                  <strong>총 가격: {totalPrice()}원</strong>
                </div>
              </Box>
              <Box
                class="payment-btn-box"
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

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        sx={{ border: "none" }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 800,
            height: 750,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            overflow: "auto",
          }}
        >
          {/* 모달 상세사항은 수정해야함 */}
          <Typography variant="h6" id="modal-title" gutterBottom>
            {selectedProduct ? selectedProduct.name : ""}
          </Typography>

          <Box className="modal-md-img" sx={{ textAlign: "center", mt: 3 }}>
            <img src="#" alt=""></img>
          </Box>

          <Typography variant="body1" id="modal-description" sx={{ mt: 3 }}>
            {selectedProduct ? selectedProduct.description : ""}
            What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the
            leap into electronic typesetting, remaining essentially unchanged.
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </Typography>
        </Box>
      </Modal>
      <SecondFooter />
    </>
  );
};

export default Basket;
