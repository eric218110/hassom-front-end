import * as React from "react";
import { Container, GroupItems, Text } from "./styles";
import { BsFillHouseFill } from "react-icons/bs";
import { MdSecurity } from "react-icons/md";
import { FaRegCreditCard } from "react-icons/fa";
import Ink from "react-ink";

const itens = [
  { title: "Compre no cartão", icon: FaRegCreditCard },
  { title: "Entrega em todo brasil", icon: BsFillHouseFill },
  { title: "Segurança garantida", icon: MdSecurity },
];

export const CardInformation: React.FC = () => {
  return (
    <React.Fragment>
      <Container>
        {itens.map((item) => (
          <GroupItems key={item.title}>
            <Ink />
            <item.icon size={22} />
            <Text>{item.title}</Text>
          </GroupItems>
        ))}
      </Container>
    </React.Fragment>
  );
};
