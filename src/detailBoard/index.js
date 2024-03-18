import "./index.css";
function detailBoard() {
  return (
    <div>
      <div id="detail-head">
        <div id="detail-title">제목</div>
        <div id="detail-createAt">
          <span id="detail-createAt-text">작성일</span>
        </div>
      </div>
      <div id="detail-content">내용</div>
    </div>
  );
}

export default detailBoard;
