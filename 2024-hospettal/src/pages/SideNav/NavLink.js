import styled, { css } from "styled-components";

function isCurrent(to) {
  return window.location.pathname.startsWith(to);
}

const Link = styled.a`
  display: block;
  margin: 0 calc(20px * -1);
  padding: 8px 20px;
  border-radius: 4px;
  color: #fffffe;
  text-decoration: none;

  ${(p) =>
    p.acctive &&
    css`
      color: #ff8906;
      font-weight: bold;
    `}

  &:hover {
    background: #ff8906;
    color: #fffffe;
    transform: translateY(-2px);
    transition: 1s;
  }

  &:not([href]) {
    color: #a7a9be;
    background: revert;
    transform: none;
  }
`;

// HTML=><a>
function SideNavLink(children, to, active) {
  return (
    <Link
      active={active} //주소의 활성화 여부
      // aria-current={isCurrent(to) ? "page" : null} //현재 페이지
    >
      {children}
    </Link>
  );
}

export default SideNavLink;
