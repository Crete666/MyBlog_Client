import "./index.css";
import { Link } from "react-router-dom";
function header() {
  return (
    <div id="home">
      <div id="Logo">
        <a href="/myblog">
          <img src="../images/Logo.png" alt="로고" />
        </a>
      </div>
      <div id="information">
        <b> Made by 최지혁</b>
        <a href="https://github.com/Crete666?tab=repositories" target="_blank">
          Github
        </a>
      </div>
    </div>
  );
}

export default header;
