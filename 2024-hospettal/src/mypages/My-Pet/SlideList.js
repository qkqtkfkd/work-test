import style from "./SlideList.module.css";
import { ReactComponent as PrevArrow } from "../../assets/icon/chevron_right_w_1.svg";
import { ReactComponent as NextArrow } from "../../assets/icon/chevron_right_w.svg";
import { useState } from "react";

function SlideList() {
  const pets = [
    { name: "아이이름", age: "나이", breed: "품종", gender: "성별" },
    { name: "냥냥", age: "5살", breed: "메이쿤", gender: "암컷" },
    { name: "댕댕", age: "2살", breed: "사모에드", gender: "수컷" },
    { name: "동동", age: "3살", breed: "코리안숏헤어", gender: "수컷" }

  ];

  const [current, setCurrent] = useState(0);

  const prevHandler = () => {
    if (current === 0) {
      setCurrent(pets.length - 1);
    } else {
      setCurrent(current - 1);
    }
  };

  const nextHandler = () => {
    if (current === pets.length - 1) {
      setCurrent(0);
    } else {
      setCurrent(current + 1);
    }
  };

  return (
    <div className={style.carousel}>
      <div className={style.slide} style={{ transform: `translateX(${current * 290}px)` }}>
        {pets.map((pet, index) => {
          return (
            <div className={style.petPopol} id={`pet${index + 1}`}>
              <div className={style.petfile}>
                <h2 style={{ margin: "0px" }}>{pet.name}</h2>
                <p style={{ margin: "3px" }}>
                  <strong>
                    {pet.age} {pet.breed}
                  </strong>
                </p>
                <p style={{ margin: "3px" }}>
                  <strong>{pet.gender}</strong>
                </p>
              </div>
              <div className={style.Enrol}>
                <span>+마이펫을 등록해주세요!</span>
              </div>
            </div>
          );
        })}
      </div>

      <button className={style.prevBtn} onClick={prevHandler}>
        <PrevArrow />
      </button>

      <button className={style.nextBtn} onClick={nextHandler}>
        <NextArrow />
      </button>
    </div>
  );
}
export default SlideList;