import { Container, Grid } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import "../../store/scss/storemain.scss";
import StoreItem from "./StoreItem";
import StoreModal from "./StoreModal";

import { API_BASE_URL as BASE, SHOP } from "../../../config/host-config";
import HeaderSolar from "../../solarsystem/js/HeaderSolar";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../util/AuthContext";
import { getLoginUserInfo } from "../../../util/login-utils";

const StoreMain = () => {
  const { isLoggedIn } = useContext(AuthContext);
  const [token, setToken] = useState(getLoginUserInfo().token);

  // 요청 헤더 설정
  const requestHeader = {
    "content-type": "application/json",
    Authorization: "Bearer " + token,
  };

  // 서버에 할일 목록(json)을 요청(fetch)해서 받아와야 함.
  const API_SHOP_URL = BASE + SHOP;

  const [list, setList] = useState([]);
  const [selectedItem, setSelectedItem] = useState([]); // 클릭한 아이템 정보를 저장할 상태변수

  useEffect(() => {
    // 페이지가 렌더링 됨과 동시에 할 일 목록을 요청해서 뿌려주기.
    fetch(API_SHOP_URL + "/list", {
      method: "GET",
      headers: requestHeader,
    })
      .then((response) => response.json()) // JSON 형식으로 변환
      .then((data) => {
        // fetch를 통해 받아온 데이터를 상태 변수에 할당
        if (data) setList(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const [open, setOpen] = useState(false); // 모달 상태를 관리하기 위한 상태변수

  const handleOpen = (item) => {
    setSelectedItem(item);
    setOpen(!open);
  };

  return (
    <>
      <HeaderSolar />
      <div className="store-wrapper">
        <Container component="main" maxWidth="xl" style={{ padding: "50px" }}>
          <Grid container spacing={4}>
            {list.map((product) => (
              <StoreItem open={handleOpen} key={product.id} item={product} />
            ))}
          </Grid>
        </Container>
      </div>
      <StoreModal open={open} setOpen={setOpen} item={selectedItem} />
    </>
  );
};

export default StoreMain;
