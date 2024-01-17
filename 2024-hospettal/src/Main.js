import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./component/App.js";
// import HomePage from './pages/HomePage';
import MedicalList from './pages/MedicalList';
// import QuestionListPage from './pages/QuestionListPage';
import CoursePage from './pages/CoursePage';
import MyPage from './pages/MyPage';
import Login from './component/Login';
import Logout from './component/Logout';

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
        
          <Route path="courses">
            <Route index element={<MedicalList />}/>
            <Route path=":courseSlug" element={<CoursePage />}/>
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
