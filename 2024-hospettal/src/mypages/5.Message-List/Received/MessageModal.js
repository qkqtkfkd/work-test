import style from "../../Modal.module.css";
import { ReactComponent as Close } from "../../../assets/icon/icon-close_w.svg";
import styless from "../MessageModal.module.css";

function MessageModal({ setModalOpen }) {
  return (
    <div className={style.modalbox} style={{ width: "70rem", height: "40rem" }}>
      <div className={style.header}>
        <h4>받은 메세지</h4>
        <button
          className={style.closebtn}
          onClick={() => {
            setModalOpen(false);
          }}
        >
          <Close />
        </button>
      </div>
      <div className={styless.Messagebody}>
      <from className={styless.mms}>
        <p>안녕하세요? 금희는 소인가요?</p>
      </from>

      <div className={style.btnbox}>
        <button
          className={style.button2}
          type="submit"
          onClick={() => {
            setModalOpen(false);
          }}
        >
          신고하기
        </button>
        <button
          className={style.button2}
          type="submit"
          onClick={() => {
            setModalOpen(false);
          }}
        >
          삭제하기
        </button>
      </div>
    </div>
    </div>
  );
}

export default MessageModal;
