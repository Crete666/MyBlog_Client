import React from "react";
import "./index.css";
import axios from "axios";
import dayjs from "dayjs";
import { API_URL } from "../config/constants.js";
import { Link } from "react-router-dom";
import { Divider } from "antd";

function CenterBoard() {
  const [boards, setBoards] = React.useState([]);
  React.useEffect(function () {
    axios
      .get(`${API_URL}/boards`)
      .then(function (result) {
        const boards = result.data.board;
        setBoards(boards);
      })
      .catch(function (error) {
        console.error("에러 발생 : ", error);
      });
  }, []);
  return (
    <div id="blog-board">
      <div className="board-title">
        <span className="head-text">글제목</span>
      </div>
      <div className="board-createAt">
        <span className="head-text">작성일</span>
      </div>
      {boards.map(function (board, index) {
        return (
          <Link className="detail-link" to={`/${board.id}`}>
            <div className="center-board-row">
              <div className="board-title">{board.title}</div>
              <div className="board-createAt">
                {dayjs(board.createdAt).format("YYYY-MM-DD")}
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default CenterBoard;
