import style from "./PictureSlide.module.css";
import { ReactComponent as PrevArrow } from "../../assets/icon/chevron_left_ff9b50.svg";
import { ReactComponent as NextArrow } from "../../assets/icon/chevron_right_ff9b50.svg";
import { useState } from "react";
import IMG from "../../assets/gallery/갤러리_01.jpg"
import ImgInput from "./ImgInput";


function PictureSlide() {
  const pets = [
    { label: "Img", alt: "금희", url: require("../../assets/gallery/갤러리_01.jpg") },
  ];

  const [current, setCurrent] = useState(0);
  const [imageUrl, setImageUrl] = useState(pets[current].url);


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

  const translateXValue = -current * 126;

  const handleImageChange = () => {
    // 이미지 변경 로직을 구현하세요.
    // 예를 들어, 사용자가 이미지를 선택하도록 하는 모달 창을 열거나
    // 다른 이미지를 불러오는 로직을 추가할 수 있습니다.
    // 변경된 이미지 경로를 setImageUrl을 통해 설정합니다.
  };

  return (
    <div className={style.commentSlide}>
      <div className={style.carousel}>
        <div
          className={style.slide}
          style={{ transform: `translateX(${translateXValue}px)` }}
        >
          {pets.map((pet, index) => {
            return (
              <div className={style.petPopol} key={`pet${index + 1}`} style={{ backgroundImage: `url(${pet.url})` }}>                
                <span className={style.retouch}  onClick={handleImageChange}>수정하기
                <ImgInput />
                </span>
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
    </div>
  );
}
export default PictureSlide;
