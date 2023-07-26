import React, { useState } from "react";
import { Box, Grid } from "@mui/material";

const StoreItem = ({ open, item }) => {
  const { id, name, content } = item;

  const handleClick = () => {
    open(item); // 클릭한 아이템 정보를 매개변수로 넘겨줍니다.
  };

  return (
    <>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Box className="md" sx={{ position: "relative" }}>
          <Box
            className="md-img"
            sx={{ position: "absolute", top: 30, left: 50, paddingTop: 3 }}
            onClick={handleClick}
          >
            <img src={require("../img/planet_set.jpg")} alt="이미지입니다" />
          </Box>
          <Box
            className="md-name"
            sx={{
              position: "absolute",
              bottom: 60,
              display: "flex",
              justifyContent: "center",
              width: "100%",
              fontSize: 50,
            }}
          >
            {name}
          </Box>
        </Box>
      </Grid>
    </>
  );
};

export default StoreItem;
