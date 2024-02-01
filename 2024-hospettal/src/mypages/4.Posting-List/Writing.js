import styled from "styled-components";
import Button from "../../component/Button";
import WritingList from "./WritingList";
import styles from "../MyPage.module.css";
import style from "../Modal.module.css";
import { ReactComponent as Close} from "../../assets/icon/icon-close_w.svg";
import { useEffect, useState } from "react";
import Overlay from "../Overlay"
import WritingModal from "./WritingModal"

function Writing() {

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
      <h1 className={styles.h1}>내가 쓴 글</h1>
      <WritingList />
      <div className={styles.retoucha}>
        <Button type="submit" className={styles.correction} onClick={() => {
                setModalOpen(true);
              }}>
          삭제
        </Button>
      </div>

      {modalOpen && <Overlay modalOpen={modalOpen} />}
      {modalOpen && <WritingModal setModalOpen={setModalOpen} />}
    </div>
  );
}

export default Writing;
