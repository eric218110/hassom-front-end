import { DefaultTheme } from "styled-components";

export const dark: DefaultTheme = {
  name: "dark",
  color: {
    ripple: "#262626",
    primary: "#9575CD",
    primaryVariant: "#3700B3",
    secundary: "#55163b",
    secundaryVariant: "#6c1e56",
    text: {
      default: "#FAFAFA",
      primary: "#EEEEEE",
      secundary: "#9E9E9E",
      strong: "#FFFFFF",
    },
    background: {
      default: "#242424",
      paper: "#071329",
      hover: "#2D2D2D",
      secundary: "#8A5D6D",
      secundaryVariant: "#403D3E",
    },
  },
  size: {
    container: "1200px",
    max: "100vw",
    text: "12px",
    weight: "600px",
  },
  style: {
    padding: "5px 25px",
    borderRadius: "5px",
  },
  time: {
    ripple: 600,
  },
};

export const light: DefaultTheme = {
  name: "light",
  color: {
    ripple: "#E5E5E5",
    primary: "#6200EE",
    primaryVariant: "#3700B3",
    secundary: "#741F51",
    secundaryVariant: "#902271",
    text: {
      default: "#071329",
      primary: "#424242",
      secundary: "#757575",
      strong: "#212121",
    },
    background: {
      default: "#F1F3F6",
      paper: "#9FA1A4",
      hover: "#CFD8DC",
      secundary: "#EFC3D6",
      secundaryVariant: "#F2F1F4",
    },
  },
  size: {
    container: "1200px",
    max: "100vw",
    text: "12px",
    weight: "600px",
  },
  style: {
    padding: "5px 25px",
    borderRadius: "5px",
  },
  time: {
    ripple: 600,
  },
};
