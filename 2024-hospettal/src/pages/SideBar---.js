import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import SidebarItem from "./SideNav/SidebarItem";
import "./SideBar.css";

function SideBar() {
  const menus = [
    { name: "보호자 정보관리", path: "/myPage/guardian" },
    { name: "마이펫 관리", path: "/myPage/mypet" },
    { name: "내 예약 목록", path: "/myPage/reservation" },
    {
      name: "게시글 관리",
      path: "/myPage/writing",
      subMenu: [
        { name: "내가 쓴 글", path: "/myPage/writing" },
        { name: "내가 쓴 후기", path: "/myPage/review" },
        { name: "문의내역", path: "/myPage/inquiry" },
      ],
    },
    {
      name: "메세지 관리",
      path: "/myPage/messageReceived",
      subMenu: [
        { name: "받은 메시지", path: "/myPage/messageReceived" },
        { name: "보낸 메시지", path: "/myPage/sentMessage" },
      ],
    },
    { name: "포인트 관리", path: "/myPage/point" },
  ];

  return (
    <side className="side">
      <menu className="menu">
        {menus.map((menu, index) => {
          return (
            <Link to={menu.path} key={index}>
              <SidebarItem menu={menu} />
            </Link>
          );
        })}
      </menu>
      {/* <Outlet /> */}
    </side>
  );
}

export default SideBar;
