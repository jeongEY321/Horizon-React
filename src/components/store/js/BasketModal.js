import { Box, Modal, Typography } from "@mui/material";
import React from "react";

const BasketModal = ({ open, setOpen, handleOpen }) => {
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
        }}
      >
        {/* 모달 상세사항은 수정해야함 */}
        {/* <Typography variant="h6" id="modal-title" gutterBottom>
          {selectedProduct ? selectedProduct.name : ""}
        </Typography> */}

        <Box className="modal-md-img" sx={{ textAlign: "center", mt: 3 }}>
          <img src="#" alt=""></img>
        </Box>

        <Typography variant="body1" id="modal-description" sx={{ mt: 3 }}>
          {/* {selectedProduct ? selectedProduct.description : ""} */}
          What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing
          and typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum.
        </Typography>
      </Box>
    </Modal>
  );
};

export default BasketModal;
