import { Button, TableCell, TableRow } from "@mui/material";
import React from "react";

const HistoryItem = ({ item }) => {
  const { id, name, content, price, address1, address2, buyDate, count } = item;
  const dateObject = new Date(buyDate);
  const formattedDate = dateObject.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return (
    <>
      <TableRow>
        <TableCell align="center">{name}</TableCell>
        <TableCell align="center">{count}</TableCell>
        <TableCell align="center">{price * count}</TableCell>
        <TableCell align="center">
          {address1}
          <br />
          {address2}
        </TableCell>
        <TableCell align="center">{formattedDate}</TableCell>
        <TableCell align="center">도착예정일</TableCell>
        <TableCell align="center">
          <Button variant="contained">구매취소</Button>
        </TableCell>
      </TableRow>
    </>
  );
};

export default HistoryItem;
