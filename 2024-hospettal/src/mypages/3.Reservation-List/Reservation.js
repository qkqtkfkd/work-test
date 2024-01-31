import styled from "styled-components";
import Button from "../../component/Button";
import ReservationList from "./ReservationList";
import styles from "../MyPage.module.css";
import { useEffect, useState } from "react";
import Overlay from "../Overlay"
import ReservationModal from "./ReservationModal"

function Reservation() {

  let [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [modalOpen]);


  return (
    <div className={styles.containerBox}>
      <h1 className={styles.h1}>예약 목록 확인</h1>
      <ReservationList />
      <div className={styles.retouch_a}>
        <Button type="submit" className={styles.correction} onClick={() => {
                setModalOpen(true);
              }}>
          취소하기
        </Button>
      </div>

      {modalOpen && <Overlay modalOpen={modalOpen} />}
      {modalOpen && <ReservationModal setModalOpen={setModalOpen} />}
    </div>
  );
}

export default Reservation;
