import Ripple from "ripple-button";
import styled from "styled-components";

interface IProps {
  noElevation: boolean;
}

export const Button = styled(Ripple).attrs((props) => ({
  color: props.theme.color.ripple,
  duration: props.theme.time.ripple,
}))<IProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: ${(props) => props.theme.style.padding};
  border-radius: ${(props) => props.theme.style.borderRadius};
  text-transform: uppercase;
  cursor: pointer;
  box-shadow: ${(props) =>
    !props.noElevation
      ? `0 1px 3px ${props.theme.color.ripple}, 0 1px 2px ${props.theme.color.ripple}`
      : "none"};
  :hover {
    color: ${(props) => props.theme.color.primary};
    box-shadow: ${(props) =>
      !props.noElevation
        ? `0 10px 20px ${props.theme.color.ripple}, 0 1px 2px ${props.theme.color.ripple}`
        : "none"};
  }
`;

export const IconButton = styled(Ripple).attrs((props) => ({
  color: props.theme.color.ripple,
  duration: props.theme.time.ripple,
}))`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 1;
  padding: 9px;
  border-radius: 50%;
  cursor: pointer;
  :hover{
    color: ${(props) => props.theme.color.primary};
  }
`;
