import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./../scss/main.scss";

import Home from "./pages/Home.jsx";
import Users from "./pages/Users.jsx";
import Nodes from "./pages/Nodes.jsx";

render(
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/users" component={Users} />
      <Route exact path="/nodes" component={Nodes} />
    </Switch>
  </Router>,
  document.getElementById("app")
);
