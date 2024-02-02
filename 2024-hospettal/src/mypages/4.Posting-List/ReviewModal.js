import style from "../Modal.module.css";
import { ReactComponent as Close } from "../../assets/icon/icon-close_ff9b50.svg";
import styless from "./ReviewModal.module.css";
import { useEffect, useState } from "react";
import PictureSlide from "./PictureSlide";
import CheckStars from "./CheckStars";

function ReviewModal({ setModalOpen }) {
  return (
    <div className={style.modalbox} style={{ width: "60rem", height: "50rem" }}>
      <div className={styless.ReviewModalheader}>
        <h4>내가 쓴 후기</h4>
        <button
          className={style.closebtn}
          onClick={() => {
            setModalOpen(false);
          }}
        >
          <Close />
        </button>
      </div>

      <div className={styless.ReviewModalbody}>
        <div className={styless.StarRating}>
          <CheckStars />
          <div></div>
        </div>

        <div className={styless.Comment}>
          {/* <input className={styless.note}></input>                         */}
          <p className={styless.note}>
            저희 집 금희는 특수동물로 취급해서 다루는 병원이 잘 없는데 수소문
            끝에 동의보감 동물병원으로 방문했는데요. <br />
            회사 선생님도 너무 친절하시고 진료도 잘봐주십니다!
            <br />
            너무 좋아요! 덕분에 금희는 이제 괜찮습니다!
            <br />
            <br />
            감사합니다 동의보감 병원분들
          </p>
        </div>

        <div className={styless.CommentPoto}>
          <p className={styless.picture}>후기사진 추가</p>
          
            <PictureSlide />
          </div>
        </div>

        <div className={style.btnbox}>
          <button
            className={style.button2}
            type="submit"
            style={{ width: "13rem" }}
            onClick={() => {
              setModalOpen(false);
            }}
          >
            수정하기
          </button>
          <button
            className={style.button2}
            type="submit"
            style={{ width: "13rem" }}
            onClick={() => {
              setModalOpen(false);
            }}
          >
            삭제하기
          </button>
        </div>
      </div>
  );
}

export default ReviewModal;
