import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { GlobaStyles } from "../Global/styles";
import HomePage from "../pages/HomePage";
import { ThemeProvider } from "styled-components";

import { light } from "../theme";

export const Routes: React.FC = () => {
  return (
    <React.Fragment>
      <ThemeProvider theme={light}>
        <GlobaStyles />
        <Router>
          <Switch>
            <Route exact path={"/"} component={HomePage} />
          </Switch>
        </Router>
      </ThemeProvider>
    </React.Fragment>
  );
};
