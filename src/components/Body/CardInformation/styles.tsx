import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-around;
`;

export const GroupItems = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 3rem;
  flex: 1;
  margin: 5px;
  align-items: center;
  :hover {
    background-color: #f5f5f5;
    border: 0;
    cursor: pointer;
    border-radius: 4px;
  }
`;

export const Text = styled.p`
  text-transform: uppercase;
  margin-left: 5px;
  color: #424242;
  font-weight: bold;
`;
