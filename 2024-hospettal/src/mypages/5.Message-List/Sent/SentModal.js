import style from "../../Modal.module.css";
import { ReactComponent as Close } from "../../../assets/icon/icon-close_w.svg";
import styless from "../MessageModal.module.css";
import { firestore, collection, getDoc, doc, getData, updateDatas } from "../../../firebase";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function SentModal({ setModalOpen }) {
  const [MessageS, setMessageS] = useState([]);
  const { courseSlug } = useParams();

   useEffect(() => {
    const fetchData = async ({}) => {
    //   try {
    //     const data = await getData(); // 파이어베이스에서 데이터 가져오는 함수
    //     setMessageS(data); // 가져온 데이터를 상태 변수에 설정
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };
    // fetchData(); // 데이터 가져오는 함수 호출

  };})

  const handleLoad = async () => {
    const result = await getData("MyPageCustomer-MessageS", "content", "==", courseSlug);
    setMessageS(result);
  };

  useEffect(() => {
    handleLoad();
  }, []);




  return (
    <div className={style.modalbox} style={{ width: "70rem", height: "40rem" }}>
      <div className={style.header}>
        <h4>보낸 메세지</h4>
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
            <p>
              {MessageS?.content}
              {/* 혹시 가다랑어포 소도 먹을 수 있을까요?....
                  <br />
                  소를 키우는데 저희 금희한테도 간식을 주고 싶어서
                  여쭤봅니다.... */}
            </p>
          </from>
        

        <div className={style.btnbox}>
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

export default SentModal;
