import { Box, Button, TableCell, TableRow } from "@mui/material";
import React from "react";
import "../scss/basket.scss";

const BasketItem = ({ open, item, increase, decrease, deleteProduct }) => {
  const { id, name, count, price } = item;

  const deleteOnClick = () => {
    deleteProduct(id);
  };

  const increaseCount = () => {
    increase(count, id);
  };

  const decreaseCount = () => {
    if (count > 1) {
      decrease(count, id);
    }
  };

  const modalOpen = () => {
    open(item);
  };

  return (
    <>
      <TableRow>
        <TableCell
          align="center"
          style={{ cursor: "pointer" }}
          onClick={modalOpen}
        >
          {name}
        </TableCell>
        <TableCell align="center">{price * count}원</TableCell>
        <TableCell align="center" sx={{ padding: 0 }}>
          {/* 수량 감소 버튼 */}
          <Box sx={{ padding: 0 }}>
            <Button sx={{ padding: 0 }} onClick={() => decreaseCount()}>
              -
            </Button>
            {count}

            {/* 수량 증가 버튼 */}
            <Button sx={{ padding: 0 }} onClick={() => increaseCount()}>
              +
            </Button>
          </Box>
        </TableCell>

        <TableCell align="center">
          {/* 삭제 버튼 */}
          <Button onClick={() => deleteOnClick()}>X</Button>
        </TableCell>
      </TableRow>
    </>
  );
};

export default BasketItem;
