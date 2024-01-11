import styled from "styled-components";

const Button = styled.button`
  background-color: #6500c3;
  border: none;
  color: #fff;
  padding: 16px;
  font-size: 18px;
  border-radius: ${({ $round }) => ($round ? `9999px` : `8px`)};
  cursor: pointer;

  &:hover,
  &:active {
    background-color: #7760b4;
  }
`;


export default Button;
