import React from "react";
import styled from "styled-components";

const Item=styled.li`
margin:8px;
`;

// HTML=><li>, disabled=>아이템의 비활성화 여부, 하위에 비활성화 링크=presentation
function SideNavItem({children,disabled=false}){
    return<Item role={disabled?"presentation":null}>{children}</Item>
}

export default SideNavItem;