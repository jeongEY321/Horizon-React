import { Box, Button, Modal, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const PayModal = ({ open, setPayOpen, yesPayHandle }) => {
  const redirection = useNavigate();

  // 닫기 버튼 클릭 실행 함수
  const handleClose = () => {
    setPayOpen(!open);
  };

  // 아니오 버튼 클릭
  const noPayAndClose = () => {
    alert("결제가 취소되었습니다.");
    handleClose();
  };

  const yesPay = () => {
    yesPayHandle();
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
        {/* 우측 상단에 닫기 버튼 추가 */}
        <Button
          sx={{
            position: "absolute",
            top: 10,
            right: 10,
          }}
          onClick={handleClose}
        >
          X
        </Button>

        <Typography
          variant="body1"
          id="modal-description"
          sx={{ mt: 3, color: "black" }}
        >
          가격란
        </Typography>

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
            onClick={yesPay}
          >
            예
          </Button>
          <Button
            variant="contained"
            sx={{ width: 150, height: 60, fontSize: 20 }}
            onClick={noPayAndClose}
          >
            아니오
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default PayModal;
