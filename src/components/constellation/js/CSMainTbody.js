import React from "react";
import "../scss/CSMain.scss";

const CSMainTbody = (board) => {
  const { Title, Date } = board.board;

  return (
    <>
      <tr id="News-tbody">
        <td className="td-title">{Title}</td>
        <td className="td-date">{Date}</td>
      </tr>
    </>
  );
};

export default CSMainTbody;
