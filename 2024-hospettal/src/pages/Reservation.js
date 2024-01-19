import styled from "styled-components";
import Button from "../component/Button";
import ReservationList from "./My-List/ReservationList";
import "./MyPage.css";

function Reservation() {
  return (
    <div className="containerBox">
      <h1>예약 목록 확인</h1>
      <ReservationList />
      <div className="retouch-a">
        <Button type="submit" id="correction">
          취소하기
        </Button>
      </div>
    </div>
  );
}

export default Reservation;
