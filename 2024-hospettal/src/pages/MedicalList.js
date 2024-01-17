import ListPage from "../component/ListPage";
import styles from "./MedicalList.module.css";
import searchBarStyles from "../component/SearchBar.module.css";
import searchIcon from "../assets/search.svg";
import { getDatas } from "../api/Firebase";
import { useEffect, useRef, useState } from "react";
import Warn from "../component/Warn";
import CourseItem from "../component/CourseItem";
import Button from "./Button";
import Rechart from "./Rechart";
import styled from "styled-components";
import SearchCarousel from "./SearchCarousel";


let listItems;

function CourseListPage() {
  const [items, setItems] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [isInit, setIsInit] = useState(true);

  const handleKeywordChange = (e) => {
    setKeyword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchItems = listItems.filter(({ title }) =>
      title.includes(keyword)
    );
    setItems(searchItems);
  };

  const handleLoad = async () => {
    const items = await getDatas("courses");
    listItems = items;
    setItems(items);
    setIsInit(false);
  };
  useEffect(() => {
    handleLoad();
  }, []);



  return (
    <ListPage variant="catalog" title="진료비 상세 내역조회">
      <form className={searchBarStyles.form} onSubmit={handleSubmit}>
        <input
          name="keyword"
          value={keyword}
          onChange={handleKeywordChange}
          placeholdr="검색으로 병원 찾기"
        />
        <button type="submit">
          <img src={searchIcon} alt="검색" />
        </button>
      </form>

      <div className="btnChoice">
        <Button className="gps-BTN">현위치 </Button>
        <Button className="add-BTN">주소 선택 </Button>
      </div>

      <div style={{ width: 300, height: 300 }}>
        <Rechart />
      </div>

      <div className={SearchCarousel}>  

      </div>

      {items.length === 0 && !isInit ? (
        <Warn
          className={styles.emptyList}
          title="병명을 입력해 주세요."
          description="올바른 병명이 맞는지 다시 한번 확인해 보세요."
        />
      ) : (
        <div className={styles.courseList}>
          {items.map((course) => (
            <CourseItem key={course.docId} course={course} />
          ))}
        </div>
      )}
    </ListPage>
  );
}

export default CourseListPage;
