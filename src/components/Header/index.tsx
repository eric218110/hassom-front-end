import * as React from "react";
import { ApplicationStateReducer } from "../../store/";
import { toggleTheme } from "../../store/theme/actions.theme";
import { ThemeState } from "../../store/theme/types.theme";

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

import { IconButton, TextButton } from "../library/Button";
import {
  MdHeadset,
  MdExitToApp,
  MdPersonPin,
  MdBrightness4,
  MdBrightness5,
} from "react-icons/md";
import { FiMoreVertical } from "react-icons/fi";
import { IconButton as ButtonIcon } from "../library/Button";
import { connect } from "react-redux";

interface IProps {
  theme: ThemeState;
  toggleTheme: typeof toggleTheme;
}

const Header: React.FC<IProps> = ({ theme, toggleTheme }) => {
  const userActive = false;
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
              {theme.darkMode ? (
                <IconButton>
                  <MdBrightness5 size={24} />
                </IconButton>
              ) : (
                <IconButton>
                  <MdBrightness4 size={24} />
                </IconButton>
              )}
              {userActive ? (
                <IconButton>
                  <MdExitToApp size={24} />
                </IconButton>
              ) : (
                <IconButton>
                  <MdPersonPin size={24} />
                </IconButton>
              )}
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

const MapStateToProps = (state: ApplicationStateReducer) => ({
  theme: state.theme,
});

export default connect(MapStateToProps, { toggleTheme })(Header);
