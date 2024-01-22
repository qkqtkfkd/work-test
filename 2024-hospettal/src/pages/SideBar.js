import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import SidebarItem from "./SideNav/SidebarItem";
import "./SideBar.css";

function SideBar() {
  const menus = [
    { name: "보호자 정보관리", path: "/myPage/guardian" },
    { name: "마이펫 관리", path: "/myPage/mypet" },
    { name: "내 예약 목록", path: "/myPage/reservation" },
    { name: "게시글 관리", path: "/myPage/writing" },
    { name: "메세지 관리", path: "/myPage/messageReceived" },
    { name: "포인트 관리", path: "/myPage/point" },
  ];

  return (
    <side className="side">
      <menu className="menu">
        <Link className="sidebar-item" to={"/myPage/guardian"}>
          보호자 정보관리
        </Link>
        <Link className="sidebar-item" to={"/myPage/guardian"}>
        마이펫 관리
        </Link>
        <Link className="sidebar-item" to={"/myPage/reservation"}>
        내 예약 목록
        </Link>
        <Link className="sidebar-item" to={"/myPage/writing"}>
        게시글 관리
        </Link>
        <Link className="sidebar-item" to={"/myPage/messageReceived"}>
        메세지 관리
        </Link>
        <Link className="sidebar-item" to={"/myPage/guardian"}>
        포인트 관리
        </Link>
      </menu>
      <Outlet />
    </side>
  );
}

export default SideBar;
