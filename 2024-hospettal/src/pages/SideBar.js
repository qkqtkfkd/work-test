import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "./SideBar.css";
import Post from "./Post";
import Message from "./Message";

function SideBar() {
  const [isPostOpen, setIsPostOpen] = useState(false);
  const [isMessageOpen, setIsMessageOpen] = useState(false);
  // const [isSubMenuOpen, setIsSubMenuOpen] = useState({
  //   post: false,
  //   message: false
  // });

  const handleMenuClick = (menuName) => {
    if (menuName === "post") {
      setIsPostOpen(!isPostOpen);
      setIsMessageOpen(false);
    } else if (menuName === "message") {
      setIsMessageOpen(!isMessageOpen);
      setIsPostOpen(false);
    }
  };

  // const handleMenuClick = (menuName) => {
  //   setIsSubMenuOpen(prevState => ({
  //     ...prevState,
  //     [menuName]: !prevState[menuName]
  //   }));
  // };

  return (
    <side className="side">
      <menu className="menu">
        <div className="sideMenus">
          <Link className="sidebar-item" to={"/myPage/guardian"}>
            보호자 정보관리
          </Link>
        </div>
        <div className="sideMenus">
          <Link className="sidebar-item" to={"/myPage/guardian"}>
            마이펫 관리
          </Link>
        </div>
        <div className="sideMenus">
          <Link className="sidebar-item" to={"/myPage/reservation"}>
            내 예약 목록
          </Link>
        </div>

        <div className="sideMenus" onClick={() => handleMenuClick("post")}>
          <Link className="sidebar-item" to={"/myPage/writing"}>
            게시글 관리
          </Link>
          {isPostOpen && <Post />}
        </div>

        <div className="sideMenus" onClick={() => handleMenuClick("message")}>
          <Link className="sidebar-item" to={"/myPage/messageReceived"}>
            메세지 관리
          </Link>
          {isMessageOpen && <Message />}
        </div>

        <div className="sideMenus">
          <Link className="sidebar-item" to={"/myPage/guardian"}>
            포인트 관리
          </Link>
        </div>
      </menu>
    </side>
  );
}

export default SideBar;
