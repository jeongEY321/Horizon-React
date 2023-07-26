import React from "react";

const CSMainTbody = (board) => {
  const { Photo, Title, Date } = board.board;

  return (
    <>
      <tr className="News-tbody">
        <td className="td-photo">{Photo}</td>
        <td className="td-title">{Title}</td>
        <td className="td-date">{Date}</td>
      </tr>
    </>
  );
};

export default CSMainTbody;
