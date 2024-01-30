import Button from "../component/Button";
import styles from "./MyPage.module.css";
import Profile from "./My-Pet/Profile";
import FileInput from "./My-Pet/FileInput";
import SlideList from "./My-Pet/SlideList";
import style from "./MyPet.module.css";

function MyPet() {
  return (
    <div className={style.container2}>
      <div className={style.containerBox2}>
        <h1 className={styles.h1}>마이펫 관리</h1>

        <div className={style.popol}>
          <SlideList />
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

export default MyPet;
