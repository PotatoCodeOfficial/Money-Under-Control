import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.css";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import App from "./components/App/App";
import Landing from "./components/Landing/Landing";
const routing = (
  <Router>
    <Route exact path="/" component={App} />
    <Route exact path="/landing" component={Landing} />
  </Router>
);
ReactDOM.render(routing, document.getElementById("root"));
