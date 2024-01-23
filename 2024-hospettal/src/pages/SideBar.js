import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
// import SidebarItem from "./SideNav/SidebarItem";
import "./SideBar.css";
import { Accordion, AccordionItem } from "./SideNav/Accordion";

function SideBar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (e) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  /////////
  const Accordion = ({ children, initOpen = false }) => {
    const [activeIndex, setActiveIndex] = useState(initOpen ? 0 : null);

    const handleToggle = (index) => {
      setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
      <div className="menu">
        {React.Children.map(children, (child, index) =>
          React.cloneElement(child, {
            isOpen: activeIndex === index,
            onToggle: () => handleToggle(index),
          })
        )}
      </div>
    );
  };

  const AccordionItem = ({
    children,
    title,
    isOpen,
    onToggle,
    checkAll = false,
  }) => {
    return (
      <div
        className={`accordion-item ${isOpen ? "opened" : "closed"} ${
          checkAll && "check-all"
        }`}
      >
        <div className="sideMenus" onClick={onToggle}>
          {title}
        </div>
        <div className="contents-wrap">{children}</div>
      </div>
    );
  };

  ///

  return (
    <side className="side">
      <Accordion initOpen={true} className="menu">
        <AccordionItem title={`약관(1)`}>
          <div className="contents">
            약관(1)의 내용
            <br />
            약관(1)의 내용
            <br />
            약관(1)의 내용
            <br />
          </div>
        </AccordionItem>
        <AccordionItem title={`약관(2)`}>
          <div className="contents">
            약관(2)의 내용
            <br />
            약관(2)의 내용
            <br />
            약관(2)의 내용
            <br />
          </div>
        </AccordionItem>

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

        <AccordionItem className="sideMenus" title={`게시글 관리`}>
          <Link
            className="sidebar-item"
            to={"/myPage/writing"}
            onClick={handleClick}
          >
            {/* 게시글 관리 */}
            {isOpen && (
              <div className="contents">
                <div className="postMenus">
                  <Link className="sidebar-item" to={"/myPage/writing"}>
                    내가 쓴 글
                  </Link>
                </div>
                <div className="postMenus">
                  <Link className="sidebar-item" to={"/myPage/review"}>
                    내가 쓴 후기
                  </Link>
                </div>
                <div className="postMenus">
                  <Link className="sidebar-item" to={"/myPage/inquiry"}>
                    문의내역
                  </Link>
                </div>
              </div>
            )}
          </Link>
        </AccordionItem>

        <AccordionItem className="sideMenus" title={`메세지 관리`}>
          <Link
            className="sidebar-item"
            to={"/myPage/messageReceived"}
            onClick={handleClick}
          >
            {/* 메세지 관리 */}
            {isOpen && (
              <div className="contents">
                <div className="postMenus">
                  <Link className="sidebar-item" to={"/myPage/messageReceived"}>
                    받은 메시지
                  </Link>
                </div>
                <div className="postMenus">
                  <Link className="sidebar-item" to={"/myPage/sentMessage"}>
                    보낸 메시지
                  </Link>
                </div>
              </div>
            )}
          </Link>
        </AccordionItem>

        <div className="sideMenus">
          <Link className="sidebar-item" to={"/myPage/guardian"}>
            포인트 관리
          </Link>
        </div>
      </Accordion>
      <Outlet />
    </side>
  );
}

export default SideBar;
