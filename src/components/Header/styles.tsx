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
  width: 10%;
`;
export const ItemsHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  padding: 10px;
`;

export const Text = styled.p`
  text-transform: uppercase;
  color: ${(prpos) => prpos.theme.color.text.default};
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
  font-size: 32px;
`;

export const Divider = styled.div`
  background-color: ${(props) => props.theme.color.text.secundary};
  height: 16px;
  width: 1px;
  margin: 0 10px;
`;

export const BottomContainer = styled.div`
  width: 40%;
  height: 7rem;
  display: flex;
  justify-content: space-between;
  align-self: center;
  align-items: center;
`;

export const ItemsBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60%;
  width: 20%;
  font-weight: bold;
  color: ${(prpos) => prpos.theme.color.text.default};
  :hover {
    background-color: ${(prpos) => prpos.theme.color.background.hover};
    color: ${(props) => props.theme.color.text.secundary};
    border: 0;
    cursor: pointer;
    border-radius: 4px;
  }
`;
