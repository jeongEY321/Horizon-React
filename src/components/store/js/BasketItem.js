import { Box, Button, Input, TableCell, TableRow } from "@mui/material";
import React from "react";
import "../scss/basket.scss";
import {
  mdiDelete,
  mdiMinusThick,
  mdiPlusThick,
  mdiTriangle,
  mdiTriangleDown,
} from "@mdi/js";
import Icon from "@mdi/react";

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
          align='center'
          style={{ cursor: "pointer" }}
          onClick={modalOpen}
        >
          {name}
        </TableCell>
        <TableCell align='center'>{price * count}원</TableCell>
        <TableCell align='center' sx={{ padding: 0 }}>
          <div className='count-wrap'>
            {/* 수량 감소 버튼 */}
            <Button className='minus' onClick={() => decreaseCount()}>
              <Icon path={mdiTriangleDown} size={1} />
            </Button>
            <div>{count}</div>
            {/* 수량 증가 버튼 */}
            <Button className='plus' onClick={() => increaseCount()}>
              <Icon path={mdiTriangle} size={1} />
            </Button>
          </div>
        </TableCell>

        <TableCell align='center'>
          {/* 삭제 버튼 */}
          <Button onClick={() => deleteOnClick()}>
            <Icon className='delete' path={mdiDelete} size={1.3} />
          </Button>
        </TableCell>
      </TableRow>
    </>
  );
};

export default BasketItem;
