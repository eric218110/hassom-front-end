import { DefaultTheme } from "styled-components";

export const dark: DefaultTheme = {
  color: {
    primary: "#BB86FC",
    primaryVariant: "#3700B3",
    secundary: "#03DAC6",
    secundaryVariant: "#018786",
    text: {
      default: "#FAFAFA",
      primary: "#EEEEEE",
      secundary: "#9E9E9E",
      strong: "#FFFFFF",
    },
    background: {
      default: "#242424",
      paper: "#121212",
      hover: "#2D2D2D",
    },
  },
  size: {
    container: "1000px",
    max: "100vw",
    text: "12px",
  },
};

export const light: DefaultTheme = {
  color: {
    primary: "#6200EE",
    primaryVariant: "#3700B3",
    secundary: "#03DAC6",
    secundaryVariant: "#018786",
    text: {
      default: "#515151",
      primary: "#424242",
      secundary: "#757575",
      strong: "#212121",
    },
    background: {
      default: "#F1F3F6",
      paper: "#9FA1A4",
      hover: "#CFD8DC",
    },
  },
  size: {
    container: "1000px",
    max: "100vw",
    text: "12px",
  },
};
