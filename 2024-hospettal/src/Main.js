import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import App from "./component/App.js";
import MedicalList from "./pages/코스/MedicalList.js";
// import CoursePage from './pages/CoursePage';
import { styled } from "styled-components";

import MyPage from "./pages/MyPage";
import SideBar from "./pages/SideBar";
import Guardian from "./pages/Guardian.js";
import Reservation from "./pages/Reservation.js";
import Writing from "./pages/Writing.js";
import Review from "./pages/Review.js";
import Inquiry from './pages/Inquiry';
import SentMessage from './pages/SentMessage';
import MessageReceived from './pages/MessageReceived';

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
            
            <Route path="writing" element={<Writing />} />
            <Route path="review" element={<Review />} />
            <Route path="inquiry" element={<Inquiry />} />
            
            <Route path="MessageReceived" element={<MessageReceived />} />
            <Route path="SentMessage" element={<SentMessage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
