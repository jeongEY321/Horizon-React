import React from "react";
import PageHeader from "../../layout/js/PageHeader";
import { Table } from "react-bootstrap";
import CSMainTbody from "./CSMainTbody";
import "../../constellation/scss/CSMain.scss";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const CSMain = () => {
  //임시 데이터
  const boardList = [
    {
      Title: "토성, 62개 위성 추가 발견을 통해 다시 '달의 왕' 등극",
      Date: "2023.05.15",
    },
    {
      Title: "태양계에서 달을 가장 많이 거느리고 있는 행성은?",
      Date: "2023.02.20",
    },
    {
      Title: "제임스 웹, 카멜레온 I 분자구름을 자세히 관측하다",
      Date: "2023.02.06",
    },
    {
      Title: "망원경, 일상 속 '빛'으로 별을 본다",
      Date: "2023.01.12",
    },
    {
      Title: "달과 폴룩스의 근접 (2.1°)",
      Date: "2023.02.04",
    },
    {
      Title: "달과 벌집성단의 근접 (3.9°)",
      Date: "2023.02.05",
    },
    {
      Title: "망",
      Date: "2023.02.06",
    },
    {
      Title: "하현달",
      Date: "2023.02.14",
    },
    {
      Title: "달과 안타레스의 근접 (1,9°)",
      Date: "2023.02.15",
    },
    {
      Title: "달과 근지점 (358,300km)",
      Date: "2023.02.19",
    },
    {
      Title: "달과 금성의 근접 (2.1°)",
      Date: "2023.02.22",
    },
    {
      Title: "달과 목성의 근접 (1.2°)",
      Date: "2023.02.23",
    },
    {
      Title: "달과 플레이아데스성단의 근접 (2.2°)",
      Date: "2023.02.26",
    },
  ];

  //행 개수 설정
  // const rowCount = 24;

  //select 기능 함수
  const [year, setYear] = React.useState("");
  const [month, setMonth] = React.useState("");

  const handleChange = (event) => {
    setYear(event.target.value);
  };

  const handleChange2 = (event) => {
    setMonth(event.target.value);
  };

  //가상의 데이터 배열 생성
  // const data = Array.from({ length: rowCount }, (_, index) => ({
  //   Title: `Title ${index + 1}`,
  //   Date: `${index + 1}`,
  // }));

  return (
    <section className="News-board">
      <PageHeader />
      <div className="select-group">
        <FormControl sx={{ m: 1, minWidth: 120, color: "white" }}>
          <InputLabel id="demo-simple-select-helper-label">Year</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={year}
            label="Year"
            onChange={(e) => handleChange(e, 0)}
          >
            <MenuItem value="">
              <em>Year</em>
            </MenuItem>
            <MenuItem value="option23">2023</MenuItem>
            <MenuItem value="option22">2022</MenuItem>
          </Select>
          <FormHelperText>With label + helper text</FormHelperText>
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-helper-label">Month</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            label="Month"
            value={month}
            onChange={(e) => handleChange2(e, 1)}
            // displayEmpty
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem value="">
              <em>Month</em>
            </MenuItem>
            <MenuItem value="option1">01</MenuItem>
            <MenuItem value="option2">02</MenuItem>
            <MenuItem value="option3">03</MenuItem>
            <MenuItem value="option4">04</MenuItem>
            <MenuItem value="option5">05</MenuItem>
            <MenuItem value="option6">06</MenuItem>
            <MenuItem value="option7">07</MenuItem>
            <MenuItem value="option8">08</MenuItem>
            <MenuItem value="option9">09</MenuItem>
            <MenuItem value="option10">10</MenuItem>
            <MenuItem value="option11">11</MenuItem>
            <MenuItem value="option12">12</MenuItem>
          </Select>
          <FormHelperText>Without label</FormHelperText>
        </FormControl>
        <Stack
          direction="row"
          spacing={2}
          className="check-btn"
          sx={{
            clear: "both",
            width: "120px",
            height: "60px",
            marginTop: "7px",
            marginLeft: "5px",
          }}
        >
          <Button
            variant="outlined"
            href="#outlined-buttons"
            sx={{
              color: "#03A9F4",
              border: "1px solid #03A9F4",
              fontFamily: "Orbitron-Bold",
              flexDirection: "row",
            }}
          >
            Search
          </Button>
        </Stack>
      </div>

      <Table board hover border={1} className="News-table" width="100%">
        <thead className="notic-news">
          <th>MainNews</th>
          <tr className="notic-table-body2">
            <td>제임스 웹, NGC 346 산개성단을 자세히 관측하다</td>
            <td>2023.02.06</td>
          </tr>
        </thead>
      </Table>
      <Table board hover border={1} className="News-table" width="100%">
        <thead className="mini-table">
          <tr className="tbl">
            <th>Title</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {boardList.map((bo) => (
            <CSMainTbody board={bo} />
          ))}
          {/* {data.concat(boardList).map((bo) => (
            <CSMainTbody board={bo} />
          ))} */}
        </tbody>
      </Table>
    </section>
  );
};

export default CSMain;
