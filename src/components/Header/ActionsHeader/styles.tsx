import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: ${(props) => props.theme.size.max};
  margin: auto;
  height: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
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
