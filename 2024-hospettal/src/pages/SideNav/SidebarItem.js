import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function SidebarItem({ menu }) {
  return (
    <div className="sidebar-item">
      <h4>{menu.name}</h4>
      <div className="sidebar-sub2">
        {menu.subMenu && 
          menu.subMenu.map((menu, index) => 
            <Link to={menu.path} key={index}>
              <p>{menu.name}</p>
            </Link>
          )
        }
        
      </div>
    </div>
  );
}

export default SidebarItem;


