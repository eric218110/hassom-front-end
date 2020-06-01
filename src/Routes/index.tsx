import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";

export const Routes: React.FC = () => {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route exact path={"/"} component={HomePage} />
          <Route exact path={"/login"} component={LoginPage} />
        </Switch>
      </Router>
    </React.Fragment>
  );
};
