import styled from "styled-components";
import Ripple from "ripple-button";

interface IPropsButtons {
  secundary?: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ContentLeft = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;
export const ContentRight = styled.div`
  flex: 1;
  align-items: center;
  display: flex;
  justify-content: start;
`;

export const CardLogin = styled.div`
  background: linear-gradient(
    16deg,
    ${(props) => props.theme.color.background.secundary} 60%,
    ${(props) => props.theme.color.background.secundaryVariant}
  );
  border-radius: 25px;
  height: 100%;
  width: 75%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px 10% 10px 10%;
  box-shadow: 0 10px 20px ${(props) => props.theme.color.background.secundary},
    0 1px 2px ${(props) => props.theme.color.background.secundaryVariant};
`;

export const Title = styled.h4`
  margin-top: 10px;
  font-size: 22;
  letter-spacing: 1px;
  color: ${(props) => props.theme.color.secundary};
`;
export const GroupInputs = styled.div`
  display: flex;
  flex-direction: column;
  margin: 40px 0 40px 0;
`;

export const BodyInputs = styled.div`
  width: 100%;
`;

export const LabelInputs = styled.label`
  color: ${(props) => props.theme.color.secundary};
  font-size: 22;
  margin-bottom: 5px;
  letter-spacing: 1px;
  font-weight: bold;
`;

export const Inputs = styled.input`
  border-radius: ${(props) => props.theme.style.borderRadius};
  border: none;
  height: 40px;
  padding: 0 5px 0 5px;
  font-weight: bold;
  letter-spacing: 1px;
  background-color: ${(props) => props.theme.color.background.secundaryVariant};
`;
export const ButtonLogin = styled(Ripple).attrs((props) => ({
  color: props.theme.color.ripple,
  duration: props.theme.time.ripple,
}))<IPropsButtons>`
  display: flex;
  padding: 0 20px 0 20px;
  color: #fff;
  background-color: ${(props) =>
    props.secundary
      ? props.theme.color.primary
      : props.theme.color.secundaryVariant};
  margin: 0 3px 0 3px;
  padding: 10px 30px 10px 30px;
  width: 100%;
  border-radius: ${(props) => props.theme.style.borderRadius};
  box-shadow: 0 5px 10px
      ${(props) =>
        props.secundary
          ? props.theme.color.primary
          : props.theme.color.secundaryVariant},
    0 1px 2px
      ${(props) =>
        props.secundary
          ? props.theme.color.primary
          : props.theme.color.secundaryVariant};
  align-items: center;
  justify-content: space-around;
  cursor: pointer;
`;

export const ButtonGroup = styled.div`
  display: flex;
  width: 100%;
`;

export const SocialButtons = styled.div`
  margin: 40px;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 50px 0 50px;
  justify-content: space-around;
`;
