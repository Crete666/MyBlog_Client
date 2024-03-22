import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./index.css";

import axios from "axios";
import { API_URL } from "../config/constants.js";
import dayjs from "dayjs";

function DetailBoard() {
  const { id } = useParams();
  const [board, setBoard] = useState(null);

  const getBoard = () => {
    axios
      .get(`${API_URL}/boards/${id}`)
      .then(function (result) {
        setBoard(result.data.board);
        console.log(result.data.board);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const getBoardRecently = () => {
    axios
      .get(`${API_URL}/boardsRecently`)
      .then(function (result) {
        setBoard(result.data.board);
        console.log(result.data.board);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  useEffect(function () {
    if (!id) {
      console.log("id : null 이다");
      getBoardRecently();
    } else {
      console.log("id : ", id);
      getBoard();
    }
  }, []);

  if (board == null) {
    return <h1>게시글 정보를 받고 있습니다.</h1>;
  }

  return (
    <div>
      <div id="detail-head">
        <div id="detail-title">{board.title}</div>
        <div id="detail-createAt">
          <span id="detail-createAt-text">
            {dayjs(board.createdAt).format("YYYY-MM-DD")}
          </span>
        </div>
      </div>
      <div id="detail-content">{board.contents}</div>
    </div>
  );
}

export default DetailBoard;
