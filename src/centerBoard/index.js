import "./index.css";
function centerBoard() {
  return (
    <div id="blog-board">
      <table>
        <thead>
          <tr>
            <th>
              <div className="board-title">
                <span className="head-text">글제목</span>
              </div>
            </th>
            <th>
              <div className="board-createAt">
                <span className="head-text">작성일</span>
              </div>
            </th>
          </tr>
        </thead>
      </table>
    </div>
  );
}

export default centerBoard;
