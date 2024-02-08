import React, { useEffect, useState } from "react";
import CommonTable from "../../table/CommonTable";
import CommonTableColumn from "../../table/CommonTableColumn";
import CommonTableRow from "../../table/CommonTableRow";
import { postList } from "./Data";
import Overlay from "../../Overlay";
import WritingModal from "./WritingModal";

import { firestore } from "../../../firebase";

const WritingList = props => {
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    setDataList(postList);
  }, []);

// //////////////////

  useEffect(() => {
    // PostingW이라는 변수로 firestore의 collection인 ~-PostingW에 접근!
    const PostingW = firestore.collection("MyPageCustomer-PostingW");
    // collection의 document인 "ADl4LUogsYVrrSe9SCTp"을 가져온다.
    
    // 모든 document 가져오기
    PostingW.get().then((docs) => {
      // 반복문으로 docuemnt 하나씩 확인
      docs.forEach((doc) => {
        if (doc.exists) {
          // document의 데이터
          console.log(doc.data());
          // document의 id
          console.log(doc.id);
        }
      });
    });
  });



  // ///////////////////
  // let [modalOpen, setModalOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedNo, setSelectedNo] = useState(null);
  
  const openModal = (no) => {
    setSelectedNo(no);
    setModalOpen(true);
  };


  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [modalOpen]);

  return (
    <>
      <CommonTable headersName={["", "번호", "제목", "작성글", "작성일"]}>
        {dataList
          ? dataList.map((item, index) => {
              return (
                <CommonTableRow key={index}>
                  <CommonTableColumn>
                    <input type={item.checkbox} />
                  </CommonTableColumn>
                  <CommonTableColumn>{item.no}</CommonTableColumn>
                  <CommonTableColumn>
                  <p
                      onClick={() => {
                        openModal(item.no);
                      }}
                    >
                      {item.title}
                    </p>
                  </CommonTableColumn>
                  <CommonTableColumn>{item.property}</CommonTableColumn>
                  <CommonTableColumn>{item.createDate}</CommonTableColumn>
                </CommonTableRow>
              );
            })
          : ""}
      </CommonTable>

      {modalOpen && <Overlay modalOpen={modalOpen} />}
      {modalOpen && <WritingModal setModalOpen={setModalOpen} selectedNo={selectedNo} />}
    </>
  );
};
export default WritingList;
