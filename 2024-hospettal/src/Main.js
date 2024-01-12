import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./component/App.js";
// import HomePage from './pages/HomePage';
import MedicalList from './pages/MedicalList';
// import QuestionListPage from './pages/QuestionListPage';
import CoursePage from './pages/CoursePage';
import Login from './component/Login';
import Logout from './component/Logout';
import WishlistPage from "./pages/WishlistPage";

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
        
          <Route path="courses">
            <Route index element={<MedicalList />}/>
            <Route path=":courseSlug" element={<CoursePage />}/>
          </Route>

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
