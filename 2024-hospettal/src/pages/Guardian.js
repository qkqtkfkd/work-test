import styled from "styled-components";
import Button from '../component/Button';
import "./MyPage.css";

function Guardian() {
  return (
    <div className="container">

        <h1>보호자 정보 관리</h1>

      <from className="infoBox">
        <div className="container2">
          <label htmlFor="name">이름</label>
          <input type="name" id="name" placeholder="김보호자" />
        </div>
        <div className="container2">
          <label htmlFor="phonNumber">연락처</label>
          <input type="phonNumber" id="phonNumber" placeholder="010-000-0000" />
        </div>
        <div className="container2">
          <label htmlFor="email">이메일</label>
          <input type="email" id="email" placeholder="hostpetal@gmail.com" />
        </div>
        <div className="container2">
          <label htmlFor="nickName">닉네임</label>
          <input type="nickName" id="nickName" placeholder="호스펫탈" />
        </div>
        <div className="container2">
          <label htmlFor="withdrawal">회원탈퇴</label>
          <div>
            <Button type="submit" id="withdrawal">
              탈퇴하기
            </Button>
          </div>
        </div>
      </from>
      <div className="retouch">
        <Button type="submit" id="correction">
          수정하기
        </Button>
      </div>
    </div>
  );
}

export default Guardian;