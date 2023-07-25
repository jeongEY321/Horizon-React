import React from "react";
import HeaderSolar from "../../solarsystem/js/HeaderSolar";
import CSHeader from "./CSHeader";
import { Table } from "react-bootstrap";
import CSMainTbody from "./CSMainTbody";
import "../scss/CSMain.scss";

const CSMain = () => {
  //임시 데이터
  const boardList = [
    {
      Photo: "사진1",
      Title: "토성, 62개 위성 추가 발견을 통해 다시 '달의 왕' 등극",
      Date: "2023.05.15",
    },
    {
      Photo: "사진2",
      Title: "태양계에서 달을 가장 많이 거느리고 있는 행성은?",
      Date: "2023.02.20",
    },
    {
      Photo: "사진3",
      Title: "제임스 웹, 카멜레온 I 분자구름을 자세히 관측하다",
      Date: "2023.02.06",
    },
    {
      Photo: "사진4",
      Title: "제임스 웹, NGC 346 산개성단을 자세히 관측하다",
      Date: "2023.02.01",
    },
    {
      Photo: "사진5",
      Title: "망원경, 일상 속 '빛'으로 별을 본다",
      Date: "2023.01.12",
    },
  ];

  return (
    <section className="News-board">
      <HeaderSolar />
      <Table board hover border={1} className="News-table" width="100%">
        <thead className="mini-table">
          <tr>
            <th>Photo</th>
            <th>Title</th>
            <th>date</th>
          </tr>
        </thead>
        <tbody>
          {boardList.map((bo) => (
            <CSMainTbody board={bo} />
          ))}
        </tbody>
      </Table>
    </section>
  );
};

export default CSMain;
