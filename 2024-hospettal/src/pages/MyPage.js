import SideBar from "./SideBar.js";
import { Outlet } from 'react-router-dom';
import "./MyPage.css";
import { styled } from 'styled-components';
import Guardian from './Guardian';

const Container=styled.div`
width: 100%;
background-color: #f8ebd8;
display: flex;

`

function MyPage() {
  return (
    <Container>
      <SideBar />
      <Outlet/>
      {/* <Guardian /> */}
    </Container>
  );
}

export default MyPage;