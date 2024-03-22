import "./App.css";
import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";

import CenterBoardComponent from "./centerBoard";
import DetailBoardComponent from "./detailBoard";
import SideLeftComponent from "./sideLeft";
import SideRightComponent from "./sideRight";
import HeaderComponent from "./header";
import InsertDataComponent from "./insertData";

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
              <div id="last-content">
                <Switch>
                  <Route exact={true} path="/myblog">
                    <DetailBoardComponent />
                  </Route>
                  <Route exact={true} path="/myblogadmin">
                    <InsertDataComponent />
                  </Route>
                  <Route exact={true} path="/myblog/:id">
                    <DetailBoardComponent />
                  </Route>
                </Switch>
              </div>
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
