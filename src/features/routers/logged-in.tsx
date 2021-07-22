import React from "react";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import MainRouter from "./main-router";
import Home from "../home/home";
import { Card } from "antd";

const LoggedIn = () => {
  return (
    <Card className="site-content">
      <Router>
        <Switch>
          <Route exact path="/">
            <MainRouter />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Redirect to="/" />
        </Switch>
      </Router>
    </Card>
  );
};

export default LoggedIn;
