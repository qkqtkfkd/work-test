import React from "react";
import styled from "styled-components";

function SidebarItem({ menu }) {
  return (
    <div className="sidebar-item">
      <p>{menu.name}</p>
    </div>
  );
}


export default SidebarItem;
