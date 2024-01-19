import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import App from "./component/App.js";
import MedicalList from "./pages/코스/MedicalList.js";
// import CoursePage from './pages/CoursePage';
import { styled } from "styled-components";

import MyPage from "./pages/MyPage";
import SideBar from "./pages/SideBar";
import Guardian from "./pages/Guardian";
import Reservation from "./pages/Reservation";

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          {/* <Route path="courses">
            <Route index element={<MedicalList />} />
          </Route> */}

          <Route path="myPage" element={<MyPage />}>
            <Route path="guardian" element={<Guardian />} />
            <Route path="reservation" element={<Reservation />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
