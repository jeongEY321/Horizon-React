import { Box, Button, Modal, Typography } from "@mui/material";
import React from "react";

const BasketModal = ({ open, setOpen, handleOpen, selectedItem }) => {
  const { name, content } = selectedItem;

  // 닫기 버튼 클릭 실행 함수
  const handleClose = () => {
    setOpen(!open);
  };

  return (
    <Modal
      open={open}
      onClose={handleOpen}
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
          color: "black",
        }}
      >
        {/* 모달 상세사항은 수정해야함 */}
        {/* <Typography variant="h6" id="modal-title" gutterBottom>
          {selectedProduct ? selectedProduct.name : ""}
        </Typography> */}

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

        <Box className="modal-md-img" sx={{ textAlign: "center", mt: 3 }}>
          <img src={"assets/img/" + name + ".jpg"} alt="이미지입니다"></img>
        </Box>

        <Typography variant="body1" id="modal-description" sx={{ mt: 3 }}>
          {content}
        </Typography>
      </Box>
    </Modal>
  );
};

export default BasketModal;
