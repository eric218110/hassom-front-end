import * as React from "react";
import { Container, Text } from "./styles";
import { BsFillHouseFill } from "react-icons/bs";
import { MdSecurity } from "react-icons/md";
import { FaRegCreditCard } from "react-icons/fa";
import { TextButton } from "../../library/Button/";

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
          <TextButton key={item.title}>
            <item.icon size={22} />
            <Text>{item.title}</Text>
          </TextButton>
        ))}
      </Container>
    </React.Fragment>
  );
};
