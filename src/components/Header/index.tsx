import * as React from "react";
import { ApplicationStateReducer } from "../../store/";
import { toggleTheme } from "../../store/theme/actions.theme";
import { ThemeState } from "../../store/theme/types.theme";
import { destroySessionAuth } from "../../store/auth/actions.auth";
import { AuthState } from "../../store/auth/types.auth";
import { FiMoreVertical, FiLogIn } from "react-icons/fi";
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
  MenuContainer,
  MenuContent,
  MenuList,
  MenuItem,
  Text,
} from "./styles";
import {
  MdHeadset,
  MdExitToApp,
  MdPersonPin,
  MdBrightness4,
  MdBrightness5,
  MdSettings,
} from "react-icons/md";
import { toast, ToastPosition, ToastContainer } from "react-toastify";
import { BsPersonLinesFill } from "react-icons/bs";
import { Icons } from "../library/Button/Icon";
import { Divider } from "../Tabs/styles";
import { IoMdHelp } from "react-icons/io";
import { RiLoginCircleLine } from "react-icons/ri";
import { FaRegUserCircle } from "react-icons/fa";
interface IProps {
  theme: ThemeState;
  toggleTheme: typeof toggleTheme;
  auth: AuthState;
  destroySessionAuth: typeof destroySessionAuth;
}

function toastLogout(message: string, position: ToastPosition) {
  toast(message, {
    position,
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    rtl: false,
    draggable: true,
  });
}

const Header: React.FC<IProps> = ({
  theme,
  toggleTheme,
  auth,
  destroySessionAuth,
}) => {
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
                {auth.active ? (
                  <IconButton
                    onClick={() => {
                      toastLogout("Saindo ...", "top-right");
                      setTimeout(() => {
                        destroySessionAuth({});
                      }, 3000);
                    }}
                  >
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
              <MenuContainer
                menu={
                  <MenuContent>
                    <MenuList>
                      <MenuItem>
                        <Icons primary size={18} IconType={BsPersonLinesFill} />
                        <Text>perfil</Text>
                      </MenuItem>
                      <MenuItem>
                        <Icons primary size={18} IconType={MdSettings} />
                        <Text>configurações</Text>
                      </MenuItem>
                      <MenuItem>
                        <Icons primary size={18} IconType={IoMdHelp} />
                        <Text>ajuda</Text>
                      </MenuItem>
                      <Divider />
                      {auth.userName === undefined ? (
                        <MenuItem>
                          <Icons primary size={18} IconType={FaRegUserCircle} />
                          <Text>{auth.userName}</Text>
                        </MenuItem>
                      ) : (
                        <MenuItem>
                          <Icons primary size={18} IconType={FiLogIn} />
                          <Text>Login</Text>
                        </MenuItem>
                      )}
                    </MenuList>
                  </MenuContent>
                }
              >
                <MotionIcon>
                  <IconButton>
                    <FiMoreVertical size={24} />
                  </IconButton>
                </MotionIcon>
              </MenuContainer>
            </IconContainer>
          </ItemHeader>
        </TopContainer>
        <ToastContainer />
      </Container>
    </React.Fragment>
  );
};

const MapStateToProps = (state: ApplicationStateReducer) => ({
  theme: state.theme,
  auth: state.auth,
});

export default connect(MapStateToProps, { toggleTheme, destroySessionAuth })(
  Header
);
