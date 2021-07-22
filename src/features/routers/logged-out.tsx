import React from "react";
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Login from "../login/login";
import { Row } from "antd";

const LoggedOut = () => {
  return (
    <Row justify="center" align="middle" className="logged-out-container">
      <h2>{/*Aggua Future Logo*/}</h2>
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">Register</Route>
          <Redirect to="/login" />
        </Switch>
      </Router>
    </Row>
  );
};

export default LoggedOut;
