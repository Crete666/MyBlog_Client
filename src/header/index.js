import "./index.css";
import { Link } from "react-router-dom";
function header() {
  return (
    <div id="home">
      <div id="Logo">
        <Link to="/">
          <img src="./images/Logo.png" alt="로고" />
        </Link>
      </div>
      <div id="information">
        <b> Made by 최지혁</b>
      </div>
    </div>
  );
}

export default header;