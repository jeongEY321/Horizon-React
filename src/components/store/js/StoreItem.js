import React, { useState } from "react";
import { Box, Grid } from "@mui/material";
import { Padding } from "@mui/icons-material";

const StoreItem = ({ open, item }) => {
  const { id, name, content, price } = item;
  console.log("../img/" + { name } + ".jpg");
  console.log(name);
  console.log({ name });
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
              src={require("../img/" + name + ".jpg")}
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
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box>
                <Box
                  onClick={handleClick}
                  sx={{ marginBottom: "10px" }}
                  style={{ cursor: "pointer", listStyle: "none" }}
                >
                  {name}
                </Box>
              </Box>
              <Box>
                <Box style={{ listStyle: "none" }}>{price}원</Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Grid>
    </>
  );
};

export default StoreItem;
