import styled from "styled-components";
import Button from "../../component/Button";
import MessageReceivedList from "./MessageReceivedList";
import styles from "../MyPage.module.css";
import style from "../Modal.module.css";
import { ReactComponent as Close} from "../../assets/icon/icon-close_w.svg";
import { useEffect, useState } from "react";
import Overlay from "../Overlay"
import MessageModal from "./MessageModal"

function MessageReceived() {
  
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
      <h1 className={styles.h1}>받은 메세지</h1>
      <MessageReceivedList />
      <div className={styles.retouch_a}>
        <Button type="submit" className={styles.correction} onClick={() => {
                setModalOpen(true);
              }}>
          삭제
        </Button>
      </div>

      {modalOpen && <Overlay modalOpen={modalOpen} />}
      {modalOpen && <MessageModal setModalOpen={setModalOpen} />}
    </div>
  );
}

export default MessageReceived;
