import { Link, Outlet } from "react-router-dom";
import "./SideBar.css";

function Post() {
  return (
    <div className="contents">
      <div className="postMenus">
        <Link className="sidebar-item" to={"/myPage/writing"}>
          내가 쓴 글
        </Link>
      </div>
      <div className="postMenus">
        <Link className="sidebar-item" to={"/myPage/review"}>
          내가 쓴 후기
        </Link>
      </div>
      <div className="postMenus">
        <Link className="sidebar-item" to={"/myPage/inquiry"}>
          문의내역
        </Link>
      </div>
    </div>
  );
}

export default Post;
