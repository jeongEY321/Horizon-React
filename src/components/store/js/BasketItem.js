import { Button, TableCell, TableRow } from "@mui/material";
import React from "react";

const BasketItem = ({ open, item, increase, decrease, deleteProduct }) => {
  const { id, name, count, price } = item;

  const deleteOnClick = () => {
    deleteProduct(id);
  };

  const increaseCount = () => {
    increase(count, id);
  };

  const decreaseCount = () => {
    decrease(count, id);
  };

  return (
    <>
      <TableRow>
        <TableCell align='center' style={{ cursor: "pointer" }} onClick={open}>
          {name}
        </TableCell>
        <TableCell align='center'>{price * count}원</TableCell>
        <TableCell align='center'>
          {/* 수량 감소 버튼 */}
          <Button onClick={() => decreaseCount()}>-</Button>
          {count}

          {/* 수량 증가 버튼 */}
          <Button onClick={() => increaseCount()}>+</Button>
        </TableCell>
        <TableCell align='center'>
          <Button onClick={() => deleteOnClick()}>X</Button>
        </TableCell>
      </TableRow>
    </>
  );
};

export default BasketItem;
