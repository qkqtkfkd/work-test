import style from "./PictureSlide.module.css";
import { ReactComponent as PrevArrow } from "../../../assets/icon/chevron_left_ff9b50.svg";
import { ReactComponent as NextArrow } from "../../../assets/icon/chevron_right_ff9b50.svg";
import { useEffect, useState, useRef } from "react";


function PictureSlide() {
  const pets = [
    {
      label: "Img",
      alt: "금희",
      url: require("../../../assets/gallery/갤러리_01.jpg"),
    },
  ];

  const [current, setCurrent] = useState(0);
  // const [imageUrl, setImageUrl] = useState(pets[current].url);
  const [preview, setPreview] = useState();
  const inputRef = useRef();

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

  const handleImageChange = (e, inputRef) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setPreview(null);
    }
  };

  return (
    <div className={style.commentSlide}>
      <div className={style.carousel}>
        <div
          className={style.slide}
          style={{ transform: `translateX(${translateXValue}px)` }}
        >
          {pets.map((pet, index) => {

            const handleClick = () => {
              inputRef.current.click();
            };

            return (
              <div
                className={style.petPopol}
                key={`pet${index + 1}`}
                style={{ backgroundImage: `url(${pet.url})` }}
              >
                {preview && (
                  <img
                    className="FileInput-preview selected"
                    src={preview}
                    alt="이미지 미리보기"
                  />
                )}
                <span className={style.retouch} onClick={handleClick}>
                  수정하기
                <input
                  type="file"
                  accept="image/png, image/jpeg"
                  onChange={handleImageChange}
                  ref={inputRef}
                  style={{ display: "none" }}
                />
                </span>
              </div>
            );
          })}

          {/* {pets.map((pet, index) => {
            return (
              <div
                className={style.petPopol}
                key={`pet${index + 1}`}
                style={{ backgroundImage: `url(${pet.url})` }}
              >
                {preview && (
                  <img
                    className="ImgInput-preview selected"
                    src={preview}
                    alt="이미지 미리보기"
                  />
                )}
                <span className={style.retouch} onClick={handleClick}>수정하기</span>
                <input
                  className={style.retouch}
                  type="file"
                  accept="image/png, image/jpeg"
                  onChange={handleImageChange}
                  ref={inputRef}
                  style={{ display: "none" }}
                />
              </div>
            );
          })} */}
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
