import styless from "./ReservationModal.module.css";
import style from "../Modal.module.css";
import { ReactComponent as Close } from "../../assets/icon/icon-close_w.svg";

function ReservationModal({ setModalOpen }) {
  return (
    <div className={style.modalbox} style={{ width: "60rem", height: "40rem" }}>
      <div className={style.header}>
        <h4>내 예약목록</h4>
        <button
          className={style.closebtn}
          onClick={() => {
            setModalOpen(false);
          }}
        >
          <Close />
        </button>
      </div>
      <div className={styless.bookingbody}>
        <button
          className={style.button2}
          type="submit"
          onClick={() => {
            setModalOpen(false);
          }}
        >
          취소하기
        </button>
      </div>
    </div>
  );
}

export default ReservationModal;
