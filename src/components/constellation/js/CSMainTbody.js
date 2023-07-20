import React from "react";

const CSMainTbody = (board) => {
  const { Photo, Title, Date } = board.board;

  return (
    <>
      <tr className="News-tbody">
        <td>{Photo}</td>
        <td>{Title}</td>
        <td>{Date}</td>
      </tr>
    </>
  );
};

export default CSMainTbody;
