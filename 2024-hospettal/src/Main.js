import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./component/App.js";
import MedicalList from './pages/MedicalList';
// import CoursePage from './pages/CoursePage';
import MyPage from './pages/MyPage';

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
        
          <Route path="courses">
            <Route index element={<MedicalList />}/>
            {/* <Route path=":courseSlug" element={<CoursePage />}/> */}
          </Route>
          <Route path="MyPage">
          <Route index element={<MyPage />}/>
            {/* <Route path={<QuestionListPage />}/> */}
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
