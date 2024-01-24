import { Link, Outlet } from "react-router-dom";
import "./SideBar.css";

function Message() {
  return (
    <div className="contents">
      <div className="postMenus">
        <Link className="sidebar-item" to={"/myPage/messageReceived"}>
          받은 메시지
        </Link>
      </div>
      <div className="postMenus">
        <Link className="sidebar-item" to={"/myPage/sentMessage"}>
          보낸 메시지
        </Link>
      </div>
    </div>
  );
}

export default Message;
