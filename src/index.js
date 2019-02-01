import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./index.scss";
import App from "./components/App";
import Jokes from "./components/Jokes";
import MusicMaster from "./projects/music-master";
import Header from "./Header";
import EvensOrOdds from "./projects/evens-or-odds";

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
        <Route
          path="/evens-or-odds"
          render={() => (
            <Header>
              <EvensOrOdds />
            </Header>
          )}
        />
      </Switch>
    </BrowserRouter>
  </React.Fragment>,
  document.getElementById("root")
);
