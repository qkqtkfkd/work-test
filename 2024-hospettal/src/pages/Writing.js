import styled from "styled-components";
import Button from "../component/Button";
import WritingList from "./My-List/WritingList";
import styles from "./MyPage.module.css";

function Writing() {
  return (
    <div className={styles.containerBox}>
      <h1>내가 쓴 글</h1>
      <WritingList />
      <div className={styles.retoucha}>
        <Button type="submit" className={styles.correction}>
          삭제
        </Button>
      </div>
    </div>
  );
}

export default Writing;
