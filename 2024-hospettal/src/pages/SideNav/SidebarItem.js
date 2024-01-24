import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function SidebarItem({ menu }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (e) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  return (
    <div className="sidebar-item">
      <h4>{menu.name}</h4>
      <div className="sidebar-sub2">
        {menu.subMenu &&
          menu.subMenu.map((menu, index) => (
            <Link to={menu.path} key={index} onClick={handleClick}>
               {isOpen && (<p>{menu.name}</p>)}
            </Link>
          ))}
      </div>
    </div>
  );
}

export default SidebarItem;
