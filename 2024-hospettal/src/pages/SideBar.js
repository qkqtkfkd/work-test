import styled from "styled-components";
import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import SidebarItem from "./SideNav/SidebarItem";
import Guardian from "./Guardian";
import Reservation from "./Reservation";


const Side = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
`

const Menu = styled.div`
  
  width: 100%;
  height: 100vh;
  padding: 3rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #ffc26f;
  font-size: 18px;
  posi
`

function SideBar() {
  const menus = [
    { name: "보호자 정보관리", path: "/myPage/guardian" },
    { name: "마이펫 관리", path: "/myPage/mypet" },
    { name: "내 예약 목록", path: "/myPage/reservation" },
    { name: "게시글 관리", path: "/myPage/post" },
    { name: "메세지 관리", path: "/myPage/message" },
    { name: "포인트 관리", path: "/myPage/point" },
  ];

  return (
    <Side>
      <Menu>
        {menus.map((menu, index) => {
          return (
            <NavLink
              style={{ color: "black", textDecoration: "none" }}
              to={menu.path} //이동시킬 페이지 주소
              key={index}
              activeStyle={{ color: "black" }} //주소의 활성화 여부
            >
              <SidebarItem menu={menu} />
            </NavLink>
          );
        })}
      </Menu>
      <Outlet/>
    </Side>
  );
}

export default SideBar;
