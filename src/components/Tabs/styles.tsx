import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: auto;
  width: ${(props) => props.theme.size.container};
`;

export const ContainerPanel = styled.div`
  border-radius: ${(props) => props.theme.style.borderRadius};
  display: flex;
  height: auto;
  justify-content: center;
  background-color: ${(props) => props.theme.color.background.default};
  flex-wrap: nowrap;
  flex-grow: 5;
`;

export const ContainerTabList = styled.div`
  ul {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  li p {
    z-index: 1;
    border-radius: ${(props) => props.theme.style.borderRadius};
    padding: 5px 40px;
    text-transform: uppercase;
    font-size: 14px;
    :hover {
      cursor: pointer;
    }
  }

  ul .selected {
    z-index: 1;
    border-bottom: ${(props) => props.theme.color.primary} 2.5px solid;
  }

  ul .selected p {
    color: ${(props) => props.theme.color.primary};
  }
`;

export const Divider = styled.div`
  height: 3px;
  width: 100%;
  margin: auto;
  background-color: ${(props) => props.theme.color.background.hover};
  margin-top: -2.5px;
`;

export const TitlePanel = styled.p`
  margin-top: -17px;
  margin-bottom: 15px;
  width: 30%;
  text-transform: uppercase;
  color: ${(props) => props.theme.color.primary};
`;
