import styled from "styled-components";
import Button from "../component/Button";
import Guardian from "./Guardian";

const Navigation = styled.nav`
  min-width: 200px;
  padding-right: 20px;
`;

function MyPage({ children }) {
  return <Navigation>{children}</Navigation>;
}


export default MyPage;
