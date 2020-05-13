import * as React from "react";
import { Container } from "./styles";
import { CardInformation } from "./CardInformation";

export const Body: React.FC = () => {
  return (
    <Container>
      <CardInformation />
    </Container>
  );
};
