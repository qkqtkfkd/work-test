import PointList from "./PointList";
import styles from "../MyPage.module.css";
// import style from "../Modal.module.css";
// import { ReactComponent as Close } from "../../assets/icon/icon-close_w.svg";
import styleA from "./Point.module.css";
import Shop from "./Shop";


function Point() {

  
  return (
    <div className={styles.containerBox}>
      <h1 className={styles.h1} style={{ borderBottom: "2px solid #ff8b50" }}>
        포인트 샵
      </h1>

      {/* ////////////////////////////////////// */}
      <div className={styleA.pointbody}>
        <div>
          <p className={styleA.pointsHeld}>
            보유포인트 <span className={styleA.score}>3000냥</span>
          </p>
        </div>

        <div>
          <Shop />
        </div>
      </div>

      <PointList />
      <p className={styleA.annotation}>
        *기프트콘은 이벤트와 재고량에 따라 수시로 변경될 수 있습니다.
      </p>
      <div>pagination</div>


    </div>
  );
}

export default Point;
