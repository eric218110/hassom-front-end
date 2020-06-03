import * as React from "react";
import {
  Container,
  ContentLeft,
  ContentRight,
  CardLogin,
  Title,
  BodyInputs,
  GroupInputs,
  LabelInputs,
  Inputs,
  ButtonLogin,
  SocialButtons,
  ButtonGroup,
  StyledContainerToast,
  LoadingContainer,
} from "./styles";
import { IoIosArrowForward } from "react-icons/io";
import { ReactSVG } from "react-svg";
import { AiOutlinePlus, AiOutlineInstagram } from "react-icons/ai";
import { FaGoogle, FaFacebookF, FaGithub } from "react-icons/fa";
import { MotionIcon, IconButton } from "../library/Button/styles";
import { toast, ToastPosition } from "react-toastify";
import loginBackground from "../../assets/login-background.svg";
import loading from "../../assets/loading.json";
import Header from "../Header";
import Lottie from "react-lottie";
import animationData from "../../assets/login-animated.json";
import "react-toastify/dist/ReactToastify.css";
import { ApplicationStateReducer } from "../../store";
import { connect } from "react-redux";
import { AuthState } from "../../store/auth/types.auth";
import { createSessionAuth } from "../../store/auth/actions.auth";
import { useHistory } from "react-router-dom";

const animatedOptions = {
  loop: true,
  autoplay: true,
  animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const loadingOptions = {
  loop: true,
  autoplay: true,
  animationData: loading,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

interface IProps {
  auth: AuthState;
  createSessionAuth: typeof createSessionAuth;
}

interface IStatesLogin {
  username: string;
  password: string;
}

interface IStateLoading {
  isLoading: boolean;
}

const LoginComponents: React.FC<IProps> = ({ auth, createSessionAuth }) => {
  const history = useHistory();

  const [input, setInput] = React.useState<IStatesLogin>({
    username: "",
    password: "",
  });

  const [loading, setLoading] = React.useState<IStateLoading>({
    isLoading: false,
  });

  function toastNotification(message: string, position: ToastPosition) {
    toast.error(message, {
      position,
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      rtl: false,
      pauseOnFocusLoss: true,
      draggable: true,
      pauseOnHover: true,
    });
  }

  function validateInputs() {
    if (
      input.username === "" ||
      input.password === "" ||
      input.password.length < 8
    ) {
      toastNotification("Campo email ou senha invalidos", "top-right");
    } else if (!input.username.match("@")) {
      toastNotification("Email invalido", "top-right");
    } else {
      setLoading({ isLoading: true });

      setTimeout(() => {
        createSessionAuth({
          userName: "Eric Silva Mendes",
          userToken: "sfvsknfsjnefkjbsefuisebf4tnlnegmw´4mt2",
          active: true,
        });
        history.push("/");
        setLoading({ isLoading: false });
      }, 3000);
    }
  }

  return (
    <React.Fragment>
      <Header />
      <Container>
        <ContentLeft>
          <Lottie options={animatedOptions} height={400} width={400}></Lottie>
        </ContentLeft>
        <ContentRight>
          <CardLogin>
            <Title>Olá, realize login</Title>
            <BodyInputs>
              <GroupInputs>
                <LabelInputs>Email</LabelInputs>
                <Inputs
                  placeholder={"informe seu email"}
                  value={input.username}
                  onChange={(event) =>
                    setInput({ ...input, username: event.target.value })
                  }
                />
              </GroupInputs>
              <GroupInputs>
                <LabelInputs>Password</LabelInputs>
                <Inputs
                  type="password"
                  placeholder={"informe sua senha"}
                  value={input.password}
                  onChange={(event) =>
                    setInput({ ...input, password: event.target.value })
                  }
                />
              </GroupInputs>
            </BodyInputs>
            {!loading.isLoading ? (
              <>
                <ButtonGroup>
                  <ButtonLogin onClick={validateInputs}>
                    Entrar
                    <IoIosArrowForward color={"#FFE"} size={24} />
                  </ButtonLogin>
                  <ButtonLogin secundary>
                    <AiOutlinePlus color={"#FFE"} size={24} />
                  </ButtonLogin>
                </ButtonGroup>
                <SocialButtons>
                  <MotionIcon>
                    <IconButton solid>
                      <FaGoogle color={"#FFE"} size={24} />
                    </IconButton>
                  </MotionIcon>
                  <MotionIcon>
                    <IconButton solid>
                      <FaFacebookF color={"#FFE"} size={24} />
                    </IconButton>
                  </MotionIcon>
                  <MotionIcon>
                    <IconButton solid>
                      <AiOutlineInstagram color={"#FFE"} size={24} />
                    </IconButton>
                  </MotionIcon>
                  <MotionIcon>
                    <IconButton solid>
                      <FaGithub color={"#FFE"} size={24} />
                    </IconButton>
                  </MotionIcon>
                </SocialButtons>
              </>
            ) : (
              <LoadingContainer>
                <Lottie options={loadingOptions} height={100} width={100} />
              </LoadingContainer>
            )}
          </CardLogin>
        </ContentRight>
      </Container>
      <ReactSVG
        style={{ position: "relative", zIndex: 2, top: 200 }}
        src={loginBackground}
      />
      <StyledContainerToast />
    </React.Fragment>
  );
};

const MapStateToProps = (state: ApplicationStateReducer) => ({
  auth: state.auth,
});

export default connect(MapStateToProps, { createSessionAuth })(LoginComponents);
