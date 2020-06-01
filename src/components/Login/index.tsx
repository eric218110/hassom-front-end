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
} from "./styles";
import Header from "../Header";
import Lottie from "react-lottie";
import { IoIosArrowForward } from "react-icons/io";
import animationData from "./animated.json";
import { AiOutlinePlus, AiOutlineInstagram } from "react-icons/ai";
import { FaGoogle, FaFacebookF, FaGithub } from "react-icons/fa";
import { MotionIcon, IconButton } from "../library/Button/styles";

const animatedOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

export const LoginComponents: React.FC = () => {
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
                <Inputs />
              </GroupInputs>
              <GroupInputs>
                <LabelInputs>Password</LabelInputs>
                <Inputs />
              </GroupInputs>
            </BodyInputs>
            <ButtonGroup>
              <ButtonLogin>
                Entrar
                <IoIosArrowForward color={"#FFE"} size={24} />
              </ButtonLogin>
              <ButtonLogin secundary>
                Cadastrar
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
          </CardLogin>
        </ContentRight>
      </Container>
    </React.Fragment>
  );
};
