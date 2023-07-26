import {
  Box,
  Button,
  Container,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";

const BasketItem = ({ open, item, increase, decrease }) => {
  const { id, name, count } = item;
  const price = 10000;
  return (
    <>
      <TableBody style={{ color: "white" }}>
        <TableRow>
          <TableCell
            align="center"
            style={{ cursor: "pointer" }}
            onClick={open}
          >
            {name}
          </TableCell>
          <TableCell align="center">{price * count}원</TableCell>
          <TableCell align="center">
            {/* 수량 감소 버튼 */}
            <Button onClick={decrease}>-</Button>
            {count}

            {/* 수량 증가 버튼 */}
            <Button onClick={increase}>+</Button>
          </TableCell>
          <TableCell align="center">
            <Button>X</Button>
          </TableCell>
        </TableRow>
      </TableBody>
    </>
  );
};

export default BasketItem;
