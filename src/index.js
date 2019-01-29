import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./index.scss";
import App from "./components/App";
import Jokes from "./components/Jokes";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/jokes" component={Jokes} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
