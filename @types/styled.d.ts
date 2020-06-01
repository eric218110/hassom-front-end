import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    name: string;
    color: {
      primary: string;
      primaryVariant: string;
      secundary: string;
      secundaryVariant: string;
      background: {
        default: string;
        paper: string;
        hover: string;
        secundary: string;
        secundaryVariant: string;
      };
      ripple: string;
      text: {
        default: string;
        primary: string;
        secundary: string;
        strong: string;
      };
    };
    size: {
      container: string;
      max: string;
      text: string;
      weight: string;
    };
    style: {
      padding: string;
      borderRadius: string;
    };
    time: {
      ripple: number;
    };
  }
}
