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
      <Router>
        <Switch>
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
