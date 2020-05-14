import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "../pages/HomePage";

export const Routes: React.FC = () => {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route exact path={"/"} component={HomePage} />
        </Switch>
      </Router>
    </React.Fragment>
  );
};
