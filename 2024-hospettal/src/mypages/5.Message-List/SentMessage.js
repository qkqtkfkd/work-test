import styled from "styled-components";
import Button from "../../component/Button";
import SentMessageList from "./SentMessageList";
import styles from "../MyPage.module.css";
import style from "../Modal.module.css";
import { ReactComponent as Close} from "../../assets/icon/icon-close_w.svg";
import { useEffect, useState } from "react";
import Overlay from "../Overlay"
import SentModal from "./SentModal"

function SentMessage() {
  
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
      <h1 className={styles.h1}>보낸 메세지</h1>
      <SentMessageList />
      <div className={styles.retouch_a}>
        <Button
          type="submit"
          id="correction"
          style={{ margin: "4.5rem 2rem 4.5rem 0" }}
        >
          쪽지 쓰기
        </Button>
        <Button type="submit" id="correction" onClick={() => {
                setModalOpen(true);
              }}>
          삭제
        </Button>
      </div>

      {modalOpen && <Overlay modalOpen={modalOpen} />}
      {modalOpen && <SentModal setModalOpen={setModalOpen} />}
    </div>
  );
}

export default SentMessage;
