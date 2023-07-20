import {
  AppBar,
  Box,
  Button,
  Container,
  Grid,
  Modal,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import "../../store/scss/storemain.scss";
import { useNavigate } from "react-router-dom";
import SecondFooter from "../../layout/js/SecondFooter";

const StoreMain = () => {
  const redirection = useNavigate();

  const [open, setOpen] = useState(false); // 모달 상태를 관리하기 위한 상태변수

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // 바로구매 버튼 클릭 실행 함수
  const purchaseHandle = () => {
    // 페이지 이동
    redirection("/basket");
  };

  //장바구니 버튼 클릭 실행 함수
  const addToCartHandle = () => {};

  return (
    <>
      <div className='store-wrapper'>
        <AppBar
          position='static'
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[200]
                : theme.palette.grey[800],
            p: 3,
          }}
        >
          <Toolbar>
            <Typography component='h2' variant='h4'>
              Horizon Store
            </Typography>
          </Toolbar>
        </AppBar>

        <Container component='main' maxWidth='xl' style={{ padding: "50px 0" }}>
          <Grid container spacing={4}>
            <Grid item xs={6} sm={3}>
              <Box
                className='md-event'
                p={18}
                textAlign='center'
                style={{ cursor: "pointer" }}
                onClick={handleOpen}
              >
                <div className='md-img'>
                  <img src='#' alt='img' />
                </div>
              </Box>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Box
                className='md'
                p={18}
                style={{ cursor: "pointer" }}
                onClick={handleOpen}
              >
                3
              </Box>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Box
                className='md'
                p={18}
                style={{ cursor: "pointer" }}
                onClick={handleOpen}
              >
                4
              </Box>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Box
                className='md'
                p={18}
                style={{ cursor: "pointer" }}
                onClick={handleOpen}
              >
                5
              </Box>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Box
                className='md'
                p={18}
                style={{ cursor: "pointer" }}
                onClick={handleOpen}
              >
                6
              </Box>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Box
                className='md'
                p={18}
                style={{ cursor: "pointer" }}
                onClick={handleOpen}
              >
                7
              </Box>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Box
                className='md'
                p={18}
                style={{ cursor: "pointer" }}
                onClick={handleOpen}
              >
                8
              </Box>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Box
                className='md'
                p={18}
                style={{ cursor: "pointer" }}
                onClick={handleOpen}
              >
                9
              </Box>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Box
                className='md'
                p={18}
                style={{ cursor: "pointer" }}
                onClick={handleOpen}
              >
                10
              </Box>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Box
                className='md'
                p={18}
                style={{ cursor: "pointer" }}
                onClick={handleOpen}
              >
                11
              </Box>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Box
                className='md'
                p={18}
                style={{ cursor: "pointer" }}
                onClick={handleOpen}
              >
                12
              </Box>
            </Grid>
          </Grid>
        </Container>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby='modal-title'
          aria-describedby='modal-description'
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
            <Typography variant='h6' id='modal-title' gutterBottom>
              모달 제목
            </Typography>

            <Box className='modal-md-img' sx={{ textAlign: "center", mt: 3 }}>
              <img src='#' alt=''></img>
            </Box>

            <Typography variant='body1' id='modal-description' sx={{ mt: 3 }}>
              What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a
              type specimen book. It has survived not only five centuries, but
              also the leap into electronic typesetting, remaining essentially
              unchanged. It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages, and more recently
              with desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum.
            </Typography>

            {/* 바로구매, 장바구니 버튼  */}
            <Box
              sx={{
                mt: 3,
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <Button
                variant='outlined'
                sx={{ mr: 2, width: 150, height: 60, fontSize: 20 }}
                onClick={purchaseHandle}
              >
                바로구매
              </Button>
              <Button
                variant='contained'
                sx={{ width: 150, height: 60, fontSize: 20 }}
                onClick={addToCartHandle}
              >
                장바구니
              </Button>
            </Box>
          </Box>
        </Modal>

        <SecondFooter />
      </div>
    </>
  );
};

export default StoreMain;
