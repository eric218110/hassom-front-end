import * as React from "react";
import { ApplicationStateReducer } from "../../store/";
import { toggleTheme } from "../../store/theme/actions.theme";
import { ThemeState } from "../../store/theme/types.theme";
import { FiMoreVertical } from "react-icons/fi";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { IconButton, MotionIcon } from "../library/Button/styles";
import { TextButton } from "../library/Button";
import {
  Container,
  TopContainer,
  ItemHeader,
  ItemsHeader,
  TextDecorated,
  TextTitle,
  IconContainer,
} from "./styles";
import {
  MdHeadset,
  MdExitToApp,
  MdPersonPin,
  MdBrightness4,
  MdBrightness5,
} from "react-icons/md";

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
            <MotionIcon>
              <IconButton>
                <MdHeadset size={34} />
              </IconButton>
            </MotionIcon>
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
                <MotionIcon
                  onClick={() => {
                    toggleTheme({ darkMode: theme.darkMode });
                  }}
                >
                  <MdBrightness5
                    style={{ margin: "1rem", cursor: "pointer" }}
                    size={24}
                  />
                </MotionIcon>
              ) : (
                <MotionIcon
                  onClick={() => {
                    toggleTheme({ darkMode: theme.darkMode });
                  }}
                >
                  <MdBrightness4
                    style={{ margin: "1rem", cursor: "pointer" }}
                    size={24}
                  />
                </MotionIcon>
              )}
              <MotionIcon>
                {userActive ? (
                  <IconButton>
                    <MdExitToApp size={24} />
                  </IconButton>
                ) : (
                  <Link to={"login"}>
                    <IconButton>
                      <MdPersonPin size={24} />
                    </IconButton>
                  </Link>
                )}
              </MotionIcon>
              <MotionIcon>
                <IconButton>
                  <FiMoreVertical size={24} />
                </IconButton>
              </MotionIcon>
            </IconContainer>
          </ItemHeader>
        </TopContainer>
      </Container>
    </React.Fragment>
  );
};

const MapStateToProps = (state: ApplicationStateReducer) => ({
  theme: state.theme,
});

export default connect(MapStateToProps, { toggleTheme })(Header);
