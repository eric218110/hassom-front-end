import * as React from "react";
import {
  Container,
  TopContainer,
  ItemHeader,
  ItemsHeader,
  TextDecorated,
  TextTitle,
  BottomContainer,
  ItemsBottom,
  IconContainer,
} from "./styles";

import { IconButton } from "../library/Button";

import {
  MdHeadset,
  MdExitToApp,
  MdPersonPin,
  MdBrightness4,
  MdBrightness5,
} from "react-icons/md";

import { FiMoreVertical } from "react-icons/fi";

import { TextButton } from "../library/Button";

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
            <IconButton>
              <MdHeadset size={34} />
            </IconButton>
          </ItemHeader>
          <ItemsHeader>
            <TextTitle>
              <TextButton>hassom</TextButton>
            </TextTitle>
            <TextDecorated>Sua loja de música</TextDecorated>
          </ItemsHeader>
          <ItemHeader>
            <IconContainer>
              {
                darkMode 
                ? <IconButton><MdBrightness5 size={24} /></IconButton>
                : <IconButton><MdBrightness4 size={24} /></IconButton>
              }
              {
                userActive
                ? <IconButton><MdExitToApp size={24} /></IconButton>
                :<IconButton><MdPersonPin size={24} /></IconButton>
              }
              <IconButton>
                <FiMoreVertical size={24} />
              </IconButton>
            </IconContainer>
          </ItemHeader>
        </TopContainer>
        <BottomContainer>
          <ItemsBottom>
            <TextButton>acessórios</TextButton>
          </ItemsBottom>
          <ItemsBottom>
            <TextButton>categorias</TextButton>
          </ItemsBottom>
          <ItemsBottom>
            <TextButton>meus pedidos</TextButton>
          </ItemsBottom>
          <ItemsBottom>
            <TextButton>ofertas</TextButton>
          </ItemsBottom>
          <ItemsBottom>
            <TextButton>fale conosco</TextButton>
          </ItemsBottom>
        </BottomContainer>
      </Container>
    </React.Fragment>
  );
};
