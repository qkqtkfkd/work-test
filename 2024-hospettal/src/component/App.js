import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import "./App.font.css";
import Footer from "./Footer";
import "./App.css";
import { classNames } from "classnames";


function App() {
  return (
    <div
      className="AppContainer"
      style={{
        display: "flex",
        width: "100%",
        flexDirection: "column",
        minHeight: "100vh",
        backgroundColor: "#F8EBD8",
      }}
    >
      <Nav />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
