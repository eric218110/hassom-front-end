import * as React from "react";
import {
  Container,
  TopContainer,
  ItemHeader,
  ItemsHeader,
  TextDecorated,
  TextTitle,
  Divider,
  BottomContainer,
  ItemsBottom,
} from "./styles";

import {
  MdHeadset,
  MdMenu,
  MdExitToApp,
  MdPersonPin,
  MdBrightness4,
  MdBrightness5,
} from "react-icons/md";
import Ink from "react-ink";

interface IProps {
  userActive: boolean;
  darkMode: boolean;
}

export const Header: React.FC<IProps> = ({ darkMode, userActive }) => {
  return (
    <React.Fragment>
      <Container>
        <TopContainer>
          <ItemHeader>
            <MdHeadset color={"#000"} size={34} />
          </ItemHeader>
          <ItemsHeader>
            <TextTitle>
              <Ink />
              hassom
            </TextTitle>
            <TextDecorated>Sua loja de música</TextDecorated>
          </ItemsHeader>
          <ItemHeader>
            {darkMode ? (
              <MdBrightness4 color={"#616161"} size={18} />
            ) : (
              <MdBrightness5 color={"#616161"} size={18} />
            )}
            <Divider />
            <MdMenu color={"#616161"} size={18} />
            <Divider />
            {userActive ? (
              <MdPersonPin color={"#616161"} size={18} />
            ) : (
              <MdExitToApp color={"#616161"} size={18} />
            )}
          </ItemHeader>
        </TopContainer>
        <BottomContainer>
          <ItemsBottom>
            <Ink />
            acessórios
          </ItemsBottom>
          <ItemsBottom>
            <Ink />
            categorias
          </ItemsBottom>
          <ItemsBottom>
            <Ink />
            meus pedidos
          </ItemsBottom>
          <ItemsBottom>
            <Ink />
            ofertas
          </ItemsBottom>
          <ItemsBottom>
            <Ink />
            fale conosco
          </ItemsBottom>
        </BottomContainer>
      </Container>
    </React.Fragment>
  );
};
