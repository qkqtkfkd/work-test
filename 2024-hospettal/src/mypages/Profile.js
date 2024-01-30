import styled from "styled-components";
import styles from "./Profile.module.css";
import { useState } from "react";

const Button1 = styled.button`
  padding: 10px 50px;
  border: 2px solid #d9d9d9;
  color: #d9d9d9;
  background-color: #fff;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 7rem;
  height: 2.3rem;
  margin: 0;
`;

function Profile() {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (buttonId) => {
    setSelectedButton(buttonId);
  };

  return (
    <div className="profilList">
      <from className={styles.infoBox}>
        <div className={styles.container2}>
          <label className={styles.label} htmlFor="petNumber">
            동물 등록번호
          </label>
          <input
            className={styles.input}
            type="petNumber"
            id="petNumber"
            placeholder="아이의 등록번호를 입력해주세요."
          />
        </div>

        <div className={styles.container2}>
          <label className={styles.label} htmlFor="petName">
            펫이름
          </label>
          <input
            className={styles.input}
            type="petName"
            id="petName"
            placeholder="아이의 이름을 입력해주세요."
          />
        </div>

        <div className={styles.container2}>
          <label className={styles.label} htmlFor="petType">
            펫종류
          </label>
          <select className={styles.select} name="" id="">
            <option value="">선택하세요</option>
            <option value="">강아지</option>
            <option value="">고양이</option>
          </select>
        </div>

        <div className={styles.container2}>
          <label className={styles.label} htmlFor="kind">
            품종
          </label>
          <select className={styles.select} name="" id="">
            <option value="">선택하세요</option>
          </select>
        </div>

        <div className={styles.container2}>
          <label className={styles.label} htmlFor="gender">
            성별
          </label>
          <select className={styles.select} name="" id="">
            <option value="">선택하세요</option>
            <option value="">수컷</option>
            <option value="">암컷</option>
          </select>
        </div>

        <div className={styles.container2}>
          <label className={styles.label} htmlFor="weight">
            몸무게
          </label>
          <div>
            <input
              className={styles.input2}
              type="weight"
              id="weight"
              placeholder="아이의 몸무게를 입력해주세요."
            />
            <strong>kg</strong>
          </div>
        </div>

        <div className={styles.container2}>
          <label className={styles.label} htmlFor="birthDate">
            생년월일
          </label>
          <div className={styles.choice}>
            <select className={styles.select2} name="" id="">
              <option value="">선택</option>
            </select>{" "}
            <div>-</div>
            <select className={styles.select2} name="" id="">
              <option value="">선택</option>
            </select>{" "}
            <div>-</div>
            <select className={styles.select2} name="" id="">
              <option value="">선택</option>
            </select>{" "}
          </div>
        </div>

        <div className={styles.container2}>
          <label className={styles.label} htmlFor="withdrawal">
            중성화 여부
          </label>
          <div className={styles.choice}>
            <Button1
              type="submit"
              style={
                selectedButton === "completed"
                  ? { backgroundColor: "#ff9b50", color:"#fff" }
                  : {}
              }
              onClick={() => handleButtonClick("completed")}
            >
              완료
            </Button1>

            <Button1
              type="submit"
              style={
                selectedButton === "incomplete"
                  ? { backgroundColor: "#ff9b50", color:"#fff"  }
                  : {}
              }
              onClick={() => handleButtonClick("incomplete")}
            >
              미완료
            </Button1>
          </div>
        </div>

        <div className={styles.container3}>
          <label className={styles.label} htmlFor="birthDate">
            기초 접종 여부
          </label>
          <div className={styles.inoculation}>
            <div className={styles.choice2}>
              <select className={styles.select2} name="" id="">
                <option value="">선택</option>
              </select>{" "}
              <div>-</div>
              <select className={styles.select2} name="" id="">
                <option value="">선택</option>
              </select>{" "}
              <div>-</div>
              <select className={styles.select2} name="" id="">
                <option value="">선택</option>
              </select>{" "}
              <input
                className={styles.input2}
                type="birthDate"
                id="birthDate"
                placeholder="접종종류를 작성해주세요."
              />
            </div>
            <div className={styles.choice2}>
              <select className={styles.select2} name="" id="">
                <option value="">선택</option>
              </select>{" "}
              <div>-</div>
              <select className={styles.select2} name="" id="">
                <option value="">선택</option>
              </select>{" "}
              <div>-</div>
              <select className={styles.select2} name="" id="">
                <option value="">선택</option>
              </select>{" "}
              <input
                className={styles.input2}
                type="birthDate"
                id="birthDate"
                placeholder="접종종류를 작성해주세요."
              />
            </div>
            <div className={styles.choice2}>
              <select className={styles.select2} name="" id="">
                <option value="">선택</option>
              </select>{" "}
              <div>-</div>
              <select className={styles.select2} name="" id="">
                <option value="">선택</option>
              </select>{" "}
              <div>-</div>
              <select className={styles.select2} name="" id="">
                <option value="">선택</option>
              </select>{" "}
              <input
                className={styles.input2}
                type="birthDate"
                id="birthDate"
                placeholder="접종종류를 작성해주세요."
              />
            </div>
            <div className={styles.choice2}>
              <select className={styles.select2} name="" id="">
                <option value="">선택</option>
              </select>{" "}
              <div>-</div>
              <select className={styles.select2} name="" id="">
                <option value="">선택</option>
              </select>{" "}
              <div>-</div>
              <select className={styles.select2} name="" id="">
                <option value="">선택</option>
              </select>{" "}
              <input
                className={styles.input2}
                type="birthDate"
                id="birthDate"
                placeholder="접종종류를 작성해주세요."
              />
            </div>
          </div>
        </div>
      </from>
    </div>
  );
}

export default Profile;
