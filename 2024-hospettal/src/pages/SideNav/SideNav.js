import styled from "styled-components";

const Navigation = styled.nav`
  min-width: 200px;
  padding-right: 20px;
`;

// HTML=><nav>
function Nav({ children }) {
  return <Navigation>{children}</Navigation>;
}


export default Nav;
