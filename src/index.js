import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./index.scss";
import App from "./components/App";
import Jokes from "./components/Jokes";
import MusicMaster from "./projects/music-master";
import Header from "./Header";

ReactDOM.render(
  <React.Fragment>
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <Header>
              <App />
            </Header>
          )}
        />
        <Route
          path="/jokes"
          render={() => (
            <Header>
              <Jokes />
            </Header>
          )}
        />
        <Route
          path="/music-master"
          render={() => (
            <Header>
              <MusicMaster />
            </Header>
          )}
        />
      </Switch>
    </BrowserRouter>
  </React.Fragment>,
  document.getElementById("root")
);
