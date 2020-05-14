import * as React from "react";
import { connect } from "react-redux";
import { ThemeState } from "../store/theme/types.theme";
import { ApplicationStateReducer } from "../store";
import { dark, light } from "../theme";
import { DefaultTheme, ThemeProvider } from "styled-components";
import { GlobaStyles } from "../Global/styles";
import { Routes } from "../Routes";

interface IProps {
  theme: ThemeState;
}

const Core: React.FC<IProps> = ({ theme }) => {
  function currentTheme(): DefaultTheme {
    return theme.darkMode ? dark : light;
  }

  return (
    <React.Fragment>
      <ThemeProvider theme={currentTheme()}>
        <GlobaStyles />
        <Routes />
      </ThemeProvider>
    </React.Fragment>
  );
};

const MapStateToProps = (state: ApplicationStateReducer) => ({
  theme: state.theme,
});

export default connect(MapStateToProps)(Core);
