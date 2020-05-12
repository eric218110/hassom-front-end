import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { GlobaStyles } from "../Global/styles";
import HomePage from "../pages/HomePage";

export const Routes: React.FC = () => {
  return (
    <React.Fragment>
      <GlobaStyles />
      <Router>
        <Switch>
          <Route exact path={"/"} component={HomePage}></Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
};
