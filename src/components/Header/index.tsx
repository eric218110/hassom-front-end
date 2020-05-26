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
  ContainerIcon,
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
import { motion } from "framer-motion";
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
            <motion.div
              initial={{ scale: 0 }}
              animate={{ rotate: 360, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                delay: 0.5,
                damping: 20,
              }}
              whileHover={{
                scale: 1.2,
                transition: { duration: 0.5 },
              }}
              whileTap={{ scale: 0.9 }}
            >
              <IconButton>
                <MdHeadset size={34} />
              </IconButton>
            </motion.div>
          </ItemHeader>
          <ItemsHeader>
            <TextTitle>
              <TextButton>hassom</TextButton>
            </TextTitle>
            <TextDecorated>Sua loja de música</TextDecorated>
          </ItemsHeader>
          <ItemHeader>
            <IconContainer>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ rotate: 360, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  delay: 0.5,
                  damping: 20,
                }}
                whileHover={{
                  scale: 1.2,
                  transition: { duration: 0.5 },
                }}
                whileTap={{ scale: 0.9 }}
              >
                {theme.darkMode ? (
                  <ContainerIcon
                    onClick={() => {
                      toggleTheme({ darkMode: theme.darkMode });
                    }}
                  >
                    <MdBrightness5
                      style={{ margin: "1rem", cursor: "pointer" }}
                      size={24}
                    />
                  </ContainerIcon>
                ) : (
                  <ContainerIcon
                    onClick={() => {
                      toggleTheme({ darkMode: theme.darkMode });
                    }}
                  >
                    <MdBrightness4
                      style={{ margin: "1rem", cursor: "pointer" }}
                      size={24}
                    />
                  </ContainerIcon>
                )}
              </motion.div>

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
