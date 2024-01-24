import SideNav from "./SideNav/SideNav";
import NavList from "./SideNav/SideNavList";
import NavItem from "./SideNav/SideNavItem";
import NavLink from "./SideNav/SideNavLink";

function isActive(path) {
    return window.location.pathname.startsWith(path);
  }
  
  function SideNavBar() {
    return (
      <SideNav>
        <NavList>
          <NavItem>
            <NavLink to="/myPage/guardian" active={isActive("/myPage/guardian")}>
            보호자 정보관리
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/myPage/mypet" active={isActive("/myPage/mypet")}>
            마이펫 관리
            </NavLink>
          </NavItem>
          <NavItem to="/myPage/reservation" active={isActive("/myPage/reservation")}>
            <NavLink>내 예약 목록</NavLink>
          </NavItem>  
  
  
          <NavItem>
            <NavLink to="/myPage/writing" active={isActive("/myPage/writing")}>
            게시글 관리
            </NavLink>
            <NavList expanded={isActive("/myPage/writing")}>
              <NavItem>
                <NavLink to="/myPage/writing" active={isActive("/myPage/writing")}>
                내가 쓴 글
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/myPage/review" active={isActive("/myPage/review")}>
                내가 쓴 후기
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/myPage/inquiry" active={isActive("/myPage/inquiry")}>
                문의내역
                </NavLink>
              </NavItem>
            </NavList>
          </NavItem>
  
          <NavItem>
            <NavLink to="/myPage/messageReceived" active={isActive("/myPage/messageReceived")}>
            메세지 관리
            </NavLink>
            <NavList expanded={isActive("/myPage/messageReceived")}>
              <NavItem>
                <NavLink to="/myPage/messageReceived" active={isActive("/myPage/messageReceived")}>
                  HTML
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/front/css" active={isActive("/front/css")}>
                  CSS
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/front/js/react" active={isActive("/front/js")}>
                  JavaScript
                </NavLink>
                <NavList expanded={isActive("/front/js")}>
                  <NavItem>
                    <NavLink
                      to="/front/js/react"
                      active={isActive("/front/js/react")}
                    >
                      React
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      to="/front/js/vue"
                      active={isActive("/front/js/vue")}
                    >
                      Vue
                    </NavLink>
                  </NavItem>
                </NavList>
              </NavItem>
            </NavList>
          </NavItem>
  

  
          <NavItem>
            <NavLink to="/help" active={isActive("/help")}>
            포인트 관리
            </NavLink>
          </NavItem>
        </NavList>
      </SideNav>
    );
  }
  
  export default SideNavBar;