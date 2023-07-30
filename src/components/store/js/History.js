import React from "react";
import HeaderSolar from "../../solarsystem/js/HeaderSolar";
import {
  Box,
  Container,
  Grid,
  Table,
  TableCell,
  Typography,
} from "@mui/material";
import HistoryItem from "./HistoryItem";

const History = () => {
  return (
    <>
      <HeaderSolar />
      <Typography variant='h4' align='center' marginTop={5}>
        결제내역
      </Typography>

      <Container
        component='main'
        className='history-main-wrapper'
        sx={{ display: "flex" }}
        style={{ marginTop: "30px" }}
      >
        <Grid container>
          <Box
            className='list-box'
            sx={{
              width: "100%",
              margin: "auto",
              display: "flex",
              flexDirection: "column",
              overflow: "auto",
            }}
          >
            <Table
              sx={{ tableLayout: "fixed" }}
              style={{ border: "1px solid white" }}
            >
              <TableCell align='center' style={{ width: "200px" }}>
                상품명
              </TableCell>
              <TableCell align='center' style={{ width: "10" }}>
                개수
              </TableCell>
              <TableCell align='center' style={{ width: "10" }}>
                가격
              </TableCell>
              <TableCell align='center' style={{ width: "10" }}>
                주소
              </TableCell>
              <TableCell align='center' style={{ width: "10" }}>
                구입날짜
              </TableCell>
              <TableCell align='center' style={{ width: "10" }}>
                도착예정일
              </TableCell>
              <TableCell align='center' style={{ width: "10" }}></TableCell>
              <HistoryItem />
            </Table>
          </Box>
        </Grid>
      </Container>
    </>
  );
};

export default History;
