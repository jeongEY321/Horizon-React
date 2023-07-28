import React from "react";
import { Table } from "react-bootstrap";
import "../scss/CSMain.scss";

const CSMainNews = () => {
  return (
    <Table board hover border={1} className="News-table" width="100%">
      <thead className="notic-news">
        <th>MainNews</th>
        {/* <tr className="notic-table-body1">
          <td>TopNews</td>
          <td>Date</td>
        </tr> */}
        <tr className="notic-table-body2">
          <td>임시데이터</td>
          <td>임시데이터</td>
        </tr>
      </thead>
    </Table>
  );
};

export default CSMainNews;
