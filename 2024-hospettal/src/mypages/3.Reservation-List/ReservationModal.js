import styless from "./ReservationModal.module.css";
import style from "../Modal.module.css";
import { ReactComponent as Close } from "../../assets/icon/icon-close_w.svg";
import { getData } from "../../firebase";
import { useEffect, useState } from "react";

function ReservationModal({ setModalOpen, messageNo }) {
  const [Reserv, setReserv] = useState();

  const handleLoad = async () => {
    const data = await getData(
      "MyPageCustomer-Reservation",
      "no",
      "==",
      messageNo
    );
    setReserv (data);
  };

  useEffect(() => {
    handleLoad();
  }, []);


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
        <from className={styless.bookingList}>
          
            <div className={styless.container}>
              <label className={styless.label}>
                보호자 성명
              </label>
              <p className={styless.text}>{Reserv?.name}</p>
            </div>
            <div className={styless.container}>
              <label className={styless.label}>
                펫 이름
              </label>
              <p className={styless.text}>{Reserv?.petName}</p>
            </div>
            <div className={styless.container}>
              <label className={styless.label}>
                펫 종류
              </label>
              <p className={styless.text}>{Reserv?.petType}</p>
            </div>
            <div className={styless.container}>
              <label className={styless.label}>
                연락처
              </label>
              <p className={styless.text}>{Reserv?.phoneNumber}</p>
            </div>
            <div className={styless.container}>
              <label className={styless.label}>
                병원명
              </label>
              <p className={styless.text}>{Reserv?.hospital}</p>
            </div>
            <div className={styless.container}>
              <label className={styless.label}>
                예약일지
              </label>
              <p className={styless.text}>{Reserv?.reservationDate}</p>
            </div>
            <div className={styless.container}>
              <label className={styless.label}>
                증상 또는 병명
              </label>
              <p className={styless.text}>{Reserv?.symptom}</p>
            </div>

          
        </from>

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
