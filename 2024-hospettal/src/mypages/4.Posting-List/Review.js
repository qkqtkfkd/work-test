import styled from "styled-components";
import Button from "../../component/Button";
import ReviewList from "./ReviewList";
import styles from "../MyPage.module.css";
import style from "../Modal.module.css";
import { ReactComponent as Close} from "../../assets/icon/icon-close_w.svg";
import { useEffect, useState } from "react";
import Overlay from "../Overlay"
import ReviewModal from "./ReviewModal";

function Review() {
  
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
      <h1 className={styles.h1}>내가 쓴 후기</h1>
      <ReviewList />
      <div className={styles.retouch_a}>
        <Button type="submit" className={styles.correction} onClick={() => {
                setModalOpen(true);
              }}>
          삭제
        </Button>
      </div>

      {modalOpen && <Overlay modalOpen={modalOpen} />}
      {modalOpen && <ReviewModal setModalOpen={setModalOpen} />}
    </div>
  );
}

export default Review;
