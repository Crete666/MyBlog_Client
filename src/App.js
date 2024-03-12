import React, { Fragment } from "react";
import "./App.css";
import CenterBoardComponent from "./centerBoard";
import SideLeftComponent from "./sideLeft";
import SideRightComponent from "./sideRight";
import HeaderComponent from "./header";
function App() {
  return (
    <Fragment>
      <div>
        <div id="header">
          <div id="header-area">
            <HeaderComponent />
          </div>
        </div>
        <div id="body">
          <div id="body-area">
            <div id="side-left">
              <SideLeftComponent />
            </div>
            <div id="center">
              <CenterBoardComponent />
              <h1>상세 내용ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ</h1>
            </div>
            <div id="side-right">
              <SideRightComponent />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
