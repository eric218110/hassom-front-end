import * as React from "react";
import { Container } from "./styles";

export const PanelItem: React.FC = ({ children }) => {
  return (
    <React.Fragment>
      <Container>{children}</Container>
    </React.Fragment>
  );
};
