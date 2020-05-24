import styled from "styled-components";

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

export const Text = styled.p`
  position: relative;
  border-radius: ${(props) => props.theme.style.borderRadius};
  text-transform: uppercase;
  color: ${(prpos) => prpos.theme.color.primary};
  font-weight: bold;
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

export const BottomContainer = styled.div`
  width: 100%;
  height: 7rem;
  display: flex;
  justify-content: center;
  align-self: center;
  align-items: center;
  bottom: 10px;
`;

export const ItemsBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  border-radius: 2px;
  text-transform: uppercase;
  border: none;
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  align-items: center;
`;

export const ContainerIcon = styled.div``;
