import React from "react";

const CSMainTbody = (board) => {
  const { category, Photo, Title, Date } = board.board;

  return (
    <>
      <tr id="News-tbody">
        {/* <td>[{category}]</td> */}
        <td className="td-photo">{Photo}</td>
        <td className="td-title">{Title}</td>
        <td className="td-date">{Date}</td>
      </tr>
    </>
  );
};

export default CSMainTbody;
