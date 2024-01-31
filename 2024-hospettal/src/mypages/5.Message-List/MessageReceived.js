import styled from "styled-components";
import Button from "../../component/Button";
import MessageReceivedList from "./MessageReceivedList";
import styles from "../MyPage.module.css";
import style from "../Modal.module.css";
import { ReactComponent as Close} from "../../assets/icon/icon-close_w.svg";

function MessageReceived() {
  return (
    <div className={styles.containerBox}>
      <h1 className={styles.h1}>받은 메세지</h1>
      <MessageReceivedList />
      <div className={styles.retouch_a}>
        <Button type="submit" className={styles.correction}>
          삭제
        </Button>
      </div>
    </div>
  );
}

export default MessageReceived;
