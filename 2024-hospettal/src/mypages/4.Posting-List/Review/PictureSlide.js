import style from "./PictureSlide.module.css";
import { ReactComponent as PrevArrow } from "../../../assets/icon/chevron_left_ff9b50.svg";
import { ReactComponent as NextArrow } from "../../../assets/icon/chevron_right_ff9b50.svg";
import { useState, useRef } from "react";

function PictureSlide() {
  const [pets, setPets] = useState([
    {
      id: 1,
      label: "Img",
      alt: "금희",
      url: require("../../../assets/gallery/갤러리_01.jpg"),
    },
    {
      id: 2,
      label: "Img",
      alt: "주희",
      url: require("../../../assets/gallery/갤러리_02.jpg"),
    },
    {
      id: 3,
      label: "Img",
      alt: "영희",
      url: require("../../../assets/gallery/갤러리_01.jpg"),
    },
  ]);

  const [current, setCurrent] = useState(0);
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

  const handleClick = (id,index) => {
    inputRef.current.click();
  }; 

  const handleImageChange = (e, id, index) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      const imageUrl = reader.result;
      console.log(`Pet ID: ${id}, New Image: ${imageUrl}`);
      const updatedPets = [...pets];
      const petIndex = updatedPets.findIndex((pet) => pet.id === id);
      if (petIndex !== -1) {
        updatedPets[petIndex].url = imageUrl;
        setPets(updatedPets);
      }
    };

    if (file) {
      reader.readAsDataURL(file);
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
            return (
              <div
                className={style.petPopol}
                key={`pet${pet.id}`}
                style={{ backgroundImage: `url(${pet.url})` }}
              >
                {preview && (
                  <img
                    className="InputPreview selected"
                    src={preview}
                    alt="이미지 미리보기"
                  />
                )}
                <span
                  className={style.retouch}
                  onClick={() => {
                    handleClick(pet.id, index);
                  }}
                >
                  수정하기
                  <input
                    type="file"
                    accept="image/png, image/jpeg"
                    onChange={(e) => handleImageChange(e, pet.id, index)}
                    ref={inputRef}
                    style={{ display: "none" }}
                  />
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