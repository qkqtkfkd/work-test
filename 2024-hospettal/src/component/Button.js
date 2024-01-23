import styled from "styled-components";
// import styles from "./Button.module.css";
// import classNames from "classnames";

const Button = styled.button`
  padding: 10px 50px;
  border: 2px solid #ff9b50;
  color: #ff9b50;
  background-color: #f8ebd8;
  outline: none;
  display: flex;
  margin: 4.5rem 0;

  &:hover,
  &:active {
    background-color: #ff9b50;
    color: #ffffff;
  }`;


export default Button;
