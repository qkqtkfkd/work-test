import styled from "styled-components";
// import styles from "./Button.module.css";
// import classNames from "classnames";

const Button = styled.button`
  padding: 4px 20px;
  border: 2px solid #ff9b50;
  color: #ff9b50;
  background-color: #f8ebd8;
  outline: none;

  &:hover,
  &:active {
    background-color: #ff9b50;
    color: #ffffff;
  }


`;

// function Button({ className, variant, isDiv, ...restProps }) {
//     if (isDiv === "div") {
//       return (
//         <button
//           {...restProps}
//           className={classNames(
//             styles.button,
//             variant && styles[variant],
//             className
//           )}
//         />
//       );
//     }
  
//     return (
//       <button
//         {...restProps}
//         className={classNames(
//           styles.button,
//           variant && styles[variant],
//           className
//         )}
//       />
//     );
//   }


export default Button;
