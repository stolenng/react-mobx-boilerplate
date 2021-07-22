import React from "react";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import MainRouter from "./main-router";

const LoggedIn = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <MainRouter />
        </Route>
        <Route path="/home">
          <div>Home</div>
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default LoggedIn;
