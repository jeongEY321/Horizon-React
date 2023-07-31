import React, { useState } from "react";
import { Box, Grid } from "@mui/material";
import { Padding } from "@mui/icons-material";

const StoreItem = ({ open, item }) => {
  const { id, name, content } = item;

  const handleClick = () => {
    open(item); // 클릭한 아이템 정보를 매개변수로 넘겨줍니다.
  };

  return (
    <>
      <Grid item xs={12} md={5} lg={4}>
        <Box className='md' sx={{ position: "relative" }}>
          <Box
            className='md-img'
            sx={{ position: "absolute", top: 30, left: 50, paddingTop: 3 }}
          >
            <img
              src={require("../img/planet_set.jpg")}
              alt='이미지입니다'
              onClick={handleClick}
            />
          </Box>
          <Box
            className='md-name'
            sx={{
              position: "absolute",
              bottom: 60,
              display: "flex",
              justifyContent: "center",
              width: "100%",
              fontSize: 30,
            }}
          >
            <ul>
              <li
                onClick={handleClick}
                style={{ cursor: "pointer", listStyle: "none" }}
              >
                {name}
              </li>
            </ul>
          </Box>
        </Box>
      </Grid>
    </>
  );
};

export default StoreItem;
