import { Button, TableCell, TableRow } from "@mui/material";
import React from "react";

const HistoryItem = () => {
  return (
    <>
      <TableRow>
        <TableCell align='center'>상품명</TableCell>
        <TableCell align='center'>개수</TableCell>
        <TableCell align='center'>가격</TableCell>
        <TableCell align='center'>주소</TableCell>
        <TableCell align='center'>구입날짜</TableCell>
        <TableCell align='center'>도착예정일</TableCell>
        <TableCell align='center'>
          <Button variant='contained'>구매취소</Button>
        </TableCell>
      </TableRow>
    </>
  );
};

export default HistoryItem;
