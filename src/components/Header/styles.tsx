import styled from "styled-components";
import { motion } from "framer-motion";
import {
  MenuButton,
  MenuItem as ItemMenu,
  MenuList as ListMenu,
} from "react-menu-list";

export const Container = styled.div`
  display: flex;
  width: ${(props) => props.theme.size.max};
  margin: auto;
  height: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: ${(props) => props.theme.size.container};
  flex-direction: row;
`;

export const ItemHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: auto;
  height: 40%;
`;
export const ItemsHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  padding: 10px;
`;

export const Text = styled(motion.div).attrs((props) => ({
  whileTap: { scale: 0.99 },
}))`
  position: relative;
  border-radius: ${(props) => props.theme.style.borderRadius};
  color: ${(prpos) => prpos.theme.color.primary};
`;

export const TextDecorated = styled(Text)`
  color: ${(prpos) => prpos.theme.color.text.secundary};
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-weight: inherit;
  font-style: italic;
  text-transform: lowercase;
  letter-spacing: 0.3rem;
`;

export const TextTitle = styled(Text)`
  padding: ${(props) => props.theme.style.padding};
  font-size: 32px;
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  align-items: center;
`;

export const MenuContainer = styled(MenuButton).attrs((props) => ({}))`
  background-color: transparent;
  border: none;
  z-index: 10;
`;

export const MenuContent = styled.div`
  border-radius: 10px;
  background-color: ${(props) => props.theme.color.background.default};
  box-shadow: 0 5px 10px ${(props) => props.theme.color.background.paper},
    0 1px 2px ${(props) => props.theme.color.background.paper};
  margin-top: 10px;
  z-index: 10;
`;

export const MenuItem = styled(ItemMenu)`
  z-index: 10;

  border-radius: 10px;
  padding: 10px 30px 10px 30px;
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  color: ${(props) => props.theme.color.primary};
  text-transform: uppercase;
  :hover {
    background-color: ${(props) => props.theme.color.background.secundary};
    cursor: pointer;
  }
`;

export const MenuList = styled(ListMenu)``;
