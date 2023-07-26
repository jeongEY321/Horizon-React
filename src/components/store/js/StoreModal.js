import { Box, Button, Modal, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const StoreModal = ({ open, setOpen, item }) => {
  const redirection = useNavigate();

  const { id, name, content } = item;

  // 바로구매 버튼 클릭 실행 함수
  const purchaseHandle = () => {
    // 페이지 이동
    redirection("/basket");
  };

  //장바구니 버튼 클릭 실행 함수
  const addToCartHandle = () => {
    // 장바구니 리스트만 추가 로직
    setOpen(false);
  };

  return (
    <Modal
      open={open}
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
        <Typography
          variant="h6"
          id="modal-title"
          gutterBottom
          sx={{ color: "black" }}
        >
          {name}
        </Typography>

        <Box className="modal-md-img" sx={{ textAlign: "center", mt: 3 }}>
          <img src="#" alt=""></img>
        </Box>

        <Typography
          variant="body1"
          id="modal-description"
          sx={{ mt: 3, color: "black" }}
        >
          {content}
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
            variant="outlined"
            sx={{ mr: 2, width: 150, height: 60, fontSize: 20 }}
            onClick={purchaseHandle}
          >
            바로구매
          </Button>
          <Button
            variant="contained"
            sx={{ width: 150, height: 60, fontSize: 20 }}
            onClick={addToCartHandle}
          >
            장바구니
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default StoreModal;
