import styled from "styled-components";
import Button from "../component/Button";
import styles from "./MyPage.module.css";
import Profile from "./Profile";
import { useState } from "react";
import FileInput from "./FileInput";
import style from "./MyPet.module.css";

function Point() {
  const [items, setItems] = useState([]);

  return (
    <div className={style.container2}>
      <div className={style.containerBox2}>
        <h1 className={styles.h1}>마이펫 관리</h1>

        <div className={style.popol}>
          <div className={style.slide}>
            <div className={style.petPopol}>
              <div className={style.petfile}>
                <h2 style={{ margin: "0px" }}>아이 이름</h2>
                <p style={{ margin: "3px" }}>
                  <strong>나이 품종</strong>
                </p>
                <p style={{ margin: "3px" }}>
                  <strong>성별</strong>
                </p>
              </div>
              <div className={style.Enrol}>
                <span>+마이펫을 등록해주세요!</span>
              </div>
            </div>
          </div>

          <div className={styles.retouch}>
            <Button type="submit" style={{ margin: "2.5rem" }}>
              마이펫 추가하기
            </Button>
          </div>
        </div>
      </div>

      <div className={style.line} />
      <div className={style.containerBox2}>
        <div className={style.profil}>
          <div className={style.album}>
            <form className={style.poto}>
              <FileInput />
              <span className={style.register}>마이펫 사진등록하기</span>
            </form>
          </div>
          <Profile />

          <div className={styles.retouch}>
            <Button type="submit" className={styles.correction}>
              등록하기
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Point;
