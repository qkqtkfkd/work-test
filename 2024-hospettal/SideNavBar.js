import SideNav from "./SideNav/SideNav";
import NavList from "./SideNav/SideNavList";
import NavItem from "./SideNav/SideNavItem";
import NavLink from "./SideNav/SideNavLink";
import NavSeparator from "./SideNav/SideNavSeparator";

function isActive(path) {
    return window.location.pathname.startsWith(path);
  }
  
  function SideNavBar() {
    return (
      <SideNav>
        <NavList>
          <NavItem>
            <NavLink to="/" active={isActive("/")}>
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/about" active={isActive("/about")}>
              About
            </NavLink>
          </NavItem>
          <NavItem disabled>
            <NavLink>Coming Soon</NavLink>
          </NavItem>
  
          <NavSeparator />
  
          <NavItem>
            <NavLink to="/back/python" active={isActive("/back")}>
              Backend
            </NavLink>
            <NavList expanded={isActive("/back")}>
              <NavItem>
                <NavLink to="/back/python" active={isActive("/back/python")}>
                  Python
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/back/java" active={isActive("/back/java")}>
                  Java
                </NavLink>
              </NavItem>
            </NavList>
          </NavItem>
  
          <NavItem>
            <NavLink to="/front/html" active={isActive("/front")}>
              Frontend
            </NavLink>
            <NavList expanded={isActive("/front")}>
              <NavItem>
                <NavLink to="/front/html" active={isActive("/front/html")}>
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
  
          <NavSeparator />
  
          <NavItem>
            <NavLink to="/help" active={isActive("/help")}>
              Help
            </NavLink>
          </NavItem>
        </NavList>
      </SideNav>
    );
  }
  
  export default SideNavBar;