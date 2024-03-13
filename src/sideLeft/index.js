import "./index.css";
import { Link } from "react-router-dom";
function sideLeft() {
  return (
    <div>
      <h2>Project</h2>
      <div className="project">
        <b>Hearus</b>
        <div className="project-box">
          <a
            href="https://www.notion.so/Hearus-d8ecf198205f416483bae3a741ec7fb3?pvs=4"
            target="_blank"
          >
            <img
              className="project-image"
              src="./images/Hearus.jpg"
              alt="hearus"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default sideLeft;
