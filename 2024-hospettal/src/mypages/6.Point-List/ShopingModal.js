import styless from "./ShopingModal.module.css";
import style from "../Modal.module.css";
import { ReactComponent as Close } from "../../assets/icon/icon-close_w.svg";



function ShopingModal({ setModalOpen }) {

  return (
    <div className={style.modalbox} style={{ width: "60rem", height: "40rem" }}>
      <div className={style.header}>
        <h4>포인트 교환하기</h4>
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
          주문하기
        </button>
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

export default ShopingModal;
