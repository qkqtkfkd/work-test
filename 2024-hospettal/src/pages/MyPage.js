import styled from "styled-components";
// import Link from "./Link";
// import Label from "./Label";
// import Input from "./Input";
import Button from "./Button";
import "./MyPage.css";

function MyPage() {
  return (
    <div className="container">
      <h1>보호자 정보 관리</h1>
      <from className="infoBox">
        <label htmlFor="name">이름</label>
        <input type="name" id="name" placeholder="김보호자" />            
        <label htmlFor="phonNumber">연락처</label>
        <input type="phonNumber" id="phonNumber" placeholder="010-000-0000" />
        <label htmlFor="email">이메일</label>
        <input type="email" id="email" placeholder="hostpetal@gmail.com" />
        <label htmlFor="nickName">닉네임</label>
        <input type="nickName" id="nickName" placeholder="호스펫탈" />
        <label htmlFor="withdrawal">회원탈퇴</label>
        <div>
        <button type="submit" id="withdrawal">
          탈퇴하기
        </button></div>
      </from>

      <button type="submit" id="correction">수정하기</button>
    </div>
  );
}

export default MyPage;
