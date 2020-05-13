import * as React from "react";
import { Container, GroupItems, Text } from "./styles";
import { FaRegCreditCard } from "react-icons/fa";
import { GrDeliver } from "react-icons/gr";
import { MdSecurity } from "react-icons/md";

export const CardInformation: React.FC = () => {
  return (
    <React.Fragment>
      <Container>
        <GroupItems>
          <FaRegCreditCard size={22} color={"#000"} />
          <Text>Compre no cartão</Text>
        </GroupItems>
        <GroupItems>
          <GrDeliver size={22} color={"#000"} />
          <Text>entrega em todo brasil</Text>
        </GroupItems>
        <GroupItems>
          <MdSecurity size={22} color={"#000"} />
          <Text>segurança garantida</Text>
        </GroupItems>
      </Container>
    </React.Fragment>
  );
};
