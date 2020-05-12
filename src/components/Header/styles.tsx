import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 1000px;
  margin: auto;
  height: 150px;
  display: flex;
  flex-direction: column;
  align-items: end;
`;

export const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
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
  color: #424242;
  font-weight: bold;
  :hover {
    color: #616161;
    cursor: default;
  }
`;

export const TextDecorated = styled(Text)`
  color: #616161;
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
  background-color: #e0e0e0;
  height: 16px;
  width: 1px;
  margin: 0 10px;
`;

export const BottomContainer = styled.div`
  width: 70%;
  height: 100%;
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
  :hover {
    background-color: #F5F5F5;
    border: 0;
    cursor: pointer;
    border-radius: 4px;
  }
`;
