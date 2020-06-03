import Ripple from "ripple-button";
import styled from "styled-components";
import { motion } from "framer-motion";

interface IProps {
  noElevation?: boolean;
  disabled?: boolean;
  solid?: boolean;
}

export const Button = styled(Ripple).attrs((props) => ({
  color: props.theme.color.background.secundary,
  duration: props.theme.time.ripple,
}))<IProps>`
  display: flex;
  color: ${(props) => props.theme.color.primary};
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
  color: props.theme.color.background.secundary,
  duration: props.theme.time.ripple,
}))<IProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 1;
  padding: 9px;
  border-radius: 50%;
  color: ${(props) => props.theme.color.primary};
  background-color: ${(props) =>
    props.solid ? props.theme.color.primary : "transparent"};
  cursor: pointer;
  :hover {
    color: ${(props) => props.theme.color.primary};
  }
`;

export const MotionIcon = styled(motion.div).attrs((props) => ({
  style: { cursor: "hover" },
  initial: { scale: 0 },
  animate: { rotate: 360, scale: 1 },
  transition: {
    type: "spring",
    stiffness: 260,
    delay: 0.5,
    damping: 20,
  },
  whileHover: {
    scale: 1.2,
    transition: { duration: 0.5 },
  },
  whileTap: { scale: 0.9 },
}))`
  color: ${(props) => props.theme.color.primary};
`;
